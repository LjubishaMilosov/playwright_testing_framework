import { getEmulatorConfig } from '../setup/browserBehavior';
import config from '../setup/config';
import { ICustomWorld } from '../../pages/world';
import { PomProvider } from '../../pages/web/pomProvider';

import { PomProviderMobile } from '../../pages/mobile/pomProviderMobile';
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  ITestCaseHookParameter,
  Status,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  LaunchOptions,
  webkit,
  WebKitBrowser,
} from '@playwright/test';

declare global {
  // eslint-disable-next-line no-var
  var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
}

setDefaultTimeout(process.env.PWDEBUG ? -1 : config.defaultTimeout);

BeforeAll(async function () {
  const commonBrowserOptions: LaunchOptions = {
    headless: config.runHeadless,
    args: ['--start-maximized', '-start-maximized'],
    slowMo: config.runSlow,
  };

  switch (config.browser) {
    case 'firefox':
      global.browser = await firefox.launch({ ...commonBrowserOptions });
      break;
    case 'webkit':
      global.browser = await webkit.launch({ ...commonBrowserOptions });
      break;
    default:
      global.browser = await chromium.launch({ ...commonBrowserOptions });
  }
});

Before(async function (this: ICustomWorld, scenario: ITestCaseHookParameter) {
  // Set the viewport options based on the HEADLESS environment variable
  const viewportOptions = process.env.HEADLESS === 'true' ? { width: 1600, height: 800 } : null;

  this.context = await global.browser.newContext({
    viewport: viewportOptions,
    ...getEmulatorConfig(scenario),
    recordVideo: config.recordVideos ? { dir: `out/videos/` } : undefined,
  });

  // Tracing Start
  if (config.trace) {
    this.context.tracing.start({
      name: scenario.pickle.name + scenario.pickle.id,
      title: scenario.pickle.name,
      sources: true,
      screenshots: true,
      snapshots: true,
    });
  }

  this.page = await this.context.newPage();
  // Playwright default timeout
  this.page?.setDefaultTimeout(process.env.PWDEBUG ? -1 : config.defaultTimeout);

  this.pagesObj = new PomProvider(this.page, this.context);
  this.pagesObjMobile = new PomProviderMobile(this.page, this.context);
});

After(async function (this: ICustomWorld, { result, pickle }: ITestCaseHookParameter) {
  // Attached text (status/duration)
  if (result) {
    await this.attach(`Status: ${result?.status}. Duration: ${result?.duration.seconds}s`);
  }

  // Tracing Stop
  const tracePath = `out/trace/${pickle.id}.zip`;
  if (config.trace) {
    await this.context?.tracing.stop({ path: tracePath });
  }

  // screenshot after FAIL
  if (result?.status !== Status.PASSED) {
    const screenshotPage = this.popupPage ?? this.page;
    if (screenshotPage) {
      const screenshotOptions = { path: `out/screenshots/${pickle.name}.png`, type: 'png' as const };
      const screenshot = await screenshotPage.screenshot(screenshotOptions);
      screenshot && (await this.attach(screenshot, 'image/png'));
    }
    await this.attach(`Trace file! Run this command: \n npx playwright show-trace ${tracePath}`);
  }

  await this.page?.close();
  await this.context?.close();
  await this.popupPage?.close();
});

AfterAll(async function () {
  await global.browser.close();
});

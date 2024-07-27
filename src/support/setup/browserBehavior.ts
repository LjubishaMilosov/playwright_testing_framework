import config from './config';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { devices } from '@playwright/test';

export function getEmulatorConfig(scenario: ITestCaseHookParameter) {
  const isMob = scenario.pickle.tags.some((tag) => tag.name === '@mobile');
  const device = isMob ? devices[config.emulator] : null;
  const isEmulationEnabled = process.env.EMULATION;

  // Check if running on mobile without emulation enabled
  if (isMob && !isEmulationEnabled) {
    throw new Error(`Emulation is not enabled!`);
  }
  // Check whether a string is a valid device name
  if (!(config.emulator in devices)) {
    throw new Error(`Invalid emulator: ${config.emulator}.`);
  }
  return device;
}

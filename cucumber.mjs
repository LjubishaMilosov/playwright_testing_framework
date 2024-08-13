import { checkFileExists } from './src/support/utils/checkFileExists.mjs';

const featureOrder = [
  'web/login.feature',
  'web/fixtureTree.feature',
  'web/playerInfo.feature',
  'web/registration.feature',
  'mobile/loginMobile.feature',
   
];

const config = {
  requireModule: ['ts-node/register'],
  paths: featureOrder.map((feature) => `features/${feature}`),
  require: ['src/**/*.ts'],
  format: ['html:out/reports/cucumber-report.html', 'progress-bar', 'junit:out/reports/junit-report.xsd'],
  formatOptions: { snippetInterface: 'async-await' },
  // parallel: 2,
};

config.paths.forEach(checkFileExists);

export default config;

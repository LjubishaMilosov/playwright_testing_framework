import { checkFileExists } from './src/support/utils/checkFileExists.mjs';

const featureOrder = [
//   'web/login.feature',
//   'web/fixtureTree.feature',
//   'web/widgets.feature',
//   'web/statistics.feature',
//   'web/livetracker.feature',
//   'web/matchDetails.feature',
//   'web/singlePlacement.feature',
//   'web/combiPlacement.feature',
//   'web/singlePlacementLive.feature',
//   'web/combiPlacementLive.feature',
//   'web/systemPlacement.feature',
//   'web/quickBet.feature',
//   'web/quickBetLive.feature',
//   'web/rebet.feature',
//   'web/bonusCalculation.feature',
//   'web/myBets.feature',
//   'mobile/loginMobile.feature',
//   'mobile/fixtureTreeMobile.feature',
//   'mobile/widgetsMobile.feature',
//   'mobile/liveTrackerMobile.feature',
//   'mobile/statisticsMobile.feature',
//   'mobile/singlePlacementMobile.feature',
//   'mobile/singlePlacementLiveMobile.feature',
//   'mobile/combiPlacementMobile.feature',
//   'mobile/combiPlacementLiveMobile.feature',
//   'mobile/matchDetailsMobile.feature',
//   'mobile/singlePlacementMobile.feature',
//   'mobile/systemPlacementMobile.feature',
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

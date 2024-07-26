import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const config = {
  baseUrl: process.env.BASE_URL || 'https://qa.btobet.net/',
  browser: process.env.BROWSER || chromium,
  emulator: process.env.EMULATION || 'browser',
  runHeadless: Boolean(process.env.HEADLESS) || false,
  recordVideos: process.env.PWVIDEO || false,
  defaultTimeout: 60 * 1000,
  runSlow: 0,
  trace: Boolean(process.env.TRACE) || false,
};

export default config;

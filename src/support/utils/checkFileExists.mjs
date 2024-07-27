import * as fs from 'fs';

export function checkFileExists(path) {
  if (!fs.existsSync(path)) {
    throw new Error(`${path} does not exist.`);
  }
}

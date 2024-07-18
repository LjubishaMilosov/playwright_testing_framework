import * as credentials from './credentials.json';
import { ICustomWorld } from '../../pages/world';

interface Player {
  username: string;
  password: string;
}

export const findCredentialsForEnv = (iCustomWorld: ICustomWorld): Player | null => {
  for (const key in credentials) {
    if (Object.prototype.hasOwnProperty.call(credentials, key) && iCustomWorld.page?.url().includes(key)) {
      return credentials[key as keyof typeof credentials] as Player;
    }
  }
  throw new Error(`Credentials not found for the specified environment in the configuration`);
};
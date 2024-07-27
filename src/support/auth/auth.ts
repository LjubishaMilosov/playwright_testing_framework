import * as credentials from './credentials.json';
import { ICustomWorld } from '../../pages/world';

interface Player {
  
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  invalidUsername: string; 
  invalidPassword: string;

<<<<<<< HEAD
=======

>>>>>>> 3372c574aea4f789f80c4c636b3f938acee40f84
}

export const findCredentialsForEnv = (iCustomWorld: ICustomWorld): Player | null => {
  for (const key in credentials) {
    if (Object.prototype.hasOwnProperty.call(credentials, key) && iCustomWorld.page?.url().includes(key)) {
      return credentials[key as keyof typeof credentials] as Player;
    }
  }
  throw new Error(`Credentials not found for the specified environment in the configuration`);
};
import { atom } from 'jotai';

export interface IProfile {
  id: number;
  // role: string;
  // identityNumber: number;
  email: string;
  // status: string;
  fullName: string;
  // school: {
  //   name: string;
  // };
}

export const profileAtom = atom<Partial<IProfile>>({});

export interface Professions {
  class: string,
  isMain: false,
  level: number,
  professionsDescription: string,
};

export interface Character {
  name: string,
  characterDescription: string,
  professions: [Professions]
};

export interface Account {
  login: string,
  password: string,
  description: string,
  characters: [Character]
};

export type СopyToClipboard = () => void;

export type Accounts = {
  accounts: [Account]
};
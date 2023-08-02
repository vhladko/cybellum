export interface PostLoginQueryArg {
  username: string;
  password: string;
}

export interface PostLoginResult {
  accessToken: string;
  user: User;
}

export interface User {
  email: string,
  id: number;
}

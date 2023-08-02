export interface PostLoginQueryArg {
  username: string;
  password: string;
}

export interface PostLoginResult {
  accessToken: string;
  username: string;
}

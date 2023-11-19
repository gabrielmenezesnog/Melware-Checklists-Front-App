export interface AuthState {
  readonly response: User | null;
  readonly loggedIn: boolean;
  readonly loading: boolean | null;
  readonly error: boolean | null;
  readonly message?: string | null;
  data?: object | null;
}

export interface User {
  user: string | null;
  senha: string | null;
}

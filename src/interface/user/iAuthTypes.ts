export interface AuthState {
  readonly user: User | null;
  readonly response: User | null;
  readonly loggedIn: boolean;
  readonly loading: boolean | null;
  readonly error: boolean | null;
  readonly message?: string | null;
}

export interface User {
  email: string | null;
  senha: string | null;
}

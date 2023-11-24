export interface iResponse {
  readonly response: object | null;
  readonly loading: boolean | null;
  readonly error: boolean | null;
  readonly message?: string | null;
}

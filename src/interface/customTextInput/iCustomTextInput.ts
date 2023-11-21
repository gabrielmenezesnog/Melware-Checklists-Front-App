export interface iCustomTextInput {
  value: string | undefined;
  setValue: (text: string) => void;
  placeholder?: string | undefined;
  isPassword?: boolean;
}

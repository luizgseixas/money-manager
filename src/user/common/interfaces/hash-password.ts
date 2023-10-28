export interface HashPassword {
  execute: (password: string) => Promise<string>;
}

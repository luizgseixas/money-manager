export type UserProps = {
  name: string;
  email: string;
  document: string;
  password: string;
};

export class User {
  constructor(props: UserProps) {
    Object.assign(this, props);
  }

  id: string;
  name: string;
  email: string;
  document: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deleteAt?: Date | null;
}

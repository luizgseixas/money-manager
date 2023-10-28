export class User {
  id: string;
  name: string;
  email: string;
  documents: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date | null;
}

import { User } from 'src/user/entities/user.entity';

export interface GetUserByDocumentOrEmailRepository {
  getByDocumentOrEmail: (
    document?: string,
    email?: string,
  ) => Promise<User | null>;
}

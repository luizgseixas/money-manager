import { UserProps, User } from 'src/user/entities/user.entity';

export interface SaveUserRepository {
  save: (user: UserProps) => Promise<void>;
}

export interface FindUserByDocumentOrEmailRepository {
  findByDocumentOrEmail: (
    document?: string,
    email?: string,
  ) => Promise<User | null>;
}

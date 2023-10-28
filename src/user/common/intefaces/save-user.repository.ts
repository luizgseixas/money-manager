import { UserProps } from 'src/user/entities/user.entity';

export interface SaveUserRepository {
  save: (user: UserProps) => Promise<void>;
}

import { CreateUserDto } from 'src/user/dto/create-user.dto';

export interface RegisterUserUsecase {
  execute: (user: CreateUserDto) => Promise<void>;
}

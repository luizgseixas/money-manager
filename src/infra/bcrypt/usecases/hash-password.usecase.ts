import { Injectable } from '@nestjs/common';
import { HashPassword } from 'src/user/common/interfaces/hash-password';
import { hash } from 'bcrypt';

@Injectable()
export class BcryptHashPasswordUsecase implements HashPassword {
  public async execute(password: string): Promise<string> {
    return hash(password, Number(process.env.HASH_SALT ?? 10));
  }
}

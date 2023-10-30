import { validateCpf } from '../../utils/validate-cpf.util';
import { validateEmail } from '../../utils/validate-email.util';

export type UserProps = {
  id?: string;
  name: string;
  email: string;
  document: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date | null;
};

export class User {
  constructor(props: UserProps) {
    Object.assign(this, props);
    this.isValid();
  }

  id: string;
  name: string;
  email: string;
  document: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deleteAt?: Date | null;

  private isValid() {
    const isValidEmail = validateEmail(this.email);
    if (!isValidEmail) throw new Error('Email invalido');
    const isValidDocument = validateCpf(this.document);
    if (!isValidDocument) throw new Error('Documento invalido');
  }
}

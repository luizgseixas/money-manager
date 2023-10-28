export class MoneyOutput {
  id: string;
  userId: string;
  ownerId: string;
  outputTypeId: string;
  amount: number;
  installments?: number | null;
  justification: string;
  createdAt: Date;
  dueDate: Date | null;
  paidAt: Date | null;
}

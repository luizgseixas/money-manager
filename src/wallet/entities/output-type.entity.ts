export enum OUTPUT_TYPE {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PIX = 'pix',
  MONEY = 'money',
  BILLET = 'billet',
}

export class OutputType {
  id: string;
  userId: string;
  type: OUTPUT_TYPE;
  description: string;
  institution?: string | null;
  amountLimit?: number | null;
  goodDay?: string | null;
  dueDate?: string | null;
}

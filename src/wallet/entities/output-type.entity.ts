import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum OUTPUT_TYPE {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PIX = 'pix',
  MONEY = 'money',
  BILLET = 'billet',
}

@Entity('tb_output_type')
export class OutputType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ type: 'enum', enum: OUTPUT_TYPE })
  type: OUTPUT_TYPE;

  @Column()
  description: string;

  @Column('character varying', { nullable: true })
  institution?: string | null;

  @Column({ name: 'amount_limit', type: 'float64', nullable: true })
  amountLimit?: number | null;

  @Column({ name: 'good_day', nullable: true })
  goodDay?: string | null;

  @Column({ name: 'due_date', nullable: true })
  dueDate?: string | null;
}

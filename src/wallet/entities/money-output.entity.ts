import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_money_output')
export class MoneyOutput {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'owner_id' })
  ownerId: string;

  @Column({ name: 'output_type_id' })
  outputTypeId: string;

  @Column({ type: 'float64' })
  amount: number;

  @Column({ nullable: true })
  installments?: number | null;

  @Column({ type: 'character varying' })
  justification: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @Column({ name: 'due_date', type: 'datetime' })
  dueDate: Date | null;

  @Column({ name: 'paid_at', type: 'datetime', nullable: true })
  paidAt: Date | null;
}

import { Answer } from 'src/answer/entity/answer.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  content: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}

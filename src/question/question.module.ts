import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entity/question.entity';
import { QuestionRepository } from './question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository, Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}

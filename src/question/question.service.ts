import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionDto } from './dto/question.dto';
import { Question } from './entity/question.entity';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(question: QuestionDto): Promise<void> {
    try {
      console.log('service ', question);
      this.questionRepository.save(question);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }

  findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  findOne(id: string): Promise<Question> {
    return this.questionRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.questionRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './entity/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  findAll(): Promise<Answer[]> {
    return this.answerRepository.find();
  }

  findOne(id: string): Promise<Answer> {
    return this.answerRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.answerRepository.delete(id);
  }
}

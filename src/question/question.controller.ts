import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('/create')
  createQueston(@Body() question: QuestionDto): Promise<void> {
    console.log('controller ', question);
    return this.questionService.createQuestion(question);
  }
}

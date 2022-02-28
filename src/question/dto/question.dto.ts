import { IsOptional, IsString } from 'class-validator';

export class QuestionDto {
  @IsString()
  @IsOptional()
  content: string;
}

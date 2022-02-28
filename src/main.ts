import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .useGlobalPipes(
      new ValidationPipe({
        //  automatically transform payloads to be objects typed according to their DTO classes.
        transform: true,
        // any property not included in the whitelist is automatically stripped from the resulting object
        //property can be automatically removed from the resulting DTO.
        whitelist: false,
      }),
    )
    .enableCors();
  await app.listen(3000);
}
bootstrap();

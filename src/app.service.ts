import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    console.log('config service works ', this.configService.get('DB_HOST'));
    console.log('config service works ', this.configService.get('DB_PORT'));
    return 'Hello World!';
  }
}

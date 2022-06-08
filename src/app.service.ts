import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SqlReader } from 'node-sql-reader';
import * as path from 'path';
import { getConnection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    this.initTestData();
    console.log('config service works ', this.configService.get('DB_HOST'));
    console.log('config service works ', this.configService.get('DB_PORT'));
    return 'Hello World!';
  }

  async initTestData() {
    let queries = SqlReader.readSqlFile(
      path.join(__dirname, '../test_data.sql'),
    );
    for (let query of queries) {
      // replace it with your query runner
      // SomeQuerryRunner.runQuerry(query)

      // run test_data.sql script for load data to db
      await getConnection().query(query);
    }
  }
}

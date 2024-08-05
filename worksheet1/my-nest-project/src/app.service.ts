import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSentence(): string {
    return 'OIIIII OIIIII BAKAAAAAA!!!!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
  async getSong() {
    return 'get song!';
  }
}

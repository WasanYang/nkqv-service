import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SongService } from './../service/song.service';

@Controller('v1/song')
export class SongController {
  constructor(private readonly songService: SongService) {}
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getSong() {
    return this.songService.getSong();
  }
}

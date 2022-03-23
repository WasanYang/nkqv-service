import { HttpModule, Module } from '@nestjs/common';
import { SongController } from './controller/song.controller';
import { SongService } from './service/song.service';

@Module({
  imports: [HttpModule],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}

import { InjectQueue } from '@nestjs/bullmq';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bullmq';

@Controller('video')
export class VideoController {
  constructor(@InjectQueue('video') private readonly videoQueue: Queue) {}

  @Post('process')
  async processVideo() {

    await this.videoQueue.add('process', {
      fileName: 'the-best-video',
      fileType: 'mp4',
      fileSize: '123456',
    });

    return {
      message: 'Video processing job added to queue',
    };
  }
}

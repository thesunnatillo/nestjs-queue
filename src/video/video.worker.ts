import { OnQueueEvent, OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('video', { concurrency: 3 })
export class VideoProcessor extends WorkerHost {
  
  async process(job: Job) {
    // Task processing logic here!
    console.log('Got a new job:', job.id);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(job.name)


    console.log(`Job with id ${job.id} COMPLATE`);

    // throw Error("Video Crash.")
  }

  @OnWorkerEvent('failed')
  async field() {
    console.log("Failed, don't worry I am back:)")
  }
}

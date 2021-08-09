import { Module } from '@nestjs/common';
import { LazerjobsService } from './lazerjobs.service';

@Module({
  providers: [LazerjobsService]
})
export class LazerjobsModule {}

import { Module } from '@nestjs/common';
import { ClientResService } from './client-res.service';
import { ClientResController } from './client-res.controller';

@Module({
  controllers: [ClientResController],
  providers: [ClientResService],
})
export class ClientResModule {}

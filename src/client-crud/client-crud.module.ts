import { Module } from '@nestjs/common';
import { ClientCrudService } from './client-crud.service';
import { ClientCrudController } from './client-crud.controller';

@Module({
  controllers: [ClientCrudController],
  providers: [ClientCrudService],
})
export class ClientCrudModule {}

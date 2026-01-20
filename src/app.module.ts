import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientCrudModule } from './client-crud/client-crud.module';
import { ConfigModule } from '@nestjs/config'
import { ClientResModule } from './client-res/client-res.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule, ClientCrudModule, ClientResModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

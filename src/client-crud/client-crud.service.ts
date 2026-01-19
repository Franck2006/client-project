import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientCrudService {
  constructor(private prisma: PrismaService){}
  async create(createClientCrudDto: Prisma.ClientCreateInput) {
    return await this.prisma.client.create({data: createClientCrudDto});
  }

  findAll() {
    return `This action returns all clientCrud`;
  }

  findOne(id: string) {
    return `This action returns a #${id} clientCrud`;
  }

  update(id: string, updateClientCrudDto: Prisma.ClientUpdateInput) {
    return `This action updates a #${id} clientCrud`;
  }

  remove(id: string) {
    return `This action removes a #${id} clientCrud`;
  }
}

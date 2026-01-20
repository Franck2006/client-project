import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientCrudService {
  constructor(private prisma: PrismaService){}
  async create(createClientCrudDto: Prisma.ClientCreateInput) {
    return await this.prisma.client.create({data: createClientCrudDto});
  }

  async findAll() {
    return  await this.prisma.client.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.client.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: string, updateClientCrudDto: Prisma.ClientUpdateInput) {
    return await this.prisma.client.update({
      where:{
        id
      },
      data: updateClientCrudDto
      
    });
  }

  async remove(id: string) {
    return await this.prisma.client.delete({
      where: {
        id
      }
    })
  }
}

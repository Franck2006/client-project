import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientCrudService } from './client-crud.service';
import { Prisma } from 'generated/prisma/browser';

@Controller('client-crud')
export class ClientCrudController {
  constructor(private readonly clientCrudService: ClientCrudService) {}

  @Post()
  create(@Body() createClientCrudDto: Prisma.ClientCreateInput) {
    return this.clientCrudService.create(createClientCrudDto);
  }

  @Get()
  findAll() {
    return this.clientCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientCrudService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientCrudDto: Prisma.ClientUpdateInput) {
    return this.clientCrudService.update(id, updateClientCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientCrudService.remove(id);
  }
}

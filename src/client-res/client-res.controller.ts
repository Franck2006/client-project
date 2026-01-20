import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientResService } from './client-res.service';
import { CreateClientReDto } from './dto/create-client-re.dto';
import { UpdateClientReDto } from './dto/update-client-re.dto';

@Controller('client-res')
export class ClientResController {
  constructor(private readonly clientResService: ClientResService) {}

  @Post()
  create(@Body() createClientReDto: CreateClientReDto) {
    return this.clientResService.create(createClientReDto);
  }

  @Get()
  findAll() {
    return this.clientResService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientResService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientReDto: UpdateClientReDto) {
    return this.clientResService.update(+id, updateClientReDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientResService.remove(+id);
  }
}

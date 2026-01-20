import { Injectable } from '@nestjs/common';
import { CreateClientReDto } from './dto/create-client-re.dto';
import { UpdateClientReDto } from './dto/update-client-re.dto';

@Injectable()
export class ClientResService {
  create(createClientReDto: CreateClientReDto) {
    return 'This action adds a new clientRe';
  }

  findAll() {
    return `This action returns all clientRes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientRe`;
  }

  update(id: number, updateClientReDto: UpdateClientReDto) {
    return `This action updates a #${id} clientRe`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientRe`;
  }
}

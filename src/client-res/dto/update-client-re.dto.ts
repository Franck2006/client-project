import { PartialType } from '@nestjs/mapped-types';
import { CreateClientReDto } from './create-client-re.dto';

export class UpdateClientReDto extends PartialType(CreateClientReDto) {}

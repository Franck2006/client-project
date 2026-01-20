import { Test, TestingModule } from '@nestjs/testing';
import { ClientResController } from './client-res.controller';
import { ClientResService } from './client-res.service';

describe('ClientResController', () => {
  let controller: ClientResController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientResController],
      providers: [ClientResService],
    }).compile();

    controller = module.get<ClientResController>(ClientResController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

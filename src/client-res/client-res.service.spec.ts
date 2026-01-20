import { Test, TestingModule } from '@nestjs/testing';
import { ClientResService } from './client-res.service';

describe('ClientResService', () => {
  let service: ClientResService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientResService],
    }).compile();

    service = module.get<ClientResService>(ClientResService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

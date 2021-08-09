import { Test, TestingModule } from '@nestjs/testing';
import { LazerjobsService } from './lazerjobs.service';

describe('LazerjobsService', () => {
  let service: LazerjobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazerjobsService],
    }).compile();

    service = module.get<LazerjobsService>(LazerjobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

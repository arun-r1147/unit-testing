import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  const logger = new LoggerService();
  let service = new CalculatorService(logger);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers',()=>{
    const result = service.add(2,3);
    expect(result).toBe(5)
  })
  it('should subtract 2 numbers',()=>{
    const result = service.subtract(5,3);
    expect(result).toBe(2)
  })
});

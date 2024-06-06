import { CalculatorService } from './calculator.service';
// import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  // const logger = new LoggerService();

  let service: CalculatorService, logger: any;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(logger);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });
  it('should subtract 2 numbers', () => {
    const result = service.subtract(5, 3);
    expect(result).toBe(2);
  });
  it('should multiply 2 numbers', () => {
    const result = service.multiply(5, 3);
    expect(result).toBe(15);
  });
});

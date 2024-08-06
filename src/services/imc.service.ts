import { IMCResult } from '../interfaces/imc.interface';
import { IIMCStrategy } from '../interfaces/imc.strategy';

export class IMCService {
  private strategy: IIMCStrategy;

  constructor(strategy: IIMCStrategy) {
    this.strategy = strategy;
  }

  getImc(weight: number, height: number): IMCResult {
    return this.strategy.calculate(weight, height);
  }
}

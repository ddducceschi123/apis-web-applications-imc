import { IMCResult } from '../interfaces/imc.interface';
import { IIMCStrategy } from '../interfaces/imc.strategy';

export class IMCCalculator implements IIMCStrategy {
  private ranges = [
    { min: 0, max: 18.5, category: 'Magreza' },
    { min: 18.5, max: 24.9, category: 'Normal' },
    { min: 24.9, max: 30, category: 'Sobrepeso' },
    { min: 30, max: Infinity, category: 'Obesidade' }
  ];

  calculate(weight: number, height: number): IMCResult {
    const imcValue = weight / (height * height);
    const range = this.ranges.find(r => imcValue >= r.min && imcValue < r.max);
    const category = range ? range.category : 'Desconhecido';
    return { value: parseFloat(imcValue.toFixed(2)), category };
  }
}

import { IMCResult } from '../interfaces/imc.interface';

export interface IIMCStrategy {
    calculate(weight: number, height: number): IMCResult;
}
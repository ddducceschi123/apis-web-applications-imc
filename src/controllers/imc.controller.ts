import { Request, Response } from 'express';
import { IMCService } from '../services/imc.service';
import { IMCCalculator } from '../strategies/imc.strategy';

export class IMCController {
  private imcService: IMCService;

  constructor() {
    this.imcService = new IMCService(new IMCCalculator());
  }

  getImc(req: Request, res: Response): void {
    const { weight, height } = req.query;
    if (!weight || !height) {
      res.status(400).send('É obrigatório informa o Peso e a Altura');
      return;
    }

    const weightNumber = parseFloat(weight as string);
    const heightNumber = parseFloat(height as string);

    const imcResult = this.imcService.getImc(weightNumber, heightNumber);
    res.send(`Seu IMC é ${imcResult.value} - ${imcResult.category}`);
  }
}

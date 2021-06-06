import { Component, OnInit } from '@angular/core';
import { IMCPerson } from 'src/app/models/IMC.entity';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  imc = 0.0;
  peso: 0.0;
  altura: 0.0;

  listaImcs: IMCPerson[] = [];

  constructor() {}

  calculateImc() {
    console.log('chamando');
    const imcCalc = this.peso / (this.altura * this.altura);
    this.imc = imcCalc;
    return imcCalc.toFixed(2);
  }

  adicionar() {
    let newImc: IMCPerson;
    newImc = {
      altura: this.altura,
      peso: this.peso,
      imc: this.imc,
    };

    this.listaImcs.push(newImc);
  }

  deletarImc(imcToDelete: IMCPerson) {
    const isPresent = this.listaImcs.findIndex((x) => x === imcToDelete);
    if (isPresent !== -1) {
      this.listaImcs.splice(isPresent, 1);
    }
  }

  ngOnInit(): void {}
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMCPerson } from 'src/app/models/IMC.entity';

@Component({
  selector: 'app-historyIMCItem',
  templateUrl: './historyIMCItem.component.html',
  styleUrls: ['./historyIMCItem.component.scss'],
})
export class HistoryImcItemComponent {
  @Input() imc: IMCPerson;

  @Output() solicitouDelecao = new EventEmitter<IMCPerson>();

  deletarImc() {
    this.solicitouDelecao.emit(this.imc);
  }

  constructor() {}
}

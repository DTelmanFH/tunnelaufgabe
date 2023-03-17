import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-strecke-eingabe',
  templateUrl: './strecke-eingabe.component.html',
  styleUrls: ['./strecke-eingabe.component.scss']
})
export class StreckeEingabeComponent {

  @Output() handOverStreckeEmitter = new EventEmitter();

  public strecke: string = "";

  handOverStreckeToParentComponent() {
    this.handOverStreckeEmitter.emit(this.strecke);
  }

  manipulateStrecke(action: string) {

    if (this.strecke.length >= 500000) return;
    switch(action) {
      case 'addNoTel':
        this.strecke += '-';
        break;
      case 'addTel':
        const anzahlX = this.strecke.match(/X/g);
        if (anzahlX === null || anzahlX.length < 1000) {
          //bis 1000 Telefone
          this.strecke += 'X';
        }
        break;
      case 'undo':
        this.strecke = this.strecke.slice(0, -1);
        break;
      case 'remove':
        this.strecke = '';
        break;
    }
    this.handOverStreckeToParentComponent();
  }
}

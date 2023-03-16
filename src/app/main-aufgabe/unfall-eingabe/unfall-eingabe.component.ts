import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export interface TunnelAbschnittModel{
  index: number;
  streckenTyp: string;
  richtung: RichtungEnum;
  text: string;
}

export enum RichtungEnum{
  mallorca = 'Mallorca',
  barcelona = 'Barcelona',
  telefon = 'Telefon',
  undefined = 'undefiniert'
}

@Component({
  selector: 'app-unfall-eingabe',
  templateUrl: './unfall-eingabe.component.html',
  styleUrls: ['./unfall-eingabe.component.scss']
})
export class UnfallEingabeComponent implements OnChanges{

  @Input() curStrecke: string = '';
  @Output() handOverUnfallOrteEmitter = new EventEmitter();

  public curInput: number = 0;
  public unfallorte: TunnelAbschnittModel[] = [];


  changed(){
    console.log('curInput: ', this.curInput);
  }

  addUnfallOrt(){

    if(this.unfallorte.find((ort) => ort.index === this.curInput)){
      //keine doppelt
      return;
    }

    this.unfallorte.push({
      index: this.curInput,
      streckenTyp: this.curStrecke.charAt(this.curInput),
      richtung: RichtungEnum.undefined,
      text: ''
    });

    this.handOverUnfallorteToParentComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.unfallorte = [];
    this.handOverUnfallorteToParentComponent();
  }

  handOverUnfallorteToParentComponent(){
    this.handOverUnfallOrteEmitter.emit(this.unfallorte);
  }

}

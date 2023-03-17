import { Component } from '@angular/core';
import { RichtungEnum, TunnelAbschnittModel } from './unfall-eingabe/unfall-eingabe.component';

@Component({
  selector: 'app-main-aufgabe',
  templateUrl: './main-aufgabe.component.html',
  styleUrls: ['./main-aufgabe.component.scss']
})
export class MainAufgabeComponent {

  public strecke: string = "";
  public unfallorte: TunnelAbschnittModel[] = [];
  public zeigeAusgabe: boolean = false;

  getStrecke(neueStrecke: string) {
    this.unfallorte = [];
    this.strecke = neueStrecke;
    this.zeigeAusgabe = false;
  }

  getUnfallOrte( unfallorte: TunnelAbschnittModel[]){
    this.unfallorte = unfallorte;
    this.zeigeAusgabe = false;
  }

  calculateRichtungen(){
    //gibt es überhaupt ein X?


    for (const unfallort of this.unfallorte) {

      if(unfallort.streckenTyp === 'X'){
        // Telefon an Unfallort
        unfallort.richtung = RichtungEnum.telefon;
        unfallort.text = 'Telefon an Unfallort';
        continue;
      }

      const distanceToNextLeftTelefon = this.getDistanceToNextLeftTelefon(unfallort.index);
      const distanceToNextRightTelefon = this.getDistanceToNextRightTelefon(unfallort.index);

      if(distanceToNextLeftTelefon !== -1 && distanceToNextRightTelefon === -1){
        // nur telefon in Richtung barcelona vorhanden
        unfallort.richtung = RichtungEnum.barcelona;
        unfallort.text = 'nur telefon in Richtung barcelona vorhanden';
        continue;
      }

      if(distanceToNextLeftTelefon === -1 && distanceToNextRightTelefon !== -1){
        // nur telefon in Richtung Mallorca vorhanden
        unfallort.richtung = RichtungEnum.mallorca;
        unfallort.text = 'nur telefon in Richtung Mallorca vorhanden';
        continue;
      }

      if(distanceToNextLeftTelefon === -1 && distanceToNextRightTelefon === -1){
        // Strecke enthält kein Telefon
        unfallort.richtung = RichtungEnum.undefined;
        unfallort.text = ' Strecke enthält kein Telefon';
        continue;
      }

      if(distanceToNextLeftTelefon < distanceToNextRightTelefon){
        // linkes Telefon ist näher dran
        unfallort.richtung = RichtungEnum.barcelona;
        unfallort.text = 'linkes Telefon ist näher dran';
        continue;
      }

      if(distanceToNextLeftTelefon > distanceToNextRightTelefon){
        // rechtes Telefon ist näher dran
        unfallort.richtung = RichtungEnum.mallorca;
        unfallort.text = 'rechtes Telefon ist näher dran';
        continue;
      }

      //beide telefone sind gleich weit voneinander distanziert
      const distanzVomLinkenTelefonZumAusgang = unfallort.index - distanceToNextLeftTelefon;
      const distanzVomRechtenTelefonZumAusgang = this.strecke.length - (unfallort.index + distanceToNextRightTelefon) -1;


      if(distanzVomLinkenTelefonZumAusgang < distanzVomRechtenTelefonZumAusgang){
        // Distanz vom linken telefon zum Ausgang ist kürzer
        unfallort.richtung = RichtungEnum.barcelona
        unfallort.text = 'Distanz vom linken telefon zum Ausgang ist kürzer';
        continue;
      }


      if(distanzVomLinkenTelefonZumAusgang > distanzVomRechtenTelefonZumAusgang){
        // Distanz vom rechten telefon zum Ausgang ist kürzer
        unfallort.richtung = RichtungEnum.mallorca
        unfallort.text = 'Distanz vom rechten telefon zum Ausgang ist kürzer';
        continue;
      }

      if(distanzVomLinkenTelefonZumAusgang === distanzVomRechtenTelefonZumAusgang){
        // Beide Telefone sind gleich weit vom Ausgang distanziert
        unfallort.richtung = RichtungEnum.mallorca
        unfallort.text = 'Beide Telefone sind gleich weit vom Ausgang distanziert';
        continue;
      }
    }

    this.zeigeAusgabe = true;
  }

  getDistanceToNextLeftTelefon(fromIndex: number){
    let distance = 0;

    for (let i = fromIndex -1 ; i >= 0; i--) {
      distance += 1;
      if(this.strecke.charAt(i) === 'X'){
        return distance;
      }
    }

    return -1;
  }


  getDistanceToNextRightTelefon(fromIndex: number){
    let distance = 0;

    for (let i = fromIndex +1 ; i < this.strecke.length; i++) {
      distance += 1;
      if(this.strecke.charAt(i) === 'X'){
        return distance;
      }
    }

    return -1;
  }

}

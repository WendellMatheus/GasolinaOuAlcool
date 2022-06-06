import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // public resultado: String = "Resultado"
  public precoGasolina: string;
  public precoEtanol: string;
  public resultado: string;

	calcular(){

    //Validar se os campos foram preenchidos
		if( this.precoEtanol && this.precoGasolina ){

      const pEtanol = parseFloat(this.precoEtanol);
      const pGasolina = parseFloat(this.precoGasolina);
			const result = pEtanol / pGasolina
			if( result >= 0.7){
				this.resultado = "Melhor utilizar Gasolina"
			}else{
				this.resultado = "Melhor utilizar Álcool"
			}

		}else{
			this.resultado = "Preencha corretamente os campos!"
		}

	}
}

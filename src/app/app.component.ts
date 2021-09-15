import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  Lista = ['MANZANA', 'PERA', 'AGUACATE', 'DURAZNO', 'PIÑA', 'MELON', 'SANDIA', 'HUEVO', 'ZANAHORIA', 'UVA', 'TOMATE'];
  randomNumber = Math.floor(Math.random() * this.Lista.length);
  palabra = this.Lista[this.randomNumber];
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;


  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {

    this.palabraOculta = '_ '.repeat( this.palabra.length );

  }

  comprobar( letra: string ) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for ( let i = 0; i < this.palabra.length; i ++ ) {
     // this.palabra[Math.floor(Math.random() * this.palabra.length)];

      if ( this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();

  }

  verificaGane() {

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
      console.log('Usuario GANO');
    }

    if ( this.intentos >= 9 ) {
      this.perdio = true;
      console.log('Usuario perdio');
    }

  }


  existeLetra( letra: string ) {

    if ( this.palabra.indexOf( letra ) >= 0  ) {
      // console.log('Letra existe ' + letra );
    } else {
      // console.log('Letra NO existe ' + letra );
      this.intentos ++;
    }

  }
}

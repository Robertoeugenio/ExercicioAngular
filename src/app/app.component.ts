import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomes: string[] = ['joão', 'maria', 'josé', 'pedro', 'felipe', 'carlos'];
  nomesFiltro: string[];

  /*busca(valor: string){
    alert(valor)
  }*/

  buscar(valor: string) {
    /* this.nomesFiltro = [];*/
    //metodo 1 
    /*for (var i = 0; i < this.nomes.length; i++) {
      if (this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro.push(this.nomes[i]);
      }
    }*/
    //metodo 2
    /* let temp =[];
     this.nomes.forEach(buscarItem);
     function buscarItem(nome){
       if(nome.toLowerCase().includes(valor.toLocaleLowerCase())){
         temp.push(nome);
       }
     }
     this.nomesFiltro = temp;
   }*/
    /*metodo 3*/
    this.nomesFiltro = this.nomes.filter(function (nome) {
      return nome.toLocaleLowerCase().includes(valor.toLocaleLowerCase());
    });
  }
}

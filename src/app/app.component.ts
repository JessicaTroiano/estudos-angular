import { Component } from '@angular/core';
import { ClientService } from './services/clientService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pensar-responder-1';
  nomeCompleto = 'Jéssica Troiano';
  data = new Date();
  dinheiro = 100.56

  constructor(private clientService: ClientService){}

  sayHello(){
    alert(this.clientService.sayHello())
  }
}

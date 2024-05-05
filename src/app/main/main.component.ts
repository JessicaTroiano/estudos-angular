import { Component, Input } from "@angular/core";
import { MainConfig } from "./main.config";

@Component({
  selector: 'app-main',
  template: "<p>{{ valor }}: {{ label }}</p>"
})

export class MainComponent {
  @Input() label: string | undefined;
  valor = "Valor default"

  constructor(config: MainConfig){
    this.valor = config.valor
  }
}
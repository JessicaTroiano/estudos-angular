import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { MainConfig } from "./main.config";


@NgModule({
    declarations: [MainComponent],
    exports: [MainComponent],
    providers: [{
        provide: MainConfig, useValue: {
            valor: 'Valor default'
        }
    }]
})
export class MainModule {}
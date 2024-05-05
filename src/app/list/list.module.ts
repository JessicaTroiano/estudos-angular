import { NgModule } from "@angular/core";
import { ListComponent } from "./list.component";
import { RouterModule } from "@angular/router";

const routes = [
    {path: 'list', component: ListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [ListComponent],
})
export class ListModule {}
import { RouterModule, Routes } from "@angular/router";
import { CadastrarPfComponent, CadastroPfComponent } from "./components";
import { NgModule } from "@angular/core";

export const CadastroPfRoutes: Routes = [
    {
        path: 'cadastro-pf',
        component: CadastroPfComponent,
        children: [
            {
                path: '',
                component: CadastrarPfComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CadastroPfRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroPfRoutingModule {

}

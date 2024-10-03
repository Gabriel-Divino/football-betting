import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BetComponent } from './bet/bet.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'bet',component:BetComponent}
];



@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        BetComponent
    ],
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule],
    providers:[]

})
export class AppRoutingModule { }
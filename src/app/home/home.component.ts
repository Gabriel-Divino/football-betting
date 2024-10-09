import { Component } from '@angular/core';
import { doLogin } from '../service/Web3Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){

  }

  async loginMetamask():Promise<void>{

    try{
      let login : any = await doLogin()
      if(login != null){
        this.router.navigate([`/bet`])
      }
    }catch(e){
      console.log(e)
    }

  }

}

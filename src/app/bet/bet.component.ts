import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bet',
  standalone: false,
  templateUrl: './bet.component.html',
  styleUrl: './bet.component.css'
})
export class BetComponent implements OnInit {

  constructor(private router: Router){

  }


  ngOnInit(): void {
    let wallet : any = localStorage.getItem('wallet')
    if(wallet == null){
      this.router.navigate([`/`])
    }
  }

}

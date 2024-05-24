import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { log } from 'console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbService:DbService){
  }

  items:{id:string,title:string,code:string}[]=[]

  ngOnInit(){
    this.dbService.getAllSnippets().then((data:any)=>{
      console.log(data);      
      this.items=data
    })

  }


}

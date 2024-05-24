import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {
  codeSnippet={
    title:"",
    code:""
  }
  constructor(private dbService:DbService,
    private route:ActivatedRoute
  ){}
  

  ngOnInit(){
    const uid=this.route.snapshot.paramMap.get('id')
    this.dbService.getSnippetById(uid!).then((data:any)=>{
      this.codeSnippet=data
    })
    
  }

  


}

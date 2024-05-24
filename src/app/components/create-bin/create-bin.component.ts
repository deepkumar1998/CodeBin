import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../model/snippet';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
  constructor(private dbSercice:DbService){

  }
  title=new FormControl("",[
    Validators.required
  ])
  code=new FormControl("",[
    Validators.required
  ])

  binForm=new FormGroup({
    title:this.title,
    code:this.code
  })

  save(){
    console.log(this.binForm.value);
    this.dbSercice.createSnippet(this.binForm.value as Snippet)

    
  } 


}

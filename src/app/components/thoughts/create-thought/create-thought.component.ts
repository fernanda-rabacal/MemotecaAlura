import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought : Thought = {
    content: '',
    author: '',
    model: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createThought() : void {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelCreationOfThought() : void {
    this.router.navigate(['/listar-pensamento'])
  }

}

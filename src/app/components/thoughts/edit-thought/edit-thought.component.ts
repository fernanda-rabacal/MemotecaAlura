import { Thought } from './../thought';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.service.getById(parseInt(id!)).subscribe(thought => {
      this.thought = thought
    })

  }

  editThought() : void {
    if(this.thought) {
      this.service.edit(this.thought).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      })
    }
  }

  cancel() : void {
    this.router.navigate(['/listar-pensamento'])
  }
}

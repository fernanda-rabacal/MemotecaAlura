import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  /* thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }
 */
  id: number = 0

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)

    /* this.service.getById(parseInt(id!)).subscribe(thought => {
      this.thought = thought
    }) */
  }

  deleteThought() : void {
    if(this.id) {
      this.service.delete(this.id).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      })
    }
  }

  cancel() : void {
    this.router.navigate(['/listar-pensamento'])
  }

}

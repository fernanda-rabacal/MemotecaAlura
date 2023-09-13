import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  thoughtsList : Thought[] = []

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    //observable é tipo promise, subscribe é tipo then
    this.service.list().subscribe(thoughtsList => {
      this.thoughtsList = thoughtsList
    })
  }

}

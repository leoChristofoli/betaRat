import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tasks } from 'api/collections';
import { Task } from 'api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  tasks;
  t: Task = {};

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.tasks = Tasks.find().zone()

  }

  removeTask(task: Task): void {
    Tasks.remove({_id: task._id}).subscribe(() => {
    });
  }

  logForm() {
    console.log(this.t)
    
    Tasks.collection.insert({
      title: this.t.title,
      description: this.t.description
    });
  }

}

import { Component, OnInit} from '@angular/core';
import { TaskRequest } from './task-request';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient){
  }

  title = 'app';
  date = new Date();
  tasks: Array<TaskRequest> = [];
  task = new TaskRequest();

  ngOnInit() {

    // this.http.get('http://localhost:8080/endpoint').subscribe(data => {
    //   this.tasks = data as Array <TaskRequest>;
    //   console.log(data);
    // });

    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
      } else {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      }
  }

removeTask(event:any, task:TaskRequest){
  
  this.tasks = this.tasks.filter(item => item !== task);
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  // this.http.delete('http://localhost:8080/endpoint/'+task.id).subscribe(data=>{
  //   this.tasks = this.tasks.filter(item => item !== task);
  //   });


}
changeEditableFlag(event: any, task: TaskRequest) {
  if (task.editable === true) {
    task.editable = false;
    // this.http.post('http://localhost:8080/endpoint',task).subscribe(data=>{
    //   });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  } else {
    task.editable = !task.editable;
  }
}
filterItemsOfCompleted(type){
  return this.tasks.filter(x => x.status == "Completed");
}
filterItemsOfOnGoing(type){
  return this.tasks.filter(x => x.status == "On Going");
}
filterItemsOfNotStarted(type){
  return this.tasks.filter(x => x.status == "Not Yet Started");
}

  onClick(event:any){

      this.task.editable=false;
      if(this.task.status!=null &&
        this.task.dateDue!=null&&
        this.task.taskName!=null){
      this.tasks.push(this.task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.task = new TaskRequest();
      // this.http.post('http://localhost:8080/endpoint',this.task).subscribe(data=>{       
      // this.task = new TaskRequest();
      // });
    }

  }
} 


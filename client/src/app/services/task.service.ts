import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http:Http) {
    console.log('Task Service Initialized...');
  }

  getTasks() {
    return this.http.get('http://localhost:3000/api/tasks').map(res => res.json());
  }

  addTask(newTask) {

    var h = new Headers();
    h.append('Content-type', 'application/json');
    return this.http.post(
      'http://localhost:3000/api/tasks/',
       JSON.stringify(newTask), 
       {headers: h}).map(res => res.json());

  }

  deleteTask(id) {
    return this.http.delete('http://localhost:3000/api/tasks/' + id).map(res => res.json());
  }

  updateStatus(task) {
    var hea = new Headers();
    hea.append('Content-Type', 'application/json');
     return this.http.put(
      'http://localhost:3000/api/tasks/' + task._id,
       JSON.stringify(task), 
       {headers: hea}).map(res => res.json());    
  }
  
}

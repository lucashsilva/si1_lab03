import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import { Task } from '../tasks/task/task.component';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { UserService } from './user.service';


import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
    private apiUrl = "http://localhost:8080/api";

   constructor(private http: Http, private router: Router, private userService: UserService) { }

   getHeaders() {
     let headers = new Headers();
     headers.append('Authorization', this.userService.getToken());
     return headers;
   }

   getTasks():Observable<Task[]> {
     return this.http.get(this.apiUrl + '/tasks', {"headers": this.getHeaders()}).map(res => <Task[]> res.json());
   }

   //
  //  addTask(task) {
  //    return this.http.post("/task", JSON.stringify(task), this.getOptions());
  //  }
   //
  //  editTask(task) {
  //    return this.http.put(`/task/${task._id}`, JSON.stringify(task), this.getOptions());
  //  }
   //
  //  deleteTask(task) {
  //    return this.http.delete(`/task/${task._id}`, this.getOptions());
  //  }

}

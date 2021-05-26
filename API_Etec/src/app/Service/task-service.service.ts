import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  url = 'https://apitodotask.azurewebsites.net/api/tasktodo';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  GetOne(id: String) {
    return this.http.get(this.url + '/' + id).toPromise();
  }
  GetAll() {
    return this.http.get(this.url).toPromise();
  }
  Post(taskName: string) {
    let taskObj = { nome: taskName };

    return this.http.post(this.url,JSON.stringify(taskObj), this.httpOptions).toPromise();
  }
  Put(name: String) {
    let data = {
      nome: name,
    };
    return this.http.put(this.url, data).toPromise();
  }
  Delet(id: String) {
    return this.http.delete(this.url + '/' + id).toPromise();
  }
}

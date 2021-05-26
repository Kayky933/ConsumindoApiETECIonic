import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  url = 'http://apitodotask.azurewebsites.net/api/tasktodo';

  GetOne(id: String) {
    return this.http.get(this.url + id).toPromise();
  }
  GetAll() {
    return this.http.get(this.url).toPromise();
  }
  Post(nome: String) {
    let data = {
      id: '',
      nome: nome,
      active: true,
    };
    return this.http.post(this.url, data).toPromise();
  }
  Put(nome: String) {
    let data = {
      id: '',
      nome: nome,
      active: true,
    };
    return this.http.put(this.url, data).toPromise();
  }
  Delet(id: String) {
    return this.http.delete(this.url + id).toPromise();
  }
}

import { UtilsService } from './../utils/utils.service';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getClients() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get(url);
  }
}

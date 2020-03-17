import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'outsourcin';
  helloMessage: string;

  data = [];
  username: any;
  level: any;
  constructor(private http: HttpClient) {
    // const API_URL = 'http://localhost:8888/outsourcin/employee.php';
    const API_URL = 'http://localhost:3000/';
    this.http.get(API_URL).subscribe(data => {
    this.data.push(data);
    this.helloMessage = this.data[0].welcome;
    this.username = this.data[0].currentUserData.username;
    this.level = this.data[0].currentUserData.level;
    // console.log(this.data[0]);


    }, error => console.error(error));
  }




}

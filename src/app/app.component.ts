import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Config {
  data: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keepCloneFrontend';

  textTemp: string = 'Temp';

  constructor(
    private http: HttpClient
  ){}

  url = 'http://127.0.0.1:8000/api/hello'

  ngOnInit(){
    this.http.get<string>(this.url).subscribe((data: string) => {
      console.log(' data ', data);
      this.textTemp = data;
    });
  }
}

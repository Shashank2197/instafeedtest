import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  authcode: string = '';
  url: string = '';
  imageUrl: string = '';
  ngOnInit(): void {
    this.url = window.location.href;
    this.authcode = this.url.slice(51, 289);
    console.log(this.authcode, 'code');
    const body = {
      client_id: '793722061665693',
      client_secret: '7c35feba7a43d95cc8a105c8c73d9308',
      grant_type: 'authorization_code',
      redirect_uri: 'https://shashank2197.github.io/instafeedtest/',
      code: this.authcode,
    };
    this.http
      .post<any>('https://api.instagram.com/oauth/access_token', body)
      .subscribe((data) => {
        console.log(data, 'data');
      });
  }
}

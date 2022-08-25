import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  pic: string = '';
  caption: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.pic, this.caption, 'final');
  }
}

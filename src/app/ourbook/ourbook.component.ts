import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourbook',
  templateUrl: './ourbook.component.html',
  styleUrls: ['./ourbook.component.scss']
})
export class OurbookComponent implements OnInit {
  image="https://th.bing.com/th/id/OIP.Q_7SBfLJ50UAmCQKZx_O7wAAAA?pid=ImgDet&rs=1";
  image1="https://i.pinimg.com/originals/90/31/dc/9031dc5ce42287233bb2cabd8b185aea.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

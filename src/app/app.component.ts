import { Component,OnInit,DoCheck} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,DoCheck{
  title = 'project';
    constructor(private http:HttpClient){};
  // constructor(private user:UserService){
    // this.user.getdata().subscribe(data =>{
      
    //   console.log(data);
    // })
      


  
  ngOnInit(){
    console.log("onint")
  }
  
  ngDoCheck(){
    console.log("ngdocheck")
  }
}

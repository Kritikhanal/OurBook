import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public addForm: FormGroup;
  public users : any;

  constructor(
    private user:UserService,
    private subjectService :SubjectService
    ) {
      this.addForm = new FormGroup({
        title : new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        status: new FormControl('',[Validators.required]),
        type: new FormControl('',[Validators.required])



      })

    // this.users.getdata().subscribe((data: any) =>
    //   {
    //     this.users = data;
    //     console.log(this.users);
        
    //   })
   }
   getuserformdata(data:any)
  {
    console.log
  }
  // getAlluser(data:any)
  // {
  //   this.subjectService.getAlluser().subscribe((data:any)=>
  //   {
  //     this.users=data.response.object;
  //   })
  // }
  // deleteuser()
  // {

  // }

  ngOnInit(): void {
    this.getuserformdata;
    // this.getAlluser;
    // this.deleteuser;

  }

  onUserSubmit(){
  // this.subjectService.createuser()
  // 
}
}

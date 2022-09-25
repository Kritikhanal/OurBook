import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerApis } from 'src/api-constant';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http:HttpClient
  ) { }
  getuser(url:string)
  {
    return this.http.get(`${ServerApis.userURL}/${url}`)
  }
  getAlluser()
  {
    return this.http.get(`${ServerApis.userURL}`);
  }
  createuser(req:any){
    return this.http.post(req,ServerApis.userURL);
  }
  updateuser(userid: any,req: any){
    return this.http.patch(userid,ServerApis.userURL);
  }
  deleteuser(user:number){
    return this.http.delete(`${ServerApis.userURL}/${user}`);
  }
  getuserbyid(id:number)
  {
    return this.http.get(ServerApis.userURL + '/'+ id);
  }

}

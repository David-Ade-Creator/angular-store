import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Userinfo} from './user-info.model';

@Injectable()
export class UserService {
Userinfo;
newUserinfo : Userinfo;
userid;

private userinfos: Userinfo[] = [
  //new Userinfo(1,'David','Adeyemi',8971558784,'www.davidadeyemi@gmail.com','Anuradha Nilayem', 'Bangalore','Karnataka', 560097)
];


 getUsers():Observable<Userinfo[]>{
    let userinfos = new Observable<Userinfo[]>(observer => {
           setTimeout(() => {
               observer.next(this.userinfos);
           }, 2000);
    });
    return userinfos;
  }

getUser(userid:number | string){
return this.userinfos.find(userinfo => userinfo.userid == userid);
}

addUserinfo(userinfo:Userinfo){
  this.userinfos.push(userinfo);
}

updateUserInfo(userid:number, newUserinfo: Userinfo){
  this.userinfos[userid] = newUserinfo;
}

deleteUser(userid:number){
  this.userinfos.splice(userid, 1);
}

}

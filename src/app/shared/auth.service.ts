import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, take } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private itemDoc:AngularFirestoreDocument<any>;
  item: Observable<any>;

  authState:any = null;

  constructor(public afAuth:AngularFireAuth,
              private afs:AngularFirestore,
              private router:Router){}

getAuthState(){
    this.afAuth.authState.subscribe( authState => {
    this.authState = authState;
   });
}

 checkIfUserSignedIn() {
      return this.afAuth.authState;
  }


 createUser(signupForm) {
    return this.afAuth.createUserWithEmailAndPassword(signupForm.value.email, signupForm.value.password);
 }

 loginUser(loginForm){
   return this.afAuth.signInWithEmailAndPassword(loginForm.value.email, loginForm.value.password);
}

logout() {
        window.localStorage.removeItem("displayName");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("picture");
        window.localStorage.removeItem("center");
        window.localStorage.removeItem("token");
        return this.afAuth.signOut().then(
          (sucess) => {
           this.router.navigate(["/home"]);
          });
    }

getUser(): Promise<any> {
    return this.afAuth.authState.pipe(take(1)).toPromise();
      }



getDoc(collurl:string){
  this.itemDoc = this.afs.doc<any>(collurl);
  return this.itemDoc.valueChanges();
}

}

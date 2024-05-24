import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router) {}
  private uid?:string
  getUid(){
    return this.uid;
  }


  createUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        this.uid=user.uid
        console.log(user);
        alert("Account Created Successfully")
        
        // ...
        this.router.navigate(["/"])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
        alert('Something went wrong....Please try again');
        // ..
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.uid=user.uid
        // ...
        this.router.navigate(["/"])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
        alert('Something went wrong....Please try again');

      });
      
  }

  logout(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  this.uid="";
  this.router.navigate(["/"])
  console.log("Sign-out successful.");
  
}).catch((error) => {
  // An error happened.
  console.log(error);
  
});
  }
}

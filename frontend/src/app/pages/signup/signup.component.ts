import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform =  {
    'name' : '',
    'email' : '',
    'password' : '',
    'place':'',
    'phonenumber':''


    
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
 
  }
  onsubmit(){
  //   console.log(this.signupform)
  //   this.auth.signup(this.signupform).subscribe(res=>{
  //     if(res.message){
  //       alert(res.message)
  //       this.router.navigate(['/signup'])


  //     }else{
  //       alert("registered successfully");
  //       this.router.navigate(['/home'])
  //     }
  //   })
  // }
  alert("registered successfully");
  this.router.navigate(['/home'])

}
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  stdname=""
  rollno=""
  admno=""
  mobile=""
  college=""
  parentname=""
  parentmobno=""
  username=""
  password=""

  readValues=()=>
  {
    let data:any={
    "stdname":this.stdname,
    "rollno":this.rollno,
    "admno":this.admno,
    "mobile":this.mobile,
    "college":this.college,
    "parentname":this.parentname,
    "parentmobno":this.parentmobno,
    "username":this.username,
    "password":this.password
    }
    console.log(data)
  }
  




}

import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router  } from "@angular/router";

@Component({
    selector:'data-app',
    templateUrl:'./dataEntry.component.html',
    styleUrls:['./dataEntry.component.css']
})
export class DataComponent
{
    
    fname:any;
    lname:any;
    num:any;
    cv:any;
    photo:any;
    dob:any;
    divmain:any;
    value:boolean=false;

    clear()
    {
      this.fname="";
      this.lname="";
      this.num="";
      this.cv="";
      this.photo="";
      this.dob="";
    }
    constructor(private router:Router){}
    goToPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);

      }
    }



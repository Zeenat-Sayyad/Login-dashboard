import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {Router  } from "@angular/router";


@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class Login_Component
{
    pid:any;
    ppas:any;
    id:string;
    password:string;
    value:boolean;
    constructor(private router:Router){}
    goToPage(pageName:string):void{
       
        if(this.pid=="")
        {
            this.value=false;

          this.id=" Id should neither be empty nor less than 8";
        }
        else if(this.pid.length<6)
        {
            this.value=false;

            this.id=" Id should neither be empty nor less than 8";
            
        }
        else{
            this.value=true;

            this.id=" ";

        }
        if(this.ppas=="" )
        {
            this.value=false;

        this.password="Password should neither be empty nor less than 8";

        }
        else if(this.ppas.length<8)
        {
            this.value=false;

                this.password="Password should neither be empty nor less than 8";
        
            
        }
        else{
            this.value=true;

            this.password=" ";

        }
        if(this.value)
        {
            this.router.navigate([`${pageName}`]);
        }

    }

}
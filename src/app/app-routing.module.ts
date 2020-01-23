import {  NgModule} from "@angular/core";
import {  Routes, RouterModule} from "@angular/router";
import{  Login_Component} from './dasboard/login.component';
import{ DataComponent } from './dasboard/dataEntry.component'
const routes:Routes=[
    {path:'logout', component:DataComponent},
    {path:'login',component:Login_Component}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{

}
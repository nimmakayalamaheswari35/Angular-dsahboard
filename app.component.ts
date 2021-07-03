import { Component } from '@angular/core';
import { GetServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  empl_data:any;
  date:any;
  constructor(private _empl_data: GetServiceService) {
    _empl_data.getData().subscribe((data:any) => this.empl_data=data.data);
    setInterval(()=>{
      this.date=new Date()
    },1000);
    
  }
  displayemployee=false;
  makeShowEmployeesTrue() {
    this.emp_rec=false;
    this.displayemployee=true;
    console.log(this.displayemployee);
    console.log('hello')
  }
  emp_rec=false;
  display_data:any;
  getShowData(show_data:any) {
    this.emp_rec=true;
    this.display_data = show_data;
  }
  setAlert() {
    alert("Select Employee Option")
  }
}

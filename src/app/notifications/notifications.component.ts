import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'chart.js'
import { reduce } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  PieChart = [];

  public  bill:any;
  public  last_month_bill: any;
  public  last_billing_date: any;
  public  next_billing_date: any;
  public  used_free_hours: any;
  public  remaing_free_hours: any;

  constructor(private toastr: ToastrService, private db: AngularFirestore) {

    this.db.collection('user1-bill').valueChanges().forEach(x=>{
      this.bill = x[0]['bill']
      this.last_month_bill = x[0]['last_month_bill']
      this.last_billing_date = x[0]['last_billing_date']
      this.next_billing_date = x[0]['next_billing_date']
      this.used_free_hours = x[0]['used_free_hours']
      this.remaing_free_hours = x[0]['remaing_free_hours']
      console.log(this.bill)
    });
  }
  showNotification(from, align){

      const color = Math.floor((Math.random() * 5) + 1);

      switch(color){
        case 1:
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
        this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
        this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           enableHtml: true,
           closeButton: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
         break;
         case 5:
         this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: 'toast-' + from + '-' +  align
          });
        break;
        default:
        break;
      }
  }
  ngOnInit() {
    this.PieChart = new Chart('pieChart',{
      type: 'pie',
    data: {
      // lables: ["Used", "Remaining"],
      labels: ["Used", "Remaining"],
      datasets: [{
        label: 'Usage of free hours',
        data: [78,22],
        backgroundColor: [
          'red',
          'blue',
        ],
        fill: false,
        lineTension: 0.2,
        borderColor: "black",
        borderWidth: 1
      }]
    },
    options: {
      title:{
        text: "Usage of free hours",
        display: true
      },
      // scales: {
      //   yAxes: [{
      //     ticks: {
      //       beginAtZero:true
      //     }
      //   }]
      // }
    }
    });
  }
}

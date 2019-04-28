import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Md5} from 'ts-md5';
import {generate} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {


  public device_tag: string = 'user1-esp8266';
  public device_sensors: any;
  public device_type: string = 'esp8266';
  public token: any;

  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.db.collection('user1-esp8266').valueChanges().forEach(x => {
      this.device_sensors = x;
      console.log(x);
    });

    console.log(this.device_sensors);

  }

  ngOnInit() {
  }

  public generateToken() {
    var str = new Date().getTime().toString();
    this.token = Md5.hashAsciiStr(str.concat(new Date().getTime().toString()));
    this.noti('top','right','Security Token generated <br> as '+this.token, 'Alert');

  }


  public noti(from: string, align: string, message: string, title:string) {
    this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> '+ message, title, {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + from + '-' +  align
    });
  }

}

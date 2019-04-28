import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public uname: string;
  public  email: string;
  public fname: string;
  public lname: string;
  public address: string;
  public city: string;
  public country: string;
  public tel: number;
  public about: string;


  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.db.collection('user1-info').valueChanges().forEach(x => {
      this.uname = x[0]['uname'];
      this.email = x[0]['email'];
      this.fname = x[0]['fname'];
      this.lname = x[0]['lname'];
      this.address = x[0]['address'];
      this.city = x[0]['city'];
      this.country = x[0]['country'];
      this.tel = x[0]['tel'];
      this.about = x[0]['about'];
    })
  }

  ngOnInit() {}

  public update(): any {
    this.db.collection('user1-info').doc('details').update({'uname':this.uname});
    this.db.collection('user1-info').doc('details').update({'email':this.email});
    this.db.collection('user1-info').doc('details').update({'fname':this.fname});
    this.db.collection('user1-info').doc('details').update({'lname':this.lname});
    this.db.collection('user1-info').doc('details').update({'address':this.address});
    this.db.collection('user1-info').doc('details').update({'city':this.city});
    this.db.collection('user1-info').doc('details').update({'country':this.country});
    this.db.collection('user1-info').doc('details').update({'tel':this.tel});
    this.db.collection('user1-info').doc('details').update({'about':this.about});

    this.noti('bottom','right', 'Profile Updated', 'message');

    return null;
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

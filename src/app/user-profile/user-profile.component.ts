import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

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


  constructor(private db: AngularFirestore) {
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


    return null;
  }

}

import { Component, OnInit } from '@angular/core';
import {DevicesService} from '../devices.service';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {



  public elements: Array<any> ;

  constructor(private devices: DevicesService, private db: AngularFirestore) {
    this.db.collection('user1-device').valueChanges().forEach(x => {
      console.log(x);
      this.elements = x;
    });
  }

  ngOnInit() {

  }

  public getInfo(parm: string){

  }

}

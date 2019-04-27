import { Component, OnInit } from '@angular/core';
import {DevicesService} from '../devices.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  public test: string = 'q';

  public elements: Array<any> ;

  constructor(private devices: DevicesService) { }

  ngOnInit() {
    this.elements = this.devices.getDevices() ;
  }

  public getInfo(parm: string){
    this.test = parm;
  }

}

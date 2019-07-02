import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {

  public tem: Array<any> = [] ;
  public hum: Array<any> = [] ;
  public prs: Array<any> = [] ;

  public temM: Array<any> = [] ;
  public humM: Array<any> = [] ;
  public prsM: Array<any> = [] ;

  constructor(private db: AngularFirestore) {
    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[1]["Humidity"].forEach(y=>this.hum.push(y))
    });

    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[1]["Temperature"].forEach(y=>this.tem.push(y))
    });

    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[1]["Pressure"].forEach(y=>this.prs.push(y))
    });


    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[0]["Humidity"].forEach(y=>this.humM.push(y))
    });

    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[0]["Temperature"].forEach(y=>this.temM.push(y))
    });

    this.db.collection('user1-history').valueChanges().forEach(x=>{
       x[0]["Pressure "].forEach(y=>this.prsM.push(y))
    });

  }


  public realTimetemp(): number {
    return 45.99;
  }

  public realTimeHumi(): number {
    return 13.34;
  }

  public realtimeBright(): number {
    return 34;
  }

  public tempData(): Array<any> {
    //console.log(this.http.get("http://localhost:3000/month?id=123").subscribe(x=>console.log(x.Humidity)))
    return [
      {
        label: ' temperature',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data:  this.tem// temp data feeding Y
      }
    ];
}
  public tempDataWeek(): Array<any> {
      return [
        {
          label: ' temperature',
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: this.temM // temp data feeding Y
        }
      ];
  }
  public humiData(): Array<any> {
    return [
      {
        label: ' humidity',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: this.hum
      }
    ];
  }
  public humiDataWeek(): Array<any> {
    return [
      {
        label: ' humidity',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: this.humM
      }
    ];
  }
  public brightData(): Array<any> {
    return [
      {
        label: ' Pressure',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: this.prs
      }
    ];
  }
  public brightDataWeek(): Array<any> {
    return [
      {
        label: ' Pressure',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: this.prsM
      }
    ];
  }
  public tempLabels(): Array<string> {
    return  ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm']; // temp data feeding X
  }
  public templabelsWeek(): Array<string>{
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']; // temp data feeding X
  }
  public humiLabels(): Array<string> {
    return  ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm'];
  }
  public humiLabelsWeek(): Array<any>{
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']; // temp data feeding X
  }
  public brightLabels(): Array<string> {
    return ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm'];
  }
  public brightLabelsWeek(): Array<string>{
    return  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']; // temp data feeding X
  }
}

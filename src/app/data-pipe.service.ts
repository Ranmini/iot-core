import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataPipeService {

  constructor() { }


  public realTimetemp(): number {
    return 23.34;
  }

  public realTimeHumi(): number {
    return 13.34;
  }

  public realtimeBright(): number {
    return 34;
  }

  public tempData(): Array<any> {
    return [
      {
        label: ' temperature',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: [80, 99, 86, 96, 123, 84, 100, 75, 88, 90, 123, 155, 80, 99, 86, 96, 123, 84, 100, 75, 88, 90, 123, 155] // temp data feeding Y
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
          data: [80, 99, 75, 88, 90, 123, 155] // temp data feeding Y
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
        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900, 40, 500, 650, 700, 1200, 1250, 1300, 1900]
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
        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
      }
    ];
  }
  public brightData(): Array<any> {
    return [
      {
        label: ' brightness',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155, 0, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
      }
    ];
  }
  public brightDataWeek(): Array<any> {
    return [
      {
        label: ' brightness',
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
      }
    ];
  }
  public tempLabels(): Array<string> {
    return  ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm']; // temp data feeding X
  }
  public templabelsWeek(): Array<string>{
      return ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // temp data feeding X
  }
  public humiLabels(): Array<string> {
    return  ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm'];
  }
  public humiLabelsWeek(): Array<any>{
    return ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // temp data feeding X
  }
  public brightLabels(): Array<string> {
    return ['0am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
      '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
      '10pm', '11pm'];
  }
  public brightLabelsWeek(): Array<string>{
    return ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // temp data feeding X
  }
}

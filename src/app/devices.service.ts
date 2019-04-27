import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  public getDevices(): Array<Array<any>> {
    return  [
      ['node-99', ['thermometer ','humidity meter '], 'Esp8266', 'good']
    ];
  }
}

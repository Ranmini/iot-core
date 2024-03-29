import { Component, OnInit } from '@angular/core';
import {LocationService} from '../location.service';
import {HttpClient} from '@angular/common/http';


declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private location: LocationService, private http: HttpClient) { }

  public position_user = this.location.getPosition();

  public avghumidity: number;
  public maxwind_mph: number;
  public avgtemp_c: number;
  public condition_text: string;

  public geo :number;
  public geo2: number;

  ngOnInit() {

    this.getWether().subscribe(x=> {
      x.forecast.forecastday.forEach(y=>{
        this.icon  = y.day.condition.icon;
        this.condition_text = y.day.condition.text;
        this.avghumidity = y.day.avghumidity;
        this.maxwind_mph = y.day.maxwind_mph;
        this.avgtemp_c = y.day.avgtemp_c;
      });

    });

    this.position_user.then(pos=>{
      this.geo = pos.lng;
      this.geo2 = pos.lat;
    })

    var myLatlng =  {lat: 6.9022, lng: 79.8611};
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "University of Colombo School of Computing"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }

  public icon: string = 'weather.svg'

  getWether(): any {
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=9b79af840c7145afad454355190305&q=Colombo');
  }
}

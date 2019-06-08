import { Component, OnInit } from '@angular/core';
import { Plants } from '../models/Plants';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  plants: Plants = {
    name: '',
    category:'',
    amount:0

  }

  
  categories=['vegetables','fruits','herbs','flowers'];

  
  constructor(private plantsService:PlantsService) {
  
}
 
  ngOnInit() {}

  onSubmit(){
    if(this.plants.name != '' && this.plants.category!= ''){
      this.plantsService.addPlants(this.plants);
      this.plants.name = '';
      this.plants.category = '';
    }
  }
  
}

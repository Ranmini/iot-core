
    
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Plants } from '../models/Plants';
import { Observable } from 'rxjs';

@Injectable()
export class PlantsService {
  itemsCollection: AngularFirestoreCollection<Plants>;
  plants: Observable<Plants[]>;
  itemDoc: AngularFirestoreDocument<Plants>;

  constructor(public afs: AngularFirestore) { 
    //this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('plants', ref => ref.orderBy('name','asc')).snapshotChanges()
    .map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Plants;
        data.name = a.payload.doc.name;
        return data;
      });
    });
  }

  getItems(){
    return this.plants;
  }

  addPlants(plants: Plants){
    this.itemsCollection.add(plants);
  }

  deletePlants(plants: Plants){
    this.itemDoc = this.afs.doc(`plants/${plants.name}`);
    this.itemDoc.delete();
  }

  updatePlants(plants: Plants){
    this.itemDoc = this.afs.doc(`plants/${plants.name}`);
    this.itemDoc.update(name);
  }

}



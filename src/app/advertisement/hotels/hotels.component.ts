import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './../../services/advertisement.service';
import { Advertisement } from './../../models/advertisement';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  advertisements: FirebaseListObservable<Advertisement[]>;

  constructor(private advSvc: AdvertisementService) { }

  ngOnInit() {
    this.advertisements = this.advSvc.getAdvertisementsList
      ({
        orderByChild: 'propertyType',
        equalTo: 'Hotel'
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { PetItem } from '../model/petItem';
import {PetService} from '../services/pet.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: 'petItem.component.html'
})

export class PetItemComponent implements OnInit {
  petItems: PetItem[] = [];
  username: string;
  errormessage = '';

  constructor(private petService: PetService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // get users from secure api end point
    this.petService.getItems()
      .subscribe(
        items => {
          this.petItems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}

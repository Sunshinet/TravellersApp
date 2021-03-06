import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(public auth: AuthService) {
  }
  title = 'traveller\'s App';

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
  }
}

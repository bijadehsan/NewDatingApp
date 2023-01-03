import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //currentUser$: Observable<User | null> = of(null); //it's going to be an observable of null.
  //And that satisfies strict mode in Angular.
  //And we've correctly assigned the value to our current user observable.

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.currentUser$=this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }


  logout() {
    this.accountService.logout();
  }

}

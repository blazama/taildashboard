import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';
import { Data } from 'src/app/interfaces/data';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  data: Data;
  name: string;
  surname: string;
  picture: string;
  private userSubscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  /**
   * Function to reset the user data 
   */
  resetUser(): void {
    this.getUserData()
  }

  /**
   * Function to get user data from the API
   */
  getUserData() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }

    this.userSubscription = timer(0, 10000)
      .pipe(
        switchMap(() => this.apiService.getData())
      )
      .subscribe(data => {
        this.name = data.results[0].name.first;
        this.surname = data.results[0].name.last;
        this.picture = data.results[0].picture.thumbnail;
      });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

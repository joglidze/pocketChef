import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticate = false;
  private userSub: Subscription;

  constructor(
    private dataStorage: DataStorageService,
    private authservic: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authservic.user.subscribe((user) => {
      this.isAuthenticate = !user ? false : true;
      console.log(user);
    });
  }

  onSaveData() {
    this.dataStorage.saveData();
  }
  onFetchData() {
    this.dataStorage.fetchData().subscribe((recipe) => {
      console.log(recipe);
    });
  }
  onLogout() {
    this.authservic.logout();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

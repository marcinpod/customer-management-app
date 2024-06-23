import {Component, inject} from '@angular/core';
import {SkeletonComponent} from "mfcmptestcomponents";
import {UserStateService} from "mfcmpteststate";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'customer-management-dashboard',
  standalone: true,
  imports: [
    SkeletonComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public user$ = inject(UserStateService).user$
}

import { Component, OnInit } from '@angular/core';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  private loading = true;
  private animation;

  constructor(private router:Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }

  ngOnInit() {
  }

  private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.animation = 'out';
    }
    if (event instanceof NavigationEnd) {

      this.loading = false;
      // this.animation = "out";
      setTimeout(()=>{
        this.animation = "enter";
      },200);

    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }

}

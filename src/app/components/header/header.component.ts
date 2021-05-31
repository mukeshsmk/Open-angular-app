import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ScrollPage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", []) onWindowScroll(event: any) {
    this.ScrollPage = true;
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
  
    if (verticalOffset < 2) {
      this.ScrollPage = false;
    }
  }
}

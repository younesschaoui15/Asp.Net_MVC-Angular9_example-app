import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // @HostListener('window:beforeunload', ['$event'])
  // onBeforeunload(e: any) {
  //   setTimeout(() => window.location.href = this._APP_BASE_HREF);
  //   return true;
  // }

  _CONTROLLER = '/Home/';
  _routes = {
    home: this._CONTROLLER,
    about: this._CONTROLLER + 'About',
    contact: this._CONTROLLER + 'Contact',
    angularApp: this._CONTROLLER + 'Angular',
  };

  constructor(@Inject(APP_BASE_HREF) private _APP_BASE_HREF: string) {
  }

  ngOnInit(): void {
  }
}

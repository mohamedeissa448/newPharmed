<<<<<<< HEAD
import { Component } from "@angular/core";
=======
import { Component, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import { SidebarService } from "./services/sidebar.service";
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  Route,
  NavigationStart
} from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { Title } from "@angular/platform-browser";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
<<<<<<< HEAD
export class AppComponent {
  constructor() {}
=======
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  public title = "RxP CMS Manager";
  public isStopLoading: boolean = false;
  public showNotifMenu: boolean = false;
  public showToggleMenu: boolean = false;
  public navTab: string = "menu";
  public currentActiveMenu = "light";
  public currentActiveSubMenu;
  public themeClass: string = "theme-cyan";
  public smallScreenMenu = "";
  public darkClass: string = "";
  private ngUnsubscribe = new Subject();
  private isAuthenticated = false;
  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title
  ) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        // You only receive NavigationStart events
        console.log("dddddddddd", event);
        if (event.url.includes("authentication")) this.isAuthenticated = true;
        else this.isAuthenticated = false;
      });
    this.activatedRoute.url
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(url => {
        this.isStopLoading = false;
        this.getActiveRoutes();
      });

    this.themeService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(themeClass => {
        this.themeClass = themeClass;
      });

    this.themeService.smallScreenMenuShow
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(showMenuClass => {
        this.smallScreenMenu = showMenuClass;
      });

    this.themeService.darkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(darkClass => {
        this.darkClass = darkClass;
      });
  }

  ngOnInit() {
    let that = this;
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        that.themeService.hideMenu();
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === "primary")
      .mergeMap(route => route.data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(event => this.titleService.setTitle(event["title"]));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNotificationDropMenu() {
    this.showNotifMenu = !this.showNotifMenu;
  }

  toggleSettingDropMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit() {
    let that = this;
    setTimeout(function() {
      that.isStopLoading = true;
    }, 1000);
  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split("/");
    this.currentActiveMenu = segments[1];
    this.currentActiveSubMenu = segments[2];
    this.sidebarService.setcurrentSelectedMainMenu(segments[1]);

    let NameSegments: Array<string> = segments[2].split("-");
    if (NameSegments[NameSegments.length - 1] != "index")
      this.sidebarService.setcurrentSelectedSubMenu(
        NameSegments[NameSegments.length - 1]
      );
    else this.sidebarService.setcurrentSelectedSubMenu("Dashboard");
  }

  activeInactiveMenu($event) {
    console.log($event.item);
    if ($event.item && $event.item == this.currentActiveMenu) {
      this.currentActiveMenu = "";
    } else {
      this.currentActiveMenu = $event.item;
    }
  }
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
}

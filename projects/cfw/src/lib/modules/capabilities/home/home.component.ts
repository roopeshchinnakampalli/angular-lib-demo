// import { TestService } from './../../core/services/test.service';
import { Component, OnInit } from '@angular/core';
import { FrameworkService } from '../../core/services/framework.service';
// import { AppService } from './../../core/services/app.service';
// import { ActivatedRoute, Params } from '@angular/router';
// import { SitePreferenceService } from './../../core/services/sitepreference.service';
// import { FrameworkService } from './../../core/services/framework.service';
// import { UserPreferenceService } from './../../core/services/userpreference.service';
// import { FWRoot } from './../../core/base/FWRoot';
// import { RouteURL } from './../../commonutil/utils/routeurl.util';
// import { Header } from './../../core/models/header.model';
// import { _ } from './../../../lodash';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private fwService: FrameworkService) {}
}
// export class HomeComponent extends FWRoot implements OnInit {
//   RootLeftNav: any[] = [];
//   capabilities = [];
//   capabilityGroup = {};
//   breadcrumbItemsArr = [];
//   backButtonPath = '';
//   constructor(
//     public _appService: AppService,
//     public _route: ActivatedRoute,
//     private sitePreferenceService: SitePreferenceService,
//     public fwService: FrameworkService,
//     public userPreferenceService: UserPreferenceService
//   ) {
//     super(_route, fwService);
//   }

//   ngOnInit() {
//     this._route.queryParams.subscribe((params: Params) => {
//       const urlPattern = this.sitePreferenceService.getleftNavPattern();
//       this.backButtonPath = RouteURL.getUrlPostFixParams(urlPattern, params);
//       this.breadcrumbItemsArr = [{ label: 'Home', path: '' }, { path: '', label: 'Manage Capabilities' }];

//       const header: Header = {
//         title: 'Manage Capabilities',
//         addWidget: false,
//         resetWidget: false,
//         breadcrumb: this.breadcrumbItemsArr,
//         addPages: false
//       };
//       this._appService.setHeader(header);

//       this.RootLeftNav = this._appService.getLeftNavModel();
//       this.capabilityGroup = _.groupBy(_.filter(this.RootLeftNav, data => data.managable === true), 'category');
//     });
//   }

//   addCapability(capability) {
//     capability.active = !capability.active;
//     this._appService.setLeftNavModel(this.RootLeftNav);

//     const leftnavObj = {};
//     this.RootLeftNav.forEach(item => {
//       leftnavObj[item.key] = {
//         text: item.text,
//         page: item.page,
//         active: item.active,
//         managable: item.managable
//       };
//     });
//     this.userPreferenceService.setLeftNavSettings(capability.key, capability.active, true, true);
//   }
// }

import { async, inject, TestBed } from '@angular/core/testing';
import { Header, ShowHeader } from '../models/header.model';
import { FrameworkService } from './framework.service';
import { UserService } from './user.service';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Api } from './api.service';
import { UserPreferenceService } from './userpreference.service';
import { WidgetstoreService } from './widgetstore.service';
import { SitePreferenceService } from './sitepreference.service';
import { ConfigurationService } from './configuration.service';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { AdalService } from './adal.service';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user.model';
export type Store = 'local' | 'session';
@Component({ selector: 'app-dummy', template: '' })
export class DummyComponent {}

describe('Framework Service', () => {
  let dummyComponent: Component;
  const fakeUserService = {
    setExternalUPI: code => {},
    getLoggedUserEmail: () => {},
    getLoggedInUser: () => {
      return 'user';
    },
    getExternalUser: () => {
      return true;
    }
  };

  const fakeAppService = {
    setHeader: (header: Header) => of({}),
    toggleHeader: (showHeader: ShowHeader) => of({}),
    setWidgetStoreRoute: () => of({}),
    getHeader: () => {
      const data = {
        title: 'Sample Landing',
        addWidget: false,
        resetWidget: false,
        addPages: false,
        breadcrumb: [{ label: 'Home', path: '' }]
      };
      return data;
    },
    toggleLeftNav: () => of({}),
    toggleSearchInHeader: () => of({}),
    getSiteContext: () => {
      return 'data';
    },
    setExternalUser: () => of({}),
    hideTheseWidgets: () => of({}),
    hideThisLeftMenuItem: () => of({}),
    setLeftNavModel: () => of({}),
    __updateSiteTitle: () => of({}),
    hideLeftMenuItem: of({}),
    header$: of({}),
    toggleControlSettings: () => of({}),
    setleftNavRoute: () => of({}),
    toggleFooter: () => of({}),
    setSiteContext: () => of({}),
    setAppData: () => of({}),
    getAppData: () => {
      return 'page1';
    },
    getLeftNavModel: () => {
      const data = {
        key: 'L1',
        route: '/layout1',
        active: true,
        text: 'Productivity',
        page: 'layout1',
        managable: false
      };
      return data;
    },
    pageRefresh$: () => of({}),
    contentLoader$: new Subject<boolean>(),
    toggleSiteTitle$: new BehaviorSubject<boolean>(true),
    toggleRightNav$: new Subject<boolean>(),
    navigateToMenuItem$: new Subject<string>(),
    loadRightNavPage$: new Subject<{
      title: string;
      component: Component;
      status: boolean;
      input?: any;
    }>(),
    hideLeftMenuItem$: new Subject<string>(),
    userInfo$: new Subject<User>(),
    changeSiteTitle$: new BehaviorSubject<{ title: string; link: string }>({
      title: '',
      link: ''
    }),
    showFooter$: new BehaviorSubject<boolean>(true),
    widgetStoreRoute$: new Subject<any>(),
    hideWidgets$: new Subject<Array<string>>(),
    showLeftNav$: new Subject<boolean>()
  };

  const fakeLocalStorageService = {
    get: (key: string, store: Store = 'local') => of({}),
    set: (key: string, data: any, store: Store = 'local') => of({})
  };

  const fakeApi = {
    delete: () => of({}),
    get: () => of({}),
    post: () => of({}),
    patch: () => of({})
  };

  const fakeUserPreferenceService = {
    getWidgetConfig: () => {
      return {};
    },
    setWidgetConfig: () => {},
    setGlobalAppSettings: () => {},
    getGlobalAppSettings: () => {
      return { pageName: 'Page 1' };
    }
  };

  const fakeWidgetstoreService = {
    getwidgetdetails: () => {
      const data = {
        wsmsqlid: 22,
        widgetCategory: 'CRM',
        isWidDisable: false,
        ismobiledisabled: true,
        enableforupis: null,
        widJson: '{}',
        isWidMultiple: false,
        createddate: 'Jun 7, 2018 6:23:55 PM',
        modifieddate: 'Jun 8, 2018 12:10:27 PM',
        widgetPosition: '{"L1": "L1P1", "L2":"L2P1"}',
        siteappid: {
          sitesqlid: 45,
          siteappid: 'APP0044',
          sitename: 'Core Framework',
          jsonversion: '1.0.0',
          defaultjson: '{}',
          ispublished: true,
          createddate: 'May 31, 2018 5:35:49 PM',
          modifieddate: 'Aug 30, 2018 2:26:09 PM',
          lastmodifiedby: null,
          isgroupind: false,
          parentappid: 'APP0098',
          routeparamtext: null,
          appdisplaycode: null
        },
        widgetKey: 'WID0011',
        widgetName: 'Issue Log'
      };
      return data;
    },
    getWidgetName: widgetId => {
      return 'Issue Log';
    }
  };

  const fakeSitePreferencesService = {
    hasPageLevelConfigEnabledForThisPage: () => {
      return true;
    }
  };

  const fakeConfigurationService = {
    config: {
      appKey: 'APP0023'
    }
  };

  const fakeAdalService = {
    acquireToken: () => of({})
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DummyComponent],
      providers: [
        FrameworkService,
        HttpClientModule,
        { provide: AppService, useValue: fakeAppService },
        { provide: UserService, useValue: fakeUserService },
        { provide: StorageService, useValue: fakeLocalStorageService },
        { provide: Api, useValue: fakeApi },
        { provide: UserPreferenceService, useValue: fakeUserPreferenceService },
        { provide: WidgetstoreService, useValue: fakeWidgetstoreService },
        {
          provide: SitePreferenceService,
          useValue: fakeSitePreferencesService
        },
        { provide: ConfigurationService, useValue: fakeConfigurationService },
        { provide: AdalService, useValue: fakeAdalService }
      ]
    });
  });

  it('should be created', inject([FrameworkService], (service: FrameworkService) => {
    dummyComponent = TestBed.createComponent(DummyComponent) as Component;
    expect(service).toBeTruthy();
  }));

  it(`trigger apiSetHeader`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetHeader({
        title: 'Operations Portal',
        addWidget: true,
        breadcrumb: '/home/OpsPortal'
      } as Header);
      expect(fwService.apiSetHeader).toHaveBeenCalledTimes(1);
    })
  ));

  it(`trigger apiToggleFooter`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleFooter(true);
      const returnValue = fwService.apiToggleFooter(true);
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger __setWidgetStoreRoute`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.__setWidgetStoreRoute({ section: 'layout1' });
      const returnValue = fwService.__setWidgetStoreRoute({
        section: 'layout1'
      });
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetHeader`, async(
    inject([FrameworkService, AppService], (fwService: FrameworkService, appser: AppService) => {
      fwService.apiGetHeader();
      const returnValue = appser.getHeader();
      expect(returnValue.title).toBe('Sample Landing');
    })
  ));

  it(`trigger apiToggleLeftNav`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleLeftNav(true);
      const returnValue = fwService.apiToggleLeftNav(true);
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiSetSiteContext`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetSiteContext({ section: 'page1' });
      const returnValue = fwService.apiSetSiteContext({ section: 'page1' });
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetSiteContext`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetSiteContext();
      const returnValue = fwService.apiGetSiteContext();
      expect(returnValue).toBeDefined();
    })
  ));

  it(`trigger apiSetAppData`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetAppData('section', 'page1');
      const returnValue = fwService.apiSetAppData('section', 'page1');
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetAppData`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetAppData('section');
      const returnValue = fwService.apiGetAppData('section');
      expect(returnValue).toEqual('page1');
    })
  ));

  it(`trigger apiGetExternalUser`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetExternalUser();
      const returnValue = fwService.apiGetExternalUser();
      expect(returnValue).toBeTruthy();
    })
  ));

  it(`trigger apiLSSet`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiStorageSet('userInfo', 'apiLS got it');
      fwService.apiStorageGet('userInfo').subscribe(data => {
        expect(data).toEqual(JSON.parse('{}'));
      });
    })
  ));

  it(`trigger apiLSGet`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiStorageSet('userInfo', 'apiLS got it');
      fwService.apiStorageGet('userInfo').subscribe(data => {
        expect(data).toEqual(JSON.parse('{}'));
      });
    })
  ));

  it(`trigger apiGetLoggedUserEmail`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      // expect(data).toBe('rchinnakampalli@worldbankgroup.org');
      fwService.apiGetLoggedUserEmail();
      const returnValue = fwService.apiGetLoggedUserEmail();
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetLoggedInUser`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetLoggedInUser();
      const returnValue = fwService.apiGetLoggedInUser();
      expect(returnValue).toBeDefined();
    })
  ));

  it(`trigger apiGetUserWidgetPref`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetUserWidgetPref('WID0011', 'layout1', true, 'CRM');
      const returnValue = fwService.apiGetUserWidgetPref('WID0011', 'layout1', true, 'CRM');
      expect(returnValue).toEqual({});
    })
  ));

  it(`trigger apiUpdateWidgetPreferences`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiUpdateWidgetPreferences('WID0011', 'layout1', true, 'CRM');
      expect(fwService.apiUpdateWidgetPreferences).toHaveBeenCalledTimes(1);
    })
  ));

  it(`trigger apiHideWidgets`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiHideWidgets(['WID007']);
      const returnValue = fwService.apiHideWidgets(['WID007']);
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiToggleLeftMenuItem`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleLeftMenuItem('Costs & Financing');
      const returnValue = fwService.apiToggleLeftMenuItem('Costs & Financing');
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetLeftNavModel`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetLeftNavModel();
      const returnValue = fwService.apiGetLeftNavModel();
      expect(returnValue['key']).toEqual('L1');
    })
  ));

  it(`trigger apiUpdateSiteTitle`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiUpdateSiteTitle('title');
      const returnValue = fwService.apiUpdateSiteTitle('title');
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiNavigateBack`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiNavigateBack('item1');
      expect(fwService.apiNavigateBack).toHaveBeenCalledTimes(1);
      fwService.menuBack$.subscribe(item => {
        expect(item).toEqual('item1');
      });
    })
  ));

  it(`trigger apiLoadRightNavDynamicPage`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiLoadRightNavDynamicPage('mypage', dummyComponent, true);
      expect(fwService.apiLoadRightNavDynamicPage).toHaveBeenCalledTimes(1);
    })
  ));

  it(`trigger apiToggleRightNav`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleRightNav();
      const returnValue = fwService.apiToggleRightNav();
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiToggleSiteTitle`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleSiteTitle();
      const returnValue = fwService.apiToggleSiteTitle();
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiSetGlobalAppSettings`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetGlobalAppSettings('page1', { pageName: 'Page 1' });
      const returnValue = fwService.apiSetGlobalAppSettings('page1', {
        pageName: 'Page 1'
      });
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetGlobalAppSettings`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetGlobalAppSettings('page1', { pageName: 'Page 1' });
      fwService.apiGetGlobalAppSettings('page1');
      const returnValue = fwService.apiGetGlobalAppSettings('page1');
      expect(returnValue['page1']).toBeUndefined();
    })
  ));

  it(`trigger apiGetWidgetDetails`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetWidgetDetails('WID0011');
      const returnValue = fwService.apiGetWidgetDetails('WID0011');
      expect(returnValue.widgetKey).toEqual('WID0011');
    })
  ));

  it(`trigger apiHasPageLevelConfig`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiHasPageLevelConfig('page1');
      const returnValue = fwService.apiHasPageLevelConfig('page1');
      expect(returnValue).toBeTruthy();
    })
  ));

  it(`trigger apiGetWidgetName`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetWidgetName('WID0011');
      const returnValue = fwService.apiGetWidgetDetails('WID0011').widgetName;
      expect(returnValue).toEqual('Issue Log');
    })
  ));

  it(`trigger apiToggleContentLoader`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiToggleContentLoader(true);
      const returnValue = fwService.apiToggleContentLoader(true);
      expect(returnValue).toBeUndefined();
    })
  ));

  it(`trigger apiGetWidgetName`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      const returnValue = fwService.apiGetWidgetDetails('WID0011').widgetName;
      expect(returnValue).toEqual('Issue Log');
    })
  ));

  it(`trigger apiGetConfiguration`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiGetConfiguration();
      const returnValue = fwService.apiGetConfiguration();
      expect(returnValue.appKey).toEqual('APP0023');
    })
  ));

  it(`trigger apiSetUserInfo`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiSetUserInfo({
        name: 'Sample Landing',
        upi: '540000',
        designation: 'false',
        location: 'false',
        phone: '98784548754'
      });
      const returnValue = fwService.apiSetUserInfo({
        name: 'Sample Landing',
        upi: '540000',
        designation: 'false',
        location: 'false',
        phone: '98784548754'
      });
      expect(returnValue).toBeUndefined();
    })
  ));

  xit(`trigger apiAcquireToken`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiAcquireToken('');
      const returnValue = fwService.apiAcquireToken('');
      expect(returnValue['_isScalar']).toBeTruthy();
    })
  ));

  it(`trigger apiNavigateToMenuItem`, async(
    inject([FrameworkService], (fwService: FrameworkService) => {
      fwService.apiNavigateToMenuItem('page2', '');
      const returnValue = fwService.apiNavigateToMenuItem('page2', '');
      expect(returnValue).toBeUndefined();
    })
  ));
});

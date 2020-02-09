import { Subject, of } from 'rxjs';

export class FakeGetters {
  get breadCrumbClick() {
    return of({});
  }
}

export const mockFrameworkService = {
  apiSetAppData: () => {},
  apiBreadcrumbClick: () => {},
  breadcrumbClick$: new FakeGetters().breadCrumbClick
};

// import map from 'lodash/map';

export class RouteURL {
  static getUrlPostFixParams(urlPattern, routeParams): string {
    const pattern = urlPattern.split('/');
    return pattern
      .map(o => {
        if (o.substr(0, 1) === ':') {
          return routeParams[o.substr(1)];
        }
        return o;
      })
      .join('/');
  }

  static pageNameFromPath(url: string) {
    const page: string[] = url.split('/');
    return page.length > 0 ? page[page.length - 1] : '';
  }

  // static getUrlPostFixQuery(queryParams): any[] {
  //     debugger;
  //     return _.map(query, (o) => {
  //         return { [query]: queryParams[o] };
  //     });
  // }
}

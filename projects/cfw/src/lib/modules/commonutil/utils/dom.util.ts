export class DomUtil {
  static getClosestElement(): void {
    if ((<any>window).Element && !Element.prototype.closest) {
      Element.prototype.closest = function(s) {
        const matches = (this.document || this.ownerDocument).querySelectorAll(
          s
        );
        let i = 0,
          el = this;
        do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {}
        } while (i < 0 && (el = el.parentElement));
        return el;
      };
    }
  }
}

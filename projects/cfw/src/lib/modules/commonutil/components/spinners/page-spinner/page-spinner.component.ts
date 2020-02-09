import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page-spinner',
  templateUrl: './page-spinner.component.html',
  styleUrls: ['./page-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageSpinnerComponent implements OnInit {
  constructor() {}

  @Input() title: string;

  ngOnInit() {}
}

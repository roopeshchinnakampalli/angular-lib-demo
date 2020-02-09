import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';
import { LispCasePipe } from './pipes/lisp-case.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { CompSpinnerSectionComponent } from './components/spinners/comp-spinner-section/comp-spinner-section.component';
import { CompSpinnerUserComponent } from './components/spinners/comp-spinner-user/comp-spinner-user.component';
import { PageSpinnerComponent } from './components/spinners/page-spinner/page-spinner.component';

const components = [CompSpinnerUserComponent, CompSpinnerSectionComponent, PageSpinnerComponent, KeysPipe, LispCasePipe, SafePipe];
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CompSpinnerUserComponent, CompSpinnerSectionComponent, PageSpinnerComponent, KeysPipe, LispCasePipe, SafePipe],
  exports: [CommonModule, CompSpinnerUserComponent, CompSpinnerSectionComponent, PageSpinnerComponent, KeysPipe, LispCasePipe, SafePipe],
  providers: []
})
export class CommonutilModule {}

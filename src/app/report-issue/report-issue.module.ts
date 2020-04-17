import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportIssueRoutingModule } from './report-issue-routing.module';
import { ReportIssueComponent } from './report-issue.component';


@NgModule({
  declarations: [ReportIssueComponent],
  imports: [
    CommonModule,
    ReportIssueRoutingModule
  ]
})
export class ReportIssueModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AuthenticationModule } from 'app/authentication/authentication.module';
import { AuthenticationService } from 'app/authentication/authentication.service';
import { CourseInfoModule } from 'app/course-info/course-info.module';
import { ReauthenticationDialogComponent } from 'app/authentication/reauthentication-dialog.component';

import { TranscriptComponent } from './transcript.component';
import { TranscriptRecordDirective } from './transcript-record.directive';
import { TranscriptTermDirective } from './transcript-term.directive';
import { TranscriptService } from './transcript.service';

@NgModule({
  declarations: [
    TranscriptComponent,
    TranscriptTermDirective,
    TranscriptRecordDirective
  ],
  imports: [
    AuthenticationModule,
    CourseInfoModule,
    BrowserModule,
    HttpModule,
    MaterialModule
  ],
  exports: [TranscriptComponent],
  providers: [AuthenticationService],
  entryComponents: [ReauthenticationDialogComponent],
})
export class TranscriptModule { }

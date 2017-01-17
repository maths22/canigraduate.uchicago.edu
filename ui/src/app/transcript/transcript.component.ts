import { Transcript } from './transcript';
import { TranscriptRecord } from './transcript-record';
import { Component, Input } from '@angular/core';
import { CourseInfoService } from 'app/course-info/course-info.service';

@Component({
  selector: 'cig-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent {
  @Input() transcript: Transcript;
  @Input() showGrades: boolean;
  constructor(private courseInfoService: CourseInfoService) { }

  // TODO: See if this can be moved to transcript.ts via a groupByTerm().
  getRecords(term: string): TranscriptRecord[] {
    return this.transcript.records.filter(r => r.term === term);
  }

  /**
   * Get the cumulative GPA up to a given term.
   * @param term The term to find cumulative GPA for, inclusive.
   * @returns number
   */
  getCumulativeGpa(term: string): number {
    let visited = false; // true if we've visited the target term.
    let total = 0.0;
    let count = 0;
    for (let record of this.transcript.records) {
      if (record.term === term) {
        visited = true;
      } else if (visited) { // Now on the quarter after the desired term.
        break;
      }
      if (record.gpa !== null) {
        total += record.gpa;
        count++;
      }
    }
    return count ? total / count : 0;
  }
}
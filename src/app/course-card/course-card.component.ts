import { Component, OnInit, Input } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { from } from 'rxjs';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  constructor() { }

  ngOnInit() {
  }

}

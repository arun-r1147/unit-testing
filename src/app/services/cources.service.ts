import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { HttpClient, HttpParams } from "@angular/common/http";
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {

  constructor(private http:HttpClient) { }

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }
 
  findAllCourses(): Observable<any> {
    return this.http.get("/api/courses").pipe(map((res) => res));
  }

  saveCourse(courseId: number, changes: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`/api/courses/${courseId}`, changes);
  }

  findLessons(
    courseId: number,
    filter = "",
    sortOrder = "asc",
    pageNumber = 0,
    pageSize = 3
  ): Observable<any> {
    return this.http
      .get("/api/lessons", {
        params: new HttpParams()
          .set("courseId", courseId.toString())
          .set("filter", filter)
          .set("sortOrder", sortOrder)
          .set("pageNumber", pageNumber.toString())
          .set("pageSize", pageSize.toString()),
      })
      
  }
}

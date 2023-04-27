import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginCredential } from '../models/credential';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';
import { AssessmentTemplate } from '../models/assessmentTemplate';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public login(credential: LoginCredential): Observable<any> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(credential);


    return this.httpClient.post(`${environment.apiUrl}/login`, body, { 'headers': headers });

  }

  getAssessmentTemplates(): Observable<{ assessmentTemplates: AssessmentTemplate[] }> {
    console.log("calling backend to get all templates");
    return this.httpClient.get<AssessmentTemplate[]>(`${environment.apiUrl}/assessmentTemplates`, { withCredentials: true })
      .pipe(
        map((data: AssessmentTemplate[]) => ({ assessmentTemplates: data }))
      );
  }


  getStudents(): Observable<{ students: Student[]}> {
    return this.httpClient.get<Student[]>(`${environment.apiUrl}/students`, { withCredentials: true })
      .pipe(
        map((data: Student[]) => ({ students: data }))
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as studentActions from 'src/app/app-state/actions/student.actions'; 
import { getStudents } from 'src/app/app-state/selectors/student.selectors';
import { AppState } from 'src/app/app-state/reducers';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  dataSource: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {

    this.store.dispatch(studentActions.getStudents())
    
    this.store.select(getStudents)
      .subscribe(
        data => this.dataSource = data

      )
  }

  
}

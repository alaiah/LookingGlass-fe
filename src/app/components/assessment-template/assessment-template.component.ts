import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/reducers';
import { getTemplates } from 'src/app/app-state/selectors/assessmentTemplate.selectors';
import { AssessmentTemplate } from 'src/app/models/assessmentTemplate';
import { BackendService } from 'src/app/services/backend.service';
import { getAssessmentTemplates } from 'src/app/app-state/actions/assessmentTemplate.actions'

@Component({
  selector: 'app-assessment-template',
  templateUrl: './assessment-template.component.html',
  styleUrls: ['./assessment-template.component.css']
})
export class AssessmentTemplateComponent {

  assessmentTemplates$?: Observable<AssessmentTemplate[]>;

  constructor(private store: Store<AppState>, private appService: BackendService) {}

  ngOnInit(): void {
    this.store.dispatch(getAssessmentTemplates());

    this.assessmentTemplates$ = this.store.select(getTemplates);


   
  }

}

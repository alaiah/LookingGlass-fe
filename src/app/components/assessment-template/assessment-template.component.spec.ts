import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTemplateComponent } from './assessment-template.component';

describe('AssessmentTemplateComponent', () => {
  let component: AssessmentTemplateComponent;
  let fixture: ComponentFixture<AssessmentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

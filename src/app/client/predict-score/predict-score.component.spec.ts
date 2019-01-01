import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictScoreComponent } from './predict-score.component';

describe('PredictScoreComponent', () => {
  let component: PredictScoreComponent;
  let fixture: ComponentFixture<PredictScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

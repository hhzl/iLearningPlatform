import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionModalPage } from './question-modal.page';

describe('QuestionModalPage', () => {
  let component: QuestionModalPage;
  let fixture: ComponentFixture<QuestionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeworkModalPage } from './homework-modal.page';

describe('HomeworkModalPage', () => {
  let component: HomeworkModalPage;
  let fixture: ComponentFixture<HomeworkModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworkModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

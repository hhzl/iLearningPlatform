import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseDashboardPage } from './course-dashboard.page';

describe('CourseDashboardPage', () => {
  let component: CourseDashboardPage;
  let fixture: ComponentFixture<CourseDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

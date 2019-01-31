import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityeditComponent } from './cityedit.component';

describe('CityeditComponent', () => {
  let component: CityeditComponent;
  let fixture: ComponentFixture<CityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

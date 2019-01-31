import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateeditComponent } from './stateedit.component';

describe('StateeditComponent', () => {
  let component: StateeditComponent;
  let fixture: ComponentFixture<StateeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

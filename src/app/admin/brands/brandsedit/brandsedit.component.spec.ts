import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandseditComponent } from './brandsedit.component';

describe('BrandseditComponent', () => {
  let component: BrandseditComponent;
  let fixture: ComponentFixture<BrandseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

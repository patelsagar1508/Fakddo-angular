import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandmodelseditComponent } from './brandmodelsedit.component';

describe('BrandmodelseditComponent', () => {
  let component: BrandmodelseditComponent;
  let fixture: ComponentFixture<BrandmodelseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandmodelseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandmodelseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

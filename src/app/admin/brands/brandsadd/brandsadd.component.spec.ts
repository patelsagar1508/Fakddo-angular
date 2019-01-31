import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsaddComponent } from './brandsadd.component';

describe('BrandsaddComponent', () => {
  let component: BrandsaddComponent;
  let fixture: ComponentFixture<BrandsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

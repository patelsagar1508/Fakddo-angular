import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandmodelsComponent } from './brandmodels.component';

describe('BrandmodelsComponent', () => {
  let component: BrandmodelsComponent;
  let fixture: ComponentFixture<BrandmodelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandmodelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

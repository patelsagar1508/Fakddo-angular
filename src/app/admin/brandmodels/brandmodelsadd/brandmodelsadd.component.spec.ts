import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandmodelsaddComponent } from './brandmodelsadd.component';

describe('BrandmodelsaddComponent', () => {
  let component: BrandmodelsaddComponent;
  let fixture: ComponentFixture<BrandmodelsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandmodelsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandmodelsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

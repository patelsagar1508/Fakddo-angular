import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersaddComponent } from './bannersadd.component';

describe('BannersaddComponent', () => {
  let component: BannersaddComponent;
  let fixture: ComponentFixture<BannersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

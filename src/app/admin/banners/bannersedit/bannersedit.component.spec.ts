import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerseditComponent } from './bannersedit.component';

describe('BannerseditComponent', () => {
  let component: BannerseditComponent;
  let fixture: ComponentFixture<BannerseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthomeComponent } from './producthome.component';

describe('ProducthomeComponent', () => {
  let component: ProducthomeComponent;
  let fixture: ComponentFixture<ProducthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

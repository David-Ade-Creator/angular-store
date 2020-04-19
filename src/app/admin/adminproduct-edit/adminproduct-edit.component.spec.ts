import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductEditComponent } from './adminproduct-edit.component';

describe('AdminproductEditComponent', () => {
  let component: AdminproductEditComponent;
  let fixture: ComponentFixture<AdminproductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminproductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

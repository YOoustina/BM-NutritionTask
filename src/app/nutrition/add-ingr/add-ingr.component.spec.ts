import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngrComponent } from './add-ingr.component';

describe('AddIngrComponent', () => {
  let component: AddIngrComponent;
  let fixture: ComponentFixture<AddIngrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

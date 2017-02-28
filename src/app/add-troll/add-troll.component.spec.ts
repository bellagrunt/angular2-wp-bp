import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrollComponent } from './add-troll.component';

describe('AddTrollComponent', () => {
  let component: AddTrollComponent;
  let fixture: ComponentFixture<AddTrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrollComponent } from './edit-troll.component';

describe('EditTrollComponent', () => {
  let component: EditTrollComponent;
  let fixture: ComponentFixture<EditTrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

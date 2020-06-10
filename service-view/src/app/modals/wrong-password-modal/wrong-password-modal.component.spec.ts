import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongPasswordModalComponent } from './wrong-password-modal.component';

describe('WrongPasswordModalComponent', () => {
  let component: WrongPasswordModalComponent;
  let fixture: ComponentFixture<WrongPasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongPasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

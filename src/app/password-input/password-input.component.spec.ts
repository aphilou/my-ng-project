import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputComponent } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  // Compiler le context du composant
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInputComponent ]
    })
    .compileComponents();
  }));

  // Instancié le composa,t
  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Les tests se lancent avec Angular cli
  // ng test
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

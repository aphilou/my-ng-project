import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputComponent } from './password-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HIDDEN } from './password-input.component';
import { VISIBLE } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  // Compiler le context du composant
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FontAwesomeModule],
      declarations: [ PasswordInputComponent ]
    })
    .compileComponents();
  }));

  // Instancié le composant
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

  it('should have default state to HIDDEN', () => {
    expect(component.state).toEqual(HIDDEN);
  });

  it('should go to HIDDEN', () => {
    component.state = VISIBLE;
    component.toggle();
    expect(component.state).toEqual(HIDDEN);
  });

  it('should go to VISIBLE', () => {
    component.state = HIDDEN;
    component.toggle();
    expect(component.state).toEqual(VISIBLE);
  });
});

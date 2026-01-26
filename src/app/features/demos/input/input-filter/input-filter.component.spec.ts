import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputFilterComponent} from './input-filter.component';

describe('InputFilterComponent', () => {
  let component: InputFilterComponent;
  let fixture: ComponentFixture<InputFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputFilterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Validate VIN checks', () => {
    beforeEach(() => {
      component.vin.hasFocus();
    });

    describe('Validate empty VIN', () => {
      beforeEach(() => {
        component.vin.vin = '';
      });

      it('should return false', () => {
        expect(component.vin.isInvalid()).toEqual(false);
      });

      it('should return no error messages', () => {
        expect(component.vin.getErrorMessages().length).toEqual(0);
      });
    })
    describe('Validate valid VIN', () => {
      beforeEach(() => {
        component.vin.vin = '1WWER345LGPYU4366'
      });

      it('should return false when VIN is valid', () => {
        expect(component.vin.isInvalid()).toEqual(false);
      });

      it('should return empty error array', () => {
        expect(component.vin.getErrorMessages().length).toEqual(0);
      });
    });

    describe('Validate invalid vin containing \'I\', \'O\' and \'Q\'', () => {
      beforeEach(() => {
        component.vin.vin = '1QEOPUI3456673455';
      });

      it('should return true when VIN is invalid', () => {
        expect(component.vin.isInvalid()).toEqual(true);
      });

      it('should return 3 error messages', () => {
        const errors = component.vin.getErrorMessages();
        expect(errors.length).toEqual(3);
        expect(errors[0]).toEqual('may not contain \'I\'');
        expect(errors[1]).toEqual('may not contain \'O\'');
        expect(errors[2]).toEqual('may not contain \'Q\'');
      });
    });

    describe('Validate VIN with lowercase letters', () => {
      beforeEach(() => {
        component.vin.vin = '3Erw45TYuwdf5466a';
      });

      it('should return true when VIN is invalid', () => {
        expect(component.vin.isInvalid()).toEqual(true);
      });

      it('should return 6 error messages', () => {
        const errors = component.vin.getErrorMessages();
        expect(errors.length).toEqual(6);
        expect(errors[0]).toEqual('may not contain lowercase letter \'a\'');
        expect(errors[1]).toEqual('may not contain lowercase letter \'d\'');
        expect(errors[2]).toEqual('may not contain lowercase letter \'f\'');
        expect(errors[3]).toEqual('may not contain lowercase letter \'r\'');
        expect(errors[4]).toEqual('may not contain lowercase letter \'u\'');
        expect(errors[5]).toEqual('may not contain lowercase letter \'w\'');
      });
    });
  });

  describe('Validate Email address', () => {
    beforeEach(() => {
      component.email.hasFocus();
    });

    describe('Validate empty Email address', () => {
      beforeEach(() => {
        component.email.email = '';
      });

      it('should return false when Email is empty', () => {
        expect(component.email.isInvalid()).toEqual(false);
      });

      it('should return empty error message array', () => {
        expect(component.email.getErrorMessages().length).toEqual(0);
      });
    });

    describe('Validate valid email', () => {
      beforeEach(() => {
        component.email.email = 'test-34_5@e-mail.com';
      });

      it('should return false when Email is valid', () => {
        expect(component.email.isInvalid()).toEqual(false);
      });

      it('should return empty error message array', () => {
        expect(component.email.getErrorMessages().length).toEqual(0);
      });
    });

    describe('Validate invalid email with no domain', () => {
      beforeEach(() => {
        component.email.email = 'wer';
      });

      it('should return true for invalid email', () => {
        expect(component.email.isInvalid()).toEqual(true);
      });

      it('should return error messages', () => {
        const errors = component.email.getErrorMessages();
        expect(errors.length).toEqual(2);
        expect(errors[0]).toEqual('must contain \'@\'');
        expect(errors[1]).toEqual('must contain \'.\' in domain');
      });
    });

    describe('Validate invalid email with no top level domain', () => {
      beforeEach(() => {
        component.email.email = 'name@email.';
      });

      it('should return true for invalid email', () => {
        expect(component.email.isInvalid()).toEqual(true);
      });

      it('should return error message', () => {
        const errors = component.email.getErrorMessages();
        expect(errors.length).toEqual(2);
        expect(errors[0]).toEqual('must contain top level domain');
      });
    });

    describe('Validate invalid email with invalid characters', () => {
      beforeEach(() => {
        component.email.email = 'na!#$%^&*()=+,<>/?e@email.com';
      });

      it('should return true for invalid email', () => {
        expect(component.email.isInvalid()).toEqual(true);
      });

      it('should return error messages', () => {
        const errors = component.email.getErrorMessages();
        expect(errors.length).toEqual(1);
        expect(errors[0]).toEqual('email contains invalid characters');
      });
    });
  });
});

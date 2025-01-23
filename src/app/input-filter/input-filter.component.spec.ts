import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {InputFilterComponent} from './input-filter.component';

describe('InputFilterComponent', () => {
  let component: InputFilterComponent;
  let fixture: ComponentFixture<InputFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        InputFilterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Validate VIN checks', () => {
    beforeEach(() => {
      component.vinActive = true;
    });

    describe('Validate empty VIN', () => {
      beforeEach(() => {
        component.vin = '';
      });

      it('should return false', () => {
        expect(component.isInvalidVin()).toBeFalse();
      });

      it('should return no error messages', () => {
        expect(component.vinErrorMessage().length).toEqual(0);
      });
    })
    describe('Validate valid VIN', () => {
      beforeEach(() => {
        component.vin = '1WWER345LGPYU4366'
      });

      it('should return false when VIN is valid', () => {
        expect(component.isInvalidVin()).toBeFalse();
      });

      it('should return empty error array', () => {
        expect(component.vinErrorMessage().length).toEqual(0);
      });
    });

    describe('Validate invalid vin containing \'I\', \'O\' and \'Q\'', () => {
      beforeEach(() => {
        component.vin = '1QEOPUI3456673455';
      });

      it('should return true when VIN is invalid', () => {
        expect(component.isInvalidVin()).toBeTrue();
      });

      it('should return 3 error messages', () => {
        const errors = component.vinErrorMessage();
        expect(errors.length).toEqual(3);
        expect(errors[0]).toEqual('may not contain \'I\'');
        expect(errors[1]).toEqual('may not contain \'O\'');
        expect(errors[2]).toEqual('may not contain \'Q\'');
      });
    });

    describe('Validate VIN with lowercase letters', () => {
      beforeEach(() => {
        component.vin = '3Erw45TYuwdf5466a';
      });

      it('should return true when VIN is invalid', () => {
        expect(component.isInvalidVin()).toBeTrue();
      });

      it('should return 6 error messages', () => {
        const errors = component.vinErrorMessage();
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
      component.emailActive = true;
    });

    describe('Validate empty Email address', () => {
      beforeEach(() => {
        component.email = '';
      });

      it('should return false when Email is empty', () => {
        expect(component.isInvalidEmail()).toBeFalse();
      });

      it('should return empty error message array', () => {
        expect(component.emailErrorMessage.length).toEqual(0);
      });
    });

    describe('Validate valid email', () => {
      beforeEach(() => {
        component.email = 'test-34_5@e-mail.com';
      });

      it('should return false when Email is valid', () => {
        expect(component.isInvalidEmail()).toBeFalse();
      });

      it('should return empty error message array', () => {
        const errors = component.emailErrorMessage();
        console.log('errors: ', errors);
        expect(component.emailErrorMessage().length).toEqual(1);
      });
    });

    describe('Validate invalid email with no domain', () => {
      beforeEach(() => {
        component.email = 'wer';
      });

      it('should return true for invalid email', () => {
        expect(component.isInvalidEmail()).toBeTrue();
      });

      it('should return error messages', () => {
        const errors = component.emailErrorMessage();
        console.log('errors: ', errors);
        expect(errors.length).toEqual(2);
        expect(errors[0]).toEqual('must contain \'@\'');
        expect(errors[1]).toEqual('must contain \'.\' in domain');
      });
    });

    describe('Validate invalid email with no top level domain', () => {
      beforeEach(() => {
        component.email = 'name@email.';
      });

      it('should return true for invalid email', () => {
        expect(component.isInvalidEmail()).toBeTrue();
      });

      it('should return error message', () => {
        const errors = component.emailErrorMessage();
        console.log('errors: ', errors);
        expect(errors.length).toEqual(2);
        expect(errors[0]).toEqual('must contain top level domain');
      });
    });

    describe('Validate invalid email with invalid characters', () => {
      beforeEach(() => {
        component.email = 'na!#$%^&*()=+,<>/?e@email.com';
      });

      it('should return true for invalid email', () => {
        expect(component.isInvalidEmail()).toBeTrue();
      });

      it('should return error messages', () => {
        const errors = component.emailErrorMessage();
        expect(errors.length).toEqual(1);
        expect(errors[0]).toEqual('email contains invalid characters');
      });
    });
  });
});

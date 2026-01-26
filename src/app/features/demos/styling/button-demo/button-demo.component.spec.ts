import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonDemoComponent} from './button-demo.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('ButtonDemoComponent', () => {
  let component: ButtonDemoComponent;
  let fixture: ComponentFixture<ButtonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonDemoComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

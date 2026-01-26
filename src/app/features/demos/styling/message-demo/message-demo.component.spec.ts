import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageDemoComponent} from './message-demo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('MessageDemoComponent', () => {
  let component: MessageDemoComponent;
  let fixture: ComponentFixture<MessageDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MessageDemoComponent,
        BrowserAnimationsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

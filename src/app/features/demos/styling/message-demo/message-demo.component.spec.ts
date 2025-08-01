import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { MessageDemoComponent } from './message-demo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('MessageDemoComponent', () => {
  let component: MessageDemoComponent;
  let fixture: ComponentFixture<MessageDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MessageDemoComponent,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

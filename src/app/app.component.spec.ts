import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideRouter} from "@angular/router";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'programmer-roadblocks' title`, () => {
    expect(component.title).toEqual('programmer-roadblocks');
  });
});

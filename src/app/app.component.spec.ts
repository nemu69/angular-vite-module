import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('AppComponent', () => {
  // beforeAll(() => {
  //   TestBed.initTestEnvironment(
  //       BrowserDynamicTestingModule,
  //       platformBrowserDynamicTesting()
  //     );
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-15-crud app is running!');
  });
});
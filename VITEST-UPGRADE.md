<style>
  htmll, body {
    height: 100%;
    background-color: #161616;
  }
  h1 {
    color: #6fbfbf;
    text-align: center;
    background-color: #4b4b4b;
    padding: 2rem;
  }
  h2 {
    color: #6fbfbf;
    border-bottom: 1px solid #6fbfbf;
  }
  h3 {
    color: #6fbfbf;
  }
  h4 {
    color: #69b5b5;
  }
  blockquote {
    background-color: #555555;
  }
  p {
    margin-left: 20px;
  }
</style>

# ![PRBDUDE](/public/favicon.ico) Programmer Roadblocks

ViTest is a replacement for KARMA and Jasmine.
ViTest seems to run faster and is more stable than KARMA.
When running tests, I no longer need to clear cache and restart the server.
I just re-run the tests.

The instructions below may not be complete.
Please refer to the project code.
When migrating from KARMA to VITEST,
I also migrated to "zoneless" as well as reinstalled eslint.

A few tests had to be re-done because the original tests were not correctly done.
Specifically the tests for "stepper" and "steps".

## Migration from KARMA to VITEST

After you have made sure that all packages are up to date,
you can migrate from KARMA to VITEST.

### Step 1

Remove Karma and Jasmine from package.json
> npm uninstall karma karma-chrome-launcher karma-jasmine karma-jasmine-html-reporter
>
> npm uninstall jasmine-core @types/jasmine

### Step 2

Add VITEST and JSDOM to package.json
> npm install vitest@4.0.18 jsdom@27.1.0 --save-dev

### Step 3

Add VITEST configuration files to a new folder called test under src.

- src/test/vitest.config.ts

```ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/vitest.setup.ts'],
  },
})
```
- src/test/vitest.setup.ts

```ts
if (!window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }) as MediaQueryList
}
```

### Step 4

Configure angular.json to use VITEST instead of KARMA.

***IMPORTANT*** Make sure that the development configuration is not abbreviated to dev.
it must be spelled out as development.

#### in the "test" section of angular.json

Replace the entire "test" section with the following:

```json
        "test": {
          "builder": "@angular/build:unit-test",
          "options": {
            "runnerConfig": "src/test/vitest.config.ts"
          }
        },
```

### Step 5

Update the tsconfig.spec.json file to use VITEST instead of Jasmine.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

### Step 6

In the scripts section of package.json, remove the --browsers=ChromeHeadless option from the test script.

```json
    "test": "ng test"
```

### Step 7

Refactor all test files to use VITEST syntax.

Remove "waitForAsync" from all test files (if you are using it).
And replace it with "async" and "await".

Instead of using "fixture.detectChanges()" use "await fixture.whenStable()".

#### Sample of a component test

```ts
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
```

Make sure that all tests for components have:

```ts
    providers: [
      provideHttpClient(),
      provideHttpClientTesting()
    ]
```

#### Sample of a service test 

```ts
describe('JobService', () => {
  let service: JobService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```

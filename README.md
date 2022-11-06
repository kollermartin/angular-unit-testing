# AngularUnitTesting

# Jest

Setup Jest in your angular project:

1. npm install jest jest-preset-angular @types/jest --save-dev
2. Create "setup.jest.ts" in project folder with following import: 

    import 'jest-preset-angular/setup-jest';

3. Add following entry to "package.json"

  "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": ["<rootDir>/setup.jest.ts"]
  }

4. In tsconfig.spec.json replace "jasmine" with "jest" in "compilerOptions" in "types". Also remove "src/test.ts" in "files"

    "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest"
    ]
  }


5. Replace scripts in package.json
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"

6. Uninstall Karma/Jasmine packages

  npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter


7. Remove useless files
  test.ts
  karma.conf.js

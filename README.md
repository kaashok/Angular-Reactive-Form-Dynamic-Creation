# DynamicFormCreation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

In this project, We are going to explore, how to create reactive form dynamically based on the json.

Eg: sample json

`{
    empName: {
      name: 'Employee Name',
      validators: [Validators.required]
    },
    empEmailId: {
      name: 'Employee Email Id',
      validators: [Validators.required, Validators.email]
    }
}`

Based on the above json, we are going to create form controls. Please refer [dynamic-mat-form-creation.component.html](https://github.com/kaashok/Dynamic--Angular-Reactive-Form-Creation/blob/main/src/app/components/dynamic-mat-form-creation/dynamic-mat-form-creation.component.html) and [dynamic-mat-form-creation.component.ts](https://github.com/kaashok/Dynamic--Angular-Reactive-Form-Creation/blob/main/src/app/components/dynamic-mat-form-creation/dynamic-mat-form-creation.component.ts) file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

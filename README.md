# MyNgProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.
To install it:
```bash
npm install -g @angular/cli
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```bash
$ ng g c header
$ ng g c body
$ ng g c footer
$ ng g c password-input
```

## Add the use of Angular Materials

Run `ng add @angular/material` will update your Angular project with the correct dependencies, perform configuration changes and execute initialization code.  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
For instance for current poject:
```bash
$ ng build --base-href=/my-ng-project/ --prod --output-path=../exo/my-ng-project
```
Another interesting cli tool to deploy build path to the github hosting environment
```bash
$ npm i -g angular-cli-ghpages
$ ng build --base-href="https://aphilou.github.io/my-ng-project/" --prod 
$ angular-cli-ghpages
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Exercice
- Librairie des icons [Font awesone](https://fontawesome.com/)
    ```bash
    npm install @fortawesome/fontawesome-free

    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
    npm install @fortawesome/angular-fontawesome
    ```

- Tests Unitaires
    - [Karma](http://karma-runner.github.io/2.0/index.html)
        - Les test se lancent par
        ```bash
        npm test        
        ```

- Tests d'Intégration
    - [Protactor](https://www.protractortest.org/#/)
        - Les test se lancent par
        ```bash
        npm e2e        
        ```

# single-spa Examples

Example codes for [single-spa](https://github.com/single-spa) project and sub-projects.
Includes both working examples and error reproduction.

This repository is **not**:

* Official (by single-spa team)
* Trying to present all scenarios
* Following all single-spa or other libraries versions
* Proof of anything
* Always following the recommended setup and best practices
* Always right, maybe not event most of the time

This repository is:

* Representing my personal needs and preferences
* A guide to help you get started and see what I got right (or wrong)
* Usually following the recommended setup and best practices
* A laboratory to experiment on solutions
* Currently focused on Angular and single-spa-angular

## Running

This is how you run this example:

1. Build dependency libraries:

    1. Open a terminal on `builder11` directory;
    2. Run `npm install`;
    3. Run `./ng-all.sh build`. In case you can not run this script, for example if you are in
       Windows, then build every project manually with `npm build <project>`. Maybe I should build
       a npm script for this, or use an existing one. :-)

2. Run root:

    1. Open a terminal on `root` directory;
    2. Run `npm install`;
    3. Run `npm start` and leave it running.

3. Run proxy:

    1. Open a terminal on `proxy` directory;
    2. Run `npm install`;
    3. Run `npm start` and leave it running.

4. Run app11:

    1. Open a terminal on `app11` directory;
    2. Run `npm install`;
    3. Run `npm run serve:single-spa:app11` and leave it running.

5. Access `http://localhost:9000/app11` on your browser.

### Angular libraries overriden

If you getting the following error:

    Uncaught NullInjectorError: StaticInjectorError(Platform: core)[CompilerFactory]: 
      NullInjectorError: No provider for CompilerFactory!
        at NullInjector.get (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:1290:39)
        at resolveToken (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:14606:36)
        at tryResolveToken (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:14532:28)
        at StaticInjector.get (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:14386:32)
        at compileNgModuleFactory__PRE_R3__ (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:34936:50)
        at PlatformRef.bootstrapModule (https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@9.1.3-fix.0/system/es2015/angular-core.js:35276:28)
        at Object.bootstrapFunction (http://localhost:4200/main.js:2422:179)
        at http://localhost:3000/angular11/single-spa-angular/single-spa-angular.js:425:42
        at Generator.next (<anonymous>)
        at https://cdn.jsdelivr.net/npm/tslib@2.0.3/tslib.min.js:21:2394

Check if you are downloading an Angular 9 `angular-core.js`  from jsdelivr. If that is the case, you
may be using [import-map-overrides](https://github.com/joeldenning/import-map-overrides) and it may
have "Dev Lib Override" forcing this dependency. Disable such overrides so the default ones can be
used, they will be the ones from the project.

## Scenarios

Each building block or scenario is placed on a different branch.

Clone this repository and **follow git log** to see each step used to build the scenario and
understand the reason for each change.
I am no longer building a summary doc since it is more work than building the example itself.

For the same reason I am not including error documentation here anymore.
All the required information should be in the issue I linked this code from.

Milestones and scenario listing can be found as
[releases](https://github.com/daniloesk/single-spa-examples/releases).


## Angular notes

* Angular projects are built without tests (minimal) and usually with inline templates and styles
  for example simplicity. I recommend the opposite.

## Thanks

To all single-spa team and community.

# ME #

Portfolio/bio static site for [myself](https://github.com/tombannister-94/) built using my [static-frontend-base](https://github.com/tombannister-94/static-frontend-base/) repo.

## Setup ##

Your new project will run a simple Django application, and the asset build step with Docker. You will need to install Docker ([Windows](https://docs.docker.com/docker-for-windows/install/), [OSX](https://docs.docker.com/docker-for-mac/install/), [Linux](https://docs.docker.com/install/linux/docker-ce/centos/)) and [Docker Compose](https://docs.docker.com/compose/install/).

## Local Server ##

After building the docker containers (`docker-compose build`) you will be able to run `docker-compose up server` to run the local server at `localhost:5000`.

Once running, you can access templates by visiting `http://localhost:5000/[template-name].html` where `template-name` corresponds to the file name inside the `templates/` directory.

## Static ##

This area is set up to use [Yarn](https://yarnpkg.com) and [Browserify](http://browserify.org/) to compile assets and manage dependencies.
After building the docker containers (`docker-compose build`) you will have access to a number of options for compiling static files.

1. `docker-compose up build` This will perform a single run of the build step, compiling SASS and JS into the `static/dist/` directory.
2. `docker-compose up watch` This will watch the files inside `static/src/` and automatically run the build step after changes are made.

## Including javascript packages ##

In order to install a JS dependency, run `yarn add [package-name]` from within the `static/` directory inside the server container (`docker-compose exec web bash`).

To include a dependency in a JS file you can use either ES6 module syntax or Common JS require, for example:

    import jQuery from 'jquery';
    import 'select2';

    var $ = require('jquery')
    require('select2')

## Linting ##

Building assets in this way allows us to include both javascript and SASS linting as part of the compilation process.

Any errors, along with their location, will be shown in the console when the build or watch commands are run.

If you wish to configure what checks are made on your assets then for the javascript settings are in `static/.eslintrc.json` and the SASS settings are in `static/.sass-lint.yml`.

## SASS ##

The structure used is based on [ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) and includes some generic mixins for convenience.

## Static HTML Compilation ##

Running `docker-compose up static` will compile all the templates into static HTML using [Django Distill](https://github.com/meeb/django-distill) and output them into the `build/` directory.

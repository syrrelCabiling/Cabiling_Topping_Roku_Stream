# Roku Flashback Project

### Take a trip back to yesteryear with your old audio, tv and film faves!

#### Setup
You have some options - Docker, or old school. 

If you're using a traditional PHP platform, then clone the repo to your localhost location (htdocs, www directory or wherever your local server expects to find your files).

This is built with PHP on the back end, so you can either install the db_movies database with the tool of your choice, or drop the crutches and use the command line!. Configure your connection settings and you're ready to go.

Or you can let Docker do its thing.  

If you don't have Docker installed, you'll need to get it [here](http://www.docker.com).

CD into the project directory and run docker-compose up  
When you're done, run docker-compose down

Your app is running on http://localhost:8010  
phpmyadmin is running on http://localhost:8011


#### Dependencies:
We've rolled our own PHP - no frameworks, just some classes and a bit of procedural code.

We use Vue on the front end, but not the CLI or webpack - just Vue with ES6 modules. Also - no jQuery, just plain old JavaScript.

We use Gulp for tooling - check <code>gulpfile.js</code> for reference. NPM install should get you up and running with your dev tools.

We also use SASS.

#### Built with:
Vue (bare bones - no webpack!)

vue-router

Boostrap 4

PHP

JavaScript

#### Authors / Dev Team:
TVR and SpiderPan

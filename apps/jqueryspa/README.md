Single Page Application
============

This is a single page application skeleton project using **AngularJS**, **RequireJS** and **JQuery**  
   It is based on the [JQuery Conference site](http://events.jquery.org/2014/chicago/). I have downloaded the [TodoMVC AngularJS + RequireJS](http://todomvc.com/) project and modified it to fit this project.
     
It can be easily modified and be adjusted to fit your web or mobile-web site. All you have to do is to insert your content pages and modify the meta-data file descriptor and... that's it.  

I used [lesscss](http://lesscss.org/) and [lesshat](http://lesshat.madebysource.com/) for generating the application's CSS file.  
In additional there's a basic NodeJS server for running the application.  
    
# Demo

# How To

* web/js/pages is the folder for your section content, in this folder create all of your HTML files to be placed in the main view.
* web/data/app.json is the meta-data file, set your items in this file, point the HTML page to the item and you'll be able to see the content in the view and the items in the menu.
* In case you wish to add CSS to your content add less files accordingly in web/css/less/pages folder and don't forget to import them in app.less file.
* Tools: to be able to run the less builder and the NodeJS server, you have to have NodeJS installed.
    * Install NodeJS
    * From the root project run the command line, <code>NPM Install</code> for installing the NodeJS dependencies
    * From the root project run the command line, <code>node lessbuilder</code> for generating the jqueryspa.css file
    * To run the server, from the root project run the command line, <code>node demo-server start</code> 
    * When the server is up go to: http://localhost:8080/web
* [Bower](http://bower.io/) need to be installed in case you wish to update the web libraries. From the *web* folder run the command line: <code>bower install</code>

# catjs built-in tests
[CatJS](https://www.npmjs.org/package/catjs) is an open source automation framework that I'm using for testing this application.  
 Annotation within comments are placed and for creating a test deployment you need to use CatJS framework, for any additional information see: [NPM Module](https://www.npmjs.org/package/catjs), [Github](https://github.com/catjsteam)  
 
 
        
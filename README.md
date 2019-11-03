<div align="center">
<img src="assets/nodejs.png">
<h3> Node-js</h3>
</div>

> ### what is node js ?

node is runtime enviroment of javascript and nodejs is not programming language and not framework build on the v8 javascript engine

> ### Working

node uses a single thread to execute multiple requests asynchronously supports concurrency via events and callbacks. 

> ### why to use Node-js ?

* event driven , non blocking i/o model
* great for prototyping and agile development 
* superfast and high scalable 
* javascript everywhere 
* cleaner and more consistent codebase
* large ecosystem of open source libs

> ### best type of projects for node

1. RestApi and microprocess
2. real-time services (chat, live updates)
3. CRUD APPS - blogs, shopping carts, social network
4. tool and utilities

> ### Not use for cpu intensive related application

1. install a 3rd package (frameworks, library, tools)
2. package get stored in mode_modules
3. all dependencies are listed in package.json file
4. NPM scripts can be created to run certain to run certain task such as a run server

#### Install [Node.js](http://nodejs.org/) (4.0.0 or later)

1. Install dependencies
   ```sh
   $ npm install
   ```
2. Generate a package.json
   ```sh
   $ npm init
   ```
3. Install a package locally
   ```sh
   $ npm install express
   ```
4. Install a package globally
   ```sh
   $ npm install -g nodemon 
   ```
5. To run a file 
   ```sh
   $ npm filename 
   ```
> ### Node module system

1. open system 
2. file system
3. events
4. http
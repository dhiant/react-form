## Getting Started with Vite

This project was bootstrapped with Vite.

## Handle & Validate Forms in React

An application used to validate forms in react without a library.

## Overview of Vite
<h5>Vite  is the next generation in frontend tooling. It focuses on speed and performance by improving the development experience for modern web projects.</h5>
<p>
  It consists of two major parts:
  <ul> 
    <li>A dev server which provides support for Hot Module Replacement (HMR) for updating modules during the execution of the application. When changes are made to the source code of an application, only the changes are updated, rather than the entire application. This feature helps speed up development time. </li>
    <li>A build command that bundles your code with Rollup, pre-configured to output highly optimised static assets for production. </li>
</ul>
    
</p>

## Why Vite over Create React App?
<h3>Hot Module Replacement(HMR)</h3>
<p>Vite uses HMR capabilities to keep track of changes in your application without reloading the full page. With the HMR API, the browser will only load the modified section of the page and still retain the application's state.

You don't need to manually set these up - when you create an app via create-vite, the selected templates would have these pre-configured for you already.</p>

  <h3>Native ECMAScript module support </h3>
  <p> 
  Vite supports ES modules natively. It allows you to develop for the browser with bare imports like TypeScript and
    it converts them to proper versioned imports on build.
  </p>
  <h3>Speed</h3>
  <p>Vite is 10–20 times faster than CRA because it uses esbuild instead of webpack under the hood. It’s hard to describe how much faster it feels but all changes are essentially instantaneous in your browser.

One thing to note is that Vite doesn’t type check your code. It only transpiles TypeScript to JavaScript. So you might find some static bugs when building later in your development pipeline. Your IDE should help with this though.</p>
  
  
  ## What is the use of this repo?

This Project is a Simple ReactJS Project which demonstrates the following

<ul>
  <li>Creating a react app using Vite.</li>
  <li>Form Validation </li>
  <li>Form Handling</li>
  <li>Using pure CSS for styling</li>
  

</ul>
  
## Live Application URL



## Prerequisties

### Install `Node JS`

Refer to https://nodejs.org/en/ to install nodejs
Node.js version 12.2.0 or higher is required.

### Install `npm`
Package manager - Npm or Yarn
Along with nodejs npm gets downloaded globally in your computer. Run `npm -v` in terminal to confirm if it is downloaded.
  
  
### Compatible browser for development

## Setup Instructions

Once nodejs is installed on your computer run `node -v` to see the downloaded version and `npm -v` in the terminal (git bash)to see their downloaded version.
Sometimes we'll get error while creating a react app. This may be the case of nodejs version. In that case, you need to downgrade the nodejs version. If you have nodejs version 17+, it's better to use version 16+.<a href = "https://heynode.com/tutorial/install-nodejs-locally-nvm/" target="_blank"> Click the link </a> to solve the problem.

#### Example:

Clone down this repository. Run`git clone https://github.com/dhiant/react-form.git` in the terminal.

Installation:

`npm install`

To Start Server:

`npm run dev` - now the react app gets rendered in browser

To Visit App:

`localhost:3000/`

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

To learn React, check out the [React documentation](https://reactjs.org/).

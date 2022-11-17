Babel
- is a JavaScript transpiler 
- that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser

Babel
- Babel doesn't do anything out-of-the-box
- To make Babel actually do something, we need to add a plugin. 
    It’s the plugins that does the heavy lifting.
- Each plugin is it’s own NPM library. 
    So for every plugin you want to install, you have to install a new NPM library 


Presets
- Instead of adding each plugin one by one...
- The Babel foundation has created presets that contains common bundles of plugins
- The official presets are:
    @babel/preset-env
    @babel/preset-flow
    @babel/preset-react
    @babel/preset-typescript


@babel/preset-typescript ===> recommended if you use TypeScript; You will need to specify --extensions ".ts"
@babel/preset-env ====> all plugins you need to transpile all ES6 features!
------------------------------------------------------------------------------------------------------------------------------

(A) add a script file in package.json
(B) run from node_modules
    `./node_modules/.bin/babel srcBabel44/local_test_babel1.js`
(C) run with plugins & stuff
    transforms js file (which has arrow functions) into another js file which is ES2015 compatible
    `./node_modules/.bin/babel srcBabel44/local_test_babel2.js --out-file srcBabel45/local_test_babel2_output1.js --plugins=@babel/plugin-transform-arrow-functions`
(C1) instead of providing plugins in cli, you can add .babelrc file... add plugins property there
    `./node_modules/.bin/babel srcBabel44/local_test_babel2.js --out-file srcBabel45/local_test_babel2_output2.js`
(D) transforms all files within srcBabel44 folder ---> outputs into srcBabel45 folder
    `./node_modules/.bin/babel srcBabel44 --out-dir srcBabel45 --plugins=@babel/plugin-transform-arrow-functions`
(E) generate a single js for all files
    `./node_modules/.bin/babel srcBabel44 --out-file srcBabel45/singleFile.js`

Note: 
- we can use --out-dir or -d
- Compile the entire src directory and output it as a single concatenated file.
    --out-file script-compiled.js
-------------------------------------------------------------------------------------------------------------------------------

./node_modules/.bin/babel src232 --out-dir lib
    parse all the JavaScript files in the src232 directory, 
    apply any transformations we have told it to, 
    and output each file to the lib directory. 
    Since we haven't told it to apply any <transformations> yet, the output code will be identical to the input
    

Transformations 
- come in the form of plugins, 
- which are small JavaScript programs 
- that instruct Babel on how to carry out transformations to the code



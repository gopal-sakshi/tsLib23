Babel
- is a JavaScript transpiler 
- that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser

Babel
- Babel doesn't do anything out-of-the-box
- To make Babel actually do something, we need to add a plugin. 
    It’s the plugins that does the heavy lifting.
- Each plugin is it’s own NPM library. 
    So for every plugin you want to install, you have to install a new NPM library 
- For a list of helpful plugins, see
    https://github.com/babel/awesome-babel

Presets
- Instead of adding each plugin one by one...
- The Babel foundation has created presets that contains common bundles of plugins
- The official presets are:
    @babel/preset-env
    @babel/preset-flow
    @babel/preset-react
    @babel/preset-typescript


@babel/preset-typescript ===> recommended if you use TypeScript; You will need to specify --extensions ".ts"
@babel/preset-env ====> 
    all plugins you need to transpile all ES6 features!
    transforms based on the specified <environment> (browsers, node, electron).
------------------------------------------------------------------------------------------------------------------------------
use <babel.config.json>
    You are using a monorepo
    You want to compile node_modules
<babelrc>
    You have a configuration that only applies to a single part of your project
<babel> property in package.json
    
------------------------------------------------------------------------------------------------------------------------------
`without using .babelrc`            
./node_modules/.bin/babel srcBabel44/babel2.js
    see the output... arrow functions wont get transformed (coz, we didnt use plugins)

./node_modules/.bin/babel srcBabel44/babel2.js --plugins=@babel/plugin-transform-arrow-functions
    see the output... arrow functions will be transformed we used plugins

./node_modules/.bin/babel srcBabel44/babel2.js --out-file srcBabel45/babel2a.js --plugins=@babel/plugin-transform-arrow-functions
    output wont be logged to console
    a newFile "babel2a.js" will be created 


`using .babelrc`                <rename .babelrc_backup to .babelrc>
./node_modules/.bin/babel srcBabel44 --out-dir srcBabel45
    all files in <srcBabel44> will be transpiled into destination folder <srcBabel45>
./node_modules/.bin/babel srcBabel44 --out-file srcBabel45/singleFile23.js
    generate a singleJs for all input files
    

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
-------------------------------------------------------------------------------------------------------------------------------
src folder
    encrypt23.ts
    decerypt23.ts

You export both `encrypt23.ts` & `decrypt23.ts`
but when you require these files in another module ===> It wont work
    ie require('./src/encrypt23.ts') =================> WONT WORK
Becuase require() module only looks for these files
    .js
    .json
    .node       // high level (dont bother for now)
But what you exported are .ts files                         // SO WONT WORK
------------------------------------------------------------------------------------------------------------

# What you need to do

write a library in typescript...
transpile & stuff into javascript
export those transpiled javascript files
now use require module to find those `transpiled javascript files`
    not the typescript where the code was written originally...

------------------------------------------------------------------------------------------------------------

The following paths are ignored by one of your .gitignore files:
lib_compiledJs

git check-ignore -v path/to/check
(or) 
add !       // important
# Ignore files from your npm package
.gitignore file
.npmignore file
files

npm will check your repository for a `.gitignore` 
    If there is a .gitignore file, npm will ignore files according to what’s listed in the .gitignore file.

A second way is to blacklist files with a `.npmignore file`
    If you have a .npmignore file, npm will use the .npmignore file. 
    npm will ignore the .gitignore file altogether

Whitelisting files with the `files property` in package.json
    whitelist files you want to be included in the package.json file, under the files property.
    create a files property in the package.json file. 
        Then, provide a list of files you’d like to include.

see https://unpkg.com/browse/gopal612-tslib23@1.0.1/
only these stuff will be included in the npmjs package
    `package.json`
    `entry file` mentioned in <main property> of package.json
    `src folder` mentioned in <files property> of package.json
----------------------------------------------------------------------------------------------------------------------------------------

By default these files/folders wont be part of npmjs package anyway
    .git
    .gitignore
    .npmignore
    .npmrc
    package-lock.json
    node_modules
----------------------------------------------------------------------------------------------------------------------------------------
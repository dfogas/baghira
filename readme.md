#How I built my devstack

##step 1 - data fetching
**prerequisities**: NodeJS v10 and local instance of mongoDB installed
npm install express, mongoose and body-parser (write server and  RESTful API) place it in ./src/server
from root run node ./src/server/server.js and check port logged to console (usually 3300) and check urls - default '/', /about, /specrunner and /api/agents routes;
BAM your done w/ 1st part


##step 2 - workflow

npm install webpack(build system || module bundler), gulp (task runner), webpack-dev-server (for development node environments), gulp-bg (simple utility for running process in the background), gulp-util (you guess what comes here),
and harmonize (setting up node's --harmony flag programatically i.e. through gulpfile.js), and run-sequence (for running gulp tasks sequentially) and yargs( helper, similar to optimist)

webpack also installs node-libs-browser as side node_module don't be surprised by that.

write devserver, build, makeconfig .js-files in webpack folder.

link them all to gulpfile.js and define *gulp*, *gulp -p* and *gulp test* commands, make sure you separate production and development environment

try running those commands, if you succeed in running them w/out error (if you get error that some client file you specified is missing, when running development, it is O.K., we haven't made it yet)

BAM! your done w/ step 2, continue w/ step 3
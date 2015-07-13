#How I built my devstack

##Final note
Ok, so with this final push I am abandoning this project. I learned a lot while trying to assemble this devstack. I wonder whether it was worth the time and effort. For my next project I am choosing Dan'scalable
Este, (or better I have chosen, because it is underway), which is simply beautiful. So far the only features that need solving there are circular dependencies and test framework (jest was no go), mocking environment for tests.

###Intro
###=====

Primary question is - what projects my devstack should be used for? As npm description states this stack intends to be "learning devstack based on react-flux architecture, aiming for isomorphic feature".

As such, it should be well performing(if immutable.js added then high-performing), able to build rich user interfaces thanks to React, easily scalable thanks to simple eventing model provided by flux and
have all isomorphic features like no loading time, working w JS turned off and SEO friendliness.

###step 1 - data fetching
###---------------------

**prerequisities**: NodeJS v10 and local instance of mongoDB installed
npm install express, mongoose and body-parser (write server and  RESTful API) place it in ./src/server
from root run node ./src/server/server.js and check port logged to console (usually 3300) and check urls - default '/', /about, /specrunner and /api/agents routes;
BAM your done w/ 1st part

###step 2 - workflow
###---------------------

**npm install** webpack(build system || module bundler), gulp (task runner), webpack-dev-server (for development node environments), gulp-bg (simple utility for running process in the background), gulp-util (you guess what comes here),
and harmonize (setting up node's --harmony flag programatically i.e. through gulpfile.js), and run-sequence (for running gulp tasks sequentially) and yargs( helper, similar to optimist)

*webpack also installs node-libs-browser as side node_module don't be surprised by that.*

write devserver, build, makeconfig .js-files in webpack folder.

link them all to gulpfile.js and define *gulp*, *gulp -p* and *gulp test* commands, make sure you separate production and development environment

try running those commands, if you succeed in running them w/out error *(you might get error that some client file you specified is missing, when running development, it is O.K., we haven't made it yet)*

BAM! your done w/ step 2, continue w/ step 3

###step 3 - react components and routing
###-----------------------------------

**React** is extremely useful and well done *library for building rich user interfaces*, keyword here is **composability**. React-router goes well with React I assume so let's install this one too. Lets install babel for integrated
jsx support (also supports ES6 and ES7 features - if you care for them), I prefer ES5 mostly (strict mode?).

Now go create some simple React component like comments, maybe, and of course define routes for '/', '/about', '/specrunner' and perhaps we can leave out 'api/agents', '/comments', whatever, but make sure you create the
'404' page as well

###step 4 - user control and eventing w/ flux
###----------------------------------------

**auth** module npm, help should be mirrored by Dan's este (refresh last version) and add react components and flux eventing so that user can log and post comments under his name, he ought to be able also edit/delete comments, and view
other comments (perhaps react to theirs comments), w persistence for next login, perhaps?

###step 5 - aiming for isomorphic feature rearrangements
###----------------------------------------------------

What is Isomorphic JavaScript?

TL;DR: JavaScript rendered on the server AND the client.

In a nutshell, you are rendering your application markup on the server & piping it down as the complete html to the browser.

(Sidenote: Isomorphism is also a mathematical term that means something different, but whatever. This is about JS)

###step 6 - unit testing?, linting?, checking for broken links?, 3rd party API integrations
###-----------------------------------------------------------

unit testing is mainly solid design helper, but also reference for later CI, other quality tools like linting w eslint is probably

###step 7 - deployment && continuous integration
###-----------------------------------------  

final featuring which makes this whole charade to be of some use, no?

###Ending note
###==========

One feature that I would like to add is tracking of the state and possibly stateless stores Redux, which enables fully hot reloadable DE. Let's see how the future turns out to be.

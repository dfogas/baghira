#How I built my devstack

##step 1 - data fetching
**prerequisities**: NodeJS v10 and local instance of mongoDB installed
npm install express, mongoose and body-parser (write server and  RESTful API) place it in ./src/server
from root run node ./src/server/server.js and check port logged to console (usually 3300) and check urls - default '/', /about, /specrunner and /api/agents routes;
BAM your done w/ 1st part


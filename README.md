Set Up Node.js Express Server
Let’s start by building our API server, which fetches and returns a random programming quote. First, we create a project folder, initialize a project with yarn, and then add our dependencies:
```
~$ mkdir project && cd project
~/project$ yarn init
...
~/project$ yarn add express axios
...
```

What happens in index.js?
Let’s briefly explain what happens in this file:

1. Initialize package constants and prepare an Express server called app.
2. Initialize a requestCount counter variable.
3. Set the server to listen for GET requests on the / path, which will trigger the following:
4. Increment the request counter.
5. Log the endpoint hit to the console.
6. Use axios to send a request to the Programming Quotes API.
7. Retrieve the author and the quote from the axios response data.
8. Send a response with text containing the quote and author.
9. Set the server to listen on port 8080.

In our terminal, we run node index.js to start our API server.

In a separate terminal, we use curl to send several requests to our API server.
```
~$ curl localhost:8080
"Coding is "90 percent finished" for half of the total coding time. Debugging is "99 percent complete" most of the time." - Fred Brooks

~$ curl localhost:8080
"A computer shall not waste your time or require you to do more work than is strictly necessary." - Jef Raskin

~$ curl localhost:8080
"Within a computer, natural language is unnatural." - Alan Perlis

~$ curl localhost:8080
"Nobody knows how to build really complicated hardware systems, so designing hardware tends to be simpler. Software is much more complicated." - Butler Lampson
```

Looking back at our terminal window with the API server running, this is what we see:
```
~/project$ node index.js 
Listening on port 8080
Request: 1
Request: 2
Request: 3
Request: 4
```

Excellent. Our API server is running as expected. We’ll restart it to reset the request counter, and we’ll leave it running in our terminal window.

#Back-end Testing:
Mocha, Chai & Supertest


##Introduction
This repo is an example of testing a back-end utilizing Mocha, Chai and Supertest. It provides a simple approach to testing first with straight forward tools. This approach is only one of many. There are other assertion libraries and http abstraction methods that can be used with Mocha in similar fashion. This combination was chosen for ease of use and broad support. 



##Prerequisites 
A basic understanding of Nodejs and a framework such as Express or Hapi--this example uses Hapi.

##Install
If you have cloned this repo, simply type `$ npm install` inside the root or you can manually create your own project folder and install the following.

`$ npm init` *assuming node has already been installed*

`$ npm install --save hapi`

`$ npm install --save-dev mocha chai supertest`

* *There is a front-end associated with this project in a seperate repo. It is not necessary to achieve the goal of back-end testing, but is available if desired.*

##Usage
Create a test folder as Mocha will look for your test units here. Inside of the test directory create the test files where you will write your test units. The naming convention is "model/resourceName.spec.js". 

`$ touch user-crud.spec.js`

In this project I created one for each resource (e.g. user-crud.spec.js post-crud.spec.js)

In your test file you'll need to *require chai (var expect = require('chai').expect) and supertest (var request = require('supertest'))* and depending on how you plan to set up your routes and/or app file you may also need to require the resource/model you will be testing (e.g. *require('../models/User')*).

And now you are ready to write your first test.

##Write Test

You start with a describe function which takes two arguments--the name of the this test and a callback/typically an anonymous function:

```
describe("someName",()=>{
  // 'It' function
});
```

Inside of the callback block there will be an 'it' function which will take a description of the test and another anonymous function which takes the done function as an argument to be called at completion:

```
describe("someName",()=>{
  it("It should do something I expect", done=>{
    // 'http request, check values and call done()'
  });
});
```

Inside of the 'It' block goes your actual test logic--calls to your back-end(over http with supertest), checking of return values and invoking done function at completion:

```
describe("someName",()=>{
  it("It should do something I expect", done=>{
    //Supertest
    request("http://theUrl:port#")
    .get("/path")
    .end((error,response)=>{
      // Chai Expect
      expect(response).to.equal("thisValue");
      // Invoke the done function to exit test
      done();
    });
  });
});
```

This concludes how you will write your test. This model can be replicated with minor tweaks for all test units.

##Run Test

From the command line run the following:

`mocha`

If you have you've done everything correctly you should initially fail this test without any server side code to fulfill request. 

Write just enough server code--what you believe is enough--until you have a passing test. 
Then wash and repeat ;)

* It is also pertinent to mention that Mocha also includes are beforeEach and afterEach function that can be used to seed and sanitize your database or data structure with the data used to run your test. An example of both can be found in this repos user-crud.spec.js file.

function receivesAFunction(cb) {
    return cb();
}



function returnsANamedFunction() {
  function foo() {
    console.log("hello")
  }
  return foo;
}

function returnsAnAnonymousFunction() {
  return function() {
     console.log("Hello!");
  }
}
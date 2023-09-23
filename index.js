function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedfunction(){
        return Thisisanamedfunction
    }
    return namedfunction
}
function returnsAnAnonymousFunction(){
    return function(){
    console.log ("This is an anonymousfunction")
    }
}
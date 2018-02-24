//var whtevs = "a"
    //confirm.log(whtevs === "b")

    module.exports = {
        assert: function(expected, actual, message = "Test"){
            if (expected === actual) {
            console.log('thumbs-up'+ message)
            } else {
                diff = util.inspect(expected) + "\n..." +util.inspect(actual);
                console.log("poop emoji" + message + "\n ... Assertion failed no match\n..." + diff);
            }
        },
        assert_true: function(actual, message){
            this.assert(true, actual, message)
        },
        assert_false: function(actual, message){
            this.assert(false, actual, message)
        }
    };
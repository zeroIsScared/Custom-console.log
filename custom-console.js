'use strict';

//Toole: custom logger
// remember the ref to old console

let _console = window.console;

let console = {

    history: [],

    cursor: null,

    log: function (message, value){
        //create a deep copy
        let deepCopyOfValue = JSON.parse(JSON.stringify(value));
        _console.log(message, deepCopyOfValue);
        this.history.push(
            {
                'message': message,
                'value': deepCopyOfValue
            }
        );
        this.cursor ++;
    },

    back: function () {        
        
        if (this.cursor > 1 ){
            _console.log(this.history[this.cursor-2]);
            this.cursor --;
        } else{
            _console.log(`The initial value was ${JSON.stringify(this.history[0])}.`)
        }
    },

    forward: function() {
        if (this.cursor < this.history.length)  {
            _console.log(this.history[this.cursor]);
            this.cursor ++;
        } else {
            _console.log(`This is the last value ${JSON.stringify(this.history[this.cursor-1])}.`)
        }
    },

    //for compatibility
    assert: function() {}
}

let arr= [1,2,3];
console.log('before',arr);
arr.pop();
console.log('after',arr);
console.history;
arr.pop();
console.log('after',arr);
//console.back();

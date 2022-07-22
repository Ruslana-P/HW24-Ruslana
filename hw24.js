let moduleBilly = function() {
    let $billy = $('#billy');
    let module = {};

    module.getBear = function() {
        return $billy;
    }
    module.sendMessage = function(text) {
        console.log(text);
    }

    return module;
}();



let moduleJack = function() {
    let $jack = $('#jack');
    let module = {};

    module.getBear = function() {
        return $jack;
    }
    module.sendMessage = function(text) {
        console.log(text);
    }

    return module;
}();


let moduleRose = function() {
    let $rose = $('#rose');
    let module = {};

    module.getBear = function() {
        return $rose;
    }
    module.sendMessage = function(text) {
        console.log(text);
    }

    return module;
}();

let jack = moduleJack.getBear()
let billy = moduleBilly.getBear();


moduleJack.getBear().on('click', function(event){
    moduleJack.sendMessage('Jack: Rose,I love you')
    moduleRose.sendMessage('Rose: Jack, I love Billy');
    moduleRose.sendMessage('Rose: Billy, I love you too')
    moduleBilly.sendMessage('Billy: run');
})

moduleBilly.getBear().on('click', function(event) {
    moduleBilly.sendMessage('Billy: Rose, I love you')
    moduleRose.sendMessage('Rose: I am waiting for another offer')
})








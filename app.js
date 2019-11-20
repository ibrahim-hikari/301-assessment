`use strict`;


function getData() {
    let data = get('data/a.json')
    console.log(data);

    return new Person(data)
}
function Person(data) {
    this.name = data.name
    this.pets = data.pets
    this.children = data.children
    this.job = data.job
}

console.log(getData());


// http.createServer(function (res, req) {

// })
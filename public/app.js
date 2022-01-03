var na = document.getElementById('na')
var fa = document.getElementById('fa')
var joo = document.getElementById('joo')
var one = {
    name1: "Usman Khan",
    fathername: "OBAIDULLAH KHAN",
    rollnum: 1,
    result: "2nd",
    age: 18,
}
var two = {
    name1: "Usman Khan",
    fathername: "OBAIDULLAH KHAN",
    rollnum: 2,
    result: "3rd",
    age: 17,
}
var three = {
    name1: "Ali Khan",
    fathername: "Saifullah Khan",
    rollnum: 3,
    result: "4th",
    age: 20,
}
var four = {
    name1: "Huzaifa Naseer",
    fathername: "baqaullah",
    rollnum: 4,
    result: "5th",
    age: 16,
}
var five = {
    name1: "Wasi",
    fathername: "Kaleemullah",
    rollnum: 5,
    result: "1st",
    age: 21,
}
var arr = [one, two, three, four, five]
var val = document.getElementById("ko")
var no = document.getElementById("main")
var tab = document.getElementById("tab")
for (var i = 0; i < arr.length; i++) {
    var ob = arr[i]

        val.innerHTML += "<tr><td>" + ob.rollnum + "</td><td>" + ob.name1 + "</td><td>" + ob.fathername + "</td><td>" + ob.age + "</td><td>" + ob.result + "</td></tr>"

}
function done() {
    for (var i = 0; i < arr.length; i++) {
        var ob = arr[i]
        if(ob.rollnum == na.value){
            joo.innerHTML += "<tr><td>" + ob.rollnum + "</td><td>" + ob.name1 + "</td><td>" + ob.fathername + "</td><td>" + ob.age + "</td><td>" + ob.result + "</td></tr>"
        }
    }
}
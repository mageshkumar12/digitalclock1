//   console.log("start")
//   console.log("a")
//   setTimeout(function(){
//     console.log("b")
//   },2000)
//   console.log("c")
//   console.log("end")

// console.log("start")
// var exp1=function(){
//     console.log("have a nice day")
// }
// var exp2=function(){
//     console.log("GoodMorning")
//     exp1()
//     console.log(exp1)
// }
// exp2()
// console.log("end")

// var str="good morning"
// console.log(str)
// setTimeout(aa,4000)
// function aa(){
//     alert("hey hi")
// }
// console.log("hey hi")


//settimeout and setinterval
// console.log("start")
// console.log("a")
// setInterval(function() {
//     console.log("b")
// }, 2000);
// console.log("c")
// console.log("end")

// var para=document.getElementById("para")
// var sum=0
// var t=setInterval(function fun(){
//     sum++
//     para.textContent=`${sum}`
// },1000)
// document.body.append(para)
// function stop(){
//     clearInterval(t)
// }
// function start(){
//     clearInterval(t)
// }

// var para=document.getElementById("para")

// function start(){
//     var sum=0
// var t=setInterval(function fun(){
//     sum++
//     para.textContent=`${sum}`
// },1000)
// function stop(){
//     clearInterval(stop)
// }
// return (this.start=stop)
// }



// var start=document.getElementById("start")
// start.setInterval(function start(){
//     function start(){
//         setInterval(start)
//     

// var p=setInterval(function(){
//     showtime();
// })

// function showtime(){
//     var date1= new Date()
//     var hour = 00;
//     var min = date1.getMinutes()
//     var sec = date1.getSeconds()
//     var am_pm="AM"
//     if(hour >= 12){
//         hour = hour - 12
//         am_pm="PM"
//     }
//     if(hour == 0){
//         hour=12
//     }
//     var para=document.getElementById("para")
// para.textContent=`${hour} : ${min} : ${sec}: ${am_pm}`

// }
// var month = new Date();
// var month1=month.getMonth();
// var mon=["jan","feb","mar","apirl","may"]

var p=setInterval(function(){
    showtime();
})

function showtime(){
    var date1= new Date()
    var hour = date1.getHours();
    var min = date1.getMinutes()
    var sec = date1.getSeconds()
    var am_pm="AM"
    if(hour >= 12){
        hour = hour - 12
        am_pm="PM"
    }
    if(hour == 0){
        hour=12
    }
//     var para=document.getElementById("para")
// para.textContent=`${hour} : $'{min} : ${sec}: ${am_pm}`
var div1=document.getElementById("div1")
div1.textContent=`${hour}`
var div2=document.getElementById("div2")
div2.textContent=`${min}`
var div3=document.getElementById("div3")
div3.textContent=`${sec}`
var div4=document.getElementById("div4")
div4.textContent=`${am_pm}`


}

var mon=new Date()
m1=mon.getMonth()
var m2=["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
 var a=m2[m1]
var m3=document.getElementById("month")
m3.append(a)

var date1=mon.getDate()
var dat=document.getElementById("date2")
dat.append(date1)

var year=mon.getFullYear()
var yr=document.getElementById("year")
yr.append(year)






























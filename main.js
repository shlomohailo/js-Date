function getDate() {
    var date = new Date();
    console.log(date);
}
getDate();

function getDateString(date) {
    var newdate = new Date(date)
    console.log(newdate);

}
getDateString("2/3/1922");

function getFromUserNewDate() {
    var userdate = prompt("enter date");
    var date = new Date(userdate);
    console.log(date);
}
getFromUserNewDate();

function getStringAndReturn() {
    var mydate = prompt("enter date");
    var date = new Date(mydate);
    var manth = date.getMonth();
    return manth;
}
getStringAndReturn();


function getDateAndRetunTime() {
    var mydate = prompt("enter date");
    var date = new Date(mydate)
    return date.getHours();

}
getDateAndRetunTime();

function getDateAndRetunYear (){
    var mydate = prompt("enter date");
    var date = new Date (mydate);
    return date.getYear();

}
getDateAndRetunYear();

function getDateAndRetunMin() {
    var mydate = prompt("enter date");
    var date = new Date(mydate);
    return date.getMinutes();
} getDateAndRetunMin();

function getTwoDateReturnEarly() {
    var date1 = prompt("enter date1");
    var date2 = prompt("enter date2");
    var newdate1 = new Date(date1);
    var newdate2 = new Date(date2);
    if (newdate1 > newdate2) {
        return newdate1;
    }
    else {
        return newdate2;
    }

}
getTwoDateReturnEarly();


function getAgeUser() {
    var userage = prompt("enter age");
    var newdate = new Date(userage);
    return new Date().getFullYear() - newdate.getFullYear();
}
getAgeUser();


function getUserAgeBig() {
    var date = prompt("enter age")
    var newdate = new Date(date);
    if (new Date().getFullYear() - newdate.getFullYear() > 18) {
        alert("YOU CAN GET IN")
    }
    else {
        alert("You are not allowed to enter!");
    }
}
getUserAgeBig();

function getLocal() {
    var date = new Date();
    document.write(date.getLocal())
}
getLocal();
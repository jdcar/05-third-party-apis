// Jamie Carlstone
// Coding Boot Camp 2020
// Unit 05 : Third Pary APIs
// December 9, 2020


// Get the current time
var DateTime = luxon.DateTime;
var now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL)

// Display the current time
function displayCurrent() {
    current = $('#currentDay').text(now)
    
}
setInterval(displayCurrent, 1000);

// Change the styles of the boxes according to the current time
dt = DateTime.local()
var dateTimeUnformatted = DateTime.local().toString()
var scheduleText = $('.textarea')
var hour = dt.hour

for (var i = 0; i < scheduleText.length; i++) {

    times = scheduleText[i].attributes.name.nodeValue


    if (hour === Number(times)) {
        console.log(hour)
        console.log(Number(times))
        console.log("Present")
        $("#" + times).addClass("present")

    } else if (Number(times) < hour) {
        console.log(hour)
        console.log(Number(times))
        console.log("Before")
        $("#" + times).addClass("past")

    } else if (Number(times) > hour) {
        console.log(hour)
        console.log(Number(times))
        console.log("future")
        $("#" + times).addClass("future")

    }

}

// Variables for text input and buttons
var saveButton9 = $('#button9')
var scheduleTextInput9 = $('#input9')

var saveButton10 = $('#button10')
var scheduleTextInput10 = $('#input10')

var saveButton11 = $('#button11')
var scheduleTextInput11 = $('#input11')

var saveButton12 = $('#button12')
var scheduleTextInput12 = $('#input12')

var saveButton13 = $('#button13')
var scheduleTextInput13 = $('#input13')

var saveButton14 = $('#button14')
var scheduleTextInput14 = $('#input14')

var saveButton15 = $('#button15')
var scheduleTextInput15 = $('#input15')

var saveButton16 = $('#button16')
var scheduleTextInput16 = $('#input6')

// Render text input to page
renderButton9()
renderButton10()
renderButton11()
renderButton12()
renderButton13()
renderButton14()
renderButton15()
renderButton16()



// Event listeners that add buttons to 
function renderButton9() {

    scheduleTextInput9.val("")

    var nineamStorage = localStorage.getItem("9am")

    if (nineamStorage) {

        $("#description9").text(nineamStorage)

    }

}

saveButton9.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput9.val()
    localStorage.setItem("9am", scheduleText);

    renderButton9()

})

function renderButton10() {

    scheduleTextInput10.val("")

    var tenamStorage = localStorage.getItem("10am")

    if (tenamStorage) {

        $("#description10").text(tenamStorage)

    }

}

saveButton10.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput10.val()
    localStorage.setItem("10am", scheduleText);

    renderButton10()

})

function renderButton11() {

    scheduleTextInput11.val("")

    var elevenamStorage = localStorage.getItem("11am")

    if (elevenamStorage) {

        $("#description11").text(elevenamStorage)

    }

}

saveButton11.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput11.val()
    localStorage.setItem("11am", scheduleText);

    renderButton11()

})



function renderButton12() {

    scheduleTextInput12.val("")

    var twelevePmStorage = localStorage.getItem("12pm")

    if (twelevePmStorage) {

        $("#description12").text(twelevePmStorage)

    }

}

saveButton12.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput12.val()
    localStorage.setItem("12pm", scheduleText);

    renderButton12()

})

function renderButton13() {

    scheduleTextInput13.val("")

    var onepmStorage = localStorage.getItem("1pm")

    if (onepmStorage) {

        $("#description13").text(onepmStorage)

    }

}

saveButton13.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput13.val()
    localStorage.setItem("1pm", scheduleText);

    renderButton13()

})

function renderButton14() {

    scheduleTextInput14.val("")

    var twopmStorage = localStorage.getItem("2pm")

    if (twopmStorage) {

        $("#description14").text(twopmStorage)

    }

}

saveButton14.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput14.val()
    localStorage.setItem("2pm", scheduleText);

    renderButton14()

})

function renderButton15() {

    scheduleTextInput15.val("")

    var threepmStorage = localStorage.getItem("3pm")

    if (threepmStorage) {

        $("#description15").text(threepmStorage)

    }

}

saveButton15.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput15.val()
    localStorage.setItem("3pm", scheduleText);

    renderButton15()

})

function renderButton16() {

    scheduleTextInput16.val("")

    var fourpmStorage = localStorage.getItem("4pm")

    if (fourpmStorage) {

        $("#description16").text(fourpmStorage)

    }

}

saveButton16.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput16.val()
    localStorage.setItem("4pm", scheduleText);

    renderButton16()

})





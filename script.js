// Jamie Carlstone
// Coding Boot Camp 2020
// Unit 05 : Third Pary APIs
// December 9, 2020


// Get the current time
var DateTime = luxon.DateTime;
// Display the current time
function displayCurrent() {

    var now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL)

    current = $('#currentDay').text(now)
    setInterval(displayCurrent, 1000);
}

displayCurrent()
// Change the styles of the boxes according to the current time
dt = DateTime.local()
var dateTimeUnformatted = DateTime.local().toString()
var scheduleText = $('.textarea')
var hour = dt.hour

for (var i = 0; i < scheduleText.length; i++) {

    times = scheduleText[i].attributes.name.nodeValue


    if (hour === Number(times)) {

        $("#" + times).addClass("present")

    } else if (Number(times) < hour) {

        $("#" + times).addClass("past")

    } else if (Number(times) > hour) {

        $("#" + times).addClass("future")

    }

}

// Insert schedule text input to HTML
renderButton()

var saveButton = $('.saveBtn')
var scheduleTextInput = $('.meeting-input')

function renderButton() {

    $('.meeting-input').val("")

    var nineAmStorage = localStorage.getItem("9")
    var tenAmStorage = localStorage.getItem("10")
    var elevenAmStorage = localStorage.getItem("11")
    var twelvePmStorage = localStorage.getItem("12")
    var onePmStorage = localStorage.getItem("13")
    var twoPmStorage = localStorage.getItem("14")
    var threePmStorage = localStorage.getItem("15")
    var fourpmStorage = localStorage.getItem("16")

 
    if (nineAmStorage){
        $("#description9").text(nineAmStorage)
    }  
    if (tenAmStorage){
        $("#description10").text(tenAmStorage)
    }  
    if (elevenAmStorage){
        $("#description11").text(elevenAmStorage)
    } 
    if (twelvePmStorage){
        $("#description12").text(twelvePmStorage)
    } 
    if (onePmStorage){
        $("#description13").text(onePmStorage)
    }
    if (twoPmStorage){
        $("#description14").text(twoPmStorage)
    } 
    if (threePmStorage){
        $("#description15").text(threePmStorage)
    } 
    if (fourpmStorage){
        $("#description16").text(fourpmStorage)
    }

}

// Create event on button click to save schedule information and render to local storage
saveButton.on('click', function (event) {

    event.preventDefault();

    textInputId = this.parentNode.childNodes[3].id


    if (textInputId === "9" && this.id === "button9") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "10" && this.id === "button10"){
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "11" && this.id === "button11") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "12" && this.id === "button12") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "13" && this.id === "button13"){
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "14" && this.id === "button14") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "15" && this.id === "button15") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    } else if (textInputId === "16" && this.id === "button16") {
        textInput = $("#input" + textInputId)
        console.log(textInput.val())
        addToLocal()
    }

    function addToLocal() {

        var text = textInput.val()

        localStorage.setItem(textInputId, text);
        
    }

    renderButton()

})


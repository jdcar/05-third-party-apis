
var saveButton = $('.saveBtn')
var scheduleTextInput = $('.meetingInput')
var timeSelected = ""

var saveButton9 = $('#button9')
var scheduleTextInput9 = $('#input9')
var posted9 = $('#post9')

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

renderButton9()
function renderButton9() {

    scheduleTextInput9.val("")

    var nineamStorage = localStorage.getItem("9am")

    if (nineamStorage) {

        $("#description").text(nineamStorage)

    }

}

saveButton9.on('click', function (event) {

    event.preventDefault();

    scheduleText = scheduleTextInput9.val()
    localStorage.setItem("9am", scheduleText);

    renderButton9()

})









// save schedule text to local storage
// integrate the time API
// Change the color to reflect the time


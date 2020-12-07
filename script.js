
var saveButton = $('.saveBtn')
var scheduleTextInput = $('.meetingInput')


saveButton.on('click', function (event) {

    var timeSelected = event.target

    console.log(timeSelected.id)
    saveScheduleText();

})

function saveScheduleText() {

    scheduleText = scheduleTextInput.val()



    // save schedule text to local storage
}

// integrate the time API
// Change the color to reflect the time
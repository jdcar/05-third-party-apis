
var saveButton = $('.saveBtn')
var scheduleTextInput = $('#meetingInput9')
// 

saveButton.on('click', function () {

    saveScheduleText();

})

function saveScheduleText() {

    scheduleText = scheduleTextInput.val()
    console.log(scheduleText)

}
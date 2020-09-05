// set variable for now
var now = moment();   

// Make a variable for current date 
var currentDate = moment().format("MMM Do YYYY");   

// Setting the date 
    $("#currentDay").text("Today's Date: " + currentDate);


$(document).ready(function() {

    // For loop display tasks from local storage
    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});

    

// For loop for rows with time, task, and save buttons
for (i = 0; i < 10; i++) {
    //create a variable for the row
    var addRow = $('<div>').addClass('row');
    //create a variable for the time block
    var addTime = $('<div>').addClass('hour col-md-1').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    addTime.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    //create a variable for the taskblock
    var addTask = $('<textarea>').addClass('col-md-9');
    //create a variable for the save block
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    // Placing content above in the DOM in order.
    //appending the container with the row
    $('.container').append(addRow);
    //append the row with the time 
    $(addRow).append(addTime);
    //after the time display the task 
    $(addTime).after(addTask);
    //after the task display the save button
    $(addTask).after(saveButton);


    // if else statement to choose the color of the row
    //if the time is the same as the time on the timeblock, display task as red
    if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(addTask).addClass('present');
        //if the time is in the future, display green
    } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(addTask).addClass('future');
        //if the time is in the past, display grey
    } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(addTask).addClass('past');
    } 
}
    // Save click event to store data in the local storage
    $('.saveBtn').on('click', function() {

        localStorage.setItem($(this).siblings("div.hour").attr("data-time"), $(this).siblings("textarea").val())
        });
        
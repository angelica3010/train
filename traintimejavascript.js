
// Steps to complete:
/*
1. Create Firebase link
2. Create button for adding new employees - then update the html + update the database
3. Create a way to retrieve employees from the employee database.
4. Create a way to calculate the months worked. Using difference between start and current time. Then use moment.js formatting to set difference in months.
5. Calculate Total billed

*/
// 1. Link to Firebase
var trainData = new Firebase("https://train-tracker.firebaseio.com/");

// 2. Button for adding new trains
$("#addtrainBtn").on("click", function(){

    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var destinationName = $("#destinationInput").val().trim();
    var firstTrain =$("#firsttraintimeInput").val().trim();
    var frequencyMinutes =$("#frequencyInput").val().trim();
    //var firsttraintime = moment($("#firsttraintimeInput").val().trim(), "LS").format("X");
//moment().format('LT'
//moment

//next arrival time. Make a forumula to add the first train
//time and the frequency to calculate the next train time

//Minutes

    // var nextArrival = $("#arrivalInput").val().trim();

    // var minutesAway = $("#minutesInput").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name:  trainName,
        destination: destinationName,
        start: firstTrain,
        frequency: frequencyMinutes
    }

    // Uploads employee data to the database
    trainData.push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(newTrain.start);
    console.log(newTrain.frequency)

    // Alert
    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firsttraintimeInput").val("");
    $("#frequencyInput").val("");


    // Prevents moving to new page
    return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

//is child just for new imput?
trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destinationName= childSnapshot.val().role;
    var firstTrain = childSnapshot.val().start;
    var frequencyMinutes = childSnapshot.val().rate;


    // Employee Info
    console.log(trainName);
    console.log(destinationName);
    console.log(firstTrain);
    console.log(frequencyMinutes);

//stopped here
//moments info here http://momentjs.com/docs/

//next arrival
//minutes away





var n
    // Prettify the employee start
    var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
    // Calculate the months worked using hardconre math
    // To calculate the months worked 
    var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
    console.log(empMonths);

    // Calculate the total billed rate
    var empBilled = empMonths * empRate;
    console.log(empBilled);

    // Add each train's data into the table 
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destinationName + "</td><td>" + firstTrain + "</td><td>" + frequencyMinutes + "</td><td>");


        //+ empMonths + "</td><td>" + empBilled + "</td></tr>");

});




// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case



    




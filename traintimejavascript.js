
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
    //old variable: var firstTrain =$("#firsttraintimeInput").val().trim();
    var frequencyMinutes =$("#frequencyInput").val().trim();
    var firstTrainUnix = moment($("#firsttraintimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");

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
        start: firstTrainUnix,
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
    var ttrainName = childSnapshot.val().name;
    var tdestinationName= childSnapshot.val().destination;
    var tfirstTrainUnix = childSnapshot.val().start;
    var tFrequency = childSnapshot.val().frequency;


    // Train Info
    console.log(ttrainName);
    console.log(tdestinationName);
    console.log(tfirstTrainUnix);
    console.log(tFrequency);

//stopped here
//moments info here http://momentjs.com/docs/

//next arrival
//minutes away

//calculate the difference in times
// Calculate the minutes until arrival using hardcore math
    // To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time and find the modulus between the difference and the frequency  

    var differenceTimes = moment().diff(moment.unix(tfirstTrainUnix), "minutes");
    //you are converting hte unix code to minutes
    var tRemainder = moment().diff(moment.unix(tfirstTrainUnix), "minutes") % tFrequency ;
    var tMinutes = tFrequency - tRemainder;


    // To calculate the arrival time, add the tMinutes to the currrent time
    var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
    console.log(tMinutes);
    console.log(tArrival);

    console.log(moment().format("hh:mm A"));
    console.log(tArrival);
    console.log(moment().format("X"));

    // Add each train's data into the table 
    $("#trainTable > tbody").append("<tr><td>" + ttrainName + "</td><td>" + tdestinationName + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");





});




// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case



    




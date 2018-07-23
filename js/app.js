/***********************************
 added a clcik event for the submit button
************************************/

var submitBtn = document.getElementsByTagName('button')[0];

submitBtn.addEventListener('click', function(){
    alert("Thanks for submitting your comment");
});
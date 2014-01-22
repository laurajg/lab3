'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("I have changed this :)");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e) {
		var div_name = $("#project").val();
		var div_width = $("#width").val();
		var div_description = $("#description").val();

		 $(div_name).animate({
     		 width: div_width
  		 });
		 //find the project description for that project and change text
  		 $(div_name + " .project-description").text(div_description);

	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

//the argument epassed into project click is the event e
function projectClick(e) {
	console.log("Project Clicked");
	// prevent the page from reloading    
	//if you don't write this then it will try to take the usual action (i.e. follow hyperlink)  
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //$(this).css("background-color", "#7fff00");
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
 	var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    	description.hide();
    }
}

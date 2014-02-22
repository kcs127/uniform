$(document).ready(function () {
    $("#addListElement").click(function () {
        //
        //var newBtn = document.createElement("<a class='btn btn-default' role='button'>new Item &raquo;</a>")
        //var newBtn = document.createElement("a");


        $("#formContainer").append("<div class='btn btn-default col-md-12 ui-state-default listItem' role='button'>List Item &raquo;</div>");
    });

    $("#addRadioElement").click(function () {
        $("#formContainer").append("<div class='col-md-12'><div class='input-group'><span class='input-group-addon'><input type='radio'></span><input class='form-control' type='text'></div></div>");
    });
	
	$("#addCheckboxElement").click(function () {
        $("#formContainer").append("<div class='col-md-12'><div class='input-group'><span class='input-group-addon'><input type='checkbox'></span><input class='form-control' type='text'></div></div>");
    });
});

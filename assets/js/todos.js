//Check off spesific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(event){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which===13){
		// grab the new todo
		var todo=$(this).val();
		// add to end of the todo list
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+todo+"</li>");
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})
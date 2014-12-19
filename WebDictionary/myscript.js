$(function(){
    $(document.body).bind('mouseup', function(e){
        var selection;
        
        if (window.getSelection) {
          selection = window.getSelection();
        } else if (document.selection) {
          selection = document.selection.createRange();
        }
        $("#meaning")
			.html(selection.toString())
			.css(
				{
					"top":e.pageY+10,
					"left":e.pageX,
					"display":"block"			
				}
			)
        // !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
    });
	$("body").append("<div id='meaning' style='display:none;position:absolute;z-index:999'></div>");

});

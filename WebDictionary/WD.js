var dictionary;
function preDic(){
	$.get("dic.txt",function(data){
		dictionary=new Array();
		data=data.split("\n");
		$.each(data,function(key,value){
			var tmp=value.split(" ");
			var k=new Object();
			k["key"]=tmp[0];
			k["value"]=tmp[1];
			dictionary.push(k);
		});
	});
}
$(function(){
	dictionary=preDic();
    $(document.body).bind('mouseup', function(e){		
        var selection;        
        if (window.getSelection) {
          selection = window.getSelection();
        } else if (document.selection) {
          selection = document.selection.createRange();
        }
		var FKey;
		$.each(dictionary,function(key,value){
			var res = $.trim(selection.toString().toLowerCase());
			if(value.key==res){
				FKey=value.value;return;
			}			
		});
		if(typeof(FKey)!='undefined'){
			$("#meaning")
				.html(FKey)
				.css(
					{
						"top":e.pageY+10,
						"left":e.pageX,
						"display":"block"			
					}
				)
		}
		else $("#meaning").hide();
        // !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
    });
	$("body").append("<div id='meaning' style='display:none;position:absolute;z-index:999'></div>");

});

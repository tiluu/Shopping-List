$(document).ready(function(){

	$('input#item').focus();
	function addRow(user_number,user_item){
		var newNumber = "<td>"+user_number+"</td>";
		var newItem= "<td>" +user_item+"</td>";
		var newCheck= "<td> <input type=checkbox name=done></td>";
		$("table#shopping_list tbody").append("<tr>"+newItem +newNumber+newCheck+"</tr>");
	};

	
	$('input').keypress(function(e){
		if(e.which== 13){
			event.preventDefault();
			var user_number=$("#number").val();
			var user_item=$("#item").val();
			addRow(user_number,user_item);	
			$('tr input:checkbox').on('click', function(){
				if($(this).is(':checked')){
				$(this).closest("tr").css("color","#B2B2B2");
				}
				else {
					$(this).closest("tr").css("color","#333");
				}
			});
			document.forms[0].reset();
			$('input#item').focus();
			
		}
	});
});

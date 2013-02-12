$(document).ready(function(){

	function addRow(user_number,user_item){
		var newNumber = "<td>"+user_number+"</td>";
		var newItem= "<td>" +user_item+"</td>";
		var newCheck= "<td> <input type=checkbox name=done></td>";
		$("table#shopping_list tbody").append("<tr>"+newNumber +newItem+newCheck+"</tr>");
	};


	$("#add_item").click(function(){
		var user_number=$("#number").val();
		var user_item=$("#item").val();
		if(user_item==""&&user_number==""){
			alert("What do you need?");
		} 
		else if (user_number ==""){
			alert("How much are you buying?");
		}
		else if(user_item==""){
			alert("What are you buying?");
		}
		else{
			addRow(user_number,user_item);	
			$('tr input:checkbox').on('click', function(){
				$(this).closest("tr").remove();
			});
			document.forms[0].reset();
		}

	});

});



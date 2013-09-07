$(document).ready(function(){
	var listObject = new Object();

	$('input#item').focus();
	function addRow(user_number,user_item){
		var newNumber = "<td>"+user_number+"</td>";
		var newItem= "<td>" +user_item+"</td>";
		var newCheck= "<td> <div class='box'></div</td>";
		$("table#shopping_list tbody").append("<tr>"+newItem +newNumber+newCheck+"</tr>");
	};

	

	if(localStorage.getItem('list')){
		var getItems= JSON.parse(localStorage.getItem('list'))
		for (var i in getItems){
			addRow(getItems[i], i)
		}
		$('.box').on('click', function(){
			$(this).parents('tr').remove()
		})
	}
	
	$('input').keypress(function(e){
		if(e.which== 13){
			event.preventDefault();
			var user_number=$("#number").val();
			var user_item=$("#item").val();

			listObject[user_item] = user_number
			addRow(user_number,user_item);	
			document.forms[0].reset();
			$('input#item').focus();
			
			localStorage.setItem('list', JSON.stringify(listObject))
			
			$('.box').on('click', function(){
				$(this).parents('tr').remove()
			})
		}
	});
});

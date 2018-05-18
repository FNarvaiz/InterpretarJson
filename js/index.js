/*$(function() {  // EN JQUERY tambien se puede usar $.getjson pero solo sirve con metodo get.
	var tableBody= $("#tableBody");
	$.ajax({
                        url:   'https://jsonplaceholder.typicode.com/posts',
                        dataType: "json",
                        type:  'get',
                        beforeSend: function () {
                                tableBody.text("Procesando, espere por favor...");
                        },
                        success:  function (response) {
                        	tableBody.text("");

                        	for(var i in response) {
                        		tableBody.append( "<tr>"+
      								"<th scope='row'>"+i+"</th>"+
      								"<td>"+response[i].id+"</td>"+
      								"<td>"+response[i].userId+"</td>"+
								    " <td>"+response[i].title+"</td>"+
								    "<td>"+response[i].body+"</td>"+
								    "</tr>" );  // (o el campo que necesites)
							}
                        }
                        
                });
});*/

window.onload= function(){// EN JAVASCRIP NATIVO
		var ajax_url = "https://jsonplaceholder.typicode.com/posts";
		var ajax_request = new XMLHttpRequest();
		var tableBody= document.getElementById("tableBody");

		ajax_request.onreadystatechange = function() {
		
			if (ajax_request.readyState < 4)
				tableBody.innerHTML="Procesando request.";
			else if (ajax_request.readyState == 4 && this.status == 200) {
				tableBody.innerHTML="";
			    var response = JSON.parse( ajax_request.responseText );
			    for(var i in response) {
			    	var row = document.createElement("tr");
					row.innerHTML = "<th scope='row'>"+i+"</th>"+
							"<td>"+response[i].id+"</td>"+
							"<td>"+response[i].userId+"</td>"+
						    "<td>"+response[i].title+"</td>"+
						    "<td>"+response[i].body+"</td>";
	        		tableBody.appendChild(row); 
				}
			}
			else 
				tableBody.innerHTML="Pagina no encontrada.";			
			
			
		}
		ajax_request.open( "GET", ajax_url, true );
		ajax_request.send();
	
}

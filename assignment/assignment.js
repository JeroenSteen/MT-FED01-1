window.onload = function(){
	//Voeg toe knop
	var add = document.getElementById("add");
	
	//Registreer functie; dynamisch events toevoegen
	function addEv(item,event,func){
		//Item; id of class
		
		//Knop event(s)
		if (item.addEventListener){
			item.addEventListener(event,func,false)
		} else if(add.attachEvent){
			item.attachEvent(event, func);
		}	
	}
	
	//Toevoegen snippet aan lijst
	function addCode(){
		event.preventDefault();

		//Ingevoerde snippet
		var textspace = document.getElementById("textspace").innerHTML;
		//Titel snippet
		var titel = document.getElementById("titel").value;
		
		//Invoer niet leeg, anders..
		if(textspace != "" && titel != ""){
			//Lijst alle snippets; nieuw element snippet
			var codes = document.getElementById("codes");
			var code_div = document.createElement("div");
			code_div.className = "code"; //Classnaam toevoegen aan snippet
		
			//Snippet div vullen en toevoegen aan lijst
			code_div.innerHTML = "<span>"+titel+"</span>"+"<pre>"+textspace+"</pre>"; //Vullen
			var btn = document.createElement("button"); //Button
			btn.innerHTML = "Verwijderen"; //Waarde toekennen aan button
			btn.className = "remove";
			addEv("remove","click","removeCode");
			code_div.appendChild(btn); //Button toevoegen aan snippet div
			codes.appendChild(code_div); //Toevoegen aan lijst
			
		} else {
			alert("Invoer is leeg, probeer opnieuw!");
		}	
	}
	
	function removeCode(){
		alert("Remove");
	}
	
	
	//Knop event(s); niet dynamisch nog
	if (add.addEventListener){
		add.addEventListener('click',addCode,false)
	} else if(add.attachEvent){
		add.attachEvent('onclick', addCode);
	}
	
	
	
	
}
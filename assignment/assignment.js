window.onload = function(){
	var add = document.getElementById("add");
	
	function addCode(){
		event.preventDefault();
		
		var textspace = document.getElementById("textspace").innerHTML;
		var titel = document.getElementById("titel").innerHTML;
		
		var codes = document.getElementById("codes");
		var code_div = document.createElement("div");
		code_div.addAttribute("class", "code");
		//codes.innerHTML = codes.innerHTML("<span>"+titel+"</span>"+"<pre>"+textspace+"</pre>");
		codes.appendChild(code_div);
	}
	
	if (add.addEventListener){
		add.addEventListener('click',addCode,false)
	} else if(add.attachEvent){
		add.attachEvent('onclick', addCode);
	}
	
	
	
	
	
}
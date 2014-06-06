app.views.click = function (el){
	this.el = el;
	this.event = new CustomEvent("clickButton");
	
	this.init = function(){
		console.log("Click");
		
		document.addEventListener("click", this.clickButton.bind(this));	
	};
	
	this.clickButton = function(e) {
		console.log("Klikk");
		
		//app.views.block.style.backgroundColor = "red";
		//console.log(this.el); //.style.backgroundColor = "red";
		
		e.preventDefault();
		document.dispatchEvent("this.event");
	};
	
	this.init();
}
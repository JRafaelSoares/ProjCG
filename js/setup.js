var main;

function setup(){
	main = new Main();

	window.addEventListener("keydown", 

			function (e){
				main.keyboardDownEvent(e.keyCode);
			}

	);

	window.addEventListener("keyup", 

			function (e){
				main.keyboardUpEvent(e.keyCode);
			}

	);

    window.addEventListener("resize", 

			function (){
				main.resizeEvent();
			}

	);
}
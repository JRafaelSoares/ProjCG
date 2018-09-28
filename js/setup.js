var main;

function setup(){
	main = new Main();

	window.addEventListener("keydown", 

			function (e){
				main.keyboardEvent(e.keyCode);
			}

	);

    window.addEventListener("resize", 

			function (){
				main.resizeEvent();
			}

	);
}
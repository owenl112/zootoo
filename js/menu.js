const fullMenu = document.querySelector("ul");
const allBtns = document.querySelectorAll("img");
let btnS;
let selected = "C";

fullMenu.onclick = function(event){
	 btnS = event.target;
	if(btnS.src != null){
		updateMenu(btnS);
	}
}

function updateSelected(id) {
	allBtns.forEach(btn=>{
		if(btn.id.charAt(1) == id){
			updateMenu(btn);
		}
	});
}

function updateMenu(button) {
	allBtns.forEach(btn => {
		btn.style.border = "1px solid wheat";
	})
	if(button.style.border != "1px solid red")
		button.style.border = "1px solid red";

	switch (button.alt) {
		case 'Pathes':
			selected="P";
			break;
		case 'Fences':
			selected="F";
			break;
		case 'Trash':
			selected="T";
			break;
		case 'Cursor':
			selected="C";
			break;
		case 'WayP':
			selected="W";
			break;
		default:
			selected="C";
	}

}
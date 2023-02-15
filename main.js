// javascript file for hw-04

function lastClicked(point_id) {

	// make the selected point a variable
	let pt = document.getElementById(point_id);


	if (pt.getAttribute("stroke") == "PaleVioletRed") {
		pt.setAttribute("stroke", "transparent");
	} else {
		// add a border to the selected point
		pt.setAttribute("stroke", "PaleVioletRed");
		pt.setAttribute("stroke-width", "3");

	}

	// get coordinates of the selected point
	x_val = pt.cx.baseVal.value;
	y_val = pt.cy.baseVal.value;
	coordinates = ("(" + x_val + "," + y_val + ")");

	let newText = "Last point clicked: " + coordinates;
	document.getElementById("right-col").innerHTML = newText;
	}


// get all points
let points = document.getElementsByClassName('points');

// add event listener to all points
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener('click', (e) =>{
		point_id = e.target.id;
		lastClicked(point_id);
	});
}


function addClicked() {
	// get user selected values
	selectX = document.querySelector('#user_x').value;
	selectY = document.querySelector('#user_y').value;
	console.log(selectX)
}

// add event listener to add button
document.getElementById("addButton")
		.addEventListener('click', addClicked);
function quadraticFormula(a,b,c) {


	function concavity() {
		if (a > 0) {
			return true
		}
		else if (a < 0) {
			return false
		}
	}


	function isWholeNumber(number){
		if (number % 1 == 0) {
			return true;
		} 
		else {
			return false;
		}
	}


	function toFraction(decimal){
		let num = Math.trunc(decimal)
		let decimal_dism = parseFloat(decimal).toFixed(2);
		let zero_d = parseFloat((decimal_dism - num)).toFixed(2);

		let numerator = parseInt(zero_d*100);
		let denominator = 100;
		for (let i = 1; i <= 100; i++) {
			if (numerator % i === 0 && denominator % i === 0) {
				numerator = numerator / i;
				denominator = denominator / i;
				i = 1;
			}
		}
		if (num == 0) {
			return `${numerator}/${denominator}`
		}
		else {
			return `${((num*denominator) + numerator)}/${denominator}`
		}
	}


	function XInt() {
		let discriminant = b**2 - (4*a*c)
		rootArray = []

		if (discriminant <0) { 
			return rootArray
		}
		else if (discriminant == 0) {
			let root = -b / (2*a)
			rootArray[0] = root
			if (!isWholeNumber(root)) {
				rootArray[0] = toFraction(root)
			}
			return rootArray
		}
		else if (discriminant > 0) {
			let root1 = (-b+ Math.sqrt(discriminant))/ (2*a);
			let root2 = (-b- Math.sqrt(discriminant))/ (2*a);
			rootArray = [root1 , root2]
			rootArray = rootArray.sort()
			if (!isWholeNumber(rootArray[0])) {
				rootArray[0] = toFraction(rootArray[0])
			}
			if (!isWholeNumber(rootArray[1])) {
				rootArray[1] = toFraction(rootArray[1])
			}
			return rootArray
		}
	}


	function orderFunction() {

		let a_temp = a;
		let b_temp = b;
		let c_temp = c;
		let problem = ""


		if (b > 0){	  b_temp = "+"+b;	}
		if (c > 0){   c_temp = "+"+c;	}


		if (a == 1){	a_temp = "";	}
		if (b == 1){	b_temp = "+";	}
		if (a == -1){	a_temp = "-";	}
		if (b == -1){	b_temp = "-";	}

		let future_b = b_temp + "x"
		let future_c = c_temp

		if (b == 0){    future_b = ""	}
		if (c == 0){    future_c = ""	}

		problem = "<b>Formula: " + a_temp + "x²" + future_b + future_c;
		return problem + "</b><br><br>";
	}


	function fConcavity() {
		if (concavity()) {
			return "Concave.<br><br>"
		}
		else if (!concavity()) {
			return "Convex.<br><br>"
		}
	}


	function Domain() {
		return "Domain: ℝ.<br><br>"
	}


	function Image() {
		if (concavity()) {
			return `Image: (${Vertex()[1]} ; +∞).<br><br>`
		}
		else if (!concavity()) {
			return `Image: (-∞ ; ${Vertex()[1]}).<br><br>`
		}
	}


	function PosNeg() {
		let discriminant = b**2 - (4*a*c)

		if (discriminant < 0 && concavity()) {
			return ["Positivity: (-∞ ; +∞).<br><br>","Negativity: null.<br><br>"]
		}
		if (discriminant < 0 && !concavity()) {
			return ["Positivity: null.<br><br>","Negativity: (-∞ ; +∞).<br><br>"]
		}
		if (discriminant == 0 && concavity()) {
			return [`Positivity: (-∞ ; ${XInt()[0]}) ; (${XInt()[0]} ; +∞).<br><br>`,"Negativity: null.<br><br>"]
		}
		if (discriminant == 0 && !concavity()) {
			return ["Positivity: null.<br><br>",`Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[0]} ; +∞).<br><br>`]
		}
		if (discriminant > 0 && concavity()) {
			return [`Positivity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`,`Negativity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`]
		}
		if (discriminant > 0 && !concavity()) {
			return [`Positivity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`,`Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`]
		}
	}


	function IncDec() {
		if (concavity()) {
			IncDecArray = []
			IncDecArray[0] = `Increasement: (${SymAxis()} ; +∞).<br><br>`
			IncDecArray[1] = `Decreasement: (-∞ ; ${SymAxis()}).<br><br>`
			return IncDecArray
		}
		else if (!concavity()) {
			IncDecArray = []
			IncDecArray[0] = `Increasement: (-∞ ; ${SymAxis()}).<br><br>`
			IncDecArray[1] = `Decreasement: (${SymAxis()} ; +∞).<br><br>`
			return IncDecArray
		}
	}


	function AxesInt() {
		discriminant = b**2 - (4*a*c)
		if (discriminant <0) { 
			return `Axes Intersections: (0 ; ${c})<br><br>`
		}
		else if (discriminant == 0) {
			return `Axes Intersections: (${XInt()[0]} ; 0) ; (0 ; ${c})<br><br>`
		}
		else if (discriminant > 0) {
			return `Axes Intersections: (${XInt()[0]} ; 0) ; (${XInt()[1]} ; 0) ; (0 ; ${c})<br><br>`
		}
	}


	function SymAxis() {
		symmetryAxis = Vertex()[0]
		return symmetryAxis
	}


	function Vertex() {
		xVertex = -b / (2*a)

		yVertex = a*(Math.pow(xVertex,2)) + b*xVertex + c

		return [xVertex , yVertex]
	}

	return [orderFunction(),
		fConcavity(),
		Domain(),
		Image(),
		PosNeg()[0],
		PosNeg()[1],
		IncDec()[0],
		IncDec()[1],
		AxesInt(),
		`Symmetry Axis: ${SymAxis()}.<br><br>`,
		`Vertex: (${Vertex()[0]} ; ${Vertex()[1]}).<br><br>`]
}


function show() {
	let a_value = parseFloat(document.getElementById("a").value);
	let b_value = parseFloat(document.getElementById("b").value);
	let c_value = parseFloat(document.getElementById("c").value);

	if (isNaN(a_value)){
		a_value = 0;
	}
	if (isNaN(b_value)){
		b_value = 0;
	}
	if (isNaN(c_value)){
		c_value = 0;
	}

	document.getElementById("parrafo_a").innerHTML ="A: "+a_value;
	document.getElementById("parrafo_b").innerHTML ="B: "+b_value;
	document.getElementById("parrafo_c").innerHTML ="C: "+c_value;
	

	document.getElementById("Formula").innerHTML = quadraticFormula(a_value,b_value,c_value)[0]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[1]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[2]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[3]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[4]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[5]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[6]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[7]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[8]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[9]+
		"\n"+quadraticFormula(a_value,b_value,c_value)[10];

}


function canvasGraph(){

	let canvas = document.querySelector('canvas');
	let ctx = canvas.getContext('2d');


	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let c = parseFloat(document.getElementById("c").value);

	if (isNaN(a)){
		a = 0;
	}
	if (isNaN(b)){
		b = 0;
	}
	if (isNaN(c)){
		c = 0;
	}


	function clear() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
	}


	function getCoords() {

		function Coordinates(xCoord) {
			let yCoord =a*(Math.pow(xCoord,2)) + (b*xCoord) + c;
			return [xCoord,yCoord]
		}

		coords = []

		for (let i = -100; i < 99.9999;) {
			i = i + 0.0002;
			coords.push(Coordinates(i))
		}

	}


	function concavity() {
		if (a > 0) {
			return true
		}
		else if (a < 0) {
			return false
		}
	}


	function drawFunction() {

		if (concavity() == true) {
			for (let i = 0; i < coords.length; i++) {
				inext = i++
				ctx.moveTo( ( (coords[i][0]*80) - ( 80 * xVertex ) + ( canvas.width / 2 ) ) , ( ( 800 - (coords[i][1]*80) ) + ( 80 * yVertex ) - 240 ) );
				ctx.lineTo( ( (coords[inext][0]*80) - ( 80 * xVertex ) + ( canvas.width / 2 ) ) , ( ( 800 - (coords[i][1]*80) ) + ( 80 * yVertex ) - 240 ) );
			}
		}
		else {
			for (let i = 0; i < coords.length; i++) {
				inext = i++
				ctx.moveTo( ( (coords[i][0]*80) - ( 80 * xVertex ) + 400 ) , ( ( 800 - (coords[i][1]*80) ) + ( 80 * yVertex ) - 560 ) );
				ctx.lineTo( ( (coords[inext][0]*80) - ( 80 * xVertex ) + 400 ) , ( ( 800 - (coords[i][1]*80) ) + ( 80 * yVertex ) - 560 ) );
			}
		}														
		ctx.strokeStyle = "#f00";
		ctx.stroke();
	}


	function showAxes() {

		// X AXIS


		if (concavity() == true) {
			ctx.moveTo( 0 , ( 800 +  ( 80 * yVertex ) - 240 ) );
			ctx.lineTo( 800 , ( 800 +  ( 80 * yVertex ) - 240 ) );
			xPos = 800 +  ( 80 * yVertex ) - 240
		}
		else {
			ctx.moveTo( 0 , ( 800 +  ( 80 * yVertex ) - 560 ) );
			ctx.lineTo( 800 , ( 800 +  ( 80 * yVertex ) - 560 ) );
			xPos = 800 +  ( 80 * yVertex ) - 560
		}


		// Y AXIS

		ctx.moveTo( 400 - ( 80 * xVertex ) , 0 ) ;
		ctx.lineTo( 400 - ( 80 * xVertex ) , 800 );
		yPos = 400 - ( 80 * xVertex )


		// X DIVS

		xDiv_Spacing = 80
		for (let xDiv = (yPos - canvas.width) ; xDiv <= canvas.width;) {
			ctx.moveTo(xDiv , (xPos - 5) );
			ctx.lineTo(xDiv , (xPos + 5) );
			xDiv = xDiv + xDiv_Spacing
		}
		
		ctx.strokeStyle = "#f00";
		ctx.stroke();


		// Y DIVS


		yDiv_Spacing = 80
		for (let yDiv = (xPos - canvas.height) ; yDiv <= canvas.height;) {
			ctx.moveTo( (yPos - 5) , yDiv );
			ctx.lineTo( (yPos + 5) , yDiv );
			yDiv = yDiv + yDiv_Spacing
		}
		
		ctx.strokeStyle = "#f00";
		ctx.stroke();

	}

	clear()
	getCoords()
	drawFunction()
	showAxes()

}

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

// Broken Code

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
		return [`Positivity: null.<br><br>`,`Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[0]} ; +∞).<br><br>`]
	}

// Good Code to Convert


	// function PosNeg() {
	// 	let discriminant = b**2 - (4*a*c)


	// 	if (discriminant < 0) {
	// 		if (concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: (-∞ ; +∞).<br><br>`
	// 			posNegArray[1] = `Negativity: null.<br><br>`
	// 			return posNegArray
	// 		}
	// 		else if (!concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: null.<br><br>`
	// 			posNegArray[1] = `Negativity: (-∞ ; +∞).<br><br>`
	// 			return posNegArray
	// 		}
	// 	}
	// 	else if (discriminant == 0) {
	// 		if (concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: (-∞ ; ${XInt()[0]}) ; (${XInt()[0]} ; +∞).<br><br>`
	// 			posNegArray[1] = `Negativity: null.<br><br>`
	// 			return posNegArray
	// 		}
	// 		else if (!concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: null.<br><br>`
	// 			posNegArray[1] = `Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[0]} ; +∞).<br><br>`
	// 			return posNegArray
	// 		}
	// 	}
	// 	else if (discriminant > 0) {
	// 		if (concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`
	// 			posNegArray[1] = `Negativity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`
	// 			return posNegArray
	// 		}
	// 		else if (!concavity()) {
	// 			posNegArray = []
	// 			posNegArray[0] = `Positivity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`
	// 			posNegArray[1] = `Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`
	// 			return posNegArray
	// 		}
	// 	}
	// }


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
  let a_value = parseInt(document.getElementById("a").value);
  let b_value = parseInt(document.getElementById("b").value);
  let c_value = parseInt(document.getElementById("c").value);
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

	let canvas = document.querySelector('canvas');


function canvasGraph(){
	let canvas = document.querySelector('canvas');
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	ctx.fillRect(80,400,1,1)
	ctx.fillRect(160,400,1,1)
	ctx.fillRect(240,400,1,1)
	ctx.fillRect(320,400,1,1)
	ctx.fillRect(480,400,1,1)
	ctx.fillRect(560,400,1,1)
	ctx.fillRect(640,400,1,1)
	ctx.fillRect(720,400,1,1)

	ctx.fillRect(400,400,1,1)

	ctx.fillRect(400,80,1,1)
	ctx.fillRect(400,160,1,1)
	ctx.fillRect(400,240,1,1)
	ctx.fillRect(400,320,1,1)
	ctx.fillRect(400,480,1,1)
	ctx.fillRect(400,560,1,1)
	ctx.fillRect(400,640,1,1)
	ctx.fillRect(400,720,1,1)


	function getCoords() {

		let a = parseInt(document.getElementById("a").value);
		let b = parseInt(document.getElementById("b").value);
		let c = parseInt(document.getElementById("c").value);

		function Coordinates(xCoord) {
			let yCoord =a*(Math.pow(xCoord,2)) + (b*xCoord) + c;
			return [xCoord,yCoord]
		}

		coords = []

		for (let i = -5; i < 4.99;) {
			i = i + 0.01;
			coords.push(Coordinates(i))
		}

		console.clear()

		for (let i = 0; i < coords.length; i++) {
			console.log(coords[i])
		}

		console.log(coords.length)

	}

	function draw() {
		for (let i = 0; i < coords.length; i++) {
			ctx.fillRect(((coords[i][0]*80)+400),((800-(coords[i][1]*80))-400),1,1)
		}
	}

	getCoords()
	draw()

}
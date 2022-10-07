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


function canvasGraph(){

	let canvas = document.querySelector('canvas');
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height)


	function getCoords() {

		let a = parseInt(document.getElementById("a").value);
		let b = parseInt(document.getElementById("b").value);
		let c = parseInt(document.getElementById("c").value);


		function Coordinates(xCoord) {
			let yCoord =a*(Math.pow(xCoord,2)) + (b*xCoord) + c;
			return [xCoord,yCoord]
		}

		coords = []

		for (let i = -5; i < 4.9999;) {
			i = i + 0.0004;
			coords.push(Coordinates(i))
		}

	}


	function drawFunction() {
		for (let i = 0; i < coords.length; i++) {
			inext = i++
			ctx.moveTo( ((coords[i][0]*80)+400) , ((800-(coords[i][1]*80))-400) );
			ctx.lineTo( ((coords[inext][0]*80)+400) , ((800-(coords[inext][1]*80))-400) );
		}
		ctx.strokeStyle = "#f00";
		ctx.stroke();
	}


	function showAxes() {

		ctx.moveTo(0,400);
		ctx.lineTo(800,400);

		ctx.moveTo(400,0);
		ctx.lineTo(400,800);

		ctx.strokeStyle = "#f00";
		ctx.stroke();


		ctx.moveTo(80,395);
		ctx.lineTo(80,405);

		ctx.moveTo(160,395);
		ctx.lineTo(160,405);

		ctx.moveTo(240,395);
		ctx.lineTo(240,405);

		ctx.moveTo(320,395);
		ctx.lineTo(320,405);

		ctx.moveTo(480,395);
		ctx.lineTo(480,405);

		ctx.moveTo(560,395);
		ctx.lineTo(560,405);

		ctx.moveTo(640,395);
		ctx.lineTo(640,405);

		ctx.moveTo(720,395);
		ctx.lineTo(720,405);

		ctx.strokeStyle = "#f00";
		ctx.stroke();


		ctx.moveTo(395,80);
		ctx.lineTo(405,80);

		ctx.moveTo(395,160);
		ctx.lineTo(405,160);

		ctx.moveTo(395,240);
		ctx.lineTo(405,240);

		ctx.moveTo(395,320);
		ctx.lineTo(405,320);

		ctx.moveTo(395,480);
		ctx.lineTo(405,480);

		ctx.moveTo(395,560);
		ctx.lineTo(405,560);

		ctx.moveTo(395,640);
		ctx.lineTo(405,640);

		ctx.moveTo(395,720);
		ctx.lineTo(405,720);

		ctx.strokeStyle = "#f00";
		ctx.stroke();
	}


	getCoords()
	drawFunction()
	showAxes()


}
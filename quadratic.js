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
	    } else {
	        return false;
	    }
	}

	function toFraction(decimal){
	    let num = Math.trunc(decimal)
	    let decimal_dism = parseFloat(decimal.toFixed(2));
	    let zero_d = parseFloat((decimal_dism - num).toFixed(2));

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
			rootArray = []
			return rootArray
		}
		else if (discriminant == 0) {
			let root = -b / (2*a)
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

        problem = "<b>Formula: " + a_temp + "x^2" + future_b + future_c;
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
		if (concavity()) {
			posNegArray = []
			posNegArray[0] = `Positivity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`
			posNegArray[1] = `Negativity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`
			return posNegArray
		}
		else if (!concavity()) {
			posNegArray = []
			posNegArray[0] = `Positivity: (${XInt()[0]} ; ${XInt()[1]}).<br><br>`
			posNegArray[1] = `Negativity: (-∞ ; ${XInt()[0]}) ; (${XInt()[1]} ; +∞).<br><br>`
			return posNegArray
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
		symmetryAxis = Vertex()[1]
		return symmetryAxis
	}

	function Vertex() {
		xVertex = -b / (2*a)

		yVertex = a*(Math.pow(xVertex,2)) + b*xVertex + c

		return [xVertex , yVertex]
	}


	document.write(orderFunction())

	document.write(fConcavity())

	document.write(Domain())

	document.write(Image())

	document.write(PosNeg()[0] , PosNeg()[1])

	document.write(IncDec()[0] , IncDec()[1])

	document.write(AxesInt())

	document.write(`Symmetry Axis: ${SymAxis()}.<br><br>`)

	document.write(`Vertex: (${Vertex()[0]} ; ${Vertex()[1]}).<br><br>`)


}
quadraticFormula(6,-5,1)
quadraticFormula(1,-5,6)
quadraticFormula(2,5,-3)
quadraticFormula(-1,-2,3)
quadraticFormula (-1,-2,3)

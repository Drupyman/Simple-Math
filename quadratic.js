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
	    	numeratorTemp = (num*denominator) + numerator
	    	return `${numeratorTemp}/${denominator}`
		}
	}

	function order() {

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

        problem = "Formula: " + a_temp + "x^2" + b_temp + "x" + c_temp + "."
        return problem + "<br><br>";
    }


    document.write (order())

	document.write("Domain: ℝ.<br><br>")


	let xVertex = -b / (2*a)

	let yVertex = a*(Math.pow(xVertex,2)) + b*xVertex + c


	if (concavity()) {
		document.write (`Image: (${yVertex} ; +∞).<br><br>`)
	}
	else if (!concavity()) {
		document.write (`Image: (-∞ ; ${yVertex}).<br><br>`)
	}


	document.write(`Vertex: (${xVertex} ; ${yVertex}).<br><br>`)



	let discriminant = b**2 - (4*a*c)

	if (discriminant <0) { 
		document.write ("x-Intersection: null.<br><br>")
	}
	else if (discriminant == 0) {
		let root = -b / (2*a)
		if (isWholeNumber(root) = false) {
			let rootTemp = toFraction(root)
			document.write (`x-Intersection: ${rootTemp}.<br><br>`)
		}
	}
	else if (discriminant > 0) {
		let root1 = (-b+ Math.sqrt(discriminant))/ (2*a);
		let root2 = (-b- Math.sqrt(discriminant))/ (2*a);
		let rootTemp1 = root1
		let rootTemp2 = root2
		if (!isWholeNumber(root1)) {
			rootTemp1 = toFraction(root1)
		}
		if (!isWholeNumber(root2)) {
			rootTemp2 = toFraction(root2)
		}
		document.write (`x-Intersection: [${rootTemp1} , ${rootTemp2}].<br><br>`)
	}


	document.write(`y-Intersection: ${c}.<br><br>`)


	if (concavity()) {
		document.write ("Concave.<br><br>")
	}
	else if (!concavity()) {
		document.write ("Convex.<br><br>")
	}


	let symmetryAxis = xVertex

	document.write(`Symmetry Axis: ${symmetryAxis}.<br><br>`)

		if (concavity()) {
		document.write (`Increasement: (${symmetryAxis} ; +∞).<br><br>`)
		document.write (`Decreasement: (-∞ ; ${symmetryAxis}).<br><br>`)
	}
	else if (!concavity()) {
		document.write (`Increasement: (-∞ ; ${symmetryAxis}).<br><br>`)
		document.write (`Decreasement: (${symmetryAxis} ; +∞).<br><br>`)
	}




}
// quadraticFormula(6,-5,1)
// quadraticFormula(1,-5,6)
// quadraticFormula(2,5,-3)
quadraticFormula(-1,-2,3)

// Falta conjuntos de positividad, negatividad
// se puede determinar organizando las raices de menor a mayor
// dependiendo si es concava o convexa utilizar estos datos para determinar

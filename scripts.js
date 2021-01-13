
function lowercase() {
	let content = document.getElementById("textarea").value;
    document.getElementById("textarea2").value = content.toLowerCase();
	document.getElementById("thetitle").textContent = "text converter";
}
 
 function uppercase() {
	let content = document.getElementById("textarea").value;
    document.getElementById("textarea2").value = content.toUpperCase();
	document.getElementById("thetitle").textContent = "TEXT CONVERTER";
}
 
function sentencecase() {
	let content = document.getElementById("textarea").value;
	document.getElementById("textarea2").value = content.toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, s => s.toUpperCase());
	document.getElementById("thetitle").textContent = "Text converter";
}

function titlecase() {
	let content = document.getElementById("textarea").value;
	let result = content.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
	document.getElementById("textarea2").value = result;
	document.getElementById("thetitle").textContent = "Text converter";
}

function checkpalindrome() {
	let content = document.getElementById("textarea").value;
	content = content.replace(/[^0-9a-z]/gi, "");
	//content = content.toLowerCase(); SHOULD IT BE CASE SPECIFIC OR NOT?
	let len = content.length;
    let mid = Math.floor(len/2);
	let result = "true";
	
    for (let i = 0; i < mid; i++ ){
        if (content[i] !== content[len - 1 - i]) {
            result = "false";
			break;
        }
    }

    document.getElementById("textarea2").value = result;
}

function reversetext() {
	let content = document.getElementById("textarea").value;
    document.getElementById("textarea2").value = content.split("").reverse().join("");
	document.getElementById("thetitle").textContent = "retrevnoc txeT";
}


function swapcase() {
	let content = document.getElementById("textarea").value;
	let newLetters = "";
    for(let i = 0; i<content.length; i++){
        if(content[i] === content[i].toLowerCase()){
            newLetters += content[i].toUpperCase();
        }else {
            newLetters += content[i].toLowerCase();
        }
    }
	
    document.getElementById("textarea2").value = newLetters;
	document.getElementById("thetitle").textContent = "tEXT CONVERTER";

}

function alternatingcase() {
	let content = document.getElementById("textarea").value;
	let chars = content.toLowerCase().split("");
		for (let i = 1; i < chars.length; i += 2) {
			chars[i] = chars[i].toUpperCase();
		}
		
	document.getElementById("textarea2").value = chars.join("");
	document.getElementById("thetitle").textContent = "tExT cOnVeRtEr";
	
}

function texttobinary() {
	let output = "";
	let content = document.getElementById("textarea").value;
	
	for (let i = 0; i < content.length; i++) {
		output += (0b100000000 + content[i].charCodeAt(0)).toString(2).substring(1) + " ";
	}
	
	document.getElementById("textarea2").value = output.slice(0, -1);
}

function hextobinary(){
	let content = document.getElementById("textarea").value;
	let result = "";
	content = content.split(/[ ,]+/);
	content.forEach(element => result += ("00000000" + (parseInt(element, 16)).toString(2)).substr(-8) + " ");
	result = result.substring(0, result.length - 1);
	document.getElementById("textarea2").value = result;
}

function updatecounts(value){
	document.getElementById("charcount").innerText = value.length;
	document.getElementById("wordcount").innerText = countWords(value);
	document.getElementById("linecount").innerText = countLines(value);
};

function countWords(str) {
	if (str.length == 0) {
		return 0;
	}
	else {
		return str.trim().split(/\s+/).length;
	}
}

function countLines(str) {
	if (str.length == 0) {
		return 0;
	}
	else {
		return str.split(/\r\n|\r|\n/).length;
	}
}

function binarytotext() {
	let content = document.getElementById("textarea").value;
	let outputStr = content.split(' ') //Split string in array of binary chars
	.map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
	.join(''); //Join the array back to a string
	document.getElementById("textarea2").value = outputStr;
}

function binarytohex() {
	let content = document.getElementById("textarea").value;
	document.getElementById("textarea2").value = parseInt(content, 2).toString(16);
}

function copy() {
	let content = document.getElementById("textarea2");
	content.select();
	content.setSelectionRange(0, 99999);
	document.execCommand("copy");
}

function cleararea() {
	document.getElementById("textarea").value = "";
	document.getElementById("textarea2").value = "";
	document.getElementById("charcount").innerText = 0;
	document.getElementById("wordcount").innerText = 0;
	document.getElementById("linecount").innerText = 0;
	document.getElementById("thetitle").textContent = "Text converter";
}




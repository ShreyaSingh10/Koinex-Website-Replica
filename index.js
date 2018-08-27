
const applyPrice= () => {
	let element = document.createElement("span");
    let x = document.getElementById("priceNumberMin").value;
    let y = document.getElementById("priceNumberMax").value;
    if(x>y){
    	y=x;
    }
    element.innerHTML= 'Rs'+ ' ' + x +'-'+ ''+ 'Rs' +' '+ y;
    let z=document.getElementById("listing-filters").appendChild(element);
    z.className= "listing-filter-values";
}
const clearPrice= () =>{
	document.getElementById("priceNumberMin").value="";
	document.getElementById("priceNumberMax").value="";
}
const applyQuantity=()=> {
	var element = document.createElement("span");
    let x = document.getElementById("quantityNumberMin").value;
    let y = document.getElementById("quantityNumberMax").value;
    if(x>y){
    	y=x;
    }
    element.innerHTML= 'Rs'+ ' ' + x +'-'+ ''+ 'Rs' +' '+ y;
    let z= document.getElementById("listing-filters").appendChild(element);
    z.className= "listing-filter-values";
}
const clearQuantity=()=>{
	document.getElementById("priceNumberMin").value="";
	document.getElementById("priceNumberMax").value="";
}
const startDate=()=>{
	let element = document.createElement("span");
	let x = document.getElementById("startDate").value;
	element.innerHTML= x;
	let z=document.getElementById("listing-filters").appendChild(element);
    z.className= "listing-filter-values";
}
const endDate =()=>{
	let element = document.createElement("span");
	let x = document.getElementById("startDate").value;
	element.innerHTML= x;
	let z=document.getElementById("listing-filters").appendChild(element);
	z.className= "listing-filter-values";
}
const hours =()=>{
    let checkbox = document.getElementById('hours');
  	if (checkbox.checked === true){
    	let element = document.createElement("span");
    	element.innerHTML= "User last seen in 24Hrs"
    	let z=document.getElementById("listing-filters").appendChild(element);
    	z.className= "listing-filter-values";
	}
}
const collateral =()=>{
    var checkbox = document.getElementById('collateral');
  	if (checkbox.checked === true){
    	let element = document.createElement("span");
    	element.innerHTML= "Collateral Required"
    	let z=document.getElementById("listing-filters").appendChild(element);
    	z.className= "listing-filter-values";
	}
}
var myArray = [
		{
		"user": "Aslamxyxxxxx",
		"price": "45000000",
		"min": "0.000ETH",
		},
		{
		"user": "marinawillams",
		"price": "65000000",
		"min": "0.000ETH",
		},
		{
		"user": "cleopatracutyo",
		"price": "50000000",
		"min": "0.000ETH",
		},
		{
		"user": "xxxxx",
		"price": "45000000",
		"min": "0.000ETH",
		},
		{
		"user": "willams",
		"price": "65000000",
		"min": "0.000ETH",
		},
		{
		"user": "pepepepepe",
		"price": "50000000",
		"min": "0.000ETH",
		},
	]
const showDetailsFirst =()=>{
	
	for(i = 0; i < myArray.length; i++) {
		let out="";
		let element = document.createElement("div");
		out += '<p class=col-md-3>' + myArray[i].user + '</p>' + '<p class=col-md-3>' + myArray[i].price + '</p>' + '<p class=col-md-3>' + myArray[i].min + '</p>'+ '<button class=col-md-3>' + "Buy" +'</button>';
		element.innerHTML= out;
		let z=document.getElementById("details").appendChild(element);
		z.className= "detailList row";
	}
}
const showDetails =()=>{
	var elem = document.getElementsByClassName("detailList");
	for (let i = 0; i < elem.length; i++) {
	    elem[i].remove();
	    //console.log("remove");
	}
	for(let i = 0; i < myArray.length; i++) {
		let out="";
		let element = document.createElement("div");
		out += '<p class=col-md-3>' + myArray[i].user + '</p>' + '<p class=col-md-3>' + myArray[i].price + '</p>' + '<p class=col-md-3>' + myArray[i].min + '</p>'+ '<button class=col-md-3>' + "Buy" +'</button>';
		element.innerHTML= out;
		let z=document.getElementById("details").appendChild(element);
		z.className= "detailList row";
	}
}
		
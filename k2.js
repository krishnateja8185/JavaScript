var Electric={
	"servicenumber":202020,
	"uid":2021,
	"noofunits":100,
	"unitcost":3.14,
	
	"getTotalBill":function(){
		var total=this.noofunits*this.unitcost;
		return total;
	}
	
}

document.getElementById("hi").innerHTML=Electric.getTotalBill();
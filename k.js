
var Employee=[{
	"empid":101,
	"name":"kittu",
	"hra":200,
	"da":100,
	"allowance":150,
	"bonus":50,
	"basic":5000,
	"dept":1,
    "getSalary": function() {
		var total =  this.hra+this.da+this.allowance+this.bonus+this.basic;
		getSlaryperDay(total);
		return total;
	}
},{"empid":102,
	"name":"Mohan",
	"hra":300,
	"da":200,
	"allowance":200,
	"bonus":100,
	"basic":6000,
	"dept":2,
    "getSalary": function() {
		var total = this.hra+this.da+this.allowance+this.bonus+this.basic;
		getSlaryperDay(total);
		return total;
	}
}]

EmployeeDetails();
 
function EmployeeDetails(){
	str = '';
	
	for(var i=0; i<Employee.length;i++){
		str+='<div>'+Employee[i].empid+'</div>';
		str+='<div>'+Employee[i].name+'</div>';
		str+='<div>'+Employee[i].hra+'</div>';
		str+='<div>'+Employee[i].da+'</div>';
		str+='<div>'+Employee[i].allowance+'</div>';
		str+='<div>'+Employee[i].bonus+'</div>';
		str+='<div>'+Employee[i].basic+'</div>';
		str+='<div>'+Employee[i].empid+'</div>';
		str+='<div>'+Employee[i].dept+'</div>';	
		str+='<div>'+Employee[i].getSalary()+'</div>'		
		str+='<hr>';	
	}	

	document.getElementById("demo").innerHTML = str;
}



//1)Read the Json file from data folder,parse the file.
//2)Retrieve all the emp name (convert them in 
//uppercase)and store in an array empName[]
//3)sort in ascending order the above empName by 
//using array.sort method and store it in array empNameSort[].
//4)Create an object  and store name as key and count of
//No of technologies known by each emp as value.
//5)Store in a variable name of emp with maximum 
//no of work experienxce

var empData, empName = [], empNameSort = [], techData = [], maxexp=0, maxExpEmpName ;
let run = function () {
//Read the Json file from data folder,parse the file.

let fs = require("fs");
empData = fs.readFileSync('data/Employee.json');
empData = JSON.parse(empData);

//console.log(empData);

//Retrieve all the emp name (convert them in uppercase)and store in an array empName[]

empData.map(function(input){
	empName.push(input.EmpName.toUpperCase());
});
//console.log(empName);


//sort in ascending order the above empName by using array.sort method and store it in array empNameSort[].

empNameSort = empName.sort(function(a,b)
	{
		if(a<b){return -1;}
		if(a>b){return 1;}
		return 0;
	});

//console.log(empNameSort);

//Create an object  and store name as key and count of No of technologies known by each emp as value.
function technologies(empname, techknown) 
{
    this.empname = empname;
    this.techknown = techknown;
}



for(let index=0; index<empData.length; index++)
{
	var empname = empData[index].EmpName;
	var techknown = empData[index].TehnologiesKnown.length;
	
	techData[index] = new technologies(empname, techknown);
}

//console.log(techData);

//Store in a variable name of emp with maximum no of work experienxce
empData.map(function(input){

if(maxexp<input.ExperienceinYrs)
{
	maxexp=input.ExperienceinYrs;
	maxExpEmpName=input.EmpName;
}


});

//console.log(maxExpEmpName);

}
run();
module.exports = {
	exec: run,
	empData : empData,
	empName:empName,
	maxExpEmpName: maxExpEmpName,
	empNameSort:empNameSort
};






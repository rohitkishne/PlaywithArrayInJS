/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter((developer) => developer.profession === "developer");
  developers.map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = arr.filter((developer) => developer.profession === "developer");
  developers.forEach((developer) => console.log(developer));
}

function addData() {
  //Write your code here, just console.log
  const newData = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((developer) => developer.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 101, name: "surya", age: "21", profession: "tester" },
  { id: 102, name: "aman", age: "25", profession: "manager" },
  { id: 103, name: "suman", age: "23", profession: "seller" },
  ];

  const concatenateArray = arr.concat(newArray);
  console.log(concatenateArray);
}

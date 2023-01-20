
var json = { 
    "userdetails":[{
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john123@guvi.in"
    },
    {
      "id": 2,
      "first_name": "Lucy",
      "last_name": "Ballmer",
      "email": "lucy456@guvi.in"
    },
    {
      "id": 3,
      "first_name": "Anna",
      "last_name": "Smith",
      "email": "anna789@guvi.in"
    }],
    "userlist" : ["john123@guvi.in","lucy456@guvi.in","anna789@guvi.in"]
};
//For loop
for(let i=0;i<json.length;i++){
    var obj = json[i];
    console.log(obj.id);
    console.log(obj.first_name);
    console.log(obj.last_name);
    console.log(obj.email);
}

//For-In Loop
for(var i in json.email){
    console.log(i);
}

//For-Of Loop
for(var x of json.userlist){
console.log(x);
}

//For-Each Loop.

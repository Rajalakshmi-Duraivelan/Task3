 var json = [
      {
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
      },
      {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
      },
      {
        "id": 3,
        "first_name": "Anna",
        "last_name": "Smith",
        "email": "annasmith23@gmail.com"
      },
      {
        "id": 4,
        "first_name": "Robert",
        "last_name": "Brown",
        "email": "bobbrown432@yahoo.com"
      },
      {
        "id": 5,
        "first_name": "Roger",
        "last_name": "Bacon",
        "email": "rogerbacon12@yahoo.com"
      }
    ];

//for loop
for(var i = 0; i < json.length; i++) {
  console.log(json[i].id);
  console.log(json[i].first_name);
  console.log(json[i].last_name);
  console.log(json[i].email);
}
/*//for Each
json.forEach(function(obj) {
   console.log(obj.first_name); 
    });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].last_name);
//console.log(json[key].msg);

}
}
//for Of
let text = "";
for (let x of json[key]) {
text += x; 
}
console.log(text);*/

  
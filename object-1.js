const username ={
    name : ["Hatsune", "Miku"],
    age: 20,
    job:["Programmer", "Teacher"],
    crush:{
        primary : ['Jesicca', "Dita"],
        secondray : ['Rizqhia', "Vita"],
        highschool :"Sherliey",
        college:["Lukti", "Other class girl"],
        work:["Arra", "Marwah", "Wafa", "Jasmine", "Mutiara", "Anisa"]
    }
}

console.log(username);
console.log(username.name);
console.log(username.crush.work);
let myCrushAtCollege = username.crush.college;
console.log(myCrushAtCollege);


// you can create empty object
const username2={}
username2.age=20;
username.name='Hatsune Miku';

console.log(username2);
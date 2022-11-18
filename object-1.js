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

const rioInTheFuture={
    salary : 25000000,
    isHasHouse: true,
    languageSkill:{
        Advance : ["English", "Japanese"],
        Intermediate :["German", "Chinese"]
    },
    isHasCar : true,
    programmingSKill:{
        Frontend : ["Javascript", "HTML", "CSS", "REACT", "NODEJS"],
        DataScientis :["Python", "Math"],
        GameDevelopment :["UNITY","C#" ,"Blender", "Krita"]
    },
    isHasMasterDegree: true

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
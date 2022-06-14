//Es un array map
//Caso de uso:Tenemos un array de una lista y solo queremos saber el nombre de las personas.
const name =[
    {
        name:"Naomi Ramos",
        age:20
    },
    {
        name:"Arlette Ramos",
        age:19
    },
    {
        name:"Juan Ramos",
        age:17
    }, 
    {
        name:"Silvia Rangel",
        age:40
    },
];
const returName = function(people) 
{
    return people.name;
}
const peopleNames = name.map(returName);
console.log(peopleNames);

//Es un array Filter
//Caso de uso: Quiero saber las edades que son mayores a 50.
const ages = [42, 60, 35, 85, 20, 71, 92, 52];
const agesThanFifty = ages.filter((age) => age > 50);
console.log(agesThanFifty);

//Es un array Find
//Caso de uso: Quiero identificar entre los alumnos el alumno o alumna con la matricula 200031.
const students =[
    {
        id:200031,
        name: "Naomi Ramos",
        career: "Ingenieria en Sistemas",
    },
    {
        id:190935,
        name: "Maria Legorreta",
        career: "Ingenieria Industiral",
    },
    {
        id:161000,
        name: "Jesus Chacon",
        career: "Liceniatura en Administración de Empresas",
    },
];
    const filterStudents = students.find(student => student.id === 200031);
    console.log(filterStudents);
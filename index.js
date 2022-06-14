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

    //Es un array Reduce
//Caso de uso: Una tienda de abarrotes desea saber el total de productos para su inventario.
const items = [
    { HandsSoap: 48 },
    { Shampoo: 20 },
    { BodyCream: 45 },
    { Shampoo: 60 },
    { HandsSoap: 40 },
    { Toothbrush: 20 },
    { BodyCream: 56 },
    { Toothbrush: 63 }
];
const grouped = items.reduce((acc, item) => {
    for (let prop in item) {
        if (acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    }
    return acc;
}, {});
console.log(grouped);

//Es un array findIndex
// Caso de uso: Quiero saber en que posición se encuentra mi primo que tiene 24 años, entre algunas edades de mi familia. 
const family = [19, 48, 63, 52, 24, 39, 77, 81, 90];
const indexOfFive = family.findIndex((number) => number === 24);
console.log(indexOfFive);

//Es una array replace
//Caso de uso: En la veteriana se equivocaron de palabras y quieren cambiar tortuga por mono y liebre por oso.
const p = 'At the vet we did a test, the fast hare ran to one side of the slow turtle. If the turtle wins the test. Did the hare really trust?';
console.log(p.replace('turtle', 'monkey'));
const regex = /turtle/i;
console.log(p.replace(regex, 'bear'));

//Es un array Hoisting.
//Caso de uso: Mi mamá quiere sabe el nombre de la perrita que a cabo de adoptar.
DogName("Diamante");

function DogName(name) {
  console.log("The name of my dog is " + name);
}

//Es un funcion promesa.
//Caso de uso: Un cliente desea obtener el nombre de cada usuario con sus respectivos gustos
const getUsers = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                    id: 1,
                    name: "Naomi",
                },
                {
                    id: 2,
                    name: "Arlette",
                },
            ]);
        }, 3000);
    });
};

const getCategories = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                    id: 1,
                    name: "Laugh",
                },
                {
                    id: 2,
                    name: "Sleep",
                },
            ]);
        }, 100);
    });
};

const getReports = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                    id: 1,
                    name: "Play Softball",
                },
                {
                    id: 2,
                    name: "Eat Fast Food",
                },
            ]);
        }, 300);
    });
};

(async function main() {
    try {
        const users = await getUsers();
        console.log(users);
        console.log(users.length);
        const categories = await getCategories();
        console.log(categories);
        console.log(categories.length);
        const reports = await getReports();
        console.log(reports);
        console.log(reports.length);
    } catch (error) {
        console.log("Error: " + error);
    }
})();
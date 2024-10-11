var julia= true;
var family = {
    johan:{
        name:"Johan",
        age: 35,
        likes: ["pizza", "hocky"],
        dislikes: ["paying taxes"]
    },
    janice:{
        age: 39,
        likes: ["sew"],
        dislikes: ["neighboors"]
    },
    julia:{
        age: 9,
        likes: ["pizza"],
        dislikes: []
    },
    judit:{
        age: 2,
        likes: [],
        dislikes: ["cars", "teletubbies", 
            {
            age: 10,
            dislikes: ["judit", "julia"]
            },
            {
                age: 9,
                dislikes: ["judit", "julia"]
            }
        ]
    }
};

console.log("before bd: " + family.johan.age);
family.johan.age += 1;
console.log("after bd: " + family.johan.age);

family.julia.dislikes.push(family.johan);
console.log(family.julia.dislikes);
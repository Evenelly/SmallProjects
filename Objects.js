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
        disklikes: ["neighboors"]
    },
    julia:{
        age: 9,
        likes: ["pizza"]
    },
    judit:{
        age: 2,
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

console.log(family.johan.dislikes)
// var classNames = ["Moltas", "Halim", "Alvin", "Fabian", "Noah", "Liam", "Simon", "Elliot", "Ahmad", "Loke", "Hugo"];

// var randomNumber = Math.floor(Math.random() * 11);

// console.log(classNames[randomNumber]);

var bussSeats = ["Agnes", "Bengt", "Claudia"]; //tre namn

bussSeats.push("Daniel", "Ester"); //två till

bussSeats.splice(0, 1, "Fredrik", "Gunilla", "Hektor"); //0 = vart elementen ska läggas till, 1 = hur många som ska tas bort

bussSeats.splice(2,3) //hektor + första hoppar av

bussSeats.splice(0,1);
bussSeats.splice(1,1, "Jenny", "Jimmy", "Jenna"); // Alla förutom Ester, Gunilla + tre j

for (let i = bussSeats.length - 1; i >= 0; i--) { //kollar igenom alla element och kollar ifall e inkluderas i någon av dem tas de bort
    var result = bussSeats[i].includes("e");
    if(result){
        bussSeats.splice(i,1);
    }
}

bussSeats.push("Kjell", "Laura", "Maurice", "Nadia");
var date = new Date() //tar datum
if(date.getDay() == 5){ //kollar vilken dag det är (1-7)
    bussSeats.push("Oskar");
}

bussSeats.splice(0,0, "Patricia"); //lägger Patricia först

bussSeats.push("Laura", "Rickard", "Timothy") //lägger till 3 nya

for (let i = 0; i < bussSeats.length; i++) {
    if(bussSeats[i] == "Rickard" && i % 2 == 0){ //kollar ifall det är rickard och ifall han sitter på en jämn plats (indexplats)
        bussSeats.splice(i, 1)
        i--; //för att säkerställa att alla blir genomsökta, eftersom man tar bort en
    }
    if(bussSeats[i] == "Gunilla"){ //tar gunillas index
        var temp1 = i
    }
    if(bussSeats[i] == "Kjell"){ //tar kjells index
        var temp2 = i
    }
}
var temp3 = bussSeats[temp1] //byter plats på gunilla och kjell
bussSeats[temp1] = bussSeats[temp2]
bussSeats[temp2] = temp3

for (let i = 0; i < bussSeats.length; i++) {
    if(bussSeats[i] == "Laura"){ //letar efter laura
        bussSeats.splice(i + 1, bussSeats.length - i + 1); //tar bort alla efter laura
        i = bussSeats.length; //slutar loopen
    }
}

bussSeats.splice(3,1);

for (let i = bussSeats.length - 1; i >= 0; i--) { //går bakifrån då man tar bort saker i arrayn
    if(i % 2 == 1){ //alla udda flyttar plats
        bussSeats.splice(i,1);
    }
}

for (let i = bussSeats.length - 1; i >= 0; i--) { 
    if(i !== 1){ //tar bort alla förutom den som sitter i index 1. 
        bussSeats.splice(i,1)
    }
}

ViewSeats();




function ViewSeats(){
    console.log("These are the occupied seats at the moment");

    for (let i = 0; i < bussSeats.length; i++) {
        console.log(bussSeats[i]);   
    }

}


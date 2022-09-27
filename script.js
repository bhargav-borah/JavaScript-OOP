
// Object Literal Syntax for Creating an Object
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('Draw');
    }
};

circle1.draw();

// Factory Function 
function createCircle(radius) {
    return {
        radius, // Same as writing radius: radius
        draw: function(){
            console.log('Draw');
        }
    };
}

const circle2 = createCircle(5);
circle2.draw();

// Constructor Function
function Circle(radius) { // By convention, constructor functions' names begin with capital letter
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
    // return this (When the object is created with the 'new' keyword, this return statement is implictly called) 
}

const circle3 = new Circle(1);
circle1.draw();

const circle4 = new Circle(10);

circle4.location = { x: 1 };
circle4['location'] = { x: 1 };

delete circle4.location; // delete circle4['location']

// Enumerating Properties
for(let key in circle4 ) {
    if (typeof circle[key] !== 'function'){
        console.log(key, circle[key]);
    }
}

// Another method to enumerate properties 
const keys = Object.keys(circle4);
console.log(keys);

if ('radius' in circle4)
    console.log('circle 4 has a radius');

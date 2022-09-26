
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
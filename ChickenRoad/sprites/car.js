//create the constructor for the class Car
function Car() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 500,
        y = 200,
        //velocity variables
        vx = 0,
        vy = 0,
        //size
        size = 20,
        //x velocity
        vx = 3.5,
        //y velocity
        vy = 3;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Car.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#49E20E";
        context.moveTo(-30, -60);
        context.lineTo(-30, 60);
        context.lineTo(30, 60);
        context.lineTo(30, -60);
        //close the path
        context.closePath();
        context.fill();
        //draw wheels
        context.beginPath();
        context.fillStyle = "#C2C5CC";
        context.moveTo(-30, -50);
        context.lineTo(-50, -50);
        context.lineTo(-50, - 30);
        context.lineTo(-30, - 30);
        context.closePath();
        context.fill();

        context.beginPath();
        context.fillStyle = "#C2C5CC";
        context.moveTo(30, 50);
        context.lineTo(50, 50);
        context.lineTo(50,  30);
        context.lineTo(30,  30);
        context.closePath();
        context.fill();

        context.beginPath();
        context.fillStyle = "#C2C5CC";
        context.moveTo(-30, 50);
        context.lineTo(-50, 50);
        context.lineTo(-50,  30);
        context.lineTo(-30,  30);
        context.closePath();
        context.fill();

        context.beginPath();
        context.fillStyle = "#C2C5CC";
        context.moveTo(30, -50);
        context.lineTo(50, -50);
        context.lineTo(50, - 30);
        context.lineTo(30, - 30);
        context.closePath();
        context.fill();

        //DRAW front window
        context.beginPath();
        context.fillStyle = "#C2C5CC";
        context.moveTo(-20, 10);
        context.lineTo(-20, 40);
        context.lineTo(20, 40);
        context.lineTo(20, 10);
        context.closePath();
        context.fill();
        

        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }

  



    //public property for VX
    Object.defineProperty(this, 'VX',
        {
            get: function () {
                return vx;
            },
            set: function (value) {
                vx = value;
            }
        }
    )

    //public property for VY
    Object.defineProperty(this, 'VY',
        {
            get: function () {
                return vy;
            },
            set: function (value) {
                vy = value;
            }
        }
    )

    //public property for size
    Object.defineProperty(this, 'Size',
        {
            get: function () {
                return size;
            },
            set: function (value) {
                size = value;
            }
        }
    )

    //public property for X
    Object.defineProperty(this, 'X',
        {
            get: function () {
                return x;
            },
            set: function (value) {
                x = value;
            }
        }
    )

    //public property for Y
    Object.defineProperty(this, 'Y',
        {
            get: function () {
                return y;
            },
            set: function (value) {
                y = value;
            }
        }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 20;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the value of y plus height
                return y + 20;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the value of x less width
                return x - 30;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the value of x plus width
                return x + 30;
            }
        }
    )

    Car.prototype.halt = function () {

        //kill all velocity
        vx = 0;
        vy = 0;
     
    }
}



//create the constructor for the class Chicken
function Chicken() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 200,
        y = 200,
        //velocity variables
        vx = 0,
        vy = 0,
        //other variables
        RedEye = 1,
        Boom = false;


    //variable to indicate if an image has been displayed
    var imageShown = false; 

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Chicken.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#ffff00";
        context.moveTo(10, 30);
        context.lineTo(30, 10);
        context.lineTo(50, 10);
        context.lineTo(30, 0);
        context.lineTo(30, -10);
        context.lineTo(10, -30);
        context.lineTo(-10, -30);
        context.lineTo(-30, -10);
        context.lineTo(-30, 0);
        context.lineTo(-50, 10);
        context.lineTo(-30, 10);
        context.lineTo(-10, 30);
        context.lineTo(10, 30);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        // draw the chicken legs
        //left leg
        context.beginPath();
        context.fillStyle = "#ff0000";
        context.moveTo(-30, 10);
        context.quadraticCurveTo(-35, 40, -10, 30);
        context.fill();
        context.stroke();
        //right leg
        context.beginPath();
        context.fillStyle = "#ff0000";
        context.moveTo(10, 30);
        context.quadraticCurveTo(35, 40, 30, 10);
        context.fill();
        context.stroke();
        //draw chicken eyes
        //calls function draw Eyes
        DrawEyes(context)
        //draw chicken beak#
        context.beginPath();
        context.fillStyle = "#ff0000";
        context.moveTo(-7, -3);
        context.lineTo(3, 7);
        context.lineTo(13, -3);
        context.lineTo(-7, -3);
        context.closePath();
        context.fill();
        context.stroke();

        //check for boom
        //if the chicken has blown up
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "chicken.png";
            //draw the image on the context
            context.drawImage(img, -50, -52);
            //This is only true once the image has been displayed
            imageShown = true;


        }
        //restore the state of the context to what it was before our drawing
        context.restore();
        
    }

    //function used to controll how the eyes are drawn
    
    function DrawEyes(context) {
        //var for the offset of the Eye to be drawn
        var XOffset = -15,
            //var for loop counter to indicate which Eye we are drawing
            EyeNo = 1,
            //var to store the colour to use
            Colour = "";
        //loop through each Eye
        while (EyeNo != 3) {
            //if the red Eye is being drawn then set the colour to red
            //create a random number , so the eyes changing colour is more random 
            var raneyes = Math.floor(Math.random() * 100);     
            
            if (raneyes < 50) {
                //sets eye colour based on random number

                if (EyeNo == RedEye) {
                    //set colour to BLACK
                    Colour = "#000000";
                }
                else {
                    //set colour to yellow
                    Colour = "#ffff00";
                }
            }
            //draw the Eye
            Eye(context, XOffset, -12, Colour);
            //point at the next Eye
            EyeNo++;
            //work out the position of the next Eye
            XOffset = XOffset + 35;
        }
        //chage the red Eye to the next one
        RedEye = RedEye + .25;
        //if the red Eye is 6 thats too many
        if (RedEye == 6) {
            //set it back to 1
            RedEye = 1;
        }
    }

    //function that actually draws the eye
    function Eye(context, xposn, yposn, colour) {
        context.beginPath();
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
    }

    //function used to move the chicken
    Chicken.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;

    }

    //public method to set the vector of the Chicken
    Chicken.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }


    //public method to handle the acceleration of the Chicken
    Chicken.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

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

    //stops the chicken from moving 
    Chicken.prototype.halt = function () {


        //kill all velocity
        vx = 0;
        vy = 0;

    }

    //blows up the chicken, this is usefull for knowing when to draw an image on the context
    Chicken.prototype.BlowUp = function () {

        Boom = true;
        

    }


    //the html pages needs to know if/when boolean is true- so we add this property.
    Object.defineProperty(this, 'IMAGESHOWN',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return imageShown;
            }
        }
    )

}



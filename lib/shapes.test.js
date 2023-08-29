const {Circle, Square, Triangle} = require("./shapes");


describe("Render Method", () =>{

    describe("Circle", () =>{
        it("Should return the correct xml code for the generated circle", ()=>{
            const circle = new Circle("ABC", "red", "blue");

            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
        });
    });

    describe("Square", () =>{
        it("Should return the correct xml code for the generated square", ()=>{
            const square = new Square("LMN", "blue", "red");

            expect(square.render()).toEqual('<rect x="90" y="45" width="125" height="125" fill="red"/>');
        });
    });

    describe("Triangle", () =>{
        it("Should return the correct xml code for the generated triangle", ()=>{
            const triangle = new Triangle("XYZ", "white", "black");

            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black"/>');
        });
    });

});
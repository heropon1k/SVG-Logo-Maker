const {Circle, Triangle, Square} = require("./shapes")

//test Shape colors
describe("Shape Colors", () => {
    //test circle
    describe("initialize shape color on Circle", () => {
        it("should set shapecolor to blue", () => {
          let color = "blue";
          const shape = new Circle("", "", color);
          expect(shape.render())
            .toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue"/>
        <text x="150" y="120" font-size="70" text-anchor="middle" fill=""></text>  
        </svg>`);
        });
      });
      //test triangle
      describe("initialize shape color on Triangle", () => {
        it("should set shapecolor to blue", () => {
          let color = "blue";
          const shape = new Triangle("", "", color);
          expect(shape.render())
            .toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 0,200 300,200" fill="blue"/>
        <text x="150" y="160" font-size="70" text-anchor="middle" fill=""></text>
        </svg>`);
        });
      });
      //test square
      describe("initialize shape color on Square", () => {
        it("should set shapecolor to blue", () => {
          let color = "blue";
          const shape = new Square("", "", color);
          expect(shape.render())
            .toEqual(`
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill="blue"/>
        <text x="110" y="125" font-size="70" text-anchor="middle" fill=""></text>  
        </svg>`);
        });
      });
})

//test text color
describe("Text Colors", () => {
    //test circle
    describe("initialize text color on Circle", () => {
        it("should set textcolor to blue", () => {
          let color = "blue";
          const shape = new Circle("", color, "");
          expect(shape.render())
            .toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill=""/>
        <text x="150" y="120" font-size="70" text-anchor="middle" fill="blue"></text>  
        </svg>`);
        });
      });
      //test triangle
      describe("initialize shape color on Triangle", () => {
        it("should set textcolor to blue", () => {
          let color = "blue";
          const shape = new Triangle("", color, "");
          expect(shape.render())
            .toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 0,200 300,200" fill=""/>
        <text x="150" y="160" font-size="70" text-anchor="middle" fill="blue"></text>
        </svg>`);
        });
      });
      //test square
      describe("initialize shape color on Square", () => {
        it("should set textcolor to blue", () => {
          let color = "blue";
          const shape = new Square("", color, "");
          expect(shape.render())
            .toEqual(`
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill=""/>
        <text x="110" y="125" font-size="70" text-anchor="middle" fill="blue"></text>  
        </svg>`);
        });
      });
})
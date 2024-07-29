class Circle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    render() {
        let svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapecolor}"/>
        <text x="150" y="120" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>  
        </svg>`;
        return svg;
    }


}

class Triangle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    render() {
        let svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 0,200 300,200" fill="${this.shapecolor}"/>
        <text x="150" y="160" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
        return svg;
    }


}

class Square {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    render() {
        let svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill="${this.shapecolor}"/>
        <text x="110" y="125" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>  
        </svg>`;
        return svg;
    }


}

function generate(input) {
    let rendered = "";
    switch (input.shape) {
        case "Circle":
            let circle = new Circle(
                input.text,
                input.textcolor,
                input.shapecolor
            );
            rendered = circle.render();
            break;
        case "Triangle":
            let triangle = new Triangle(
                input.text,
                input.textcolor,
                input.shapecolor
            );
            rendered = triangle.render();
            break;
        case "Square":
            let square = new Square(
                input.text,
                input.textcolor,
                input.shapecolor
            );
            rendered = square.render();
            break;

    }

    return rendered;
}

module.exports = { generate, Circle, Triangle, Square }
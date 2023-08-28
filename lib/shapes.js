class Circle{
    constructor(text, textColor, shapeColor){
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }

    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

}

class Square{
    constructor(text, textColor, shapeColor){
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render(){
        return `<rect x="90" y="45" width="125" height="125" fill="${this.shapeColor}"/>`
    }

    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Triangle{
    constructor(text, textColor, shapeColor){
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }

    renderText(){
        return `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
module.exports = {Circle, Square, Triangle};
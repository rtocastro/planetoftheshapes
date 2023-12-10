const { Circle } = require('./shapes');
const { Triangle } = require('./shapes');
const { Square } = require('./shapes');

describe('Circle Tests', () => {
    test('will the new shape pass in the text', () => {
        const circle = new Circle('abc')
        expect(circle.text).toEqual('abc')
    });

    test('will render SVG', () => {
        const circle = new Circle('text', 'textColor', 'shapeColor');

        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="shapeColor" />
      
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)
    });



});

describe('Triangle Tests', () => {
    test('will the new shape pass in the text', () => {
        const triangle = new Triangle('def')
        expect(triangle.text).toEqual('def')
    });

    test('will render SVG', () => {
        const triangle = new Triangle('text', 'textColor', 'shapeColor');

        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="shapeColor" />
      
        <text x="150" y="173" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)

    });

});

describe('Square Tests', () => {
    test('will the new shape pass in the text', () => {
        const square = new Square('ghi')
        expect(square.text).toEqual('ghi')
    });

    test('will render SVG', () => {
        const square = new Square('text', 'textColor', 'shapeColor');

        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="73" y="40" width="160" height="160" fill="shapeColor" />
      
        <text x="153" y="135" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)
    });

});
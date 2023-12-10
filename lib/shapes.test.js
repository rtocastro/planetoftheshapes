const { Circle } = require('./shapes');

describe('Circle Tests', ()=> {
    test('will the new shape pass in the text', ()=>{
        const circle =  new Circle('abc')
        expect(circle.text).toEqual('abc')
    });

    test('will render SVG', ()=>{
        const circle =  new Circle('text', 'textColor', 'shapeColor');
        
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="shapeColor" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)
    });



});





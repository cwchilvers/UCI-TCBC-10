const createShape = require("../lib/shapes.js");

// Test creating shapes
describe("Shapes", () => {
    test("should create the correct shape with the correct color" , () => {
        // input to use for test
        const input = [
            {shape: '● Circle', color: 'blue'},
            {shape: '■ Square', color: 'orange'},
            {shape: '▲ Triangle', color: 'purple'}           
        ]

        // correct output to compare to
        const output = [
            "<circle cx='150' cy='100' r='80' fill='blue'/>",
            "<rect x='70' y='20' width='160' height='160' fill='black'/>",
            "<polygon points='150, 18 244, 182 56, 182' fill='orange'/>"                
        ]

        // compare input to output to see if correct
        for (const i of input) {
            expect(createShape(input.shape, input.color)).toEqual(output[i]);
        }
    })
});
const createShape = require("../lib/shapes.js");

// input to use for test
const input = [
    {shape: '● Circle', color: 'blue'},
    {shape: '■ Square', color: 'orange'},
    {shape: '▲ Triangle', color: 'purple'}           
]

// correct output to compare input to
const output = [
    "<circle cx='150' cy='100' r='80' fill='blue'/>",
    "<rect x='70' y='20' width='160' height='160' fill='orange'/>",
    "<polygon points='150, 18 244, 182 56, 182' fill='purple'/>"                
]

// Test creating shapes
describe("Shapes", () => {
    test("should create a blue circle" , () => {
        expect(createShape(input[0].shape, input[0].color)).toEqual(output[0]);
    })
    test("should create an orange square" , () => {
        expect(createShape(input[1].shape, input[1].color)).toEqual(output[1]);
    })
    test("should create a purple triangle" , () => {
        expect(createShape(input[2].shape, input[2].color)).toEqual(output[2]);
    })
});
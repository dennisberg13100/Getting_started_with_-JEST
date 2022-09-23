const functions = require('./functions')

// Simple test on a sum function 
test('Sum 1 + 2 hould be equal to 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
});

// Check the value of an Object
test('Object assignment', () => {
    const data = {'one': 1}
    functions.addAtribute(data, 'two', 2)
    expect(data).toEqual({one: 1, two: 2})
})

// Testing for not matching
test('Sum 1 + 2 should not be 4', () => {
    expect(functions.sum(1, 2)).not.toBe(4);
})

// Testing Truthiness with null
test('Null', () => {
    const n = functions.returnNull()
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

// Testing Truthiness with Zero
test('Zero', () => {
    const z = functions.returnZero()
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

// Testing Numbers
test('Testing numbers: 2 + 2', () => {
    const value = functions.sum(2,2)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

// Testing Floating point numbers 
test("Adding floating point numbers", () => {
    const value = functions.sum(0.1, 0.2)
    // Becaous of rounding error you can not compare foating numbers wit toBe()
    expect(value).not.toBe(0.3)
    expect(value).toBeCloseTo(0.3)
})

// Testing strings 
test('Is there no I in my name', () => {
    expect(functions.myName()).not.toMatch(/I/)
})
test('There is a "en" in my name', () => {
    expect(functions.myName()).toMatch((/en/))
})

// Testing Arrays
test("The shoping list should has milk on it", () => {
    expect(functions.shoppingList()).toContain('milk')
})

// Expect a function to throw an error 
test("It's important that this bug throw an error", () => {
    expect(() => functions.bug()).toThrow()
    expect(() => functions.bug()).toThrow(Error)
    expect(() => functions.bug()).toThrow(/bug/)
})
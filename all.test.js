const sum = require("./scripts/sum");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Tests for capitalize
const capitalize = require("./scripts/capitalize");
test("capitalizes a single word", () => {
  expect(capitalize("waffles")).toMatch("Waffles");
});

test("capitalizes only the first of multiple word strings", () => {
  expect(capitalize("will this break it?")).toMatch("Will this break it?");
});

// Tests for reverse String
const reverseString = require("./scripts/reverseString");
test("reverses one word string", () => {
  expect(reverseString("waffles")).toMatch("selffaw");
});

test("capitalizes only the first of multiple word strings", () => {
  expect(reverseString("will this break it?")).toMatch("?ti kaerb siht lliw");
});

// Tests for calculator
const calculate = require("./scripts/calculator");

test("adds two numbers", () => {
  expect(calculate.add(2, 2)).toBe(4);
});

test("subtracts two numbers", () => {
  expect(calculate.subtract(8, 2)).toBe(6);
});

test("divides two numbers", () => {
  expect(calculate.divide(10, 5)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(calculate.multiply(8, 5)).toBe(40);
});

// Tests for CaesarCipher
const caesar = require("./scripts/caesar");

test("works for multiple words", () => {
  expect(caesar("i hope this works", 1)).toMatch("j ipqf uijt xpslt");
});

test("works for capitals in words", () => {
  expect(caesar("i Hope thIs woRks", 1)).toMatch("j Ipqf uiJt xpSlt");
});

test("works with punctuation", () => {
  expect(caesar("i, hope. this works!", 1)).toMatch("j, ipqf. uijt xpslt!");
});

test("shifts around from z-a", () => {
  expect(caesar("a A h H z Z", 1)).toMatch("b B i I a A");
});

test("works with stupidly large shift", () => {
  expect(caesar("i hope this works", 209)).toMatch("j ipqf uijt xpslt");
});

test("works for negative shift", () => {
  expect(caesar("i Hope this works a", -1)).toMatch("h Gnod sghr vnqjr z");
});

test("works with stupidly large negative shift", () => {
  expect(caesar("i Hope this works a", -209)).toMatch("h Gnod sghr vnqjr z");
});

// test for analyze array
const analyze = require("./scripts/analyzeArray");

test("gives the average", () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).average).toBe(3.5);
});

test("gives the min", () => {
  expect(analyze([2, 3, 4, 1, 5, 6]).min).toBe(1);
});

test("gives the max", () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).max).toBe(6);
});

test("gives the length", () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).length).toBe(6);
});

test("gives full answer", () => {
  expect(analyze([12, 52, 23, 4, 5, 26, 5, 8])).toStrictEqual({
    average: 16.875,
    min: 4,
    max: 52,
    length: 8,
  });
});

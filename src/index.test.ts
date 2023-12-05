import { describe, it, expect } from 'vitest';

import {
	rectangleArea,
	triangleArea,
	trapezoidArea,
	circleArea,
	circleSectorArea
} from '$lib/index.js';

describe('rectangle area', () => {
	it('area with width 3 and height 4 equals 12', () => {
		expect(rectangleArea(3, 4)).toBe(12);
	});
	it('area with width 0 and height 0 equals 0', () => {
		expect(rectangleArea(0, 0)).toBe(0);
	});
});

describe('triangle area', () => {
	it('area with width 3 and height 4 equals 6', () => {
		expect(triangleArea(3, 4)).toBe(6);
	});
	it('area with width 0 and height 0 equals 0', () => {
		expect(triangleArea(0, 0)).toBe(0);
	});
});

describe('trapezoid area', () => {
	it('area with top width 2, bottom width 3 and height 4 equals 10', () => {
		expect(trapezoidArea(2, 3, 4)).toBe(10);
	});
	it('area with top width 0, bottom width 0 and height 0 to equal 0', () => {
		expect(trapezoidArea(0, 0, 0)).toBe(0);
	});
});

describe('circle area', () => {
	it('area with radius 1 equals Math.PI', () => {
		expect(circleArea(1)).toBe(Math.PI);
	});
	it('area with radius 0 equals 0', () => {
		expect(circleArea(0)).toBe(0);
	});
});

describe('circle sector area', () => {
	it('area with radius 1, 360 degrees equals Math.PI', () => {
		expect(circleSectorArea(1, 360)).toBe(Math.PI);
	});
	it('area with radius 2, 180 degrees equals 2*Math.PI', () => {
		expect(circleSectorArea(2, 180)).toBe(2 * Math.PI);
	});
	it('area with radius 0, 0 degrees equals 0', () => {
		expect(circleSectorArea(0, 0)).toBe(0);
	});
});

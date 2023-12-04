import { describe, it, expect } from 'vitest';

import { rectangleArea } from '$lib/index.js';

describe('rectangle area', () => {
	it('area with width 3 and height 4 equals 12', () => {
		expect(rectangleArea(3, 4)).toBe(12);
	});
	it('area with width 0 and height 0 equals 0', () => {
		expect(rectangleArea(0, 0)).toBe(0);
	});
});

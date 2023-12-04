export function triangleArea(width: number, height: number): number {
	return rectangleArea(width, height) / 2;
}

export function rectangleArea(width: number, height: number): number {
	return width * height;
}

export function trapezoidArea(topWidth: number, bottomWidth: number, height: number): number {
	return triangleArea(topWidth + bottomWidth, height);
}

export function triangleArea(width: number, height: number): number {
	return rectangleArea(width, height) / 2;
}

export function rectangleArea(width: number, height: number): number {
	return width * height;
}

export function trapezoidArea(topWidth: number, bottomWidth: number, height: number): number {
	return ((topWidth + bottomWidth) * height) / 2;
}

export function circleArea(radius: number): number {
	return radius * radius * Math.PI;
}

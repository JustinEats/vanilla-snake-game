import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('img');
	foodElement.setAttribute(
		'src',
		'https://toppng.com/uploads/preview/free-png-mickey-mouse-head-png-images-transparent-mickey-mouse-face-115630667651xrpqbjewz.png'
	);
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}
function getRandomFoodPosition() {
	let newFoodPosition;
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}

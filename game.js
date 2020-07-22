import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
	if (gameOver) {
		if (confirm('You died. Press OK to play again.')) {
			window.location = '/';
		}
		return;
	}
	window.requestAnimationFrame(main); //recall this function for the game loop
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //converts into seconds
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // moves by half a second

	lastRenderTime = currentTime;

	update(); //updates everything in the game
	draw(); //draws everything on the game based on update()
	checkDeath(); //game lost
}

window.requestAnimationFrame(main);

function update() {
	updateSnake(); // a function updates everything in the game
	updateFood(); //updates where the food goes
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

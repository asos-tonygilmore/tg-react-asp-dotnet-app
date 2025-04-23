import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
    const [snake, setSnake] = useState([[10, 10]]);
    const [food, setFood] = useState([15, 15]);
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const boardSize = 20;

    const gameLoop = useRef();

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        gameLoop.current = setInterval(moveSnake, 200);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            clearInterval(gameLoop.current);
        };
    }, [snake, direction]);

    const handleKeyPress = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') setDirection('UP');
                break;
            case 'ArrowDown':
                if (direction !== 'UP') setDirection('DOWN');
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') setDirection('LEFT');
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') setDirection('RIGHT');
                break;
            default:
                break;
        }
    };

    const moveSnake = () => {
        if (gameOver) return;

        const newSnake = [...snake];
        const head = [...newSnake[newSnake.length - 1]];

        switch (direction) {
            case 'UP':
                head[1] -= 1;
                break;
            case 'DOWN':
                head[1] += 1;
                break;
            case 'LEFT':
                head[0] -= 1;
                break;
            case 'RIGHT':
                head[0] += 1;
                break;
            default:
                break;
        }

        // Check for collisions
        if (
            head[0] < 0 ||
            head[1] < 0 ||
            head[0] >= boardSize ||
            head[1] >= boardSize ||
            newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])
        ) {
            setGameOver(true);
            clearInterval(gameLoop.current);
            return;
        }

        newSnake.push(head);

        // Check if food is eaten
        if (head[0] === food[0] && head[1] === food[1]) {
            setFood([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
        } else {
            newSnake.shift();
        }

        setSnake(newSnake);
    };

    const restartGame = () => {
        setSnake([[10, 10]]);
        setFood([15, 15]);
        setDirection('RIGHT');
        setGameOver(false);
        gameLoop.current = setInterval(moveSnake, 200);
    };

    return (
        <div className="snake-game">
            <h1>Snake Game</h1>
            {gameOver && <div className="game-over">Game Over! <button onClick={restartGame}>Restart</button></div>}
            <div className="board">
                {Array.from({ length: boardSize }).map((_, row) => (
                    <div key={row} className="row">
                        {Array.from({ length: boardSize }).map((_, col) => (
                            <div
                                key={col}
                                className={`cell ${
                                    snake.some(segment => segment[0] === col && segment[1] === row)
                                        ? 'snake'
                                        : food[0] === col && food[1] === row
                                        ? 'food'
                                        : ''
                                }`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SnakeGame;

import {useState} from 'react';
import type {Meta, Story} from '@storybook/react';
import {unstable_batchedUpdates as batchedUpdates} from 'react-dom';
import {Heading} from '../components/layout/Heading';
import {Button} from '../components/buttons/Button';

const meta: Meta = {
  title: 'Demos/Tic Tac Toe',
};

const EMPTY_BOARD = [null, null, null, null, null, null, null, null, null];

const streaks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (board: Array<'O' | 'X' | null>): 'O' | 'X' | null => {
  for (const [a, b, c] of streaks) {
    if (board[a] && board[b] === board[a] && board[c] === board[a]) {
      return board[a];
    }
  }
  return null;
};

export const TicTacToe: Story = () => {
  const [player, setPlayer] = useState<'O' | 'X'>('X');
  const [board, setBoard] = useState<Array<'O' | 'X' | null>>(EMPTY_BOARD);
  const winner = getWinner(board);
  const reset = () => {
    batchedUpdates(() => {
      setPlayer('X');
      setBoard(EMPTY_BOARD);
    });
  };
  return (
    <>
      <Heading>Tic Tac Toe</Heading>
      <Button onClick={reset}>Reset</Button>
      {winner ? `Winner: ${winner}` : null}
      <div className="grid grid-cols-3 gap-1 w-48">
        {board.map((square, index) => (
          <button
            type="button"
            // eslint-disable-next-line react/no-array-index-key -- index best here
            key={index}
            className="bg-white aspect-square"
            disabled={winner != null || board[index] != null}
            onClick={() => {
              batchedUpdates(() => {
                setBoard(b => [
                  ...b.slice(0, index),
                  player,
                  ...b.slice(index + 1),
                ]);
                setPlayer(p => (p === 'X' ? 'O' : 'X'));
              });
            }}
          >
            {board[index]}
          </button>
        ))}
      </div>
    </>
  );
};

export default meta;

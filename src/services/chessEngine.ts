import { Move } from '../types/move';
import { Position } from '../types/position';

type PlayerColor = 'white' | 'black';


class ChessEngine {
  public board: string[][];
  public turn: PlayerColor;
  public isGameOver: boolean;
  public winner: PlayerColor|null;

  constructor() {
    this.board = this.initializeBoard();
    this.turn = 'white';
    this.isGameOver = false;
    this.winner = null;
  }

  private initializeBoard(): string[][] {
    return [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];
  }


  setBoard(board: string[][]): void {
    this.board = board;
  }

  setTurn(turn: PlayerColor): void {
    this.turn = turn;
  }


  getBoard(): string[][] {
    return this.board;
  }

  getTurn(): PlayerColor {
    return this.turn;
  }

  isGameFinished(): boolean {
    return this.isGameOver;
  }

  getWinner(): PlayerColor|null {
    return this.winner;
  }

  makeMove(move: Move): boolean {
    const { from, to } = move;

    if (this.isGameOver) {
      console.log('Game is already over');
      return false;
    }

    if (!this.isValidMove(from, to)) {
      console.log('Invalid move');
      return false;
    }

    this.board[to.row][to.col] = this.board[from.row][from.col];
    this.board[from.row][from.col] = '';

    this.checkGameOver();

    this.turn = this.turn === 'white' ? 'black' : 'white';
    return true;
  }

  private isValidMove(from: Position, to: Position): boolean {
    const piece = this.board[from.row][from.col];
    if (!piece) return false;

    const isWhite = piece === piece.toUpperCase();
    if ((isWhite && this.turn !== 'white') || (!isWhite && this.turn !== 'black')) {
      return false;
    }

    const validMoves = this.getValidMoves(from);
    return validMoves.some((move) => move.row === to.row && move.col === to.col);
  }

  private getValidMoves(position: Position): Position[] {
    const piece = this.board[position.row][position.col];
    const isWhite = piece === piece.toUpperCase();
    const directions: Position[] = [];

    // did not finish
    switch (piece.toLowerCase()) {
      case 'p':
        if (isWhite) {
          if (position.row > 0 && this.board[position.row - 1][position.col] === '') {
            directions.push({ row: position.row - 1, col: position.col });
          }
          if (
            position.row === 6 &&
            this.board[position.row - 1][position.col] === '' &&
            this.board[position.row - 2][position.col] === ''
          ) {
            directions.push({ row: position.row - 2, col: position.col });
          }

        } else {
          if (position.row < 7 && this.board[position.row + 1][position.col] === '') {
            directions.push({ row: position.row + 1, col: position.col });
          }
          if (
            position.row === 1 &&
            this.board[position.row + 1][position.col] === '' &&
            this.board[position.row + 2][position.col] === ''
          ) {
            directions.push({ row: position.row + 2, col: position.col });
          }

        }
        break;
    }

    return directions;
  }

  private checkGameOver(): void {

  }
}

export default ChessEngine;

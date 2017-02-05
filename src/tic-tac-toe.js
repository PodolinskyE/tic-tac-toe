class TicTacToe {

	constructor() {
		this.players = ['x', 'o'];
		//this.cp = null;
		this.cp = this.players[0];
		this.board = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
	}

	getCurrentPlayerSymbol() {
		return this.cp;
	}

	nextTurn(rowIndex, columnIndex) {
		if (
			rowIndex >= 0 &&
			rowIndex <= 2 &&
			columnIndex >= 0 &&
			columnIndex <= 2 &&
			this.board[rowIndex][columnIndex] == null
		) {
			this.board[rowIndex][columnIndex] = this.cp;
			var ind = this.players.indexOf(this.cp) + 1;
			if (ind == this.players.length) ind = 0;
			this.cp = this.players[ind];
			
		}
	}

	isFinished() {
		return !!(this.getWinner() || this.noMoreTurns());
	}

	getWinner() {
		// this.board.some(function(row){return row.each(function(i) {return i == "x"})})
		var board = this.board;
		var checkV = function(sym) {
			return (
				((board[0][0] == sym) && (board[1][0] == sym) && (board[2][0] == sym)) ||
				((board[0][1] == sym) && (board[1][1] == sym) && (board[2][1] == sym)) ||
				((board[0][2] == sym) && (board[1][2] == sym) && (board[2][2] == sym))
				);
		};
		var checkH = function(sym) {
			return (
				((board[0][0] == sym) && (board[0][1] == sym) && (board[0][2] == sym)) ||
				((board[1][0] == sym) && (board[1][1] == sym) && (board[1][2] == sym)) ||
				((board[2][0] == sym) && (board[2][1] == sym) && (board[2][2] == sym))
				);
		};
		var checkD = function(sym) {
			return (
				((board[0][0] == sym) && (board[1][1] == sym) && (board[2][2] == sym)) ||
				((board[0][2] == sym) && (board[1][1] == sym) && (board[2][0] == sym))
				);
		};

		if (checkV('o') || checkH('o') || checkD('o')) return 'o';
		if (checkV('x') || checkH('x') || checkD('x')) return 'x';
		return null;
	}




	noMoreTurns() {
		return this.board.every(function(row) {
			return row.every(function(item){return item})
		});
	}

	isDraw() {
		return (this.noMoreTurns() && (this.getWinner() == null));

	}

	getFieldValue(rowIndex, colIndex) {
		return this.board[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;

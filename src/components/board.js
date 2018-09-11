import React from 'react'

let getChar = n => (n % 2) ? 'X' : 'O'

class Cell extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='column'>
                {this.props.tick}
            </div>
        )
    }
}

export class Board extends React.Component {
    constructor(props) {
        super(props)
        let board = Array(9).fill(null)
        let turn = 0
        this.state = {
            board: board,
            turn: turn,
            finished: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        this.setState(() => {
            let board = this.state.board
            let turn = this.state.turn
            board[id] = getChar(turn)
            return {
                board: board,
                turn: turn + 1,
                finished: this.checkBoard(board)
            }
        })
    }
    checkBoard(board) {
        return (
            (board[0] && board[0] == board[1] && board[0] == board[2]) ||
            (board[3] && board[3] == board[4] && board[3] == board[5]) ||
            (board[6] && board[6] == board[7] && board[6] == board[8]) ||
            (board[0] && board[0] == board[3] && board[0] == board[6]) ||
            (board[1] && board[1] == board[4] && board[1] == board[7]) ||
            (board[2] && board[2] == board[5] && board[2] == board[8]) ||
            (board[0] && board[0] == board[4] && board[0] == board[8]) ||
            (board[2] && board[2] == board[4] && board[2] == board[6])
        )
    }

    render() {
        let board = this.state.board
        return (
            <div className='container'>
                <div className='row'>
                    <button onClick={this.handleClick.bind(this, 0)} disabled={this.state.finished}>
                        <Cell tick={board[0]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 1)} disabled={this.state.finished}>
                        <Cell tick={board[1]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 2)} disabled={this.state.finished}>
                        <Cell tick={board[2]} />
                    </button>

                </div>
                <div className='row'>
                    <button onClick={this.handleClick.bind(this, 3)} disabled={this.state.finished}>
                        <Cell tick={board[3]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 4)} disabled={this.state.finished}>
                        <Cell tick={board[4]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 5)} disabled={this.state.finished}>
                        <Cell tick={board[5]} />
                    </button>

                </div>
                <div className='row'>
                    <button onClick={this.handleClick.bind(this, 6)} disabled={this.state.finished}>
                        <Cell tick={board[6]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 7)} disabled={this.state.finished}>
                        <Cell tick={board[7]} />
                    </button>
                    <button onClick={this.handleClick.bind(this, 8)} disabled={this.state.finished}>
                        <Cell tick={board[8]} />
                    </button>

                </div>
                {this.state.finished &&
                    <div className='result'>Player {getChar(this.state.turn - 1)} has won</div>
                }
            </div>
        )
    }
}
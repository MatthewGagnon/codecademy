const team = {
    _players: [
        {
            firstName: 'Matt',
            lastName: 'Gagnon',
            age: 24
        },
        {
            firstName: 'Ian',
            lastName: 'Kennedy',
            age: 25
        },
        {
            firstName: 'Shawn',
            lastName: 'Evon',
            age: 24
        }
    ],
    _games: [
        {
            opponent: 'Bowser',
            teamPoints: 50,
            opponentPoints: 35
        },
        {
            opponent: 'Koopa',
            teamPoints: 60,
            opponentPoints: 40
        },
        {
            opponent: 'Luigi',
            teamPoints: 25,
            opponentPoints: 45
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Titans', 100, 98);
console.log(team._games);



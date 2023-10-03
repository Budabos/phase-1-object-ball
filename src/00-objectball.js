function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  function numPointsScored(playerName) {
    const gameData = gameObject();
    for (const teamKey in gameData) {
      const players = gameData[teamKey].players;
      if (playerName in players) {
        return players[playerName].points;
      }
    }
    return null; // Return null if player not found
  }
  
  function shoeSize(playerName) {
    const gameData = gameObject();
    for (const teamKey in gameData) {
      const players = gameData[teamKey].players;
      if (playerName in players) {
        return players[playerName].shoe;
      }
    }
    return null; // Return null if player not found
  }
  
  function teamColors(teamName) {
    const gameData = gameObject();
    for (const teamKey in gameData) {
      if (gameData[teamKey].teamName === teamName) {
        return gameData[teamKey].colors;
      }
    }
    return null; // Return null if team not found
  }
  
  function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const gameData = gameObject();
    const team = teamName === gameData.home.teamName ? "home" : "away";
    const players = gameData[team].players;
    const numbers = [];
  
    for (const playerName in players) {
      numbers.push(players[playerName].number);
    }
  
    return numbers;
  }
  
  function playerStats(playerName) {
    const gameData = gameObject();
    for (const teamKey in gameData) {
      const players = gameData[teamKey].players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return null; // Return null if player not found
  }
  
  function bigShoeRebounds() {
    const gameData = gameObject();
    let maxShoeSize = -1;
    let playerWithMaxShoeSize = null;
  
    for (const teamKey in gameData) {
      const players = gameData[teamKey].players;
      for (const playerName in players) {
        const player = players[playerName];
        if (player.shoe > maxShoeSize) {
          maxShoeSize = player.shoe;
          playerWithMaxShoeSize = playerName;
        }
      }
    }
  
    if (playerWithMaxShoeSize) {
      const rebounds = gameData.home.players[playerWithMaxShoeSize].rebounds || gameData.away.players[playerWithMaxShoeSize].rebounds;
      return rebounds;
    }
  
    return null; // Return null if no player found
  }
  function main() {
    console.log(gameObject());
  
    console.log(numPointsScored("Alan Anderson"));
    console.log(shoeSize("Alan Anderson"));
    console.log(teamColors("Brooklyn Nets"));
    console.log(teamNames());
    console.log(playerNumbers("Brooklyn Nets"));
    console.log(playerStats("Alan Anderson"));
    console.log(bigShoeRebounds());
  }
  
  // Call the main function to test everything
  main();
    
export default class PlayersService {
  constructor($http) {
    this.http = $http;
    this.playersUri = `${process.env.API_URL}/players`;
    this.playerUri = `${process.env.API_URL}/player`;
  }

  getAllPlayers() {
    return this.http.get(this.playersUri)
      .then(response => {
        console.log(response);
        return response.data;
      }, response => {
        console.log(response);
      });
  }

  filterPlayers(filter) {
    return this.http({
      url: this.playersUri,
      method: "GET",
      params: filter
    }).then(response => {
      console.log(response);
      return response;
    }, response => {
      console.log(response);
      return response;
    });
  }

  addPlayer(player) {
    return this.http({
      url: this.playerUri,
      method: "POST",
      data: player
    }).then(response => {
      console.log(response);
      return response.data;
    }, response => {
      console.log(response);
    });    
  }
}

PlayersService.$inject = ["$http"];
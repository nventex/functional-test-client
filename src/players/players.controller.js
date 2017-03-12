export default class PlayersController {

  constructor(playersService, lookupsService, $mdDialog, $mdToast, $filter) {
    this.playersService = playersService;
    this.lookupsService = lookupsService;
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.filter = $filter;
    this.model = {};
    this.statusLookups = {};
    this.userLookups = {};
    this.playerFilter = {};

    this.getAllPlayers();
    this.getLookups();

    this.myDate = new Date();
  }

  getAllPlayers() {
    this.playersService.getAllPlayers().then(response => {
      this.model = response.Players;
    });
  }

  filterPlayers() {
    this.playerFilter.createdAtStart = this.filter("date")(this.playerFilter.createdAtStart, "yyyy-MM-dd");
    this.playerFilter.createdAtEnd = this.filter("date")(this.playerFilter.createdAtEnd, "yyyy-MM-dd");

    return this.playersService.filterPlayers(this.playerFilter).then(response => {
      if (response.status === 404) {
        this.showToast("No results found for filtered criteria.");
      }
      else {
        this.model = response.data.Players;
      }
      return response;
    });
  }

  getLookups() {
    this.lookupsService.getLookups().then(response => {
      this.positionLookups = response.Positions;
      this.teamLookups = response.Teams;
    });
  }

  showToast(message) {
    this.mdToast.show(
      this.mdToast.simple()
        .textContent(message)
        .position("top right")
        .hideDelay(3000));
  }

  addPlayer() {
    if (this.form.$valid) {
      this.playersService.addPlayer(this.newPlayer).then(response => {
        this.filterPlayers().then(response => {
          this.showToast("Player added.");
        });
      });
    }
    else {
      this.showToast("Enter all required fields.");
    }
  }
}

PlayersController.$inject = ["playersService", "lookupsService", "$mdDialog", "$mdToast", "$filter"];
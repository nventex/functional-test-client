import angular from "angular";

import "angular-material";
import "angular-animate";
import "angular-aria";
import "angular-material-data-table";

import PlayersController from "./players.controller.js";
import PlayersService from "./players.service.js";
import LookupsService from "../lookups/lookups.service.js";
import playersTemplate from "./players.template.html";
import playersStyles from "./players.less";
import uiDate from "angular-ui-date";

export default angular.module("players", ["ngMaterial", "md.data.table", uiDate.name])
                .service("playersService", PlayersService)
                .service("lookupsService", LookupsService)
                .component("playersComponent", {
                  controllerAs: "vm",
                  controller: PlayersController,
                  templateUrl: playersTemplate
                });
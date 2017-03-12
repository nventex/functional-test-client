import angular from "angular";

import PlayersComponent from "./players/players.component";
import AngularMaterialStyles from "angular-material/angular-material.css";
import AngularMaterialDataTable from "angular-material-data-table/dist/md-data-table.min.css";

export default angular.module("app", [PlayersComponent.name]);
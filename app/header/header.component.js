System.register(['@angular/core', '@angular/router-deprecated', './../playlyfe.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, playlyfe_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(_playlyfeService, _router) {
                    this._playlyfeService = _playlyfeService;
                    this._router = _router;
                    this.player_points = "0";
                    this.player_name = 'anonymous';
                    this.player_id = 'anonymous';
                    this.routeLeaderboard = false;
                    this.routeProfile = false;
                    this.routePevex = false;
                    this.routeTasks = false;
                    this.avatar = 'https://api.playlyfe.com/v2/runtime/assets/players/l572fa6bd89add22900e1a889?access_token=MGQ2MDg1MjUtZTZkZC00ZTRiLTljYTMtMmE2OWExMWI4YzAw';
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    this._playlyfeService.getPlayerProfile(this.a_token)
                        .subscribe(function (data) {
                        _this.player_profile_json = data;
                        _this.player_name = data.alias;
                        _this.player_id = data.id;
                        for (var row in data.scores) {
                            if (data.scores[row].metric.type == 'point' && data.scores[row].metric.name == 'mrx') {
                                _this.player_points = data.scores[row].value;
                            }
                        }
                    }, function (error) {
                        _this._router.navigate(['LoginPage']);
                    }, function () { return console.log(JSON.stringify(_this.player_profile_json)); });
                    var route = /app|pevex|tasks|profile/.exec(window.location.href);
                    if ("" + route == 'app') {
                        this.routeLeaderboard = true;
                    }
                    else if ("" + route == 'pevex') {
                        this.routePevex = true;
                    }
                    else if ("" + route == 'profile') {
                        this.routeProfile = true;
                    }
                    else if ("" + route == 'tasks') {
                        this.routeTasks = true;
                    }
                    console.log(this.a_token);
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        selector: 'header-component',
                        templateUrl: 'app/header/header.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService, router_deprecated_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBWUUseUJBQW9CLGdCQUFpQyxFQUFVLE9BQWU7b0JBQTFELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFWOUUsa0JBQWEsR0FBVyxHQUFHLENBQUM7b0JBRTVCLGdCQUFXLEdBQVcsV0FBVyxDQUFDO29CQUNsQyxjQUFTLEdBQVcsV0FBVyxDQUFDO29CQUNoQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQUM5QixlQUFVLEdBQVksS0FBSyxDQUFDO29CQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO29CQUM1QixXQUFNLEdBQUcsNElBQTRJLENBQUM7Z0JBRXJFLENBQUM7Z0JBRWxGLGtDQUFRLEdBQVI7b0JBQUEsaUJBaUNDO29CQS9CQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXBELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNqRCxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUVGLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBRWhDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDcEYsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDOUMsQ0FBQzt3QkFDSCxDQUFDO29CQUVILENBQUMsRUFDRCxVQUFBLEtBQUs7d0JBQ0gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLEVBQ0QsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUM1RCxDQUFDO29CQUVGLElBQUksS0FBSyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVqRSxFQUFFLENBQUEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO29CQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkF0REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsQ0FBRSxxQ0FBaUIsQ0FBRTt3QkFDakMsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDN0IsQ0FBQzs7bUNBQUE7Z0JBbURGLHNCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCw2Q0FpREMsQ0FBQSIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMgXSxcbiAgc2VsZWN0b3I6ICdoZWFkZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhX3Rva2VuOiBzdHJpbmc7XG4gIHBsYXllcl9wb2ludHM6IHN0cmluZyA9IFwiMFwiO1xuICBwbGF5ZXJfcHJvZmlsZV9qc29uO1xuICBwbGF5ZXJfbmFtZTogc3RyaW5nID0gJ2Fub255bW91cyc7XG4gIHBsYXllcl9pZDogc3RyaW5nID0gJ2Fub255bW91cyc7XG4gIHJvdXRlTGVhZGVyYm9hcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVQcm9maWxlOiBib29sZWFuID0gZmFsc2U7XG4gIHJvdXRlUGV2ZXg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVUYXNrczogYm9vbGVhbiA9IGZhbHNlO1xuICBhdmF0YXIgPSAnaHR0cHM6Ly9hcGkucGxheWx5ZmUuY29tL3YyL3J1bnRpbWUvYXNzZXRzL3BsYXllcnMvbDU3MmZhNmJkODlhZGQyMjkwMGUxYTg4OT9hY2Nlc3NfdG9rZW49TUdRMk1EZzFNalV0WlRaa1pDMDBaVFJpTFRsallUTXRNbUUyT1dFeE1XSTRZekF3JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF5bHlmZVNlcnZpY2U6IFBsYXlseWZlU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuXG4gICAgdGhpcy5hX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuXG4gICAgdGhpcy5fcGxheWx5ZmVTZXJ2aWNlLmdldFBsYXllclByb2ZpbGUodGhpcy5hX3Rva2VuKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnBsYXllcl9wcm9maWxlX2pzb24gPSBkYXRhO1xuXG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGRhdGEuYWxpYXM7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBkYXRhLmlkO1xuICAgICAgICAgIGZvciAobGV0IHJvdyBpbiBkYXRhLnNjb3Jlcykge1xuICAgICAgICAgICAgaWYoZGF0YS5zY29yZXNbcm93XS5tZXRyaWMudHlwZSA9PSAncG9pbnQnICYmIGRhdGEuc2NvcmVzW3Jvd10ubWV0cmljLm5hbWUgPT0gJ21yeCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfcG9pbnRzID0gZGF0YS5zY29yZXNbcm93XS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luUGFnZSddKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXJfcHJvZmlsZV9qc29uKSlcbiAgICAgICk7XG5cbiAgICAgIHZhciByb3V0ZSA9IC9hcHB8cGV2ZXh8dGFza3N8cHJvZmlsZS8uZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIGlmKFwiXCIgKyByb3V0ZSA9PSAnYXBwJykgeyB0aGlzLnJvdXRlTGVhZGVyYm9hcmQgPSB0cnVlOyB9XG4gICAgICBlbHNlIGlmIChcIlwiICsgcm91dGUgPT0gJ3BldmV4JykgeyB0aGlzLnJvdXRlUGV2ZXggPSB0cnVlOyB9XG4gICAgICBlbHNlIGlmIChcIlwiICsgcm91dGUgPT0gJ3Byb2ZpbGUnKSB7IHRoaXMucm91dGVQcm9maWxlID0gdHJ1ZTsgfVxuICAgICAgZWxzZSBpZiAoXCJcIiArIHJvdXRlID09ICd0YXNrcycpIHsgdGhpcy5yb3V0ZVRhc2tzID0gdHJ1ZTsgfVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFfdG9rZW4pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

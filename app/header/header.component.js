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
                function HeaderComponent(_playlyfeService) {
                    this._playlyfeService = _playlyfeService;
                    this.player_points = "0";
                    this.player_name = 'anonymous';
                    this.routeLeaderboard = false;
                    this.routeProfile = false;
                    this.routePevex = false;
                    this.routeTasks = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    ;
                    this._playlyfeService.getPlayerProfile(this.a_token)
                        .subscribe(function (data) {
                        _this.player_profile_json = data;
                        _this.player_name = data.alias;
                        for (var row in data.scores) {
                            if (data.scores[row].metric.type == 'point' && data.scores[row].metric.name == 'mrx') {
                                _this.player_points = data.scores[row].value;
                            }
                        }
                    }, function (error) { return console.error(error); }, function () { return console.log(JSON.stringify(_this.player_profile_json)); });
                    ;
                    var route = /app|pevex|tasks|profile/.exec(window.location.href);
                    if (route == 'app') {
                        this.routeLeaderboard = true;
                    }
                    else if (route == 'pevex') {
                        this.routePevex = true;
                    }
                    else if (route == 'profile') {
                        this.routeProfile = true;
                    }
                    else if (route == 'tasks') {
                        this.routeTasks = true;
                    }
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        selector: 'header-component',
                        templateUrl: 'app/header/header.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBVUUseUJBQW9CLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFSckQsa0JBQWEsR0FBVyxHQUFHLENBQUM7b0JBRTVCLGdCQUFXLEdBQVcsV0FBVyxDQUFDO29CQUNsQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQUM5QixlQUFVLEdBQVksS0FBSyxDQUFDO29CQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO2dCQUU0QixDQUFDO2dCQUV6RCxrQ0FBUSxHQUFSO29CQUFBLGlCQTZCQztvQkE1QkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBRXJELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNqRCxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUVGLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBRWhDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ3BGLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQzlDLENBQUM7d0JBQ0gsQ0FBQztvQkFHSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixFQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUEsQ0FBQztvQkFDN0QsQ0FBQztvQkFFRixJQUFJLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFakUsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO2dCQUUxRCxDQUFDO2dCQWhESDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFVBQVUsRUFBRSxDQUFFLHFDQUFpQixDQUFFO3dCQUNqQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUM3QixDQUFDOzttQ0FBQTtnQkE2Q0Ysc0JBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELDZDQTJDQyxDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMgXSxcbiAgc2VsZWN0b3I6ICdoZWFkZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhX3Rva2VuOiBzdHJpbmc7XG4gIHBsYXllcl9wb2ludHM6IHN0cmluZyA9IFwiMFwiO1xuICBwbGF5ZXJfcHJvZmlsZV9qc29uO1xuICBwbGF5ZXJfbmFtZTogc3RyaW5nID0gJ2Fub255bW91cyc7XG4gIHJvdXRlTGVhZGVyYm9hcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVQcm9maWxlOiBib29sZWFuID0gZmFsc2U7XG4gIHJvdXRlUGV2ZXg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVUYXNrczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXlseWZlU2VydmljZTogUGxheWx5ZmVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLmFfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpO1xuXG4gICAgdGhpcy5fcGxheWx5ZmVTZXJ2aWNlLmdldFBsYXllclByb2ZpbGUodGhpcy5hX3Rva2VuKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnBsYXllcl9wcm9maWxlX2pzb24gPSBkYXRhO1xuXG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGRhdGEuYWxpYXM7XG4gICAgICAgICAgZm9yIChsZXQgcm93IGluIGRhdGEuc2NvcmVzKSB7XG4gICAgICAgICAgICBpZihkYXRhLnNjb3Jlc1tyb3ddLm1ldHJpYy50eXBlID09ICdwb2ludCcgJiYgZGF0YS5zY29yZXNbcm93XS5tZXRyaWMubmFtZSA9PSAnbXJ4Jykge1xuICAgICAgICAgICAgICB0aGlzLnBsYXllcl9wb2ludHMgPSBkYXRhLnNjb3Jlc1tyb3ddLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllcl9wcm9maWxlX2pzb24pKTtcbiAgICAgICk7XG5cbiAgICAgIHZhciByb3V0ZSA9IC9hcHB8cGV2ZXh8dGFza3N8cHJvZmlsZS8uZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIGlmKHJvdXRlID09ICdhcHAnKSB7IHRoaXMucm91dGVMZWFkZXJib2FyZCA9IHRydWU7IH1cbiAgICAgIGVsc2UgaWYgKHJvdXRlID09ICdwZXZleCcpIHsgdGhpcy5yb3V0ZVBldmV4ID0gdHJ1ZTsgfVxuICAgICAgZWxzZSBpZiAocm91dGUgPT0gJ3Byb2ZpbGUnKSB7IHRoaXMucm91dGVQcm9maWxlID0gdHJ1ZTsgfVxuICAgICAgZWxzZSBpZiAocm91dGUgPT0gJ3Rhc2tzJykgeyB0aGlzLnJvdXRlVGFza3MgPSB0cnVlOyB9XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

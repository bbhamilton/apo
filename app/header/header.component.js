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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBVUUseUJBQW9CLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFSckQsa0JBQWEsR0FBVyxHQUFHLENBQUM7b0JBRTVCLGdCQUFXLEdBQVcsV0FBVyxDQUFDO29CQUNsQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQUM5QixlQUFVLEdBQVksS0FBSyxDQUFDO29CQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO2dCQUU0QixDQUFDO2dCQUV6RCxrQ0FBUSxHQUFSO29CQUFBLGlCQTZCQztvQkE1QkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUVwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDakQsU0FBUyxDQUNSLFVBQUEsSUFBSTt3QkFFRixLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO3dCQUVoQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUM1QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNwRixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUM5QyxDQUFDO3dCQUNILENBQUM7b0JBR0gsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUM1RCxDQUFDO29CQUVGLElBQUksS0FBSyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVqRSxFQUFFLENBQUEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFBQyxDQUFDO2dCQUUvRCxDQUFDO2dCQWhESDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFVBQVUsRUFBRSxDQUFFLHFDQUFpQixDQUFFO3dCQUNqQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUM3QixDQUFDOzttQ0FBQTtnQkE2Q0Ysc0JBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELDZDQTJDQyxDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMgXSxcbiAgc2VsZWN0b3I6ICdoZWFkZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhX3Rva2VuOiBzdHJpbmc7XG4gIHBsYXllcl9wb2ludHM6IHN0cmluZyA9IFwiMFwiO1xuICBwbGF5ZXJfcHJvZmlsZV9qc29uO1xuICBwbGF5ZXJfbmFtZTogc3RyaW5nID0gJ2Fub255bW91cyc7XG4gIHJvdXRlTGVhZGVyYm9hcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVQcm9maWxlOiBib29sZWFuID0gZmFsc2U7XG4gIHJvdXRlUGV2ZXg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm91dGVUYXNrczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXlseWZlU2VydmljZTogUGxheWx5ZmVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLmFfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG5cbiAgICB0aGlzLl9wbGF5bHlmZVNlcnZpY2UuZ2V0UGxheWVyUHJvZmlsZSh0aGlzLmFfdG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgIHRoaXMucGxheWVyX3Byb2ZpbGVfanNvbiA9IGRhdGE7XG5cbiAgICAgICAgICB0aGlzLnBsYXllcl9uYW1lID0gZGF0YS5hbGlhcztcbiAgICAgICAgICBmb3IgKGxldCByb3cgaW4gZGF0YS5zY29yZXMpIHtcbiAgICAgICAgICAgIGlmKGRhdGEuc2NvcmVzW3Jvd10ubWV0cmljLnR5cGUgPT0gJ3BvaW50JyAmJiBkYXRhLnNjb3Jlc1tyb3ddLm1ldHJpYy5uYW1lID09ICdtcngnKSB7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyX3BvaW50cyA9IGRhdGEuc2NvcmVzW3Jvd10udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyX3Byb2ZpbGVfanNvbikpXG4gICAgICApO1xuXG4gICAgICB2YXIgcm91dGUgPSAvYXBwfHBldmV4fHRhc2tzfHByb2ZpbGUvLmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICBpZihcIlwiICsgcm91dGUgPT0gJ2FwcCcpIHsgdGhpcy5yb3V0ZUxlYWRlcmJvYXJkID0gdHJ1ZTsgfVxuICAgICAgZWxzZSBpZiAoXCJcIiArIHJvdXRlID09ICdwZXZleCcpIHsgdGhpcy5yb3V0ZVBldmV4ID0gdHJ1ZTsgfVxuICAgICAgZWxzZSBpZiAoXCJcIiArIHJvdXRlID09ICdwcm9maWxlJykgeyB0aGlzLnJvdXRlUHJvZmlsZSA9IHRydWU7IH1cbiAgICAgIGVsc2UgaWYgKFwiXCIgKyByb3V0ZSA9PSAndGFza3MnKSB7IHRoaXMucm91dGVUYXNrcyA9IHRydWU7IH1cblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

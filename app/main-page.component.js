System.register(['@angular/core', '@angular/router-deprecated', './leaderboard/leaderboard.component', './level/level.component', './header/header.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, leaderboard_component_1, level_component_1, header_component_1;
    var MainPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (leaderboard_component_1_1) {
                leaderboard_component_1 = leaderboard_component_1_1;
            },
            function (level_component_1_1) {
                level_component_1 = level_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            MainPageComponent = (function () {
                function MainPageComponent(_routeParams) {
                    this._routeParams = _routeParams;
                    this.a_token = null;
                }
                MainPageComponent.prototype.ngOnInit = function () {
                    this.a_token = this._routeParams.get('access_token');
                };
                MainPageComponent = __decorate([
                    core_1.Component({
                        directives: [header_component_1.HeaderComponent, level_component_1.LevelComponent, leaderboard_component_1.LeaderboardComponent],
                        template: "\n      <header-component></header-component>\n      <level></level>\n      <leaderboard></leaderboard>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], MainPageComponent);
                return MainPageComponent;
            }());
            exports_1("MainPageComponent", MainPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBR0UsMkJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFGN0MsWUFBTyxHQUFXLElBQUksQ0FBQztnQkFFeUIsQ0FBQztnQkFFakQsb0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQWhCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsZ0NBQWMsRUFBRSw0Q0FBb0IsQ0FBQzt3QkFDbkUsUUFBUSxFQUFFLCtHQUlUO3FCQUNKLENBQUM7O3FDQUFBO2dCQVdGLHdCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxpREFTQyxDQUFBIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBMZWFkZXJib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExldmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sZXZlbC9sZXZlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIExldmVsQ29tcG9uZW50LCBMZWFkZXJib2FyZENvbXBvbmVudF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxoZWFkZXItY29tcG9uZW50PjwvaGVhZGVyLWNvbXBvbmVudD5cbiAgICAgIDxsZXZlbD48L2xldmVsPlxuICAgICAgPGxlYWRlcmJvYXJkPjwvbGVhZGVyYm9hcmQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYV90b2tlbjogc3RyaW5nID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMuYV90b2tlbiA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

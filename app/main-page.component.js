System.register(['@angular/core', '@angular/router-deprecated', './level/level.component', './leaderboard/leaderboard.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, level_component_1, leaderboard_component_1;
    var MainPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (level_component_1_1) {
                level_component_1 = level_component_1_1;
            },
            function (leaderboard_component_1_1) {
                leaderboard_component_1 = leaderboard_component_1_1;
            }],
        execute: function() {
            MainPageComponent = (function () {
                function MainPageComponent() {
                }
                MainPageComponent = __decorate([
                    core_1.Component({
                        directives: [level_component_1.LevelComponent, leaderboard_component_1.LeaderboardComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "\n      <level></level>\n      <leaderboard></leaderboard>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPageComponent);
                return MainPageComponent;
            }());
            exports_1("MainPageComponent", MainPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsZ0NBQWMsRUFBRSw0Q0FBb0IsRUFBRSxxQ0FBaUIsQ0FBQzt3QkFDckUsUUFBUSxFQUFFLGtFQUdUO3FCQUNKLENBQUM7O3FDQUFBO2dCQUlGLHdCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxpREFFQyxDQUFBIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgTGV2ZWxDb21wb25lbnQgfSBmcm9tICcuL2xldmVsL2xldmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFkZXJib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbTGV2ZWxDb21wb25lbnQsIExlYWRlcmJvYXJkQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxsZXZlbD48L2xldmVsPlxuICAgICAgPGxlYWRlcmJvYXJkPjwvbGVhZGVyYm9hcmQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5QYWdlQ29tcG9uZW50ICB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['@angular/core', './../playlyfe.service'], function(exports_1, context_1) {
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
    var core_1, playlyfe_service_1;
    var LeaderboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            LeaderboardComponent = (function () {
                function LeaderboardComponent(_playlyfeService) {
                    this._playlyfeService = _playlyfeService;
                }
                LeaderboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    this._playlyfeService.getPlayers(this.a_token)
                        .subscribe(function (data) { return _this.JSONdata = data; }, function (error) { return console.error(error); }, function () { return console.dir(_this.JSONdata); });
                };
                LeaderboardComponent = __decorate([
                    core_1.Component({
                        selector: 'leaderboard',
                        templateUrl: 'app/leaderboard/leaderboard.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], LeaderboardComponent);
                return LeaderboardComponent;
            }());
            exports_1("LeaderboardComponent", LeaderboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUlFLDhCQUFvQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Z0JBR3JELENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFUQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXBELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDN0MsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9CLEVBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixDQUNqQyxDQUFDO2dCQUVKLENBQUM7Z0JBMUJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSw0Q0FBNEM7d0JBQ3pELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBQzdCLENBQUM7O3dDQUFBO2dCQXdCRiwyQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsdURBc0JDLENBQUEiLCJmaWxlIjoibGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5bHlmZVNlcnZpY2UgfSBmcm9tICcuLy4uL3BsYXlseWZlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWFkZXJib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUGxheWx5ZmVTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIExlYWRlcmJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYV90b2tlbjogc3RyaW5nO1xuICBKU09OZGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF5bHlmZVNlcnZpY2U6IFBsYXlseWZlU2VydmljZSkge1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6YW55IHtcblxuICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcblxuICAgIHRoaXMuX3BsYXlseWZlU2VydmljZS5nZXRQbGF5ZXJzKHRoaXMuYV90b2tlbilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB0aGlzLkpTT05kYXRhID0gZGF0YSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgKCkgPT4gY29uc29sZS5kaXIodGhpcy5KU09OZGF0YSlcbiAgICApO1xuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

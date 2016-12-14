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
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(_playlyfeService) {
                    this._playlyfeService = _playlyfeService;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    this._playlyfeService.getPlayerProfile(this.a_token)
                        .subscribe(function (data) {
                        _this.player_profile_json = data;
                        _this.player_name = data.alias;
                        _this.player_id = data.id;
                        _this.player_scores = data.scores;
                        for (var row in data.scores) {
                            if (data.scores[row].metric.id == 'badges') {
                                _this.player_scores = data.scores[row].value;
                                console.dir(_this.player_scores);
                                break;
                            }
                        }
                    }, function (error) {
                        _this._router.navigate(['LoginPage']);
                    }, function () { return console.dir(_this.player_profile_json); });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'app/profile/profile.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFPRSwwQkFBb0IsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFJLENBQUM7Z0JBRTFELG1DQUFRLEdBQVI7b0JBQUEsaUJBMEJDO29CQXpCQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXBELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNqRCxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUNGLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUN6QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBRWpDLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQ0FDMUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQ0FDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ2hDLEtBQUssQ0FBQzs0QkFDUixDQUFDO3dCQUNILENBQUM7b0JBRUgsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsRUFDRCxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBckMsQ0FBcUMsQ0FDNUMsQ0FBQztnQkFFTixDQUFDO2dCQXpDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztvQ0FBQTtnQkF1Q0YsdUJBQUM7WUFBRCxDQXJDQSxBQXFDQyxJQUFBO1lBckNELCtDQXFDQyxDQUFBIiwiZmlsZSI6InByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9maWxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYV90b2tlbjtcbiAgcGxheWVyX3Byb2ZpbGVfanNvbjtcbiAgcGxheWVyX25hbWU7XG4gIHBsYXllcl9pZDtcbiAgcGxheWVyX3Njb3JlcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF5bHlmZVNlcnZpY2U6IFBsYXlseWZlU2VydmljZSApIHt9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcblxuICAgIHRoaXMuX3BsYXlseWZlU2VydmljZS5nZXRQbGF5ZXJQcm9maWxlKHRoaXMuYV90b2tlbilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMucGxheWVyX3Byb2ZpbGVfanNvbiA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGRhdGEuYWxpYXM7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBkYXRhLmlkO1xuICAgICAgICAgIHRoaXMucGxheWVyX3Njb3JlcyA9IGRhdGEuc2NvcmVzO1xuXG4gICAgICAgICAgZm9yKGxldCByb3cgaW4gZGF0YS5zY29yZXMpIHtcbiAgICAgICAgICAgIGlmKGRhdGEuc2NvcmVzW3Jvd10ubWV0cmljLmlkID09ICdiYWRnZXMnKSB7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyX3Njb3JlcyA9IGRhdGEuc2NvcmVzW3Jvd10udmFsdWU7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMucGxheWVyX3Njb3Jlcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTG9naW5QYWdlJ10pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBjb25zb2xlLmRpcih0aGlzLnBsYXllcl9wcm9maWxlX2pzb24pXG4gICAgICApO1xuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

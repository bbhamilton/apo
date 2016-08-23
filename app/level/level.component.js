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
    var LevelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            LevelComponent = (function () {
                function LevelComponent(_playlyfeService) {
                    this._playlyfeService = _playlyfeService;
                    this.total = 0;
                    this.current_level = 2000;
                    this.next_level = 4000;
                    this.players = 0;
                }
                LevelComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    ;
                    this._playlyfeService.getPlayers(this.a_token)
                        .subscribe(function (data) {
                        for (var row in data.data) {
                            _this.total += parseFloat(data.data[row].score);
                            _this.players++;
                        }
                    }, function (error) { return console.error(error); });
                };
                LevelComponent = __decorate([
                    core_1.Component({
                        selector: 'level',
                        templateUrl: 'app/level/level.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], LevelComponent);
                return LevelComponent;
            }());
            exports_1("LevelComponent", LevelComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsL2xldmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQU1FLHdCQUFvQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBSnJELFVBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1Ysa0JBQWEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ2xCLFlBQU8sR0FBRyxDQUFDLENBQUM7Z0JBQzRDLENBQUM7Z0JBRXpELGlDQUFRLEdBQVI7b0JBQUEsaUJBY0M7b0JBYkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDM0MsU0FBUyxDQUNSLFVBQUEsSUFBSTt3QkFFRixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsS0FBSSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDL0MsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNqQixDQUFDO29CQUVILENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQzlCLENBQUM7Z0JBQ04sQ0FBQztnQkE1Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDN0IsQ0FBQzs7a0NBQUE7Z0JBMkJGLHFCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwyQ0F5QkMsQ0FBQSIsImZpbGUiOiJsZXZlbC9sZXZlbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGV2ZWwnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9sZXZlbC9sZXZlbC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMZXZlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFfdG9rZW46IHN0cmluZztcbiAgdG90YWwgPSAwO1xuICBjdXJyZW50X2xldmVsID0gMjAwMDtcbiAgbmV4dF9sZXZlbCA9IDQwMDA7XG4gIHBsYXllcnMgPSAwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF5bHlmZVNlcnZpY2U6IFBsYXlseWZlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOmFueSB7XG4gICAgdGhpcy5hX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKTtcbiAgICB0aGlzLl9wbGF5bHlmZVNlcnZpY2UuZ2V0UGxheWVycyh0aGlzLmFfdG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgIGZvciAobGV0IHJvdyBpbiBkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWwgKz0gcGFyc2VGbG9hdChkYXRhLmRhdGFbcm93XS5zY29yZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsL2xldmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQU1FLHdCQUFvQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBSnJELFVBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1Ysa0JBQWEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ2xCLFlBQU8sR0FBRyxDQUFDLENBQUM7Z0JBQzRDLENBQUM7Z0JBRXpELGlDQUFRLEdBQVI7b0JBQUEsaUJBY0M7b0JBYkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQzNDLFNBQVMsQ0FDUixVQUFBLElBQUk7d0JBRUYsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQzFCLEtBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQy9DLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDakIsQ0FBQztvQkFFSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUM5QixDQUFDO2dCQUNOLENBQUM7Z0JBNUJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBQzdCLENBQUM7O2tDQUFBO2dCQTJCRixxQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQsMkNBeUJDLENBQUEiLCJmaWxlIjoibGV2ZWwvbGV2ZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXlseWZlU2VydmljZSB9IGZyb20gJy4vLi4vcGxheWx5ZmUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xldmVsJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvbGV2ZWwvbGV2ZWwuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQbGF5bHlmZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTGV2ZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhX3Rva2VuOiBzdHJpbmc7XG4gIHRvdGFsID0gMDtcbiAgY3VycmVudF9sZXZlbCA9IDIwMDA7XG4gIG5leHRfbGV2ZWwgPSA0MDAwO1xuICBwbGF5ZXJzID0gMDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGxheWx5ZmVTZXJ2aWNlOiBQbGF5bHlmZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICB0aGlzLl9wbGF5bHlmZVNlcnZpY2UuZ2V0UGxheWVycyh0aGlzLmFfdG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgIGZvciAobGV0IHJvdyBpbiBkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWwgKz0gcGFyc2VGbG9hdChkYXRhLmRhdGFbcm93XS5zY29yZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

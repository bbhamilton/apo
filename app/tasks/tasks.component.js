System.register(['@angular/core', './../playlyfe.service', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, playlyfe_service_1, router_deprecated_1;
    var TasksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            TasksComponent = (function () {
                function TasksComponent(_playlyfeService, _router) {
                    this._playlyfeService = _playlyfeService;
                    this._router = _router;
                }
                TasksComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.a_token = localStorage.getItem('access_token');
                    ;
                    this._playlyfeService.getAllActions(this.a_token)
                        .subscribe(function (data) {
                        _this.actions_json = data;
                    }, function (error) { return console.error(error); }, function () { return console.log(_this.actions_json); });
                };
                TasksComponent.prototype.playAction = function (event, action_id) {
                    var _this = this;
                    event.preventDefault();
                    this._playlyfeService.postPlayAction(this.a_token, action_id)
                        .subscribe(function (data) {
                        console.log(JSON.stringify(data));
                        _this._router.navigate(['TasksPage', {}]);
                    }, function (error) { return console.error(error); });
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'tasks',
                        templateUrl: 'app/tasks/tasks.component.html',
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService, router_deprecated_1.Router])
                ], TasksComponent);
                return TasksComponent;
            }());
            exports_1("TasksComponent", TasksComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL3Rhc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlFLHdCQUFvQixnQkFBaUMsRUFBVSxPQUFlO29CQUExRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBRTlFLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFZQztvQkFYQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQUMsQ0FBQztvQkFFckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUM5QyxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUNGLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO29CQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixFQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQTlCLENBQThCLENBQ3JDLENBQUM7Z0JBRU4sQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsS0FBSyxFQUFFLFNBQVM7b0JBQTNCLGlCQWFDO29CQVpDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFFdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzt5QkFDMUQsU0FBUyxDQUNSLFVBQUEsSUFBSTt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTt3QkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDOUIsQ0FBQztnQkFHTixDQUFDO2dCQXpDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztrQ0FBQTtnQkF1Q0YscUJBQUM7WUFBRCxDQXJDQSxBQXFDQyxJQUFBO1lBckNELDJDQXFDQyxDQUFBIiwiZmlsZSI6InRhc2tzL3Rhc2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5bHlmZVNlcnZpY2UgfSBmcm9tICcuLy4uL3BsYXlseWZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Rhc2tzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbUGxheWx5ZmVTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYV90b2tlbjtcbiAgYWN0aW9uc19qc29uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXlseWZlU2VydmljZTogUGxheWx5ZmVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOmFueSB7XG4gICAgdGhpcy5hX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKTtcblxuICAgIHRoaXMuX3BsYXlseWZlU2VydmljZS5nZXRBbGxBY3Rpb25zKHRoaXMuYV90b2tlbilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aW9uc19qc29uID0gZGF0YVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5hY3Rpb25zX2pzb24pXG4gICAgICApO1xuXG4gIH1cblxuICBwbGF5QWN0aW9uKGV2ZW50LCBhY3Rpb25faWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5fcGxheWx5ZmVTZXJ2aWNlLnBvc3RQbGF5QWN0aW9uKHRoaXMuYV90b2tlbiwgYWN0aW9uX2lkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVGFza3NQYWdlJywge31dKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG5cblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

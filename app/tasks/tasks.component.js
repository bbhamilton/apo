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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL3Rhc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlFLHdCQUFvQixnQkFBaUMsRUFBVSxPQUFlO29CQUExRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBRTlFLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFZQztvQkFYQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXBELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDOUMsU0FBUyxDQUNSLFVBQUEsSUFBSTt3QkFDRixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtvQkFDMUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUE5QixDQUE4QixDQUNyQyxDQUFDO2dCQUVOLENBQUM7Z0JBRUQsbUNBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxTQUFTO29CQUEzQixpQkFhQztvQkFaQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7eUJBQzFELFNBQVMsQ0FDUixVQUFBLElBQUk7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7d0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQzlCLENBQUM7Z0JBR04sQ0FBQztnQkF6Q0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7a0NBQUE7Z0JBdUNGLHFCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCwyQ0FxQ0MsQ0FBQSIsImZpbGUiOiJ0YXNrcy90YXNrcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wbGF5bHlmZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YXNrcycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdGFza3MvdGFza3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1BsYXlseWZlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFfdG9rZW47XG4gIGFjdGlvbnNfanNvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF5bHlmZVNlcnZpY2U6IFBsYXlseWZlU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcblxuICAgIHRoaXMuX3BsYXlseWZlU2VydmljZS5nZXRBbGxBY3Rpb25zKHRoaXMuYV90b2tlbilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aW9uc19qc29uID0gZGF0YVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5hY3Rpb25zX2pzb24pXG4gICAgICApO1xuXG4gIH1cblxuICBwbGF5QWN0aW9uKGV2ZW50LCBhY3Rpb25faWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5fcGxheWx5ZmVTZXJ2aWNlLnBvc3RQbGF5QWN0aW9uKHRoaXMuYV90b2tlbiwgYWN0aW9uX2lkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVGFza3NQYWdlJywge31dKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG5cblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

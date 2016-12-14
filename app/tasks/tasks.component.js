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
                TasksComponent.prototype.getMetric = function (metrics, metric) {
                    console.log(metric);
                    console.dir(metrics);
                    if (typeof metrics[0] !== 'undefined' && metrics[0].metric.name == metric) {
                        return metrics[0].value;
                    }
                    else if (typeof metrics[1] !== 'undefined' && metrics[1].metric.name == metric) {
                        return metrics[1].value;
                    }
                    else if (typeof metrics[2] !== 'undefined' && metrics[2].metric.name == metric) {
                        return metrics[2].value;
                    }
                    else {
                        return 0;
                    }
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

//# sourceMappingURL=data:application/json;base64,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QUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBQy9CLENBQUM7O2tDQUFBO2dCQXFERixxQkFBQztZQUFELENBbkRBLEFBbURDLElBQUE7WUFuREQsMkNBbURDLENBQUEiLCJmaWxlIjoidGFza3MvdGFza3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXlseWZlU2VydmljZSB9IGZyb20gJy4vLi4vcGxheWx5ZmUuc2VydmljZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFza3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtQbGF5bHlmZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhX3Rva2VuO1xuICBhY3Rpb25zX2pzb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGxheWx5ZmVTZXJ2aWNlOiBQbGF5bHlmZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLmFfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG5cbiAgICB0aGlzLl9wbGF5bHlmZVNlcnZpY2UuZ2V0QWxsQWN0aW9ucyh0aGlzLmFfdG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnNfanNvbiA9IGRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMuYWN0aW9uc19qc29uKVxuICAgICAgKTtcblxuICB9XG5cbiAgZ2V0TWV0cmljKG1ldHJpY3MsIG1ldHJpYyk6bnVtYmVyIHtcbiAgICBjb25zb2xlLmxvZyhtZXRyaWMpO1xuICAgIGNvbnNvbGUuZGlyKG1ldHJpY3MpO1xuICAgIGlmICh0eXBlb2YgbWV0cmljc1swXSAhPT0gJ3VuZGVmaW5lZCcgJiYgbWV0cmljc1swXS5tZXRyaWMubmFtZSA9PSBtZXRyaWMpIHtcbiAgICAgIHJldHVybiBtZXRyaWNzWzBdLnZhbHVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldHJpY3NbMV0gIT09ICd1bmRlZmluZWQnICYmIG1ldHJpY3NbMV0ubWV0cmljLm5hbWUgPT0gbWV0cmljKSB7XG4gICAgICByZXR1cm4gbWV0cmljc1sxXS52YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRyaWNzWzJdICE9PSAndW5kZWZpbmVkJyAmJiBtZXRyaWNzWzJdLm1ldHJpYy5uYW1lID09IG1ldHJpYykge1xuICAgICAgcmV0dXJuIG1ldHJpY3NbMl0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuXG4gIH1cblxuICBwbGF5QWN0aW9uKGV2ZW50LCBhY3Rpb25faWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5fcGxheWx5ZmVTZXJ2aWNlLnBvc3RQbGF5QWN0aW9uKHRoaXMuYV90b2tlbiwgYWN0aW9uX2lkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVGFza3NQYWdlJywge31dKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG5cblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['@angular/core', './tasks/tasks.component', './header/header.component', './playlyfe.service'], function(exports_1, context_1) {
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
    var core_1, tasks_component_1, header_component_1, playlyfe_service_1;
    var TasksPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            TasksPageComponent = (function () {
                function TasksPageComponent(_playlyfeService) {
                    this._playlyfeService = _playlyfeService;
                }
                TasksPageComponent.prototype.ngOnInit = function () {
                    this.a_token = localStorage.getItem('access_token');
                    ;
                };
                TasksPageComponent = __decorate([
                    core_1.Component({
                        directives: [header_component_1.HeaderComponent, tasks_component_1.TasksComponent],
                        template: "\n      <header-component></header-component>\n      <tasks></tasks>\n    ",
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], TasksPageComponent);
                return TasksPageComponent;
            }());
            exports_1("TasksPageComponent", TasksPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUlJLDRCQUFvQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Z0JBRXJELENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQUMsQ0FBQztnQkFFdkQsQ0FBQztnQkFwQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGdDQUFjLENBQUM7d0JBQzdDLFFBQVEsRUFBRSw0RUFHVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztzQ0FBQTtnQkFlRix5QkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsbURBYUMsQ0FBQSIsImZpbGUiOiJ0YXNrcy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYXNrc0NvbXBvbmVudCB9IGZyb20gJy4vdGFza3MvdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQbGF5bHlmZVNlcnZpY2UgfSBmcm9tICcuL3BsYXlseWZlLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIFRhc2tzQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGhlYWRlci1jb21wb25lbnQ+PC9oZWFkZXItY29tcG9uZW50PlxuICAgICAgPHRhc2tzPjwvdGFza3M+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtQbGF5bHlmZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza3NQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhX3Rva2VuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGxheWx5ZmVTZXJ2aWNlOiBQbGF5bHlmZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSk7XG5cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['@angular/core', '@angular/router-deprecated', './login.component', './pevex-page.component', './main-page.component', './tasks-page.component', './profile/profile.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, login_component_1, pevex_page_component_1, main_page_component_1, tasks_page_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (pevex_page_component_1_1) {
                pevex_page_component_1 = pevex_page_component_1_1;
            },
            function (main_page_component_1_1) {
                main_page_component_1 = main_page_component_1_1;
            },
            function (tasks_page_component_1_1) {
                tasks_page_component_1 = tasks_page_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var atoken = /\=[A-Za-z0-9]+/.exec(window.location.href);
                    if (atoken != null) {
                        this.a_token = atoken[0].slice(1);
                        localStorage.setItem('access_token', this.a_token);
                        this._router.navigate(['MainPage', { access_token: this.a_token }]);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'apocalypternet',
                        template: "\n    <router-outlet></router-outlet>\n    ",
                        directives: [login_component_1.LoginComponent, router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'LoginPage', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/app/:access_token', name: 'MainPage', component: main_page_component_1.MainPageComponent },
                        { path: '/pevex', name: 'PevexPage', component: pevex_page_component_1.PevexPageComponent },
                        { path: '/tasks', name: 'TasksPage', component: tasks_page_component_1.TasksPageComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBR0Usc0JBQXFCLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV4QywrQkFBUSxHQUFSO29CQUNFLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLENBQUM7Z0JBQ0gsQ0FBQztnQkE1Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNkNBRVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUUsZ0NBQWMsRUFBRSxxQ0FBaUIsQ0FBRTtxQkFDcEQsQ0FBQztvQkFFRCwrQkFBVyxDQUFDO3dCQUNYLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUM5RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7d0JBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTt3QkFDcEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3FCQUNuRSxDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHVDQWNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGV2ZXhQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wZXZleC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rhc2tzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Fwb2NhbHlwdGVybmV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFsgTG9naW5Db21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTIF1cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBuYW1lOiAnTG9naW5QYWdlJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gIHsgcGF0aDogJy9hcHAvOmFjY2Vzc190b2tlbicsIG5hbWU6ICdNYWluUGFnZScsIGNvbXBvbmVudDogTWFpblBhZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3BldmV4JywgbmFtZTogJ1BldmV4UGFnZScsIGNvbXBvbmVudDogUGV2ZXhQYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy90YXNrcycsIG5hbWU6ICdUYXNrc1BhZ2UnLCBjb21wb25lbnQ6IFRhc2tzUGFnZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcvcHJvZmlsZScsIG5hbWU6ICdQcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBhX3Rva2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB2YXIgYXRva2VuID0gL1xcPVtBLVphLXowLTldKy8uZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYoYXRva2VuICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYV90b2tlbiA9IGF0b2tlblswXS5zbGljZSgxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCB0aGlzLmFfdG9rZW4pO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTWFpblBhZ2UnLCB7YWNjZXNzX3Rva2VuOiB0aGlzLmFfdG9rZW59XSk7XG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

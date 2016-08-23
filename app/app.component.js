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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBR0Usc0JBQXFCLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV4QywrQkFBUSxHQUFSO29CQUNFLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLENBQUM7Z0JBQ0gsQ0FBQztnQkE1Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNkNBRVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUUsZ0NBQWMsRUFBRSxxQ0FBaUIsQ0FBRTtxQkFDcEQsQ0FBQztvQkFFRCwrQkFBVyxDQUFDO3dCQUNYLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUM5RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7d0JBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTt3QkFDcEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3FCQUNuRSxDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHVDQWNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFBldmV4UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGV2ZXgtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFza3NQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrcy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcG9jYWx5cHRlcm5ldCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbIExvZ2luQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgbmFtZTogJ0xvZ2luUGFnZScsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvYXBwLzphY2Nlc3NfdG9rZW4nLCBuYW1lOiAnTWFpblBhZ2UnLCBjb21wb25lbnQ6IE1haW5QYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9wZXZleCcsIG5hbWU6ICdQZXZleFBhZ2UnLCBjb21wb25lbnQ6IFBldmV4UGFnZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcvdGFza3MnLCBuYW1lOiAnVGFza3NQYWdlJywgY29tcG9uZW50OiBUYXNrc1BhZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3Byb2ZpbGUnLCBuYW1lOiAnUHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCB9LFxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgYV90b2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpOmFueSB7XG4gICAgdmFyIGF0b2tlbiA9IC9cXD1bQS1aYS16MC05XSsvLmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGlmKGF0b2tlbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFfdG9rZW4gPSBhdG9rZW5bMF0uc2xpY2UoMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdGhpcy5hX3Rva2VuKTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ01haW5QYWdlJywge2FjY2Vzc190b2tlbjogdGhpcy5hX3Rva2VufV0pO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

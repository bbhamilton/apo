System.register(['@angular/core', '@angular/router-deprecated', './login.component', './pevex-page.component', './main-page.component', './tasks-page.component', './profile-page.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, login_component_1, pevex_page_component_1, main_page_component_1, tasks_page_component_1, profile_page_component_1;
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
            function (profile_page_component_1_1) {
                profile_page_component_1 = profile_page_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var atoken = /\=[A-Za-z0-9]+/.exec(window.location.href);
                    console.log('warunki::begin');
                    if (atoken != null) {
                        this.a_token = atoken[0].slice(1);
                        localStorage.setItem('access_token', this.a_token);
                        this._router.navigate(['MainPage', { access_token: this.a_token }]);
                        console.log('warunki::warunek 1 ' + this.a_token);
                    }
                    else if (localStorage.getItem('access_token') !== null) {
                        this.a_token = localStorage.getItem('access_token');
                        console.log('warunki::warunek 2 ' + this.a_token);
                        this._router.navigate(['MainPage', { access_token: this.a_token }]);
                    }
                    else {
                        console.log('warunki::warunek 3');
                        this._router.navigate(['LoginPage']);
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
                        { path: '/profile', name: 'ProfilePage', component: profile_page_component_1.ProfilePageComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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ImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGV2ZXhQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wZXZleC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rhc2tzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLXBhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcG9jYWx5cHRlcm5ldCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbIExvZ2luQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgbmFtZTogJ0xvZ2luUGFnZScsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvYXBwLzphY2Nlc3NfdG9rZW4nLCBuYW1lOiAnTWFpblBhZ2UnLCBjb21wb25lbnQ6IE1haW5QYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9wZXZleCcsIG5hbWU6ICdQZXZleFBhZ2UnLCBjb21wb25lbnQ6IFBldmV4UGFnZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcvdGFza3MnLCBuYW1lOiAnVGFza3NQYWdlJywgY29tcG9uZW50OiBUYXNrc1BhZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3Byb2ZpbGUnLCBuYW1lOiAnUHJvZmlsZVBhZ2UnLCBjb21wb25lbnQ6IFByb2ZpbGVQYWdlQ29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGFfdG9rZW46IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHZhciBhdG9rZW4gPSAvXFw9W0EtWmEtejAtOV0rLy5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBjb25zb2xlLmxvZygnd2FydW5raTo6YmVnaW4nKTtcblxuICAgIGlmKGF0b2tlbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFfdG9rZW4gPSBhdG9rZW5bMF0uc2xpY2UoMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdGhpcy5hX3Rva2VuKTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ01haW5QYWdlJywge2FjY2Vzc190b2tlbjogdGhpcy5hX3Rva2VufV0pO1xuICAgICAgY29uc29sZS5sb2coJ3dhcnVua2k6OndhcnVuZWsgMSAnICsgdGhpcy5hX3Rva2VuICk7XG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYV90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCd3YXJ1bmtpOjp3YXJ1bmVrIDIgJyArIHRoaXMuYV90b2tlbik7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydNYWluUGFnZScsIHthY2Nlc3NfdG9rZW46IHRoaXMuYV90b2tlbn1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3dhcnVua2k6OndhcnVuZWsgMycpO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTG9naW5QYWdlJ10pO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

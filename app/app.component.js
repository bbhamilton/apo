System.register(['@angular/core', '@angular/router-deprecated', './header/header.component', './pevex-page.component', './main-page.component', './tasks/tasks.component', './profile/profile.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, header_component_1, pevex_page_component_1, main_page_component_1, tasks_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (pevex_page_component_1_1) {
                pevex_page_component_1 = pevex_page_component_1_1;
            },
            function (main_page_component_1_1) {
                main_page_component_1 = main_page_component_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'apocalypternet',
                        directives: [header_component_1.HeaderComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "\n        <header-component></header-component>\n        <router-outlet></router-outlet>\n    "
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: main_page_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/pevex', name: 'PevexPage', component: pevex_page_component_1.PevexPageComponent },
                        { path: '/tasks', name: 'Tasks', component: tasks_component_1.TasksComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixVQUFVLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHFDQUFpQixDQUFDO3dCQUNqRCxRQUFRLEVBQUUsZ0dBR1Q7cUJBQ0osQ0FBQztvQkFFRCwrQkFBVyxDQUFDO3dCQUNYLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUNqRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7d0JBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO3dCQUM1RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7cUJBQ25FLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGV2ZXhQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wZXZleC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc0NvbXBvbmVudCB9IGZyb20gJy4vdGFza3MvdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Fwb2NhbHlwdGVybmV0JyxcbiAgICBkaXJlY3RpdmVzOiBbIEhlYWRlckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXItY29tcG9uZW50PjwvaGVhZGVyLWNvbXBvbmVudD5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGBcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBuYW1lOiAnTWFpblBhZ2UnLCBjb21wb25lbnQ6IE1haW5QYWdlQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcbiAgeyBwYXRoOiAnL3BldmV4JywgbmFtZTogJ1BldmV4UGFnZScsIGNvbXBvbmVudDogUGV2ZXhQYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy90YXNrcycsIG5hbWU6ICdUYXNrcycsIGNvbXBvbmVudDogVGFza3NDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3Byb2ZpbGUnLCBuYW1lOiAnUHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBbEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsVUFBVSxFQUFFLENBQUUsa0NBQWUsRUFBRSxxQ0FBaUIsQ0FBQzt3QkFDakQsUUFBUSxFQUFFLGdHQUdUO3FCQUNKLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDWCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDakYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO3dCQUNwRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDNUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3FCQUNuRSxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXZleFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BldmV4LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tzQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrcy90YXNrcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBvY2FseXB0ZXJuZXQnLFxuICAgIGRpcmVjdGl2ZXM6IFsgSGVhZGVyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlci1jb21wb25lbnQ+PC9oZWFkZXItY29tcG9uZW50PlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYFxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIG5hbWU6ICdNYWluUGFnZScsIGNvbXBvbmVudDogTWFpblBhZ2VDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvcGV2ZXgnLCBuYW1lOiAnUGV2ZXhQYWdlJywgY29tcG9uZW50OiBQZXZleFBhZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3Rhc2tzJywgbmFtZTogJ1Rhc2tzJywgY29tcG9uZW50OiBUYXNrc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcvcHJvZmlsZScsIG5hbWU6ICdQcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

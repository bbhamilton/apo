System.register(['@angular/core', './header/header.component', './profile/profile.component'], function(exports_1, context_1) {
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
    var core_1, header_component_1, profile_component_1;
    var ProfilePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            ProfilePageComponent = (function () {
                function ProfilePageComponent() {
                }
                ProfilePageComponent.prototype.ngOnInit = function () {
                    this.a_token = localStorage.getItem('access_token');
                };
                ProfilePageComponent = __decorate([
                    core_1.Component({
                        directives: [header_component_1.HeaderComponent, profile_component_1.ProfileComponent],
                        template: "\n      <header-component></header-component>\n      <profile></profile>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfilePageComponent);
                return ProfilePageComponent;
            }());
            exports_1("ProfilePageComponent", ProfilePageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFJSTtnQkFFQSxDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQWxCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsb0NBQWdCLENBQUM7d0JBQy9DLFFBQVEsRUFBRSxnRkFHVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFjRiwyQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsdURBWUMsQ0FBQSIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGhlYWRlci1jb21wb25lbnQ+PC9oZWFkZXItY29tcG9uZW50PlxuICAgICAgPHByb2ZpbGU+PC9wcm9maWxlPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYV90b2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgdGhpcy5hX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

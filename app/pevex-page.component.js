System.register(['@angular/core', './pevex/pevex.component', './products/products.component', './header/header.component'], function(exports_1, context_1) {
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
    var core_1, pevex_component_1, products_component_1, header_component_1;
    var PevexPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pevex_component_1_1) {
                pevex_component_1 = pevex_component_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            PevexPageComponent = (function () {
                function PevexPageComponent() {
                }
                PevexPageComponent.prototype.ngOnInit = function () {
                    this.a_token = localStorage.getItem('access_token');
                    ;
                };
                PevexPageComponent = __decorate([
                    core_1.Component({
                        directives: [header_component_1.HeaderComponent, pevex_component_1.PevexComponent, products_component_1.ProductsComponent],
                        template: "\n      <header-component></header-component>\n      <pevex></pevex>\n      <products></products>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PevexPageComponent);
                return PevexPageComponent;
            }());
            exports_1("PevexPageComponent", PevexPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldmV4LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUlJO2dCQUVBLENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGdDQUFjLEVBQUUsc0NBQWlCLENBQUM7d0JBQ2hFLFFBQVEsRUFBRSx5R0FJVDtxQkFDSixDQUFDOztzQ0FBQTtnQkFjRix5QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsbURBWUMsQ0FBQSIsImZpbGUiOiJwZXZleC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQZXZleENvbXBvbmVudCB9IGZyb20gJy4vcGV2ZXgvcGV2ZXguY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudCwgUGV2ZXhDb21wb25lbnQsIFByb2R1Y3RzQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGhlYWRlci1jb21wb25lbnQ+PC9oZWFkZXItY29tcG9uZW50PlxuICAgICAgPHBldmV4PjwvcGV2ZXg+XG4gICAgICA8cHJvZHVjdHM+PC9wcm9kdWN0cz5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUGV2ZXhQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhX3Rva2VuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICB0aGlzLmFfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

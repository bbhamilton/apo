System.register(['@angular/core', '@angular/router-deprecated', './pevex/pevex.component', './products/products.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, pevex_component_1, products_component_1;
    var PevexPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (pevex_component_1_1) {
                pevex_component_1 = pevex_component_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            }],
        execute: function() {
            PevexPageComponent = (function () {
                function PevexPageComponent() {
                }
                PevexPageComponent = __decorate([
                    core_1.Component({
                        directives: [pevex_component_1.PevexComponent, products_component_1.ProductsComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "\n      <pevex></pevex>\n      <products></products>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PevexPageComponent);
                return PevexPageComponent;
            }());
            exports_1("PevexPageComponent", PevexPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldmV4LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFWRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLEVBQUUscUNBQWlCLENBQUM7d0JBQ2xFLFFBQVEsRUFBRSw0REFHVDtxQkFDSixDQUFDOztzQ0FBQTtnQkFJRix5QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsbURBRUMsQ0FBQSIsImZpbGUiOiJwZXZleC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IFBldmV4Q29tcG9uZW50IH0gZnJvbSAnLi9wZXZleC9wZXZleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1BldmV4Q29tcG9uZW50LCBQcm9kdWN0c0NvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8cGV2ZXg+PC9wZXZleD5cbiAgICAgIDxwcm9kdWN0cz48L3Byb2R1Y3RzPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQZXZleFBhZ2VDb21wb25lbnQgIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

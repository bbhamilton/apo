System.register(['@angular/core', './playlyfe.service'], function(exports_1, context_1) {
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
    var core_1, playlyfe_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlyfe_service_1_1) {
                playlyfe_service_1 = playlyfe_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_httpService) {
                    this._httpService = _httpService;
                    this.a_token = null;
                    // production env
                    this.client_id = 'OGI4ZmNmMzQtZGU2Zi00YzkxLTk4NmEtOTI2MWVhNGY3YjYx';
                    // testing env
                    //client_id = 'MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0';
                    // redirect_uri = 'http://bilicki.stronazen.pl/apo';
                    this.redirect_uri = 'http://localhost:3000';
                }
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n      <div class=\"playlyfe_loginpage\">\n        <div class=\"playlyfe_container\">\n          <img class=\"apocalypternet_logo\" src=\"src/images/logo.png\" alt=\"Apocalypternet logo\">\n          <a class=\"playlyfe_btn\" href=\"https://playlyfe.com/auth?response_type=token&client_id={{client_id}}&redirect_uri={{redirect_uri}}\">\n            <p class=\"playlyfe_btn__label\" >Log in with playlyfe</p>\n          </a>\n        </div>\n      </div>\n    ",
                        providers: [playlyfe_service_1.PlaylyfeService]
                    }), 
                    __metadata('design:paramtypes', [playlyfe_service_1.PlaylyfeService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFVRSx3QkFBb0IsWUFBNkI7b0JBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtvQkFUakQsWUFBTyxHQUFXLElBQUksQ0FBQztvQkFFdkIsaUJBQWlCO29CQUNqQixjQUFTLEdBQUcsa0RBQWtELENBQUM7b0JBQy9ELGNBQWM7b0JBQ2QsaUVBQWlFO29CQUNqRSxvREFBb0Q7b0JBQ3BELGlCQUFZLEdBQUcsdUJBQXVCLENBQUM7Z0JBRWEsQ0FBQztnQkF6QnZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSw4Y0FTVDt3QkFDRCxTQUFTLEVBQUUsQ0FBRSxrQ0FBZSxDQUFFO3FCQUNqQyxDQUFDOztrQ0FBQTtnQkFjRixxQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsMkNBWUMsQ0FBQSIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxheWx5ZmVTZXJ2aWNlIH0gZnJvbSAnLi9wbGF5bHlmZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cInBsYXlseWZlX2xvZ2lucGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWx5ZmVfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFwb2NhbHlwdGVybmV0X2xvZ29cIiBzcmM9XCJzcmMvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiQXBvY2FseXB0ZXJuZXQgbG9nb1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwicGxheWx5ZmVfYnRuXCIgaHJlZj1cImh0dHBzOi8vcGxheWx5ZmUuY29tL2F1dGg/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9e3tjbGllbnRfaWR9fSZyZWRpcmVjdF91cmk9e3tyZWRpcmVjdF91cml9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwbGF5bHlmZV9idG5fX2xhYmVsXCIgPkxvZyBpbiB3aXRoIHBsYXlseWZlPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogWyBQbGF5bHlmZVNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgYV90b2tlbjogc3RyaW5nID0gbnVsbDtcbiAgcGxheWx5ZmVfaWQ6IHN0cmluZztcbiAgLy8gcHJvZHVjdGlvbiBlbnZcbiAgY2xpZW50X2lkID0gJ09HSTRabU5tTXpRdFpHVTJaaTAwWXpreExUazRObUV0T1RJMk1XVmhOR1kzWWpZeCc7XG4gIC8vIHRlc3RpbmcgZW52XG4gIC8vY2xpZW50X2lkID0gJ01tSm1OVGhoWXpjdFpHVmxZaTAwTURJNExXRXpPR1V0WVRZelpUTmhZV1psTVRnMCc7XG4gIC8vIHJlZGlyZWN0X3VyaSA9ICdodHRwOi8vYmlsaWNraS5zdHJvbmF6ZW4ucGwvYXBvJztcbiAgcmVkaXJlY3RfdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IFBsYXlseWZlU2VydmljZSkge31cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

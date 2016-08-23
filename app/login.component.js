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
                    this.client_id = 'MTI4OTkxNWQtNDMzMi00NDQwLWE2OWEtYmY3ZGVhYmNkYmMz';
                    // testing env
                    // client_id = 'MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0';
                    this.redirect_uri = 'http://localhost:3000/';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFTRSx3QkFBb0IsWUFBNkI7b0JBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtvQkFSakQsWUFBTyxHQUFXLElBQUksQ0FBQztvQkFFdkIsaUJBQWlCO29CQUNqQixjQUFTLEdBQUcsa0RBQWtELENBQUM7b0JBQy9ELGNBQWM7b0JBQ2Qsa0VBQWtFO29CQUNsRSxpQkFBWSxHQUFHLHdCQUF3QixDQUFDO2dCQUl4QyxDQUFDO2dCQTFCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsOGNBU1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUUsa0NBQWUsQ0FBRTtxQkFDakMsQ0FBQzs7a0NBQUE7Z0JBZUYscUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELDJDQWFDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXlseWZlU2VydmljZSB9IGZyb20gJy4vcGxheWx5ZmUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJwbGF5bHlmZV9sb2dpbnBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlseWZlX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcG9jYWx5cHRlcm5ldF9sb2dvXCIgc3JjPVwic3JjL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkFwb2NhbHlwdGVybmV0IGxvZ29cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInBsYXlseWZlX2J0blwiIGhyZWY9XCJodHRwczovL3BsYXlseWZlLmNvbS9hdXRoP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPXt7Y2xpZW50X2lkfX0mcmVkaXJlY3RfdXJpPXt7cmVkaXJlY3RfdXJpfX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicGxheWx5ZmVfYnRuX19sYWJlbFwiID5Mb2cgaW4gd2l0aCBwbGF5bHlmZTwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFsgUGxheWx5ZmVTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGFfdG9rZW46IHN0cmluZyA9IG51bGw7XG4gIHBsYXlseWZlX2lkOiBzdHJpbmc7XG4gIC8vIHByb2R1Y3Rpb24gZW52XG4gIGNsaWVudF9pZCA9ICdNVEk0T1RreE5XUXRORE16TWkwME5EUXdMV0UyT1dFdFltWTNaR1ZoWW1Oa1ltTXonO1xuICAvLyB0ZXN0aW5nIGVudlxuICAvLyBjbGllbnRfaWQgPSAnTW1KbU5UaGhZemN0WkdWbFlpMDBNREk0TFdFek9HVXRZVFl6WlROaFlXWmxNVGcwJztcbiAgcmVkaXJlY3RfdXJpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBQbGF5bHlmZVNlcnZpY2UpIHtcblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

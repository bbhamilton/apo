System.register(['@angular/core', './http-test.service'], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HttpTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HttpTestComponent = (function () {
                function HttpTestComponent(_httpService) {
                    this._httpService = _httpService;
                    this.JSONdata = '...';
                    this.params = 'none';
                }
                HttpTestComponent.prototype.onGetGameProfileImage = function () {
                    var _this = this;
                    this._httpService.getPlaylyfeGameImage()
                        .subscribe(function (data) { return _this.JSONdata = JSON.stringify(data); }, function (error) { return console.error(error); }, function () { return console.log('finished'); });
                };
                HttpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n      <p><b>params: </b> {{params}}</p>\n      <a href=\"https://playlyfe.com/auth?response_type=token&client_id=MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0&redirect_uri=http://localhost:3000/\">Playlyfe</a>\n      <button (click)=\"onGetGameProfileImage()\">get Playlye game profile image</button>\n      <pre><u>Output:</u> {{JSONdata}}</pre>\n    ",
                        providers: [http_test_service_1.HttpTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HttpTestService])
                ], HttpTestComponent);
                return HttpTestComponent;
            }());
            exports_1("HttpTestComponent", HttpTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBSUUsMkJBQW9CLFlBQTZCO29CQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7b0JBSGpELGFBQVEsR0FBVyxLQUFLLENBQUM7b0JBQ3pCLFdBQU0sR0FBVyxNQUFNLENBQUE7Z0JBSXZCLENBQUM7Z0JBRUQsaURBQXFCLEdBQXJCO29CQUFBLGlCQU9DO29CQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7eUJBQ3JDLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBcEMsQ0FBb0MsRUFDNUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixFQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDTixDQUFDO2dCQS9CSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsdVdBS1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUUsbUNBQWUsQ0FBRTtxQkFDakMsQ0FBQzs7cUNBQUE7Z0JBMkNGLHdCQUFDO1lBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtZQXBDRCxpREFvQ0MsQ0FBQSIsImZpbGUiOiJodHRwLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBIdHRwVGVzdFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtdGVzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdodHRwLXRlc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8cD48Yj5wYXJhbXM6IDwvYj4ge3twYXJhbXN9fTwvcD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXlseWZlLmNvbS9hdXRoP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPU1tSm1OVGhoWXpjdFpHVmxZaTAwTURJNExXRXpPR1V0WVRZelpUTmhZV1psTVRnMCZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDozMDAwL1wiPlBsYXlseWZlPC9hPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXRHYW1lUHJvZmlsZUltYWdlKClcIj5nZXQgUGxheWx5ZSBnYW1lIHByb2ZpbGUgaW1hZ2U8L2J1dHRvbj5cbiAgICAgIDxwcmU+PHU+T3V0cHV0OjwvdT4ge3tKU09OZGF0YX19PC9wcmU+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFsgSHR0cFRlc3RTZXJ2aWNlIF1cbn0pXG4vL1xuLy8gQFJvdXRlQ29uZmlnKFtcbi8vICAgIHtwYXRoOiAnLycsIG5hbWU6ICdNYWluJywgY29tcG9uZW50OiBIdHRwVGVzdENvbXBvbmVudH0sXG4vLyAgICB7cGF0aDogJy86dG9rZW4nLCBuYW1lOiAnVG9rZW4nLCBjb21wb25lbnQ6IEh0dHBUZXN0Q29tcG9uZW50fVxuLy8gXSlcblxuZXhwb3J0IGNsYXNzIEh0dHBUZXN0Q29tcG9uZW50IHtcbiAgSlNPTmRhdGE6IHN0cmluZyA9ICcuLi4nO1xuICBwYXJhbXM6IHN0cmluZyA9ICdub25lJ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwVGVzdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgb25HZXRHYW1lUHJvZmlsZUltYWdlKCkge1xuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBsYXlseWZlR2FtZUltYWdlKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gdGhpcy5KU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2ZpbmlzaGVkJylcbiAgICAgICk7XG4gIH1cblxuLyogIG9uVGVzdEdldCgpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRDdXJyZW50VGltZSgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHsgdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7IGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTsgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnR0VUOjpmaW5pc2hlZCcpXG4gICAgICApO1xuICB9XG5cbiAgb25UZXN0UG9zdCgpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0SlNPTigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIlBPU1Q6OmZpbmlzaGVkXCIpXG4gICAgICApO1xuICB9XG4qL1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

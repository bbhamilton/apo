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
                    this.a_token = null;
                    this.client_id = 'MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0';
                }
                HttpTestComponent.prototype.ngOnInit = function () {
                    var atoken = /\=[A-Za-z0-9]+/.exec(window.location.href);
                    if (atoken != null) {
                        this.a_token = atoken[0].slice(1);
                    }
                };
                HttpTestComponent.prototype.onGetGameProfileImage = function () {
                    var _this = this;
                    this._httpService.getPlaylyfeGameImage(this.a_token)
                        .subscribe(function (data) { return _this.JSONdata = JSON.stringify(data); }, function (error) { return console.error(error); }, function () { return console.log('finished'); });
                };
                HttpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n      <p><b>params: </b> {{playlyfe_id}}</p>\n      <p><b>params: </b> {{a_token}}</p>\n      <input type=\"text\" [(ngModel)]=\"client_id\" >\n      <a href=\"https://playlyfe.com/auth?response_type=token&client_id={{client_id}}&redirect_uri=http://localhost:3000/\">Playlyfe</a>\n      <button (click)=\"onGetGameProfileImage()\">get Playlye game profile image</button>\n      <pre><u>Output:</u> {{JSONdata}}</pre>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBT0UsMkJBQW9CLFlBQTZCO29CQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7b0JBTmpELGFBQVEsR0FBVyxLQUFLLENBQUM7b0JBRXpCLFlBQU8sR0FBVyxJQUFJLENBQUM7b0JBRXZCLGNBQVMsR0FBRyxrREFBa0QsQ0FBQztnQkFJL0QsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUNFLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsaURBQXFCLEdBQXJCO29CQUFBLGlCQU9DO29CQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDakQsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLEVBQzdCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUM5QixDQUFDO2dCQUNOLENBQUM7Z0JBdENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwyYUFPVDt3QkFDRCxTQUFTLEVBQUUsQ0FBRSxtQ0FBZSxDQUFFO3FCQUNqQyxDQUFDOztxQ0FBQTtnQkFpREYsd0JBQUM7WUFBRCxDQS9DQSxBQStDQyxJQUFBO1lBL0NELGlEQStDQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFRlc3RTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLXRlc3Quc2VydmljZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaHR0cC10ZXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHA+PGI+cGFyYW1zOiA8L2I+IHt7cGxheWx5ZmVfaWR9fTwvcD5cbiAgICAgIDxwPjxiPnBhcmFtczogPC9iPiB7e2FfdG9rZW59fTwvcD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY2xpZW50X2lkXCIgPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxheWx5ZmUuY29tL2F1dGg/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9e3tjbGllbnRfaWR9fSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDozMDAwL1wiPlBsYXlseWZlPC9hPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXRHYW1lUHJvZmlsZUltYWdlKClcIj5nZXQgUGxheWx5ZSBnYW1lIHByb2ZpbGUgaW1hZ2U8L2J1dHRvbj5cbiAgICAgIDxwcmU+PHU+T3V0cHV0OjwvdT4ge3tKU09OZGF0YX19PC9wcmU+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFsgSHR0cFRlc3RTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIdHRwVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEpTT05kYXRhOiBzdHJpbmcgPSAnLi4uJztcbiAgc291cmNlOiBzdHJpbmc7XG4gIGFfdG9rZW46IHN0cmluZyA9IG51bGw7XG4gIHBsYXlseWZlX2lkOiBzdHJpbmc7XG4gIGNsaWVudF9pZCA9ICdNbUptTlRoaFl6Y3RaR1ZsWWkwME1ESTRMV0V6T0dVdFlUWXpaVE5oWVdabE1UZzAnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwVGVzdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHZhciBhdG9rZW4gPSAvXFw9W0EtWmEtejAtOV0rLy5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZihhdG9rZW4gIT0gbnVsbCkge1xuICAgICAgdGhpcy5hX3Rva2VuID0gYXRva2VuWzBdLnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIG9uR2V0R2FtZVByb2ZpbGVJbWFnZSgpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQbGF5bHlmZUdhbWVJbWFnZSh0aGlzLmFfdG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdmaW5pc2hlZCcpXG4gICAgICApO1xuICB9XG5cblxuLyogIG9uVGVzdEdldCgpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRDdXJyZW50VGltZSgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHsgdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7IGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTsgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnR0VUOjpmaW5pc2hlZCcpXG4gICAgICApO1xuICB9XG5cbiAgb25UZXN0UG9zdCgpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0SlNPTigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIlBPU1Q6OmZpbmlzaGVkXCIpXG4gICAgICApO1xuICB9XG4qL1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

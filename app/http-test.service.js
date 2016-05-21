System.register(["@angular/core", "@angular/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HttpTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpTestService = (function () {
                function HttpTestService(_http) {
                    this._http = _http;
                }
                HttpTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HttpTestService.prototype.getPlaylyfeGameImage = function () {
                    return this._http.get('https://api.playlyfe.com/v2/runtime/player?player_id=bartek&access_token=ZjYwYTg3MTMtMjY0MS00OWIzLThhZTEtMzM5ZGNlZjhiZDRk')
                        .map(function (res) { return res.json(); });
                };
                HttpTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('http://validate.jsontest.com', params, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                HttpTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpTestService);
                return HttpTestService;
            }());
            exports_1("HttpTestService", HttpTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVFLHlCQUFxQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUcsQ0FBQztnQkFFcEMsd0NBQWMsR0FBZDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7eUJBQzlDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw4Q0FBb0IsR0FBcEI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDJIQUEySCxDQUFDO3lCQUMvSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFFcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLE1BQU0sRUFBRTt3QkFDN0QsT0FBTyxFQUFFLE9BQU87cUJBQ2pCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRTVCLENBQUM7Z0JBMUJIO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTRCYixzQkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsNkNBMEJDLENBQUEiLCJmaWxlIjoiaHR0cC10ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIdHRwVGVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2RhdGUuanNvbnRlc3QuY29tJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgZ2V0UGxheWx5ZmVHYW1lSW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwczovL2FwaS5wbGF5bHlmZS5jb20vdjIvcnVudGltZS9wbGF5ZXI/cGxheWVyX2lkPWJhcnRlayZhY2Nlc3NfdG9rZW49WmpZd1lUZzNNVE10TWpZME1TMDBPV0l6TFRoaFpURXRNek01WkdObFpqaGlaRFJrJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgcG9zdEpTT04oKSB7XG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7IHZhcjE6J3Rlc3QnLCB2YXIyOiAzfSk7XG4gICAgdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL3ZhbGlkYXRlLmpzb250ZXN0LmNvbScsIHBhcmFtcywge1xuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

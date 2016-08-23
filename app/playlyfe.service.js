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
    var PlaylyfeService;
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
            PlaylyfeService = (function () {
                function PlaylyfeService(_http) {
                    this._http = _http;
                    this.name = 'apocalypternet';
                }
                // --- getters
                PlaylyfeService.prototype.getGameName = function () {
                    return this.gameinfo.name;
                };
                PlaylyfeService.prototype.getPlayerName = function () {
                    return null;
                };
                PlaylyfeService.prototype.getPlayerPoints = function () {
                    return 0;
                };
                PlaylyfeService.prototype.getGeneralPoints = function () {
                    return 0;
                };
                PlaylyfeService.prototype.getPlayersCounter = function () {
                    return this.players_counter;
                };
                PlaylyfeService.prototype.getAllActions = function (access_token) {
                    if (access_token == null) {
                        return null;
                    }
                    else {
                        return this._http.get('https://api.playlyfe.com/v2/runtime/actions?access_token=' + access_token).map(function (res) { return res.json(); });
                    }
                };
                PlaylyfeService.prototype.getPlayerProfile = function (access_token) {
                    if (access_token == null) {
                        return null;
                    }
                    else {
                        return this._http.get('https://api.playlyfe.com/v2/runtime/player?access_token=' + access_token).map(function (res) { return res.json(); });
                    }
                };
                PlaylyfeService.prototype.getPlayers = function (access_token) {
                    if (access_token == null) {
                        return null;
                    }
                    else {
                        return this._http.get('https://api.playlyfe.com/v2/runtime/leaderboards/general_ranking?cycle=alltime&limit=100&access_token=' + access_token).map(function (res) { return res.json(); });
                    }
                };
                PlaylyfeService.prototype.postPlayAction = function (access_token, action_id) {
                    if (access_token == null) {
                        return null;
                    }
                    else {
                        var body = JSON.stringify({});
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        console.log('access_token: ' + access_token);
                        return this._http.post('https://api.playlyfe.com/v2/runtime/actions/' + action_id + '/play?access_token=' + access_token + '&player_id=bartek&count=1', body, options).map(function (res) { return res.json(); });
                    }
                };
                // --- setters
                PlaylyfeService.prototype.setName = function (name) {
                    this.name = name;
                };
                PlaylyfeService.prototype.setPlayersCounter = function (players_counter) {
                    this.players_counter = players_counter;
                };
                PlaylyfeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PlaylyfeService);
                return PlaylyfeService;
            }());
            exports_1("PlaylyfeService", PlaylyfeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlseWZlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBSUUseUJBQXFCLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDL0IsQ0FBQztnQkFFSCxjQUFjO2dCQUVaLHFDQUFXLEdBQVg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHVDQUFhLEdBQWI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVELHlDQUFlLEdBQWY7b0JBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELDBDQUFnQixHQUFoQjtvQkFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsMkNBQWlCLEdBQWpCO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHVDQUFhLEdBQWIsVUFBYyxZQUFZO29CQUN4QixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7b0JBQzNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsWUFBWTtvQkFDM0IsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO29CQUMxSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsb0NBQVUsR0FBVixVQUFXLFlBQVk7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdHQUF3RyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztvQkFDeEssQ0FBQztnQkFDSCxDQUFDO2dCQUVELHdDQUFjLEdBQWQsVUFBZSxZQUFZLEVBQUUsU0FBUztvQkFDcEMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7d0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsOENBQThDLEdBQUcsU0FBUyxHQUFHLHFCQUFxQixHQUFHLFlBQVksR0FBRywyQkFBMkIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO29CQUNoTSxDQUFDO2dCQUVILENBQUM7Z0JBRUgsY0FBYztnQkFFWixpQ0FBTyxHQUFQLFVBQVEsSUFBSTtvQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsZUFBZTtvQkFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7Z0JBQ3pDLENBQUM7Z0JBN0VIO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQStFYixzQkFBQztZQUFELENBN0VBLEFBNkVDLElBQUE7WUE3RUQsNkNBNkVDLENBQUEiLCJmaWxlIjoicGxheWx5ZmUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgUGxheWx5ZmVTZXJ2aWNlIHtcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIHBsYXllcnNfY291bnRlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gICAgdGhpcy5uYW1lID0gJ2Fwb2NhbHlwdGVybmV0JztcbiAgfVxuXG4vLyAtLS0gZ2V0dGVyc1xuXG4gIGdldEdhbWVOYW1lKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nYW1laW5mby5uYW1lO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpOnN0cmluZyB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRQbGF5ZXJQb2ludHMoKTpudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0R2VuZXJhbFBvaW50cygpOm51bWJlciB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXRQbGF5ZXJzQ291bnRlcigpOm51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc19jb3VudGVyO1xuICB9XG5cbiAgZ2V0QWxsQWN0aW9ucyhhY2Nlc3NfdG9rZW4pIHtcbiAgICBpZiAoYWNjZXNzX3Rva2VuID09IG51bGwgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwczovL2FwaS5wbGF5bHlmZS5jb20vdjIvcnVudGltZS9hY3Rpb25zP2FjY2Vzc190b2tlbj0nICsgYWNjZXNzX3Rva2VuKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFBsYXllclByb2ZpbGUoYWNjZXNzX3Rva2VuKSB7XG4gICAgaWYgKGFjY2Vzc190b2tlbiA9PSBudWxsICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cHM6Ly9hcGkucGxheWx5ZmUuY29tL3YyL3J1bnRpbWUvcGxheWVyP2FjY2Vzc190b2tlbj0nICsgYWNjZXNzX3Rva2VuKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFBsYXllcnMoYWNjZXNzX3Rva2VuKSB7XG4gICAgaWYgKGFjY2Vzc190b2tlbiA9PSBudWxsICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cHM6Ly9hcGkucGxheWx5ZmUuY29tL3YyL3J1bnRpbWUvbGVhZGVyYm9hcmRzL2dlbmVyYWxfcmFua2luZz9jeWNsZT1hbGx0aW1lJmxpbWl0PTEwMCZhY2Nlc3NfdG9rZW49JyArIGFjY2Vzc190b2tlbikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG4gIH1cblxuICBwb3N0UGxheUFjdGlvbihhY2Nlc3NfdG9rZW4sIGFjdGlvbl9pZCkge1xuICAgIGlmIChhY2Nlc3NfdG9rZW4gPT0gbnVsbCApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc190b2tlbjogJyArIGFjY2Vzc190b2tlbik7XG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwczovL2FwaS5wbGF5bHlmZS5jb20vdjIvcnVudGltZS9hY3Rpb25zLycgKyBhY3Rpb25faWQgKyAnL3BsYXk/YWNjZXNzX3Rva2VuPScgKyBhY2Nlc3NfdG9rZW4gKyAnJnBsYXllcl9pZD1iYXJ0ZWsmY291bnQ9MScsIGJvZHksIG9wdGlvbnMpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gIH1cblxuLy8gLS0tIHNldHRlcnNcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0UGxheWVyc0NvdW50ZXIocGxheWVyc19jb3VudGVyKSB7XG4gICAgdGhpcy5wbGF5ZXJzX2NvdW50ZXIgPSBwbGF5ZXJzX2NvdW50ZXI7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        loadChildren: 'app/hero/hero.module#HeroModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
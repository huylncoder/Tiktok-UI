import config from '~/config';

// pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Live from '~/pages/Live/Live';

// layout
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

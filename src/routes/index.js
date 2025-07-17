import routesConfig from '~/config/routes'

// pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile'
import Upload from '~/pages/Upload/Upload'

// layout
import HeaderOnly from '~/Layouts/HeaderOnly/HeaderOnly';


const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.profile, component: Profile},

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }
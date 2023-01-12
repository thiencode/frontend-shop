import Following from "../pages/Following";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Upload from "../pages/Upload";
import Login from "../pages/Login";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/upload', component: Upload, layout: null }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
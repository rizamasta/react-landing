import { NotFound } from '../pages/index'

const routes = [
    {
        path: "/",
        pageTitle: 'Home',
        exact: true,
        component: NotFound,
    },
    {
        path: "/users/login",
        pageTitle: 'Masuk Sekarang',
        exact: true,
        component: NotFound,
    },
    {
        path: "/users/register",
        pageTitle: 'Daftar Sekarang',
        exact: true,
        component: NotFound,
    },
    {
        path: "/company/register",
        pageTitle: 'Daftarkan Perusahaan Anda',
        exact: true,
        component: NotFound,
    },
    {
        pageTitle: 'Page Not Found',
        component: NotFound,
    }
];
const empty = [
    // {
    //     path: "/signin",
    //     pageTitle: 'Sing in',
    //     exact: true,
    //     component: Signin
    // }
    // , {
    //     path: "/signup",
    //     exact: true,
    //     pageTitle: 'Sign Up',
    //     component: Signup
    // }
];
export { routes, empty };
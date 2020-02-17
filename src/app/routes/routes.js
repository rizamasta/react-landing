import { NotFound, Home, UserRegister, UserLogin } from '../pages'

const routes = [
    {
        path: "/",
        pageTitle: 'Home',
        exact: true,
        component: Home,

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
        exact: true
    }
];
const empty = [
    {
        path: "/users/register",
        pageTitle: 'Daftar Sekarang',
        exact: true,
        component: UserRegister,
    },
    {
        path: "/users/login",
        pageTitle: 'Masuk Sekarang',
        exact: true,
        component: UserLogin,
    },

    // , {
    //     path: "/signup",
    //     exact: true,
    //     pageTitle: 'Sign Up',
    //     component: Signup
    // }
];
export { routes, empty };
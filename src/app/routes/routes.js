import { Home, UserRegister, UserLogin } from "../pages";

const routes = [
  {
    path: "/",
    pageTitle: "Home",
    exact: true,
    component: Home
  }
];
const empty = [
  {
    path: "/users/register",
    pageTitle: "Daftar Sekarang",
    exact: true,
    component: UserRegister
  },
  {
    path: "/users/login",
    pageTitle: "Masuk Sekarang",
    exact: true,
    component: UserLogin
  }
];
export { routes, empty };

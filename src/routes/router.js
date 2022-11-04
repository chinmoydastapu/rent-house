import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import AddListing from "../components/AddListing/AddListing";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Page404 from "../components/Page404/Page404";
import SearchRentals from "../components/SearchRentals/SearchRentals";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/search-rentals',
                element: <SearchRentals></SearchRentals>
            },
            {
                path: '/add-listing',
                element: <AddListing></AddListing>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])
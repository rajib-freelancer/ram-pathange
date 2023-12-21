import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CapitalGain from "../pages/Blogs/CapitalGain";
import PrivatePartnership from "../pages/Blogs/PrivatePartnership";
import NriTaxation from "../pages/Blogs/NriTaxation";
import NavigatingGstMaze from "../pages/Blogs/NavigatingGstMaze";
import StockTrading from "../pages/Blogs/StockTrading";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/capital-gain-on-shares-sold',
                element: <CapitalGain />
            },
            {
                path: '/private-or-partnership',
                element: <PrivatePartnership />
            },
            {
                path: '/nri-taxation',
                element: <NriTaxation />
            },
            {
                path: '/navigating-the-gst-maze',
                element: <NavigatingGstMaze />
            },
            {
                path: '/stock-trading-taxation',
                element: <StockTrading />
            },
        ]
    }
])
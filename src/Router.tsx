import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"
import Chart from "./routes/Chart"
import Price from "./routes/Price"

interface IRouterProps {
    toggleDark: () => void;
    isDark:boolean;
}

function Router({toggleDark,isDark }:IRouterProps) {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Coins toggleDark={toggleDark}/>} ></Route>
            <Route path="/:coinId/*" element={<Coin isDark={isDark}/>}></Route>
            <Route path="chart" element={<Chart coinId={''} isDark={false} />} />
            <Route path="price" element={<Price />} />
        </Routes>
    </BrowserRouter>
}

export default Router
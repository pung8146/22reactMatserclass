import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"
import Chart from "./routes/Chart"
import Price from "./routes/Price"

interface IRouterProps {
}

function Router({}:IRouterProps) {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Coins/>} ></Route>
            <Route path="/:coinId/*" element={<Coin/>}></Route>
            <Route path="chart" element={<Chart coinId={''} isDark={false} />} />
            <Route path="price" element={<Price />} />
        </Routes>
    </BrowserRouter>
}

export default Router
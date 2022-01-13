import { BrowserRouter ,Route} from 'react-router-dom';
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"

function Router( ) {
    return <BrowserRouter>
        <Route>
            <Route path="/:coinID" element={<Coins/>}></Route>
        </Route>
    </BrowserRouter>
}

export default Router
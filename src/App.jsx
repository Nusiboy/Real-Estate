import Layout from "./Layout";
import NoMatch from "./NoMatchSite";
import HouseInfo from "./HouseInfo";
import HouseTablet from "./HouseTablet";
import HomePage from "./HomePage";
import FavoriteEstates from "./FavoriteEstates";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="HouseTablet" element={<HouseTablet />} />
          <Route path="FavoriteEstates" element={<FavoriteEstates />} />
          <Route path="HouseInfo" element={<HouseInfo />} />
          <Route path="HouseInfo/:id" element={<HouseInfo />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

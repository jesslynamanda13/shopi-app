import LandingImages from "../components/LandingImages";
import LandingText from "../components/LandingText";
import Navbar from "../components/Navbar";
import ProductsComponent from "../components/ProductComponents";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="landing-page flex flex-col bg-slate-950 justify-center items-center p-12">
                <LandingText/>
                <LandingImages/>
            </div>
            <div className="flex flex-col bg-white justify-center items-center p-12">
                <ProductsComponent/>
            </div>
        </div>
    );
}

export default Home;
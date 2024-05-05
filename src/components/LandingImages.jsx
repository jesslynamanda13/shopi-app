import Gambar1 from '../assets/asset1.png';
import Gambar2 from '../assets/asset2.png';
import Gambar3 from '../assets/asset3.png';
import Gambar4 from '../assets/asset4.png';
import ImageCard from './ImageCard';
const LandingImages = () =>{
    return (
        <div className="flex flex-row gap-8 py-12">
            <ImageCard image={Gambar1}/>
            <ImageCard image={Gambar2}/>
            <ImageCard image={Gambar3}/>
            <ImageCard image={Gambar4}/>
        </div>
    );
};

export default LandingImages;
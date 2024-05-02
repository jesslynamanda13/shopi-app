import Asset1 from '../assets/asset1.png';
import Asset2 from '../assets/asset2.png';
import Asset3 from '../assets/asset3.png';
import Asset4 from '../assets/asset4.png';
import ImageCard from './ImageCard';
const LandingImages = () =>{
    return (
        <div className="flex flex-row gap-8 py-12">
            <ImageCard image={Asset1}/>
            <ImageCard image={Asset2}/>
            <ImageCard image={Asset3}/>
            <ImageCard image={Asset4}/>
        </div>
    );
};

export default LandingImages;
const ImageCard = ({ image }) => {
    return(
        <div className="images">
            <img src={image} width="200" height="auto" alt="ImageOfProduct"/>
        </div>
    )
}

export default ImageCard;
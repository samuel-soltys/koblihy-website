const InfoBlock = (({
    headline,
    text,
    img,
    button
} : {
    headline: string;
    text: string;
    img?: string;
    button?: string;
}) => {
    return(
        <div className="infoblock">
            <div className="text">
            <h2>{headline}</h2>
            <p>{text}</p>
            </div>
            <img src="img-placeholder.svg" alt={headline} />
        </div>
    )
})

export default InfoBlock;
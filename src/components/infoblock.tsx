const InfoBlock = ({
    headline,
    text,
    img,
    button,
}: {
    headline: string;
    text: string;
    img?: string;
    button?: JSX.IntrinsicElements["a"];
}) => {
    return (
        <div className="infoblock">
            <div className="text">
                <h2>{headline}</h2>
                <p>{text}</p>
                { button != null ? <>{button}</> : <></> }
            </div>
            <img src="img-placeholder.svg" alt={headline} />
        </div>
    );
};

export default InfoBlock;
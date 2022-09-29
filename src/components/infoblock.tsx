import { ReactElement } from "react";

const InfoBlock = ({
    headline,
    text,
    img,
    button,
}: {
    headline: string;
    text: ReactElement;
    img?: string;
    button?: JSX.IntrinsicElements["a"];
}) => {
    return (
        <div className="infoblock">
            <div className="text">
                <h2>{headline}</h2>
                {text}
                { button != null ? <>{button}</> : <></> }
            </div>
            { img != null ? <img src={img} alt={headline} /> : <img src="img-placeholder.svg" />}
        </div>
    );
};

export default InfoBlock;
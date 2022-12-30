function Card(props) {
    const { title, text } = props;
    let cardInnerContent = null;

    if (title && text) {
        cardInnerContent = <>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
        </>;
    } else if (title) {
        cardInnerContent = <h4 className="card-title">{title}</h4>;
    } else if (text) {
        cardInnerContent = <p className="card-text">{text}</p>;
    } else {
        return true;
    }


    return (
        <div className="card">
            <div className="card-body">
                {cardInnerContent}
            </div>
        </div>
    );
}

export default Card;
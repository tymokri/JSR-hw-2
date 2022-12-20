function Card(props) {
    const { title, text } = props;

    if (title && text) {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        );
    } else if (!text && title) {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                </div>
            </div>
        );
    } else if (text && !title) {
        return (
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        );
    } else {
        return true;
    }
}

export default Card;
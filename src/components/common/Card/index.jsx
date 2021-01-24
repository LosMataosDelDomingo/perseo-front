import "./card.sass";

export const Card = () => {
    return (
        <div className="ecard">
            <div className="face face1">
                <div className="content">
                    <img src="static/img/html.png" alt="test" />
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}
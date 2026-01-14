import "./eventCard.css";

export function EventCard({name, image, date, location, price}) {
    
    return (
        <article className="eventCard">
            <div className="eventCard_imageWrapper">
                <img src={image} alt="Event image"></img>
            </div>
            <div className="eventCard_body">
                <h3 className="eventCard_name">{name}</h3>
                <p className="eventCard_date">{date}</p>
                <p className="eventCard_location">{location}</p>
                <p className="eventCard_price">{price === 0? 'Free': `starts with ${price}€`}</p>
            </div>
        </article>
    )
}
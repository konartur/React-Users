import Title from './Title'
import Adress from './Adress'
import Geo from './Geo'

function CardItem() {
    return (
        <div className="card-item">
            <Title />
            <Adress />
            <Geo />
        </div>
    )
}

export default CardItem;
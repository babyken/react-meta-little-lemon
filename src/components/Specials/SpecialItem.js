import './Special.css'

const SpecialItem = ({title, price, thumbnail, description}) => {
    return (
        <div className='col'>
            <img className='thumbnail' src={thumbnail} alt={title}/>
            <div className='details-container'>
                <div className='row'>
                    <h4>{title}</h4>
                    <p className='float-right price'>${price}</p>
                </div>
                <p>{description}</p>
                <p className='order-text'>Order a delivery</p>
            </div>
        </div>
    )
}

export default SpecialItem
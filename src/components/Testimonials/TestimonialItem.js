import './Testimonials.css'

const TestimonialItem = ({name, rating, review}) => {
    return (
        <div className="col">
            <div>
                <div className='profile'>
                    <img src="https://i.pravatar.cc/300" alt="reviewer avatar"/>
                    <p>{name}</p>
                </div>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default TestimonialItem;
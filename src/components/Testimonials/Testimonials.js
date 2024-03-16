import TestimonialItem from "./TestimonialItem"
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        rating: 3,
        review: 'Best restaurant ever'
    },
    {
        id: 2,
        name: 'John Doe',
        rating: 3,
        review: 'Best restaurant'
    },
    {
        id: 3,
        name: 'John Doe',
        rating: 3,
        review: 'Best restaurant'
    },
    {
        id: 4,
        name: 'John Doe',
        rating: 3,
        review: 'Best restaurant'
    }
]


const Testimonials = () => {
    const list = testimonials.map(({id, ...rest}) => {
        return <TestimonialItem key={id} {...rest} />
    })

    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="row">
                {list}
            </div>
        </section>
    )
}

export default Testimonials;
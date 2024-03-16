import Button from '../Button'
import SpecialItem from './SpecialItem'

import GreekSaladImg from '../../assets/img/greek_salad.jpg'
import BruchettaImg from '../../assets/img/bruchetta.svg'
import LemonDesert from '../../assets/img/lemon_dessert.jpg'

const items = [
    {
        key: 'greek_salad',
        thumbnail: GreekSaladImg,
        title: 'Greek salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        key: 'bruchetta',
        thumbnail: BruchettaImg,
        title: 'Bruchetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
        key: 'lemon_dessert',
        thumbnail: LemonDesert,
        title: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
]

const Specials = () => {
    const itemList = items.map(({key, ...rest}) => {
        return <SpecialItem key={key} {...rest}/>
    })

    return (
        <section className='specials'>
            <div className='row'>
                <h1>This weeks specials</h1>
                <Button className="float-right">Online Menu</Button>
            </div>
            <div className='special-item row'>
                {itemList}
            </div>
        </section>
    );
}

export default Specials
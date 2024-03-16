import Button from '../Button'
import HeroImg from '../../assets/img/hero_img.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='row'>
                <div className='col info-box'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <div className='details'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential</p>
                    </div>
                    <div className='btn-container'>
                        <Button>Reserve Table</Button>
                    </div>
                </div>
                <div className='col'>
                    <img src={HeroImg} alt="4 pieces of bread"/>
                </div>
            </div>

        </section>
    );

}

export default Hero;
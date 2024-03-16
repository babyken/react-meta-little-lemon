import "./Footer.css"
import { menuItems } from "../Header/Navbar"
import Logo from  '../../assets/img/Logo.svg'


const contacts = [
    '78952 Kassulke Track, Lake Louisland, MI 94435-2328',
    '+1(234)121-5678',
    'contact@littlelemon.com'
]

const sns = [
    'Twitter',
    'Instagram',
    'Facebook'
]

const Footer = () => {
    const navList = menuItems.map((item,index) => {
        return <a href="#" key={index}>{item.title}</a>
    })

    const contactList = (
        <>
        <p>78952 Kassulke Track, Lake Louisland, MI 94435-2328</p>
        <p>+1(234)121-5678</p>
        <a href="mailto:contact@littlelemon.com">Email</a>
        </>
    )

    const snsList = sns.map((s, i) => {
        return <a key={i} href="#">{s}</a>
    })    

    return (
        <footer className="footer">
            <section>
                <div className="row">
                    <div className="col">
                        <img src={Logo} alt="restaurant logo" />
                    </div>
                    <div className="col">
                        {navList}
                    </div>
                    <div className="col">
                        {contactList}
                    </div>
                    <div className="col">
                        {snsList}
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
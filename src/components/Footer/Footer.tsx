import './Footer.css'

function Footer() {
    return (
        <footer className="bg-stone-400 text-white text-center p-4 m-0">
            <p className="text-stone-100">© {new Date().getFullYear()} Chase Smith's Portfolio</p>
        </footer>
    )
}

export default Footer;
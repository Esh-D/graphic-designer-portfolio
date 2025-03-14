import './Contact.css'

function Contact() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[url(https://images.unsplash.com/photo-1654892968823-ea564870a96f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <div className="bg-white p-8 rounded">
                <h1 className="text-3xl text-stone-600 font-bold">Let's Connect</h1>
                <p className="mt-2 text-lg text-stone-500">Have a project in mind? I'd love to collaborate!</p>
                <p className="mt-6 text-stone-500 flex flex-row gap-2"><p className="cursor-pointer">✉️ jimdoe123@gmail.com</p> | <p className="cursor-pointer">🔗 LinkedIn</p> | <p className="cursor-pointer">🔗 Dribbble</p> | <p className="cursor-pointer">🔗 Behance</p></p>
            </div>
        </section>
    )
}

{/* <p className="mt-2 text-stone-500">📧 jimdoe123@gmail.com | 🔗 LinkedIn | 🎨 Dribbble | 🖼️ Behance</p> */}


export default Contact
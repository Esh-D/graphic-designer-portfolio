import './About.css'

function About() {
    return (
        <section className="h-screen flex flex-row justify-center items-center text-center">
            <img className="w-2/3" src="https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="graphic designer workspace stock photo" />      
            <div className="flex flex-col justify-center p-10 gap-2 align-center">
                <h1 className="text-xl text-stone-600 font-bold text-left">About</h1>
                <p className="text-md mt-5 text-stone-500 text-left mb-18">I'm Chase Smith, a graphic designer with a keen eye for detail and a passion for creativity.
                With 2 years of experience, I specialize in branding, UI/UX design, and illustration.</p>
            </div>
        </section>

        // <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        //     <h1 className="text-3xl font-bold">About Me</h1>
        //     <p className="max-w-lg mt-4 text-lg">
        //         I'm [Your Name], a graphic designer with a keen eye for detail and a passion for creativity.
        //         With [X years] of experience, I specialize in branding, UI/UX design, and illustration.
        //     </p>
        // </section>
    )
}

export default About
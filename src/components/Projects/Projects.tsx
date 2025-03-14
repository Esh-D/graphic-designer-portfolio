import './Projects.css'

function Projects() {
    const projects = [
        { id: 1, title: "Design 1", image: "https://images.unsplash.com/photo-1654892968823-ea564870a96f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 2, title: "Design 2", image: "https://images.unsplash.com/photo-1647456063448-5a8282521b1d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, title: "Design 3", image: "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, title: "Design 3", image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 5, title: "Design 3", image: "https://images.unsplash.com/photo-1651164653564-d60a729c33c4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, title: "Design 3", image: "https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 7, title: "Design 3", image: "https://images.unsplash.com/photo-1647456063448-5a8282521b1d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 8, title: "Design 1", image: "https://images.unsplash.com/photo-1650402256020-528eec4d58a6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 9, title: "Design 2", image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 10, title: "Design 3", image: "https://images.unsplash.com/photo-1654892968823-ea564870a96f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 11, title: "Design 3", image: "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 12, title: "Design 3", image: "https://images.unsplash.com/photo-1602607878796-baf56d8dfc8a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 13, title: "Design 3", image: "https://images.unsplash.com/photo-1651164653564-d60a729c33c4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 14, title: "Design 3", image: "https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    ];

    return (
        <section className="min-h-screen p-8 flex flex-col justify-around">
            <h1 className="text-3xl text-stone-600 font-bold text-center mb-16 mt-14">Portfolio</h1>
            <div className="grid md:grid-cols-6 gap-6">
                {projects.map((project) => (
                <div key={project.id} className="rounded-sm hover:shadow-xl transition">
                    <img src={project.image} alt={project.title} className="rounded-lg w-full h-64 object-cover cursor-pointer" />
                    {/* <h2 className="mt-2 text-lg font-semibold">{project.title}</h2> */}
                </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
import { Link } from "react-router";

const Home = () => (
  <section className="h-screen flex flex-row justify-center items-center text-center">
    <img className="w-2/3" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="graphic designer workspace stock photo" />      
    <div className="flex flex-col justify-center p-10 gap-2 align-center">
      <h1 className="text-xl text-stone-600 font-bold text-left">Graphic Designer</h1>
      <h2 className="text-xl mt-1 text-stone-500 text-left">Chase Smith</h2>
      <p className="text-md mt-5 text-stone-500 text-left">A Passionate Graphic Designer Specializing in Modern & Minimalist Design.</p>
      <Link to="/portfolio" className="mt-3 mb-5 px-6 py-2 bg-stone-100 rounded-md hover:bg-stone-200 w-1/2">
        <h2 className="text-stone-500 hover:bg-grey">View My Work</h2>
      </Link>
    </div>
  </section>
);

export default Home;

/* 👋*/
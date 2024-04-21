import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero"
import Signup from "./sections/Signup"
import OtherServices from "./sections/OtherServices"


export default function Home() {
  return (
    <main className=''>
     <section>
      <Navbar />
     </section>
     <section>
      <Hero /> 
     </section>
     <section>
      <Signup />  
     </section>
     <section>
      <OtherServices /> 
     </section>
    </main>
  );
}

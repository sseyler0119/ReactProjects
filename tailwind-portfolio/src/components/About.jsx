import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20 ' id='about'>
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} alt="about image" className='w-full h-64' />
            <article>
                <SectionTitle text='about me' />
                <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta minima vitae, molestias 
                    culpa sequi tempora. Sit labore quas porro nemo adipisci, fugit accusamus perspiciatis 
                    nesciunt quia iste laudantium ipsa fuga!
                </p>
            </article>
        </div>
    </section>
  )
}
export default About
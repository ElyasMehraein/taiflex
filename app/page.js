import Image from 'next/image'
import InteractiveART from "@/public/images/Interactive-ART.png"
import HeaderImage from "@/public/images/header-img.svg"

export default function Home() {
  return (
    <header>
      <div className="container ">
        <section className='flex pt-6 justify-between '>
          <nav className='flex items-center'>
            <div className='h-max w-max mr-4'>
              <Image
                src={InteractiveART}
                alt="logo"
              />
            </div>
            <ul className='flex text-sky-950  ' >
              <li className='px-6'><a href="#">Home</a></li>
              <li className='px-6'><a href="#">About</a></li>
              <li className='px-6'><a href="#">How it works</a></li>
              <li className='px-6'><a href="#">Clients</a></li>
              <li className='px-6'><a href="#">Portfolio</a></li>
            </ul>
            <div>
            </div>
          </nav>
          <a className='bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg' href="#">
            Contact us
          </a>
        </section>
        <section>
          <div className='flex items-center mt-24'>
            <div className='basis-1/2 pr-40'>
              <h1 className='text-2xl font-medium'>Lorem ipsum dolor sit amet.</h1>
              <p className='py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum eius reiciendis fugit quo sed, necessitatibus sit. Modi, fugiat dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem ex laboriosam minima temporibus qui dignissimos similique sed, aliquid amet.</p>
              <div className='flex'>
                <a className=' w-40 text-center bg-green-400  hover:bg-green-600 px-6 py-3 text-white rounded-lg mr-6' href="#">Contact us</a>
                <a className='w-40 text-center block bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg mr-6' href="#">See our works</a>


              </div>
            </div>

            <div>
              <Image
                src={HeaderImage}
                alt="header image"
              />
            </div>
          </div>
        </section>
      </div>
    </header>




  )
}

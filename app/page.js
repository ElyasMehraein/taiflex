import Image from 'next/image'
import InteractiveART from "@/public/images/Interactive-ART.png"

export default function Home() {
  return (
    // <main className=" flex min-h-screen flex-col items-center justify-between p-24">
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

      </div>
    </header>




    // </main>
  )
}

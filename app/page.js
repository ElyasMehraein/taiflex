import Image from 'next/image'
import InteractiveART from "@/public/images/Interactive-ART.png"
import HeaderImage from "@/public/images/header-img.svg"
import MainImage from "@/public/images/main-img.svg"
import person1 from "@/public/images/person-1.png"
import person2 from "@/public/images/person-2.png"
import person3 from "@/public/images/person-3.png"
import Comments from './Comments'
import company1 from "@/public/images/logo-1.svg"
import company2 from "@/public/images/logo-2.svg"
import company3 from "@/public/images/logo-3.svg"
import company4 from "@/public/images/logo-4.svg"
import company5 from "@/public/images/logo-5.svg"
import portfolio1 from "@/public/images/portfolio-1.jpg"
import portfolio2 from "@/public/images/portfolio-2.jpg"
import portfolio3 from "@/public/images/portfolio-3.jpg"
import portfolio4 from "@/public/images/portfolio-4.jpg"
import portfolio5 from "@/public/images/portfolio-5.jpg"
import portfolio6 from "@/public/images/portfolio-6.jpg"
import arrow from "@/public/images/right-arrow.svg"


export default function Home() {
  return (
    <>
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
            <a className='invisible bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg lg:visible' href="#">
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
      <main>
        <div className='container mx-auto'>
          <section className='mx-auto text-center m-5 px-20'>

            <p className='text-xl m-4'>Lorem ipsum dolor sit.</p>
            <h2 className='text-2xl font-bold mb-12'>Lorem ipsum dolor adipisicing elit. Nisi, dolore!</h2>
            <div className='flex '>
              <div>
                <h5 className='text-xl font-medium'>Lorem ipsum dolor sit.</h5>
                <p className='m-4 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente cupiditate doloribus.</p>
              </div>
              <div>
                <h5 className='text-xl font-medium'>Lorem ipsum dolor sit.</h5>
                <p className='m-4 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente cupiditate doloribus.</p>
              </div>
              <div>
                <h5 className='text-xl font-medium'>Lorem ipsum dolor sit.</h5>
                <p className='m-4 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente cupiditate doloribus.</p>
              </div>

            </div>
            <div className='mx-auto max-w-lg m-20'>
              <Image className='mx-auto w-full' src={MainImage} alt="header image" />
            </div>
          </section>
        </div>
      </main>
      <section className=' bg-blue-600'>
        <div className="container max-w-6xl">
          <div className='mx-auto  max-w-3xl p-2' >
            <h2 className='text-2xl  text-white text-center font-bold  mb-6'>You’re in a good hand</h2>
            <p className='text-white  text-center m-4'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
          <div className="flex flex-wrap justify-center ">
            <Comments props={person1} />
            <Comments props={person2} />
            <Comments props={person3} />
          </div>
          <companies className="flex py-10  justify-between flex-wrap">
            <Image className='mx-auto px-4 min-w-36' src={company1} alt="company logo" />
            <Image className='mx-auto  px-4 min-w-36' src={company2} alt="company logo" />
            <Image className='mx-auto  px-4 min-w-36' src={company3} alt="company logo" />
            <Image className='mx-auto  px-4 min-w-36' src={company4} alt="company logo" />
            <Image className='mx-auto px-4  min-w-36' src={company5} alt="company logo" />
          </companies>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='mx-auto  max-w-3xl p-2' >
            <p className='  text-center m-4'> portfolio </p>
            <h2 className='text-2xl   text-center font-bold  mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
          <div className='flex flex-wrap justify-center '>

            <Image className='m-3  ' src={portfolio1} alt="company logo" />
            <Image className='m-3  ' src={portfolio2} alt="company logo" />
            <Image className='m-3  ' src={portfolio3} alt="company logo" />
            <Image className='m-3  ' src={portfolio4} alt="company logo" />
            <Image className='m-3  ' src={portfolio5} alt="company logo" />
            <Image className='m-3  ' src={portfolio6} alt="company logo" />
          </div>
        </div>
      </section >
      <section className='h-60 flex  items-center bg-blue-600'>
        <div className='container'>
          <div className='flex justify-around items-center'>
            <p className='text-white '> There are many of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <div className='flex items-center w-60 h-9 justify-between rounded-sm bg-white'>
              <p className='ml-2'>Email address</p>
              <a href="" className='w-7 h-7 p-1 mr-1 flex justify-center items-center rounded-sm bg-blue-600 '>
                <Image className='p-1 ' src={arrow} alt="company logo" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <ja className="h-40 block">

      </ja>
    </>



  )
}

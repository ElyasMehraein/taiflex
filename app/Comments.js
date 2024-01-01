import Image from 'next/image'
import React from 'react'

function Comments({props}) {
    return (
        <div>
            <comment className=" h-64 flex flex-col justify-between rounded-lg bg-white  m-4">
                <div className='m-4  '>
                    <p className='font-serif font-extralight text-zinc-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptas ullam eaque id quibusdam dicta necessitatibus suscipit, doloremque asperiores eligendi.</p>
                </div>
                <div className='flex items-center border-t'>
                    <Image className='my-3 mx-4' src={props} alt="logo" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </comment>
        </div>
    )
}

export default Comments

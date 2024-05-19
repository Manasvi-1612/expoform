import React from 'react'
import { EventForm } from '@/components/shared/EventForm'
import Dropfiles from '@/components/shared/Dropfiles'
interface IHomeProps { }


export const Home: React.FunctionComponent<IHomeProps> = () => {

  return (
    <section className="h-full bg-white md:bg-neutral-200">

      <div className='flex flex-col items-center'>
        <EventForm />
        <Dropfiles />
      </div>
    </section>
  )
}

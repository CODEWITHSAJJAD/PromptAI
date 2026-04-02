import React from 'react'
import HomeHero from '@/components/sections/home/HomeHero'
import OurPromise from '@/components/sections/home/OurPromise'
import WhyDifferent from '@/components/sections/home/WhyDifferent'
import Clients from '@/components/sections/home/Clients'
import { PortableText } from '@portabletext/react'

interface SectionProps {
  type: string
  title?: string
  subtitle?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[] 
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
  animation?: string
}

const SectionRenderer = ({ sections }: { sections: SectionProps[] }) => {
  if (!sections) return null

  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <HomeHero key={index} {...section} />
          case 'text':
            return (
              <section key={index} className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                  {section.title && <h2 className="text-4xl font-bold mb-8">{section.title}</h2>}
                  <div className="prose prose-lg">
                    <PortableText value={section.content} />
                  </div>
                </div>
              </section>
            )
          case 'servicesList':
            return <WhyDifferent key={index} {...section} />
          case 'ourPromise':
            return <OurPromise key={index} {...section} />
          case 'clients':
            return <Clients key={index} {...section} />
          default:
            return (
              <div key={index} className="py-10 text-center border-b italic text-gray-400">
                Unknown section type: {section.type}
              </div>
            )
        }
      })}
    </>
  )
}

export default SectionRenderer

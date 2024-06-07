"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import ContactPage from "./contact/page";
import Link from "next/link";

const Homepage = () => {

    const containerRef = useRef()
    
    const techRef = useRef()
    const techInView = useInView(techRef, {once: true, margin:"-100px"})

    const features = [
      {
          imageSrc: '/pray_ico.png',
          title: 'Intencje',
          description: 'Dodawaj intencje, aby otrzymywać wsparcie modlitewne od użytkowników. Oznaczaj intencje, w których się modlisz, wspierając w ten sposób innych.'
      },
      {
          imageSrc: '/eucharist_ico.png',
          title: 'Adoracja',
          description: 'Znajdź miejsca adoracji Najświętszego Sakramentu we Wrocławiu, aby móc oddawać cześć Bogu i modlić się w ciszy i skupieniu.'
      },
      {
          imageSrc: '/confession_ico.png',
          title: 'Spowiedź',
          description: 'Zlokalizuj miejsca, gdzie funkcjonuje tzw. stały konfesjonał we Wrocławiu, aby móc skorzystać z sakramentu pokuty poza czasem nabożeństw.'
      }
  ];

    

  return <motion.div className="h-full" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.3, duration: 1}} ref={containerRef}>
    <div className='h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* IMAGE CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src='/apps.webp' alt='' fill className='object-contain' />
    </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center md:items-start justify-center'>
      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-semibold text-center md:text-left text-black'>Wsparcie modlitewne<br/>w zasięgu ręki</h1>
        {/* BUTTONS */}
        <div className='w-full flex flex-col md:flex-row gap-8 items-center'>
        <Link href='https://apps.apple.com/pl/app/oremus-m%C3%B3dlmy-si%C4%99-wsp%C3%B3lnie/id6504049418?l=pl' target="new"><Image src='/appstore.svg' alt='' width={200} height={90} className='object-contain' /></Link>
        <Link href='https://play.google.com/store/apps/details?id=com.bartoszduleba.oremus&pcampaignid=web_share' target="new"><Image src='/googleplay.svg' alt='' width={200} height={90} className='object-contain' /></Link>
        </div>
    </div>
  </div>
  <div className="min-h-screen bg-black" >
  <div id="functions" className="min-h-screen py-20 sm:px-8 md:px-12 lg:px-20 xl:px-48" ref={techRef}>
    <motion.div initial={{x:'-200vh'}} animate={techInView ? {x:0} : {}} transition={{delay: 0.3, duration: 1}} className="w-full h-full px-4">
    <div className="text-white py-10 w-full"><h1 className="text-4xl md:text-6xl font-semibold">O aplikacji</h1>
    <p className="text-white leading-9 text-xl py-12">"OREMUS Módlmy się wspólnie" to aplikacja, która ułatwia doświadczenie wartości modlitwy wspólnotowej. 
    W&nbsp;świecie pełnym wyzwań i&nbsp;trosk, codzienna modlitwa staje się nie tylko źródłem siły, ale również okazją do&nbsp;budowania wspólnoty. 
    Dzięki aplikacji możesz dzielić się swoimi intencjami modlitewnymi, wspierać innych w&nbsp;ich potrzebach modlitewnych i&nbsp;odkrywać spokój na&nbsp;modlitwie. 
    Dołącz do sieci modlitewnej i&nbsp;poczuj, jak modlitwa może przynieść pocieszenie, nadzieję i&nbsp;jedność w&nbsp;naszym codziennym życiu.
            </p>
    </div>
    <div className="flex flex-col md:flex-row gap-12">
    {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl py-8 px-8 min-h-1/3 w-full md:w-1/3 flex flex-col items-center justify-center text-start">
                <div className="w-full h-1/4 flex justify-center">
                    <Image src={feature.imageSrc} alt=''  width={70} height={70} className="object-contain"/>
                </div>
                <div className="flex flex-col items-center py-2 h-1/4 w-full">
                    <h1 className="text-black text-4xl px-3 py-5 text-center font-medium">{feature.title}</h1>
                </div>
                <div className="w-full h-1/2">
                    <p className="text-black leading-6 text-sm py-3">{feature.description}</p>
                </div>
            </div>
        ))}
</div>

                      </motion.div>      
            </div>
  </div>
  <ContactPage></ContactPage>
  </motion.div>
};

export default Homepage;

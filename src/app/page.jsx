import Image from "next/image";

const Homepage = () => {
  return <div className='h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* IMAGE CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src='/apps.webp' alt='' fill className='object-contain' />
    </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-bold text-white'>Aplikacje mobilne i strony internetowe dla parafii</h1>

      {/* DESC */}
      <p className='text-white md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        {/* BUTTONS */}
        <div className='w-full flex gap-4'>
          <button className="p-4 rounded-lg ring-1 ring-gray-600 text-white bg-gray-600">Zobacz więcej</button>
          <button className="p-4 rounded-lg ring-1 ring-white text-white">Napisz do mnie</button>
        </div>
    </div>
  </div>
};

export default Homepage;

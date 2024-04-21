const Signup = () =>{
    return(
    <section className='bg-custom-bg text-white w-100 py-28 my-24 text-center'>
       <div className='max-w-screen-md m-auto max-sm:p-8'>
         <h2 className='text-7xl font-semibold max-sm:text-5xl leading-[77px]'>Готови ли сте да <br /> работим заедно?</h2>
            <p className='px-24 py-8 tracking-wider max-sm:text-sm'>
                 Оставете вашият телефон и ние ще се свържем с вас, за да <br /> отговорим на всички въпроси
             </p>
             <div className='flex items-center justify-center'>
                <div className='relative'>
                    <img
                    src="./mail.png"
                    alt="mail"
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 opacity-60'
                    width={16}
                    height={16}
                    />
                    <input
                    type="text"
                    placeholder='Мобилен телефон'
                    className='pl-12 pr-4 py-4 bg-white border-2 rounded-l-lg outline-none text-black'
                    />
                </div>
                <button className="px-8 py-4 bg-customColor text-black rounded-r-lg border-2 font-bold bg-custom-button">
                    Изпрати
                </button>
                </div>
          </div>
    </section>
    );
}



export default Signup;

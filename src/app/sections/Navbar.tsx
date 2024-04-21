

const Navbar = () =>{
    return(
        <nav className="realative container mx-auto p-8 ">
          <div className='flex items-center justify-between'>
            <h3 className='p-2 font-bold text-custom-text text-4xl'>
              Website
            </h3>
            <div className='text-custom-text space-x-8 ml-16 items-center text-xl hidden md:flex'>
              <a href="" className=' transition-transform duration-300 hover:scale-110 hover:text-red-500 '>Начало</a>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>За нас</a>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>Услуги</a>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>Цени</a>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>Как работи</a>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>Контакти</a>
            </div>
            <div className='text-custom-text space-x-4 p-4 text-xl items-center hidden md:flex'>
              <a href="" className='transition-transform duration-300 hover:scale-110 hover:text-red-500'>Профил</a>
              <button className='transition-transform duration-300 hover:scale-110 hover:text-red-500 border-2 border-black p-3 m;-1 rounded-lg'>Заявка за пратка </button>
            </div>
          </div>
          
      </nav>
  );
};
export default Navbar;

const OtherServices = () =>{
    return(
       <div className='p-4 m-4'>
        <h3 className='font-bold text-custom-text text-4xl sm:text-4xl ml-8 pl-10 font-space-gr'>Други услуги</h3>
        <div className='flex flex-wrap sm:flex-row flex-col items-center justify-evenly pt-8 pb-8 gap-8'>
            <img src="./other.png" alt="" className='w-full sm:w-auto transition-transform duration-300 hover:scale-110'/>
            <img src="./other2.png" alt="" className='w-full sm:w-auto transition-transform duration-300 hover:scale-110' />
            <img src="other3.png" alt="" className='w-full sm:w-auto transition-transform duration-300 hover:scale-110' />
        </div>
       </div>
    );
}



export default OtherServices;

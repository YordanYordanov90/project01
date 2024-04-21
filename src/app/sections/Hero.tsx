const Hero = () => {
    return (
        <div>
            <div className='flex justify-center container mx-auto p-6'>
                    <h1 className='text-center text-custom-text font-bold max-w-[100%] text-5xl lg:max-w-lg truncate-3-lines'>Гъвкави решения за сухопътен транспорт за всеки клиент</h1>
            </div>
            <div>
                <img className='mx-auto w-8/12 h-full my-12' src="./hero-img.png" alt="hero-img"  />
            </div>
            <div className='w-full px-6 sm:w-6/12 mx-auto text-left'>
                <h3 className='font-bold text-custom-text text-4xl sm:text-4xl mb-10 mt-20 font-space-gr'>Решения</h3>
                <p className='m-3 text-custom-text'>
                    Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании. 
                </p>
                <p className='m-3 text-custom-text'>
                     Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.  
                </p>
                <ul className='text-custom-text list-disc m-7 space-x-1  '>
                    <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
                    <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари</li>
                    <li>Взимане на стоки и доставки за от и в България</li>
                    <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи</li>
                    <li>Регулярни групажни линии</li>
                    <li>Транспортни услуги до Турция и Близкия изток</li>
                    <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
                </ul>
                <h3 className='font-bold text-custom-text text-4xl sm:text-4xl mb-10 mt-20 font-space-gr'>Предимства</h3>
                <p className='m-3 text-custom-text'>
                Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
                </p>
                <p className='m-3 text-custom-text'>Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.</p>
            </div>
       </div>
        
       


    );
}

export default Hero;

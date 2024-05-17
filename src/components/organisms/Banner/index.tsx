

import IconButton from '@components/atoms/IconButton';
import './styles.scss'
import NoSound from '@assets/svg/no-sound.svg';
import Film from '@assets/svg/film.svg';
import ChevronsDown from '@assets/svg/chevrons-down.svg';

const Banner = () => {
    const textTitle = 'Welcome to the \n Play Matters Interactive Lookbook'
    return (
        <section id='banner'>
            <div className='banner'>
                <div className='welcome'>
                    <h1> {textTitle} </h1>
                    <div>
                        <IconButton icon={NoSound} onClick={() => {}} size='large'/>
                        <IconButton icon={Film} onClick={() => {}}/>
                    </div>
                </div>
                <div className='scroll-down'>
                    <p> Scroll down</p>
                    <img src={ChevronsDown}/>
                </div>
            </div>
            <h1 className='titleMobile'> {textTitle} </h1>
        </section>
    )   
}

export default Banner;
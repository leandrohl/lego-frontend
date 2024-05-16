

import './styles.scss'
import data from '../../../data/home'
import Card from '../../molecules/Card'
import { useWindowSize } from '../../../hooks/useWindowSize';

const ListCards = () => {
    const { widthScreen } = useWindowSize();
    
    let isImageRight = false;
    const itemsToRender = widthScreen <= 768 
        ? Object.values(data).slice(0, 3) 
        : Object.values(data);

    return (
        <main className='list-cards' >
            {itemsToRender.map((category) => {
                return (
                    <section className='category' id={category.id} key={category.id}>
                        <div className='category-header'>
                            <h4>{category.name}</h4>
                            {window.innerWidth >= 768 && <p className='description'>{category.description}</p>}
                        </div>
                        <div className='item' style={{ borderColor: category.borderColor }}>
                            {window.innerWidth <= 768 && <p className='description'>{category.description}</p>}
                            {category.items.map((item, index) => {
                                isImageRight = !isImageRight; 
                                return (
                                    <Card
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        type={isImageRight ? 'primary' : 'secondary'}
                                        viewDetails={() => {}}
                                    />
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </main>
    )   
}

export default ListCards;
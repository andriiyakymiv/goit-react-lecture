import s from './ColorPicker.module.css';
import colors from '../../assets/colors';
import { useState } from 'react';

export const ColorPicker = () => {

    const [currentColor, setCurentColor] = useState('white');

    return (
        <section style={{backgroundColor: currentColor}} className={s.bgWrapper}>
            <div className={s.pallette}>
                <h3>Curent Color: {currentColor}</h3>
                <ul className={s.list}>
                    {colors.map(item => (
                        <li onClick={()=> setCurentColor(item.color)} className={s.item} key={item.id}>
                            {item.color}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
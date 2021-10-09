import '../App.scss';
import { useChangeColor } from '../hooks/useChangeColor';

export function BoxColor(){
    const color = useChangeColor()
    return (
        <div className='box-color__item' style={{backgroundColor:color}}>
            Auto Change Color
        </div>
    )
}

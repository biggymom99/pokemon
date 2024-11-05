import {useSelector} from "react-redux"
import { Card } from "../component/Card"


export default function Main(){
    const pokemonData = useSelector(state => state.pokemon.data)
    return(
        /**main이라는 className으로 tailwind 속성 주기*/
        <>
            {pokemonData.map(el => (<Card key={el.id} pokemon={el}/>))}
        </>
    )
}


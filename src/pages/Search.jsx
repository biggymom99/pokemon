import { useSearchParams } from "react-router-dom"
import {getRegExp} from "korean-regexp"
import { useSelector } from "react-redux"
import { selectPokemonByRegExp } from "../RTK/selector"

export default function Search(){   

    const [searchParams] = useSearchParams()
    const param = searchParams.get('pokemon')
    const reg = getRegExp(param)

    const pokemon = useSelector(selectPokemonByRegExp(reg))
    console.log(pokemon)
    return(<div>Search</div>)
}
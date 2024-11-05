import styled from "styled-components"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const CardContainer = styled.section`
    width:150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    padding-bottom: 10px;
    border-radius: 10px;

    img{
        width:120px;
    }
    `

export const Card = ({pokemon}) =>{
    const navigate = useNavigate()
    return(
        <CardContainer onClick={()=> navigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.front}/>
            <div>{pokemon.name}</div>
        </CardContainer>
    )
};

Card.propTypes = {
    pokemon: PropTypes.shape({
      front: PropTypes.string.isRequired, // front 속성은 필수 문자열
      name: PropTypes.string.isRequired,  // name 속성은 필수 문자열
    }).isRequired,
  };
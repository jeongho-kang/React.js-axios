import React from 'react'
import { NavLink } from 'react-router-dom'
import styled  from 'styled-components'


const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비즈니스'
    },
    {
        name:'entertainment',
        text:'엔터테인먼트'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    }
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width:768px;
    margin:0 auto;
    @media screen and (max-width: 768px){
        width:100%;
        overflow-x: auto;
    }
`

const Category= styled(NavLink)`
    font-size:1.125 rem;
    cursor:pointer;
    white-space: pre;
    text-decoration: none;
    color : inherit;
    padding-bottom:0.25rem;

    &:hover {
        color: #495057;
    }


    // 2) URL 파라미터를 통해 category 값을 관리하는 방법
    &.active {
        font-weight: 600;
        border-bottom : 2px solid #22b8cf;
        color : #22b8cf;
        &:hover {
            color: #3bc0db;
        }
    }
    &+& {
        margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                // 1) useState로 카테고리를 관리하는 방법
                /* <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
                    {c.text}</Category> */
                    // 2) URL 파라미터를 통해 category를 관리하는 방법
                    <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name ==='all'}
                    to={c.name === 'all' ? '/' : `${c.name}`}>
                         {c.text} </Category>

            ))}
        </CategoriesBlock>
    )
}

/* 1) useState로 카테로기를 관리하는 방법
    ${(props) =>
        props.active && css`
        font-weight: 600;
        border-bottom : 2px solid #22b8cf;
        color: #22b8cf;
        &: hover {
            color : #3bc9db;
        }`
    }
    */

export default Categories;
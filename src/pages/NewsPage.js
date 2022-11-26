import React from 'react'
import Categories from '../Components/Categories'
import NewsList from '../Components/NewsList'


const NewsPage = ({match}) => {
    // category가 선택되지 않으면 기본 값 사용
    const category = match.params.category || 'all'

    return (
        <>
        <Categories />
        <NewsList category={category} />
        </>
    )
}

export default NewsPage;
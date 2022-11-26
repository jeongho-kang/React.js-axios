import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;
    @media screen and ( max-width: 768px){
        width:100%;
        padding-left: 1rem;
        padding-right: 1rem;
    } 
`

const NewsList = ({category}) => {
   const [articles, setArticles] = useState(null);
   const [loading,setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData=async() => {
            setLoading(true)
            try {
                const query = category === 'all' ? '':`&category=${category}`
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ca0f1d0bed04438fb9f0f7d1600e828d`)
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [category]) // category 값이 바뀔떄마다 뉴스를 불러와야 하기 떄문에 useEffect의 의존배열에 넣어준다
// 대기중일 때
if(loading) {
    return <NewsListBlock>대기중...</NewsListBlock>
}
// 아직 articles 값이 설정되지 않았을 떄
if(!articles) {
    return null;
}
// articles 값이 유효할 때
return (
    <NewsListBlock>
        {articles.map((article) => (
            <NewsItem key = {setArticles.url} article={article} />
        ))}
    </NewsListBlock>
)
}

export default NewsList
    
import React from 'react'
import styled from 'styled-components'


const NewsItemBlock = styled.div`
    display: flex;

.thumbnail {
    margin-right: 1rem;
    img {
        display: block;
        width: 160px;
        height: 100px;
        object-fit: cover;
    }
}
.contents {
    h2 {
        margin:0;
        a{
            color:black;
        }
    }
    p{
        margin:0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }
}
&+& {
    margin-top: 3rem;
}
`;

const NewsItem = ({article}) => { // article 이라는 props를 통째로 받아와서 사용한다.
    const {title,description,url,urlToImage} = article
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url} target="_blank" rel='noopener noreferrer'>
                        {/* target=_blank를 사용하게 되면 새창으로 브라우저가 만들어진다
                        여기서 보안 취약점이 생기는데 noopener랑 noreferrer을 쓴다
                        noopener은 링크된 페이지에서 window.opener을 사용해서 링크를 건 페이지를
                        참조할 수 없게 된다. 더불어 링크된 페이지와 링크를 건 페이지는 별개의 프로세스로
                        취급하기 떄문에 서로 연결되어 퍼포먼스가 떨어지는 일도 없게 된다
                        noreferrer를 지정하면 다른 페이지로 이동할 떄, 링크를 건 페이지의 주소 등의
                        정보를 브라우저가 referer http헤더로 송신하지 않는다. */}
                    <img src = {urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents" >
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;

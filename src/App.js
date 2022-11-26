import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react'
//import Categories from './Components/Categories';
//import NewsList from './Components/NewsList'
import NewsPage from './pages/NewsPage';
//import axios from 'axios'

const App = () => {
  // 1) useState로 카테고리를 관리하는 방법
  /* const [category,setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])
  return (
  <>
    <Categories category={category} onSelect={onSelect} />
  <NewsList category={category} />
  </>
  ) */

  // 2) React Router를 통해 category를 관리하는 방법
  return (
    <Router>
        <Route path="/:category?" component={NewsPage} />
    </Router>

  )
  
  // /:category? 와 같은 형태로 맨 뒤에 물음표 문자가 들어가 있는건
  // category 값이 선택적이라는 의미이다. category url 파라미터가 없으면
  // 전체를 선택한것으로 간주한다.
}


export default App;

/*
ca0f1d0bed04438fb9f0f7d1600e828d
*/

/*
const App = () => {
  const [data,setData] = useState(null)
  const onClick = async () => {
    try {
    const response= await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ca0f1d0bed04438fb9f0f7d1600e828d')
      setData(response.data)
    }
    catch(e) {
      console.log(e)
    }
    }
  
  

return(
  <div>
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
    {data&&<textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
  </div>
)
}

*/ 
import React from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  const books = [
    {
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    },{
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    },{
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    },{
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    }
  ]
  const bookList = () => {
    return (
        <div 
          style={{ display: 'flex' }}
          >
          { books.map(book => (      
            <>   
              <img src={ book.image } />
              <h3>{ book.title }</h3>
              <h4>{ book.subTitle }</h4>
              <h5>{ book.author }지음</h5>
            </>
          ))}
        </div>
    )
  }

  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/reading'>Reading</Link>
      <Link to='/wishlist'>Wish List</Link>
      <Link to='/done'>Done</Link>
      <Switch>
        <Route exact path="/">
          홈
          {bookList()}
        </Route>
        <Route exact path="/reading">
          읽고 있는 책
        </Route>
        <Route exact path="/wishlist">
          읽고 싶은 책
        </Route>
        <Route exact path="/done">
          읽은 책
        </Route>
      </Switch>
    </Router>
  )
}

export default App

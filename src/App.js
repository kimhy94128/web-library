import React from 'react'

function App() {
  const books = [
    {
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    }, {
      title: '미라클모닝',
      subTitle: '당신의 하루를 바꾸는 기적 아침 6분이면 충분하다',
      image: 'http://image.kyobobook.co.kr/images/book/large/110/l9791157841110.jpg',
      author: '할 엘로드'
    }
  ]

  return (
    <div>
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

export default App

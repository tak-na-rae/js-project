import "./App.css";
import Library from "./chapter01/Library";
import MyComponents from "./MyComponents";
import State from "./chapter01/State";
import { useState } from 'react';

function App() {
  const name = "narae";

  // let post = "안산 맛집";
  let [post,setPost] = useState(["안산 맛집", "강남 맛집", "종로 맛집"]);
  // let [cnt, setCnt] = useState(0);
  let [modal, setModal] = useState(false);

  let [like, setLike] = useState(Array(post.length).fill(0));
  const setPostLike = (target, newLikes)=> {
    setLike(prevLikes => {
      const newLikeArr = [...prevLikes];
      newLikeArr[target] = newLikes;
      return newLikeArr;
    })
  }

  let [input,setInput] = useState("");

  return (
    <>
      <div className="App">
        <div className="displaynone">
          {/* src 소스코드 public 이미지(안 나오는 경우  있음) */}
          <h1>{name} 안녕</h1>
            <h2>자바스크립트는 {} 안에 넣어서 사용해</h2>
            { name === "narae" ? <h3>narae true</h3> : <h3>narae false</h3> }
            { name === "narae" && <h3>true일때만 사용(&&)</h3> }

            <Library></Library>
        </div>
        <div className="displaynone">
          <MyComponents name="react" age={20}/>
          <State/>
        </div>

        <div className="black-nav"> {/* Ctrl+i div생성 */}
          <h3>블로그를 만들어보자</h3>
        </div>
        {/* <div className="list">
          <h4 onClick={ ()=>{setModal(!modal)} }
          style={{color:"#222", fontSize:"18px", fontWeight:"400"}}>{post[0]}
            <span style={{color:"red", cursor:"pointer"}} onClick={ ()=>{setCnt(cnt + 1)} }> ❤ {cnt}</span>
            </h4>
          <h4>글 제목</h4>
          <p>2024-12-11</p>
        </div>
        <div className="list">
          <h4 style={{color:"#222", fontSize:"18px", fontWeight:"400"}}>{post[1]}</h4>
          <h4>글 제목</h4>
          <p>2024-12-10</p>
        </div>
        <div className="list">
          <h4 style={{color:"#222", fontSize:"18px", fontWeight:"400"}}>{post[2]}</h4>
          <h4>글 제목</h4>
          <p>2024-12-09</p>
        </div> */}

       <div className="add_bx">
         <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value); console.log(e.target.value) }} />
         <button onClick={()=>{
           let copy = [...post];
           copy.unshift(input);
           setPost(copy)
         }}>추가</button>
       </div>

        {
          post.map(function(el,idx){ return(
            <div className="list" key={idx}> {/* 반복해서 생성되는 태그한테는 key값 필요 */}
              <h4 onClick={ ()=>{setModal(!modal)} }
              style={{color:"#222", fontSize:"18px", fontWeight:"400"}}>{idx + 1} {el} {/* {el} 또는 {post[idx]} 사용가능 */}
              
                <span onClick={ (e)=>{ e.stopPropagation(); setPostLike(idx, like[idx]+1)} }
                style={{color:"red", cursor:"pointer"}}> ❤ {like[idx]}</span>

              </h4>
              {/* <h4>{like[idx]}</h4> */}
              <p>2024-12-11</p>
              <button onClick={()=>{
                let copy = [...post];
                copy.splice(idx, 1);
                setPost(copy);
              }}>삭제</button>
            </div>
            )
          })
        }

        { modal == true ? <Modal/> : null }

      </div>
    </>
  );

  function Modal(){
    return(
      <div className="modal">
        <h2>글제목1</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    )
  }

}

export default App;

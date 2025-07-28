import './App.css';
import{useEffect, useState,useffect} from 'react';
import React from 'react';
import Prism from "prismjs";
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css"
import axios from 'axios';
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx"



function App(){

  const [count,setCount] = useState(0)
  const[code , setCode] = useState(`function sum(){
              return 1+1 
              }`)
  const [reviewResult,setReviewResult] = useState("");            


  useEffect(()=>{
    Prism.highlightAll()
  })

   async function reviewCode(){
    try{
    const response =  await axios.post('http://localhost:5000/ai/get-review',{code})
    setReviewResult(response.data);
    console.log(response.data)
    }
    catch{
    console.log(err)
    }

  }

  return(
    <>
    <main>
    <div className="left">
      <div className="code">
        <Editor value={code} 
        onValueChange={code => setCode(code)}
        highlight={code=>Prism.highlight(code,Prism.languages.javascript,"javascript")}
        padding={10}
        style={{
          fontFamily:'"Fira code","Fira Mono",monospace',
          fontSize:16,
          border:"1px solod white",
          borderRadius:"5px",
          height:"100%",
          width:"100%"
        }}/>
      </div>
      <div  onClick={reviewCode} className="review">Review</div>
    </div>
    <div className="right">
    
       <Markdown rehypePlugins={[rehypeHighlight]}>{reviewResult}</Markdown>
     
    </div>
    </main>
    </>
  ) 
}

function sum(){
  return 1+1
}


export default App 
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';

const Article = (props) => {

    
  const [title,setTitle]=useState('');
  const [article,setArticle]=useState('');
  const [price,setPrice]=useState('');
  const [authorname,setAuthorname]=useState('');
  const [articleImage,setArticleImage]=useState('');

  useEffect(()=>{

    axios.get(`/articles/${props.match.params.id}`)
    .then(res=>[
        setTitle(res.data.title),
        setArticle(res.data.article),
        setPrice(res.data.price),
        setAuthorname(res.data.authorname),
    ])
    .catch(error=>console.log(error))
  },[props])
  

  return (
    <ArticleContainer>

<h2>{title}</h2>
<p>{article}</p>
<h2>{price}</h2>
<p>{authorname}</p>

    </ArticleContainer>
  )
}

export default Article

const ArticleContainer=styled.div`
margin: 6rem auto;
padding: 3rem 14rem;

h2{
    text-align: center;
    font-weight: 900;
    color: var(--dark-green)
}
`;


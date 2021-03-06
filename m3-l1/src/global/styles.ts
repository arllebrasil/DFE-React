import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root{
    --color1:orangered;
}

.main{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
}

.main > h1,.search,.list{
    margin: 12px 0px;
}

.main h1{
    color: var(--color1);
}

.search {
    width:100%;
    max-width: 560px;
    display: flex;
    justify-content: center;
    
    
}

.search input, button{
    height: 2.8em;
    box-shadow: 0 0 50px rgba(245, 245, 245, 0.25) ;
}

.search input{
    position: relative;
    flex: 3;
    padding: 1.0em;
    border-radius: 2.8em 0 0 2.8em;
    border: 1px solid var(--color1);
}

.search input:focus{
    outline: none;
}

.search input::placeholder{
    color: rgba(255, 68, 0, 0.747);
}

.search button{
    flex: 1;
    border-radius: 0 2.8em 2.8em 0;
    border: none;
    font-weight: bold;
    color: white;
    background-color:var(--color1) ;
    border: 1px solid var(--color1);
}

.list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.list ul{ 
    width: 100%;
    max-width: 560px;
}

.list ul li{ 
    width: 100%;
    margin: 8px 0;
    list-style: none;
}

.item{
    width: 100%;
    padding: 1.1em;
    border-radius: 4px;
    color: white;
    background-color: slateblue;
    box-shadow: 0 0 60px rgba(255, 166, 0, 0.15);
}

.item span{
    margin-right: 8px;
    font-weight: bold;
}
.item span i{
    margin: 0 4px;
}

.item a{
    color: tomato;
    font-weight: bold;
}


`;

export default GlobalStyle;
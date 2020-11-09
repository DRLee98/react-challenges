import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        //background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
        min-height: 100vh;
        background-image: linear-gradient(217deg, #1ac0c6, #fb7756 70%),
        linear-gradient(127deg, #facd60, #e74645 70.71%),
        linear-gradient(336deg, #fb7756, #fdfa66 70.71%);
    }
    @keyframes rotate {
      from {
        transform: rotate(0)
      }
      to {
        transform: rotate(360deg)
      }
    }
    @keyframes colorFull {
      0% {
        background-image: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
      }
      10% {
        background-image: linear-gradient(217deg, #9ad3bc, #f3eac2 70%),
        linear-gradient(127deg, #f3eac2, #f5b461 70.71%),
        linear-gradient(336deg, #f5b461, #ec524b 70.71%);
      } 
      20%{
        background-image: linear-gradient(217deg, #81e9e6, #122c91 70%),
        linear-gradient(127deg, #fefcbf, #48d6d2 70.71%),
        linear-gradient(336deg, #2a6fdb, #2a6fdb 70.71%);
      }
      30%{
        background-image: linear-gradient(217deg, #1ac0c6, #fb7756 70%),
        linear-gradient(127deg, #facd60, #e74645 70.71%),
        linear-gradient(336deg, #fb7756, #fdfa66 70.71%);
      }
      40%{
      }
      50%{
      }
      60%{
        background-image: linear-gradient(217deg, #141E30, #243B55 70%),
        linear-gradient(127deg, #F00000, #DC281E 70.71%),
        linear-gradient(336deg, #FD746C, #2C3E50 70.71%);
      }
      70%{
        background-image: linear-gradient(217deg, #2C3E50, #4CA1AF 70%),
        linear-gradient(127deg, #e96443, #904e95 70.71%),
        linear-gradient(336deg, #F56217, #0B486B 70.71%);
      }
      80%{
        background-image: linear-gradient(217deg, #3a7bd5, #3a6073 70%),
        linear-gradient(127deg, #00d2ff, #928DAB 70.71%),
        linear-gradient(336deg, #f44336, #2196f3 70.71%);
      }
      90%{
        background-image: linear-gradient(217deg, #FF5F6D, #FFC371 70%),
        linear-gradient(127deg, #ff4b1f, #ff9068 70.71%),
        linear-gradient(336deg, #16BFFD, #CB3066 70.71%);
      }
      100%{
        background-image: linear-gradient(217deg, #EECDA3, #EF629F 70%),
        linear-gradient(127deg, #1D4350, #A43931 70.71%),
        linear-gradient(336deg, #f7ff00, #db36a4 70.71%);
      }
    }
`;

export default globalStyles;

import {css} from '@emotion/react'
import Header from '../../front/src/assets/img/Header.png'
import Style from '../../front/src/assets/img/Style.svg'

export const Styled = css`
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }
  .MuiInput-underline:before{
    border-bottom: solid 2px #fff;
  }
  body {
    line-height:1;
  }

  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
    display:block;
  }

  nav ul {
    list-style:none;
  }

  blockquote, q {
    quotes:none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content:'';
    content:none;
  }

  a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }

  /* change colours to suit your needs */
  ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
  }

  /* change colours to suit your needs */
  mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
  }

  table {
    border-collapse:collapse;
    border-spacing:0;
  }

  /* change border colour to suit your needs */
  hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
  }

  input, select {
    vertical-align:middle;
  }
  
  
  
  
   * {
   box-sizing: border-box;
 }
 body {
   font-family: "Source Sans Pro", sans-serif;
   font-size: 15px;
   line-height: 24px;
 }
 a {
   text-decoration: none;
   color: inherit;
 }
 li{
     list-style: none;
 }

.header {
  background-image: url(${Header});
  max-height: 850px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
 .container {
   max-width: 1200px;
   margin-left: auto;
   margin-right: auto;
   padding-left: 15px;
   padding-right: 15px;
 }
.header__option {
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}
.logo {
  max-width: 232px;
}
.menu__list {
  display: flex;
}
.menu__list li + li {
  padding-left: 55px;
}
.header__contact {
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 43px;
  border-radius: 20px;
  transition: all 0.3s;
}
.header__contact:hover {
  background-color: #fff;
  color: #250f8a;
}
.menu__list a {
  opacity: 0.5;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s;
}
.menu__list a:hover {
  opacity: 1;
}
.header-slider {
  padding-top: 111px;
}
.header-slider__item-content {
  display: flex;
  justify-content: space-between;
}
.header-slider__item-info {
  max-width: 506px;
  font-size: 35px;
  line-height: 60px;
  color: #fff;
  margin-bottom: 16px;
}
.header-slider__item-description {
  font-weight: normal;
  font-size: 24px;
  line-height: 55px;
  margin-bottom: 50px;
}
.portfolio {
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  background: #ffca00;
  border-radius: 25px;
  color: #250f8a;
  padding: 10px 56px;
  margin-bottom: 65px;
}
.portfolio:hover{
    background: #f8df7a;

}
.header-slider__item-title {
  margin-top: 65px;
  font-weight: bold;
  font-size: 24px;
  line-height: 55px;
  padding-left: 30px;
}
input {
  width: 566px;
  height: 46px;
  background-color: #fff;
  border-radius: 25px;
  border-style: none;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 4px 25px;
}
input::placeholder {
  color: #250f8a;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
}
.input{
    text-align: center;
}
button {
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  border-radius: 25px;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  padding: 10px 56px;
  margin-bottom: 65px;
  transition: all 0.3s;
}
button:hover {
  background-color: #fff;
  color: #250f8a;
  cursor: pointer;
}
.header-slider__item-images {
}
.works{
    background-repeat: no-repeat;
    //padding: 55px 0 93px;
    background-image: url(${Style});
    background-position: left center;
    position: relative;
}

.works__title{
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
line-height: 45px;
color:#202020;
font-weight: bold;
margin-bottom: 100px;
}
.works__list{
    text-align: center;
}
.work__item{
    text-align: center;
    width: 800px;
    height: 900px;
    border: 2px solid #250f8a;
    border-radius: 25px;
    margin-bottom: 40px;
    display: inline-block;
}
.work__img{
    margin-top: 40px;
    margin-bottom: 40px;
}
.work__title{
    font-weight: normal;
  font-size: 24px;
  line-height: 55px;
  margin-bottom: 50px;
}
.footer{
    height: 100px;
    background-color: #1372c0;
}
.footer__contacts{
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    font-weight: normal;
  font-size: 24px;
  line-height: 55px;
  margin-bottom: 50px;
  color:#fff;
 }
`

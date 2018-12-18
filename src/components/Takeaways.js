import React from 'react';
import {
  WordsWrapper,
  BigWords,
  MediumWords,
  LittlerWords,
  Quote,
  A,
} from './styles.js';

export default function Takeaways() {
  return (
    <div>
      <WordsWrapper>
        <BigWords>Get cozy with pseudo classes</BigWords>
        <MediumWords>Don't be shy, there are lots</MediumWords>
        <LittlerWords>hover, before, after, not</LittlerWords>
        <LittlerWords>first/last-child, nth-child, first/last-of-type</LittlerWords>
        <LittlerWords>visited, active, focus, blur, checked</LittlerWords>
        <LittlerWords>root - check out index.css to see how you can use 'root' to store variables in css</LittlerWords>
        <LittlerWords>This is not an inclusive list, <A href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">but this is</A></LittlerWords>
      </WordsWrapper>
      <WordsWrapper>
        <BigWords>Use Styled Components</BigWords>
        <MediumWords>Keeping your styles organized within your components is good. The ability to change your styles by passing in props is better.</MediumWords>
        <LittlerWords>The syntax is just like CSS (no more camelCase!)</LittlerWords>
        <LittlerWords>Styled components ARE components</LittlerWords>
        <LittlerWords>You can change styles by passing props to your styled component</LittlerWords>
        <LittlerWords>Styled components are used throughout this site, take a gander! Better yet, check out<A href="https://www.styled-components.com/"> the docs here</A></LittlerWords>
      </WordsWrapper>
      <WordsWrapper>
        <BigWords>Learn to Tweeeeeeen</BigWords>
        <MediumWords>GreenSock's GSAP animation libraries are incredibly powerful, easy to learn, and broadly supported.</MediumWords>
        <LittlerWords>Start with TweenMax or TweenLite to get an idea of how you can put CSS and javascript together to dynamically animate DOM elements</LittlerWords>
        <LittlerWords>You can even use TweenMax to create parallax effects</LittlerWords>
        <LittlerWords>Move on to TimelineMax or TimelineLite to chain your animations together</LittlerWords>
        <LittlerWords><A href="https://greensock.com/get-started-js">Get started here</A></LittlerWords>
        <LittlerWords><A href="https://greensock.com/docs">Dig in to the docs</A></LittlerWords>
        <LittlerWords><A href="https://greensock.com/docs/Easing">Visualize easing methods</A></LittlerWords>
      </WordsWrapper>
      <WordsWrapper>
        <BigWords>Goodbye setInterval, Hello Request Animation Frame</BigWords>
        <MediumWords>Learning how to efficiently and predictably run animations in the browser becomes more and more important as your animations get more complex.</MediumWords>
        <LittlerWords>RequestAnimationFrame is a great tool to help optimize browser performance</LittlerWords>
        <LittlerWords>The <A href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">MDN docs</A> give you the basics, though they are not wholly informative on how or why you should use RequestAnimationFrame.</LittlerWords>
        <LittlerWords>Here's an older post but better <A href="http://creativejs.com/resources/requestanimationframe/index.html">introduction to RequestAnimationFrame</A></LittlerWords>
        <LittlerWords>And a more <A href="https://medium.com/@bdc/gain-motion-superpowers-with-requestanimationframe-ecc6d5b0d9a4">in-depth example</A></LittlerWords>
      </WordsWrapper>
      <WordsWrapper>
        <BigWords>Draw on the Canvas</BigWords>
        <MediumWords>The real fun happens with SVG's. If you're unfamiliar with canvas elements (svg, g, line, rectangle, animate, etc.), get in there and learn.</MediumWords>
        <LittlerWords>Here's a cool example of an <A href="http://www.kevinyaun.com/">animated logo</A> connected to the scroll wheel</LittlerWords>
        <LittlerWords><A href="http://www.pixijs.com/">Pixi.js</A> is an incredible library. Built for gaming, Pixi renders to WebGL, so it's blazing fast in the browser. You can load canvas elements, images, videos, and even text into Pixi 'sprites' to start dynamically putting a whole bunch of stuff on screen.</LittlerWords>
        <LittlerWords>What's WebGL? If you're really interested in animation, you should <A href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">familiarize yourself with WebGL</A></LittlerWords>
        <Quote>WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins.</Quote>
      </WordsWrapper>
    </div>
  );
}
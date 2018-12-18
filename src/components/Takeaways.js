import React from 'react';
import {
  WordsWrapper,
  BigWords,
  MediumWords,
  LittlerWords,
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
        <LittlerWords>root - check out index.css to see how you can 'root' to store variables in css</LittlerWords>
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
        <LittlerWords>Move on to TimelineMax or TimelineLite to chain your animations together</LittlerWords>
        <LittlerWords><A href="https://greensock.com/get-started-js">Get started here</A></LittlerWords>
        <LittlerWords><A href="https://greensock.com/docs">Dig in to the docs</A></LittlerWords>
        <LittlerWords><A href="https://greensock.com/docs/Easing">Visualize easing methods</A></LittlerWords>
      </WordsWrapper>
    </div>
  );
}
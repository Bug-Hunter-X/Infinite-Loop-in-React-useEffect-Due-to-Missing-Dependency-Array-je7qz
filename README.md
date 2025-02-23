# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrect usage of the `useEffect` hook.  The `useEffect` hook is used to perform side effects, such as data fetching or DOM manipulations, after a component renders. However, if it's used incorrectly, it can lead to unexpected behavior, including infinite loops.

## The Bug

The bug is in `bug.js`. The `useEffect` hook attempts to update the `count` state within itself without specifying a dependency array. This triggers a re-render, which in turn triggers the `useEffect` again, leading to an infinite render cycle.

## The Solution

The solution is in `bugSolution.js`.  The correct way to use `useEffect` is to specify a dependency array. If you want the effect to run only once after the initial render, you can pass an empty dependency array (`[]`). If you want it to run after every render, you should list all relevant state variables as dependencies.
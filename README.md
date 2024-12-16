# React Native Dimensions.get('window') returns undefined on Android

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` returns `undefined` on Android, leading to crashes or unexpected behavior.  The solution uses a state variable and `useEffect` hook to handle asynchronous loading of dimensions.

## Bug Description
The `Dimensions` API in React Native isn't always immediately available.  Accessing `width` or `height` properties from `Dimensions.get('window')` before the dimensions are loaded results in an error because `undefined` is returned.

## Solution
The solution implemented uses the `useEffect` hook to track screen changes and sets the dimensions in a state variable. This approach ensures the dimensions are correctly fetched and handled before any operations are performed that depend on them.  It also handles potential orientation changes gracefully.
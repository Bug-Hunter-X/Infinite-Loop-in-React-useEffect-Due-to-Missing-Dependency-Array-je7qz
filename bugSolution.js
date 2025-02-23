```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Effect runs only once after initial render
    // setCount(count + 1);
  }, []);

  //Alternative correct logic: Effect runs after each state change
  useEffect(() => {
    console.log("Count updated", count);
  }, [count]);

  return <div>Count: {count}</div>;
}
```
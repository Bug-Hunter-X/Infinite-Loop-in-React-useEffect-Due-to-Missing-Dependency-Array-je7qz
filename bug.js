```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting state inside useEffect without dependency array
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```
export default function MyComponent(props) {
  let total = 0;
  // Making sure that the allowlist from the base config is extended, not overridden
  for (let i = 0; i < 10; i++) {
    total += i;
  }

  return (
    <div>
      <a href="https://example.com/" target="_blank" rel="noreferrer noopener">
        External link {total} ({props.test})
      </a>
    </div>
  );
}

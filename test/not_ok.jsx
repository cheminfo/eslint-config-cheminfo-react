import React, { useEffect, useState } from 'react';

export default function MyComponent(props) {
  props.x = 42; // Mutating props is not allowed by React compiler.
  const [value] = useState('');
  useEffect(() => value, []);
  return (
    <div>
      <a href="https://example.com/" target="_blank">
        External link
      </a>
    </div>
  );
}

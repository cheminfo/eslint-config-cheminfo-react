import React, { useEffect, useState } from 'react';

export default function MyComponent() {
  const [value] = useState('');
  useEffect(() => value, []);
  // useEffect(() => {}, []);
  return <div>Hello world</div>;
}

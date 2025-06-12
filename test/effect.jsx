import { useEffect, useState } from 'react';

export default function MyComponent(props) {
  const [, setValue] = useState(0);
  useEffect(() => setValue(props.value), [props.value]);
  return <div>Hello world</div>;
}

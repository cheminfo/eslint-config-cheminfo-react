interface MyComponentProps {
  a: number;
  b: number;
}

export default function MyComponent(props: MyComponentProps) {
  return <div>b is {props.b}</div>;
}

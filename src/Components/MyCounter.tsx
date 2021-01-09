import React, { useState, useEffect } from "react";
import axios from "axios";
interface MyCounterProps {
  prop: {
    description: string;
    counter: number;
  };
}

export interface RootObject {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const MyCounter: React.FC<MyCounterProps> = ({ prop }) => {
  const [count, setCount] = useState(prop.counter);
  const [post, setPost] = useState<RootObject>();

  useEffect(() => {
    const callasinc = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos/" + prop.description)
        .then((data) => {
          //   console.log(data.data);
          setPost(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    callasinc();
  }, [prop.description]);
  return (
    <div>
      <p>
        {prop.description} count: {prop.counter}
      </p>
      {post?.title}
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

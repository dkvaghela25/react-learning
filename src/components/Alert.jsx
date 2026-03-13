import { useEffect, useState } from "react";

const Parent = () => {
  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(10);
  return (
    <>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
    <br />
    <br />
      <Child num1={Number(num1)} num2={Number(num2)} />
    </>
  );
};

export default Parent;

const Child = ({ num1, num2 }) => {

  useEffect(() => {
    if ((num1 + num2) % 2 === 0) {
      alert(num1 + num2)
    }
  }, [num1, num2])

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae harum assumenda saepe iure dolorem, possimus ullam nostrum maiores ipsa magnam tempora consequuntur maxime. Ad, aut. Blanditiis nesciunt optio soluta, sed atque dolorem tenetur nihil repudiandae obcaecati amet quisquam quae et eos reiciendis, reprehenderit repellat asperiores inventore ea, a nam? Deleniti nostrum laboriosam ratione reiciendis, aliquid voluptatum ut vitae obcaecati odit ipsam doloremque placeat aliquam temporibus cumque unde. Sapiente enim labore accusantium quos officiis, reprehenderit aspernatur atque ab laudantium blanditiis nisi ipsa nobis consequatur ratione nesciunt, ipsum asperiores eaque aliquid ut. Quasi ipsum nam itaque odio repellendus labore incidunt iste quas quis. Minus, similique aperiam voluptatibus quia recusandae atque! Non quis aliquam assumenda modi nisi rerum natus, corporis veniam facere dolore aperiam reiciendis.
    </>
  );
};

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const DragAndDrop = () => {

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pear"];
  const [cartItems, setCartItems] = useState(["Test"])

  const addItemToCart = (e) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== "cart-droppable" || !newItem) return;
    setCartItems(prev => ([...prev, newItem]))
  }

  return (
    <DndContext onDragEnd={addItemToCart}>
      <main className="flex flex-col gap-4 items-center w-full">
        <h1>Implementation of drag and drop dnd-kit</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold" >Fruit List</h2>
          <ul className="flex gap-2">
            {fruits.map((fruit) => (
              <FruitDraggable key={fruit}>{fruit}</FruitDraggable>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold" >My Cart</h2>
          <CartDroppable items={cartItems} />
        </div>
      </main>
    </DndContext>
  );
};

export default DragAndDrop;

const CartDroppable = ({ items }) => {

  const { setNodeRef } = useDroppable({
    id: "cart-droppable"
  })

  return (
    <ul className=" border rounded-2xl w-[50vw] py-20 flex gap-5 justify-center" ref={setNodeRef}>
      {items.map((item, index) => (
        <li className="px-4 py-1 rounded-xl border w-fit" key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}

const FruitDraggable = ({ children }) => {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children,
    data: { title: children }
  })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="px-4 py-1 rounded-xl border hover:cursor-grab"
    >
      {children}
    </div >
  )
}
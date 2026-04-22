import { DndContext, DragOverlay, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";

const DndDragOverlay = () => {

    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pear"];
    const [cartItems, setCartItems] = useState(["Test"])
    const [activeId, setActiveId] = useState(null);

    const addItemToCart = (e) => {
        const newItem = e.active.data.current?.title;
        if (e.over?.id !== "cart-droppable" || !newItem) return;
        setCartItems(prev => ([...prev, newItem]))
        setActiveId(null);
    }

    const handleClick = (newItem) => {
        setCartItems(prev => ([...prev, newItem]))
    }

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    console.log(activeId)

    return (
        <DndContext sensors={sensors} onDragStart={(e) => setActiveId(e.active.id)} onDragEnd={addItemToCart}>
            <main className="flex flex-col gap-4 items-center w-full">
                <h1>Implementation of drag and drop dnd-kit</h1>
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-extrabold" >Fruit List</h2>
                    <ul className="flex gap-2">
                        {fruits.map((fruit) => (
                            <FruitDraggable key={fruit} onClick={() => handleClick(fruit)}>{fruit}</FruitDraggable>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-extrabold" >My Cart</h2>
                    <CartDroppable items={cartItems} />
                </div>
            </main>

            <DragOverlay dropAnimation={null}>
                {activeId ? (
                    <div className="px-4 py-1 rounded-xl bg-red-500 border shadow-xl cursor-grabbing">
                        {activeId}
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

export default DndDragOverlay;

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

const FruitDraggable = ({ children, onClick }) => {

    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: children,
        data: { title: children }
    })

    return (
        <div
            onClick={onClick}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={`px-4 py-1 rounded-xl border cursor-move  ${isDragging ? "opacity-30" : "opacity-100"}`}
        >
            {children}
        </div >
    )
}
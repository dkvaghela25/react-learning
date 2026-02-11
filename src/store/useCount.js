import { create } from "zustand";

const countStore = (set) => ({
    count: 0,
    increase: () => set((state => ({ count: state.count + 1 }))),
    decrease: () => set((state => ({ count: state.count - 1 }))),
    reset: () => set((state => ({ count: 0 }))),
})

const useCount = create(countStore)

export default useCount;
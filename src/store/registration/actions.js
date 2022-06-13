import { initialState } from './state'

export const resetStore = set => () => set({ ...initialState })

export const setUser = set => newUser => set({ user: newUser })

export const setAddress = set => newAddress => set({ address: newAddress })

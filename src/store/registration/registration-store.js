import create from 'zustand'
import { persist } from 'zustand/middleware'
import { resetStore, setUser, setAddress } from './actions'
import { initialState } from './state'

const REGISTRATION_KEY = '@example/registration-storage'

const registrationStoreWithPersist = persist(
  (set, get) => ({
    ...initialState,
    resetStore: resetStore(set),
    setUser: setUser(set, get),
    setAddress: setAddress(set, get)
  }),
  {
    name: REGISTRATION_KEY
  }
)

export const useRegistrationStore = create(registrationStoreWithPersist)

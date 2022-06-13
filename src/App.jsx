import { useRegistrationStore } from './store/registration'

export default function App() {
  return (
    <div className="container">
      <CallActions />
      <Details />
    </div>
  )
}

const CallActions = () => {
  const resetStore = useRegistrationStore(state => state.resetStore)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={resetStore}>reset store</button>

      <AddUserData />
      <AddAddressData />
    </div>
  )
}

const AddUserData = () => {
  const setUser = useRegistrationStore(state => state.setUser)

  const handleSetDummyUserData = () => {
    setUser({
      firstName: 'John',
      lastName: 'DOe',
      email: 'johndoe@gmail.com',
      emailRetype: 'johndoe@gmail.com',
      phoneNumber: '999999999',
      password: '122312312',
      agreeToTerms: true
    })
  }

  return (
    <button onClick={handleSetDummyUserData}>set dummy data to user</button>
  )
}

const AddAddressData = () => {
  const setAddress = useRegistrationStore(state => state.setAddress)

  const handleSetDummyAddressData = () => {
    setAddress({
      lat: '12.3456',
      lng: '12.3456',
      bedrooms: '2',
      baths: '2',
      partialBaths: '1',
      squareFootage: '200',
      floors: '2',
      yearBuilt: '2000',
      pool: 'yes',
      coveredParking: 'yes',
      garageSpaces: '2'
    })
  }

  return (
    <button onClick={handleSetDummyAddressData}>
      set dummy data to address
    </button>
  )
}

const Details = () => {
  return (
    <>
      <UserDetails />

      <AddressDetails />
    </>
  )
}

const UserDetails = () => {
  const user = useRegistrationStore(state => state.user)

  return (
    <div style={{ width: '400px' }}>
      user: <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

const AddressDetails = () => {
  const address = useRegistrationStore(state => state.address)

  return (
    <div style={{ width: '400px' }}>
      address: <pre>{JSON.stringify(address, null, 2)}</pre>
    </div>
  )
}

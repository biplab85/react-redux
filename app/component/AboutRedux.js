import React from 'react'

export const AboutRedux = () => {
    return (
        <div className='mb-20 w-full border-b border-[#1d2532]'>
            <div className='container m-auto'>
                <p className='text-[#919fb5] mb-5'>
                    React Redux is the official library used to connect Redux, a
                    state management tool, with React applications. Redux helps manage
                    application state in a predictable and centralized way, making it
                    easier to debug and scale your app. React Redux provides essential
                    tools like useSelector to access the Redux store and useDispatch to
                    send actions to modify the state.</p>
                <p className='text-[#919fb5] mb-5'>
                    In a typical React Redux setup, the global state is stored in a
                    Redux store, and slices are used to organize different pieces of that state.
                    Each slice contains actions and reducers to handle specific logic,
                    such as increasing a counter or handling authentication. With the help of Redux
                    Toolkit, creating these slices and managing the store becomes much simpler
                    and cleaner.</p>
                <p className='text-[#919fb5] mb-5'>
                    To use Redux in a React app, you wrap your root component with a
                    Provider and pass in the store. Then, inside any component, you can
                    read data using useSelector and update it using useDispatch.
                    This separation of concerns makes state changes easier to trace
                    and improves maintainability—especially in large applications
                    where passing props manually becomes messy.</p>
            </div>
        </div>
    )
}

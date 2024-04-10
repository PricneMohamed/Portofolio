import React from 'react'
import Banner from '../__components/Cart/Banner'
import Tables from '../__components/Cart/Tables'
export const metadata = {
  title: "Cart",
  description: "Welcome in Cart Section",
};
export default function Cart() {
  return (
    <div className='Cart'>
      <Banner />
      <Tables />
    </div>
  )
}

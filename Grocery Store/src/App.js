
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Ren from './render';
import CartList from './cartlist';
import Cat from './cat_sec';
import Payment from './payment';
import FormValidation from './checkout';
import First from './first';

export default function App() {
  return (

<BrowserRouter>
<Routes>
<Route  exact path='/' element={<First/>}/>
<Route  exact path='/home' element={<Cat/>}/>
<Route  exact path='/gotohome' element={<Cat/>}/>

<Route  path='/mainpage/home' element={<Cat/>}/>

<Route  path='/cartlist' element={<CartList/>}/>
<Route  path='/goto/payment/paymentgateway' element={<Payment/>}/>
<Route  path='/checkout' element={<FormValidation/>}/>
</Routes>
    </BrowserRouter>

  );
}

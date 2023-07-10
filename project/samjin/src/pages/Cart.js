import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeYear, deleteItem, addCount, subCount } from './store';

export default function Cart() {
  //const state = useSelector((state)=> {return state}) //useSelector: store에 있는 state를 가져오는 hooks
  //const state = useSelector((state)=> {return state.user}) //useSelector: store에 있는 state를 가져오는 hooks/ user로 받으면 곤란
  const state = useSelector((state)=> state)
  const dispatch = useDispatch() //useDispatch: 변경함수를 사용하는 hooks
    
    
  return (
    <div>
      {/* <h2><span style={{color: 'blue', fontWeight: 'bold'}}>({state.user})</span> 님의 장바구니</h2> */}
      <h2><span style={{color: 'blue', fontWeight: 'bold'}}>({state.user.name})</span> 님의 장바구니</h2>
      <button onClick={() => dispatch(changeName())}>닉네임 보이기</button> 
      <h3>회원가입기간: {state.user.memberYear} 년</h3>
      <button onClick={() => dispatch(changeYear(1))}>+</button>
      <button onClick={() => dispatch(changeYear(-1))}>-</button>

      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((item, i) => {
            return(
              <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].title}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={() => dispatch(addCount(state.cart[i].id))}>+</button>
                <button onClick={() => dispatch(subCount(state.cart[i].id))}>-</button>
                <button onClick={() => dispatch(deleteItem(state.cart[i].id))}>삭제</button>
              </td>
            </tr>//key값을 받으며 경고를 지움
            )           
          }

          )
        }
       
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>      
    </div>
  )
}





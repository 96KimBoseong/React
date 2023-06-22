import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { changeName, changeYear } from "./store";
import { useDispatch } from "react-redux";

export default function Cart() {
  /* store에 있는 state를 useSelector가 가져오는 역할을 함 */
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{state.user}님의 장바구니</h2>
      <button onClick={() => dispatch(changeName)}>닉네임 바꾸기</button>
      <h3>회원가입기간 : {state.user.memberYear}년</h3>
      <button onClick={dispatch(changeYear(1))}>+</button>
      <button onClick={dispatch(changeYear(-1))}>-</button>
      <button></button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>갯수</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

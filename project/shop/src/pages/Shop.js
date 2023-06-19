import React from "react";
import "./style.css";
import bests from "./productData";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 50%;
  height: 50px;
  background-color: #ccc;
  border: 1px solid #eee;

  &:hover {
    background-color: #999;
  }
`;

export default function Shop() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>best 상품</h2>
      <section className="best_section">
        {bests.map((best, index) => {
          return (
            <div className="best" key={best.id}>
              <img src={best.image} alt={"product" + index} style={{ width: 280, height: 280 }}></img>
              <p className="best_desc">{best.desc}</p>
              <h4>{best.title}</h4>
              <p>{best.price}</p>
              <div className="btn">
                <Button>찜하기</Button>
                <Button>장바구니</Button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

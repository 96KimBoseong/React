import React from "react";
import { useParams } from "react-router-dom";
//useParams {} 는 라우터를 사용할때 파라미터 정보를 가져와서 사용할 수 있도록 하는 훅
const data = {
  soonsin: {
    name: "이순신",
    desc: "나라를 지키는 장군",
  },
  gildong: {
    name: "홍길동",
    desc: "고전 소설 주인공",
  },
};
export default function Profile() {
  const userName = useParams();
  const profile = data[userName];
  if (!profile) {
    return <div>존재하지 않는 회원입니다 </div>;
  }
  return (
    <div>
      <h1>{userName}</h1>
      <p>{profile.desc}</p>
    </div>
  );
}

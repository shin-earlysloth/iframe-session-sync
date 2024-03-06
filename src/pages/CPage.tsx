import React from "react";
import useSharedState from "../hooks/useSharedState";
interface CPageProps {}

const CPage = ({}: CPageProps) => {
  const state = useSharedState();

  return (
    <div>
      <h1>CPage 페이지 입니다.</h1>
      <p>여기서 컨트롤러에서 설정한걸 가져옵니다.</p>
      <span>{JSON.stringify(state)}</span>
    </div>
  );
};

export default CPage;

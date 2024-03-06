import React, { useEffect, useState } from "react";
interface APageProps {}

const APage = ({}: APageProps) => {
  const [s, setS] = useState("");

  useEffect(() => {
    window.sessionStorage.setItem("temp", s);
  }, [s]);

  return (
    <div>
      <h1>APage 페이지 입니다.</h1>
      <p>여기서 컨트롤러 역할을 합니다.</p>
      <input
        value={s}
        onChange={(e) => {
          setS(e.target.value);
        }}
      />
    </div>
  );
};

export default APage;

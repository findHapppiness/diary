const JoinPage = () => {
  const movePage = (url: string): any => {
    console.log(url);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 h-full">
      <p>회원가입입니다</p>
      <div className="flex flex-col mt-8">
        <div className="flex">
          <p>이메일 : </p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>비밀번호 : </p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>비밀번호 확인 : </p>
          <input type="text" />
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={movePage("/login")}>뒤로가기</button>
          <button onClick={movePage("/join")}>회원가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;

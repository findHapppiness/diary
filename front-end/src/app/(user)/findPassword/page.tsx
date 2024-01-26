const FindPasswordPage = () => {
  const movePage = (url: string): any => {
    console.log(url);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 h-full">
      <p>아이디, 비밀번호 찾기 페이지 입니다</p>
      <div className="flex flex-col mt-8">
        <div className="flex">
          <p>아이디 : </p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>비밀번호 : </p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default FindPasswordPage;

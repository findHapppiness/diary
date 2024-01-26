import Link from "next/link";

const LoginPage = () => {
  const movePage = (url: string): any => {
    console.log(url);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 h-full">
      <p>로그인입니다</p>
      <div className="flex flex-col mt-8">
        <div className="flex">
          <p>아이디 : </p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>비밀번호 : </p>
          <input type="text" />
        </div>
        <button>네이버 로그인</button>
        <button>구글 로그인</button>
        <button>카카오톡 로그인</button>

        <div className="flex gap-3">
          <Link href="/findPassword">아이디 / 비밀번호 찾기</Link>
          <Link href="/join">회원가입하기</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>홈 페이지 입니다</div>
      <Link href="/login"> 로그인 페이지로 이동</Link>
    </main>
  );
}

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "행복을 찾아서 : 일기 작성하기",
  description: "오늘의 일기를 작성해보세요 :)",
};

export default function Write() {
  return <main className="">write</main>;
}

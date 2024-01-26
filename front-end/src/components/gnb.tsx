import Link from "next/link";

const GNB_LIST = [
  {
    id: 1,
    name: "HOME",
    href: "/",
  },
  {
    id: 2,
    name: "CHART",
    href: "/chart",
  },
  {
    id: 3,
    name: "글 작성",
    href: "/write",
  },
  {
    id: 4,
    name: "모아보기",
    href: "/explore",
  },
  {
    id: 5,
    name: "profile",
    href: "/profile",
  },
];

const Gnb = () => {
  return (
    <div className="bg-slate-900 text-white p-10 text-lg flex justify-between">
      {GNB_LIST.map((link) => (
        <Link href={link.href} key={link.id}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Gnb;

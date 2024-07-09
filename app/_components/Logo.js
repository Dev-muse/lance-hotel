import Image from "next/image";
import Link from "next/link";
import Lance from "@/public/lance.svg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        height={120}
        width={120}
        alt="The Wild Oasis logo"
        src={Lance}
        quality={60}
        priority
      />
    </Link>
  );
}

export default Logo;

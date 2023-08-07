import Image from "next/image";

export default function CoolAnimeBg() {
  return (
    <section className="w-full mx-auto place-content-center flex my-2">
      <Image
        src="/images/coolAnimeBg.gif"
        alt="coolAnimeGirl"
        width={500}
        height={500}
      />
    </section>
  );
}

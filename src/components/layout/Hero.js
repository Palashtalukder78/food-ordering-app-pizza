import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is Better with <br />a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza, dish of Italian origin consisting of a flattened disk of bread
          dough topped with some combination of olive oil, oregano, tomato,
          olives....
        </p>
        <div className="flex gap-4 items-center text-sm">
          <button className="bg-primary uppercase text-white px-8 py-2 rounded-full flex gap-2  items-center">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 uppercase text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit="contain"
          alt="pizza"
        />
      </div>
    </section>
  );
}

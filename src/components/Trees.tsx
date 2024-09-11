import Image from "next/image";
import Arjuna from "../assets/arjuna-plant.jpg";
import Geowa from "../assets/geowa.jpg";
import Nim from "../assets/neem.jpg";
import Golpata from "../assets/golpata.jpg";
import Goran from "../assets/goran.jpg";
import Kewra from "../assets/kewra.jpg";
import Poshur from "../assets/pashur.jpg";
import Sundari from "../assets/sundari.jpg";
import { useState } from "react";

export const trees = [
  {
    id: 1,
    name: "Nim Tree",
    href: "#",
    imageSrc: Nim,
    imageAlt: "Nim Tree",
  },
  {
    id: 2,
    name: "Geowa Tree",
    href: "#",
    imageSrc: Geowa,
    imageAlt: "Geowa Tree",
  },
  {
    id: 3,
    name: "Golpata Tree",
    href: "#",
    imageSrc: Golpata,
    imageAlt: "Golpata Tree",
  },
  {
    id: 4,
    name: "Goran Tree",
    href: "#",
    imageSrc: Goran,
    imageAlt: "Goran Tree",
  },
  {
    id: 6,
    name: "Kewra Tree",
    href: "#",
    imageSrc: Kewra,
    imageAlt: "Kewra Tree",
  },
  {
    id: 7,
    name: "Poshur Tree",
    href: "#",
    imageSrc: Poshur,
    imageAlt: "Poshur Tree",
  },
  {
    id: 8,
    name: "Sundari Tree",
    href: "#",
    imageSrc: Sundari,
    imageAlt: "Sundari Tree",
  },
  {
    id: 9,
    name: "Arjuna Tree",
    href: "#",
    imageSrc: Arjuna,
    imageAlt: "Arjuna Tree",
  },
];

function WishlistButton({ tree, handleAddTree }) {
  const [added, setAdded] = useState(false);

  const _handleAddTree = (id: number) => {
    setAdded(true);
    handleAddTree(id);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <button
      onClick={() => _handleAddTree(tree.id)}
      className={`${
        added ? "scale-105 bg-emerald-300 hover:bg-emerald-300" : ""
      } bg-emerald-100 text-emerald-800 hover:bg-emerald-200 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium h-12 transition-transform duration-300`}
    >
      {added ? "Added to wishlist!" : "Add to wishlist"}
    </button>
  );
}

export default function Trees({
  handleAddTree,
}: {
  handleAddTree: (id: number) => void;
}) {
  return (
    <div className="bg-white font-sans font-medium">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trees.map((tree) => (
            <div key={tree.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-emerald-100 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={tree.imageSrc}
                  alt={tree.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="my-4 text-sm text-gray-700">{tree.name}</h3>
              {/* <button
                onClick={() => handleAddTree(tree.id)}
                className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium h-12"
              >
                Add to wishlist
              </button> */}
              <WishlistButton tree={tree} handleAddTree={handleAddTree} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const trees = [
  {
    id: 1,
    name: "Nim Tree",
    href: "#",
    price: "48 BDT",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Mango Tree",
    href: "#",
    price: "34 BDT",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Sundari Tree",
    href: "#",
    price: "32 BDT",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Garan Tree",
    href: "#",
    price: "39 BDT",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Trees() {
  return (
    <div className="bg-white font-sans font-medium">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trees.map((tree) => (
            <div key={tree.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-emerald-100 xl:aspect-h-8 xl:aspect-w-7">
                {/* <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                /> */}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{tree.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {tree.price}
              </p>
              <button className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium h-12">
                Add to wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

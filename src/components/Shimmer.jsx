import React from "react";

const aspectClass = {
  "hero": "aspect-[16/9]",
  "hero-half": "aspect-[16/4]",
  "square": "aspect-square",
  "rectangle": "aspect-[2/1]",
};

const inRow = {
  5: "grid-cols-2 sm:grid-cols-5",
  4: "grid-cols-2 sm:grid-cols-4",
  3: "grid-cols-2 sm:grid-cols-3",
  2: "grid-cols-2 sm:grid-cols-2",
  1: "grid-cols-1",
};

const Banner = ({ split = 1, aspect = "hero", circular = false}) => (
  <div className="flex w-full gap-4">
    {Array.from( {length: split}).map((_, i) => (
      <div key={i} className={`flex-1 ${aspectClass[aspect]} bg-gray-200  ${circular ? "rounded-full" : "rounded" }`}></div>
    ))}
  </div>
);

const TextBlock = ({ heading = false, linesCount = 1 }) => (
  <div className="w-full">
    {heading && (
      <div className="w-1/4 sm:w-1/3 h-8 mb-2 bg-gray-200 rounded"></div>
      )}
    {Array.from({ length: linesCount }).map((_, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded mb-1 w-full"></div>
    ))}
  </div>
);

const ProductCards = ({ count = 5, perRow = 4 }) => (
  <div className={`grid ${inRow[perRow]} gap-4 w-full`}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="aspect-square bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

const Shimmer = React.memo(({ frame = [] }) => {

 

  return (
    <div className={`flex flex-col m-auto gap-4 animate-pulse`}>
      <p>v2</p>
      {frame.map((block, i) => {
        switch (block.type) {
          case "banner":
            return (
              <Banner key={block.id || i} split={block.split} aspect={block.aspect} circular={block.circular}/>
            );
          case "textBlock":
            return (
              <TextBlock key={block.id || i} heading={block.heading} linesCount={block.linesCount}
              />
            );
          case "productCards":
            return (
              <ProductCards key={block.id || i} count={block.count} perRow={block.perRow} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
});
export default Shimmer;

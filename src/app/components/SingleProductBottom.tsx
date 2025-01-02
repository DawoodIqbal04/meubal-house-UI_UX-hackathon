import Image from "next/image";
import React from "react";

const SingleProductBottom = () => {
  return (
    <div>
      <div className="bg-white min-h-screen border border-t-gray-400 flex flex-col items-center justify-centerf py-10">
        <div className="max-w-5xl w-full ">
          <div className=" rounded-lg">
            <nav className="flex space-x-6 items-center justify-center mb-10 text-lg font-medium">
              <a href="#" className="text-black border-b-2 border-black">
                Description
              </a>
              <a href="#" className="text-gray-400">
                Additional Information
              </a>
              <a href="#" className="text-gray-400">
                Reviews [5]
              </a>
            </nav>

            <div className="text-left text-base">
              <p className="text-gray-700 mb-6">
                Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="text-gray-700 mb-6">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>

            <div className="flex w-full justify-between gap-8 mt-8">
              <div className=" w-[50%] bg-yellow-50 rounded-lg">
                <Image
                  src="/spsofa.png"
                  alt="Sofa design 1"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className=" w-[50%] bg-yellow-50 rounded-lg">
                <Image
                  src="/spsofa2.png"
                  alt="Sofa design 2"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductBottom;
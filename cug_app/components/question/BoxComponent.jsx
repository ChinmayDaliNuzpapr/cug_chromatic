import React from "react";

const BoxComponent = () => {
  return (
    <div className="m-4">
      {/* m-8 */}
      <div id="aggressiveBoxShadow" className=" ">
        {/* h-32 mx-4 p-4 */}
        <main className=" flex justify-center">
          <div className="flex flex-col md:min-w-full p-3 space-y-5 rounded-xl bg-white ">
            {/* border border-black shadow-xl */}
            <section className="text-sm font-thin text-orange-400">
              {Date()}
            </section>
            <section className="text-3xl font-bold">
              Welcome to Group_Name
            </section>
            <section className="font-normal text-md text-gray-700">
              Have Fun <br />
              {/* authentication link sent on your email */}
            </section>
            <section className="font-bold text-lg text-blue-900">
              Nuzpapr-Technolabs
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoxComponent;

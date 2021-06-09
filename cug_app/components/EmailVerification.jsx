import React from "react";

const EmailVerification = () => {
  return (
    <div className="">
      <div id="center_a_box" className="absolute">
        <main className="w-full flex justify-center">
          <div className="flex flex-col md:w-2/5 p-3 space-y-5 rounded-xl border border-black bg-white shadow-md">
            <section className="text-sm font-thin text-orange-400">
              {Date()}
            </section>
            <section className="text-3xl font-bold">
              We have sent an Email Verification link onto your email
            </section>
            <section className="font-normal text-md text-gray-700">
              We request you to confirm the <br />
              authentication link sent on your email
            </section>
            <section className="font-bold text-lg text-blue-900">
              Nuzpapr-Technolabs
            </section>
            {/* <section className="flex justify-end">
              <button
                type="button"
                className="bg-yellow-600 text-white px-3 py-1 rounded-md"
              >
                Read more
              </button>
            </section> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmailVerification;

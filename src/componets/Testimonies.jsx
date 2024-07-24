function Testimonies() {
  return (
    <section>
      <div className="my-4 transform">
        <h3 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Hear from Our
          <span className="text-primary"> Happy</span> Travelers{" "}
        </h3>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          find heartfelt testimonials from those who have embarked on
          unforgettable journeys with us.Read their stories and see how our
          travel adventures have left a lasting impression.
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 border rounded-lg dark:border-gray-700 bg-gray-400/20">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “ Outstanding customer service and unique travel suggestions.
              Thanks to Travaye, I had a vacation I'll never forget”.
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                height="300px"
                width="300px"
                loading="lazy"
                alt=" testimonie"
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Robert
                </h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg dark:border-gray-700 bg-gray-400/20">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “Travaye's user-friendly platform helped me explore India like a
              local. I'm hooked for life!"”.
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                height="300px"
                width="300px"
                loading="lazy"
                alt=" testimonie"
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Jeny Doe
                </h1>
                <span className="text-sm text-gray-500">
                  CEO, Jeny Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg dark:border-gray-700 bg-gray-400/20">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “ A gem of a platform. Travaye's blog and forums gave me insights
              and tips for my best adventure yet.”.
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                height="300px"
                width="300px"
                loading="lazy"
                alt=" testimonie"
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Ema Watson{" "}
                </h1>
                <span className="text-sm text-gray-500">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonies;

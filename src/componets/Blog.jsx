function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900  py-24 -mt-60 mb-32">
      <div className="container px-6  mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h3>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Discover the world through our eyes! Our travel blog is your
            passport to exploring new destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="blog-images"
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="travel-vblogers"
                />

                <div className="mx-4">
                  <h3 className="text-sm text-gray-700 dark:text-gray-200">
                    Tom Hank
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    travel experts
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              Sunrise Over the Serengeti{" "}
            </h3>

            <hr className="w-32 my-6 text-primary" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Witnessing the sunrise over the Serengeti is a breathtaking
              experience. The golden hues spread across the vast savannah,
              waking up the wildlife and creating a serene yet vibrant scene.
            </p>

            <a
              href="#blog"
              className="inline-block mt-4 text-primary underline hover:text-neutraDark"
            >
              Read more
            </a>
          </div>

          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="blog-images"
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="travel-vblogers"
                />

                <div className="mx-4">
                  <h3 className="text-sm text-gray-700 dark:text-gray-200">
                    arthur melo
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    tourist vlogger{" "}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              Exploring Kyoto's Temples{" "}
            </h3>

            <hr className="w-32 my-6 text-primary" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              offer a glimpse into Japan's rich heritage. Wandering through
              these sacred sites, you can feel the peace and spirituality that
              permeate the air.
            </p>

            <a
              href="#blog"
              className="inline-block mt-4 text-primary underline hover:text-neutraDark"
            >
              Read more
            </a>
          </div>

          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="blog-images"
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt="travel-vblogers"
                />

                <div className="mx-4">
                  <h3 className="text-sm text-gray-700 dark:text-gray-200">
                    Amelia. Anderson
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    forest hiker
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              Island Hopping in Greece{" "}
            </h3>

            <hr className="w-32 my-6 text-primary" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              each island has its unique charm. Island hopping allows you to
              experience the diverse beauty of Greece, with its crystal-clear
              waters, delicious cuisine, and friendly locals.
            </p>

            <a
              href="#blog"
              className="inline-block mt-4 text-primary underline hover:text-neutraDark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

import React from "react";
import yourImage from "../images/question.png"; // Update with a more book-related image if available

const Howitworks = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 min-h-[70vh]">
      <div className="flex flex-col-reverse w-11/12 p-10  rounded-lg lg:w-[90%] lg:flex-row">
        {/* Text Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 md:mt-14">
          <header className="mb-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">How It Works</h1>
          </header>
          <article>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              At{" "}
              <strong>
                Book<span className="text-yellow-600">Finder</span>
              </strong>
              , discovering your next great read is simple and fun. Here’s how
              it works:
            </p>
            <ul className="mb-6 text-lg leading-relaxed text-gray-600 list-disc list-inside">
              <li className="mb-2">
                Enter the <strong className="text-yellow-600">title</strong> of
                a book you’re looking for in the search bar.
              </li>
              <li className="mb-2">
                We fetch results instantly from{" "}
                <strong className="text-yellow-600">Open Library</strong>, a
                free and open book database.
              </li>
              <li className="mb-2">
                Browse through a list of{" "}
                <strong className="text-yellow-600">books, authors, and
                publication years</strong>.
              </li>
              <li className="mb-2">
                See book <strong className="text-yellow-600">cover images</strong>{" "}
                when available for a better browsing experience.
              </li>
              <li className="mb-2">
                Click a book to explore{" "}
                <strong className="text-yellow-600">more details</strong> or
                find similar reads.
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you’re searching for classics or the latest titles,
              BookFinder makes it easy to discover and explore books anytime,
              anywhere.
            </p>
          </article>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={yourImage}
            alt="How it works illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Howitworks;

import React from "react";
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import homeimg from "../images/image.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="lg:w-9/12 md:w-[90%] mx-auto mt-12 flex flex-col-reverse md:flex-row-reverse justify-between items-center px-4">
        <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:mt-16">
          {/* Original image */}
          <img src={homeimg} alt="banner" className="w-full mx-auto" />
        </div>

        <div className="w-full mt-8 space-y-8 md:mt-0 md:w-1/2">
          <h2 className="my-8 lg:text-4xl text-3xl font-medium  md:w-4/6 lg:leading-normal leading-normal mb-3">
            Discover Millions of Amazing Books
          </h2>
          <p className="py-2 pl-2 mb-6 text-gray-700 border-l-4 border-yellow-500">
            Our BookFinder helps you explore, search, and discover books from around the world
            for an enriching reading experience.
          </p>
          <div className="flex flex-col items-center mb-6 md:flex-row md:space-x-3">
            <Link to="/search">
              <button className="w-full px-6 py-2 mb-8 text-white font-bold rounded md:w-auto bg-primary hover:bg-primary transition-colors md:mb-0">
                <Search className="h-5 w-5 inline mr-2" />
                Start Searching
              </button>
            </Link>

            <Link to="/search">
              <button className="inline-flex items-center justify-center w-full px-6 py-2 transition-all font-bold duration-300 ease-in border border-primary rounded md:w-auto text-primary hover:bg-primary hover:text-white">
                <ArrowRight className="h-5 w-5 mr-2" />
                <span className="flex items-center">Browse All Books</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-yellow-100 mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">
              Why Choose BookFinder?
            </h2>
            <p className="text-lg text-yellow-800 max-w-2xl mx-auto">
              Our platform provides everything you need to discover and explore books from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-yellow-700" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Advanced Search</h3>
              <p className="text-yellow-700">
                Search by title, author, or keywords with smart filters and sorting options.
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-yellow-700" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Rich Information</h3>
              <p className="text-yellow-700">
                Get detailed book information including ratings, reviews, and publication details.
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-yellow-700" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Easy Discovery</h3>
              <p className="text-yellow-700">
                Browse popular books or search for specific titles with our intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
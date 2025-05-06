"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogCategories = ["All", "Trainings", "Matches"];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === "All" || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  return (
    <div className="px-4 md:px-16 lg:px-24 mb-16 md:mb-24 lg:mb-32 xl:px-72 mt-16">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 w-full">
        <div className="w-full md:w-1/3">
          <label className="block text-green-600 mb-1">Search blogs</label>
          <input
            type="text"
            placeholder="Search blogs..."
            className="border focus:ring-2 focus:ring-green-600 focus:outline-none p-2 rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/4">
          <label className="block text-green-600 mb-1">
            Search by category
          </label>
          <select
            className="border focus:ring-2 focus:ring-green-600 focus:outline-none p-2 rounded-md w-full appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {blogCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => <BlogCard key={blog.id} item={blog} />)
        ) : (
          <p className="text-center text-gray-500 w-full col-span-2">
            No blogs found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && currentBlogs.length > 0 && (
        <div className="flex justify-end mt-10">
          <button
            className="px-3 py-2 mx-1 bg-green-600 text-white disabled:opacity-40"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <FaArrowLeft />
          </button>
          <span className="px-3 py-2 mx-1 bg-gray-200 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-2 mx-1 bg-green-600 text-white disabled:opacity-40"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;

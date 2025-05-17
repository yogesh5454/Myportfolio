import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="  text-white py-12">
      <div className="  grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-6">
            Interested in working together or have a project idea? Feel free to
            reach out — I’m always open to new opportunities and collaborations.
          </p>
          <div className="h-1 w-24 bg-[#4ecca3] mb-8"></div>

          <div className="bg-[#1f2937] p-6 rounded-lg flex gap-4 items-center mb-6">
            <div className="bg-[#4ecca3] p-3 rounded-full">
              <IoCall />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Contact on phone</h4>
              <p>+977 9863405770</p>
            </div>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-lg flex gap-4 items-center mb-6">
            <div className="bg-[#4ecca3] p-3 rounded-full">
              <IoMdMail />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Contact on mail</h4>
              <p>yogesh111sapkota@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-lg flex gap-4 items-center">
            <div className="bg-[#4ecca3] p-3 rounded-full">
              <FaLocationDot />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Contact address</h4>
              <p>Pasikot-04, Budhanilakantha, Kathmandu </p>
            </div>
          </div>
        </div>

        <form className="bg-[#1f2937] p-8 rounded-lg space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full p-3 rounded bg-[#111827] text-white placeholder-gray-400 border border-transparent focus:border-[#4ecca3] outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-3 rounded bg-[#111827] text-white placeholder-gray-400 border border-transparent focus:border-[#4ecca3] outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject..."
              className="w-full p-3 rounded bg-[#111827] text-white placeholder-gray-400 border border-transparent focus:border-[#4ecca3] outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message..."
              className="w-full p-3 rounded bg-[#111827] text-white placeholder-gray-400 border border-transparent focus:border-[#4ecca3] outline-none transition duration-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-400 hover:bg-[#4ecca3] transition text-black px-6 py-2 font-semibold rounded"
          >
            SEND MAIL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

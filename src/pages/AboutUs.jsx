import React from "react";
import Layout from "../Layout/Layout";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hospital Background Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Hospital's Background
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 1990, our hospital has grown from a small community clinic to a leading healthcare institution. We are committed to providing high-quality medical care and innovative treatments to our patients. Our team of dedicated professionals works tirelessly to ensure that every patient receives personalized care and attention. Over the years, we have expanded our services and facilities to meet the growing needs of our community, always striving to maintain the highest standards of medical excellence.
          </p>
        </div>
      </section>

      {/* Staff Profiles Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet Our Team
          </h2>
          {/* Add staff profiles here */}
          {/* Example: <StaffProfiles /> */}
        </div>
      </section>

      {/* Department Details Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Departments
          </h2>
          {/* Add department details here */}
          {/* Example: <DepartmentDetails /> */}
        </div>
      </section>
    </div>
  );
};

export default Layout(AboutUs);

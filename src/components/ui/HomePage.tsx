import React from "react";
import { Database, CheckCircle, Brain, Shield } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Normalization",
      description:
        "Converts text to a standard format, removing special characters and ensuring consistency across the database.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Spell Checking",
      description:
        "Identifies and corrects spelling errors using advanced algorithms and dictionaries.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Entity Extraction",
      description:
        "Uses Natural Language Processing (NLP) to extract meaningful entities such as names, places, and organizations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Validation",
      description:
        "Ensures the data conforms to predefined rules and standards, marking or correcting invalid entries.",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Data Curator Project
          </h1>
          <p className="text-lg opacity-90">
            A thesis project for the International Hellenic University focused
            on intelligent data curation for theatrical plays.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The Data Curator is designed to enhance and maintain the quality
              of textual data within the Theatrical Plays Database, ensuring the
              highest standards of accuracy and consistency.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Purpose Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Purpose</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The primary objective of this project is to elevate the quality of
              data within the Theatrical Plays Database. Through the
              implementation of sophisticated automated curation techniques, we
              maintain exceptional data integrity standards, essential for both
              academic research and referential purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} International Hellenic University.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

"use client";
import AuthModal from "@/components/ui/AuthModal";
import HomePage from "@/components/ui/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkAuth();
  });

  const checkAuth = () => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      const { authenticated, timestamp } = JSON.parse(authData);
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

      // Check if the authentication is still valid (less than 1 hour old)
      if (authenticated && currentTime - timestamp < oneHour) {
        setIsAuthenticated(true);
      } else {
        // Clear expired auth data
        localStorage.removeItem("authData");
      }
    }

    setLoading(false);
  };

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <AuthModal onAuthenticated={setIsAuthenticated} />;
  }
  return <HomePage />;
}

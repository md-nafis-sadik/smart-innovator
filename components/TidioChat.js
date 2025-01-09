"use client";
import { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    // Dynamically load the Tidio script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/tqgdxdo8ik5rai8owhzzilcjozusnols.js'; // Replace with your Tidio Chat ID
    script.async = true;
    script.onload = () => {
      console.log('Tidio script loaded');
    };
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render any UI, it only adds the script
};

export default TidioChat;

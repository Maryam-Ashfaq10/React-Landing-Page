import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success
    alert(`Thank you for subscribing with: ${email}`);
    setEmail(""); // clear input after submit
  };

  return (
    <>
      <div className="text-white text-center w-full py-16 px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          SUBSCRIBE TO OUR NEWSLETTER!
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mx-6 w-[400px] py-2 px-4 border border-[#c365a2] rounded-lg placeholder-[#888] 
                     focus:outline-none focus:ring-2 focus:ring-[#c365a2] focus:border-[#9b4c7c] 
                     shadow-md"
          placeholder="Enter Email"
        />
        <button
          type="submit"
          className="bg-[#c365a2] text-white font-medium w-[150px] ml-4 my-6 py-2 px-4 rounded-lg 
                     transition-all duration-300 hover:bg-[#9b4c7c] hover:scale-105 shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-[#c365a2]"
        >
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Newsletter;

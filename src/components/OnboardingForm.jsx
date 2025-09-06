import { useState } from "react";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.website) {
            alert("Please fill out all required fields.");
            return;
        }

        // In real case, you’d send formData to backend API here
        alert(`Application submitted!\n We will contact you shortly.`);

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "", website: "", });
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 "
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 "
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* Website */}
                <div>
                    <label className="block text-sm font-medium mb-1">Website *</label>
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter your website"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-1">Business Type *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 "
                        placeholder="Write a short message..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#c365a2] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[#9b4c7c] hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#c365a2]"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;

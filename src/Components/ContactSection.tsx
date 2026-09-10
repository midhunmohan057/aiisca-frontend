import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const contactSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactSection() {
  const [statusMessage, setStatusMessage] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const payload = { ...data, formType: "contact" };
      const response = await fetch("/.netlify/functions/submitContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        reset();
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      setStatusMessage("Error sending message.");
    }
  };

  return (
    <div className="bg-primary-theme rounded-[32px] p-6 lg:p-12 text-white shadow-xl my-12" id="contact-us">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12">
        
        {/* Left Side - Contact Form */}
        <div className="w-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-[2px] bg-white" />
            <h2 className="text-xl font-bold uppercase tracking-wide">Get In Touch</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input type="text" placeholder="Full Name" {...register("firstName")} className="w-full bg-transparent border-b border-white/50 pb-2 outline-none placeholder:text-white/80 focus:border-white transition-colors" />
              {errors.firstName && <p className="text-red-300 text-xs mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
              <input type="text" placeholder="Last Name" {...register("lastName")} className="w-full bg-transparent border-b border-white/50 pb-2 outline-none placeholder:text-white/80 focus:border-white transition-colors" />
              {errors.lastName && <p className="text-red-300 text-xs mt-1">{errors.lastName.message}</p>}
            </div>

            <div>
              <input type="email" placeholder="Email ID" {...register("email")} className="w-full bg-transparent border-b border-white/50 pb-2 outline-none placeholder:text-white/80 focus:border-white transition-colors" />
              {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-[80px_1fr] gap-6">
              <div className="border-b border-white/50 pb-2 flex items-center justify-between">
                <span>+91</span>
                <FaChevronDown size={12} />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" maxLength={10} {...register("phoneNumber")} className="w-full bg-transparent border-b border-white/50 pb-2 outline-none placeholder:text-white/80 focus:border-white transition-colors" />
                {errors.phoneNumber && <p className="text-red-300 text-xs mt-1">{errors.phoneNumber.message}</p>}
              </div>
            </div>

            <div>
              <input type="text" placeholder="Message" {...register("message")} className="w-full bg-transparent border-b border-white/50 pb-2 outline-none placeholder:text-white/80 focus:border-white transition-colors" />
              {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {statusMessage && <p className="text-sm font-medium text-green-300">{statusMessage}</p>}

            <button type="submit" disabled={isSubmitting} className="w-full bg-white text-primary-theme py-3 rounded-lg font-bold text-md hover:bg-gray-100 transition mt-4 disabled:opacity-70">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-white/20 self-stretch mx-4" />

        {/* Right Side */}
        <div className="w-full flex flex-col justify-center">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[2px] bg-white" />
              <h2 className="text-xl font-bold uppercase tracking-wide">Offices</h2>
            </div>
            <p className="text-base leading-relaxed text-white/90">
              Dhammadeep Nagar Buddha Vihar, Binaki, Nagpur, 440017
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[2px] bg-white" />
              <h2 className="text-xl font-bold uppercase tracking-wide">For Quick Inquiries</h2>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="flex items-center gap-4 text-base">
                <FaPhoneAlt /> +91 98765 43210
              </p>
              <p className="flex items-center gap-4 text-base">
                <IoMail /> aiisca.1957@gmail.com
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
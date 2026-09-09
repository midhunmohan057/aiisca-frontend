import { Card, CardContent } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Phone, MapPin } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function Page() {
  const {
    register, handleSubmit, reset, formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const response = await fetch("/.netlify/functions/submitContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully! We will get back to you soon.");
        reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-theme uppercase tracking-wider">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-primary-theme mx-auto mt-3 rounded-md" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Contact Info */}
        <Card className="lg:col-span-1 bg-primary-theme text-white shadow-xl border-0 flex flex-col justify-center p-6">
          <CardContent className="space-y-8 pt-6">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <p className="text-indigo-100 mb-8 leading-relaxed">
                Have questions about our initiatives or want to get involved? Reach out to us and our team will respond shortly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-indigo-100 mt-1">+91 7758-917446</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-indigo-100 mt-1 leading-relaxed">
                    Dhammadeep Nagar Buddha Vihar,<br />
                    Binaki, Nagpur, 440017
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Form */}
        <Card className="lg:col-span-2 shadow-lg border-t-4 border-t-primary-theme">
          <CardContent className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input type="text" {...register("firstName")} placeholder="Enter your first name" className="mt-1" />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input type="text" {...register("lastName")} placeholder="Enter your last name" className="mt-1" />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Email Address</Label>
                  <Input type="email" {...register("email")} placeholder="Enter your email" className="mt-1" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input type="tel" {...register("phoneNumber")} placeholder="10-digit number" className="mt-1" />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <textarea 
                  {...register("message")} 
                  placeholder="How can we help you?" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-primary-theme text-white rounded-md font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
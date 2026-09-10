import { Card, CardContent } from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";
import { Input } from "@components/ui/input";
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "@components/ui/select";
import { images as assetsImage } from "@assets/index";
import { State, City } from "country-state-city";
import { Label } from "@components/ui/label";
import { useEffect, useState } from "react";
import SectionHeader from "@components/SectionHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ImageOverlaySection from "@components/ImageOverlaySection";
import Footer from "@components/Footer";

interface MembershipFormValues {
  fullName: string; gender: string; dateOfBirth: string; category: string; caste: string;
  email: string; contactNumber: string; permanentAddress: string; permanentState: string;
  permanentCity: string; permanentPincode: string; highestQualification: string;
  occupation: string; 
  currentAddress?: string; // Made optional for TypeScript
  currentState?: string;   // Made optional for TypeScript
  currentCity?: string;    // Made optional for TypeScript
  currentPincode?: string; // Made optional for TypeScript
  agreeToTerms: boolean; sameAsPermanent: boolean;
}

const membershipSchema: yup.ObjectSchema<MembershipFormValues> = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  gender: yup.string().required("Please select your gender"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  category: yup.string().required("Category is required"),
  caste: yup.string().required("Caste is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contactNumber: yup.string().matches(/^[0-9]{10}$/, "Contact number must be 10 digits").required("Contact number is required"),
  permanentAddress: yup.string().required("Permanent address is required"),
  permanentState: yup.string().required("Permanent state is required"),
  permanentCity: yup.string().required("Permanent city is required"),
  permanentPincode: yup.string().matches(/^[0-9]{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
  highestQualification: yup.string().required("Please select qualification"),
  occupation: yup.string().required("Occupation is required"),
  sameAsPermanent: yup.boolean().default(false),
  currentAddress: yup.string().when("sameAsPermanent", {
    is: false,
    then: (schema) => schema.required("Current address is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  currentState: yup.string().when("sameAsPermanent", {
    is: false,
    then: (schema) => schema.required("Current state is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  currentCity: yup.string().when("sameAsPermanent", {
    is: false,
    then: (schema) => schema.required("Current city is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  currentPincode: yup.string().when("sameAsPermanent", {
    is: false,
    then: (schema) => schema.matches(/^[0-9]{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  agreeToTerms: yup.boolean().required("You must agree to the terms").oneOf([true], "You must agree to the terms"),
});

export default function Page() {
  const [indianStates, setIndianStates] = useState<{ name: string; isoCode: string }[]>([]);
  const [permanentCities, setPermanentCities] = useState<{ name: string }[]>([]);
  const [currentCities, setCurrentCities] = useState<{ name: string }[]>([]);

  const {
    register, handleSubmit, setValue, watch, reset, clearErrors, formState: { errors, isSubmitting },
  } = useForm<MembershipFormValues>({
    resolver: yupResolver(membershipSchema),
    defaultValues: {
      fullName: "", gender: "", dateOfBirth: "", category: "", caste: "", email: "", contactNumber: "",
      permanentAddress: "", permanentCity: "", permanentState: "", permanentPincode: "", highestQualification: "",
      occupation: "", currentAddress: "", currentCity: "", currentState: "", currentPincode: "", agreeToTerms: false, sameAsPermanent: false,
    },
  });

  const formData = watch();

  useEffect(() => {
    const states = State.getStatesOfCountry("IN");
    setIndianStates(states);
  }, []);

  // Sync address fields when checkbox is toggled
  useEffect(() => {
    if (formData.sameAsPermanent) {
      setValue("currentAddress", formData.permanentAddress);
      setValue("currentState", formData.permanentState);
      setValue("currentCity", formData.permanentCity);
      setValue("currentPincode", formData.permanentPincode);
      
      // Mirror available city list
      setCurrentCities(permanentCities);

      clearErrors(["currentAddress", "currentState", "currentCity", "currentPincode"]);
    }
  }, [
    formData.sameAsPermanent,
    formData.permanentAddress,
    formData.permanentState,
    formData.permanentCity,
    formData.permanentPincode,
    permanentCities,
    setValue,
    clearErrors
  ]);

  const onSubmit: SubmitHandler<MembershipFormValues> = async (data) => {
    const payload = {
      ...data,
      currentAddress: data.sameAsPermanent ? data.permanentAddress : data.currentAddress,
      currentState: data.sameAsPermanent ? data.permanentState : data.currentState,
      currentCity: data.sameAsPermanent ? data.permanentCity : data.currentCity,
      currentPincode: data.sameAsPermanent ? data.permanentPincode : data.currentPincode,
    };

    try {
      const response = await fetch("/.netlify/functions/submitMembership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Membership application submitted successfully!");
        reset();
      } else {
        const errorData = await response.json();
        alert(`Failed: ${errorData.message ?? "Unknown error"}`);
      }
    } catch {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Card className="max-w-4xl mx-auto mt-8 mb-16 shadow-lg border-0">
        <ImageOverlaySection
          description="Every movement begins with people who choose to make a difference. By becoming a member of AIISCA, you stand alongside a community committed to advancing educational equity, social justice, and dignity for all. Together, we can empower marginalized communities, nurture future leaders, and build a more inclusive society through collaboration, compassion, and action."
          heading="JOIN THE MOVEMENT"
          imageUrl={assetsImage.Overlay}
        />
        <CardContent className="px-6 py-8">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Personal Information */}
            <section>
              <div className="mb-4"><SectionHeader color="black" title="Personal Information" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Full Name</Label>
                  <Input type="text" {...register("fullName")} placeholder="Enter full name" className="border border-gray-300 px-3 py-2" />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <Label>Gender</Label>
                  <Select value={formData.gender} onValueChange={(value: string) => setValue("gender", value)}>
                    <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent className="!bg-white !text-black border border-gray-300 shadow-xl z-50">
                      <SelectGroup>
                        <SelectItem value="Male" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Male</SelectItem>
                        <SelectItem value="Female" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Female</SelectItem>
                        <SelectItem value="Transgender" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Transgender</SelectItem>
                        <SelectItem value="Other" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Input type="date" {...register("dateOfBirth")} className="border border-gray-300 px-3 py-2" />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                </div>

                <div>
                  <Label>Category</Label>
                  <Input {...register("category")} placeholder="Enter category" className="border border-gray-300 px-3 py-2" />
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div>
                  <Label>Caste</Label>
                  <Input {...register("caste")} placeholder="Enter caste" className="border border-gray-300 px-3 py-2" />
                  {errors.caste && <p className="text-red-500 text-sm mt-1">{errors.caste.message}</p>}
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" {...register("email")} placeholder="Enter email" className="border border-gray-300 px-3 py-2" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label>Contact Number</Label>
                  <Input {...register("contactNumber")} placeholder="10-digit number" className="border border-gray-300 px-3 py-2" />
                  {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label>Permanent Address</Label>
                  <Input {...register("permanentAddress")} placeholder="Enter address" className="border border-gray-300 px-3 py-2 w-full" />
                  {errors.permanentAddress && <p className="text-red-500 text-sm mt-1">{errors.permanentAddress.message}</p>}
                </div>

                <div>
                  <Label>Permanent State</Label>
                  <Select
                    value={formData.permanentState}
                    onValueChange={(value: string) => {
                      setValue("permanentState", value);
                      setValue("permanentCity", "");
                      const selected = indianStates.find((s) => s.name === value);
                      setPermanentCities(City.getCitiesOfState("IN", selected?.isoCode as string) || []);
                    }}
                  >
                    <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select state" /></SelectTrigger>
                    <SelectContent className="!bg-white !text-black border border-gray-300 max-h-60 overflow-y-auto shadow-xl z-50">
                      {indianStates.map((state) => (
                        <SelectItem key={state.isoCode} value={state.name} className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">{state.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.permanentState && <p className="text-red-500 text-sm mt-1">{errors.permanentState.message}</p>}
                </div>

                <div>
                  <Label>Permanent City</Label>
                  <Select
                    value={formData.permanentCity}
                    onValueChange={(value: string) => setValue("permanentCity", value)}
                    disabled={!formData.permanentState}
                  >
                    <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select city" /></SelectTrigger>
                    <SelectContent className="!bg-white !text-black border border-gray-300 max-h-60 overflow-y-auto shadow-xl z-50">
                      {permanentCities.map((city) => (
                        <SelectItem key={city.name} value={city.name} className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">{city.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.permanentCity && <p className="text-red-500 text-sm mt-1">{errors.permanentCity.message}</p>}
                </div>

                <div>
                  <Label>Pincode</Label>
                  <Input {...register("permanentPincode")} placeholder="6-digit pincode" className="border border-gray-300 px-3 py-2" />
                  {errors.permanentPincode && <p className="text-red-500 text-sm mt-1">{errors.permanentPincode.message}</p>}
                </div>
              </div>
            </section>

            {/* Educational Background */}
            <section>
              <div className="mb-4"><SectionHeader color="black" title="Educational Background" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Highest Qualification</Label>
                  <Select value={formData.highestQualification} onValueChange={(value: string) => setValue("highestQualification", value)}>
                    <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select qualification" /></SelectTrigger>
                    <SelectContent className="!bg-white !text-black border border-gray-300 max-h-60 overflow-y-auto shadow-xl z-50">
                      <SelectItem value="10th Pass" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">10th Pass</SelectItem>
                      <SelectItem value="12th Pass" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">12th Pass</SelectItem>
                      <SelectItem value="Undergraduate" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Undergraduate</SelectItem>
                      <SelectItem value="Post Graduate" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Post Graduate</SelectItem>
                      <SelectItem value="PhD Scholar" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">PhD Scholar</SelectItem>
                      <SelectItem value="PhD" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">PhD</SelectItem>
                      <SelectItem value="Other" className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification.message}</p>}
                </div>

                <div>
                  <Label>Occupation</Label>
                  <Input {...register("occupation")} placeholder="Enter occupation" className="border border-gray-300 px-3 py-2" />
                  {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
                </div>
              </div>
            </section>

            {/* Current Address Section */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  checked={formData.sameAsPermanent}
                  onCheckedChange={(checked: boolean) => setValue("sameAsPermanent", !!checked)}
                />
                <Label className="font-semibold text-gray-800 cursor-pointer">Same as Permanent Address</Label>
              </div>

              {!formData.sameAsPermanent && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t">
                  <div className="md:col-span-2">
                    <Label>Current Address</Label>
                    <Input {...register("currentAddress")} placeholder="Enter current address" className="border border-gray-300 px-3 py-2 w-full" />
                    {errors.currentAddress && <p className="text-red-500 text-sm mt-1">{errors.currentAddress.message}</p>}
                  </div>

                  <div>
                    <Label>Current State</Label>
                    <Select
                      value={formData.currentState}
                      onValueChange={(value: string) => {
                        setValue("currentState", value);
                        setValue("currentCity", "");
                        const selected = indianStates.find((s) => s.name === value);
                        setCurrentCities(City.getCitiesOfState("IN", selected?.isoCode as string) || []);
                      }}
                    >
                      <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select state" /></SelectTrigger>
                      <SelectContent className="!bg-white !text-black border border-gray-300 max-h-60 overflow-y-auto shadow-xl z-50">
                        {indianStates.map((state) => (
                          <SelectItem key={state.isoCode} value={state.name} className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">{state.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.currentState && <p className="text-red-500 text-sm mt-1">{errors.currentState.message}</p>}
                  </div>

                  <div>
                    <Label>Current City</Label>
                    <Select
                      value={formData.currentCity}
                      onValueChange={(value: string) => setValue("currentCity", value)}
                      disabled={!formData.currentState}
                    >
                      <SelectTrigger className="bg-white border border-gray-300 px-3 py-2"><SelectValue placeholder="Select city" /></SelectTrigger>
                      <SelectContent className="!bg-white !text-black border border-gray-300 max-h-60 overflow-y-auto shadow-xl z-50">
                        {currentCities.map((city) => (
                          <SelectItem key={city.name} value={city.name} className="focus:!bg-gray-100 focus:!text-black data-[highlighted]:!bg-gray-100 data-[highlighted]:!text-black cursor-pointer">{city.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.currentCity && <p className="text-red-500 text-sm mt-1">{errors.currentCity.message}</p>}
                  </div>

                  <div>
                    <Label>Pincode</Label>
                    <Input {...register("currentPincode")} placeholder="6-digit pincode" className="border border-gray-300 px-3 py-2" />
                    {errors.currentPincode && <p className="text-red-500 text-sm mt-1">{errors.currentPincode.message}</p>}
                  </div>
                </div>
              )}
            </section>

            {/* Declaration */}
            <section className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
              <Checkbox
                className="mt-1"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked: boolean) => setValue("agreeToTerms", !!checked)}
              />
              <div>
                <Label className="text-sm text-gray-700 leading-relaxed">
                  I hereby declare that the information provided is true and accurate. I agree to abide by the rules and consent to the processing of my personal data.
                </Label>
                {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>}
              </div>
            </section>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary-theme text-white rounded-md font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <Footer />
    </div>
  );
}
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

interface MembershipFormValues {
  fullName: string; gender: string; dateOfBirth: string; category: string; caste: string;
  email: string; contactNumber: string; permanentAddress: string; permanentState: string;
  permanentCity: string; permanentPincode: string; highestQualification: string;
  occupation: string; currentAddress: string; currentState: string; currentCity: string;
  currentPincode: string; agreeToTerms: boolean; sameAsPermanent: boolean;
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
  currentAddress: yup.string().required("Current address is required"),
  currentState: yup.string().required("Current state is required"),
  currentCity: yup.string().required("Current city is required"),
  currentPincode: yup.string().matches(/^[0-9]{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
  agreeToTerms: yup.boolean().required("You must agree to the terms").oneOf([true], "You must agree to the terms"),
  sameAsPermanent: yup.boolean().default(false),
});

export default function Page() {
  const [permanentStates, setPermanentStates] = useState<{ name: string; isoCode: string }[]>([]);
  const [permanentCities, setPermanentCities] = useState<{ name: string }[]>([]);
  const [currentStates, setCurrentStates] = useState<{ name: string; isoCode: string }[]>([]);
  const [currentCities, setCurrentCities] = useState<{ name: string }[]>([]);

  const {
    register, handleSubmit, setValue, watch, reset, formState: { errors, isSubmitting },
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
    const indianStates = State.getStatesOfCountry("IN");
    setPermanentStates(indianStates); setCurrentStates(indianStates);
  }, []);

  useEffect(() => {
    if (formData.sameAsPermanent) {
      setValue("currentAddress", formData.permanentAddress); setValue("currentCity", formData.permanentCity);
      setValue("currentState", formData.permanentState); setValue("currentPincode", formData.permanentPincode);
    } else {
      setValue("currentAddress", ""); setValue("currentCity", ""); setValue("currentState", ""); setValue("currentPincode", "");
    }
  }, [formData.sameAsPermanent, formData.permanentAddress, formData.permanentCity, formData.permanentState, formData.permanentPincode, setValue]);

  const onSubmit: SubmitHandler<MembershipFormValues> = async (data) => {
    try {
      const response = await fetch("/.netlify/functions/submitMembership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Membership application submitted successfully!");
        reset();
      } else {
        const errorData = await response.json();
        alert(`Failed: ${errorData.message ?? "Unknown error"}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Card className="max-w-4xl mx-auto mt-8 shadow-lg">
      <ImageOverlaySection
        description="Join our movement and help us build a more inclusive society."
        heading="Membership Application Form"
        imageUrl={assetsImage.Overlay}
      />
      <CardContent>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information */}
          <section>
            <div className="mb-4"><SectionHeader color="black" title="Personal Information" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Full Name</Label>
                <Input type="text" {...register("fullName")} placeholder="Enter full name" />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>
              <div>
                <Label>Gender</Label>
                <Select value={formData.gender} onValueChange={(value: string) => setValue("gender", value)}>
                  <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Male">Male</SelectItem><SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Transgender">Transgender</SelectItem><SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
              </div>
              <div>
                <Label>Date of Birth</Label>
                <Input type="date" {...register("dateOfBirth")} />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
              </div>
              <div>
                <Label>Category</Label>
                <Input {...register("category")} placeholder="Enter category" />
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
              </div>
              <div>
                <Label>Caste</Label>
                <Input {...register("caste")} placeholder="Enter caste" />
                {errors.caste && <p className="text-red-500 text-sm mt-1">{errors.caste.message}</p>}
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" {...register("email")} placeholder="Enter email" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label>Contact Number</Label>
                <Input {...register("contactNumber")} placeholder="10-digit number" />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label>Permanent Address</Label>
                <Input {...register("permanentAddress")} placeholder="Enter address" />
                {errors.permanentAddress && <p className="text-red-500 text-sm mt-1">{errors.permanentAddress.message}</p>}
              </div>
              <div>
                <Label>Permanent State</Label>
                <Select
                  value={formData.permanentState}
                  onValueChange={(value: string) => {
                    setValue("permanentState", value);
                    const selected = permanentStates.find((s) => s.name === value);
                    setPermanentCities(City.getCitiesOfState("IN", selected?.isoCode as string) || []);
                  }}
                >
                  <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                  <SelectContent>
                    {permanentStates.map((state) => (
                      <SelectItem key={state.isoCode} value={state.name}>{state.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.permanentState && <p className="text-red-500 text-sm mt-1">{errors.permanentState.message}</p>}
              </div>
              <div>
                <Label>Permanent City</Label>
                <Select value={formData.permanentCity} onValueChange={(value: string) => setValue("permanentCity", value)}>
                  <SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger>
                  <SelectContent>
                    {permanentCities.map((city) => (
                      <SelectItem key={city.name} value={city.name}>{city.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.permanentCity && <p className="text-red-500 text-sm mt-1">{errors.permanentCity.message}</p>}
              </div>
              <div>
                <Label>Pincode</Label>
                <Input {...register("permanentPincode")} placeholder="6-digit pincode" />
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
                  <SelectTrigger><SelectValue placeholder="Select qualification" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th Pass">10th Pass</SelectItem><SelectItem value="12th Pass">12th Pass</SelectItem>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem><SelectItem value="Post Graduate">Post Graduate</SelectItem>
                    <SelectItem value="PhD Scholar">PhD Scholar</SelectItem><SelectItem value="PhD">PhD</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification.message}</p>}
              </div>
              <div>
                <Label>Occupation</Label>
                <Input {...register("occupation")} placeholder="Enter occupation" />
                {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
              </div>
              <div className="col-span-1 md:col-span-2 flex items-center space-x-2 mt-4">
                <Checkbox checked={formData.sameAsPermanent} onCheckedChange={(checked: boolean) => setValue("sameAsPermanent", !!checked)} />
                <Label>Same as Permanent Address</Label>
              </div>
              <div className="md:col-span-2">
                <Label>Current Address</Label>
                <Input {...register("currentAddress")} disabled={formData.sameAsPermanent} placeholder="Enter address" />
                {errors.currentAddress && <p className="text-red-500 text-sm mt-1">{errors.currentAddress.message}</p>}
              </div>
              <div>
                <Label>Current State</Label>
                <Select
                  value={formData.currentState}
                  onValueChange={(value: string) => {
                    setValue("currentState", value);
                    const selected = currentStates.find((s) => s.name === value);
                    setCurrentCities(City.getCitiesOfState("IN", selected?.isoCode as string) || []);
                  }}
                  disabled={formData.sameAsPermanent}
                >
                  <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                  <SelectContent>
                    {currentStates.map((state) => (
                      <SelectItem key={state.isoCode} value={state.name}>{state.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentState && <p className="text-red-500 text-sm mt-1">{errors.currentState.message}</p>}
              </div>
              <div>
                <Label>Current City</Label>
                <Select value={formData.currentCity} onValueChange={(value: string) => setValue("currentCity", value)} disabled={formData.sameAsPermanent}>
                  <SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger>
                  <SelectContent>
                    {currentCities.map((city) => (
                      <SelectItem key={city.name} value={city.name}>{city.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentCity && <p className="text-red-500 text-sm mt-1">{errors.currentCity.message}</p>}
              </div>
              <div>
                <Label>Pincode</Label>
                <Input {...register("currentPincode")} disabled={formData.sameAsPermanent} placeholder="6-digit pincode" />
                {errors.currentPincode && <p className="text-red-500 text-sm mt-1">{errors.currentPincode.message}</p>}
              </div>
            </div>
          </section>

          {/* Declaration */}
          <section className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
            <Checkbox className="mt-1" checked={formData.agreeToTerms} onCheckedChange={(checked: boolean) => setValue("agreeToTerms", !!checked)} />
            <div>
              <Label className="text-sm text-gray-700 leading-relaxed">
                I hereby declare that the information provided is true and accurate. I agree to abide by the rules and consent to the processing of my personal data.
              </Label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>}
            </div>
          </section>

          {/* Submit */}
          <div className="text-center pt-4">
            <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-primary-theme text-white rounded-md font-semibold hover:bg-opacity-90 transition disabled:opacity-50">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
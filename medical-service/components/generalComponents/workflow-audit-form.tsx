"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  clinicName: z.string().min(1, "Clinic/Organization name is required"),
  role: z.string().min(1, "Role/Area of expertise is required"),
  clinicSize: z.string().min(1, "Clinic size is required"),
  currentChallenges: z.string().min(1, "Current challenges is required"),
  emrUsage: z.string().refine(
    (val) => ["Yes", "No", "Not Sure"].includes(val),
    { message: "Please select an option" }
  ),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface WorkflowAuditFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkflowAuditForm({ open, onOpenChange }: WorkflowAuditFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const emrUsage = watch("emrUsage");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/form-logo.svg"
              alt="MVA Logo"
              width={110}
              height={44}
              className="w-auto h-auto"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-black mb-2">
            Book a Free Workflow Audit
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              {...register("name")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50">
                <span className="text-lg">🇳🇬</span>
                <span className="text-gray-700">+234</span>
              </div>
              <input
                type="tel"
                placeholder="0000"
                {...register("phoneNumber")}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="Type in your country name"
              {...register("country")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Clinic/Organization Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Clinic / Organization Name
            </label>
            <input
              type="text"
              placeholder="Type in your clinic name"
              {...register("clinicName")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.clinicName && (
              <p className="text-red-500 text-xs mt-1">{errors.clinicName.message}</p>
            )}
          </div>

          {/* Role/Area of Expertise */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Role/Area of Expertise
            </label>
            <input
              type="text"
              placeholder="Type in your role"
              {...register("role")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Clinic Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Clinic Size
            </label>
            <Select
              onValueChange={(value) => setValue("clinicSize", value)}
              defaultValue=""
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select clinic size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10-20 employees">10-20 employees</SelectItem>
                <SelectItem value="21-50 employees">21-50 employees</SelectItem>
                <SelectItem value="51-100 employees">51-100 employees</SelectItem>
                <SelectItem value="100+ employees">100+ employees</SelectItem>
              </SelectContent>
            </Select>
            {errors.clinicSize && (
              <p className="text-red-500 text-xs mt-1">{errors.clinicSize.message}</p>
            )}
          </div>

          {/* Current Challenges */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Current Challenges
            </label>
            <input
              type="text"
              placeholder="Type in the major challenges you face"
              {...register("currentChallenges")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.currentChallenges && (
              <p className="text-red-500 text-xs mt-1">{errors.currentChallenges.message}</p>
            )}
          </div>

          {/* EMR/EHR System Usage */}
          <div>
            <p className="block text-sm font-semibold text-gray-700 mb-3">
              Do you currently use an EMR/EHR system?
            </p>
            <div className="flex gap-6">
              {["Yes", "No", "Not Sure"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={option}
                    checked={emrUsage === option}
                    onChange={() => setValue("emrUsage", option)}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            {errors.emrUsage && (
              <p className="text-red-500 text-xs mt-1">{errors.emrUsage.message}</p>
            )}
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Anything else we should know?
            </label>
            <textarea
              placeholder="Write something"
              rows={4}
              {...register("additionalInfo")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-6 text-base font-semibold"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

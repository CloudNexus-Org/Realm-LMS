"use client";

import { create } from "zustand";

interface FormErrors {
  fullName?: string;
  phone?: string;
  age?: string;
  gender?: string;
  careerTrack?: string;
  interestedModule?: string;
}

interface EnrollmentState {
  // Form fields
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  careerTrack: string;
  interestedModule: string;

  // UI state
  errors: FormErrors;
  apiError: string;
  loading: boolean;
  success: boolean;

  // Actions
  setField: (field: keyof EnrollmentState, value: string) => void;
  setErrors: (errors: FormErrors) => void;
  setApiError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (success: boolean) => void;
  resetForm: () => void;
}

const initialState = {
  fullName: "",
  phone: "",
  age: "",
  gender: "",
  careerTrack: "DevOps Engineering",
  interestedModule: "Module 2 — Accelerator (₹99,999)",
  errors: {},
  apiError: "",
  loading: false,
  success: false,
};

export const useEnrollmentStore = create<EnrollmentState>((set) => ({
  ...initialState,

  setField: (field, value) => set({ [field]: value } as Partial<EnrollmentState>),

  setErrors: (errors) => set({ errors }),

  setApiError: (apiError) => set({ apiError }),

  setLoading: (loading) => set({ loading }),

  setSuccess: (success) => set({ success }),

  resetForm: () => set(initialState),
}));

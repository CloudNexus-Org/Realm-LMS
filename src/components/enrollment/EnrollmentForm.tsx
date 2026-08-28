"use client";

import { FormEvent } from "react";
import api from "@/lib/axios";
import { useEnrollmentStore } from "@/store/useEnrollmentStore";
import type { ApiResponse, EnrollmentRecord } from "@/types/enrollment";

const CAREER_TRACKS = [
  "DevOps Engineering",
  "AI / Machine Learning",
  "Full Stack Development",
  "Internet of Things",
  "Digital Marketing",
  "Graphic Designing",
];

const MODULES = [
  "Module 1 — Guaranteed (₹1,49,999)",
  "Module 2 — Accelerator (₹99,999)",
  "Module 3 — Foundation (₹59,999)",
  "Not sure yet",
];

export default function EnrollmentForm() {
  const {
    fullName,
    phone,
    age,
    gender,
    careerTrack,
    interestedModule,
    errors,
    apiError,
    loading,
    success,
    setField,
    setErrors,
    setApiError,
    setLoading,
    setSuccess,
  } = useEnrollmentStore();

  function validateClient(): boolean {
    const newErrors: typeof errors = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!phone.trim() || !/^[+]?[\d\s\-()]{7,20}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const ageNum = parseInt(age, 10);
    if (!age || isNaN(ageNum)) {
      newErrors.age = "Please enter your age";
    } else if (ageNum < 16 || ageNum > 100) {
      newErrors.age = "You must be between 16 and 100 years old";
    }

    if (!gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!careerTrack) {
      newErrors.careerTrack = "Please select a career track";
    }

    if (!interestedModule) {
      newErrors.interestedModule = "Please select a module";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setApiError("");

    if (!validateClient()) return;

    setLoading(true);

    try {
      await api.post<ApiResponse<EnrollmentRecord>>("/api/enrollments", {
        fullName: fullName.trim(),
        phone: phone.trim(),
        age: parseInt(age, 10),
        gender,
        careerTrack,
        interestedModule,
      });

      // Reset fields but show success screen
      setField("fullName", "");
      setField("phone", "");
      setField("age", "");
      setField("gender", "");
      setField("careerTrack", "DevOps Engineering");
      setField("interestedModule", "Module 2 — Accelerator (₹99,999)");
      setErrors({});
      setApiError("");
      setSuccess(true);
    } catch (err) {
      if (
        err &&
        typeof err === "object" &&
        "response" in err &&
        err.response &&
        typeof err.response === "object" &&
        "data" in err.response
      ) {
        const data = (err.response as { data: ApiResponse }).data;
        if (data.errors && Array.isArray(data.errors)) {
          setApiError(data.errors.join(", "));
        } else {
          setApiError(data.message || "Something went wrong");
        }
      } else {
        setApiError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-card">
      {!success ? (
        <div>
          <h3>Request a callback</h3>
          <p className="sub">We&apos;ll reach out within one business day.</p>
          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="field">
              <label htmlFor="fname">Full name</label>
              <input
                type="text"
                id="fname"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                className={errors.fullName ? "error" : ""}
              />
              {errors.fullName && (
                <span className="field-error">{errors.fullName}</span>
              )}
            </div>

            {/* Phone */}
            <div className="field">
              <label htmlFor="fphone">Phone number</label>
              <input
                type="tel"
                id="fphone"
                placeholder="+91 00000 00000"
                value={phone}
                onChange={(e) => setField("phone", e.target.value)}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </div>

            {/* Age */}
            <div className="field">
              <label htmlFor="fage">Age</label>
              <input
                type="number"
                id="fage"
                placeholder="Your age"
                min="16"
                max="100"
                value={age}
                onChange={(e) => setField("age", e.target.value)}
                className={errors.age ? "error" : ""}
              />
              {errors.age && (
                <span className="field-error">{errors.age}</span>
              )}
            </div>

            {/* Gender */}
            <div className="field">
              <label htmlFor="fgender">Gender</label>
              <select
                id="fgender"
                value={gender}
                onChange={(e) => setField("gender", e.target.value)}
                className={errors.gender ? "error" : ""}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <span className="field-error">{errors.gender}</span>
              )}
            </div>

            {/* Career Track */}
            <div className="field">
              <label htmlFor="ftrack">Career track</label>
              <select
                id="ftrack"
                value={careerTrack}
                onChange={(e) => setField("careerTrack", e.target.value)}
                className={errors.careerTrack ? "error" : ""}
              >
                {CAREER_TRACKS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.careerTrack && (
                <span className="field-error">{errors.careerTrack}</span>
              )}
            </div>

            {/* Interested Module */}
            <div className="field">
              <label htmlFor="fmodule">Interested module</label>
              <select
                id="fmodule"
                value={interestedModule}
                onChange={(e) => setField("interestedModule", e.target.value)}
                className={errors.interestedModule ? "error" : ""}
              >
                {MODULES.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              {errors.interestedModule && (
                <span className="field-error">{errors.interestedModule}</span>
              )}
            </div>

            {apiError && (
              <p className="field-error" style={{ marginBottom: "12px" }}>
                {apiError}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request Callback"}
            </button>
            <p className="form-note">
              By submitting, you agree to be contacted by Realm Consulting.
            </p>
          </form>
        </div>
      ) : (
        <div className="form-success visible">
          <div className="tick">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4>Request received</h4>
          <p>
            An advisor will call you within one business day to walk through
            your track and module.
          </p>
        </div>
      )}
    </div>
  );
}

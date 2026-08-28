"use client";

import { FormEvent } from "react";
import api from "@/lib/axios";
import { useEnrollmentStore } from "@/store/useEnrollmentStore";
import type { ApiResponse, EnrollmentRecord } from "@/types/enrollment";

const CAREER_TRACKS = [
  "DevOps Engineering",
  "AI / Machine Learning",
  "Full Stack Development",
];

export default function EnrollmentForm() {
  const {
    fullName,
    phone,
    dateOfBirth,
    gender,
    careerTrack,
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

    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Please enter your date of birth";
    } else {
      const dob = new Date(dateOfBirth);
      if (isNaN(dob.getTime())) {
        newErrors.dateOfBirth = "Please enter a valid date";
      } else {
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (age < 16 || age > 100) {
          newErrors.dateOfBirth = "You must be between 16 and 100 years old";
        }
      }
    }

    if (!gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!careerTrack) {
      newErrors.careerTrack = "Please select a career track";
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
        dateOfBirth,
        gender,
        careerTrack,
      });

      setField("fullName", "");
      setField("phone", "");
      setField("dateOfBirth", "");
      setField("gender", "");
      setField("careerTrack", "DevOps Engineering");
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

            <div className="field">
              <label htmlFor="fdob">Date of Birth</label>
              <input
                type="date"
                id="fdob"
                value={dateOfBirth}
                onChange={(e) => setField("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? "error" : ""}
              />
              {errors.dateOfBirth && (
                <span className="field-error">{errors.dateOfBirth}</span>
              )}
            </div>

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

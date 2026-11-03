import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/sections/SectionLabel";
import {
  EARLY_ACCESS_FORM,
  WAITLIST_ENDPOINT,
} from "@/data/early-access-content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUEST_TIMEOUT_MS = 15000;
const { fields, errors: errorText, success } = EARLY_ACCESS_FORM;

const fieldClass =
  "w-full px-3.5 py-2.5 bg-paper border text-ink font-geist text-base sm:text-sm placeholder:text-muted/70 focus:outline-none focus:border-soket-blue focus:ring-1 focus:ring-soket-blue transition-colors";

function validate({ fullName, email, useCase, dataConsent }) {
  const errors = {};
  if (!fullName.trim()) errors.fullName = errorText.fullName;
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = errorText.email;
  if (!useCase.trim()) errors.useCase = errorText.useCase;
  if (!dataConsent) errors.dataConsent = errorText.dataConsent;
  return errors;
}

async function joinWaitlist(values) {
  // `npm run dev` never writes to the real waitlist, unless pointed at a test
  // backend with NEXT_PUBLIC_WAITLIST_ENDPOINT
  if (
    process.env.NODE_ENV === "development" &&
    !process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT
  ) {
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      signal: controller.signal,
    });
  } catch {
    // No connection, or no answer in time
    throw new Error(errorText.server);
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    const { message } = await response.json().catch(() => ({}));
    // Only the backend's "fix this" answers are meant for the visitor
    throw new Error(response.status < 500 ? message : errorText.server);
  }
}

function FieldError({ name, error }) {
  if (!error) return null;
  return (
    <p id={`${name}-error`} className="mt-2 font-geist text-sm text-red-700">
      {error}
    </p>
  );
}

function Field({ name, error, children }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-geist text-sm font-medium text-ink mb-2"
      >
        {fields[name].label}
      </label>
      {children}
      <FieldError name={name} error={error} />
    </div>
  );
}

export default function EarlyAccessForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    useCase: "",
    dataConsent: false,
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    placeholder: fields[name].placeholder,
    maxLength: fields[name].maxLength,
    required: true,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `${fieldClass} ${errors[name] ? "border-red-700" : "border-hairline hover:border-muted"}`,
    onChange: (event) => {
      setValues((current) => ({ ...current, [name]: event.target.value }));
      setErrors((current) => ({ ...current, [name]: undefined }));
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError("");

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await joinWaitlist({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        useCase: values.useCase.trim(),
        dataConsent: values.dataConsent,
      });
      setStatus("success");
    } catch (error) {
      setFormError(error.message || errorText.server);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-hairline bg-white p-6 sm:p-8" role="status">
        <span
          className="flex items-center justify-center w-10 h-10 mb-6 bg-soket-blue/10 text-soket-blue"
          aria-hidden="true"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path
              d="M1.5 7.5L6.5 12.5L16.5 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-2xl font-medium tracking-tight mb-3 focus:outline-none"
        >
          {success.title}
        </h2>
        <p className="text-17 text-muted leading-relaxed mb-6 break-words">
          {success.description(values.email.trim())}
        </p>
        <Link
          href={success.cta.href}
          className="font-geist text-sm text-soket-blue hover:underline underline-offset-2"
        >
          {success.cta.label} →
        </Link>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={EARLY_ACCESS_FORM.submit}
      className="border border-hairline bg-white p-6 sm:p-8 space-y-4"
    >
      <SectionLabel>{EARLY_ACCESS_FORM.label}</SectionLabel>

      <Field name="fullName" error={errors.fullName}>
        <input type="text" autoComplete="name" {...fieldProps("fullName")} />
      </Field>

      <Field name="email" error={errors.email}>
        <input type="email" autoComplete="email" {...fieldProps("email")} />
      </Field>

      <Field name="useCase" error={errors.useCase}>
        <textarea rows={3} {...fieldProps("useCase")} />
      </Field>

      <div>
        <label
          htmlFor="dataConsent"
          className="flex items-start gap-2.5 font-geist text-[13px] text-muted leading-snug cursor-pointer"
        >
          <input
            id="dataConsent"
            name="dataConsent"
            type="checkbox"
            required
            checked={values.dataConsent}
            aria-invalid={!!errors.dataConsent}
            aria-describedby={
              errors.dataConsent ? "dataConsent-error" : undefined
            }
            onChange={(event) => {
              const { checked } = event.target;
              setValues((current) => ({ ...current, dataConsent: checked }));
              setErrors((current) => ({ ...current, dataConsent: undefined }));
            }}
            className="mt-0.5 w-4 h-4 shrink-0 accent-soket-blue cursor-pointer"
          />
          <span>{EARLY_ACCESS_FORM.dataConsent}</span>
        </label>
        <FieldError name="dataConsent" error={errors.dataConsent} />
      </div>

      {formError && (
        <p role="alert" className="font-geist text-sm text-red-700">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-ink text-white font-geist text-sm hover:bg-soket-blue disabled:opacity-60 disabled:cursor-wait transition-colors"
      >
        {isSubmitting
          ? EARLY_ACCESS_FORM.submitting
          : EARLY_ACCESS_FORM.submit}
      </button>
    </form>
  );
}

import { CheckCircle, ArrowRight, Calendar } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/hello-atlasdigitalagency/30min";

export default function PaymentSuccess() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#0D0D0F" }}
    >
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "oklch(0.52 0.22 293 / 0.15)" }}
        >
          <CheckCircle size={40} style={{ color: "oklch(0.72 0.18 293)" }} />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Payment Confirmed!
        </h1>
        <p
          className="text-white/55 text-base leading-relaxed mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Thank you for choosing Atlas Digital Agency. Your payment was processed
          successfully. Our team will be in touch within 24 hours to kick things off.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
          >
            <Calendar size={16} />
            Book Your Onboarding Call
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
          >
            Back to Home
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Email note */}
        <p
          className="text-white/30 text-xs mt-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          A receipt has been sent to your email. Questions? Contact us at{" "}
          <span className="text-white/50">hello@atlasdigitalagency.net</span>
        </p>
      </div>
    </div>
  );
}

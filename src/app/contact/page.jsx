import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-base-100">
      <section className="bg-base-200 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            We&apos;d Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base-content/70 md:text-lg">
            Have a question about our courses, combos, or anything else?
            Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <p className="mt-2 text-base-content/60">
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    support@edulearn.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Sat - Thu, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg md:p-8">
              <div className="mb-7">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-content">
                  <MessageCircle size={23} />
                </div>

                <h2 className="text-2xl font-bold">Send Us a Message</h2>

                <p className="mt-2 text-base-content/60">
                  Fill out the form below and we&apos;ll get back to you soon.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full gap-2">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Need Quick Help?</h2>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Check out our courses and combos or log in to your dashboard to
            manage your learning journey.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/course" className="btn btn-primary">
              Explore Courses
            </a>

            <a href="/dashboard" className="btn btn-outline">
              Go to Dashboard
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
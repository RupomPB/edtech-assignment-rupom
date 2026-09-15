import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-base-200">
      <section className="relative overflow-hidden bg-base-100 py-20 sm:py-24">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <MessageCircle size={15} />
            Get In Touch
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            We&apos;d Love to{" "}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-base-content/60 sm:text-lg">
            Have a question about our courses, combos, or anything else?
            Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="mb-7">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg shadow-primary/20">
                  <MessageCircle size={25} />
                </div>

                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Contact Information
                </h2>

                <p className="mt-3 max-w-md leading-6 text-base-content/60">
                  Reach out to us through any of the following channels. Our
                  team is always ready to help you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-content">
                      <Mail size={21} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold">Email Us</h3>

                      <p className="mt-1 break-all text-sm text-base-content/60">
                        rupombadhan111@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                      <Phone size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold">Call Us</h3>

                      <p className="mt-1 text-sm text-base-content/60">
                        +880 1568-115886
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition duration-300 group-hover:bg-accent group-hover:text-accent-content">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold">Our Location</h3>

                      <p className="mt-1 text-sm text-base-content/60">
                        Mirpur,Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-content">
                      <Clock size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold">Working Hours</h3>

                      <p className="mt-1 text-sm text-base-content/60">
                        Sat - Thu, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-linear-to-br from-primary via-secondary to-primary p-6 text-primary-content shadow-xl">
                <div className="relative">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl"></div>

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-content/70">
                      EdTech Support
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      We&apos;re here to help you learn better.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-primary-content/70">
                      Questions about courses, combos, or your purchase? Just
                      reach out to our support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>

                <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="relative">
                  <div className="mb-8 flex items-start gap-4">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg shadow-primary/20">
                      <MessageCircle size={23} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-extrabold">
                        Send Us a Message
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-base-content/60">
                        Fill out the form below and we&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  </div>

                  <form className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Your Name
                        </label>

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="input input-bordered h-12 w-full rounded-xl bg-base-200/50 px-4 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Email Address
                        </label>

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="input input-bordered h-12 w-full rounded-xl bg-base-200/50 px-4 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="What is this about?"
                        className="input input-bordered h-12 w-full rounded-xl bg-base-200/50 px-4 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Message
                      </label>

                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="textarea textarea-bordered min-h-36 w-full resize-none rounded-xl bg-base-200/50 p-4 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary h-13 w-full gap-3 rounded-xl border-0 bg-linear-to-r from-primary via-secondary to-primary text-base font-bold shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-100 py-16 sm:py-20">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle size={25} />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Need Quick Help?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-base-content/60">
            Check out our courses and combos or log in to your dashboard to
            manage your learning journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
  <Link
    href="/courses"
    className="btn btn-primary h-12 rounded-xl px-7 shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5"
  >
    Explore Courses
  </Link>

  <Link
    href="/dashboard"
    className="btn btn-outline h-12 rounded-xl px-7 transition duration-300 hover:-translate-y-0.5"
  >
    Go to Dashboard
  </Link>
</div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
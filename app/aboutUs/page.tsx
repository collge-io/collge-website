import React from 'react'
import SparklesText from '@/components/magicui/sparkles-text'

const page = () => {
  return (
    <section className="w-full h-auto lg:h-auto flex flex-col py-10">
      <div className='flex flex-col py-10 justify-center items-center'>
        <SparklesText text="About Us"></SparklesText>
      </div>
      <div className="px-6 sm:px-12 lg:px-24 space-y-6 mb-5">
        {/* Who We Are Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Who We Are</p>
          <p className='text-[var(--text-accent)]'>
            Collge is a social networking platform for students by students
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Our Mission</p>
          <p className='text-[var(--text-accent)]'>
            Our mission is to help students network in their university and beyond.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Contact Information</p>
          <p className='text-[var(--text-accent)]'>
            For any questions, feedback, or support inquiries, please feel free to reach out to us at <a href="mailto:support@collge.io" className="text-[var(--secondary)]">support@collge.io</a><br /> or call us at <a href="tel:+1234567890" className="text-[var(--secondary)]">+44 7551 968331</a>.
          </p>
        </div>

        {/* Address Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Our Address</p>
          <p className='text-[var(--text-accent)]'>
            Flat 75-C<br />
            Sarfaraz Rafiqui Road,<br />
            Askari 1, Lahore.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page

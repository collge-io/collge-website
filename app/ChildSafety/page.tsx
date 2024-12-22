import React from 'react'
import SparklesText from '@/components/magicui/sparkles-text'

const page = () => {
  return (
    <section className="w-full h-auto lg:h-auto flex flex-col py-10">
      <div className='flex flex-col  py-10 justify-center items-center'>
        <SparklesText text="Child Safety Policy"></SparklesText> 
      </div>
      <div className="px-6 sm:px-12 lg:px-24 space-y-6 mb-5">
        {/* Introduction Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Introduction</p>
          <p>
            Collge is committed to creating a safe environment for all users. We strongly condemn any form of child sexual abuse or exploitation and take proactive steps to prevent, detect, and address such activities on our platform.
          </p>
        </div>

        {/* Prohibited Content Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Prohibited Content</p>
          <ul className="list-disc pl-6">
            <li>Any media or text involving child exploitation.</li>
            <li>Grooming behavior or solicitation of minors.</li>
            <li>Distribution of explicit content involving minors.</li>
          </ul>
        </div>

        {/* Moderation and Prevention Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Moderation and Prevention</p>
          <p>
            Our platform uses in app reporting functionality to identify and remove harmful content.
          </p>
        </div>

        {/* Reporting Mechanisms Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Reporting Mechanisms</p>
          <p>
            Users can report any concerning content or behavior via in-app reporting tool or by contacting us at <a href="mailto:support@collge.io" className="text-[var(--secondary)]">support@collge.io</a>. Reports are reviewed promptly, and appropriate action, including removal and reporting to authorities, is taken.
          </p>
        </div>

        {/* Compliance with Laws Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Compliance with Laws</p>
          <p>
            We intend to follow law enforcement agencies such as the <a href="https://www.iwf.org.uk" target="_blank" className="text-[var(--secondary)]">Internet Watch Foundation</a> when necessary.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-lg leading-relaxed">
          <p className="font-semibold text-xl">Contact Us</p>
          <p>
            If you have questions or concerns about our policies, contact us at <a href="mailto:support@collge.io" className="text-[var(--secondary)]">support@collge.io</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page

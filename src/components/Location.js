import React from "react";

const Location = () => {
  return (
    <section className='bg-white' id='location'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>
            Visit Our Location
          </h2>
          <p className='mt-4 text-lg text-gray-500'>
            Checkout the map below to see our location or contact us
          </p>
        </div>
        <div className='mt-16 lg:mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='rounded-lg overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d369.4003434661661!2d36.754150036259!3d-1.3946130074235534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1styme%20suites%20rongai%2C%20magadi%20road!5e0!3m2!1sen!2ske!4v1729920770537!5m2!1sen!2ske'
                width='100%'
                height='480'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'></iframe>
            </div>
            <div>
              <div className='max-w-full mx-auto rounded-lg overflow-hidden'>
                <div className='px-6 py-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Our Address
                  </h3>
                  <p className='mt-1 text-gray-600'>
                    3rd Floor, Room 306, TYME SUITES,
                  </p>
                  <p className='mt-1 text-gray-600'>
                    OPP Ongata Mall, Next to ABSA BANK,
                  </p>
                  <p className='mt-1 text-gray-600'>
                    Magadi Road, Ongata Rongai
                  </p>
                </div>
                <div className='border-t border-gray-200 px-6 py-4'>
                  <h3 className='text-lg font-medium text-gray-900'>Hours</h3>
                  <p className='mt-1 text-gray-600'>
                    Monday - Saturday: 8am - 8pm
                  </p>
                  <p className='mt-1 text-gray-600'>Sunday: Closed</p>
                </div>
                <div className='border-t border-gray-200 px-6 py-4'>
                  <h3 className='text-lg font-medium text-gray-900'>Contact</h3>
                  <p className='mt-1 text-gray-600'>Email: info@example.com</p>
                  <p className='mt-1 text-gray-600'>Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

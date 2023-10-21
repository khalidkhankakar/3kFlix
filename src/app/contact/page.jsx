import { HiOutlineMail } from 'react-icons/hi';
import { GrCloudDownload } from 'react-icons/gr';
const Contact = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 font-ubuntu mb-2">Contact With Us</h1>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <HiOutlineMail className="text-red-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Emails</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <GrCloudDownload className="text-red-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Emails</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <HiOutlineMail className="text-red-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Emails</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <HiOutlineMail className="text-red-500 w-12 h-12 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Emails</p>
        </div>
      </div>

    </div>
  </div>
</section>
<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe  width="100%" height="100%" class="absolute inset-0"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.921389898389!2d68.36076807552183!3d30.692487787576635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392c450d1e40b841%3A0xb0bf2f5dc11fcb00!2sKilla%20saifullah%20Public%20Library!5e0!3m2!1sen!2s!4v1684148593762!5m2!1sen!2s" style={{"border":"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Public Library of Killa saifullah</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">khalidkhankakar2468@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">0346-3644971</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Send me your Feedback about website</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Khalid khan blog about the movies</p>
    </div>
  </div>
</section>
</>
  )
}

export default Contact
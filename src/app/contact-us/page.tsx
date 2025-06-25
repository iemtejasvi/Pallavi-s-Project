import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconPhone,
    IconMail,
    IconMapPin,
} from '@tabler/icons-react';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ccd9f3] via-[#e6eaf8] to-[#f0f4ff]">
            <main className="flex-1 container mx-auto px-2 py-12">
                {/* Contact Us Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e40af] mb-2">Contact Us</h2>
                    <p className="text-lg text-[#6b7280]">Any question or remarks? Just write us a message!</p>
                </div>

                {/* Contact Card */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 mb-16">
                    {/* Left: Contact Info */}
                    <div className="bg-[#3d4ed4] relative rounded-l-xl rounded-r-none shadow-lg p-8 w-full md:max-w-[350px] flex flex-col justify-between text-white overflow-hidden border-t border-b border-l border-white">
                        {/* Circles */}
                        <div className="absolute right-[-60px] bottom-[-60px] opacity-20 pointer-events-none">
                            <div className="w-40 h-40 bg-white rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Contact Information</h3>
                            <p className="mb-6 text-sm opacity-80">Say something to start a live chat!</p>
                            <div className="flex items-center mb-4">
                                <IconPhone className="mr-3" size={20} />
                                <span className="text-base">+91 012 3465 789</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <IconMail className="mr-3" size={20} />
                                <span className="text-base">support@fixit.com</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <IconMapPin className="mr-3" size={20} />
                                <span className="text-base">Narasaraopet, Palnadu (Dt), A.P, India.</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <span className="block mb-2 font-semibold">Follow Us</span>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-300"><IconBrandFacebook size={22} /></a>
                                <a href="#" className="hover:text-gray-300"><IconBrandInstagram size={22} /></a>
                            </div>
                        </div>
                    </div>
                    {/* Right: Form */}
                    <form className="bg-white rounded-r-xl rounded-l-none shadow-lg p-8 w-full md:max-w-2xl border-t border-b border-r border-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label className="block mb-1 font-semibold text-sm">First Name</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="First Name" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Last Name</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Last Name" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Email</label>
                                <input type="email" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Email" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Phone Number</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="+91 012 3465 789" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-semibold text-sm">Select Subject?</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="subject" className="accent-[#0039a6]" defaultChecked />
                                    General Inquiry
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="subject" className="accent-[#0039a6]" />
                                    General Inquiry
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="subject" className="accent-[#0039a6]" />
                                    General Inquiry
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="subject" className="accent-[#0039a6]" />
                                    General Inquiry
                                </label>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-1 font-semibold text-sm">Message</label>
                            <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none resize-none" placeholder="Write your message..."></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#2563eb] hover:bg-[#0039a6] text-white px-8 py-2 rounded-md font-semibold transition text-base shadow">Send Message</button>
                        </div>
                    </form>
                </div>

                {/* Locations Section */}
                <div className="mt-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e40af] text-center mb-8">Locations near&nbsp; your Area</h2>
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                        {/* Map */}
                        <div className="bg-white rounded-l-xl rounded-r-none shadow-lg p-3 w-full md:max-w-[420px] flex flex-col justify-center border-t border-b border-l border-white">
                            <iframe
                                title="FixIt Location"
                                src="https://www.google.com/maps?q=Narasaraopet,+Palnadu+(Dt),+A.P.,+India.&output=embed"
                                width="100%"
                                height="260"
                                className="rounded-lg border-0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        {/* Shops List */}
                        <div className="bg-white rounded-r-xl rounded-l-none shadow-lg p-6 w-full md:max-w-[420px] border-t border-b border-r border-white">
                            <h3 className="text-lg font-bold mb-3 text-[#0039a6]">Title - Shops</h3>
                            <ul className="divide-y divide-gray-200">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <li key={i} className="flex items-center py-2 gap-3">
                                        <span className="bg-green-100 text-green-700 rounded-md p-1">
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="3" fill="#22c55e"/><rect width="10" height="2" x="7" y="9" fill="#fff"/><rect width="10" height="2" x="7" y="13" fill="#fff"/></svg>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-gray-800">Location-{i + 1}</div>
                                            <div className="text-xs text-gray-500">Description</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage; 
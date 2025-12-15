'use client';

import { useState } from 'react';

export default function JoinPage() {
    const [membershipLevel, setMembershipLevel] = useState('');
    const [workMatches, setWorkMatches] = useState(false);
    const [newsletterFormat, setNewsletterFormat] = useState('');
    const [volunteers, setVolunteers] = useState<string[]>([]);
    const [otherVolunteer, setOtherVolunteer] = useState('');
    const [instruments, setInstruments] = useState('');

    const handleVolunteerChange = (value: string) => {
        setVolunteers(prev => 
            prev.includes(value) 
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Become a Member
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        <b>If you are looking to renew your membership, click <a href="/members/renew" className="text-green hover:underline">here</a>.</b>
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <p className="font-body text-gray-700 mb-4 leading-relaxed">
                        Fill out this form to join the Columbus Folk Music Society and start enjoying the benefits of membership today!
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">New Member Form</h3>
                    <form className="space-y-6">
                        {/* Membership Level */}
                        <div>
                            <label htmlFor="membershipLevel" className="block text-sm font-medium text-charcoal">Membership Level *</label>
                            <select 
                                id="membershipLevel" 
                                name="membershipLevel" 
                                value={membershipLevel}
                                onChange={(e) => setMembershipLevel(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" 
                                required
                            >
                                <option value="">Select a membership level</option>
                                <option value="individual">Individual ($20)</option>
                                <option value="household">Household ($25)</option>
                                <option value="band">Band ($25)</option>
                                <option value="goodfriend">Good Friend ($50)</option>
                                <option value="sponsor">Sponsor ($100)</option>
                                <option value="patron">Patron ($200)</option>
                                <option value="silver">Silver ($250)</option>
                                <option value="gold">Gold [Life Member] ($500)</option>
                            </select>
                        </div>

                        {/* Work Donation Match */}
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="workMatches" 
                                name="workMatches"
                                checked={workMatches}
                                onChange={(e) => setWorkMatches(e.target.checked)}
                                className="h-4 w-4 text-green border-gray-300 rounded focus:ring-green"
                            />
                            <label htmlFor="workMatches" className="ml-2 block text-sm text-charcoal">
                                My place of work matches donations
                            </label>
                        </div>

                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-charcoal">First Name *</label>
                            <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-charcoal">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-charcoal">Address</label>
                            <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-charcoal">City</label>
                            <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                        </div>

                        {/* Zip */}
                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-charcoal">Zip</label>
                            <input type="text" id="zip" name="zip" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                        </div>

                        {/* State */}
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-charcoal">State</label>
                            <input type="text" id="state" name="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-charcoal">Date of Birth *</label>
                            <input type="date" id="dob" name="dob" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal">Phone</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email *</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>

                        {/* Household Membership - Second Email */}
                        {membershipLevel === 'household' && (
                            <div>
                                <label htmlFor="secondEmail" className="block text-sm font-medium text-charcoal">Second Email (Household)</label>
                                <input type="email" id="secondEmail" name="secondEmail" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                            </div>
                        )}

                        {/* Band Membership - Additional Fields */}
                        {membershipLevel === 'band' && (
                            <>
                                <div>
                                    <label htmlFor="bandSecondEmail" className="block text-sm font-medium text-charcoal">Second Email (Band)</label>
                                    <input type="email" id="bandSecondEmail" name="bandSecondEmail" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                                </div>
                                <div>
                                    <label htmlFor="bandName" className="block text-sm font-medium text-charcoal">Band Name</label>
                                    <input type="text" id="bandName" name="bandName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                                </div>
                                <div>
                                    <label htmlFor="bandWebsite" className="block text-sm font-medium text-charcoal">Band Website</label>
                                    <input type="url" id="bandWebsite" name="bandWebsite" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" />
                                </div>
                            </>
                        )}

                        {/* Newsletter Format */}
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">Preferred Newsletter Format</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        id="digital" 
                                        name="newsletterFormat" 
                                        value="digital"
                                        checked={newsletterFormat === 'digital'}
                                        onChange={(e) => setNewsletterFormat(e.target.value)}
                                        className="h-4 w-4 text-green border-gray-300 focus:ring-green"
                                    />
                                    <label htmlFor="digital" className="ml-2 block text-sm text-charcoal">Digital</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        id="hardcopy" 
                                        name="newsletterFormat" 
                                        value="hardcopy"
                                        checked={newsletterFormat === 'hardcopy'}
                                        onChange={(e) => setNewsletterFormat(e.target.value)}
                                        className="h-4 w-4 text-green border-gray-300 focus:ring-green"
                                    />
                                    <label htmlFor="hardcopy" className="ml-2 block text-sm text-charcoal">Hard Copy</label>
                                </div>
                            </div>
                        </div>

                        {/* Volunteer Opportunities */}
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-3">Volunteer Opportunities (Optional)</label>
                            <div className="space-y-2">
                                {[
                                    { value: 'juneFest', label: 'June Folk Festival' },
                                    { value: 'concertEvents', label: 'CFMS Concert Events' },
                                    { value: 'cooking', label: 'Cooking / Baking' },
                                    { value: 'dataManagement', label: 'Data Management' },
                                    { value: 'fundraising', label: 'Fundraising' },
                                    { value: 'generalHelp', label: 'General Help' },
                                    { value: 'graphicDesign', label: 'Graphic Design' },
                                    { value: 'leadership', label: 'Leadership Skills' },
                                    { value: 'legal', label: 'Legal' },
                                    { value: 'musician', label: 'Musician' },
                                    { value: 'organizational', label: 'Organizational Skills' },
                                    { value: 'proMusician', label: 'Professional Musician' },
                                    { value: 'none', label: 'None' }
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id={option.value} 
                                            value={option.value}
                                            checked={volunteers.includes(option.value)}
                                            onChange={() => handleVolunteerChange(option.value)}
                                            className="h-4 w-4 text-green border-gray-300 rounded focus:ring-green"
                                        />
                                        <label htmlFor={option.value} className="ml-2 block text-sm text-charcoal">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}

                                {/* Professional Music Instructor with text box */}
                                <div className="flex items-start">
                                    <input 
                                        type="checkbox" 
                                        id="proInstructor" 
                                        value="proInstructor"
                                        checked={volunteers.includes('proInstructor')}
                                        onChange={() => handleVolunteerChange('proInstructor')}
                                        className="h-4 w-4 text-green border-gray-300 rounded focus:ring-green mt-1"
                                    />
                                    <div className="ml-2 flex-1">
                                        <label htmlFor="proInstructor" className="block text-sm text-charcoal">
                                            Professional Music Instructor
                                        </label>
                                        {volunteers.includes('proInstructor') && (
                                            <input 
                                                type="text" 
                                                id="instruments" 
                                                name="instruments"
                                                placeholder="Instrument(s)"
                                                value={instruments}
                                                onChange={(e) => setInstruments(e.target.value)}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body text-sm"
                                            />
                                        )}
                                    </div>
                                </div>

                                {[
                                    { value: 'publicity', label: 'Publicity' },
                                    { value: 'cbusJammer', label: 'Cbus Jammer Musician' },
                                    { value: 'socialMedia', label: 'Social Media' },
                                    { value: 'webDesign', label: 'Web Design' },
                                    { value: 'writing', label: 'Writing / Newsletter' }
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id={option.value} 
                                            value={option.value}
                                            checked={volunteers.includes(option.value)}
                                            onChange={() => handleVolunteerChange(option.value)}
                                            className="h-4 w-4 text-green border-gray-300 rounded focus:ring-green"
                                        />
                                        <label htmlFor={option.value} className="ml-2 block text-sm text-charcoal">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}

                                {/* Other with text box */}
                                <div className="flex items-start">
                                    <input 
                                        type="checkbox" 
                                        id="otherVolunteer" 
                                        value="otherVolunteer"
                                        checked={volunteers.includes('otherVolunteer')}
                                        onChange={() => handleVolunteerChange('otherVolunteer')}
                                        className="h-4 w-4 text-green border-gray-300 rounded focus:ring-green mt-1"
                                    />
                                    <div className="ml-2 flex-1">
                                        <label htmlFor="otherVolunteer" className="block text-sm text-charcoal">
                                            Other
                                        </label>
                                        {volunteers.includes('otherVolunteer') && (
                                            <input 
                                                type="text" 
                                                id="otherVolunteerText" 
                                                name="otherVolunteerText"
                                                placeholder="Please specify"
                                                value={otherVolunteer}
                                                onChange={(e) => setOtherVolunteer(e.target.value)}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body text-sm"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                                Submit Membership Form
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
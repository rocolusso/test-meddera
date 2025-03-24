import React, { useState, useEffect, useCallback } from 'react';

export default function PopUpWithTimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const showPopup = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(showPopup, 15000); // 15 seconds
    return () => clearTimeout(timer);
  }, [showPopup]);
  const handleClose = () => {
    setIsVisible(false);
    setName('');
    setPhone('');
    setMessage('');
    setTimeout(showPopup, 15000); // Set a new 15-second timer after closing
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, phone, message });
    handleClose();
  };

  if (!isVisible) return null;

  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md relative">
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={handleClose}
                >
                    {/* <X className="h-4 w-4" /> */}
                    <div className="h-4 w-4">Close</div>
                </button>
                <div>
                    <div>Contact Us</div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name">
                                Name *
                                <input
                                  id="name"
                                  name="name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone">
                                Phone *
                                <input
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message">
                                Message
                                    <input
                                      name="message"
                                      id="message"
                                      value={message}
                                      onChange={(e) => setMessage(e.target.value)}
                                    />
                            </label>
                        </div>
                        <button type="submit" className="w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

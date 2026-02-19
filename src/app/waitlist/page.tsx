"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
// Make sure to create a firebase.ts file in your lib folder to export 'db'
import { db } from '@/lib/firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function WaitlistPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handlePhaseOne = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Direct Firebase Automation
      await addDoc(collection(db, "waitlist"), {
        name: formData.name,
        email: formData.email,
        timestamp: serverTimestamp(),
        status: "joined_discord_step"
      });

      setStep(2);
    } catch (err) {
      console.error("Transmission failed:", err);
      alert("CONNECTION ERROR: DATABASE REJECTED DATA");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="antialiased bg-white dark:bg-transparent h-dvh w-full text-black dark:text-white">
      {/* HERO SECTION */}
      <section className="mb-12 relative flex flex-col items-center justify-center border-b-2 border-black dark:border-white">
        <div className="w-full">
          <Navbar isActive="subscribe" />
        </div>

        <h1 className="mt-24 mb-12 text-5xl md:text-[5vw] font-bold tracking-tighter uppercase leading-none">
          THE 1.62 COLLECTIVE
        </h1>
      </section>

      {/* FORM SECTION */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <div className="w-full max-w-4xl">
          {step === 1 ? (
            /* STEP 1: IDENTITY */
            <form onSubmit={handlePhaseOne} className="space-y-8">
              <label className="block text-sm font-mono uppercase tracking-[0.3em] opacity-60">Phase_01 // Register</label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <input 
                  required
                  type="text" 
                  placeholder="FULL_NAME"
                  className="bg-transparent border-2 border-black dark:border-white p-6 text-2xl font-bold outline-none focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="EMAIL_ADDRESS"
                  className="bg-transparent border-2 border-black dark:border-white p-6 text-2xl font-bold outline-none focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-black dark:bg-white text-white dark:text-black p-8 text-3xl font-black hover:invert transition-all disabled:opacity-50"
              >
                {loading ? "VERIFYING..." : "GAIN ACCESS"}
              </button>
            </form>
          ) : (
            /* STEP 2: DISCORD */
            <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
              <label className="block text-sm font-mono uppercase tracking-[0.3em] text-green-500">Phase_02 // Community Entry</label>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">WELCOME, {formData.name.toUpperCase()}!</h2>
              <p className="text-xl md:text-2xl font-mono opacity-80">Thank you! Finally, join our digital studio.</p>
              
              <a 
                href="https://discord.gg/mREhK4TSJ3" 
                className="block w-full text-center border-2 border-green-500 text-green-500 p-8 text-3xl font-black hover:bg-green-500 hover:text-black transition-all"
              >
                JOIN THE DISCORD SERVER
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
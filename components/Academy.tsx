"use client";
import { useState } from "react";
import { config, waLink } from "@/lib/config";

export default function Academy() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(config.courses[0]);
  const [batch, setBatch] = useState("Weekday");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi Lavish Nailery, academy enquiry:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Course: ${course}`,
      `Preferred batch: ${batch}`,
    ].join("\n");
    window.open(waLink(msg), "_blank");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="label">Name</label>
        <input required className="field" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="label">Phone</label>
        <input required type="tel" pattern="[0-9+ ]{10,15}" className="field" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label className="label">Course</label>
        <select className="field" value={course} onChange={(e) => setCourse(e.target.value)}>
          {config.courses.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Preferred batch</label>
        <select className="field" value={batch} onChange={(e) => setBatch(e.target.value)}>
          {["Weekday", "Weekend", "Morning", "Evening"].map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <button type="submit" className="btn-gold w-full">Enquire on WhatsApp</button>
    </form>
  );
}

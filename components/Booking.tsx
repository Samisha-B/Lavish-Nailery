"use client";
import { useState } from "react";
import { config, waLink } from "@/lib/config";

export default function Booking() {
  const [branch, setBranch] = useState(config.branches[0].name);
  const [service, setService] = useState(config.services[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(config.timeSlots[0]);
  const [name, setName] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi Lavish Nailery, I'd like to book:",
      `Branch: ${branch}`,
      `Service: ${service}`,
      `Date: ${date}`,
      `Time: ${time}`,
      name ? `Name: ${name}` : "",
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <span className="label">Branch</span>
        <div className="grid grid-cols-2 gap-3">
          {config.branches.map((b) => (
            <button type="button" key={b.id} onClick={() => setBranch(b.name)}
              className={`rounded-lg border px-4 py-3 ${branch === b.name ? "border-gold bg-gold text-brown-dark" : "border-gold/40"}`}>
              {b.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="label">Service</label>
        <select className="field" value={service} onChange={(e) => setService(e.target.value)}>
          {config.services.map((s) => <option key={s.name}>{s.name}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Date</label>
          <input type="date" required min={today} className="field" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label className="label">Time</label>
          <select className="field" value={time} onChange={(e) => setTime(e.target.value)}>
            {config.timeSlots.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="label">Your name</label>
        <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" />
      </div>
      <button type="submit" className="btn-gold w-full">Send on WhatsApp</button>
    </form>
  );
}

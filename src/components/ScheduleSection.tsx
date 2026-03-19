"use client";

import { SCHEDULE_DAYS, SCHEDULE_PERIODS, SCHEDULE_DATA } from "@/constants";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

export default function ScheduleSection() {
  return (
    <section id="takvim" className="py-20 md:py-28 bg-bg-alt px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionHeader label="TAKVİM" title="Haftalık Ders Programı" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th
                    className="p-3 text-left text-xs text-text-light uppercase tracking-wider border-b border-border"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  />
                  {SCHEDULE_DAYS.map((day) => (
                    <th
                      key={day}
                      className="p-3 text-center text-xs text-text-light uppercase tracking-wider border-b border-border"
                      style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_PERIODS.map((period, rowIdx) => (
                  <tr key={period}>
                    <td
                      className="p-3 text-xs text-text-light uppercase tracking-wider font-medium"
                      style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                    >
                      {period}
                    </td>
                    {SCHEDULE_DATA[rowIdx].map((cell, colIdx) => (
                      <td
                        key={`${rowIdx}-${colIdx}`}
                        className={`p-3 text-center border border-white/50 rounded-sm ${
                          cell
                            ? "bg-schedule-filled"
                            : "bg-schedule-empty"
                        }`}
                      >
                        {cell ? (
                          <div>
                            <span
                              className="block text-sm text-text font-medium"
                              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                            >
                              {cell.className}
                            </span>
                            <span
                              className="block text-xs text-text-light mt-0.5"
                              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                            >
                              {cell.time}
                            </span>
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

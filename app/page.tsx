'use client'
import { useState } from "react";
import { DatePicker, MonthCalendar } from "react-diary";
import { FaNpm, FaGithub } from "react-icons/fa";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("1986-10-12T03:24:00"))
  const [calendarView, setCalendarView] = useState<string>("month")

  return (
    <main data-testid="home-page" className="flex bg-white min-h-screen flex-col items-center justify-between">
      <div className="border-b shadow-sm border-black mt-0 w-full h-12 px-2 flex flex-row items-center justify-between">
        <h1 className="font-semibold text-xl ">React Diary</h1>
        <select value={calendarView} data-testid="select-box" className="border rounded m-2 p-1" onChange={(e) => setCalendarView(e.target.value)}>
          <option value={"picker"}>Date Picker</option>
          <option value={"month"}>Month Calendar</option>
        </select>
      </div>
      <div className="p-12 pt-24 flex flex-col justify-start items-center">
        {calendarView === "picker" 
        ? <DatePicker 
          selectedDate={selectedDate}
          setSelectedDate={(date) => setSelectedDate(date)}
          events={[
            {
              title: "CLM",
              startTime: new Date("1986-10-13T03:24:00"),
              id: 'event-1'
            },
            {
              title: "Lunch Meeting",
              startTime: new Date("1986-10-14T12:00:00"),
              id: 'event-2'
            },
              ]}/>
        : <MonthCalendar
          selectedDate={selectedDate}
          setSelectedDate={(date) => setSelectedDate(date)}
          events={[
            {
              title: "CLM",
              startTime: new Date("1986-10-13T03:24:00"),
              id: 'event-1'
            },
            {
              title: "Lunch Meeting",
              startTime: new Date("1986-10-14T12:00:00"),
              id: 'event-2'
            },
              ]}/>}
                      <p className="m-4">Selected date: {selectedDate.toLocaleString()}</p>

      </div>
      <div className=" w-full h-24 flex flex-col items-center justify-center bg-slate-100">
              <a data-testid="github-link" href="https://github.com/danmolloy/react-diary" target="_blank" className="flex flex-row items-center m-1 text-2xl hover:text-indigo-600 hover:underline">
                <FaGithub color="black" />
                <p className="ml-1 text-base">View GitHub</p>
              </a>
              <a data-testid="npm-link" href="https://www.npmjs.com/package/react-diary" target="_blank" className="flex flex-row items-center m-1 text-2xl hover:text-indigo-600 hover:underline">
                <FaNpm color="black"/>
                <p className="ml-1 text-base">View NPM</p>
              </a>
      </div>
    </main>
  );
}

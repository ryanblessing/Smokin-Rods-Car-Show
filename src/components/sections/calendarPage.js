import React from "react";
import UpcomingEvents from "./upcomingEvents";

export default function CalendarPage() {
  return (
    <>
      <UpcomingEvents />
      <div className="calendar-container">
        <iframe
          title="calendar"
          //replace with chad's calendar link for events
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=Y29keWNvbmNrQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZGw2NWZjbWhwcmJtM2M0ZmE4aGlpMm0xcGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MTU1OTMxOTI2MjI5ODI5NjAwMzdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%2333B679&color=%23A79B8E&color=%23AD1457&color=%230B8043"
          style={{ border: "solid 1px #777" }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}

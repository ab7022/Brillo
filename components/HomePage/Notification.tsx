"use client";
import {
  Notification,
  NotificationHeader,
  NotificationDescription,
} from "@/components/hexta-ui/Notification";
import { useState, useEffect } from "react";

export const NotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowNotification(true);
      const hideTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      return () => clearTimeout(hideTimeout);
    }, 5000);

    return () => clearTimeout(showTimeout);
  }, []);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }
  };

  return (
    <main>
      <Notification
        showNotification={showNotification}
        onCancel={toggleNotification}
        direction="bottomRight"
      >
        <NotificationHeader>EazyFolio</NotificationHeader>
        <NotificationDescription>
          "Create your dream portfolio in minutes, launch it on your own URL –
          no coding skills needed with Eazy Folio!"
        </NotificationDescription>
      </Notification>
    </main>
  );
};

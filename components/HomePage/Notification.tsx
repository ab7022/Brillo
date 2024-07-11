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
        <NotificationHeader>
          Showcase Your Skills with Ease!
        </NotificationHeader>
        <NotificationDescription>
          We do not offer separate hosting services yet, your template will be
          hosted at eazyfolio.com/username.
        </NotificationDescription>
      </Notification>
    </main>
  );
};

import React from 'react';

interface NotificationProp {
  className: string;
  text: string;
  notificationRef?: React.RefObject<HTMLSpanElement>;
  notificationRole?: string;
  notificationAriaLive?: 'off' | 'assertive' | 'polite' | undefined;
}

const Notification = ({
  className,
  text,
  notificationRef,
  notificationRole,
  notificationAriaLive,
}: NotificationProp) => {
  return (
    <span
      role={notificationRole}
      ref={notificationRef}
      className={className}
      aria-live={notificationAriaLive}
    >
      {text}
    </span>
  );
};

export default Notification;

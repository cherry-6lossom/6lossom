const Notification = ({
  className,
  text,
  notificationRef,
  notificationRole,
  notificationAriaLive,
}) => {
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

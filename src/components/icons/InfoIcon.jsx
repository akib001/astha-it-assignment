const InfoIcon = ({ ...props }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 0.166668C5.02002 0.166668 0.166687 5.02 0.166687 11C0.166687 16.98 5.02002 21.8333 11 21.8333C16.98 21.8333 21.8334 16.98 21.8334 11C21.8334 5.02 16.98 0.166668 11 0.166668ZM11 16.4167C10.4042 16.4167 9.91669 15.9292 9.91669 15.3333V11C9.91669 10.4042 10.4042 9.91667 11 9.91667C11.5959 9.91667 12.0834 10.4042 12.0834 11V15.3333C12.0834 15.9292 11.5959 16.4167 11 16.4167ZM12.0834 7.75H9.91669V5.58333H12.0834V7.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InfoIcon;
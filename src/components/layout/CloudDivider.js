export default function CloudDivider(props) {
  return (
    <svg
      className={`fill-current ${props.className} overflow-visible drop-shadow-[0_10px_14px_rgba(0,0,0,0.3)]`}
      style={props.style}
      viewBox="0 -60 4054 498"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <use href="#cloud-divider-shape" />
    </svg>
  );
}

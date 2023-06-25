export default () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content",
        height: "fit-content",
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png')",
        backgroundSize: "cover",
        clipPath: "url(#myClipPath)",
        zIndex: 1,
      }}
    >
      <svg
        width="1160"
        height="528"
        viewBox="0 0 1160 528"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="myClipPath">
            <rect x="360" width="256" height="256" rx="6" />
            <rect y="272" width="616" height="256" rx="6" />
            <rect x="632" width="256" height="528" rx="6" />
            <rect x="904" width="256" height="256" rx="6" />
            <rect x="904" y="272" width="256" height="256" rx="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

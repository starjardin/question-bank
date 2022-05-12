import React from "react";

type Props = {
  image?: string;
  name?: string;
  alt?: string;
  size?: number;
  id?: string;
};

const defaultSize = 12;
const tailwindRemPts = 0.25;

const Avatar = ({
  image,
  size = defaultSize,
  name = "",
  id = "",
}: Props): JSX.Element => {
  const initials = getInitials(name);

  const rem = `${size * tailwindRemPts}rem`;
  return (
    <span
      className={`inline-block flex-shrink-0 rounded-full overflow-hidden  ${
        image ? "border border-gray-300" : ""
      }`}
      style={{ width: rem, height: rem }}
    >
      {image ? (
        <img className="object-cover h-full w-full" src={image} alt="" />
      ) : initials ? (
        AvatarInitials(initials, size, id)
      ) : (
        <svg
          className="h-full w-full rounded-full border text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </span>
  );
};

const AvatarInitials = (
  initials: string,
  size: number,
  id: string
): JSX.Element => {
  const rem = `${size * tailwindRemPts}rem`;
  return (
    <span
      style={{ fontSize: size * 1.7, width: rem, height: rem }}
      className={`rounded-full flex items-center justify-center text-white font-medium uppercase ${
        id ? bgColor(id) : "bg-gray-400"
      }`}
    >
      {initials}
    </span>
  );
};

const getInitials = (name: string): string => {
  const ns = name.split(" ");
  let initials = ns[0][0];
  if (ns.length > 1) {
    initials += ns[1][0];
  }
  return initials;
};

export default Avatar;

const bgColor = (id: string): string => {
  const sid = String(id);
  const last = sid[sid.length - 1] || "";
  if (last === "") {
    return "bg-gray-400";
  }

  const i = last.charCodeAt(0) % colors.length;
  return colors[i];
};

const colors = [
  "bg-red-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-indigo-400",
  "bg-orange-400",
  "bg-pink-400",
];

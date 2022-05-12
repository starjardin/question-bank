/* eslint-disable @next/next/no-img-element */
interface IAdminAvatar {
  image?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
}

export default function AdminAvatar({ image, name, email }: IAdminAvatar) {
  return (
    <div className="flex-shrink-0 group block">
      <div className="flex items-center">
        {image && (
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src={image}
              alt={name || "Avatar image"}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

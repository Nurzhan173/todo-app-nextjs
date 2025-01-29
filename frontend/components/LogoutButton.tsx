"use client";

import { useLogout } from "@/hooks/useLogout";

export default function LogoutButton() {
  const logout = useLogout();

  return (
    <button
      onClick={logout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Logout
    </button>
  );
}

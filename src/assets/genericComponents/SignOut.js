import React from "react";
export function SignOut() {
  const Swal = require("sweetalert2");
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E6A481",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("dummy_user");
        window.location.href = "/";
      }
    });
  }

  return (
    <div
      onClick={() => {
        logout();
      }}
    >
      {"Log out"}
    </div>
  );
}

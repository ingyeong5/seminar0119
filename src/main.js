import Swal from "sweetalert2";

const button = document.getElementById("danger-btn");

button.addEventListener("click", () => {
  Swal.fire({
  title: "⚠️ Warning",
  text: "I Said Do Not Click This Button",
  icon: "warning",
  confirmButtonText: "Okay...",
  background: "#0f2a4d",
  color: "#e6ecf3",
  confirmButtonColor: "#1d4b8f",
  iconColor: "#ffcc00",
  showClass: {
    popup: "swal2-show swal2-animate-pop"
  },
  hideClass: {
    popup: "swal2-hide swal2-animate-hide"
  }
});
});

export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Create Service Request",
      htmlBefore: '<i class="material-icons">directions_car</i>',
      to: "/service-request",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
  ];
}
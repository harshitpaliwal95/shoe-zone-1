import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const displayRazorpay = async (totalAmount) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load, check you connection");
    return;
  }

  const options = {
    key: "rzp_test_M7jr3sNuOwTIPE",
    amount: totalAmount * 100,
    currency: "INR",
    name: "Shoe Zone",
    description: "Thank you for shopping with us",
    image:
      "https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true",
    handler: function (response) {
      const orderData = {
        products: [],
        amount: totalAmount,
        paymentId: response.razorpay_payment_id,
        delivery: "588",
      };
    },
    prefill: {
      name: `${"harshit"} ${"paliwal"}`,
      email: "harshit@gmail.com",
      contact: "9876543210",
    },
    theme: {
      color: "#007bb5",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

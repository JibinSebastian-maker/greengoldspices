// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Build WhatsApp message dynamically + mailto fallback
function handleQuote(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const grade = document.getElementById("grade").value;
  const qty = document.getElementById("qty").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Quote Request - ${grade}`);
  const body = encodeURIComponent(
`Hello Green Gold Spices,

I would like a quote.

Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone}
Grade: ${grade}
Quantity & Destination: ${qty}

Message:
${message}

Thank you.`
  );

  // Business email
  window.location.href = `mailto:greengoldspices1001@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

// Update WhatsApp link as user types
const waLink = document.getElementById("waLink");
const fields = ["name","email","phone","qty","message","grade"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

fields.forEach(el => el.addEventListener("input", updateWA));
fields.forEach(el => el.addEventListener("change", updateWA));

function updateWA(){
  if(!waLink) return;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const grade = document.getElementById("grade").value;
  const qty = document.getElementById("qty").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = encodeURIComponent(
`Hello Green Gold Spices, I need a quote.

Name: ${name}
WhatsApp/Phone: ${phone}
Grade: ${grade}
Qty & Destination: ${qty}

Message: ${message}`
  );

  // Primary WhatsApp (Germany)
  waLink.href = `https://wa.me/491783070174?text=${text}`;
}

updateWA();
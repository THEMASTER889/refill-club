(function () {
  const config = window.REFILL_CLUB || {};
  const url = (config.checkoutUrl || "").trim();
  const price = config.priceLabel || "A$9 / month";

  document.querySelectorAll("[data-price]").forEach(function (el) {
    el.textContent = price;
  });

  const notice = document.getElementById("checkout-notice");
  const links = document.querySelectorAll("[data-checkout]");

  links.forEach(function (link) {
    if (url) {
      link.setAttribute("href", url);
      link.classList.add("lemonsqueezy-button");
      link.removeAttribute("aria-disabled");
    } else {
      link.setAttribute("href", "#join");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", function (event) {
        event.preventDefault();
        if (notice) notice.classList.add("is-on");
        const join = document.getElementById("join");
        if (join) join.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
})();

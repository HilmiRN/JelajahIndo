
      const menuButton = document.getElementById("menu-button");
      const menuIcon = document.getElementById("menu-icon");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileLinks = document.querySelectorAll(".mobile-link");

      menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("-translate-x-full");
        mobileMenu.classList.toggle("translate-x-0");

        const isOpen = mobileMenu.classList.contains("translate-x-0");

        menuIcon.classList.toggle("ph-list", !isOpen);
        menuIcon.classList.toggle("ph-x", isOpen);
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("-translate-x-full");
          mobileMenu.classList.remove("translate-x-0");

          menuIcon.classList.remove("ph-x");
          menuIcon.classList.add("ph-list");
        });
      });
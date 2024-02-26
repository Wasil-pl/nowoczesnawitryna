class CookiesConsent {
  constructor(cookieContent) {
    const thisCookiesConsent = this;
    thisCookiesConsent.cookieContent = cookieContent;

    this.initialize();
  }

  initialize() {
    if (!this.checkCookieConsentExists()) {
      // Jeśli nie ma jeszcze żadnego zapisu dotyczącego zgody, wywołujemy banner
      this.createBanner();
    } else if (!this.checkCookieConsent()) {
      // Jeśli użytkownik nie wyraził zgody na używanie ciasteczek, kończymy funkcję
      return;
    } else {
      // Jeśli użytkownik wyraził już zgodę na używanie ciasteczek i jest zapis
      // cookie-consent=true, nie wywołujemy banera, tylko aktualizujemy preferencje zgody
      this.updateAnalyticsConsent("granted");
    }
  }

  checkCookieConsentExists() {
    const cookies = document.cookie.split(";");
    return cookies.some((cookie) =>
      cookie.trim().startsWith("cookie-consent=")
    );
  }

  checkCookieConsent() {
    const cookies = document.cookie.split(";");
    return cookies.some((cookie) => cookie.trim() === "cookie-consent=true");
  }

  updateAnalyticsConsent(data) {
    console.log("data:", data);
    // Aktualizacja preferencji zgody na używanie ciasteczek za pomocą funkcji gtag
    // eslint-disable-next-line no-undef
    gtag("consent", "update", {
      ad_storage: data,
      ad_user_data: data,
      ad_personalization: data,
      analytics_storage: data,
    });
  }

  setCookieConsent(value) {
    document.cookie = `cookie-consent=${value}; max-age=31536000`;
  }

  deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName !== "cookie-consent" || cookieValue !== "false") {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
  }

  createBanner() {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    this.updateBannerContent(banner); // Aktualizacja treści banera
    document.body.appendChild(banner);

    const yesButton = document.getElementById("cookie-yes");
    const noButton = document.getElementById("cookie-no");
    const settingsButton = document.getElementById("cookie-settings");

    yesButton.onclick = () => {
      this.setCookieConsent("true");
      banner.remove();
      this.updateAnalyticsConsent("granted");
    };

    noButton.onclick = () => {
      this.setCookieConsent("false");
      banner.remove();
      this.updateAnalyticsConsent("denied");
      this.deleteAllCookies();
    };

    settingsButton.onclick = () => {
      this.openSettings(banner); // Przekazujemy istniejący baner do funkcji otwierającej ustawienia
    };
  }

  updateBannerContent(banner) {
    banner.innerHTML = `
      <div class="cookie-textBox">
        <p class="title">${this.cookieContent.main.title}</p>
        <p class="descryption">${this.cookieContent.main.description}</p>
      </div>
      <div class="cookies-buttons">
        <button id='cookie-yes'>${this.cookieContent.main.accept}</button>
        <button id='cookie-no'>${this.cookieContent.main.reject}</button>
        <button id='cookie-settings'>${this.cookieContent.main.changeSettings}</button>
      </div>
    `;
  }

  openSettings(banner) {
    const settingsContainer = document.createElement("div");
    settingsContainer.id = "cookie-settings-container";
    settingsContainer.innerHTML = `
      <div class="cookie-textBox">
        <p class="title">Wybierz preferowane opcje dotyczące plików cookie:</p>
      </div>
      <div class="cookies-checkBox">
        <label>
          <input type="checkbox" name="analytics" value="analytics">
          ${this.cookieContent.purposes.analytics}
        </label>
        <label>
          <input type="checkbox" name="necessary" value="necessary" checked disabled>
          ${this.cookieContent.purposes.necessary}
        </label>
      </div>
      <div class="cookies-buttons"><button id="confirm-choice">${this.cookieContent.settings.save}</button></div>
    `;
    banner.innerHTML = ""; // Usuwamy poprzednią zawartość banera
    banner.appendChild(settingsContainer);

    const confirmButton = document.getElementById("confirm-choice");

    confirmButton.onclick = () => {
      const analyticsCheckbox = document.querySelector(
        "input[name='analytics']"
      );
      const analyticsValue = analyticsCheckbox.checked ? "true" : "false";
      this.setCookieConsent(analyticsValue);
      banner.remove();
      this.deleteAllCookies();
      if (analyticsValue === "true") {
        this.setCookieConsent("true");
        this.updateAnalyticsConsent("granted");
      } else {
        this.setCookieConsent("false");
        this.updateAnalyticsConsent("denied");
      }
    };
  }
}

export default CookiesConsent;

"use client";

/**
 * Official App Store Badges Component
 *
 * Uses EXACT official badge designs from:
 * - Apple: https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
 * - Google: https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/
 *
 * Official badge images (no modifications per brand guidelines)
 * Direct links to app stores
 */
export function AppStoreBadges() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
      {/* Apple App Store Badge - Official */}
      <a
        href="#"
        className="inline-block"
        aria-label="Download on the App Store"
        title="Download Wattl on the App Store (Coming Soon)"
      >
        <img
          src="/badges-app-store.png"
          alt="Download on the App Store"
          width="140"
          height="42"
        />
      </a>

      {/* Google Play Badge - Official */}
      <a
        href="https://play.google.com/store/apps/details?id=com.wattl.app.powerbank&hl=en_AU"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label="Get it on Google Play"
        title="Download Wattl on Google Play"
      >
        <img
          src="/badges-google-play.png"
          alt="Get it on Google Play"
          width="140"
          height="42"
        />
      </a>
    </div>
  );
}

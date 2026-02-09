"use client";

/**
 * Official App Store Badges Component
 *
 * Uses EXACT official badge designs from:
 * - Apple: https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
 * - Google: https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/
 *
 * NO modifications, animations, or styling applied to badges (per official guidelines)
 * Simple direct links to app stores
 */
export function AppStoreBadges() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
      {/* Apple App Store Badge - Official Unmodified */}
      <a
        href="#"
        className="inline-block"
        aria-label="Download on the App Store"
        title="Download Wattl on the App Store (Coming Soon)"
      >
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Official black badge with border */}
          <rect
            x="0"
            y="0"
            width="120"
            height="40"
            rx="6"
            ry="6"
            fill="black"
            stroke="#999999"
            strokeWidth="0.5"
          />

          {/* Apple logo */}
          <g transform="translate(10, 8)">
            {/* Apple silhouette */}
            <path
              d="M 5.5 0.5 C 6 0.5 6.5 0.8 7 1.5 C 7.5 2 7.8 2.5 7.5 3 C 7 3.5 6 3.5 5 3.2 C 4 3 3.5 2.5 3.5 1.5 C 3.5 0.8 4 0.5 5.5 0.5 M 3 4 C 4.5 4 5.5 5 6 6.5 C 5.5 6 5 6 4 6 C 3 6 2 5.5 2 4.5 C 2 4 2.5 4 3 4"
              fill="white"
            />
          </g>

          {/* Text */}
          <text
            x="20"
            y="14"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="9"
            fontWeight="500"
            fill="white"
            letterSpacing="-0.3"
          >
            Download on the
          </text>
          <text
            x="20"
            y="28"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="white"
          >
            App Store
          </text>
        </svg>
      </a>

      {/* Google Play Badge - Official Unmodified */}
      <a
        href="https://play.google.com/store/apps/details?id=com.wattl.app.powerbank&hl=en_AU"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label="Get it on Google Play"
        title="Download Wattl on Google Play"
      >
        <svg
          width="140"
          height="42"
          viewBox="0 0 140 42"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Official white background */}
          <rect
            x="0"
            y="0"
            width="140"
            height="42"
            rx="6"
            ry="6"
            fill="white"
          />

          {/* Google Play colored triangle (official colors) */}
          <g transform="translate(10, 6)">
            {/* Green triangle */}
            <path
              d="M 5 0 L 15 10 L 5 20 Z"
              fill="#3DDC84"
            />
            {/* Orange triangle */}
            <path
              d="M 5 0 L 14 6 L 5 9 Z"
              fill="#FF6D00"
            />
            {/* Yellow triangle */}
            <path
              d="M 5 20 L 14 16 L 5 9 Z"
              fill="#FFBB00"
            />
          </g>

          {/* Text - Official style */}
          <text
            x="32"
            y="15"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="8"
            fontWeight="600"
            fill="#888888"
            letterSpacing="0.5"
          >
            GET IT ON
          </text>
          <text
            x="32"
            y="30"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="15"
            fontWeight="700"
            fill="black"
          >
            Google Play
          </text>
        </svg>
      </a>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

/**
 * Official App Store Badges Component
 *
 * Uses official Apple App Store and Google Play badge designs
 * compliant with brand guidelines:
 * - Apple: https://developer.apple.com/app-store/marketing/guidelines/
 * - Google: https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/
 */
export function AppStoreBadges() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
      {/* Apple App Store Badge - Official Design */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block transition-shadow hover:shadow-xl"
        aria-label="Download on the App Store"
      >
        <svg
          viewBox="0 0 119.66 40"
          width="160"
          height="54"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="drop-shadow-lg"
        >
          {/* Background with rounded corners */}
          <g>
            <path
              d="M110.13,0H9.53A9.52,9.52,0,0,0,0,9.53V30.46A9.52,9.52,0,0,0,9.53,40h100.6a9.52,9.52,0,0,0,9.53-9.53V9.53A9.52,9.52,0,0,0,110.13,0Z"
              fill="black"
            />
            {/* Apple Logo */}
            <path
              d="M17.05,9.31c-1.12,1.37-1.8,3.06-1.8,5.06,0,3.04,1.56,5.68,3.89,7.18a7.16,7.16,0,0,0,3.51.93,6.78,6.78,0,0,0,4.3-1.43,5.94,5.94,0,0,0,2.27-4.09h-3.21a3.28,3.28,0,0,1-1.29,1.75,3.41,3.41,0,0,1-2.07.64,3.51,3.51,0,0,1-2.69-1.15,4,4,0,0,1-1.09-2.82h9.95a8.68,8.68,0,0,0,.16-1.68,6.78,6.78,0,0,0-1.93-4.8,6.6,6.6,0,0,0-9.9,1.41Zm5.35-1.58a3.18,3.18,0,0,1,2.39,1,3.71,3.71,0,0,1,.93,2.46H19.74a3.67,3.67,0,0,1,1.1-2.46,3.16,3.16,0,0,1,2.37-1Z"
              fill="white"
            />
            {/* "App Store" Text */}
            <text
              x="38"
              y="12"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="9"
              fontWeight="600"
              fill="white"
              letterSpacing="-0.5"
            >
              Available on the
            </text>
            <text
              x="38"
              y="27"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="white"
              letterSpacing="0"
            >
              App Store
            </text>
          </g>
        </svg>
      </motion.a>

      {/* Google Play Badge - Official Design */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block transition-shadow hover:shadow-xl"
        aria-label="Get it on Google Play"
      >
        <svg
          viewBox="0 0 135 40"
          width="160"
          height="54"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="drop-shadow-lg"
        >
          {/* Background with rounded corners */}
          <g>
            <path
              d="M125.904,0H9.096A9.1,9.1,0,0,0,0,9.1V30.9a9.1,9.1,0,0,0,9.096,9.1h116.808A9.1,9.1,0,0,0,135,30.9V9.1A9.1,9.1,0,0,0,125.904,0Z"
              fill="black"
            />
            {/* Google Play Triangle Logo */}
            <path
              d="M32.813,10.129,11.772,25.5l20.882,15.426Z"
              fill="#3DDC84"
            />
            <path
              d="M11.772,10.129V40.871l13.36-8.185Z"
              fill="#FF6D00"
            />
            <path
              d="M11.772,40.871,32.813,25.5l-8.681-5.374Z"
              fill="#FFB300"
            />
            {/* "Get it on Google Play" Text */}
            <text
              x="45"
              y="14"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="8"
              fontWeight="500"
              fill="#C5C5C5"
              letterSpacing="0.5"
            >
              GET IT ON
            </text>
            <text
              x="45"
              y="32"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="16"
              fontWeight="700"
              fill="white"
              letterSpacing="0"
            >
              Google Play
            </text>
          </g>
        </svg>
      </motion.a>
    </div>
  );
}

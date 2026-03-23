"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — branding */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <Image
              src="/logo.png"
              alt="RKE Logo"
              width={36}
              height={26}
              className="opacity-80"
            />
            <span className="mx-1 text-card-border">|</span>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </div>

          {/* Center — resume */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors font-mono"
          >
            <FiDownload size={14} />
            Download Resume
          </a>

          {/* Right — socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-cyan transition-colors"
                  aria-label={social.platform}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

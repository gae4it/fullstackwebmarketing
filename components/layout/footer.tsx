import Link from "next/link";

import FooterMenu from "components/layout/footer-menu";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const skeleton =
    "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700";
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-188px w-200px flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-4 min-[1320px]:px-0">
          
          {/* Legal Links */}
          <div className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/terms" className="hover:text-black dark:hover:text-white">
              Terms of Service
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/disclaimer" className="hover:text-black dark:hover:text-white">
              Disclaimer
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/shipping" className="hover:text-black dark:hover:text-white">
              Shipping Policy
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/returns" className="hover:text-black dark:hover:text-white">
              Returns & Refunds
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/cookies" className="hover:text-black dark:hover:text-white">
              Cookie Policy
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/acceptable-use" className="hover:text-black dark:hover:text-white">
              Acceptable Use
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/contact" className="hover:text-black dark:hover:text-white">
              Contact
            </Link>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <Link href="/about" className="hover:text-black dark:hover:text-white">
              About
            </Link>
          </div>


          {/* Copyright */}
          <div className="flex flex-col justify-center items-center gap-1 md:flex-row md:gap-0">
            <p>
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".")
                ? "."
                : ""}{" "}
              All rights reserved.
            </p>
            {/* <hr className="mx-4 hidden h-4 w-1 border-l border-neutral-400 md:inline-block" />
            <p>
              <a href="https://github.com/vercel/commerce">View the source</a>
            </p>
            <p className="md:ml-auto">
              <a href="https://vercel.com" className="text-black dark:text-white">
                Created by ▲ Vercel
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

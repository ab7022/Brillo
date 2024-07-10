import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 mb-4 px-4 md:px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Company
            </h3>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="#"
            >
              About Us
            </Link>
      
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1 "
              href="contact-us"
            >
              Contact Us
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              href="services"
            >
              Our Services
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Support
            </h3>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="mailto:support@eazyfolio.com"
            >
              Help Center
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="mailto:support@eazyfolio.com"
            >
              Documentation
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Legal</h3>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="/shipping-policy"
            >
              Shipping policy
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="/terms-of-service"
            >
              Terms and Conditions
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors mb-1"
              href="/refund-policy"
            >
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 mb-4 sm:mb-0">
            © 2024 Eazy Folio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

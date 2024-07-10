"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiEye } from "react-icons/fi";

export function Template({ id, heading, description, link, see, img, index }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 group"
    >
      <div className="relative h-56 md:h-64">
        <Image
          alt={`${heading} Theme`}
          src={img}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
          Template #{id}
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{heading}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex space-x-3">
          <Link
            href={see}
            rel="noopener noreferrer"
            className={`flex-1 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 text-white px-4 text-sm font-medium transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-50`}
          >
            <span>See Demo</span>
            <FiEye className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/templates/${id}`}
            className="flex-1 inline-flex h-10 items-center justify-center rounded-md border-2 border-gray-100 bg-gray-50 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <span>View Details</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

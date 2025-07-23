"use client"

import React from "react"

export function Footer() {
  return (
    <footer className="footer-raimon mt-16 py-12 bg-gradient-to-br from-orange-100 to-amber-200 dark:from-gray-900 dark:to-orange-900/30 border-t border-orange-200 dark:border-orange-800/50">
      <div className="container mx-auto px-4">
        <div className="footer-raimon-content text-center">
          <h3 className="footer-raimon-title text-2xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-gray-100 bg-clip-text text-transparent">
            Connect with Raimon
          </h3>
          <ul className="social-grid grid grid-cols-4 md:grid-cols-8 gap-6 max-w-2xl mx-auto mb-8">
            <li>
              <a 
                href="https://x.com/raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link social-twitter group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-400 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fa-brands fa-x-twitter text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">X</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-youtube group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-red-500 hover:to-red-600 dark:hover:from-red-500 dark:hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-youtube text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-tiktok group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-500 hover:to-purple-600 dark:hover:from-pink-500 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-tiktok text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-instagram group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-400 hover:to-purple-500 dark:hover:from-pink-500 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-instagram text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a 
                href="https://medium.com/@raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-medium group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-green-500 hover:to-green-600 dark:hover:from-green-500 dark:hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-medium text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">Medium</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-github group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-github text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/raimonvibe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-linkedin group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-linkedin-in text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/profile.php?id=61563450007849" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-facebook group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-facebook-f text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"></i>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with ❤️ for learning • <a href="https://github.com/raimonvibe/stripe-google-email-fullstack" target="_blank" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 underline">View on GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

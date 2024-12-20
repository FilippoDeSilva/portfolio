"use client";

const SocialsPage: React.FC = () => {
  return (
    <div className="fixed z-20 items-start gap-1.5 sm:gap-3 text-white/50 bottom-0 flex sm:flex-col overflow-auto p-4 sm:p-6">
      <a
        href="https://github.com/FilippoDeSilva"
        target="_blank"
        rel="noopener noreferrer"
        className="flex scale-90 sm:scale-100 backdrop-blur-md items-center border border-blue-300/50 p-2 sm:p-2.5 hover:text-blue-500 hover:border-blue-500 relative group justify-center rounded-full transition-colors duration-200 overflow-hidden"
      >
        <div className="absolute border-[8px] border-transparent size-0 group-hover:size-[60%] bg-white/40 opacity-0 group-hover:opacity-70 rounded-full blur-md transition-all delay-75 ease-out duration-300"></div>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>

      <a
        href="https://t.me/Lt_Col_Sam"
        target="_blank"
        rel="noopener noreferrer"
        className="flex scale-90 sm:scale-100 backdrop-blur-md items-center border border-blue-300/50 p-2 sm:p-2.5 hover:text-blue-500 hover:border-blue-500 relative group justify-center rounded-full transition-colors duration-200 overflow-hidden"
      >
        <div className="absolute border-[8px] border-transparent size-0 group-hover:size-[60%] bg-white/40 opacity-0 group-hover:opacity-70 rounded-full blur-md transition-all delay-75 ease-out duration-300"></div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.0943 7.14643C17.6874 6.93123 17.9818 6.85378 18.1449 6.82608C18.1461 6.87823 18.1449 6.92051 18.1422 6.94825C17.9096 9.39217 16.8906 15.4048 16.3672 18.2026C16.2447 18.8578 16.1507 19.1697 15.5179 18.798C15.1014 18.5532 14.7245 18.2452 14.3207 17.9805C12.9961 17.1121 11.1 15.8189 11.2557 15.8967C9.95162 15.0373 10.4975 14.5111 11.2255 13.8093C11.3434 13.6957 11.466 13.5775 11.5863 13.4525C11.64 13.3967 11.9027 13.1524 12.2731 12.8081C13.4612 11.7035 15.7571 9.56903 15.8151 9.32202C15.8246 9.2815 15.8334 9.13045 15.7436 9.05068C15.6539 8.97092 15.5215 8.9982 15.4259 9.01989C15.2904 9.05064 13.1326 10.4769 8.95243 13.2986C8.33994 13.7192 7.78517 13.9242 7.28811 13.9134L7.29256 13.9156C6.63781 13.6847 5.9849 13.4859 5.32855 13.286C4.89736 13.1546 4.46469 13.0228 4.02904 12.8812C3.92249 12.8466 3.81853 12.8137 3.72083 12.783C8.24781 10.8109 11.263 9.51243 12.7739 8.884C14.9684 7.97124 16.2701 7.44551 17.0943 7.14643ZM19.5169 5.21806C19.2635 5.01244 18.985 4.91807 18.7915 4.87185C18.5917 4.82412 18.4018 4.80876 18.2578 4.8113C17.7814 4.81969 17.2697 4.95518 16.4121 5.26637C15.5373 5.58382 14.193 6.12763 12.0058 7.03736C10.4638 7.67874 7.39388 9.00115 2.80365 11.001C2.40046 11.1622 2.03086 11.3451 1.73884 11.5619C1.46919 11.7622 1.09173 12.1205 1.02268 12.6714C0.970519 13.0874 1.09182 13.4714 1.33782 13.7738C1.55198 14.037 1.82635 14.1969 2.03529 14.2981C2.34545 14.4483 2.76276 14.5791 3.12952 14.6941C3.70264 14.8737 4.27444 15.0572 4.84879 15.233C6.62691 15.7773 8.09066 16.2253 9.7012 17.2866C10.8825 18.0651 12.041 18.8775 13.2243 19.6531C13.6559 19.936 14.0593 20.2607 14.5049 20.5224C14.9916 20.8084 15.6104 21.0692 16.3636 20.9998C17.5019 20.8951 18.0941 19.8479 18.3331 18.5703C18.8552 15.7796 19.8909 9.68351 20.1332 7.13774C20.1648 6.80544 20.1278 6.433 20.097 6.25318C20.0653 6.068 19.9684 5.58448 19.5169 5.21806Z"></path>
        </svg>
      </a>

      <a
        href="www.linkedin.com/in/nathnael-wondisha-67b048227"
        target="_blank"
        rel="noopener noreferrer"
        className="flex scale-90 sm:scale-100 backdrop-blur-md items-center border border-blue-300/50 p-2 sm:p-2.5 hover:text-blue-500 hover:border-blue-500 relative group justify-center rounded-full transition-colors duration-200 overflow-hidden"
      >
        <div className="absolute border-[8px] border-transparent size-0 group-hover:size-[60%] bg-white/40 opacity-0 group-hover:opacity-70 rounded-full blur-md transition-all delay-75 ease-out duration-300"></div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialsPage;

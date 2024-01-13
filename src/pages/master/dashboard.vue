<template>
  <div class="w-screen h-screen flex">
    <!--    Admin Panel-->
    <div v-show="showSide" class="transition w-1/4 h-full bg-gray-200 text-center">
      <div
        class="h-[50px] flex justify-center items-center font-bold bg-gray-900 text-white text-2xl"
      >
        Admin Panel
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 text-white">
        <div class="flex flex-col px-[20px] items-center justify-center space-y-[20px] pt-3">
          <router-link
            class="flex transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/home"
          >
            <svg
              id="home_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -4.75)">
                    <polyline
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      points="-7,4.5 -9,4.5 0,-4.5 9,4.5 7,4.5 "
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 4.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -16.5)"
                      d="M 5 12 L 5 19 C 5 20.104569499661586 5.8954305003384135 21 7 21 L 17 21 C 18.104569499661586 21 19 20.104569499661586 19 19 L 19 12"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 4.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -17)"
                      d="M 9 21 L 9 15 C 9 13.895430500338414 9.895430500338414 13 11 13 L 13 13 C 14.104569499661586 13 15 13.895430500338414 15 15 L 15 21"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g></svg
            >Home</router-link
          >
          <router-link
            class="flex items-center transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/profile"
          >
            <svg
              id="address-book_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0.75 -0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-13, -12)"
                      d="M 20 6 L 20 18 C 20 19.104569499661586 19.104569499661586 20 18 20 L 8 20 C 6.8954305003384135 20 6 19.104569499661586 6 18 L 6 6 C 6 4.8954305003384135 6.8954305003384135 4 8 4 L 18 4 C 19.104569499661586 4 20 4.895430500338413 20 6 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0.75 3.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-13, -16)"
                      d="M 10 16 L 16 16"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0.75 -1.25)">
                    <circle
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="2"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -6.75 -4.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-5.5, -8)"
                      d="M 4 8 L 7 8"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -6.75 -0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-5.5, -12)"
                      d="M 4 12 L 7 12"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -6.75 3.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-5.5, -16)"
                      d="M 4 16 L 7 16"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Profile</router-link
          >

          <router-link
            class="flex items-center transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/messege"
          >
            <svg
              id="message-2_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12.5)"
                      d="M 12 20 L 9 17 L 7 17 C 5.343145750507619 17 4 15.65685424949238 4 14 L 4 8 C 4 6.343145750507619 5.343145750507619 5 7 5 L 17 5 C 18.65685424949238 5 20 6.3431457505076185 20 7.999999999999999 L 20 14 C 20 15.65685424949238 18.65685424949238 17 17 17 L 15 17 L 12 20"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -3.25)">
                    <line
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      x1="-4"
                      y1="0"
                      x2="4"
                      y2="0"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -1.25 0.75)">
                    <line
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      x1="-3"
                      y1="0"
                      x2="3"
                      y2="0"
                    />
                  </g>
                </g>
              </g></svg
            >Messeges</router-link
          >
          <router-link
            class="flex items-center transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/"
          >
            <svg
              id="file-download_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 4.25 -6.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-16.5, -5.5)"
                      d="M 14 3 L 14 7 C 14 7.552284749830793 14.447715250169207 8 15 8 L 19 8"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 17 21 L 7 21 C 5.8954305003384135 21 5 20.104569499661586 5 19 L 5 5 C 5 3.895430500338413 5.8954305003384135 3 7 3 L 14 3 L 19 8 L 19 19 C 19 20.104569499661586 18.104569499661586 21 17 21 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 1.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -14)"
                      d="M 12 17 L 12 11"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 3.5)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -15.75)"
                      d="M 9.5 14.5 L 12 17 L 14.5 14.5"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g></svg
            >Downloads</router-link
          >
          <router-link
            class="flex items-center transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/settings"
          >
            <svg
              id="file-settings_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 1.75)">
                    <circle
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="2"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -1)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -11.25)"
                      d="M 12 10.5 L 12 12"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 4.5)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -16.75)"
                      d="M 12 16 L 12 17.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 2.13 0.38)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-14.38, -12.63)"
                      d="M 15.031 12.25 L 13.732000000000001 13"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -2.63 3.13)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-9.62, -15.38)"
                      d="M 10.268 15 L 8.968 15.75"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 2.11 3.17)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-14.36, -15.42)"
                      d="M 15 15.803 L 13.715 15.030000000000001"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -2.61 0.33)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-9.64, -12.58)"
                      d="M 10.285 12.97 L 9 12.197000000000001"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 4.25 -6.75)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-16.5, -5.5)"
                      d="M 14 3 L 14 7 C 14 7.552284749830793 14.447715250169207 8 15 8 L 19 8"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 17 21 L 7 21 C 5.8954305003384135 21 5 20.104569499661586 5 19 L 5 5 C 5 3.895430500338413 5.8954305003384135 3 7 3 L 14 3 L 19 8 L 19 19 C 19 20.104569499661586 18.104569499661586 21 17 21 z"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g></svg
            >Settings</router-link
          >
          <router-link
            class="flex transition py-2 px-4 items-center w-full hover:bg-gray-400 active:bg-gray-600 rounded-md"
            to="/home"
          >
            <svg
              id="help-square-rounded_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 12 3 C 19.2 3 21 4.8 21 12 C 21 19.2 19.2 21 12 21 C 4.800000000000001 21 3 19.2 3 12 C 3 4.800000000000001 4.8 3 12 3 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 3.76)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -16.01)"
                      d="M 12 16 L 12 16.01"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0 -1.25)">
                    <path
                      style="
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12.25, -11)"
                      d="M 12 13 C 12.925836038558687 13.002782668682105 13.732558346023994 12.369758934839156 13.950046091943275 11.46982605183399 C 14.167533837862557 10.569893168828827 13.738927818042793 9.638326311998423 12.914 9.218 C 12.094872741076381 8.798393006397355 11.094618250921402 8.998526775554295 10.5 9.701"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g></svg
            >Help</router-link
          >
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-200">
      <div
        class="h-[50px] w-full z-10 bg-gray-100 px-4 justify-between border-b flex items-center shadow-md"
      >
        <!--         HamburgerMenu-->
        <div class="cursor-pointer w-4" @click="toggleSideBar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

            <g transform="matrix(1 0 0 1 12 12)">
              <g style="">
                <g transform="matrix(1 0 0 1 0 0)">
                  <path
                    style="
                      stroke: none;
                      stroke-width: 2;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" translate(-12, -12)"
                    d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                    stroke-linecap="round"
                  />
                </g>
                <g transform="matrix(1 0 0 1 0 -6)">
                  <line
                    style="
                      stroke: rgb(33, 33, 33);
                      stroke-width: 2;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x1="-8"
                    y1="0"
                    x2="8"
                    y2="0"
                  />
                </g>
                <g transform="matrix(1 0 0 1 0 0)">
                  <line
                    style="
                      stroke: rgb(33, 33, 33);
                      stroke-width: 2;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x1="-8"
                    y1="0"
                    x2="8"
                    y2="0"
                  />
                </g>
                <g transform="matrix(1 0 0 1 0 6)">
                  <line
                    style="
                      stroke: rgb(33, 33, 33);
                      stroke-width: 2;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x1="-8"
                    y1="0"
                    x2="8"
                    y2="0"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <!--        Search Bar-->
        <div class="relative">
          <svg
            class="absolute top-1 left-1 cursor-pointer"
            id="search_24"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

            <g transform="matrix(1 0 0 1 12 12)">
              <g style="">
                <g transform="matrix(1 0 0 1 0 0)">
                  <path
                    style="
                      stroke: none;
                      stroke-width: 2;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" translate(-12, -12)"
                    d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                    stroke-linecap="round"
                  />
                </g>
                <g transform="matrix(1 0 0 1 -2.25 -2.25)">
                  <circle
                    style="
                      stroke: rgb(0, 0, 0);
                      stroke-width: 1.5;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="7"
                  />
                </g>
                <g transform="matrix(1 0 0 1 5.75 5.75)">
                  <line
                    style="
                      stroke: rgb(0, 0, 0);
                      stroke-width: 1.5;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x1="3"
                    y1="3"
                    x2="-3"
                    y2="-3"
                  />
                </g>
              </g>
            </g>
          </svg>
          <input class="px-4 py-1 pl-8 rounded-md" type="text" placeholder="Search..." />
        </div>
        <!--        Profile-->
        <div>
          <div class="flex justify-between items-center">
            <svg
              class="cursor-pointer"
              id="user-circle_24"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

              <g transform="matrix(1 0 0 1 12 12)">
                <g style="">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 2;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <circle
                      style="
                        stroke: rgb(0, 0, 0);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="9"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 -2.25)">
                    <circle
                      style="
                        stroke: rgb(0, 0, 0);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="3"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -0.25 5.18)">
                    <path
                      style="
                        stroke: rgb(0, 0, 0);
                        stroke-width: 1.5;
                        stroke-dasharray: none;
                        stroke-linecap: round;
                        stroke-dashoffset: 0;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -17.43)"
                      d="M 6.168 18.849 C 6.676237607775832 17.15745504037093 8.233752693994969 15.99947996713546 10.000000000000002 16 L 14 16 C 15.76863928839429 15.999389789459086 17.32772707883109 17.16036935171706 17.834 18.855"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div @click="toggleUser" class="">
              <div class="cursor-pointer font-semibold">Nureek</div>
              <div class="cursor-pointer relative text-xs">Admin</div>
            </div>
            <div v-show="showUser" class="flex bg-gray-700 rounded-md absolute z-20 mt-52">
              <ul class="mt-6 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    class="block text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--      Menu-->
      <div class="h-[calc(100vh-50px)] p-5 text-center">
        <div class="border border-gray-400 p-5 rounded-md h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let showSide = ref(true)
let showUser = ref(false)
const toggleSideBar = () => {
  showSide.value = !showSide.value
}
const toggleUser = () => {
  showUser.value = !showUser.value
}
</script>

<style lang="scss" scoped></style>
x

<script setup>
import Top from './Top.vue';
</script>

<template>
  <div class="flex overflow-hidden flex-col bg-white pb-[3430px] max-md:pb-24">
    <Top />
    <main
      class="flex flex-col items-start px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <section aria-labelledby="campus-title">
        <h1
          id="campus-title"
          class="flex gap-3.5 text-5xl font-bold text-black whitespace-nowrap max-md:ml-1.5 max-md:text-4xl"
        >
          <div
            class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]"
            aria-hidden="true"
          ></div>
          <div class="flex-auto self-start max-md:text-4xl">
            我們有兩個校區！
          </div>
        </h1>
        <p class="self-center mt-6 text-4xl text-black max-md:max-w-full">
          數位實驗高中具有兩個校區，位於弘道國中內部的弘道基地，及位於吉林國小旁的吉林基地，高一學生以弘道基地上課為主，高二、高三則為吉林基地，但仍有課程在不同基地，學生需要自備交通兩地的能力。
        </p>
        <div
          class="self-center mt-14 w-full max-w-[1073px] max-md:mt-10 max-md:max-w-full"
        >
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col grow text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full"
              >
                <div
                  class="flex shrink-0 bg-center bg-no-repeat bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fcdcaaba3d4af4f21b10ff50183490907%2Fa5dd77a5608246698085614a380dec92)] bg-zinc-300 h-[480px] w-[480px] max-md:max-w-full"
                  role="img"
                  aria-label="弘道基地校區照片"
                ></div>
                <a
                  href="https://maps.app.goo.gl/m3e6ib9ot2JsbFoW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="self-center mt-11 cursor-pointer pointer-events-auto max-md:mt-10"
                  tabindex="0"
                >
                  <p><span class="text-blue-900">Google Map: 弘道基地</span></p>
                </a>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col grow text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d9e11b232b9721dca820b64a5109143a23bb9baffc9b36321306018197d9c1?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
                  alt="吉林基地校區照片"
                  class="object-contain aspect-[1.01] h-[480px] w-[480px] max-md:max-w-full"
                />
                <a
                  href="https://maps.app.goo.gl/hgTUDhzBEJMTs15H6"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="self-center mt-10 cursor-pointer pointer-events-auto"
                  tabindex="0"
                >
                  <p><span class="text-blue-900">Google Map:吉林基地</span></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="external-locations">
        <h2
          id="external-locations"
          class="flex flex-wrap gap-4 mt-20 text-5xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl"
        >
          <div
            class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]"
            aria-hidden="true"
          ></div>
          <div class="flex-auto self-start max-md:max-w-full max-md:text-4xl">
            在大學或公司裡上課？
          </div>
        </h2>
        <p class="self-center mt-6 text-4xl text-black max-md:max-w-full">
          為了獲得更多學習資源，有許多課程會有校外參訪或實地實察的活動，地點包含臺北醫學大學、台北市立美術館、ViewSonic優派等等，而所有地點皆需要學生自行前往，這時就是考驗學生移動力的時刻了。
        </p>
        <h3
          class="mt-11 ml-8 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full"
        >
          2023世界新聞攝影展參訪
        </h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dcc0ba0f325d9750c6f877d2a4f23672282cf4c359a3156ad5b4d874a8aa6be?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
          alt="2023世界新聞攝影展參訪活動照片"
          class="object-contain self-center mt-12 w-full aspect-[1.78] max-w-[1042px] max-md:mt-10 max-md:max-w-full"
        />
        <h3 class="mt-8 ml-8 text-4xl font-bold text-black max-md:ml-2.5">
          LINE內湖總部參訪
        </h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94cae2069d6c9d6fd7ac9a3bebd2114e5e1ba0e35c5c5bf7e24da85bd5ecf2a?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
          alt="LINE內湖總部參訪活動照片"
          class="object-contain self-center mt-11 w-full aspect-[1.78] max-w-[1042px] max-md:mt-10 max-md:max-w-full"
        />
        <p
          class="mt-9 ml-6 text-5xl font-bold text-black max-md:ml-2.5 max-md:text-4xl"
        >
          And more!!
        </p>
      </section>

      <section aria-labelledby="online-learning">
        <h2
          id="online-learning"
          class="flex gap-4 mt-14 text-5xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:ml-1.5 max-md:text-4xl"
        >
          <div
            class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]"
            aria-hidden="true"
          ></div>
          <div class="flex-auto self-start max-md:text-4xl">
            可以在家裡上課？
          </div>
        </h2>
        <p class="self-center mt-8 text-4xl text-black max-md:max-w-full">
          數位實驗高中的課程分為實體課程、線上同步課程及線上非同步課程。
        </p>
        <div class="mt-14 ml-6 max-w-full w-[668px] max-md:mt-10">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <div
                class="px-5 mx-auto text-4xl font-bold text-white whitespace-nowrap bg-blue-200 rounded-full h-[196px] w-[196px] max-md:mt-9 text-center flex items-center"
                role="heading"
                aria-level="3"
              >
                實體課程
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <p
                class="self-stretch my-auto text-4xl text-black max-md:mt-10 max-md:max-w-full"
              >
                需到教室或指定地點上課
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 ml-6 w-full max-w-[886px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
              <div
                class="px-5 mx-auto text-4xl font-bold text-white whitespace-nowrap bg-blue-200 rounded-full h-[196px] w-[196px] max-md:mt-9 text-center flex items-center"
                role="heading"
                aria-level="3"
              >
                線上同步
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
              <p
                class="self-stretch my-auto text-4xl text-black max-md:mt-10 max-md:max-w-full"
              >
                使用Google Meet等工具線上連線上課<br />只要有行動裝置就可<span
                  class="tracking-[6px]"
                  >以</span
                >上課✅
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 ml-6 w-full max-w-[870px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div
                class="px-4 mx-auto text-4xl font-bold text-white whitespace-nowrap bg-blue-200 rounded-full h-[196px] w-[196px] max-md:mt-9 text-center flex items-center"
                role="heading"
                aria-level="3"
              >
                線上非同步
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <p
                class="self-stretch my-auto text-4xl text-black max-md:mt-10 max-md:max-w-full"
              >
                依照指定內容以及截止時間完成進度<br />可以隨時隨地學習✅
              </p>
            </div>
          </div>
        </div>
        <p class="self-center mt-9 text-4xl text-black max-md:max-w-full font-bold">
          所以數位實驗高中的學生在平日白天不一定要到校，可以在家中自主學習喔！
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CampusLocations',
};
</script>

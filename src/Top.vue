<template>
  <nav
      class="flex z-10 w-full bg-blue-900 min-h-[16px] max-md:max-w-full"
      aria-label="Top border"
  ></nav>
  <header
      class="flex justify-center items-center gap-5 px-6 py-px w-full text-3xl font-bold whitespace-nowrap bg-white text-slate-400 max-md:px-5 max-md:max-w-full"
  >
    <RouterLink class="menuItem-active-link" to="/">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b5eba1f22bad34231547d96112db90872a3140ae1d2f895bb8688dd19a1d90?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
          alt="School Logo"
          class="object-cover grow-0 w-96 shrink-0"
      />
    </RouterLink>
    <span class="flex-1"></span>
    <a
        href="https://tschool.tp.edu.tw/nss/p/index"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 px-4 py-2 my-4 bg-white rounded-3xl border-blue-200 border-solid cursor-pointer pointer-events-auto border-[4px] text-center align-middle"
        tabindex="0"
    >官網</a
    >

  </header>
  <nav
      class="flex gap-10 items-center px-8 w-full text-3xl text-blue-900 whitespace-nowrap bg-blue-200 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full"
      aria-label="Main navigation"
  >
    <button class="self-stretch py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/teaching">教學理念</RouterLink>
    </button>
    <button class="self-stretch py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/campus">校園資訊</RouterLink>
    </button>
    <button class="grow shrink self-stretch py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/lesson">課程介紹</RouterLink>
    </button>
    <button class="self-start py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/faq">FAQ</RouterLink>
    </button>
    <button class="grow shrink self-stretch py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/join">入學專欄</RouterLink>
    </button>
    <button class="grow shrink self-stretch py-2 my-auto w-[16%]" tabindex="0">
      <RouterLink class="menuItem-active-link" to="/about">關於我們</RouterLink>
    </button>
  </nav>
</template>

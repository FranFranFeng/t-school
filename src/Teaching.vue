<script setup>
import Top from './Top.vue';
</script>

<template>
  <top/>
  <div
      class="flex overflow-hidden flex-col pb-36 font-bold max-md:pb-24"
      role="main"
  >
    <div
        class="flex flex-col items-center px-20 mt-14 w-full text-5xl text-black max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
    >
      <div
          class="flex flex-wrap self-start whitespace-nowrap max-md:pr-5 max-md:text-4xl"
      >
        <div class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]" aria-hidden="true"></div>
        <div class="self-start mr-0 max-md:max-w-full max-md:text-4xl">
          「廣闊探索，天賦自由」
        </div>
      </div>
      <div class="mt-7 text-4xl max-md:max-w-full">
        數位實驗高中以「廣闊探索，天賦自由」為核心理念，幫助學生成為具有「學習力」、「移動力」、「影響力」的世界公民，勇於探索自我，認識周遭環境，發展成有能力應變未來的獨立個體。<br/><br/>T-school融合人文與科技，設計出五大課程:<span
          class="font-bold"
      >自我發展</span
      >、<span class="font-bold">文化社會</span>、<span class="font-bold"
      >學科知識</span
      >、<span class="font-bold">個別需求</span>、<span class="font-bold"
      >畢業專題</span
      >，培養學生的6C核心能力（創意、協作、批判思考、公民素養、溝通、品格）。<br/>
      </div>
      <div class="flex gap-3.5 self-start whitespace-nowrap max-md:text-4xl py-10">
        <div class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]" aria-hidden="true"></div>
        <div class="self-start basis-auto max-md:text-4xl">個人化學習</div>
      </div>
      <div class="mt-8 text-4xl max-md:max-w-full">
        數位實驗高中以幫助學生探索自我、發展能力，並且成為具備學習力、影響力、移動力的世界公民為主要教學目標，發掘每一位學生的學習潛力與天賦才能，促進個人自我實現及社會共榮。<br/>
      </div>
      <div class="flex gap-3.5 self-start whitespace-nowrap max-md:text-4xl py-10">
        <div class="flex shrink-0 bg-blue-900 h-[65px] w-[9px]" aria-hidden="true"></div>
        <div class="self-start basis-auto max-md:text-4xl">數位學習</div>
      </div>
      <div class="mt-8 text-4xl max-md:max-w-full">
        數位實驗高中並不會限制使用電子產品，反而希望學生多多使用數位工具。我們鮮少使用紙本講義和功課，大多數時間是用電子產品完成任務，培養學生現代科技技術，打造彈性多元的學習模式，以促進自我實現。
      </div>
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29fee3edcdd9a45d0cde97128ca59ffd3c47578f1f00f0dc36d5108d0a3ecff9?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
          alt="數位實驗高中學習環境展示"
          class="object-contain mt-14 w-full aspect-[1.01] max-w-[1032px] rounded-[512px] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
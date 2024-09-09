const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);

// Calling F(x)
const lenis = smoothScroll();
addWords();
bendWords();
scrollProgress();








// Creating F(x)
function smoothScroll() {
   const lenis = new Lenis()

   lenis.on('scroll', ScrollTrigger.update)
   gsap.ticker.add(time => lenis.raf(time * 1000))

   gsap.ticker.lagSmoothing(0)

   return lenis;
}

function addWords() {
   const words = [
      "serendipity", "ephemeral", "luminous", "mellifluous", "ethereal", 
      "sonder", "ineffable", "lilt", "sonder", "reverie", 
      "petrichor", "halcyon", "elysian", "silhouette", "gossamer", 
      "effervescent", "wanderlust", "panacea", "evanescent", "solitude"
   ];



   const container = $('.text-container');

   words.forEach(word => {
      container.innerHTML += `
         <a href="" class="text-[10vw] sm:text-[8vw] italic font-semibold capitalize will-change-transform origin-left opacity-[0.9] hover:opacity-100">${word}</a>
      `;
   })
}

function bendWords() {
   const links = $$('.text-container a');
   const main = $('main');
   const getV = gsap.utils.clamp(-50, 50);

   lenis.on('scroll', ({ velocity }) => {
      const v = getV(velocity);
      gsap.to(links, {skewY: v * 0.5})
   })
}

function scrollProgress() {
   const progressCon = $('.progress');
   const progressMonitor = $('.progress-monitor');
   
   const getP = gsap.utils.mapRange(0, 1, 880, 0);
   
   lenis.on('scroll', ({progress}) => {
      const p = getP(progress);
      progressCon.style.strokeDashoffset = p;

      progressMonitor.textContent = Math.round(progress * 100) + "%";
   })
}
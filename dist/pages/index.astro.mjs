/* empty css                                     */
import { c as createComponent, b as renderTemplate, u as unescapeHTML, a as renderComponent, F as Fragment, m as maybeRenderHead, d as addAttribute, e as createAstro, r as renderHead } from '../chunks/astro/server_CWiqrlbZ.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$ContentSection, b as $$Icon, a as $$Footer } from '../chunks/footer_CkGOFtEf.mjs';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'clsx';
export { renderers } from '../renderers.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyAWyelN3YFsFIG2hgcpp-VpWTXNijVhrEY",
  authDomain: "unidesagency-97d68.firebaseapp.com",
  projectId: "unidesagency-97d68",
  storageBucket: "unidesagency-97d68.firebasestorage.app",
  messagingSenderId: "819819628358",
  appId: "1:819819628358:web:bed6e4a9de210dd6590747"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCreatives() {
  try {
    const creativesRef = collection(db, "creatives");
    const querySnapshot = await getDocs(creativesRef);
    return querySnapshot.docs.map((doc2) => ({
      id: doc2.id,
      ...doc2.data()
    }));
  } catch (error) {
    console.error("Error fetching creatives:", error);
    throw error;
  }
}

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Creatives = createComponent(async ($$result, $$props, $$slots) => {
  let creatives = [];
  try {
    const allCreatives = await getCreatives();
    creatives = allCreatives.filter((creative) => creative.enabled == true);
  } catch (error) {
    console.error("Failed to load creatives:", error);
  }
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", ' <!-- Creative Modal --> <div id="creative-modal" class="modal hidden fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm" aria-hidden="true" data-astro-cid-l5ohyn5v> <div class="flex items-center justify-center min-h-screen p-4" data-astro-cid-l5ohyn5v> <div id="creative-modal-content" class="bg-default rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-500 scale-95 opacity-0" data-astro-cid-l5ohyn5v> <div class="p-6" data-astro-cid-l5ohyn5v> <div class="flex justify-between items-start mb-6" data-astro-cid-l5ohyn5v> <h2 id="modal-title" class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent" data-astro-cid-l5ohyn5v>Creative Portfolio</h2> <button id="close-creative-modal" type="button" class="text-default/60 hover:text-primary hover:rotate-90 transition-all duration-300 text-xl font-bold" aria-label="Close modal" data-astro-cid-l5ohyn5v>\n\xD7\n</button> </div> <div class="space-y-6" data-astro-cid-l5ohyn5v> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-l5ohyn5v> <div class="md:w-1/3" data-astro-cid-l5ohyn5v> <div id="modal-image-container" class="aspect-[3/4] bg-default/20 rounded-lg flex items-center justify-center overflow-hidden" data-astro-cid-l5ohyn5v> <img id="modal-image" src="" alt="" class="w-full h-full object-cover rounded-lg hidden" loading="lazy" data-astro-cid-l5ohyn5v> <span id="modal-image-placeholder" class="text-default/60 text-sm" data-astro-cid-l5ohyn5v>Portfolio Preview</span> </div> </div> <div class="md:w-2/3 space-y-4" data-astro-cid-l5ohyn5v> <div data-astro-cid-l5ohyn5v> <h3 id="modal-name" class="text-xl font-bold text-default" data-astro-cid-l5ohyn5v></h3> <p id="modal-specialty" class="text-primary font-medium" data-astro-cid-l5ohyn5v></p> </div> <div data-astro-cid-l5ohyn5v> <h4 class="font-semibold mb-2" data-astro-cid-l5ohyn5v>About</h4> <p id="modal-description" class="text-default/80 leading-relaxed" data-astro-cid-l5ohyn5v></p> </div> <div data-astro-cid-l5ohyn5v> <h4 class="font-semibold mb-3 text-lg" data-astro-cid-l5ohyn5v>Personal Details</h4> <div id="modal-personal" class="grid grid-cols-2 gap-3 text-sm mb-4" data-astro-cid-l5ohyn5v> <!-- Personal details will be populated by JavaScript --> </div> </div> <div data-astro-cid-l5ohyn5v> <h4 class="font-semibold mb-3 text-lg" data-astro-cid-l5ohyn5v>Skills & Experience</h4> <div id="modal-stats" class="grid grid-cols-2 gap-3 text-sm" data-astro-cid-l5ohyn5v> <!-- Stats will be populated by JavaScript --> </div> </div> </div> </div> <div class="flex gap-4 pt-6 border-t border-default/20" data-astro-cid-l5ohyn5v> <button class="flex-1 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5" data-astro-cid-l5ohyn5v>\nContact Creative\n</button> <button id="download-portfolio-btn" class="flex-1 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-all duration-300 font-medium hover:shadow-md hover:-translate-y-0.5" onclick="downloadPortfolio()" data-astro-cid-l5ohyn5v>\nDownload Portfolio\n</button> </div> </div> </div> </div> </div> </div>  <!-- Hidden data for JavaScript --> <script id="creatives-data" type="application/json">', "<\/script> "])), renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Creatives", "id": "creatives", "data-astro-cid-l5ohyn5v": true }, { "default": async ($$result2) => renderTemplate`  ${creatives.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="text-center py-8" data-astro-cid-l5ohyn5v> <p class="text-default/60" data-astro-cid-l5ohyn5v>No creatives available at the moment. Please check back later.</p> </div>` : renderTemplate`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-astro-cid-l5ohyn5v> ${creatives.map((creative) => renderTemplate`<div class="talent-card bg-offset rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" data-astro-cid-l5ohyn5v> <div class="aspect-[3/4] bg-default/20 flex items-center justify-center relative" data-astro-cid-l5ohyn5v> ${creative.image && creative.image.trim() !== "" ? renderTemplate`<img${addAttribute(creative.image, "src")}${addAttribute(`${creative.name} - ${creative.specialty}`, "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-l5ohyn5v>` : renderTemplate`<span class="text-default/60 text-xs" data-astro-cid-l5ohyn5v>Portfolio Preview</span>`} <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-white" data-astro-cid-l5ohyn5v> <div class="space-y-2" data-astro-cid-l5ohyn5v>  <div class="text-white" data-astro-cid-l5ohyn5v> <h3 class="font-bold text-lg leading-tight" data-astro-cid-l5ohyn5v>${creative.name}</h3> </div>  <div class="flex flex-wrap gap-2 items-center" data-astro-cid-l5ohyn5v> ${creative.location && renderTemplate`<div class="bg-black/40 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm flex items-center" data-astro-cid-l5ohyn5v> <span class="mr-1" data-astro-cid-l5ohyn5v>📍</span>${creative.location} </div>`} ${creative.born && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Born" data-astro-cid-l5ohyn5v>
🎂 ${creative.born} </span>`} ${creative.specialties && creative.specialties.length > 0 && creative.specialties.map((specialty) => renderTemplate`<span class="bg-primary/80 text-white text-xs py-1 px-2 rounded-full" data-astro-cid-l5ohyn5v> ${specialty.trim()} </span>`)} ${!creative.specialties && creative.specialty && renderTemplate`<span class="bg-primary/80 text-white text-xs py-1 px-2 rounded-full" data-astro-cid-l5ohyn5v> ${creative.specialty} </span>`} </div>  <div class="flex flex-wrap gap-1" data-astro-cid-l5ohyn5v> ${creative.height && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Height" data-astro-cid-l5ohyn5v>
📏 ${creative.height}cm
</span>`} ${creative.shoeSize && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Shoe Size" data-astro-cid-l5ohyn5v>
� ${creative.shoeSize} </span>`} ${creative.dressSize && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Dress Size" data-astro-cid-l5ohyn5v>
� ${creative.dressSize} </span>`} ${creative.eyeColor && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Eye Color" data-astro-cid-l5ohyn5v>
�️ ${creative.eyeColor} </span>`} ${creative.hairColor && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Hair Color" data-astro-cid-l5ohyn5v>
� ${creative.hairColor} </span>`} </div> </div> </div> </div> <div class="p-4" data-astro-cid-l5ohyn5v> <div class="mb-3" data-astro-cid-l5ohyn5v>  <div class="flex flex-wrap gap-1" data-astro-cid-l5ohyn5v> ${creative.skills && creative.skills.split(",").map((skill) => renderTemplate`<span class="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors" data-astro-cid-l5ohyn5v> ${skill.trim()} </span>`)} </div> </div> <p class="text-default/80 text-xs mb-3 leading-relaxed line-clamp-2" data-astro-cid-l5ohyn5v>${creative.description}</p> <button class="view-profile-btn w-full bg-primary text-white px-3 py-2 rounded-md hover:bg-primary/80 transition-all duration-300 text-xs font-medium relative overflow-hidden group"${addAttribute(`openCreativeModal('${creative.id}', '${creative.name}', '${creative.specialty}', '${creative.description}', '${creative.image || ""}')`, "onclick")} data-astro-cid-l5ohyn5v> <span class="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center" data-astro-cid-l5ohyn5v>
View Portfolio
<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-l5ohyn5v> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-l5ohyn5v></path> </svg> </span> <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" data-astro-cid-l5ohyn5v></span> </button> </div> </div>`)} </div>`}`, "lead": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": async ($$result3) => renderTemplate`
Meet our <span class="text-primary" data-astro-cid-l5ohyn5v>creative professionals</span> who bring artistic vision
    and technical expertise to every project.
` })}` }), unescapeHTML(JSON.stringify(creatives)));
}, "/Users/leonardoguest/Documents/Github/unides/src/components/creatives.astro", void 0);

async function getTalents() {
  try {
    const talentsRef = collection(db, "talents");
    const querySnapshot = await getDocs(talentsRef);
    return querySnapshot.docs.map((doc2) => ({
      id: doc2.id,
      ...doc2.data()
    }));
  } catch (error) {
    console.error("Error fetching talents:", error);
    throw error;
  }
}

const $$Talents = createComponent(async ($$result, $$props, $$slots) => {
  let talents = [];
  try {
    const allTalents = await getTalents();
    talents = allTalents.filter((talent) => talent.enabled == true);
    console.log(`Loaded ${talents.length} enabled talents from Firebase`);
  } catch (error) {
    console.error("Failed to load talents:", error);
  }
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Talents", "id": "talents" }, { "default": async ($$result2) => renderTemplate`  ${talents.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="text-center py-8"> <p class="text-default/60">No talents available at the moment. Please check back later.</p> </div>` : renderTemplate`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"> ${talents.map((talent) => renderTemplate`<div class="talent-card bg-offset rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"> <div class="aspect-[2/3] bg-default/20 flex items-center justify-center relative"> ${talent.image && talent.image.trim() !== "" ? renderTemplate`<img${addAttribute(talent.image, "src")}${addAttribute(`${talent.name} - ${talent.specialty}`, "alt")} class="w-full h-full object-cover" loading="lazy">` : renderTemplate`<span class="text-default/60 text-xs">Photo Coming Soon</span>`} <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 text-white"> <div class="space-y-1">  <div class="text-white"> <h3 class="font-bold text-sm leading-tight">${talent.name}</h3> </div>  <div class="flex flex-wrap gap-1 items-center"> ${talent.location && renderTemplate`<div class="bg-black/40 text-white text-xs py-0.5 px-1.5 rounded-full backdrop-blur-sm flex items-center"> <span class="mr-1">📍</span>${talent.location} </div>`} ${talent.born && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Born">
🎂 ${talent.born} </span>`} ${talent.specialties && talent.specialties.length > 0 && renderTemplate`<span class="bg-primary/80 text-white text-xs py-0.5 px-1.5 rounded-full"> ${talent.specialties[0].trim()} </span>`} </div>  <div class="flex flex-wrap gap-1"> ${talent.height && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Height">
📏 ${talent.height}cm
</span>`} ${talent.shoeSize && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Shoe Size">
👟 ${talent.shoeSize} </span>`} ${talent.dressSize && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Dress Size">
👗 ${talent.dressSize} </span>`} ${talent.eyeColor && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Eye Color">
👁️ ${talent.eyeColor} </span>`} ${talent.hairColor && renderTemplate`<span class="text-xs text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm" title="Hair Color">
💇 ${talent.hairColor} </span>`} </div> </div> </div> </div> <div class="p-3"> <div class="mb-2">  <div class="flex flex-wrap gap-1"> ${talent.skills && talent.skills.split(",").map((skill) => renderTemplate`<span class="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"> ${skill.trim()} </span>`)} </div> </div> <button class="view-profile-btn w-full bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary/80 hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 text-xs font-medium relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"${addAttribute(talent.id, "data-talent-id")}${addAttribute(talent.name, "data-talent-name")}${addAttribute(talent.specialties ? talent.specialties.join(", ") : talent.specialty || "", "data-talent-specialties")}${addAttribute(talent.description, "data-talent-description")}${addAttribute(talent.image || "", "data-talent-image")}> <span class="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center"> <span class="loading-text">View Profile</span> <span class="loading-spinner hidden animate-spin ml-2">⏳</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span> </button> </div> </div>`)} </div>`}`, "lead": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": async ($$result3) => renderTemplate`
Discover our <span class="text-primary">exceptional talents</span> ready to bring your vision to life.
` })}` })} <!-- Talent Modal --> <div id="talent-modal" class="modal hidden fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm" aria-hidden="true"> <div class="flex items-center justify-center min-h-screen p-4"> <div class="bg-default rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform transition-transform duration-500 scale-95 opacity-0" id="talent-modal-content"> <div class="p-6"> <div class="flex justify-between items-start mb-6"> <h2 id="talent-modal-title" class="text-3xl font-bold text-default bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">Talent Profile</h2> <button id="close-talent-modal" type="button" class="text-default/60 hover:text-primary hover:rotate-90 transition-all duration-300 text-2xl font-bold" aria-label="Close modal">
×
</button> </div> <div class="space-y-8"> <div class="flex flex-col lg:flex-row gap-8"> <!-- Photo Gallery Section --> <div class="lg:w-1/2"> <h4 class="font-semibold mb-4 text-lg">Photos</h4> <div id="talent-photo-gallery" class="space-y-4"> <!-- Main photo --> <div class="aspect-[3/4] bg-default/20 rounded-lg flex items-center justify-center overflow-hidden"> <img id="talent-modal-main-image" src="" alt="" class="w-full h-full object-cover rounded-lg hidden" loading="lazy"> <span id="talent-modal-main-image-placeholder" class="text-default/60 text-sm">Photo Coming Soon</span> </div> <!-- Thumbnail gallery --> <div id="talent-thumbnail-gallery" class="grid grid-cols-4 gap-2 hidden"> <!-- Thumbnails will be populated by JavaScript --> </div> </div> </div> <!-- Info Section --> <div class="lg:w-1/2 space-y-6"> <div> <h3 id="talent-modal-name" class="text-2xl font-bold text-default"></h3> <p id="talent-modal-specialty" class="text-primary font-medium text-lg"></p> </div> <div> <h4 class="font-semibold mb-3 text-lg">About</h4> <p id="talent-modal-description" class="text-default/80 leading-relaxed"></p> </div> <div> <h4 class="font-semibold mb-3 text-lg">Personal Details</h4> <div id="talent-modal-personal" class="grid grid-cols-2 gap-3 text-sm"> <!-- Personal details will be populated by JavaScript --> </div> </div> <div class="flex gap-4 pt-6 border-t border-default/20"> <button class="flex-1 border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 hover:border-purple-600 hover:text-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"> <span class="portfolio-text">Download Portfolio</span> <span class="portfolio-spinner hidden animate-spin ml-2">⏳</span> </button> </div> </div> </div> </div> </div> </div> </div> </div> `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/talents.astro", void 0);

const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
  negative margin is sum of button width (6) and gap size of flex parent (6)
  TODO don't hardcode these values
-->${maybeRenderHead()}<button id="theme-switcher" type="button" class="-ml-12 origin-[right_center] scale-0 transition-all duration-500" data-astro-cid-l4aeqea3> <div id="icon-theme-light" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:white-balance-sunny", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use light theme</span> </div> <div id="icon-theme-dark" class="hidden" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:weather-night", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use dark theme</span> </div> </button>  `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/theme-switcher.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { title: "Talents", url: "#talents" },
    { title: "Creatives", url: "#creatives" },
    { title: "About Us", url: "#aboutus" },
    { title: "Contact Us", url: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="absolute bottom-0 z-20 flex w-full items-center justify-between border-b border-transparent px-8 py-4" data-astro-cid-hpnw4vwy> <a class="flex items-center gap-3 hover:!text-default" href="#" data-astro-cid-hpnw4vwy> <h1 class="sr-only" data-astro-cid-hpnw4vwy>Unides</h1> <img src="/unides_yellow.png" alt="Unides Logo" class="h-8 w-auto" data-astro-cid-hpnw4vwy> </a> <div class="flex-grow flex justify-center" data-astro-cid-hpnw4vwy> <nav class="hidden sm:block" data-astro-cid-hpnw4vwy> <ul class="flex items-center gap-8" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="text-base font-medium nav-link"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> <div data-astro-cid-hpnw4vwy> <div class="flex items-center gap-6" data-astro-cid-hpnw4vwy> <button id="open-nav-button" type="button" class="btn sm:hidden" aria-label="Navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:menu", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-hpnw4vwy": true })} </div> <div id="menu-modal" class="modal hidden" aria-hidden="true" data-astro-cid-hpnw4vwy> <div class="fixed inset-0 bg-default px-8 py-4 text-default" data-astro-cid-hpnw4vwy> <div class="space-y-4" role="dialog" aria-modal="true" data-astro-cid-hpnw4vwy> <header class="text-right" data-astro-cid-hpnw4vwy> <button id="close-nav-button" type="button" class="btn" aria-label="Close navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:close", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> </header> <nav data-astro-cid-hpnw4vwy> <ul class="flex flex-col" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="block py-4 text-center text-xl font-medium mobile-nav-link"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> </div> </div> </div> </header>  <noscript> <style>
    #open-nav-button {
      display: none;
    }
  </style> </noscript> `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$ApplyModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- Apply Modal -->", `<div id="apply-modal" class="fixed inset-0 z-50 bg-black bg-opacity-50 hidden flex items-center justify-center p-4" aria-hidden="true"> <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-start mb-4"> <h2 class="text-2xl font-bold text-purple-600 dark:text-purple-400">Apply to Join <span class="unides-brand">UNIDES</span></h2> <button id="close-apply-modal" type="button" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl font-bold" aria-label="Close modal">
\xD7
</button> </div> <form id="apply-form" class="space-y-4"> <div> <label for="apply-name" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name *</label> <input type="text" id="apply-name" name="name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required> </div> <div> <label for="apply-email" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email *</label> <input type="email" id="apply-email" name="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required> </div> <div> <label for="apply-instagram" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Instagram URL</label> <input type="url" id="apply-instagram" name="instagram" placeholder="https://instagram.com/yourusername" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="apply-description" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
Tell us about yourself *
<span class="text-xs text-gray-500">(minimum 200 characters)</span> </label> <textarea id="apply-description" name="description" rows="6" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Share your creative journey, your specialties, what makes you unique, and why you want to join UNIDES..." required minlength="200"></textarea> <div class="text-xs text-gray-500 mt-1"> <span id="char-count">0</span> / 200 characters minimum
</div> </div> <div class="flex gap-4 pt-4"> <button type="button" id="cancel-apply" class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
Cancel
</button> <button type="submit" id="submit-apply" class="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
Submit Application
</button> </div> <div id="apply-form-status" class="hidden text-center text-sm"></div> </form> </div> </div> </div> <script>
  // Define global functions first
  function openApplyModal() {
    console.log('Opening apply modal...');
    const modal = document.getElementById('apply-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      console.log('Modal opened');
    } else {
      console.error('Modal not found');
    }
  }

  function closeApplyModal() {
    const modal = document.getElementById('apply-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
      
      // Reset form
      const form = document.getElementById('apply-form');
      if (form) {
        form.reset();
        updateCharCount();
      }
    }
  }

  function updateCharCount() {
    const textarea = document.getElementById('apply-description');
    const charCount = document.getElementById('char-count');
    if (textarea && charCount) {
      charCount.textContent = textarea.value.length;
      
      // Update color based on character count
      if (textarea.value.length >= 200) {
        charCount.style.color = '#22c55e'; // green
      } else {
        charCount.style.color = '#ef4444'; // red
      }
    }
  }

  // Make functions globally available
  if (typeof window !== 'undefined') {
    window.openApplyModal = openApplyModal;
    window.closeApplyModal = closeApplyModal;
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS is not loaded. Make sure to include the EmailJS script.');
      return;
    }
    
    // Initialize EmailJS
    emailjs.init({
      publicKey: "HAJhQWntEy40S-xyj",
    });

    // Event listeners
    const closeBtn = document.getElementById('close-apply-modal');
    const cancelBtn = document.getElementById('cancel-apply');
    const textarea = document.getElementById('apply-description');
    const form = document.getElementById('apply-form');
    const modal = document.getElementById('apply-modal');

    if (closeBtn) closeBtn.addEventListener('click', closeApplyModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeApplyModal);
    if (textarea) textarea.addEventListener('input', updateCharCount);

    // Form submission
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-apply');
        const formStatus = document.getElementById('apply-form-status');
        const originalText = submitBtn?.textContent;
        
        // Validate description length
        const description = document.getElementById('apply-description').value;
        if (description.length < 200) {
          if (formStatus) {
            formStatus.textContent = 'Description must be at least 200 characters long.';
            formStatus.className = 'block text-red-600 text-center text-sm';
          }
          return;
        }

        // Show loading state
        if (submitBtn) {
          submitBtn.textContent = 'Submitting...';
          submitBtn.disabled = true;
        }

        // Hide previous status messages
        if (formStatus) {
          formStatus.classList.add('hidden');
        }

        // Send form using EmailJS
        emailjs.sendForm('service_hm56mmb', 'template_i1utqhf', this)
          .then(() => {
            console.log('Application sent successfully!');
            
            // Show success message
            if (formStatus) {
              formStatus.textContent = 'Application submitted successfully! We\\'ll review your application and get back to you soon.';
              formStatus.className = 'block text-green-600 text-center text-sm';
            }
            
            // Reset form after a delay
            setTimeout(() => {
              closeApplyModal();
            }, 3000);
          }, (error) => {
            console.log('Application failed...', error);
            
            // Show error message
            if (formStatus) {
              formStatus.textContent = 'Failed to submit application. Please try again or contact us directly at info.unides@gmail.com';
              formStatus.className = 'block text-red-600 text-center text-sm';
            }
          })
          .finally(() => {
            // Reset button state
            if (submitBtn) {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            }
          });
      });
    }

    // Close modal when clicking outside
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.id === 'apply-modal') {
          closeApplyModal();
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeApplyModal();
      }
    });

    // Initialize character count
    updateCharCount();
  });
<\/script>`], ["<!-- Apply Modal -->", `<div id="apply-modal" class="fixed inset-0 z-50 bg-black bg-opacity-50 hidden flex items-center justify-center p-4" aria-hidden="true"> <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-start mb-4"> <h2 class="text-2xl font-bold text-purple-600 dark:text-purple-400">Apply to Join <span class="unides-brand">UNIDES</span></h2> <button id="close-apply-modal" type="button" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl font-bold" aria-label="Close modal">
\xD7
</button> </div> <form id="apply-form" class="space-y-4"> <div> <label for="apply-name" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name *</label> <input type="text" id="apply-name" name="name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required> </div> <div> <label for="apply-email" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email *</label> <input type="email" id="apply-email" name="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required> </div> <div> <label for="apply-instagram" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Instagram URL</label> <input type="url" id="apply-instagram" name="instagram" placeholder="https://instagram.com/yourusername" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="apply-description" class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
Tell us about yourself *
<span class="text-xs text-gray-500">(minimum 200 characters)</span> </label> <textarea id="apply-description" name="description" rows="6" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Share your creative journey, your specialties, what makes you unique, and why you want to join UNIDES..." required minlength="200"></textarea> <div class="text-xs text-gray-500 mt-1"> <span id="char-count">0</span> / 200 characters minimum
</div> </div> <div class="flex gap-4 pt-4"> <button type="button" id="cancel-apply" class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
Cancel
</button> <button type="submit" id="submit-apply" class="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
Submit Application
</button> </div> <div id="apply-form-status" class="hidden text-center text-sm"></div> </form> </div> </div> </div> <script>
  // Define global functions first
  function openApplyModal() {
    console.log('Opening apply modal...');
    const modal = document.getElementById('apply-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      console.log('Modal opened');
    } else {
      console.error('Modal not found');
    }
  }

  function closeApplyModal() {
    const modal = document.getElementById('apply-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
      
      // Reset form
      const form = document.getElementById('apply-form');
      if (form) {
        form.reset();
        updateCharCount();
      }
    }
  }

  function updateCharCount() {
    const textarea = document.getElementById('apply-description');
    const charCount = document.getElementById('char-count');
    if (textarea && charCount) {
      charCount.textContent = textarea.value.length;
      
      // Update color based on character count
      if (textarea.value.length >= 200) {
        charCount.style.color = '#22c55e'; // green
      } else {
        charCount.style.color = '#ef4444'; // red
      }
    }
  }

  // Make functions globally available
  if (typeof window !== 'undefined') {
    window.openApplyModal = openApplyModal;
    window.closeApplyModal = closeApplyModal;
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS is not loaded. Make sure to include the EmailJS script.');
      return;
    }
    
    // Initialize EmailJS
    emailjs.init({
      publicKey: "HAJhQWntEy40S-xyj",
    });

    // Event listeners
    const closeBtn = document.getElementById('close-apply-modal');
    const cancelBtn = document.getElementById('cancel-apply');
    const textarea = document.getElementById('apply-description');
    const form = document.getElementById('apply-form');
    const modal = document.getElementById('apply-modal');

    if (closeBtn) closeBtn.addEventListener('click', closeApplyModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeApplyModal);
    if (textarea) textarea.addEventListener('input', updateCharCount);

    // Form submission
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-apply');
        const formStatus = document.getElementById('apply-form-status');
        const originalText = submitBtn?.textContent;
        
        // Validate description length
        const description = document.getElementById('apply-description').value;
        if (description.length < 200) {
          if (formStatus) {
            formStatus.textContent = 'Description must be at least 200 characters long.';
            formStatus.className = 'block text-red-600 text-center text-sm';
          }
          return;
        }

        // Show loading state
        if (submitBtn) {
          submitBtn.textContent = 'Submitting...';
          submitBtn.disabled = true;
        }

        // Hide previous status messages
        if (formStatus) {
          formStatus.classList.add('hidden');
        }

        // Send form using EmailJS
        emailjs.sendForm('service_hm56mmb', 'template_i1utqhf', this)
          .then(() => {
            console.log('Application sent successfully!');
            
            // Show success message
            if (formStatus) {
              formStatus.textContent = 'Application submitted successfully! We\\\\'ll review your application and get back to you soon.';
              formStatus.className = 'block text-green-600 text-center text-sm';
            }
            
            // Reset form after a delay
            setTimeout(() => {
              closeApplyModal();
            }, 3000);
          }, (error) => {
            console.log('Application failed...', error);
            
            // Show error message
            if (formStatus) {
              formStatus.textContent = 'Failed to submit application. Please try again or contact us directly at info.unides@gmail.com';
              formStatus.className = 'block text-red-600 text-center text-sm';
            }
          })
          .finally(() => {
            // Reset button state
            if (submitBtn) {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            }
          });
      });
    }

    // Close modal when clicking outside
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.id === 'apply-modal') {
          closeApplyModal();
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeApplyModal();
      }
    });

    // Initialize character count
    updateCharCount();
  });
<\/script>`])), maybeRenderHead());
}, "/Users/leonardoguest/Documents/Github/unides/src/components/apply-modal.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "About Us", "id": "aboutus" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-4xl mx-auto space-y-8"> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="font-bold text-xl mb-4 text-purple-600">Our Mission</h3> <p class="text-default/80 leading-relaxed">
Elevate the next generation of Latinx visionaries—from underground musicians to boundary-pushing visual artists.
 Connect authentic creativity with brands and audiences hungry for something real.
Redefining what „Latin art“ means in Europe—breaking stereotypes with unstoppable innovation.
</p> </div> <div> <h3 class="font-bold text-xl mb-4 text-purple-600">Our Vision</h3> <p class="text-default/80 leading-relaxed">
Uniting Latinx talent and culture to transform the creative landscape—boldly, purposefully, together. </p> </div> </div> <div class="text-center py-12"> <h3 class="font-bold text-xl mb-8 text-purple-600">Our Values</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="values-card bg-offset p-6 rounded-lg"> <h4 class="font-semibold text-primary mb-2">Rooted in Culture</h4> <p class="text-sm text-default/80">We honor our Latin American heritage and celebrate the diversity that makes us powerful.</p> </div> <div class="values-card bg-offset p-6 rounded-lg"> <h4 class="font-semibold text-primary mb-2">Together We Rise</h4> <p class="text-sm text-default/80">Growth means nothing if we don't rise together. We build careers through real collaboration and community.</p> </div> <div class="values-card bg-offset p-6 rounded-lg"> <h4 class="font-semibold text-primary mb-2">Support & Elevation</h4> <p class="text-sm text-default/80">We understand how hard this path can be. That's why we're not just agents—we're allies.</p> </div> </div> <div class="grid md:grid-cols-1 gap-6 mt-6"> <div class="values-card bg-offset p-6 rounded-lg"> <h4 class="font-semibold text-primary mb-2">Trust & Respect</h4> <p class="text-sm text-default/80">Every relationship we build is grounded in mutual respect, transparency, and long-term trust.

From day one, our goal has been clear: to unite incredible talent with the right platforms, people, and opportunities, while staying true to who we are.</p> </div> </div> </div> <div class="about-section-divider"></div> <div class="text-center py-12"> <h3 class="font-bold text-xl mb-8 text-purple-600">Meet the Founder</h3> <div class="grid md:grid-cols-1 gap-6"> <div class="bg-offset p-8 rounded-lg shadow-md"> <div class="grid md:grid-cols-2 gap-8 items-center"> <div class="flex justify-center"> <div class="w-full max-w-xs h-110 overflow-hidden rounded-lg shadow-lg"> <img src="https://unides.s3.eu-central-1.amazonaws.com/images/about/_DSC4263.JPG" alt="Grasi" class="w-full h-full object-cover object-center"> </div> </div> <div class="text-center md:text-left"> <h4 class="font-semibold text-xl mb-1">Grasi</h4> <p class="text-primary text-sm mb-4">Founder</p> <p class="text-sm text-default/80 leading-relaxed">
With over 7 years of experience in operations and logistics, I bring structure, strategy, and creative problem-solving to the heart of talent management. I'm passionate about building systems that work efficiently, intuitively, and with room to grow. My background in streamlining complex processes is complemented by a lifelong love of art, which inspires fresh, human-centered solutions. At our agency, I focus on making things run smoothly behind the scenes so talent and creativity can take center stage. I'm excited to shape a space where artists thrive and ideas move with intention.
</p> </div> </div> </div> </div> </div> <div class="about-section-divider"></div> <div class="text-center bg-offset p-10 rounded-xl shadow-lg my-12"> <h3 class="font-bold text-xl mb-6 text-purple-600">Ready to Build Something Real?</h3> <p class="text-default/80 mb-8 max-w-2xl mx-auto">
Whether you're a visionary artist ready to rise or a brand searching for authentic, culture-shaping talent—we're here to make powerful, purposeful connections. Let's create something unforgettable, together.
</p> <button class="cta-button bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-medium text-lg shadow-md" onclick="openApplyModal()">
Apply now
</button> ${renderComponent($$result2, "ApplyModal", $$ApplyModal, {})} </div> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
At <span class="text-primary unides-brand">UNIDES</span>, we bring culture to life through <span class="text-primary">unforgettable events</span> where music, art, and community meet. <span class="text-primary">Talent. Culture. Impact.</span> ` })}` })}`;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/about-us.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", ` <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"><\/script> <script type="text/javascript">
    (function() {
        // Initialize EmailJS with your public key
        emailjs.init({
          publicKey: "HAJhQWntEy40S-xyj",
        });
    })();
<\/script> <script type="text/javascript">
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const formStatus = document.getElementById('form-status');
            const originalText = submitBtn?.textContent;

            // Show loading state
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            // Hide previous status messages
            if (formStatus) {
                formStatus.classList.add('hidden');
            }

            // Send form using EmailJS
            emailjs.sendForm('service_hm56mmb', 'template_xsjmtjf', this)
                .then(() => {
                    console.log('SUCCESS!');
                    
                    // Show success message
                    if (formStatus) {
                        formStatus.textContent = 'Message sent successfully! We\\'ll get back to you soon.';
                        formStatus.className = 'block text-green-600 text-center text-sm md:text-base font-medium mt-3';
                    }
                    
                    // Reset form
                    this.reset();
                }, (error) => {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    if (formStatus) {
                        formStatus.textContent = 'Failed to send message. Please try again or email us directly at info.unides@gmail.com';
                        formStatus.className = 'block text-red-600 text-center text-sm md:text-base font-medium mt-3';
                    }
                })
                .finally(() => {
                    // Reset button state
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                });
        });
    }
<\/script>`], ["", ` <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"><\/script> <script type="text/javascript">
    (function() {
        // Initialize EmailJS with your public key
        emailjs.init({
          publicKey: "HAJhQWntEy40S-xyj",
        });
    })();
<\/script> <script type="text/javascript">
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const formStatus = document.getElementById('form-status');
            const originalText = submitBtn?.textContent;

            // Show loading state
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            // Hide previous status messages
            if (formStatus) {
                formStatus.classList.add('hidden');
            }

            // Send form using EmailJS
            emailjs.sendForm('service_hm56mmb', 'template_xsjmtjf', this)
                .then(() => {
                    console.log('SUCCESS!');
                    
                    // Show success message
                    if (formStatus) {
                        formStatus.textContent = 'Message sent successfully! We\\\\'ll get back to you soon.';
                        formStatus.className = 'block text-green-600 text-center text-sm md:text-base font-medium mt-3';
                    }
                    
                    // Reset form
                    this.reset();
                }, (error) => {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    if (formStatus) {
                        formStatus.textContent = 'Failed to send message. Please try again or email us directly at info.unides@gmail.com';
                        formStatus.className = 'block text-red-600 text-center text-sm md:text-base font-medium mt-3';
                    }
                })
                .finally(() => {
                    // Reset button state
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                });
        });
    }
<\/script>`])), renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Contact Us", "id": "contact" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="grid md:grid-cols-2 gap-8"> <div class="space-y-6"> <div> <h3 class="font-bold text-lg mb-2 text-purple-600">Get in Touch</h3> <p class="text-offset">Your idea is the spark—we’ll help turn it into reality. Send us a message and we'll respond as soon as possible.</p> </div> <div class="space-y-4"> <div> <h4 class="font-semibold text-sm md:text-base">Email</h4> <p class="text-offset text-sm md:text-base font-medium">info@unides-agency.com</p> </div> <div> <h4 class="font-semibold text-sm md:text-base">Phone</h4> <p class="text-offset text-sm md:text-base font-medium">+49 (172) 802 7395</p> </div> <div> <h4 class="font-semibold text-sm md:text-base">Address</h4> <p class="text-offset text-sm md:text-base font-medium leading-6">Soldiner Straße 72<br>13359 Berlin</p> </div> </div> </div> <form id="contact-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium mb-1">Name</label> <input type="text" id="name" name="name" placeholder="Your full name" class="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400" required> </div> <div> <label for="email" class="block text-sm font-medium mb-1">Email</label> <input type="email" id="email" name="email" placeholder="your.email@example.com" class="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400" required> </div> <div> <label for="message" class="block text-sm font-medium mb-1">Message</label> <textarea id="message" name="message" rows="4" placeholder="Tell us about your project or idea..." class="w-full px-4 py-3 bg-[#0a353a] border border-[#c6a2ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9fd12] text-white placeholder:text-gray-400" required></textarea> </div> <button type="submit" id="submit-btn" class="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium">
Send Message
</button> <div id="form-status" class="hidden text-center text-sm md:text-base font-medium mt-3"></div> </form> </div> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate` <span class="text-primary unides-brand">Unides</span> stands for <span class="text-primary">united</span>. We're crafting <span class="text-primary">more</span> than just a team.
` })}` }));
}, "/Users/leonardoguest/Documents/Github/unides/src/components/contact-us.astro", void 0);

const $$ApplyButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="absolute top-4 right-4 z-10 bg-bright-lime text-deep-teal px-4 py-2 rounded-md font-bold text-base hover:bg-lime-muted transition-all focus:ring-2 focus:ring-bright-lime focus:ring-offset-2 apply-button" onclick="openApplyModal()" data-astro-cid-mc2rzij4>
Apply Now
</button> ${renderComponent($$result, "ApplyModal", $$ApplyModal, { "data-astro-cid-mc2rzij4": true })} `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/apply-button.astro", void 0);

const $$Astro$1 = createAstro("https://unides.agency");
const $$Starfield = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Starfield;
  const { backgroundColor = "rgba(57, 5, 46, 0.4)" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"${addAttribute(backgroundColor, "data-bg-color")}> <canvas id="starfield-canvas"></canvas> </div> `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/starfield.astro", void 0);

const $$Splash = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-gradient-to-br from-purple-base via-purple-600 to-purple-base overflow-hidden" data-astro-cid-3egmgwtg> <div class="texture-overlay" data-astro-cid-3egmgwtg></div> <div class="gradient-shimmer" data-astro-cid-3egmgwtg></div> <div class="color-accent color-accent-1" data-astro-cid-3egmgwtg></div> <div class="color-accent color-accent-2" data-astro-cid-3egmgwtg></div> <div class="color-accent color-accent-3" data-astro-cid-3egmgwtg></div> <div class="tropical-accent" data-astro-cid-3egmgwtg></div> <div class="folklore-pattern" data-astro-cid-3egmgwtg></div> <div class="cultural-motifs" data-astro-cid-3egmgwtg></div> <div class="brushstroke brushstroke-1" data-astro-cid-3egmgwtg></div> <div class="brushstroke brushstroke-2" data-astro-cid-3egmgwtg></div> <div class="brushstroke brushstroke-3" data-astro-cid-3egmgwtg></div> ${renderComponent($$result, "Starfield", $$Starfield, { "backgroundColor": "rgba(169, 135, 255, 0.4)", "data-astro-cid-3egmgwtg": true })} ${renderComponent($$result, "ApplyButton", $$ApplyButton, { "data-astro-cid-3egmgwtg": true })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> <div class="absolute inset-0 bg-gradient-to-br from-purple-base via-purple-600 to-purple-base" data-astro-cid-3egmgwtg></div> </div> <div class="relative grid h-full place-items-center px-4" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 sm:gap-4" data-astro-cid-3egmgwtg> <img src="/unides_writing_green.png" alt="Unides" class="h-24 md:h-32 lg:h-40 w-auto logo-glow" data-astro-cid-3egmgwtg> <img src="/unides_green.png" alt="Unides Logo" class="h-12 md:h-16 w-auto logo-glow" data-astro-cid-3egmgwtg> <p class="tagline mt-8 md:mt-12" data-astro-cid-3egmgwtg>
We represent <span class="tagline-highlight" data-astro-cid-3egmgwtg>talents</span> that inspire
</p> </h2> <div class="scroll-indicator" data-astro-cid-3egmgwtg> <div class="scroll-arrow" data-astro-cid-3egmgwtg></div> <div class="scroll-arrow" data-astro-cid-3egmgwtg></div> <div class="scroll-arrow" data-astro-cid-3egmgwtg></div> </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "/Users/leonardoguest/Documents/Github/unides/src/components/splash.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://unides.agency");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { generator, site } = Astro2;
  const image = new URL("social.jpg", site);
  const description = "Connect exceptional talent with amazing opportunities. Professional platform for creatives and businesses.";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/unides_agency_writing_pink.png" type="image/svg+xml"><meta name="generator"', '><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700;900&display=swap" rel="stylesheet"><title>Unides - Talent Platform</title><meta name="description"', '><!-- social media --><meta property="og:title" content="Unides - Talent Platform"><meta property="og:type" content="website"><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><!-- EmailJS --><!-- initialize theme --><script>\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        // Default to dark theme\n        document.documentElement.dataset.theme = "dark";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            // Default to dark theme regardless of system preference\n            document.documentElement.dataset.theme = "dark";\n          }\n        });\n    <\/script>', '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ', " ", ' <div class="py-16"> ', ' </div> <div class="py-16"> ', ' </div> <div class="py-16"> ', ' </div> <div class="py-16"> ', ' </div> <div class="py-16"></div> ', " </body></html>"])), addAttribute(generator, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Splash", $$Splash, {}), renderComponent($$result, "Talents", $$Talents, {}), renderComponent($$result, "Creatives", $$Creatives, {}), renderComponent($$result, "AboutUs", $$AboutUs, {}), renderComponent($$result, "ContactUs", $$ContactUs, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/leonardoguest/Documents/Github/unides/src/pages/index.astro", void 0);

const $$file = "/Users/leonardoguest/Documents/Github/unides/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

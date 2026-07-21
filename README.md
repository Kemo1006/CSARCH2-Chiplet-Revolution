# Virtual Exhibit Proposal: The Chiplet Revolution: How AMD Solved the Cost and Scaling Problem

## Group 8 Members
1. Colcol, Massimo
2. Dicreto, Eirnan  
3. Ong, Kyle 
4. Salvador, Miguel 
5. Tanchiao, Manuel

## Live Deployment
**https://Kemo1006.github.io/CSARCH2-Chiplet-Revolution/chip-rev**

---

## Final Milestone Update
### Final Website Status
The exhibit is complete and deployed via GitHub Pages. All five sections are implemented, styled, and functional:

| Section | Component | Status |
|---|---|---|
| Hero / Intro | `Intro.astro` | ✅ Complete — full-page background video, matrix overlay, hero telemetry stats |
| The Physics Wall | `PhysicsWall.astro` | ✅ Complete — reticle-limit visual, ASML lens explanation, wafer cost breakdown, citation |
| Before vs. After | `BeforeAfter.astro` | ✅ Complete — monolithic vs. chiplet comparison, cost callout, yield formula, AMD timeline |
| Try It Yourself: The Simulator | `ChipSim.jsx` | ✅ Complete — interactive sliders, live yield/cost calculation, reticle-limit warning, grade legend |
| Metrics Dashboard | `Metrics.astro` | ✅ Complete — sourced KPI stats, chiplet package diagram, citation |

### Final Development Summary — Technical & Creative Discussions
**Layering & background video bug (resolved):** An early implementation placed the full-page background video (`matrix-bg.mp4`) with a negative `z-index`, which caused it to render behind the page's own background instead of behind the content as intended. The root cause was eventually traced to a **duplicate, conflicting CSS rule** defined in two different stylesheets (`overhaul.css` and `intro.css`); the file that loaded last silently overrode the working fix. Resolved by consolidating the rule into a single source of truth using non-negative stacking (`z-index: 0`) plus a radial vignette overlay for readability, with additional mobile-specific opacity reduction and `prefers-reduced-motion` support added along the way.
 
**Physics Wall visual redesign:** Iterated from a single dashed die box to a two-layer visual, an outer dashed box representing the 800mm² reticle limit, with the actual die rendered solidly inside it. This made the "die pressed against the physical ceiling" concept immediately legible without needing to read the surrounding text first.
 
**Simulator interactivity:** Extended the initial static mockup into a fully working React component, live sliders for core count and defect density, a dynamically recalculated yield/cost/grade readout, a wafer visualization that regenerates defect positions on architecture toggle, and a reticle-limit warning banner that fires when a monolithic configuration physically cannot be manufactured (die area > 800mm²).
 
**Content depth:** In response to earlier feedback that the site felt "too raw," each section was expanded with additional paragraphs, a real AMD product timeline (Zen 1 EPYC 2017 → MI400 APU 2025), cost math, and a formula breakdown

---

### Final Aha Moments or Things Learned
**Colcol, Massimo:**
> During the final review, I noticed a few small typographical errors that I had previously overlooked, things like inconsistent spacing and missing punctuation that affected the overall polish of the page. I also added a transition text to help guide visitors more smoothly from one section to the next, which made the overall flow of the exhibit feel much more cohesive. It's amazing how even the smallest details like these can make a big difference in how professional and intentional the final product feels.

**Dicreto, Eirnan:**
> We had to work around the locked template files, so each of us edited our own CSS files to better implement our planned design instead of modifying the global styles directly. We also discussed how we could improve our storytelling on the webpage, making sure the narrative flow from the problem to the solution was clearer and more engaging for visitors.

**Ong, Kyle:**
> One of my biggest aha moments was debugging the background video issue. At first, I was so sure the problem was in the component file itself, so I spent way too much time tweaking the code there without any luck. It turned out the fix wasn't even in that file; it was some other CSS loading after it and quietly overriding everything. That moment really taught me to step back and check other files first before fixating on just one, especially when dealing with CSS cascading issues. It was frustrating at the time, but definitely a lesson I won't forget.

**Salvador, Miguel:**
> Testing the website from a user's perspective helped us identify areas that could be improved. We caught things we hadn't noticed before, like awkward spacing, unclear labels, and moments where the interface just didn't feel intuitive. Even small UI tweaks, like adjusting button placement and refining the visual hierarchy, ended up making a huge difference in how smooth and polished the overall experience felt. It reminded us that sometimes the smallest changes have the biggest impact on usability.

**Tanchiao, Manuel:**
> Looking at AMD's broader impact beyond just our exhibit, I also started thinking about how AMD can still serve as a real alternative to Nvidia's chips, especially in this age of AI. While Nvidia leads in AI training, AMD's MI300 series and its chiplet-based designs show they can compete in AI workloads, potentially offering better cost-effectiveness and flexibility. It's interesting to see how the chiplet revolution we studied isn't just about solving past problems; it's also shaping the future of AI hardware.d

---

### Final Challenges Faced
**Colcol, Massimo:**
> During our final pass through the webpage, we caught a few minor errors that had slipped through, things like small alignment issues and inconsistent spacing that were easy to miss during development. We also adjusted some visual elements, making certain buttons and graphics slightly larger to ensure they were clearly visible and easy to interact with on both mobile and desktop screens. These small fixes may seem minor, but they ended up making the exhibit feel much more polished and user-friendly across all devices.

**Dicreto, Eirnan:**
> We ran into a few technical constraints with the design, especially when trying to add a video background to one of the sections. At first, we thought the issue was in the component file itself, but after some thorough debugging, we realized the problem was coming from a completely different CSS file that was loading after ours and quietly overriding the fix. It took a while to trace, but we eventually got it working,  and it ended up being a good lesson in how CSS specificity and load order can cause unexpected behavior.

**Ong, Kyle:**
> The challenges I encountered were still mostly CSS-related. After adding the new overhaul.css to improve the design, I had to make sure before.css still played nicely with it without breaking anything. Some styles were getting overridden, and I had to carefully adjust specificity and class scoping to keep both files working together. It was tricky, but it forced me to better understand how CSS actually works in practice.

**Salvador, Miguel:**
> One of the biggest challenges I faced was managing multiple project deadlines while still implementing new features. I had to carefully balance my school requirements with the project's timeline, which meant juggling other coursework alongside our exhibit development. I also had to complete several last-minute revisions before the submission deadline, making sure everything was polished and ready despite the time constraints.

**Tanchiao, Manuel:**
> Managing this project alongside my other academic and personal responsibilities was definitely challenging. Balancing group meetings, coding work, and last-minute revisions while keeping up with my other classes required a lot of discipline and prioritization. Despite the stress, having a clear internal deadline and a supportive group helped me stay accountable and push through to the finish line.

---

### Disclosure on Use of AI / LLM (Final)
This expands on the mid-milestone disclosure with additional AI use cases identified during final development.

This project was developed with the assistance of AI tools (ChatGPT) in the following ways:

- **Frontend Development & Styling**: Used to help explain CSS-related problems and troubleshoot styling issues. Assisted in determining which variables were changed in the CSS and why. Also used to troubleshoot HTML, CSS, and JavaScript issues encountered during development.

- **UI/UX Improvements**: Used to suggest improvements for the website's layout and overall user experience, including recommendations on spacing, visual hierarchy, and mobile responsiveness. Also used to suggest visual improvements for the Metrics section.

- **Content & Research**: Used to help find relevant information and sources to support the content of the exhibit, as well as to assist in refining explanations and improving the clarity of technical concepts.

- **Interactive Element Logic**: Used to verify the functionality and accuracy of the interactive element (ChipSim). Also used to troubleshoot JavaScript logic and ensure calculations (yield, cost, etc.) were correct.

---

## Mid-Milestone Development Update
### Deployment Link (superseded — see Live Deployment link at top)
~~https://csarch2-virtual-exhibit-ten.vercel.app/~~ *(migrated to GitHub Pages for final submission per instructor requirement)*

---

### Development Progress
#### What Has Been Done
| Component | Member | Status |
|-----------|--------|--------|
| `PhysicsWall.astro` + `physics.css` | Massimo  | Done |
| `BeforeAfter.astro` + `before.css` | Kyle | Done |
| `ChipSim.jsx` + `interactive.css` | Miguel, Eirnan | Done |
| `Metrics.astro` + `metrics.css` | Manuel | Done |
| Deployment (Vercel) | Kyle | Done |

---

#### Aha Moments or Things Learned
**Colcol, Massimo:**
> While I was trying to learn about the physics wall, one thing I learned is that making one huge chip is very risky because one tiny defect or particle can ruin the entire thing. This means that the bigger the chip is, the higher the risk of failure you can have. Chiplets help solve the problem by breaking one huge chip into smaller parts, since you can only get one chiplet that is defective to the whole chip; other chiplets can still be used, and it can still work. Which is also one of my aha moments that having bigger chips doesn't mean that it's always better.

**Dicreto, Eirnan:**
> Successfully bridging the gap between the theory of the topic and connecting it to the front-end design. Understanding the math and implementing the code to show its visual representation, I gained a deeper understanding of how Astro works and how it handles components of React. 

**Ong, Kyle:**
> I learned what `.astro` files and `.mdx` files are and how similar they are to HTML. Astro components feel like writing standard HTML with the added ability to import and use other components, while MDX lets me write Markdown content with interactive React components embedded inside. It made building the exhibit feel more intuitive since I was already familiar with HTML.

**Salvador, Miguel:**
> Developing the interactive simulator helped me better understand how semiconductor manufacturing concepts can be translated into an educational tool. I learned how React's state management and dynamic rendering can be used to update calculations and visualizations in real time, making abstract concepts like manufacturing yield and defect density easier to explore and understand.

**Tanchiao, Manuel:**
> Developing this project widened my perspective on AMD and the semiconductor industry as a whole, but more importantly, the soft skills, like learning how to work with others despite my own shortcomings, mastering accountability even when your personal life is falling apart, etc.

---

#### Challenges Faced
**Colcol, Massimo:**
> The challenges I faced were that I tried to do an exact copy of our Figma work, but when I tested it on our website, it didn't fit, which made it hard to edit stuff, especially for the css in, which took me a while to figure out how to fit our Figma into a narrowed version of the physics wall. Another challenge was that I had to remove some parts of our Figma from the website, such as the sidebar design, which I had to trace and remove from the code to have a cleaner version of our files.

**Dicreto, Eirnan:**
> Figma-to-code translation was difficult due to manually doing each part of the design. Certain elements were harder to implement in code, and some were modified instead. There were errors on my end regarding running the website due to packages, which led to multiple errors throughout my progress. Resolved it by doing a clean reinstallation

**Ong, Kyle:**
> The challenges I encountered were mostly CSS-related. I had to make sure each section matched the overall dark theme of the museum template while still copying the specific layouts from our Figma drafts. It was tricky getting the colors, spacing, and fonts to look exactly like the design, especially since the museum template had its own global styles that kept overriding my custom CSS. I also had to figure out how to properly scope my styles using class prefixes like `.before-after-section,` so they wouldn't leak into other components or break the existing layout.

**Salvador, Miguel:**
> The main challenge was designing a simulator that was both educational and interactive. I needed to simplify semiconductor yield calculations into a model that users could easily understand while ensuring the React interface remained responsive and the visualizations updated smoothly.

**Tanchiao, Manuel:**
> The challenges I faced were more personal than technical. I struggled with personal issues, which caused me to become unresponsive to the group for a period of time despite repeated attempts to contact me. This led to conflict and panic within our group as the deadline was approaching, and I take responsibility for my shortcomings fully.

---

#### Disclosure on Use of AI / LLM (Mid-Milestone)
This project was developed with the assistance of AI tools (ChatGPT) in the following ways:

- **Frontend Development:** Used as an assistive tool during the development of the frontend components — generating and refining HTML/CSS layouts, React/Astro component structures, styling suggestions, and UI improvements.

- **Layout & Responsiveness:** Used to properly layout the Physics Wall container so it fit correctly on the website, fixing issues where it was narrowed down to a smaller size. Also used for correct sizing to ensure better compatibility for mobile users.

- **Metrics Section:** Used as an assistive tool for enhancing the development of the metrics section and its explanation.

- **Interactive Element Logic:** Assisted in the creation of certain elements or designs that were difficult to implement in code. Also used to thoroughly explain the theory behind chiplets and help with the backend math of the interactive element (yield calculations, cost comparisons, etc.).

All content and code have been reviewed, verified, and adapted by the group members.

---

## REVISIONS
The following changes have been made from the original proposal:

| Section | Original (Multi-core) | Revised (Chiplet) |
|---------|----------------------|-------------------|
| **Title** | Multi-Core Processors: Solving the Power Wall Problem | The Chiplet Revolution: How AMD Solved the Cost and Scaling Problem |
| **Topic Theme** | Focused on power wall / heat crisis from high clock speeds | Focused on reticle limit + defect cost crisis in semiconductor manufacturing |
| **Problem Statement** | Too much heat, cooling failure | Dies too big, single defect ruins expensive chip, reticle limit (800mm²) |
| **Solution** | Multiple cores sharing workload | Multiple small chiplets connected together |
| **Interactive Element Name** | The Thermal Architecture Simulator | Monolithic vs. Chiplet Cost Simulator |
| **Interactive Focus** | Clock speed vs. core count (temperature) | Monolithic die vs. chiplets (cost, yield, reticle limits) |

---

## Group's Topic Theme
By 2015, the semiconductor industry faced a serious physical and economic barrier. Processor manufacturers had traditionally improved performance by making chips larger, adding more transistors to a single "monolithic" die. However, this approach hit two hard limits: the **reticle limit** (the maximum die size a machine can print, roughly 800mm²) and the **defect problem** (a single tiny imperfection on a large, expensive die would destroy the entire chip). With high-end server processors costing tens of thousands of dollars each, the industry's traditional scaling method was becoming financially unsustainable.

AMD solved this problem in 2017 with the introduction of the **Zen architecture** and its revolutionary **chiplet design**. Instead of building one massive processor die, AMD created smaller, cheaper "chiplets", individual pieces of silicon that perform specific functions and connected them on a single package using high-speed interconnects. This approach meant that if one chiplet had a defect, only that small chiplet was wasted, not the entire processor. Manufacturing yields improved dramatically, and AMD could build processors with more cores than previously possible.

This is a classic **"problem-solving story" for Section S03** because AMD faced a seemingly dead-end problem, how to continue scaling processor performance without bankrupting themselves on manufacturing costs, and solved it through an innovative architectural shift. The chiplet revolution transformed AMD from an underdog to an industry leader, and today, even Intel has adopted chiplet-based designs.

### Sources
1. Guru3D. (2019). *Tech preview: AMD Ryzen 3000 - 7nm Zen 2 (Page 3)*. https://www.guru3d.com/review/tech-preview-amd-ryzen-with-ryzen-3950x/page-3/

2. The Register. (2024). *AMD credits ditching monolithic DC chips for Epyc GHG cuts*. https://www.theregister.com/2024/04/23/amd_chiplets_ghg/

3. TokenRing AI. (2026). *The Chiplet Revolution: How Heterogeneous Integration is Scaling AI Beyond Monolithic Limits*. Wedbush Investor. https://investor.wedbush.com/wedbush/article/tokenring-2026-1-2-the-chiplet-revolution-how-heterogeneous-integration-is-scaling-ai-beyond-monolithic-limits

4. Broekhuijsen, N. (2021). *AMD Patents Chiplet Design To Build Colossal GPUs*. Tom's Hardware. https://www.tomshardware.com/news/amd-gpu-chiplet-patent

5. OC3D. (2018). *AMD Reveals Transformative "Chiplet" Design for Zen 2 EPYC Processors*. Overclock3D. https://overclock3d.net/news/cpu_mainboard/amd-reveals-transformative-chiplet-design-for-zen-2-epyc-processors/

6. AMD. (n.d.). *AMD "Zen" Core Architecture*. https://www.amd.com/en/technologies/zen-core.html

7. AMD. (n.d.). *AMD EPYC™ 7002 Series Processors*. https://www.amd.com/en/products/processors/server/epyc/7002-series.html

8. Advanced Micro Devices, Inc. (2019, August 7). *2nd Gen AMD EPYC™ Processors Set New Standard for the Modern Datacenter with Record-Breaking Performance and Significant TCO Savings*. https://ir.amd.com/news-events/press-releases/detail/904/2nd-gen-amd-epyc-processors-set-new-standard-for-the-modern-datacenter-with-record-breaking-performance-and-significant-tco-savings

9. Advanced Micro Devices, Inc. (2017, May 16). *AMD Raises Expectations for Server Performance, Unveils EPYC Processor Brand for the Datacenter*. https://ir.amd.com/news-events/press-releases/detail/766/amd-raises-expectations-for-server-performance-unveils-epyc-processor-brand-for-the-datacenter

10. NASA HECC. (n.d.). *AMD Rome Processors – HECC Knowledge Base*. https://www.nas.nasa.gov/hecc/support/kb/entry/658

11. Wikimedia Commons. (2019, November 23). *File:AMD EPYC Rome 12nm IO die shot close-up 1.jpg*. https://commons.wikimedia.org/wiki/File:AMD_EPYC_Rome_12nm_IO_die_shot_close-up_1.jpg

---

## Group's Tech Stack Plan
### Proposed Interactive Element
**Name:** Monolithic vs. Chiplet Cost Simulator

**What it does:**  
An interactive dashboard that allows visitors to step into the role of a computer architect at AMD in 2015. The interface challenges users to design a processor by choosing between a traditional monolithic die (a single large chip) and a chiplet-based design (multiple small chiplets connected). It shows the cost, manufacturing yield, and performance of each approach in real time.

**How the user interacts with it:**  
Users click buttons to switch between Monolithic Mode and Chiplet Mode. Sliders control the number of cores, die size, and acceptable defect rate. After clicking "Calculate," the simulator displays:
- Total cost per processor
- Estimated manufacturing yield (percentage of good chips)
- Final "Profitability Rating" (A+ to F)
- A warning if the monolithic design exceeds the 800mm² reticle limit
- A visual wafer map showing defect locations and which chips survive

**Technical implementation:**  
The simulator will be built as a React functional component. A custom function calculates yield using the standard semiconductor formula. The component dynamically renders cost comparisons and conditionally shows warning banners. A Canvas or SVG element will visually represent defects on a wafer.

**How it teaches the topic:**  
Users discover that making a large monolithic die results in high cost and low yield; a single defect ruins the entire expensive chip. With chiplets, defects affect only a single chiplet, keeping costs low. The simulator shows that an 800 mm² monolithic die might yield only 30% good chips, whereas the same wafer using chiplets could yield 90% usable chiplets. This teaches why AMD's chiplet revolution was a breakthrough solution to the manufacturing scaling problem.

---

### Mobile-Responsive Layout
![Mobile layout sketch](src/assets/mobile.png)

---

### Tentative Style Guide Snapshot
![Desktop layout sketch](src/assets/Desk%201.png)
![Desktop layout sketch](src/assets/Desk%202.png)
![Desktop layout sketch](src/assets/Desk%203.png)
![Desktop layout sketch](src/assets/Desk%204.png)

---
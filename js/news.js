document.addEventListener("DOMContentLoaded", function () {

      // data 
      /*
      Format:
        {
          id: 1,
          title: '',
          img: '',
          snippet: "",
          fullText: ``,
          date: '',
          relevant: ''
        },
      */
      const newsItems = [
        {
          id: 0,
          title: 'ChatSign Registered under Abu Dhabi Global Market',
          img: 'images/news/news0.jpg',
          snippet: 'ChatSign is now officially registered under Abu Dhabi Global Market (ADGM), marking a major step in our growth as a UAE-based AI accessibility startup.',
          fullText: `
            ChatSign is now officially registered under Abu Dhabi Global Market (ADGM), marking a significant milestone in our growth as a deep-tech startup rooted in the UAE. ADGM stands as one of the region's most respected international financial centers and innovation hubs, providing startups like ours with a forward-thinking regulatory environment and access to a dynamic ecosystem of investors, government partners, and global companies. Registering under ADGM reflects our long-term commitment to building accessible, AI-driven technologies from within the UAE, and expanding their reach to institutions that prioritize inclusion and digital transformation.
            <br/><br/>
            This milestone strengthens our operational foundation and opens new doors for strategic collaborations across healthcare, education, and the public sector. With the support and credibility that ADGM brings, were better positioned to scale ChatSign's real-time sign language translation systems,built in-house at NYU Abu Dhabi, to institutions across the MENA region and beyond. As we continue to engage with investors, researchers, and government stakeholders, our registration with ADGM underscores our readiness to grow responsibly and sustainably, while staying focused on our mission: to bridge communication gaps and advance accessibility through intelligent, locally developed solutions.
          `,
          date: '2025/07/02',
          relevant: 'Abu Dhabi Global Market'
        },
        {
          id: 1,
          title: 'ChatSign at Make It in The Emirates 2025',
          img: 'images/news/news1.jpg',
          snippet: "ChatSign proudly participated in Make It in the Emirates 2025, showcasing its AI-powered sign language technologies as part of the UAE's national push for advanced manufacturing and inclusive innovation.",
          fullText: `
          ChatSign Technology was honored to take part in Make It in the Emirates 2025, one of the UAE's flagship platforms for industrial innovation and investment. As a deep-tech startup spun out of NYU Abu Dhabi, ChatSign joined a powerful lineup of local and international innovators showcasing cutting-edge solutions that align with the UAE's vision for a future-ready, inclusive economy. The event provided an ideal stage for us to present our real-time sign language translation technologies to government leaders, manufacturers, and ecosystem partners.
          <br /><br/>
          At the exhibition, we unveiled our SignAvatar Station Pro,an AI-powered, full-body digital sign language interpreter, and engaged directly with stakeholders interested in deploying our solutions in smart cities, healthcare, and public service environments. The overwhelming interest and feedback from attendees underscored a shared commitment to making communication more accessible for Deaf and Hard-of-Hearing individuals. ChatSign's booth attracted visitors from across the industrial spectrum, affirming the importance of embedding accessibility into the core of national development.
          <br /><br/>
          Participating in Make It in the Emirates was not only a milestone for visibility, but a testament to our deepening integration into the UAE's innovation ecosystem. We are excited to build on this momentum by forming strategic partnerships and exploring local manufacturing opportunities under the ADGM framework. With continued support from the UAE's national initiatives, ChatSign remains committed to transforming accessibility through AI,made in the Emirates, for the world.

          `,
          date: '2025/07/02',
          relevant: 'Make It in the Emirates, New York University Abu Dhabi'
        },
        {
          id: 2,
          title: 'ChatSign at the 50th Arab Deaf Week',
          img: 'images/news/news2.jpg',
          snippet: "ChatSign was honored to participate in the opening ceremony of the 50th Arab Deaf Week, where we shared our mission and engaged directly with the Deaf and Hard-of-Hearing community.",
          fullText: `
          
          ChatSign Technology was deeply honored to be invited by the Zayed Higher Organization for People of Determination to participate in the opening ceremony of the 50th Arab Deaf Week, held at Dalma Mall.
          <br /><br/>
          Taking the stage to share our mission and demonstrate our assistive communication technology was a powerful and humbling experience. Standing alongside members of the Deaf and Hard-of-Hearing (DHH) community reminded us exactly why ChatSign exists: to bridge the communication gap that continues to affect millions in their daily lives.
          <br /><br/>
          Arab Deaf Week offered more than just a platform—it was a space for connection, dialogue, and learning. We were grateful to engage directly with future users of ChatSign, and to receive heartfelt encouragement, insightful perspectives, and constructive feedback. These conversations are vital to our work. They shape our roadmap, refine our technology, and keep us accountable to the community we serve.
          <br /><br/>
          At ChatSign, we believe accessibility goes beyond innovation—it is rooted in empathy, inclusion, and the determination to rethink how society communicates. Participating in this event strengthened our resolve to keep building with and for the DHH community.
          <br /><br/>
          We extend our sincerest thanks to everyone who welcomed us, shared their stories, and inspired us during Arab Deaf Week. We look forward to continuing this journey—together.
          
          `,
          date: '2025/03/30',
          relevant: 'Zayed Higher Organization (ZHO), New York University Abu Dhabi'
        },
        {
          id: 3,
          title: 'ChatSign at Dubai AI Festival 2025',
          img: 'images/news/news3.jpg',
          snippet: "ChatSign Technology was showcased at the Dubai AI Festival, where it demonstrated its real-time AI system for bidirectional communication. The team engaged with  innovators to highlight the importance of accessibility and inclusion in AI development.",
          fullText: `
          ChatSign Technology was honored to participate in the 2025 Dubai AI Festival, a premier gathering of global innovators dedicated to advancing artificial intelligence for real-world impact. The event brought together leading minds to explore how AI can create inclusive, transformative experiences across industries and communities.
          <br /><br/>
          During the festival, ChatSign presented its cutting-edge AI-powered application designed to facilitate real-time communication between Deaf and Hard-of-Hearing individuals and the hearing world. The system's key features—speech-to-sign and sign-to-speech translation through an AI avatar and built-in camera—enable barrier-free interaction without the need for human interpretation.
          <br /><br/>
          Visitors to the ChatSign booth, including technologists, educators, and accessibility advocates, experienced live demonstrations and shared valuable feedback. The enthusiasm for accessible communication solutions highlighted the growing recognition that inclusion must be integral to AI innovation, not an afterthought.
          <br /><br/>
          ChatSign Technology extends its gratitude to the Dubai AI Festival organizers, New York University Abu Dhabi, fellow exhibitors, and the wider community committed to shaping a more accessible future through technology.
          `,
          date: '2025/03/30',
          relevant: 'Dubai AI Festival, New York University Abu Dhabi'
        },


        {
          id: 4,
          title: 'ChatSign Graduated From Ma\'an Social Incubator Cohort 10',
          img: 'images/news/news4.jpg',
          snippet: "ChatSign's Milestone: Graduating from Ma'an Social Incubator's 10th Cohort",
          fullText: `
          ChatSign is proud to have been selected as one of the few startups supported by Ma'an Social Incubator, a testament to the sustainable and impactful change our technology aims to drive. Through this prestigious program, Ma'an provided invaluable resources, mentorship, and support, recognizing ChatSign's mission to develop effective and trustworthy communication solutions for the Deaf and Hard of Hearing Community. As part of the 10th Cohort, ChatSign participated in a dynamic ecosystem of social entrepreneurs committed to creating meaningful change.
          <br /><br/>
          The program culminated in a successful Demo Day, where ChatSign showcased its innovative solutions and received a certificate celebrating its achievements and contributions. Graduating from Ma'an Social Incubator marks a significant milestone for ChatSign Technology, reinforcing our commitment to accessibility and inclusive communication.
          <br /><br/>
          With the support and recognition gained through this initiative, we continue to expand our impact, collaborating with industry leaders, investors, and advocates dedicated to leveraging technology for social good.
          `,
          date: '2025/03/30',
          relevant: 'Ma\'an Social Incubator, StartAD, New York University Abu Dhabi'
        },
        {
          id: 5,
          title: "ChatSign's First Demo Showcase at AIE2025",
          img: 'images/news/news5.jpg',
          snippet: 'ChatSign had a remarkable experience at AIE 2025, showcasing SignAvatar Station Pro and engaging with top AI and engineering experts.',
          fullText: `
          ChatSign had an exceptional experience at the AIE 2025 Symposium, where leading experts in AI and engineering collaborated to drive innovation and address real-world challenges. This interdisciplinary event brought together researchers, industry leaders, and innovators to explore AI's transformative impact across key sectors, including cybersecurity, robotics, and renewable energy.
          <br /><br/>
          The symposium featured groundbreaking research presentations, thought-provoking discussions, and opportunities for meaningful collaboration. By engaging with experts at the forefront of AI-driven engineering solutions, ChatSign gained valuable insights and forged connections that will contribute to the future of technological advancement.
          <br /><br/>
          Most importantly, ChatSign demonstrated its product: SignAvatar Station Pro, a successful professional milestone. The knowledge exchanged at AIE 2025 reinforces the critical role of AI in shaping a smarter, more efficient world.
          `,
          date: '2025/03/30',
          relevant: 'AIE2025, New York University Abu Dhabi'
        },
        {
          id: 6,
          title: 'ChatSign Demo at AIRH2025',
          img: 'images/news/news6.jpg',
          snippet: 'ChatSign showcased SignAvatar Station Pro at the region\'s largest AI in Healthcare summit.',
          fullText: `
            ChatSign participated in the largest AI in Healthcare summit in the region, presenting the SignAvatar Station Pro to an audience of researchers, healthcare professionals, and industry leaders. This event provided an invaluable platform for demonstrating the technology's potential and engaging in meaningful discussions with key figures in the healthcare sector.
          <br /><br/>
            The summit highlighted the growing demand for AI-driven communication solutions, with attendees expressing strong interest in ChatSign's innovative approach. Through insightful exchanges with healthcare specialists, AI researchers, and investors, ChatSign reinforced its commitment to advancing accessible and effective communication tools.By connecting with experts dedicated to leveraging AI for improved patient care and operational efficiency, ChatSign continues to expand its reach and refine its technology to meet the evolving needs of the healthcare industry.
          <br /><br/>
            The event was a significant milestone, strengthening partnerships and opening new opportunities for collaboration in the pursuit of a more inclusive and technologically advanced future.

          `,
          date: '2025/03/30',
          relevant: 'AIRH2025, NYU Abu Dhabi'
        },
        {
          id: 7,
          title: 'ChatSign at the AccessAbilities Expo 2025',
          img: 'images/news/news7.jpg',
          snippet: 'ChatSign Technology participated in the AccessAbilities Expo, where we had the opportunity to showcase our innovative AI-powered sign language translation solutions.',
          fullText: `

          Thank you all for visiting our booth at AccessAbilities Expo! <br /><br/>

          Meeting with  people int he field of accessibility is always an inspiring and eye-opening experience; together, we can make the world more inclusive for all! Additionally, we are grateful to have earned a certificate of appreciation, highlighting our commitment to bridge the gap between communication and inclusivity. <br /><br/>

          Please look forward to our updates on our products as we work to make communication easier for the Deaf and Hard of Hearing community!

          `,
          date: '2025/10/8',
          relevant: 'AccessAbilities Expo 2025, New York University Abu Dhabi'
        },
        {
          id: 8,
          title: 'ChatSign at Expand North Star 2025',
          img: 'images/news/news8.jpg',
          snippet: 'ChatSign Technology had the honor to exhibit our latest AI sign-language interpretation products and participate in the Supernova Challenge Semifinals.',
          fullText: `
            ChatSign Technology had the honor to exhibit our latest AI sign-language interpretation products and participate in the Supernova Challenge Semifinals. 
            <br /><br/>
            Expand North Star 2025 served as a pivotal milestone for ChatSign’s global visibility. The event enabled us to showcase our technology to thousands of visitors, strengthen partnerships with key institutions, and establish valuable investor relationships for our upcoming seed round. Our participation also enhanced the company’s brand recognition in the MENA startup ecosystem and positioned ChatSign as a leading deep-tech innovator in accessible AI communication.
            <br /><br/>
            We are excited to continue showcasing our products to all audiences, especially those that are Deaf and Hard of Hearing. Stay tuned for more riveting announcements about our products and participation at events!

          `,
          date: '2025/10/30',
          relevant: 'NYU Abu Dhabi'
        }
      ];
      // Populate swiper slides dynamically
      const swiperWrapper = document.querySelector('#newsSwiper .swiper-wrapper');
      if (!swiperWrapper) {
        return;
      }

      newsItems.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="productcard tooltip-follow swiperprodcard" data-id="${item.id}">
            <span class="tooltip-text">Click to read more</span>
            <img src="${item.img}" alt="${item.title}">
            <div class="cardcontent">
            ${(window.innerWidth > 820) ? '<p class="itmidicator">News</p>' : ''}
              <p class="itmTitle">${item.title}</p>
              <p class="itmDescrption">${item.snippet}</p>
              ${(window.innerWidth < 820) ? '<p class="itmidicator">Read More</p>' : ''}
            </div>
          </div>
        `;
        swiperWrapper.appendChild(slide);
      });


      // swiper 
      let swiper;

      function initOrDestroySwiper() {
        if (window.innerWidth > 820) {
          if (!swiper) {
            swiper = new Swiper(".mySwiper", {
              slidesPerView: 2,
              spaceBetween: 50,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          }
        } else {
          if (swiper) {
            swiper.destroy(true, true);
            swiper = undefined;
          }
        }
      }
      const reinitSwiper = () => {
        setTimeout(() => {
          initOrDestroySwiper();
        }, 500);
      };
      reinitSwiper();
      window.addEventListener("resize", initOrDestroySwiper);


      // populate details 
      const newsSection = document.getElementById("newsSection");
      const newsDetail = document.getElementById('newsDetail');
      const detailContent = document.getElementById('detailContent');

      if (!newsSection || !newsDetail || !detailContent) {
        return;
      }

      swiperWrapper.addEventListener('click', e => {
        const card = e.target.closest('.productcard');
        if (!card) return;
        const item = newsItems.find((n) => n.id === Number(card.dataset.id));
        if (!item) return;

        detailContent.innerHTML = `
          <p class="singleNewsTitle">${item.title}</p>
          <div class="singleNewsimageholder"><img src="${item.img}" alt="news${item.id}"></div>
          <p class="singlenewstips">Posted on: ${item.date}</p>
          <p class="singlenewstips">Relevant Events/Institutions: ${item.relevant}</p>
          <p class="singlenewsdescriptions">${item.fullText}</p>
          <br />
          
          ${window.innerWidth < 820 ? '<p class="itmidicator textaligncentery mobile-back">Go back</p>' : `
        <div class="buttondiv2 margintop10 keepitcenter">
          <div class="btnholderCont">
            <button>
              <span>
                Go back
              </span>
            </button>
          </div>
        </div>

          `}
        `;

        newsSection.style.display = 'none';
        newsDetail.style.display = 'block';
        window.scrollTo({ top: 20, behavior: 'smooth' });
      });


      // go back
      function goBack() {
        newsDetail.style.display = 'none';
        newsSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      document.getElementById('newsDetail').addEventListener('click', e => {
        if (e.target.closest('.mobile-back')) goBack();
      });
      const goBackButton = document.querySelector('.go-back');
      if (goBackButton) {
        goBackButton.addEventListener('click', goBack);
      }
      // go back for buttondiv
      detailContent.addEventListener('click', e => {
        if (e.target.closest('.buttondiv2')) goBack();
      });

      // for tooltip
      document.addEventListener('mouseover', e => {
        const card = e.target.closest('.tooltip-follow');
        if (!card) return;
        const tooltip = card.querySelector('.tooltip-text');
        tooltip.style.opacity = 0.9;
      });
      document.addEventListener('mouseout', e => {
        const card = e.target.closest('.tooltip-follow');
        if (!card) return;
        const tooltip = card.querySelector('.tooltip-text');
        tooltip.style.opacity = 0;
      });
      document.addEventListener('mousemove', e => {
        const card = e.target.closest('.tooltip-follow');
        if (!card) return;
        const tooltip = card.querySelector('.tooltip-text');
        const rect = card.getBoundingClientRect();
        tooltip.style.left = e.clientX - rect.left + 5 + 'px';
        tooltip.style.top = e.clientY - rect.top + 15 + 'px';
      });



      // end
    });

;(function () {
      if (localStorage.getItem('autoplay') !== 'true') return;

      // localStorage.removeItem('autoplay');

      const scrollStep = 80;
      const scrollInterval = 50;

      const scrollTimer = setInterval(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
          clearInterval(scrollTimer);
          goToHome();
        } else {
          window.scrollBy(0, scrollStep);
        }
      }, scrollInterval);

      function goToHome() {
        window.location.href = 'index.html';
      }
    })();

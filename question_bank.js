// question_bank.js
// 般若系統 - 全域智慧大腦 (高中模考 + 化生單字 + 托福適性)

const QuestionBank = {

    // ==========================================
    // 模組一：全真模擬考場專用 (供 exam.html 讀取)
    // ==========================================
    vocabulary: {
        senior: [
            // 原有 15 題
            { id: "v_s_001", text: "1. The scientist made a _____ discovery that completely changed our understanding of the universe.", options: {A:"profound", B:"superficial", C:"clumsy", D:"arrogant"}, answer: "A", points: 2 },
            { id: "v_s_002", text: "2. During the severe drought, the local government urged all citizens to _____ water whenever possible.", options: {A:"pollute", B:"consume", C:"conserve", D:"distribute"}, answer: "C", points: 2 },
            { id: "v_s_003", text: "3. The residents expressed their strong _____ to the construction of the chemical plant near their homes.", options: {A:"consequence", B:"opposition", C:"guarantee", D:"interaction"}, answer: "B", points: 2 },
            { id: "v_s_004", text: "4. The doctor advised the patient to closely _____ his daily intake of sugar to avoid health complications.", options: {A:"tolerate", B:"suspect", C:"monitor", D:"justify"}, answer: "C", points: 2 },
            { id: "v_s_005", text: "5. With the rapid advancement of technology, many repetitive manual jobs are at risk of being _____.", options: {A:"eliminated", B:"fascinated", C:"motivated", D:"negotiated"}, answer: "A", points: 2 },
            { id: "v_s_006", text: "6. To prevent the spread of the virus, everyone is required to maintain proper personal _____.", options: {A:"privilege", B:"hygiene", C:"logic", D:"tragedy"}, answer: "B", points: 2 },
            { id: "v_s_007", text: "7. The young athlete's _____ determination to overcome his physical limitations inspired everyone.", options: {A:"relentless", B:"optimistic", C:"voluntary", D:"clumsy"}, answer: "A", points: 2 },
            { id: "v_s_008", text: "8. Despite the language _____, the exchange students managed to communicate effectively using gestures.", options: {A:"margin", B:"penalty", C:"barrier", D:"symphony"}, answer: "C", points: 2 },
            { id: "v_s_009", text: "9. The museum is currently hosting an exhibition featuring several _____ artifacts from ancient civilizations.", options: {A:"harsh", B:"precious", C:"tough", D:"blank"}, answer: "B", points: 2 },
            { id: "v_s_010", text: "10. In times of unexpected crisis, it is crucial for communities to show _____ and support one another.", options: {A:"solidarity", B:"frustration", C:"hesitation", D:"ambition"}, answer: "A", points: 2 },
            { id: "v_s_011", text: "11. The sudden approach of the typhoon forced the organizers to _____ the outdoor music festival.", options: {A:"abandon", B:"postpone", C:"overcome", D:"distribute"}, answer: "B", points: 2 },
            { id: "v_s_012", text: "12. The company's new policy aims to create a more _____ work environment for employees of all backgrounds.", options: {A:"exclusive", B:"inclusive", C:"intensive", D:"defensive"}, answer: "B", points: 2 },
            { id: "v_s_013", text: "13. Regular exercise, a balanced diet, and sufficient sleep are essential for maintaining physical and mental _____.", options: {A:"well-being", B:"nightmare", C:"substance", D:"symptom"}, answer: "A", points: 2 },
            { id: "v_s_014", text: "14. The elder gently reminded the youth to always remain _____ and leave room for continuous self-reflection.", options: {A:"arrogant", B:"stubborn", C:"humble", D:"ignorant"}, answer: "C", points: 2 },
            { id: "v_s_015", text: "15. Her _____ performance in the national speech contest won her a scholarship to study abroad.", options: {A:"aggressive", B:"prominent", C:"outstanding", D:"conservative"}, answer: "C", points: 2 },
            // 新增 15 題 (擴充題庫，供系統洗牌)
            { id: "v_s_016", text: "16. The volunteers showed genuine _____ for the homeless by providing them with warm meals and winter coats.", options: {A:"compassion", B:"resentment", C:"fatigue", D:"isolation"}, answer: "A", points: 2 },
            { id: "v_s_017", text: "17. Instead of reacting in anger, the wise elder took a deep breath and spoke _____, calming the tense situation.", options: {A:"awkwardly", B:"deliberately", C:"reluctantly", D:"fiercely"}, answer: "B", points: 2 },
            { id: "v_s_018", text: "18. The transition to renewable energy is vital if we want to build a _____ future for the next generation.", options: {A:"sustainable", B:"temporary", C:"vulnerable", D:"artificial"}, answer: "A", points: 2 },
            { id: "v_s_019", text: "19. After months of intense negotiation, the two countries finally reached a state of peaceful _____.", options: {A:"conflict", B:"harmony", C:"logic", D:"triumph"}, answer: "B", points: 2 },
            { id: "v_s_020", text: "20. To completely _____ the complex theory, the student spent hours reading various academic journals.", options: {A:"abandon", B:"comprehend", C:"deceive", D:"frustrate"}, answer: "B", points: 2 },
            { id: "v_s_021", text: "21. True happiness is rarely found in material wealth; rather, it is an internal state of _____.", options: {A:"chaos", B:"anxiety", C:"tranquility", D:"ambition"}, answer: "C", points: 2 },
            { id: "v_s_022", text: "22. The sudden power outage caused massive _____ among the passengers waiting in the crowded terminal.", options: {A:"confusion", B:"inspiration", C:"discipline", D:"affection"}, answer: "A", points: 2 },
            { id: "v_s_023", text: "23. It is incredibly _____ of him to admit his own mistakes publicly and apologize to the team.", options: {A:"arrogant", B:"courageous", C:"stubborn", D:"ignorant"}, answer: "B", points: 2 },
            { id: "v_s_024", text: "24. The ancient temple, hidden deep in the mountains, has a serene and _____ atmosphere.", options: {A:"chaotic", B:"commercial", C:"spiritual", D:"superficial"}, answer: "C", points: 2 },
            { id: "v_s_025", text: "25. Overcoming adversity often builds character, making individuals more _____ to future challenges.", options: {A:"vulnerable", B:"resilient", C:"hesitant", D:"fragile"}, answer: "B", points: 2 },
            { id: "v_s_026", text: "26. Rather than buying new clothes constantly, many eco-conscious consumers choose to _____ their old garments.", options: {A:"discard", B:"recycle", C:"consume", D:"pollute"}, answer: "B", points: 2 },
            { id: "v_s_027", text: "27. The professor's lecture provided a fresh _____ on the historical event, changing how students viewed it.", options: {A:"obstacle", B:"perspective", C:"penalty", D:"routine"}, answer: "B", points: 2 },
            { id: "v_s_028", text: "28. Practicing daily gratitude can significantly _____ one's mental health and overall well-being.", options: {A:"diminish", B:"worsen", C:"enhance", D:"ignore"}, answer: "C", points: 2 },
            { id: "v_s_029", text: "29. The artisan carefully crafted the ceramic bowl, turning a simple piece of clay into an exquisite _____.", options: {A:"masterpiece", B:"disaster", C:"fragment", D:"illusion"}, answer: "A", points: 2 },
            { id: "v_s_030", text: "30. A good leader should possess not only intelligence but also the _____ to listen to differing opinions.", options: {A:"arrogance", B:"wisdom", C:"greed", D:"prejudice"}, answer: "B", points: 2 }
        ]
    },
    cloze: {
        senior: [
            // 第一篇：正念
            {
                id: "c_s_001",
                article: "In today's fast-paced digital world, many people suffer from information overload. Mindfulness, the practice of being fully present in the moment, has emerged as a powerful solution. __1__ we focus on our breathing and current surroundings, anxiety tends to decrease. It allows us to observe our thoughts without judgment. __2__, a daily mindfulness routine can significantly improve concentration. Many schools have started to introduce these techniques to students, __3__ positive results in their academic performance. However, mindfulness is not a quick fix; it requires patience and __4__ practice. Only by slowing down can we truly appreciate the beauty of life and find inner peace __5__ the chaos.",
                questions: [
                    { id: "c_q_01", text: "1.", options: {A:"When", B:"Unless", C:"Though", D:"Until"}, answer: "A", points: 2 },
                    { id: "c_q_02", text: "2.", options: {A:"In contrast", B:"Furthermore", C:"Instead", D:"Nevertheless"}, answer: "B", points: 2 },
                    { id: "c_q_03", text: "3.", options: {A:"yielded", B:"yielding", C:"to yield", D:"yields"}, answer: "B", points: 2 },
                    { id: "c_q_04", text: "4.", options: {A:"consistent", B:"temporary", C:"accidental", D:"rare"}, answer: "A", points: 2 },
                    { id: "c_q_05", text: "5.", options: {A:"beyond", B:"amidst", C:"without", D:"beneath"}, answer: "B", points: 2 }
                ]
            },
            // 第二篇：金繼藝術 (Kintsugi)
            {
                id: "c_s_002",
                article: "Kintsugi is a traditional Japanese art form that involves repairing broken pottery with lacquer mixed with powdered gold. Unlike typical repair methods that aim to hide the damage, Kintsugi __1__ the fractures. The philosophy behind this technique is deeply rooted in the concept of accepting flaws and imperfections. When a bowl breaks, it is not the end of its life; __2__, it represents a new beginning. The golden veins highlight the object's history, making it even more beautiful than __3__ it was flawless. This artistic practice offers a powerful metaphor for human resilience. We all experience hardships that may 'break' us. Yet, if we have the courage to heal, our scars can become symbols of strength. __4__ discarding what is damaged, we can choose to repair it with care. In this way, true beauty is found not in perfection, but in the __5__ to overcome adversity.",
                questions: [
                    { id: "c_q_06", text: "1.", options: {A:"conceals", B:"celebrates", C:"worsens", D:"denies"}, answer: "B", points: 2 },
                    { id: "c_q_07", text: "2.", options: {A:"rather", B:"furthermore", C:"consequently", D:"similarly"}, answer: "A", points: 2 },
                    { id: "c_q_08", text: "3.", options: {A:"where", B:"why", C:"when", D:"how"}, answer: "C", points: 2 },
                    { id: "c_q_09", text: "4.", options: {A:"Because of", B:"Instead of", C:"Due to", D:"Except for"}, answer: "B", points: 2 },
                    { id: "c_q_10", text: "5.", options: {A:"inability", B:"refusal", C:"capacity", D:"failure"}, answer: "C", points: 2 }
                ]
            },
            // 第三篇：數位排毒 (Digital Detox)
            {
                id: "c_s_003",
                article: "A 'digital detox' refers to a period of time when a person refrains from using electronic devices. The primary goal is to reduce stress and __1__ connection with the physical world. While smartphones have made communication easier, they also keep our brains in a state of constant alert. __2__, stepping away from screens can help lower anxiety levels. During a detox, people often find themselves paying more attention to their surroundings. It is not about completely abandoning technology, __3__ finding a healthy balance. Experts suggest starting small, such as turning off notifications during meals. __4__ taking these minor steps, individuals can gradually reclaim their time. Ultimately, disconnecting from the digital world allows us to reconnect with our inner selves, bringing a profound sense of __5__.",
                questions: [
                    { id: "c_q_11", text: "1.", options: {A:"destroy", B:"restore", C:"ignore", D:"avoid"}, answer: "B", points: 2 },
                    { id: "c_q_12", text: "2.", options: {A:"Therefore", B:"However", C:"Otherwise", D:"Instead"}, answer: "A", points: 2 },
                    { id: "c_q_13", text: "3.", options: {A:"and", B:"or", C:"but", D:"so"}, answer: "C", points: 2 },
                    { id: "c_q_14", text: "4.", options: {A:"By", B:"With", C:"For", D:"Without"}, answer: "A", points: 2 },
                    { id: "c_q_15", text: "5.", options: {A:"panic", B:"peace", C:"guilt", D:"sorrow"}, answer: "B", points: 2 }
                ]
            }
        ]
    },
    blank_filling: {
        senior: [
            // 第一篇：互助社會
            {
                id: "b_s_001",
                optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                article: "Option Pool:<br>(A) essential  (B) volunteer  (C) isolated  (D) meaningful  (E) communities<br>(F) empathy  (G) unconditionally  (H) transforming  (I) barriers  (J) gratitude<br><br>Helping others is not just a noble act; it is __1__ for building a harmonious society. In modern cities, people often feel __2__ despite living close to one another. By participating in local __3__ programs, we can break down these invisible __4__ and connect with our neighbors. Whether it is serving meals at a shelter or simply listening to an elder, these actions foster __5__ and compassion. Those who give their time __6__ often report feeling a deep sense of __7__ and joy. It is a mutually beneficial process, __8__ both the giver and the receiver. Ultimately, strong __9__ are built on the foundation of mutual support and a shared commitment to making life more __10__ for everyone.",
                questions: [
                    { id: "b_q_01", text: "1. 請選擇正確選項：", answer: "A", points: 2 },
                    { id: "b_q_02", text: "2. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "b_q_03", text: "3. 請選擇正確選項：", answer: "B", points: 2 },
                    { id: "b_q_04", text: "4. 請選擇正確選項：", answer: "I", points: 2 },
                    { id: "b_q_05", text: "5. 請選擇正確選項：", answer: "F", points: 2 },
                    { id: "b_q_06", text: "6. 請選擇正確選項：", answer: "G", points: 2 },
                    { id: "b_q_07", text: "7. 請選擇正確選項：", answer: "J", points: 2 },
                    { id: "b_q_08", text: "8. 請選擇正確選項：", answer: "H", points: 2 },
                    { id: "b_q_09", text: "9. 請選擇正確選項：", answer: "E", points: 2 },
                    { id: "b_q_10", text: "10. 請選擇正確選項：", answer: "D", points: 2 }
                ]
            },
            // 第二篇：仿生學 (Biomimicry)
            {
                id: "b_s_002",
                optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                article: "Option Pool:<br>(A) imitate  (B) inspiration  (C) efficient  (D) naturally  (E) innovations<br>(F) solve  (G) sticky  (H) structures  (I) impact  (J) survival<br><br>Biomimicry is the practice of looking to nature for design __1__ to solve human problems. For billions of years, plants and animals have evolved highly __2__ ways to adapt to their environments. By studying these natural __3__, scientists can create remarkable new technologies. For instance, the invention of Velcro was inspired by the way burrs from plants stick __4__ to clothing. Similarly, the design of modern high-speed trains was modified to __5__ the beak of the kingfisher bird, reducing noise. Nature operates without creating toxic waste, providing a perfect model for sustainable __6__. As populations grow, we must live without causing irreversible __7__ on the planet. Biomimicry teaches us that answers might already exist __8__ in the world. Rather than conquering nature, true progress lies in observing its mechanisms for __9__ and learning to __10__ our problems in harmony with the Earth.",
                questions: [
                    { id: "b_q_11", text: "1. 請選擇正確選項：", answer: "B", points: 2 },
                    { id: "b_q_12", text: "2. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "b_q_13", text: "3. 請選擇正確選項：", answer: "H", points: 2 },
                    { id: "b_q_14", text: "4. 請選擇正確選項：", answer: "D", points: 2 },
                    { id: "b_q_15", text: "5. 請選擇正確選項：", answer: "A", points: 2 },
                    { id: "b_q_16", text: "6. 請選擇正確選項：", answer: "E", points: 2 },
                    { id: "b_q_17", text: "7. 請選擇正確選項：", answer: "I", points: 2 },
                    { id: "b_q_18", text: "8. 請選擇正確選項：", answer: "D", points: 2 }, 
                    { id: "b_q_19", text: "9. 請選擇正確選項：", answer: "J", points: 2 },
                    { id: "b_q_20", text: "10. 請選擇正確選項：", answer: "F", points: 2 }
                ]
            }
        ]
    },
    discourse: {
        senior: [
            // 第一篇：資源回收
            {
                id: "d_s_001",
                optionsList: ['A', 'B', 'C', 'D'],
                article: "Option Pool:<br>(A) It reduces the amount of waste sent to landfills and conserves natural resources.<br>(B) To solve this issue, local governments are providing clearer sorting instructions.<br>(C) However, many people still find the sorting process confusing and inconvenient.<br>(D) Recycling is widely recognized as one of the easiest ways to protect our environment.<br><br>__1__ By processing used materials into new products, we prevent the pollution associated with manufacturing from scratch. __2__ This simple action can significantly lower our carbon footprint. __3__ As a result, items that could be recycled often end up in the general trash, contaminating the entire batch. __4__ With better education and accessible facilities, communities can work together to achieve a sustainable future.",
                questions: [
                    { id: "d_q_01", text: "1. 請選擇正確選項：", answer: "D", points: 2 },
                    { id: "d_q_02", text: "2. 請選擇正確選項：", answer: "A", points: 2 },
                    { id: "d_q_03", text: "3. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "d_q_04", text: "4. 請選擇正確選項：", answer: "B", points: 2 }
                ]
            },
            // 第二篇：太空人俯瞰效應
            {
                id: "d_s_002",
                optionsList: ['A', 'B', 'C', 'D'],
                article: "Option Pool:<br>(A) This phenomenon is known as the 'overview effect.'<br>(B) Suddenly, the conflicts that divide nations seem trivial and meaningless.<br>(C) From space, national borders are invisible, and the atmosphere looks incredibly thin.<br>(D) Many astronauts report a profound shift in their worldview after seeing Earth from orbit.<br><br>__1__ This cognitive shift happens when one views the planet from outer space. __2__ It highlights the vulnerability of our world and the interconnectedness of all life. Observers are struck by the realization that everyone they love exists on this fragile blue dot. __3__ Instead, a deep sense of unity and compassion emerges. __4__ Consequently, many return to Earth with a renewed commitment to environmental protection and global peace.",
                questions: [
                    { id: "d_q_05", text: "1. 請選擇正確選項：", answer: "D", points: 2 },
                    { id: "d_q_06", text: "2. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "d_q_07", text: "3. 請選擇正確選項：", answer: "B", points: 2 },
                    { id: "d_q_08", text: "4. 請選擇正確選項：", answer: "A", points: 2 }
                ]
            }
        ]
    },
    reading: {
        senior: [
            // 第一篇：海洋清理
            {
                id: "r_s_001",
                article: "The Ocean Cleanup, a non-profit organization, has taken on one of the greatest environmental challenges of our time: removing plastic from the world's oceans. Founded by a young inventor, the project utilizes a massive U-shaped barrier that floats on the surface of the water. Driven by the ocean's natural currents, the barrier catches and concentrates plastic waste, allowing support vessels to extract it efficiently.<br><br>Critics initially doubted the feasibility of the project, arguing that the ocean's harsh conditions would destroy the equipment. However, after several redesigns and rigorous testing, the system successfully brought its first batch of plastic back to shore. The organization's ultimate goal is to clean up 90% of ocean plastic pollution. They also recognize that cleaning is only half the battle; preventing plastic from entering the oceans via rivers is equally crucial.",
                questions: [
                    { id: "r_q_01", text: "1. What is the primary function of the U-shaped barrier mentioned in the passage?", options: {A:"To measure the ocean's natural currents.", B:"To catch and concentrate floating plastic waste.", C:"To block ships from entering polluted areas.", D:"To protect sea creatures from harsh weather."}, answer: "B", points: 2 },
                    { id: "r_q_02", text: "2. How did the organization respond to the harsh conditions of the ocean?", options: {A:"They abandoned the project entirely.", B:"They asked critics to design a new system.", C:"They redesigned and rigorously tested the equipment.", D:"They changed their focus to cleaning rivers only."}, answer: "C", points: 2 },
                    { id: "r_q_03", text: "3. According to the passage, what does the organization believe is equally crucial as cleaning the oceans?", options: {A:"Inventing new types of plastic.", B:"Building larger support vessels.", C:"Preventing plastic from flowing in through rivers.", D:"Raising more funds from critics."}, answer: "C", points: 2 },
                    { id: "r_q_04", text: "4. Which of the following best describes the author's tone toward The Ocean Cleanup project?", options: {A:"Pessimistic and highly critical.", B:"Objective and informative.", C:"Sarcastic and mocking.", D:"Indifferent and bored."}, answer: "B", points: 2 }
                ]
            },
            // 第二篇：Ikigai 哲學
            {
                id: "r_s_002",
                article: "The concept of 'Ikigai' is a Japanese philosophy that roughly translates to 'a reason for being.' It is often represented as the intersection of four elements: what you love, what you are good at, what the world needs, and what you can be paid for. Finding your Ikigai requires deep self-reflection and a willingness to explore different paths in life.<br><br>In Okinawa, Japan, which is known for its high number of centenarians, Ikigai is considered a crucial factor in their longevity. For many elderly Okinawans, their Ikigai might be as simple as tending to their garden, teaching traditions to their grandchildren, or participating in community activities. It provides them with a sense of purpose to get out of bed every morning. Unlike Western concepts of success that often focus solely on financial gain or career advancement, Ikigai emphasizes balance, joy in small things, and contributing to the well-being of others. It reminds us that a meaningful life is not necessarily a busy or wealthy one, but one anchored in purpose and peace.",
                questions: [
                    { id: "r_q_05", text: "1. What is the main idea of the passage?", options: {A:"To compare Okinawan gardens with Western gardens.", B:"To explain the Japanese philosophy of a meaningful life.", C:"To argue that financial success is the only way to happiness.", D:"To provide a guide on how to become a centenarian."}, answer: "B", points: 2 },
                    { id: "r_q_06", text: "2. According to the passage, which of the following is NOT one of the four elements of Ikigai?", options: {A:"What the world needs.", B:"What you love.", C:"What you can be paid for.", D:"What makes you famous."}, answer: "D", points: 2 },
                    { id: "r_q_07", text: "3. How does the passage contrast Ikigai with typical Western concepts of success?", options: {A:"Ikigai focuses more on balance and contribution than just financial gain.", B:"Ikigai is entirely focused on career advancement.", C:"Western concepts place more value on community activities.", D:"Western success is based on the intersection of four Japanese words."}, answer: "A", points: 2 },
                    { id: "r_q_08", text: "4. What does the author imply about the elderly people in Okinawa?", options: {A:"They are tired of their daily routines.", B:"Their sense of purpose contributes to their long and healthy lives.", C:"They wish they had pursued wealthier careers in their youth.", D:"They rely heavily on technology to find meaning."}, answer: "B", points: 2 }
                ]
            }
        ]
    },
    essay: {
        senior: [
            // 第一篇
            {
                id: "e_s_001",
                questions: [
                    { id: "q_trans_01", text: "中譯英：面對生活中的挑戰，我們不應輕易放棄。相反地，我們必須保持樂觀並從錯誤中學習。(8分)", type: "translation", answer: "Facing challenges in life, we should not give up easily. Instead, we must remain optimistic and learn from our mistakes.", points: 8, keywords: ["give up", "instead", "optimistic", "learn from"] },
                    { id: "q_essay_01", text: "英文作文：請寫一篇約 120 字的文章。第一段描述一件你曾經參與過的助人行動（如志工服務），第二段說明這次經驗對你的啟發與成長。(20分)", type: "composition", answer: "【官方評分標準】\n1. 內容完整性：是否包含第一段的具體行動描述，以及第二段的深刻啟發。\n2. 組織連貫性：段落間是否使用了適當的轉折詞。\n3. 詞彙與句法：句型是否具備多樣性。", points: 20 }
                ]
            },
            // 第二篇
            {
                id: "e_s_002",
                questions: [
                    { id: "q_trans_02", text: "中譯英：環境保護不僅僅是政府的責任。每一個人都必須採取行動來減少浪費並保護大自然。(8分)", type: "translation", answer: "Environmental protection is not just the government's responsibility. Everyone must take action to reduce waste and protect nature.", points: 8, keywords: ["Environmental protection", "responsibility", "take action", "reduce waste"] },
                    { id: "q_essay_02", text: "英文作文：請寫一篇約 120 字的文章。第一段描述你觀察到的一個環境問題（例如：塑膠垃圾），第二段提出身為高中生的你，可以在日常生活中做出什麼改變來改善這個問題。(20分)", type: "composition", answer: "【官方評分標準】\n1. 內容完整性：具體描述環境問題，並提出個人層面的解決方案。\n2. 組織連貫性：因果關係的表達是否清晰。\n3. 詞彙與句法：正確使用環保相關詞彙（如 sustainable, recycle）。", points: 20 }
                ]
            }
        ]
    },

    // ==========================================
    // 模組二：化生單字遊戲群組 (供 game.html 讀取)
    // ==========================================
    senior: [
        {
            id: "senior_A1", title: "高中 7000 單字 (A組 - 1)",
            words: [
                { word: "abandon", meaning: "v. 放棄；遺棄", root: "a (不) + band (約束)", phonetic: "/əˈbæn.dən/" },
                { word: "absolute", meaning: "adj. 絕對的", root: "ab (離開) + solve (解開)", phonetic: "/ˈæb.sə.luːt/" },
                { word: "absorb", meaning: "v. 吸收；理解", root: "ab (離開) + sorb (吸)", phonetic: "/əbˈzɔːrb/" },
                { word: "abstract", meaning: "adj. 抽象的", root: "abs (離開) + tract (拉)", phonetic: "/ˈæb.strækt/" },
                { word: "abundant", meaning: "adj. 豐富的；大量的", root: "ab (加強) + und (波浪)", phonetic: "/əˈbʌn.dənt/" },
                { word: "abuse", meaning: "v. 濫用；虐待", root: "ab (壞) + use (使用)", phonetic: "/əˈbjuːz/" },
                { word: "academic", meaning: "adj. 學術的", root: "academy (學院) + ic", phonetic: "/ˌæk.əˈdem.ɪk/" },
                { word: "accelerate", meaning: "v. 加速", root: "ac (向) + celer (速度)", phonetic: "/əkˈsel.ə.reɪt/" },
                { word: "accent", meaning: "n. 口音；重音", root: "ac (向) + cent (唱)", phonetic: "/ˈæk.sənt/" },
                { word: "accept", meaning: "v. 接受；答應", root: "ac (向) + cept (拿)", phonetic: "/əkˈsept/" }
            ]
        },
        {
            id: "senior_A2", title: "高中 7000 單字 (A組 - 2)",
            words: [
                { word: "accommodate", meaning: "v. 容納；適應", root: "ac (向) + com (共同) + mod (模式)", phonetic: "/əˈkɑː.mə.deɪt/" },
                { word: "accompany", meaning: "v. 陪伴；伴隨", root: "ac (向) + company (公司/同伴)", phonetic: "/əˈkʌm.pə.ni/" },
                { word: "accomplish", meaning: "v. 完成；實現", root: "ac (向) + com (共同) + plish (填滿)", phonetic: "/əˈkɑːm.plɪʃ/" },
                { word: "accurate", meaning: "adj. 準確的", root: "ac (向) + cur (關心) + ate", phonetic: "/ˈæk.jɚ.ət/" },
                { word: "accuse", meaning: "v. 指控；譴責", root: "ac (向) + cause (理由)", phonetic: "/əˈkjuːz/" },
                { word: "achieve", meaning: "v. 達到；完成", root: "a (到) + chief (頭) -> 到達頂點", phonetic: "/əˈtʃiːv/" },
                { word: "acknowledge", meaning: "v. 承認；感謝", root: "ac (向) + knowledge (知識)", phonetic: "/əkˈnɑː.lɪdʒ/" },
                { word: "acquire", meaning: "v. 獲得；學到", root: "ac (向) + quire (尋求)", phonetic: "/əˈkwaɪɚ/" },
                { word: "actual", meaning: "adj. 實際的", root: "act (行動) + ual", phonetic: "/ˈæk.tʃu.əl/" },
                { word: "adapt", meaning: "v. 適應；改編", root: "ad (向) + apt (適合)", phonetic: "/əˈdæpt/" }
            ]
        },
        {
            id: "senior_A3", title: "高中 7000 單字 (A組 - 3)",
            words: [
                { word: "addition", meaning: "n. 增加；附加物", root: "add (增加) + ition", phonetic: "/əˈdɪʃ.ən/" },
                { word: "adequate", meaning: "adj. 足夠的；適當的", root: "ad (向) + equ (相等) + ate", phonetic: "/ˈæd.ə.kwət/" },
                { word: "adjust", meaning: "v. 調整；適應", root: "ad (向) + just (正確)", phonetic: "/əˈdʒʌst/" },
                { word: "administration", meaning: "n. 管理；行政", root: "ad (向) + minister (服務)", phonetic: "/ədˌmɪn.əˈstreɪ.ʃən/" },
                { word: "admire", meaning: "v. 欽佩；讚賞", root: "ad (向) + mire (驚奇)", phonetic: "/ədˈmaɪr/" },
                { word: "admit", meaning: "v. 承認；允許進入", root: "ad (向) + mit (送)", phonetic: "/ədˈmɪt/" },
                { word: "adopt", meaning: "v. 採用；收養", root: "ad (向) + opt (選擇)", phonetic: "/əˈdɑːpt/" },
                { word: "advance", meaning: "v. 前進；發展", root: "ad (向) + avant (前面)", phonetic: "/ədˈvæns/" },
                { word: "advantage", meaning: "n. 優勢；利益", root: "ad (向) + avant (前面)", phonetic: "/ədˈvæn.t̬ɪdʒ/" },
                { word: "adventure", meaning: "n. 冒險；奇遇", root: "ad (向) + vent (來)", phonetic: "/ədˈven.tʃɚ/" }
            ]
        },
        {
            id: "senior_A4", title: "高中 7000 單字 (A組 - 4)",
            words: [
                { word: "advocate", meaning: "v. 提倡；擁護", root: "ad (向) + voc (聲音) + ate", phonetic: "/ˈæd.və.keɪt/" },
                { word: "affection", meaning: "n. 喜愛；感情", root: "af (向) + fect (做) + ion", phonetic: "/əˈfek.ʃən/" },
                { word: "afford", meaning: "v. 負擔得起", root: "af (向) + forth (向前)", phonetic: "/əˈfɔːrd/" },
                { word: "agency", meaning: "n. 代辦處；機構", root: "ag (做) + ency", phonetic: "/ˈeɪ.dʒən.si/" },
                { word: "aggressive", meaning: "adj. 具侵略性的；積極的", root: "ag (向) + gress (走) + ive", phonetic: "/əˈɡres.ɪv/" },
                { word: "agriculture", meaning: "n. 農業", root: "agri (田地) + culture (培養)", phonetic: "/ˈæɡ.rə.kʌl.tʃɚ/" },
                { word: "alert", meaning: "adj. 警覺的", root: "al (全部) + ert (活躍)", phonetic: "/əˈlɝːt/" },
                { word: "allocate", meaning: "v. 分配；撥出", root: "al (向) + loc (地方) + ate", phonetic: "/ˈæl.ə.keɪt/" },
                { word: "alternative", meaning: "n. 替代方案", root: "alter (其他) + native", phonetic: "/ɑːlˈtɝː.nə.t̬ɪv/" },
                { word: "altitude", meaning: "n. 高度；海拔", root: "alt (高) + itude (狀態)", phonetic: "/ˈæl.tə.tuːd/" }
            ]
        }
    ],
    
    toefl: [
        {
            id: "toefl_1", title: "托福核心 (慈悲與智慧)",
            words: [
                { word: "compassion", meaning: "n. 慈悲；同情", root: "com (共同) + pass (感情)", phonetic: "/kəmˈpæʃ.ən/" },
                { word: "profound", meaning: "adj. 深刻的", root: "pro (向前) + found (底)", phonetic: "/prəˈfaʊnd/" },
                { word: "essential", meaning: "adj. 必要的", root: "esse (存在) + ntial", phonetic: "/ɪˈsen.ʃəl/" },
                { word: "humble", meaning: "adj. 謙卑的", root: "hum (泥土) + ble", phonetic: "/ˈhʌm.bəl/" },
                { word: "wisdom", meaning: "n. 智慧", root: "wise (明智) + dom (狀態)", phonetic: "/ˈwɪz.dəm/" },
                { word: "resilient", meaning: "adj. 有韌性的", root: "re (回) + sili (跳)", phonetic: "/rɪˈzɪl.jənt/" },
                { word: "harmony", meaning: "n. 和諧", root: "harm (連接) + ony", phonetic: "/ˈhɑːr.mə.ni/" },
                { word: "altruism", meaning: "n. 利他主義", root: "alter (其他) + ism", phonetic: "/ˈæl.tru.ɪ.zəm/" },
                { word: "empathy", meaning: "n. 同理心", root: "em (進入) + pathy (感情)", phonetic: "/ˈem.pə.θi/" },
                { word: "mindful", meaning: "adj. 覺察的；留心的", root: "mind (心) + ful (充滿)", phonetic: "/ˈmaɪnd.fəl/" }
            ]
        },
        {
            id: "toefl_2", title: "托福核心 (清淨與專注)",
            words: [
                { word: "authentic", meaning: "adj. 真實的；可靠的", root: "auth (自己) + entic", phonetic: "/ɑːˈθen.t̬ɪk/" },
                { word: "beneficial", meaning: "adj. 有益的", root: "bene (好) + fic (做)", phonetic: "/ˌben.əˈfɪʃ.əl/" },
                { word: "clarity", meaning: "n. 清楚；明晰", root: "clar (清楚) + ity", phonetic: "/ˈkler.ə.t̬i/" },
                { word: "cognitive", meaning: "adj. 認知的", root: "cogn (知道) + itive", phonetic: "/ˈkɑːɡ.nə.t̬ɪv/" },
                { word: "cohesive", meaning: "adj. 有凝聚力的", root: "co (共同) + hes (黏) + ive", phonetic: "/koʊˈhiː.sɪv/" },
                { word: "collaborate", meaning: "v. 合作", root: "col (共同) + labor (勞動)", phonetic: "/kəˈlæb.ə.reɪt/" },
                { word: "comprehensive", meaning: "adj. 全面的", root: "com (共同) + prehens (抓住)", phonetic: "/ˌkɑːm.prəˈhen.sɪv/" },
                { word: "conscious", meaning: "adj. 有意識的", root: "con (共同) + sci (知道) + ous", phonetic: "/ˈkɑːn.ʃəs/" },
                { word: "consensus", meaning: "n. 共識", root: "con (共同) + sens (感覺) + us", phonetic: "/kənˈsen.səs/" },
                { word: "contemplate", meaning: "v. 沉思；深思", root: "con (共同) + templ (廟宇 -> 靜思的地方)", phonetic: "/ˈkɑːn.t̬əm.pleɪt/" }
            ]
        }
    ],

    // ==========================================
    // 模組三：托福適性考場專用 (供 exam_toefl.html 讀取)
    // ==========================================
    toefl_adaptive: {
        // 第一關：基準閱讀
        reading: {
            id: "t_r_01",
            article: "Biomimicry involves studying nature's best ideas and imitating them to solve human problems. For example, the design of the famous bullet train in Japan was inspired by the beak of the kingfisher bird, making it 10% faster and much quieter.",
            questions: [
                { id: "tr_q1", text: "1. What is biomimicry?", options: {A:"Studying birds", B:"Imitating nature to solve problems", C:"Building faster trains", D:"Protecting the environment"}, answer: "B", points: 15 },
                { id: "tr_q2", text: "2. How did the kingfisher bird inspire the bullet train?", options: {A:"It made the train fly", B:"It helped reduce noise and increase speed", C:"It changed the train's color", D:"It made the train cheaper"}, answer: "B", points: 15 }
            ]
        },
        // 第二關 (分軌 A)：聽力 (困難版) - 學術講座
        listening_hard: {
            id: "t_lh_01",
            audioScript: "Welcome to Advanced Ecology. Today we will discuss 'keystone species.' These are species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically. A classic example is the sea otter, which controls the sea urchin population, thereby protecting kelp forests.",
            questions: [
                { id: "tlh_q1", text: "1. What defines a 'keystone species' according to the lecture?", options: {A:"A species that lives in the ocean", B:"A species whose removal would drastically change the ecosystem", C:"The most populated species in an area", D:"A species that eats only kelp"}, answer: "B", points: 15 },
                { id: "tlh_q2", text: "2. How does the sea otter act as a keystone species?", options: {A:"By eating kelp directly", B:"By controlling the sea urchin population", C:"By building dams", D:"By migrating long distances"}, answer: "B", points: 15 }
            ]
        },
        // 第二關 (分軌 B)：聽力 (基礎版) - 校園生活
        listening_easy: {
            id: "t_le_01",
            audioScript: "Attention students. The north campus parking lot will be closed this weekend for repaving. Please use the south parking lot or street parking during this time. Regular parking will resume on Monday morning.",
            questions: [
                { id: "tle_q1", text: "1. Why is the north parking lot closing?", options: {A:"For a student festival", B:"For repaving", C:"Due to heavy snow", D:"To build a new library"}, answer: "B", points: 10 },
                { id: "tle_q2", text: "2. When will regular parking resume?", options: {A:"Sunday night", B:"Monday morning", C:"Next month", D:"Friday afternoon"}, answer: "B", points: 10 }
            ]
        },
        // 第三關：口說跟讀
        speaking: {
            id: "t_s_01",
            article: "No act of kindness, no matter how small, is ever wasted. It creates a ripple effect that can change the world in ways we may never see.",
            audioScript: "No act of kindness, no matter how small, is ever wasted. It creates a ripple effect that can change the world in ways we may never see.",
            questions: [
                { id: "ts_q1", text: "請點擊左側播放聆聽，並誠實大聲跟讀三次。", options: {A:"是的，我已用心完成跟讀修行。", B:"我還需要再練習一下。"}, answer: "A", points: 30 }
            ]
        },
        // 第四關：Email 寫作
        writing: {
            id: "t_w_01",
            questions: [
                { 
                    id: "tw_q1", text: "實用 Email 寫作：\n你是學校環保社團 (Environmental Club) 的社長。請寫一封信給學務處主任 (Director of Student Affairs)，提議在校園內舉辦一場「二手物品交換市集 (Second-hand Swap Meet)」，以減少資源浪費。(滿分30分)", type: "composition",
                    answer: "【評分標準】清楚說明活動目的（減少浪費）、具體提議（二手交換市集）、語氣誠懇禮貌、字數達 80 字以上。", points: 30
                }
            ]
        }
    }
};

    // ==========================================
    // 模組四：多益職場考場專用 (供 exam_toeic.html 讀取)
    // ==========================================
    toeic: {
        // Part 1: 照片描述 (聽力)
        part1: [
            {
                id: "toeic_p1_01",
                imageDesc: "[圖片情境：一位男士正坐在辦公桌前打字，桌上有一杯咖啡]",
                audioScript: "(A) He is drinking a cup of coffee. (B) He is typing on a keyboard. (C) He is leaving the office. (D) He is reading a newspaper.",
                // 多益第一大題，實戰中卷面只有 A B C D 四個選項，沒有文字
                options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, 
                answer: "B", points: 5
            }
        ],
        
        // Part 2: 應答問題 (聽力)
        part2: [
            {
                id: "toeic_p2_01",
                audioScript: "When is the project proposal due? \n(A) By next Friday. \n(B) Yes, I did it. \n(C) Mr. Smith is the manager.",
                // 多益第二大題只有 A B C 三個選項
                options: {A:"(A)", B:"(B)", C:"(C)"}, 
                answer: "A", points: 5
            }
        ],

        // Part 3: 簡短對話 (聽力)
        part3: [
            {
                id: "toeic_p3_01",
                audioScript: "W: Hi, I'd like to book a flight to Tokyo for next Monday.\nM: Let me check the schedule. We have a direct flight leaving at 10:00 AM.\nW: That sounds perfect. I'll take it.",
                questions: [
                    { id: "tp3_q1", text: "1. Where does the woman want to travel to?", options: {A:"New York", B:"London", C:"Tokyo", D:"Paris"}, answer: "C", points: 5 },
                    { id: "tp3_q2", text: "2. What time is the flight?", options: {A:"8:00 AM", B:"9:00 AM", C:"10:00 AM", D:"11:00 AM"}, answer: "C", points: 5 }
                ]
            }
        ],

        // Part 4: 簡短獨白 (聽力)
        part4: [
            {
                id: "toeic_p4_01",
                audioScript: "Attention all passengers. Flight 402 to Taipei is now boarding at Gate 5. Please have your boarding passes and passports ready. We will begin boarding with first-class passengers and those requiring special assistance.",
                questions: [
                    { id: "tp4_q1", text: "3. What is the main purpose of the announcement?", options: {A:"To report a lost item", B:"To announce a flight boarding", C:"To delay a train", D:"To change a gate"}, answer: "B", points: 5 },
                    { id: "tp4_q2", text: "4. Who will board the plane first?", options: {A:"Families with children", B:"Economy class passengers", C:"First-class passengers", D:"Airline staff"}, answer: "C", points: 5 }
                ]
            }
        ],

        // Part 5: 句子填空 (閱讀)
        part5: [
            { id: "toeic_p5_01", text: "5. The new marketing strategy was highly _____ in increasing our overall sales last quarter.", options: {A:"effect", B:"effective", C:"effectively", D:"effectiveness"}, answer: "B", points: 5 },
            { id: "toeic_p5_02", text: "6. All employees are required to submit their expense reports _____ the end of the month.", options: {A:"on", B:"in", C:"at", D:"by"}, answer: "D", points: 5 }
        ],

        // Part 6: 段落填空 (閱讀)
        part6: [
            {
                id: "toeic_p6_01",
                article: "Dear Mr. Davis,\nWe are pleased to inform you that your application for the position of Senior Analyst has been __(7)__. Please come to our main office next Monday at 9 AM for the orientation session.\nSincerely,\nHuman Resources",
                questions: [
                    { id: "tp6_q1", text: "7.", options: {A:"accept", B:"accepted", C:"accepting", D:"accepts"}, answer: "B", points: 5 }
                ]
            }
        ],

        // Part 7: 閱讀理解 (閱讀)
        part7: [
            {
                id: "toeic_p7_01",
                article: "Memo\nTo: All Staff\nFrom: Facilities Management\nDate: October 5\nSubject: Break Room Renovation\n\nPlease be informed that the main break room on the 3rd floor will be closed for renovation starting next Wednesday, October 12. The microwave ovens and coffee machines will be temporarily moved to the 2nd-floor lobby. We expect the work to be completed by the end of the month.",
                questions: [
                    { id: "tp7_q1", text: "8. What is the purpose of this memo?", options: {A:"To announce a new hire", B:"To explain a renovation schedule", C:"To complain about broken equipment", D:"To change working hours"}, answer: "B", points: 5 },
                    { id: "tp7_q2", text: "9. Where will the coffee machines be moved?", options: {A:"To the 1st floor", B:"To the 2nd-floor lobby", C:"To the 4th floor", D:"To the manager's office"}, answer: "B", points: 5 }
                ]
            }
        ]
    }


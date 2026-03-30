// question_bank.js
// 般若系統 - 全域智慧大腦 (高中模考 + 化生單字 + 托福適性 + 多益職場)

const QuestionBank = {

    // ==========================================
    // 模組一：全真模擬考場專用 (供 exam.html 讀取)
    // ==========================================
    vocabulary: {
        senior: [
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
            {
                id: "c_s_001",
                article: "In today's fast-paced digital world, many people suffer from information overload. Mindfulness, the practice of being fully present in the moment, has emerged as a powerful solution. __16__ we focus on our breathing and current surroundings, anxiety tends to decrease. It allows us to observe our thoughts without judgment. __17__, a daily mindfulness routine can significantly improve concentration. Many schools have started to introduce these techniques to students, __18__ positive results in their academic performance. However, mindfulness is not a quick fix; it requires patience and __19__ practice. Only by slowing down can we truly appreciate the beauty of life and find inner peace __20__ the chaos.",
                questions: [
                    { id: "c_q_16", text: "16.", options: {A:"When", B:"Unless", C:"Though", D:"Until"}, answer: "A", points: 2 },
                    { id: "c_q_17", text: "17.", options: {A:"In contrast", B:"Furthermore", C:"Instead", D:"Nevertheless"}, answer: "B", points: 2 },
                    { id: "c_q_18", text: "18.", options: {A:"yielded", B:"yielding", C:"to yield", D:"yields"}, answer: "B", points: 2 },
                    { id: "c_q_19", text: "19.", options: {A:"consistent", B:"temporary", C:"accidental", D:"rare"}, answer: "A", points: 2 },
                    { id: "c_q_20", text: "20.", options: {A:"beyond", B:"amidst", C:"without", D:"beneath"}, answer: "B", points: 2 }
                ]
            },
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
            {
                id: "b_s_001",
                optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                article: "Option Pool:<br>(A) essential  (B) volunteer  (C) isolated  (D) meaningful  (E) communities<br>(F) empathy  (G) unconditionally  (H) transforming  (I) barriers  (J) gratitude<br><br>Helping others is not just a noble act; it is __21__ for building a harmonious society. In modern cities, people often feel __22__ despite living close to one another. By participating in local __23__ programs, we can break down these invisible __24__ and connect with our neighbors. Whether it is serving meals at a shelter or simply listening to an elder, these actions foster __25__ and compassion. Those who give their time __26__ often report feeling a deep sense of __27__ and joy. It is a mutually beneficial process, __28__ both the giver and the receiver. Ultimately, strong __29__ are built on the foundation of mutual support and a shared commitment to making life more __30__ for everyone.",
                questions: [
                    { id: "b_q_21", text: "21. 請選擇正確選項：", answer: "A", points: 2 },
                    { id: "b_q_22", text: "22. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "b_q_23", text: "23. 請選擇正確選項：", answer: "B", points: 2 },
                    { id: "b_q_24", text: "24. 請選擇正確選項：", answer: "I", points: 2 },
                    { id: "b_q_25", text: "25. 請選擇正確選項：", answer: "F", points: 2 },
                    { id: "b_q_26", text: "26. 請選擇正確選項：", answer: "G", points: 2 },
                    { id: "b_q_27", text: "27. 請選擇正確選項：", answer: "J", points: 2 },
                    { id: "b_q_28", text: "28. 請選擇正確選項：", answer: "H", points: 2 },
                    { id: "b_q_29", text: "29. 請選擇正確選項：", answer: "E", points: 2 },
                    { id: "b_q_30", text: "30. 請選擇正確選項：", answer: "D", points: 2 }
                ]
            },
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
            {
                id: "d_s_001",
                optionsList: ['A', 'B', 'C', 'D'],
                article: "Option Pool:<br>(A) It reduces the amount of waste sent to landfills and conserves natural resources.<br>(B) To solve this issue, local governments are providing clearer sorting instructions.<br>(C) However, many people still find the sorting process confusing and inconvenient.<br>(D) Recycling is widely recognized as one of the easiest ways to protect our environment.<br><br>__31__ By processing used materials into new products, we prevent the pollution associated with manufacturing from scratch. __32__ This simple action can significantly lower our carbon footprint. __33__ As a result, items that could be recycled often end up in the general trash, contaminating the entire batch. __34__ With better education and accessible facilities, communities can work together to achieve a sustainable future.",
                questions: [
                    { id: "d_q_31", text: "31. 請選擇正確選項：", answer: "D", points: 2 },
                    { id: "d_q_32", text: "32. 請選擇正確選項：", answer: "A", points: 2 },
                    { id: "d_q_33", text: "33. 請選擇正確選項：", answer: "C", points: 2 },
                    { id: "d_q_34", text: "34. 請選擇正確選項：", answer: "B", points: 2 }
                ]
            },
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
            {
                id: "r_s_001",
                article: "The Ocean Cleanup, a non-profit organization, has taken on one of the greatest environmental challenges of our time: removing plastic from the world's oceans. Founded by a young inventor, the project utilizes a massive U-shaped barrier that floats on the surface of the water. Driven by the ocean's natural currents, the barrier catches and concentrates plastic waste, allowing support vessels to extract it efficiently.<br><br>Critics initially doubted the feasibility of the project, arguing that the ocean's harsh conditions would destroy the equipment. However, after several redesigns and rigorous testing, the system successfully brought its first batch of plastic back to shore. The organization's ultimate goal is to clean up 90% of ocean plastic pollution. They also recognize that cleaning is only half the battle; preventing plastic from entering the oceans via rivers is equally crucial.",
                questions: [
                    { id: "r_q_35", text: "35. What is the primary function of the U-shaped barrier mentioned in the passage?", options: {A:"To measure the ocean's natural currents.", B:"To catch and concentrate floating plastic waste.", C:"To block ships from entering polluted areas.", D:"To protect sea creatures from harsh weather."}, answer: "B", points: 2 },
                    { id: "r_q_36", text: "36. How did the organization respond to the harsh conditions of the ocean?", options: {A:"They abandoned the project entirely.", B:"They asked critics to design a new system.", C:"They redesigned and rigorously tested the equipment.", D:"They changed their focus to cleaning rivers only."}, answer: "C", points: 2 },
                    { id: "r_q_37", text: "37. According to the passage, what does the organization believe is equally crucial as cleaning the oceans?", options: {A:"Inventing new types of plastic.", B:"Building larger support vessels.", C:"Preventing plastic from flowing in through rivers.", D:"Raising more funds from critics."}, answer: "C", points: 2 },
                    { id: "r_q_38", text: "38. Which of the following best describes the author's tone toward The Ocean Cleanup project?", options: {A:"Pessimistic and highly critical.", B:"Objective and informative.", C:"Sarcastic and mocking.", D:"Indifferent and bored."}, answer: "B", points: 2 }
                ]
            },
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
            {
                id: "e_s_001",
                questions: [
                    { 
                        id: "q_trans_01", text: "中譯英：面對生活中的挑戰，我們不應輕易放棄。相反地，我們必須保持樂觀並從錯誤中學習。(8分)", type: "translation",
                        answer: "Facing challenges in life, we should not give up easily. Instead, we must remain optimistic and learn from our mistakes.", points: 8,
                        keywords: ["give up", "instead", "optimistic", "learn from"] 
                    },
                    { 
                        id: "q_essay_01", text: "英文作文：請寫一篇約 120 字的文章。第一段描述一件你曾經參與過的助人行動（如志工服務、幫助同學等），第二段說明這次經驗對你的啟發與成長。(20分)", type: "composition",
                        answer: "【官方評分標準】\n1. 內容完整性：是否包含第一段的具體行動描述，以及第二段的深刻啟發。\n2. 組織連貫性：段落間是否使用了適當的轉折詞（如 Therefore, Through this experience）。\n3. 詞彙與句法：句型是否具備多樣性，以及單字的拼寫準確度。", points: 20
                    }
                ]
            },
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
        },
        {
            id: "senior_A5", title: "高中 7000 單字 (A組 - 5)",
            words: [
                { word: "altogether", meaning: "adv. 完全地；總共", root: "all + together", phonetic: "/ˌɑːl.təˈɡeð.ɚ/" },
                { word: "ambiguous", meaning: "adj. 含糊不清的", root: "ambi (二) + ag (做) -> 兩可的", phonetic: "/æmˈbɪɡ.ju.əs/" },
                { word: "ambition", meaning: "n. 野心；抱負", root: "amb (走) + it (去) -> 四處拉票", phonetic: "/æmˈbɪʃ.ən/" },
                { word: "ambulance", meaning: "n. 救護車", root: "ambul (走) -> 移動醫院", phonetic: "/ˈæm.bjə.ləns/" },
                { word: "amount", meaning: "n. 數量 v. 合計", root: "a (向) + mount (山)", phonetic: "/əˈmaʊnt/" },
                { word: "analyze", meaning: "v. 分析", root: "ana (加強) + lyze (解開)", phonetic: "/ˈæn.əl.aɪz/" },
                { word: "ancestor", meaning: "n. 祖先", root: "ante (前) + cess (走) + or", phonetic: "/ˈæn.ses.tɚ/" },
                { word: "ancient", meaning: "adj. 古老的", root: "ante (前) + ient", phonetic: "/ˈeɪn.ʃənt/" },
                { word: "anniversary", meaning: "n. 週年紀念", root: "anni (年) + vers (轉)", phonetic: "/ˌæn.əˈvɝː.sɚ.i/" },
                { word: "announce", meaning: "v. 宣布", root: "ad (向) + nounce (報告)", phonetic: "/əˈnaʊns/" }
            ]
        },
        {
            id: "senior_A6", title: "高中 7000 單字 (A組 - 6)",
            words: [
                { word: "annual", meaning: "adj. 每年的", root: "annu (年) + al", phonetic: "/ˈæn.ju.əl/" },
                { word: "anonymous", meaning: "adj. 匿名的", root: "an (無) + onym (名字)", phonetic: "/əˈnɑː.nə.məs/" },
                { word: "anxiety", meaning: "n. 焦慮", root: "anx (勒死) + iety", phonetic: "/æŋˈzaɪ.ə.t̬i/" },
                { word: "apologize", meaning: "v. 道歉", root: "apo (離開) + log (說話) -> 辯解", phonetic: "/əˈpɑː.lə.dʒaɪz/" },
                { word: "apparent", meaning: "adj. 明顯的", root: "ap (向) + par (出現) + ent", phonetic: "/əˈper.ənt/" },
                { word: "appeal", meaning: "v. 呼籲；吸引", root: "ap (向) + peal (驅使)", phonetic: "/əˈpiːl/" },
                { word: "appetite", meaning: "n. 食慾；渴望", root: "ap (向) + pet (追求)", phonetic: "/ˈæp.ə.taɪt/" },
                { word: "appliance", meaning: "n. 家用電器", root: "ap (向) + ply (重疊) -> 使用", phonetic: "/əˈplaɪ.əns/" },
                { word: "applicable", meaning: "adj. 適用的", root: "ap (向) + plic (重疊) + able", phonetic: "/əˈplɪk.ə.bəl/" },
                { word: "applicant", meaning: "n. 申請人", root: "ap (向) + plic (重疊) -> 應徵者", phonetic: "/ˈæp.lə.kənt/" }
            ]
        },
        {
            id: "senior_A7", title: "高中 7000 單字 (A組 - 7)",
            words: [
                { word: "appoint", meaning: "v. 任命；約定", root: "ap (向) + point (點)", phonetic: "/əˈpɔɪnt/" },
                { word: "appreciate", meaning: "v. 感激；賞識", root: "ap (向) + preci (價值) + ate", phonetic: "/əˈpriː.ʃi.eɪt/" },
                { word: "approach", meaning: "v. 靠近；處理", root: "ap (向) + proach (靠近)", phonetic: "/əˈproʊtʃ/" },
                { word: "appropriate", meaning: "adj. 適當的", root: "ap (向) + propri (擁有) -> 特有的", phonetic: "/əˈproʊ.pri.ət/" },
                { word: "approval", meaning: "n. 贊成；同意", root: "ap (向) + prov (證明) + al", phonetic: "/əˈpruː.vəl/" },
                { word: "approximate", meaning: "adj. 大約的", root: "ap (向) + proxim (靠近) + ate", phonetic: "/əˈprɑːk.sə.mət/" },
                { word: "architect", meaning: "n. 建築師", root: "archi (主要) + tect (蓋房子)", phonetic: "/ˈɑːr.kə.tekt/" },
                { word: "arise", meaning: "v. 出現；上升", root: "a (加強) + rise (升起)", phonetic: "/əˈraɪz/" },
                { word: "arouse", meaning: "v. 喚起；激勵", root: "a (加強) + rouse (喚醒)", phonetic: "/əˈraʊz/" },
                { word: "artificial", meaning: "adj. 人造的", root: "arti (技巧) + fic (做) + ial", phonetic: "/ˌɑːr.t̬əˈfɪʃ.əl/" }
            ]
        },
        {
            id: "senior_A8", title: "高中 7000 單字 (A組 - 8)",
            words: [
                { word: "aspect", meaning: "n. 方面；層面", root: "ad (向) + spect (看)", phonetic: "/ˈæs.pekt/" },
                { word: "aspiration", meaning: "n. 志向；抱負", root: "ad (向) + spir (呼吸) + ation", phonetic: "/ˌæs.pəˈreɪ.ʃən/" },
                { word: "assemble", meaning: "v. 集合；組裝", root: "as (向) + semble (相同) -> 在一起", phonetic: "/əˈsem.bəl/" },
                { word: "assert", meaning: "v. 斷言；主張", root: "as (向) + sert (連接) -> 插話", phonetic: "/əˈsɝːt/" },
                { word: "assign", meaning: "v. 分配；指定", root: "as (向) + sign (標記)", phonetic: "/əˈsaɪn/" },
                { word: "assist", meaning: "v. 協助", root: "as (向) + sist (站立) -> 站在旁邊", phonetic: "/əˈsɪst/" },
                { word: "associate", meaning: "v. 聯想；結交", root: "as (向) + soci (伴侶) + ate", phonetic: "/əˈsoʊ.ʃi.eɪt/" },
                { word: "assume", meaning: "v. 假設；承擔", root: "as (向) + sume (拿)", phonetic: "/əˈsuːm/" },
                { word: "assurance", meaning: "n. 保證；自信", root: "as (向) + sure (確定) + ance", phonetic: "/əˈʃʊr.əns/" },
                { word: "astonish", meaning: "v. 使驚訝", root: "as (向) + ton (雷) -> 被雷打到", phonetic: "/əˈstɑː.nɪʃ/" }
            ]
        },
        {
            id: "senior_B1", title: "高中 7000 單字 (B組 - 1)",
            words: [
                { word: "background", meaning: "n. 背景", root: "back (後) + ground (地)", phonetic: "/ˈbæk.ɡraʊnd/" },
                { word: "bacteria", meaning: "n. 細菌", root: "bacter (桿狀物) + ia", phonetic: "/bækˈtɪr.i.ə/" },
                { word: "balance", meaning: "n. 平衡；餘額", root: "bi (二) + lanx (盤子)", phonetic: "/ˈbæl.əns/" },
                { word: "barrier", meaning: "n. 阻礙；門檻", root: "bar (棒子/阻礙) + ier", phonetic: "/ˈber.i.ɚ/" },
                { word: "behavior", meaning: "n. 行為；舉止", root: "be (加強) + have (持有)", phonetic: "/bɪˈheɪ.vjɚ/" },
                { word: "belief", meaning: "n. 信念；信仰", root: "be (加強) + lief (喜愛/相信)", phonetic: "/bɪˈliːf/" },
                { word: "belong", meaning: "v. 屬於", root: "be (加強) + long (長時間)", phonetic: "/bɪˈlɑːŋ/" },
                { word: "beneficial", meaning: "adj. 有益的", root: "bene (好) + fic (做) + ial", phonetic: "/ˌben.əˈfɪʃ.əl/" },
                { word: "benefit", meaning: "n. 利益 v. 有益於", root: "bene (好) + fit (做)", phonetic: "/ˈben.ə.fɪt/" },
                { word: "betray", meaning: "v. 背叛；洩漏", root: "be (完全) + tray (交出)", phonetic: "/bɪˈtreɪ/" }
            ]
        },
        {
            id: "senior_B2", title: "高中 7000 單字 (B組 - 2)",
            words: [
                { word: "bewilder", meaning: "v. 使迷惑", root: "be (完全) + wild (荒野) -> 迷路", phonetic: "/bɪˈwɪl.dɚ/" },
                { word: "beyond", meaning: "prep. 超過；在...那邊", root: "be (在) + yond (遠方)", phonetic: "/biˈjɑːnd/" },
                { word: "bias", meaning: "n. 偏見", root: "斜線的意象", phonetic: "/ˈbaɪ.əs/" },
                { word: "biological", meaning: "adj. 生物學的", root: "bio (生命) + log (學問) + ical", phonetic: "/ˌbaɪ.əˈlɑː.dʒɪ.kəl/" },
                { word: "bitter", meaning: "adj. 苦的；慘痛的", root: "bite (咬) -> 咬口的", phonetic: "/ˈbɪt̬.ɚ/" },
                { word: "bizarre", meaning: "adj. 奇異的", root: "來自義大利語「憤怒」", phonetic: "/bəˈzɑːr/" },
                { word: "blanket", meaning: "n. 毛毯 v. 覆蓋", root: "blanc (白色) + et", phonetic: "/ˈblæŋ.kɪt/" },
                { word: "blessing", meaning: "n. 祝福；幸事", root: "blood (血) -> 祭祀求福", phonetic: "/ˈbles.ɪŋ/" },
                { word: "bloom", meaning: "v./n. 開花；繁盛", root: "來自「葉子」的古語", phonetic: "/bluːm/" },
                { word: "boast", meaning: "v. 吹噓；自誇", root: "來自「膨脹」", phonetic: "/boʊst/" }
            ]
        },
        {
            id: "senior_B3", title: "高中 7000 單字 (B組 - 3)",
            words: [
                { word: "boundary", meaning: "n. 邊界；範圍", root: "bound (界線) + ary", phonetic: "/ˈbaʊn.dɚ.i/" },
                { word: "bravery", meaning: "n. 勇敢", root: "brave (勇敢) + ry", phonetic: "/ˈbreɪ.vɚ.i/" },
                { word: "breakthrough", meaning: "n. 突破", root: "break (破) + through (穿過)", phonetic: "/ˈbreɪk.θruː/" },
                { word: "breath", meaning: "n. 呼吸", root: "來自「蒸氣」", phonetic: "/breθ/" },
                { word: "breathtaking", meaning: "adj. 驚人的", root: "breath (呼吸) + taking (拿走)", phonetic: "/ˈbreθˌteɪ.kɪŋ/" },
                { word: "brilliant", meaning: "adj. 傑出的；明亮的", root: "beryl (綠寶石) -> 閃耀", phonetic: "/ˈbrɪl.jənt/" },
                { word: "broadcast", meaning: "v. 廣播；散布", root: "broad (寬) + cast (投擲)", phonetic: "/ˈbrɑːd.kæst/" },
                { word: "browse", meaning: "v. 瀏覽", root: "來自「嫩枝」 -> 羊吃草", phonetic: "/braʊz/" },
                { word: "brutal", meaning: "adj. 殘忍的", root: "brute (畜生) + al", phonetic: "/ˈbruː.t̬əl/" },
                { word: "budget", meaning: "n. 預算", root: "bouge (皮袋) -> 錢袋", phonetic: "/ˈbʌdʒ.ɪt/" }
            ]
        },
        {
            id: "senior_B4", title: "高中 7000 單字 (B組 - 4)",
            words: [
                { word: "burden", meaning: "n. 負擔", root: "bear (承受) + den", phonetic: "/ˈbɝː.dən/" },
                { word: "bureaucracy", meaning: "n. 官僚體制", root: "bureau (辦公桌) + cracy (統治)", phonetic: "/bjʊˈrɑː.krə.si/" },
                { word: "burial", meaning: "n. 葬禮", root: "bury (埋葬) + al", phonetic: "/ˈber.i.əl/" },
                { word: "burst", meaning: "v. 爆發；破裂", root: "來自「破碎」", phonetic: "/bɝːst/" },
                { word: "business", meaning: "n. 生意；職責", root: "busy (忙碌) + ness", phonetic: "/ˈbɪz.nɪs/" }
            ]
        },
        {
            id: "senior_C1", title: "高中 7000 單字 (C組 - 1)",
            words: [
                { word: "calculate", meaning: "v. 計算", root: "calcul (小石子) + ate", phonetic: "/ˈkæl.kjə.leɪt/" },
                { word: "campaign", meaning: "n. 活動；戰役", root: "camp (田野) -> 出征", phonetic: "/kæmˈpeɪn/" },
                { word: "candidate", meaning: "n. 候選人", root: "cand (白色) -> 穿白袍者", phonetic: "/ˈkæn.dɪ.det/" },
                { word: "capacity", meaning: "n. 容量；能力", root: "cap (拿/容納) + acity", phonetic: "/kəˈpæs.ə.t̬i/" },
                { word: "capital", meaning: "n. 首都；資本", root: "capit (頭) + al", phonetic: "/ˈkæp.ə.t̬əl/" },
                { word: "capture", meaning: "v. 捕捉；吸引", root: "capt (拿) + ure", phonetic: "/ˈkæp.tʃɚ/" },
                { word: "casual", meaning: "adj. 隨意的；非正式", root: "cas (掉落) -> 偶然發生的", phonetic: "/ˈkæʒ.u.əl/" },
                { word: "catastrophe", meaning: "n. 大災難", root: "cata (下) + strophe (轉) -> 翻倒", phonetic: "/kəˈtæs.trə.fi/" },
                { word: "category", meaning: "n. 類別", root: "cata (下) + agoreuein (當眾演說)", phonetic: "/ˈkæt̬.ə.ɡɔː.ri/" },
                { word: "caution", meaning: "n. 謹慎", root: "caut (小心) + ion", phonetic: "/ˈkɑː.ʃən/" }
            ]
        },
        {
            id: "senior_C2", title: "高中 7000 單字 (C組 - 2)",
            words: [
                { word: "celebrate", meaning: "v. 慶祝", root: "celeber (頻繁/熱鬧) + ate", phonetic: "/ˈsel.ə.breɪt/" },
                { word: "cell", meaning: "n. 細胞；小房間", root: "cel (隱藏/覆蓋) -> 密室", phonetic: "/sel/" },
                { word: "cemetery", meaning: "n. 墓地", root: "koiman (睡覺) -> 安眠處", phonetic: "/ˈsem.ə.ter.i/" },
                { word: "censor", meaning: "v. 審查", root: "cens (評估) + or", phonetic: "/ˈsen.sɚ/" },
                { word: "census", meaning: "n. 人口普查", root: "cens (評估) + us", phonetic: "/ˈsen.səs/" },
                { word: "center", meaning: "n. 中心", root: "kentron (刺針/圓心)", phonetic: "/ˈsen.t̬ɚ/" },
                { word: "century", meaning: "n. 世紀", root: "cent (百) + ury", phonetic: "/ˈsen.tʃə.ri/" },
                { word: "ceremony", meaning: "n. 典禮；儀式", root: "caerimonia (神聖儀式)", phonetic: "/ˈser.ə.mə.ni/" },
                { word: "certain", meaning: "adj. 確定的", root: "cert (搞清楚) + ain", phonetic: "/ˈsɝː.tən/" },
                { word: "certificate", meaning: "n. 證書", root: "cert (確定) + fic (做) + ate", phonetic: "/sɚˈtɪf.ə.kət/" }
            ]
        },
        {
            id: "senior_D1", title: "高中 7000 單字 (D組 - 1)",
            words: [
                { word: "damage", meaning: "v./n. 損害；破壞", root: "dam (損失) + age", phonetic: "/ˈdæm.ɪdʒ/" },
                { word: "dazzle", meaning: "v. 使目眩；使驚嘆", root: "daze (發呆) 的加強語", phonetic: "/ˈdæz.əl/" },
                { word: "debate", meaning: "v./n. 辯論", root: "de (下) + bat (打) -> 打倒對方", phonetic: "/dɪˈbeɪt/" },
                { word: "decade", meaning: "n. 十年", root: "deca (十) + ade", phonetic: "/ˈdek.eɪd/" },
                { word: "decay", meaning: "v./n. 腐朽；衰退", root: "de (下) + cay (掉落)", phonetic: "/dɪˈkeɪ/" },
                { word: "deceive", meaning: "v. 欺騙", root: "de (離) + ceive (拿) -> 偷拿走", phonetic: "/dɪˈsiːv/" },
                { word: "decisive", meaning: "adj. 決定性的；果斷的", root: "de (下) + cis (切) -> 切斷猶疑", phonetic: "/dɪˈsaɪ.sɪv/" },
                { word: "decline", meaning: "v./n. 下降；婉拒", root: "de (下) + clin (彎曲)", phonetic: "/dɪˈklaɪn/" },
                { word: "decorate", meaning: "v. 裝飾", root: "decor (美觀) + ate", phonetic: "/ˈdek.ə.reɪt/" },
                { word: "dedicate", meaning: "v. 奉獻；致力於", root: "de (加強) + dic (說) -> 宣誓投入", phonetic: "/ˈded.ə.keɪt/" }
            ]
        },
        {
            id: "senior_D2", title: "高中 7000 單字 (D組 - 2)",
            words: [
                { word: "deficiency", meaning: "n. 不足；缺乏", root: "de (下) + fic (做) -> 沒做好", phonetic: "/dɪˈfɪʃ.ən.si/" },
                { word: "define", meaning: "v. 定義；界定", root: "de (下) + fin (範圍) -> 畫出界線", phonetic: "/dɪˈfaɪn/" },
                { word: "delegate", meaning: "n. 代表 v. 委派", root: "de (下) + leg (派) + ate", phonetic: "/ˈdel.ə.ɡət/" },
                { word: "deliberate", meaning: "adj. 故意的；深思熟慮的", root: "de (加強) + liber (秤重) -> 衡量過後", phonetic: "/dɪˈlɪb.ɚ.ət/" },
                { word: "delicate", meaning: "adj. 精緻的；脆弱的", root: "de (離) + lic (引誘) -> 精巧誘人", phonetic: "/ˈdel.ə.kət/" },
                { word: "democracy", meaning: "n. 民主", root: "demo (人民) + cracy (統治)", phonetic: "/dɪˈmɑː.krə.si/" },
                { word: "demonstrate", meaning: "v. 證明；示範", root: "de (加強) + monstr (展示)", phonetic: "/ˈdem.ən.streɪt/" },
                { word: "denial", meaning: "n. 否認；拒絕", root: "de (加強) + ni (不) + al", phonetic: "/dɪˈnaɪ.əl/" },
                { word: "depart", meaning: "v. 離開；出發", root: "de (離) + part (部分)", phonetic: "/dɪˈpɑːrt/" },
                { word: "dependable", meaning: "adj. 可靠的", root: "de (下) + pend (掛) -> 掛在下面", phonetic: "/dɪˈpen.də.bəl/" }
            ]
        },
        {
            id: "senior_E1", title: "高中 7000 單字 (E組 - 1)",
            words: [
                { word: "earnest", meaning: "adj. 認真的；誠摯的", root: "來自古語「戰鬥」 -> 像作戰一樣認真", phonetic: "/ˈɝː.nest/" },
                { word: "eccentric", meaning: "adj. 古怪的", root: "ec (出) + centr (中心) -> 偏離中心", phonetic: "/ekˈsen.trɪk/" },
                { word: "eclipse", meaning: "n. 日蝕/月蝕 v. 掩蓋", root: "ec (出) + lipse (離開) -> 消失", phonetic: "/ɪˈklɪps/" },
                { word: "ecology", meaning: "n. 生態學", root: "eco (家) + logy (學問)", phonetic: "/iˈkɑː.lə.dʒi/" },
                { word: "economic", meaning: "adj. 經濟的", root: "eco (家) + nom (管理) -> 持家之道", phonetic: "/ˌiː.kəˈnɑː.mɪk/" },
                { word: "editor", meaning: "n. 編輯", root: "e (出) + dit (給) + or -> 出版者", phonetic: "/ˈed.ɪ.t̬ɚ/" },
                { word: "educate", meaning: "v. 教育", root: "e (出) + duc (引導) -> 引導潛能", phonetic: "/ˈedʒ.ə.keɪt/" },
                { word: "effective", meaning: "adj. 有效的", root: "ef (向外) + fect (做) -> 做出結果", phonetic: "/əˈfek.tɪv/" },
                { word: "efficient", meaning: "adj. 高效率的", root: "ef (向外) + fic (做) -> 迅速完成", phonetic: "/ɪˈfɪʃ.ənt/" },
                { word: "elaborate", meaning: "adj. 精心製作的 v. 詳述", root: "e (出) + labor (勞動) -> 費力做出的", phonetic: "/iˈlæb.ɚ.ət/" }
            ]
        },
        {
            id: "senior_E2", title: "高中 7000 單字 (E組 - 2)",
            words: [
                { word: "elastic", meaning: "adj. 有彈性的", root: "來自「推動」", phonetic: "/iˈlæs.tɪk/" },
                { word: "elegant", meaning: "adj. 優雅的", root: "e (出) + leg (挑選) -> 挑出來的精華", phonetic: "/ˈel.ə.ɡənt/" },
                { word: "eliminate", meaning: "v. 消除；淘汰", root: "e (出) + limin (門檻) -> 趕出門外", phonetic: "/iˈlɪm.ə.neɪt/" },
                { word: "eloquent", meaning: "adj. 雄辯的；口才流利的", root: "e (出) + loqu (說)", phonetic: "/ˈel.ə.kwənt/" },
                { word: "embarrass", meaning: "v. 使尷尬", root: "em (入) + bar (障礙) -> 被關在障礙中", phonetic: "/ɪmˈber.əs/" },
                { word: "embassy", meaning: "n. 大使館", root: "來自「僕人/使者」", phonetic: "/ˈem.bə.si/" },
                { word: "emerge", meaning: "v. 出現；浮現", root: "e (出) + merge (浸泡) -> 從水裡出來", phonetic: "/iˈmɝːdʒ/" },
                { word: "emergency", meaning: "n. 緊急情況", root: "e (出) + merge (浮現) -> 突然冒出的事", phonetic: "/iˈmɝː.dʒən.si/" },
                { word: "emphasize", meaning: "v. 強調", root: "em (在內) + phas (顯示) -> 使其顯眼", phonetic: "/ˈem.fə.saɪz/" },
                { word: "empire", meaning: "n. 帝國", root: "em (在內) + pire (準備/命令)", phonetic: "/ˈem.paɪɚ/" }
            ]
        },
        {
            id: "senior_F1", title: "高中 7000 單字 (F組 - 1)",
            words: [
                { word: "fabric", meaning: "n. 布料；結構", root: "faber (工匠) -> 製作出來的東西", phonetic: "/ˈfæb.rɪk/" },
                { word: "fabulous", meaning: "adj. 極好的；傳說中的", root: "fable (寓言) -> 像神話一樣", phonetic: "/ˈfæb.jə.ləs/" },
                { word: "facilitate", meaning: "v. 促進；使便利", root: "facil (容易) + itate", phonetic: "/fəˈsɪl.ə.teɪt/" },
                { word: "facility", meaning: "n. 設施；設備", root: "facil (容易) -> 讓人做事容易的工具", phonetic: "/fəˈsɪl.ə.t̬i/" },
                { word: "factual", meaning: "adj. 事實的", root: "fact (事實) + ual", phonetic: "/ˈfæk.tʃu.əl/" },
                { word: "faculty", meaning: "n. 官能；全體教師", root: "fac (做) -> 做事的能力", phonetic: "/ˈfæk.əl.t̬i/" },
                { word: "fade", meaning: "v. 褪色；消失", root: "來自「平淡/乏味」", phonetic: "/feɪd/" },
                { word: "failure", meaning: "n. 失敗", root: "fail (失敗) + ure", phonetic: "/ˈfeɪ.ljɚ/" },
                { word: "faith", meaning: "n. 信任；信心", root: "fid (信任) 的演變", phonetic: "/feɪθ/" },
                { word: "fake", meaning: "adj. 假的 v. 偽造", root: "來自「整理/清理」", phonetic: "/feɪk/" }
            ]
        },
        {
            id: "senior_F2", title: "高中 7000 單字 (F組 - 2)",
            words: [
                { word: "familiar", meaning: "adj. 熟悉的", root: "famil (家庭) -> 像家人一樣", phonetic: "/fəˈmɪl.i.jɚ/" },
                { word: "famine", meaning: "n. 飢荒", root: "fam (餓) + ine", phonetic: "/ˈfæm.ɪn/" },
                { word: "fantastic", meaning: "adj. 極好的；奇幻的", root: "fant (顯示) -> 想像出來的", phonetic: "/fænˈtæs.tɪk/" },
                { word: "fantasy", meaning: "n. 幻想", root: "phan (顯示) + asy", phonetic: "/ˈfæn.tə.si/" },
                { word: "fascinate", meaning: "v. 使著迷", root: "fascin (符咒) + ate", phonetic: "/ˈfæs.ən.eɪt/" },
                { word: "fashion", meaning: "n. 時尚；流行方式", root: "fac (做) -> 做出來的樣子", phonetic: "/ˈfæʃ.ən/" },
                { word: "fatal", meaning: "adj. 致命的", root: "fat (命運) + al", phonetic: "/ˈfeɪ.t̬əl/" },
                { word: "fatigue", meaning: "n. 疲勞", root: "fat (疲憊) + igue", phonetic: "/fəˈtiːɡ/" },
                { word: "favorable", meaning: "adj. 有利的；贊同的", root: "favor (喜愛) + able", phonetic: "/ˈfeɪ.vɚ.ə.bəl/" },
                { word: "feasible", meaning: "adj. 可行的", root: "fac (做) + ible -> 做的到的", phonetic: "/ˈfiː.zə.bəl/" }
            ]
        },
        {
            id: "senior_G1", title: "高中 7000 單字 (G組 - 1)",
            words: [
                { word: "galaxy", meaning: "n. 銀河系；星系", root: "gala (乳汁) -> 像噴灑的乳汁", phonetic: "/ˈɡæl.ək.si/" },
                { word: "gallery", meaning: "n. 畫廊；長廊", root: "來自「娛樂場所」", phonetic: "/ˈɡæl.ɚ.i/" },
                { word: "garment", meaning: "n. 成衣；服裝", root: "garn (裝飾) + ment", phonetic: "/ˈɡɑːr.mənt/" },
                { word: "gather", meaning: "v. 聚集；收集", root: "來自「在一起」", phonetic: "/ˈɡæð.ɚ/" },
                { word: "gaze", meaning: "v. 凝視", root: "來自「發呆」", phonetic: "/ɡeɪz/" },
                { word: "generate", meaning: "v. 產生；引起", root: "gen (產生) + ate", phonetic: "/ˈdʒen.ə.reɪt/" },
                { word: "generous", meaning: "adj. 慷慨的", root: "gen (血統) -> 高貴者的美德", phonetic: "/ˈdʒen.ər.əs/" },
                { word: "genius", meaning: "n. 天才", root: "gen (產生) -> 天生的才華", phonetic: "/ˈdʒiː.ni.əs/" },
                { word: "genuine", meaning: "adj. 真誠的；真正的", root: "gen (產生) -> 原生的/非偽造", phonetic: "/ˈdʒen.ju.ɪn/" },
                { word: "gesture", meaning: "n. 手勢；姿勢", root: "gest (帶領/表現) + ure", phonetic: "/ˈdʒes.tʃɚ/" }
            ]
        },
        {
            id: "senior_G2", title: "高中 7000 單字 (G組 - 2)",
            words: [
                { word: "glamour", meaning: "n. 魅力；魔力", root: "來自「文法」 -> 被視為魔法", phonetic: "/ˈɡlæm.ɚ/" },
                { word: "glance", meaning: "v./n. 瞥見", root: "來自「閃光」", phonetic: "/ɡlæns/" },
                { word: "global", meaning: "adj. 全球的", root: "glob (球) + al", phonetic: "/ˈɡloʊ.bəl/" },
                { word: "glory", meaning: "n. 光榮；榮耀", root: "來自「稱讚」", phonetic: "/ˈɡlɔː.ri/" },
                { word: "gorgeous", meaning: "adj. 極其漂亮的", root: "來自「咽喉/裝飾品」", phonetic: "/ˈɡɔːr.dʒəs/" },
                { word: "gradual", meaning: "adj. 逐漸的", root: "grad (步) + ual -> 一步步來", phonetic: "/ˈɡrædʒ.u.əl/" },
                { word: "graduate", meaning: "v. 畢業 n. 畢業生", root: "grad (階梯) -> 取得學位階梯", phonetic: "/ˈɡrædʒ.u.ət/" },
                { word: "grant", meaning: "v. 同意；准許", root: "cre (相信) + ant -> 信任並給予", phonetic: "/ɡrænt/" },
                { word: "gratitude", meaning: "n. 感激", root: "grat (感激) + itude", phonetic: "/ˈɡræt̬.ə.tuːd/" },
                { word: "guarantee", meaning: "v./n. 保證", root: "來自「防禦/守衛」", phonetic: "/ˌɡær.ənˈtiː/" }
            ]
        },
        {
            id: "senior_H1", title: "高中 7000 單字 (H組 - 1)",
            words: [
                { word: "habitual", meaning: "adj. 習慣性的", root: "habit (習慣) + ual", phonetic: "/həˈbɪtʃ.u.əl/" },
                { word: "halt", meaning: "v./n. 停止", root: "來自「跛行/停留」", phonetic: "/hɑːlt/" },
                { word: "handicap", meaning: "n. 障礙；不利條件", root: "hand in cap -> 抽籤遊戲", phonetic: "/ˈhæn.di.kæp/" },
                { word: "hardship", meaning: "n. 苦難", root: "hard (硬/艱苦) + ship (狀態)", phonetic: "/ˈhɑːrd.ʃɪp/" },
                { word: "harmony", meaning: "n. 和諧", root: "harm (連接) + ony", phonetic: "/ˈhɑːr.mə.ni/" },
                { word: "harsh", meaning: "adj. 嚴酷的；刺耳的", root: "來自「毛糙的」", phonetic: "/hɑːrʃ/" },
                { word: "harvest", meaning: "v./n. 收穫", root: "來自「秋天」", phonetic: "/ˈhɑːr.vəst/" },
                { word: "haste", meaning: "n. 倉促；急忙", root: "來自「熱」 -> 急火攻心", phonetic: "/heɪst/" },
                { word: "hazard", meaning: "n. 危險；公害", root: "來自「擲骰子遊戲」", phonetic: "/ˈhæz.ɚd/" },
                { word: "headquarters", meaning: "n. 總部", root: "head (頭) + quarters (住處)", phonetic: "/ˈhedˌkwɔːr.t̬ɚz/" }
            ]
        },
        {
            id: "senior_H2", title: "高中 7000 單字 (H組 - 2)",
            words: [
                { word: "heighten", meaning: "v. 提高；增強", root: "high (高) + ten (變為)", phonetic: "/ˈhaɪ.tən/" },
                { word: "heritage", meaning: "n. 遺產；傳統", root: "herit (繼承) + age", phonetic: "/ˈher.ɪ.t̬ɪdʒ/" },
                { word: "hesitate", meaning: "v. 猶豫", root: "haere (黏住) + ate -> 卡住了", phonetic: "/ˈhez.ə.teɪt/" },
                { word: "highlight", meaning: "v. 強調 n. 精彩部分", root: "high (高) + light (光)", phonetic: "/ˈhaɪ.laɪt/" },
                { word: "historic", meaning: "adj. 具歷史意義的", root: "histor (歷史) + ic", phonetic: "/hɪˈstɔːr.ɪk/" },
                { word: "hollow", meaning: "adj. 空心的；虛偽的", root: "來自「洞」", phonetic: "/ˈhɑː.loʊ/" },
                { word: "honor", meaning: "n. 榮譽 v. 尊敬", root: "honos (榮譽)", phonetic: "/ˈɑː.nɚ/" },
                { word: "horizon", meaning: "n. 地平線；視野", root: "horos (邊界) + izon", phonetic: "/həˈraɪ.zən/" },
                { word: "hospitality", meaning: "n. 款待；殷勤", root: "hospit (客人) + ality", phonetic: "/ˌhɑː.spɪˈtæl.ə.t̬i/" },
                { word: "hostile", meaning: "adj. 有敵意的", root: "hostis (敵人) + ile", phonetic: "/ˈhɑː.stəl/" }
            ]
        },
        {
            id: "senior_I1", title: "高中 7000 單字 (I組 - 1)",
            words: [
                { word: "identical", meaning: "adj. 完全相同的", root: "idem (相同) + tical", phonetic: "/aɪˈden.t̬ə.kəl/" },
                { word: "identify", meaning: "v. 辨認；鑑定", root: "ident (相同) + fy (使) -> 使其一致", phonetic: "/aɪˈden.t̬ə.faɪ/" },
                { word: "idiom", meaning: "n. 慣用語；成語", root: "idio (私人的) + om -> 特有的說法", phonetic: "/ˈɪd.i.əm/" },
                { word: "idle", meaning: "adj. 閒散的；無意義的", root: "來自「空虛/無用」", phonetic: "/ˈaɪ.dəl/" },
                { word: "ignorant", meaning: "adj. 無知的", root: "i (不) + gnor (知道) + ant", phonetic: "/ˈɪɡ.nɚ.ənt/" },
                { word: "ignore", meaning: "v. 忽略；不理會", root: "i (不) + gnor (知道)", phonetic: "/ɪɡˈnɔːr/" },
                { word: "illuminate", meaning: "v. 照亮；啟發", root: "il (入) + lumin (光) + ate", phonetic: "/ɪˈluː.mə.neɪt/" },
                { word: "illusion", meaning: "n. 幻覺；假象", root: "il (入) + lus (玩弄/戲弄) + ion", phonetic: "/ɪˈluː.ʒən/" },
                { word: "illustrate", meaning: "v. 插圖說明；闡明", root: "il (入) + lustr (光) + ate", phonetic: "/ˈɪl.ə.streɪt/" },
                { word: "imitate", meaning: "v. 模仿", root: "imit (相似) + ate", phonetic: "/ˈɪm.ə.teɪt/" }
            ]
        },
        {
            id: "senior_I2", title: "高中 7000 單字 (I組 - 2)",
            words: [
                { word: "immediate", meaning: "adj. 立即的", root: "im (無) + med (中間) -> 沒間隔", phonetic: "/ɪˈmiː.di.ət/" },
                { word: "immense", meaning: "adj. 巨大的", root: "im (不) + mense (測量) -> 無法測量的", phonetic: "/ɪˈmens/" },
                { word: "immigrate", meaning: "v. 移居入境", root: "im (入) + migr (遷移) + ate", phonetic: "/ˈɪm.ə.ɡreɪt/" },
                { word: "impact", meaning: "v./n. 影響；撞擊", root: "im (入) + pact (緊壓/合約)", phonetic: "/ˈɪm.pækt/" },
                { word: "impatient", meaning: "adj. 不耐煩的", root: "im (不) + patient (耐心的)", phonetic: "/ɪmˈpeɪ.ʃənt/" },
                { word: "imperative", meaning: "adj. 必要的；緊急的", root: "im (入) + per (準備) -> 命令的", phonetic: "/ɪmˈper.ə.t̬ɪv/" },
                { word: "implement", meaning: "v. 實施 n. 工具", root: "im (入) + ple (填滿) + ment", phonetic: "/ˈɪm.plə.ment/" },
                { word: "imply", meaning: "v. 暗示", root: "im (入) + ply (重疊) -> 捲入其中", phonetic: "/ɪmˈplaɪ/" },
                { word: "import", meaning: "v./n. 進口", root: "im (入) + port (港口)", phonetic: "/ˈɪm.pɔːrt/" },
                { word: "impose", meaning: "v. 強加；課稅", root: "im (入) + pose (放置)", phonetic: "/ɪmˈpoʊz/" }
            ]
        },
        {
            id: "senior_J1", title: "高中 7000 單字 (J組 - 1)",
            words: [
                { word: "jail", meaning: "n. 監獄 v. 監禁", root: "cavea (洞穴/籠子)", phonetic: "/dʒeɪl/" },
                { word: "jealous", meaning: "adj. 嫉妒的", root: "zelos (熱情) -> 過度的熱情變嫉妒", phonetic: "/ˈdʒel.əs/" },
                { word: "jewelry", meaning: "n. 珠寶；首飾", root: "jewel (寶石) + ry", phonetic: "/ˈdʒuː.əl.ri/" },
                { word: "journal", meaning: "n. 日誌；期刊", root: "diurn (日) + al", phonetic: "/ˈdʒɝː.nəl/" },
                { word: "journey", meaning: "n. 旅程", root: "journ (日) -> 一日的路程", phonetic: "/ˈdʒɝː.ni/" },
                { word: "joyful", meaning: "adj. 喜悅的", root: "joy (喜悅) + ful", phonetic: "/ˈdʒɔɪ.fəl/" },
                { word: "judgment", meaning: "n. 判斷；審判", root: "jud (法/判斷) + ment", phonetic: "/ˈdʒʌdʒ.mənt/" },
                { word: "judicious", meaning: "adj. 明智的；有見地的", root: "jud (判斷) + icious", phonetic: "/dʒuːˈdɪʃ.əs/" },
                { word: "junction", meaning: "n. 交叉口；連結點", root: "junct (連結) + ion", phonetic: "/ˈdʒʌŋk.ʃən/" },
                { word: "justify", meaning: "v. 證明...為正當", root: "just (正義) + fy (使)", phonetic: "/ˈdʒʌs.tə.faɪ/" }
            ]
        },
        {
            id: "senior_K1", title: "高中 7000 單字 (K組 - 1)",
            words: [
                { word: "keen", meaning: "adj. 敏銳的；熱衷的", root: "來自「能幹的」", phonetic: "/kiːn/" },
                { word: "kernel", meaning: "n. 核心；果仁", root: "corn (穀物) + el -> 小穀粒", phonetic: "/ˈkɝː.nəl/" },
                { word: "kidnap", meaning: "v. 綁架", root: "kid (小孩) + nap (抓取)", phonetic: "/ˈkɪd.næp/" },
                { word: "kidney", meaning: "n. 腎臟", root: "kid (子宮) + ney (蛋)", phonetic: "/ˈkɪd.ni/" },
                { word: "kindle", meaning: "v. 點燃；激起", root: "cand (白/亮) -> 使發光", phonetic: "/ˈkɪn.dəl/" },
                { word: "kinship", meaning: "n. 親屬關係", root: "kin (家族) + ship", phonetic: "/ˈkɪn.ʃɪp/" },
                { word: "knight", meaning: "n. 騎士", root: "來自「僕人/少年」", phonetic: "/naɪt/" },
                { word: "knit", meaning: "v. 編織；結合", root: "來自「結/紐」", phonetic: "/nɪt/" },
                { word: "knob", meaning: "n. 圓形門把", root: "來自「疙瘩/結」", phonetic: "/nɑːb/" },
                { word: "knowledge", meaning: "n. 知識", root: "know (知道) + ledge (狀態)", phonetic: "/ˈnɑː.lɪdʒ/" }
            ]
        },
        {
            id: "senior_L1", title: "高中 7000 單字 (L組 - 1)",
            words: [
                { word: "label", meaning: "n. 標籤 v. 貼標籤", root: "來自「帶子/碎片」", phonetic: "/ˈleɪ.bəl/" },
                { word: "labor", meaning: "n. 勞動；工作", root: "lab (勞苦) + or", phonetic: "/ˈleɪ.bɚ/" },
                { word: "laboratory", meaning: "n. 實驗室", root: "labor (工作) + atory (場所)", phonetic: "/ˈlæb.rə.tɔːr.i/" },
                { word: "landscape", meaning: "n. 風景；景色", root: "land (地) + scape (形狀)", phonetic: "/ˈlænd.skeɪp/" },
                { word: "language", meaning: "n. 語言", root: "lingua (舌頭) + age", phonetic: "/ˈlæŋ.ɡwɪdʒ/" },
                { word: "lantern", meaning: "n. 燈籠", root: "lant (光) + ern", phonetic: "/ˈlæn.tɚn/" },
                { word: "latitude", meaning: "n. 緯度；自由度", root: "lat (寬) + itude", phonetic: "/ˈlæt̬.ə.tuːd/" },
                { word: "launch", meaning: "v. 發射；發動", root: "來自「長矛」", phonetic: "/lɑːntʃ/" },
                { word: "lavish", meaning: "adj. 奢華的；揮霍的", root: "lav (洗/流) -> 像水一樣流掉", phonetic: "/ˈlæv.ɪʃ/" },
                { word: "lawful", meaning: "adj. 合法的", root: "law (法律) + ful", phonetic: "/ˈlɑː.fəl/" }
            ]
        },
        {
            id: "senior_L2", title: "高中 7000 單字 (L組 - 2)",
            words: [
                { word: "layout", meaning: "n. 佈局；設計", root: "lay (放) + out (出來)", phonetic: "/ˈleɪ.aʊt/" },
                { word: "leading", meaning: "adj. 領先的；主要的", root: "lead (引導) + ing", phonetic: "/ˈliː.dɪŋ/" },
                { word: "leakage", meaning: "n. 洩漏", root: "leak (漏) + age", phonetic: "/ˈliː.kɪdʒ/" },
                { word: "lean", meaning: "v. 傾斜；靠著", root: "來自「傾斜」", phonetic: "/liːn/" },
                { word: "lecture", meaning: "n./v. 演講；講課", root: "lect (讀) + ure", phonetic: "/ˈlek.tʃɚ/" },
                { word: "legend", meaning: "n. 傳說；傳奇", root: "leg (讀) -> 值得讀的故事", phonetic: "/ˈledʒ.ənd/" },
                { word: "leisure", meaning: "n. 閒暇", root: "lic (允許) -> 被允許做想做的事", phonetic: "/ˈliː.ʒɚ/" },
                { word: "lenient", meaning: "adj. 寬大的；仁慈的", root: "leni (柔和) + ent", phonetic: "/ˈliː.ni.ənt/" },
                { word: "lethal", meaning: "adj. 致命的", root: "Lethe (遺忘之河) -> 通往死亡", phonetic: "/ˈliː.θəl/" },
                { word: "liable", meaning: "adj. 有義務的；易於...的", root: "lig (綁) + able -> 被綁在責任上", phonetic: "/ˈlaɪ.ə.bəl/" }
            ]
        },
        {
            id: "senior_L3", title: "高中 7000 單字 (L組 - 3)",
            words: [
                { word: "liberal", meaning: "adj. 自由的；慷慨的", root: "liber (自由) + al", phonetic: "/ˈlɪb.ər.əl/" },
                { word: "liberty", meaning: "n. 自由", root: "liber (自由) + ty", phonetic: "/ˈlɪb.ɚ.t̬i/" },
                { word: "lighten", meaning: "v. 減輕；照亮", root: "light (輕/亮) + en (使)", phonetic: "/ˈlaɪ.tən/" },
                { word: "likelihood", meaning: "n. 可能性", root: "likely (可能的) + hood (狀態)", phonetic: "/ˈlaɪ.kli.hʊd/" },
                { word: "limitation", meaning: "n. 限制", root: "limit (界限) + ation", phonetic: "/ˌlɪm.əˈteɪ.ʃən/" },
                { word: "linear", meaning: "adj. 線性的", root: "line (線) + ar", phonetic: "/ˈlɪn.i.ɚ/" },
                { word: "linguistic", meaning: "adj. 語言學的", root: "lingua (舌頭/語言) + istic", phonetic: "/lɪŋˈɡwɪs.tɪk/" },
                { word: "liquid", meaning: "n. 液體", root: "liqu (流動) + id", phonetic: "/ˈlɪk.wɪd/" },
                { word: "literacy", meaning: "n. 識字；讀寫能力", root: "liter (文字) + acy", phonetic: "/ˈlɪt̬.ɚ.ə.si/" },
                { word: "literal", meaning: "adj. 字面上的", root: "liter (文字) + al", phonetic: "/ˈlɪt̬.ɚ.əl/" }
            ]
        },
        {
            id: "senior_M1", title: "高中 7000 單字 (M組 - 1)",
            words: [
                { word: "magnificent", meaning: "adj. 壯麗的；極好的", root: "magni (大) + fic (做) -> 做得很大", phonetic: "/mæɡˈnɪf.ə.sənt/" },
                { word: "maintain", meaning: "v. 維持；維修", root: "main (手) + tain (握住) -> 握在手中", phonetic: "/meɪnˈteɪn/" },
                { word: "majesty", meaning: "n. 威嚴；陛下", root: "maj (大) + esty (狀態)", phonetic: "/ˈmædʒ.ə.sti/" },
                { word: "majority", meaning: "n. 大多數", root: "major (較大的) + ity", phonetic: "/məˈdʒɑː.rə.t̬i/" },
                { word: "manageable", meaning: "adj. 可處理的；易辦的", root: "manage (管理) + able", phonetic: "/ˈmæn.ə.dʒə.bəl/" },
                { word: "manifest", meaning: "v. 表明 adj. 明顯的", root: "mani (手) + fest (打) -> 用手觸摸得到的", phonetic: "/ˈmæn.ə.fest/" },
                { word: "manipulate", meaning: "v. 操縱；運用", root: "mani (手) + pul (填滿) + ate -> 用手操作", phonetic: "/məˈnɪp.jə.leɪt/" },
                { word: "marginal", meaning: "adj. 邊緣的；微小的", root: "margin (邊緣) + al", phonetic: "/ˈmɑːr.dʒɪ.nəl/" },
                { word: "massive", meaning: "adj. 巨大的；大量的", root: "mass (團/塊) + ive", phonetic: "/ˈmæs.ɪv/" },
                { word: "masterpiece", meaning: "n. 傑作", root: "master (大師) + piece (作品)", phonetic: "/ˈmæs.tɚ.piːs/" }
            ]
        },
        {
            id: "senior_M2", title: "高中 7000 單字 (M組 - 2)",
            words: [
                { word: "material", meaning: "n. 材料；原料", root: "mater (母親/物質) + ial", phonetic: "/məˈtɪr.i.əl/" },
                { word: "maturity", meaning: "n. 成熟", root: "matur (成熟) + ity", phonetic: "/məˈtʃʊr.ə.t̬i/" },
                { word: "maximum", meaning: "n./adj. 最大限度", root: "max (大) + imum (最)", phonetic: "/ˈmæk.sə.məm/" },
                { word: "meaningful", meaning: "adj. 有意義的", root: "mean (意義) + ing + ful", phonetic: "/ˈmiː.nɪŋ.fəl/" },
                { word: "measure", meaning: "v. 測量 n. 措施", root: "mens (測量) + ure", phonetic: "/ˈmeʒ.ɚ/" },
                { word: "mechanism", meaning: "n. 機制；結構", root: "mechan (機器) + ism", phonetic: "/ˈmek.ə.nɪ.zəm/" },
                { word: "mediate", meaning: "v. 調停；仲裁", root: "med (中間) + iate -> 站在中間說話", phonetic: "/ˈmiː.di.eɪt/" },
                { word: "memorable", meaning: "adj. 值得紀念的", root: "memor (記憶) + able", phonetic: "/ˈmem.ɚ.ə.bəl/" },
                { word: "mental", meaning: "adj. 心理的；精神的", root: "ment (心智) + al", phonetic: "/ˈmen.təl/" },
                { word: "mention", meaning: "v./n. 提到", root: "ment (心智) -> 使人想到", phonetic: "/ˈmen.ʃən/" }
            ]
        },
        {
            id: "senior_N1", title: "高中 7000 單字 (N組 - 1)",
            words: [
                { word: "narrative", meaning: "n. 敘述；故事", root: "gnar (知道) -> 使人知道細節", phonetic: "/ˈner.ə.t̬ɪv/" },
                { word: "national", meaning: "adj. 國家的", root: "nat (出生) + ion + al", phonetic: "/ˈnæʃ.ən.əl/" },
                { word: "native", meaning: "adj. 本地的 n. 土著", root: "nat (出生) + ive", phonetic: "/ˈneɪ.t̬ɪv/" },
                { word: "natural", meaning: "adj. 自然的；天生的", root: "nat (出生) + ural", phonetic: "/ˈnætʃ.ɚ.əl/" },
                { word: "navigation", meaning: "n. 導航；航行", root: "nav (船) + ag (做/動) + ion", phonetic: "/ˌnæv.əˈɡeɪ.ʃən/" },
                { word: "necessary", meaning: "adj. 必要的", root: "ne (不) + cede (讓步) -> 不可避開的", phonetic: "/ˈnes.ə.ser.i/" },
                { word: "negative", meaning: "adj. 負面的；否定的", root: "neg (否認) + ative", phonetic: "/ˈneɡ.ə.t̬ɪv/" },
                { word: "neglect", meaning: "v. 忽視；疏忽", root: "neg (不) + lect (選) -> 不去選取", phonetic: "/nɪˈɡlekt/" },
                { word: "negotiate", meaning: "v. 談判；協商", root: "neg (不) + otium (閒暇) -> 沒空閒要辦事", phonetic: "/nəˈɡoʊ.ʃi.eɪt/" },
                { word: "neutral", meaning: "adj. 中立的", root: "ne (不) + uter (兩者之一) -> 兩邊都不選", phonetic: "/ˈnuː.trəl/" }
            ]
        },
        {
            id: "senior_O1", title: "高中 7000 單字 (O組 - 1)",
            words: [
                { word: "objective", meaning: "n. 目標 adj. 客觀的", root: "ob (向) + ject (投擲) -> 投射在前方的目標", phonetic: "/əbˈdʒek.tɪv/" },
                { word: "obligation", meaning: "n. 義務；責任", root: "ob (向) + lig (綁) + ion -> 被綁住的事", phonetic: "/ˌɑː.bləˈɡeɪ.ʃən/" },
                { word: "obvious", meaning: "adj. 明顯的", root: "ob (向) + vi (道路) -> 就在路中間", phonetic: "/ˈɑːb.vi.əs/" },
                { word: "occasion", meaning: "n. 場合；時機", root: "oc (向) + cas (掉落) -> 掉下來的時機", phonetic: "/əˈkeɪ.ʒən/" },
                { word: "occupy", meaning: "v. 佔領；佔據", root: "oc (向) + cap (拿/抓)", phonetic: "/ˈɑː.kjə.paɪ/" },
                { word: "occurrence", meaning: "n. 發生；事件", root: "oc (向) + cur (跑) + ence -> 跑出來的事", phonetic: "/əˈkɝː.əns/" },
                { word: "offense", meaning: "n. 冒犯；罪過", root: "ob (向) + fense (打擊)", phonetic: "/əˈfens/" },
                { word: "official", meaning: "adj. 官方的 n. 官員", root: "offic (職務) + ial", phonetic: "/əˈfɪʃ.əl/" },
                { word: "operate", meaning: "v. 操作；運作", root: "oper (工作) + ate", phonetic: "/ˈɑː.pə.reɪt/" },
                { word: "opponent", meaning: "n. 對手；反對者", root: "ob (相對) + pon (放置) -> 放在對面的人", phonetic: "/əˈpoʊ.nənt/" }
            ]
        },
        {
            id: "senior_O2", title: "高中 7000 單字 (O組 - 2)",
            words: [
                { word: "opportunity", meaning: "n. 機會", root: "ob (向) + port (港口) -> 船進港的時機", phonetic: "/ˌɑː.pɚˈtuː.nə.t̬i/" },
                { word: "optimistic", meaning: "adj. 樂觀的", root: "optim (最好) + istic -> 往最好想", phonetic: "/ˌɑːp.təˈmɪs.tɪk/" },
                { word: "option", meaning: "n. 選擇", root: "opt (選擇) + ion", phonetic: "/ˈɑːp.ʃən/" },
                { word: "ordinary", meaning: "adj. 平凡的；普通的", root: "ordin (秩序) + ary -> 照順序來的", phonetic: "/ˈɔːr.dən.er.i/" },
                { word: "organic", meaning: "adj. 有機的；器官的", root: "organ (器官/工具) + ic", phonetic: "/ɔːrˈɡæn.ɪk/" },
                { word: "organize", meaning: "v. 組織；安排", root: "organ (工具/器官) -> 使其各司其職", phonetic: "/ˈɔːr.ɡən.aɪz/" },
                { word: "origin", meaning: "n. 起源", root: "ori (升起) -> 太阳升起的地方", phonetic: "/ˈɔːr.ə.dʒɪn/" },
                { word: "original", meaning: "adj. 原創的；最初的", root: "origin (起源) + al", phonetic: "/əˈrɪdʒ.ən.əl/" },
                { word: "outcome", meaning: "n. 結果", root: "out (出) + come (來)", phonetic: "/ˈaʊt.kʌm/" },
                { word: "outstanding", meaning: "adj. 優秀的；傑出的", root: "out (外) + standing (站著) -> 站出來的", phonetic: "/ˌaʊtˈstæn.dɪŋ/" }
            ]
        },
        {
            id: "senior_P1", title: "高中 7000 單字 (P組 - 1)",
            words: [
                { word: "package", meaning: "n. 包裹；配套", root: "pack (包) + age", phonetic: "/ˈpæk.ɪdʒ/" },
                { word: "parallel", meaning: "adj. 平行的；類似的", root: "para (旁) + allel (互相)", phonetic: "/ˈper.ə.lel/" },
                { word: "participant", meaning: "n. 參與者", root: "part (部分) + cip (抓) + ant -> 佔有一份的人", phonetic: "/pɑːrˈtɪs.ə.pənt/" },
                { word: "particle", meaning: "n. 微粒；極小量", root: "part (部) + icle (小) -> 小部分", phonetic: "/ˈpɑːr.t̬ɪ.kəl/" },
                { word: "particular", meaning: "adj. 特定的；挑剔的", root: "part (部) + icul (小) -> 細節的", phonetic: "/pɚˈtɪk.jə.lɚ/" },
                { word: "passenger", meaning: "n. 乘客", root: "pass (經過) + enger (人)", phonetic: "/ˈpæs.ən.dʒɚ/" },
                { word: "patience", meaning: "n. 耐心", root: "pat (忍受) + ience", phonetic: "/ˈpeɪ.ʃəns/" },
                { word: "penalty", meaning: "n. 處罰；罰金", root: "pen (罰) + alty", phonetic: "/ˈpen.əl.ti/" },
                { word: "perceive", meaning: "v. 察覺；理解", root: "per (完) + ceive (拿) -> 完全掌握", phonetic: "/pɚˈsiːv/" },
                { word: "perform", meaning: "v. 表演；執行", root: "per (完) + form (形式) -> 完成形式", phonetic: "/pɚˈfɔːrm/" }
            ]
        },
        {
            id: "senior_P2", title: "高中 7000 單字 (P組 - 2)",
            words: [
                { word: "permanent", meaning: "adj. 永久的", root: "per (過) + man (留) + ent -> 留到最後", phonetic: "/ˈpɝː.mə.nənt/" },
                { word: "permission", meaning: "n. 許可", root: "per (過) + miss (送) + ion -> 讓其通過", phonetic: "/pɚˈmɪʃ.ən/" },
                { word: "persevere", meaning: "v. 堅持不懈", root: "per (完) + severe (嚴格) -> 嚴格貫徹", phonetic: "/ˌpɝː.səˈvɪr/" },
                { word: "perspective", meaning: "n. 觀點；透視", root: "per (穿) + spect (看) -> 穿透看本質", phonetic: "/pɚˈspek.tɪv/" },
                { word: "persuade", meaning: "v. 說服", root: "per (完) + suade (甜) -> 甜言蜜語完成目的", phonetic: "/pɚˈsweɪd/" },
                { word: "phenomenon", meaning: "n. 現象", root: "phen (顯示) + omenon", phonetic: "/fəˈnɑː.mə.nɑːn/" },
                { word: "philosophy", meaning: "n. 哲學", root: "phil (愛) + sophy (智慧)", phonetic: "/fɪˈlɑː.sə.fi/" },
                { word: "physical", meaning: "adj. 身體的；物理的", root: "phys (自然) + ical", phonetic: "/ˈfɪz.ɪ.kəl/" },
                { word: "pioneer", meaning: "n. 先驅 v. 開拓", root: "pion (腳) -> 走路的人", phonetic: "/ˌpaɪ.əˈnɪr/" },
                { word: "potential", meaning: "n. 潛能 adj. 潛在的", root: "pot (力) + ential", phonetic: "/poʊˈten.ʃəl/" }
            ]
        },
        {
            id: "senior_Q1", title: "高中 7000 單字 (Q組 - 1)",
            words: [
                { word: "qualification", meaning: "n. 資格；證照", root: "qual (質) + fic (做) + ation", phonetic: "/ˌkwɑː.lə.fəˈkeɪ.ʃən/" },
                { word: "quantity", meaning: "n. 數量", root: "quant (多) + ity", phonetic: "/ˈkwɑːn.t̬ə.t̬i/" },
                { word: "quarrel", meaning: "n./v. 爭吵", root: "來自「怨言」", phonetic: "/ˈkwɔːr.əl/" },
                { word: "quarter", meaning: "n. 四分之一", root: "quart (四) + er", phonetic: "/ˈkwɔːr.t̬ɚ/" },
                { word: "quest", meaning: "n. 探索；尋求", root: "quest (尋問)", phonetic: "/kwest/" },
                { word: "queue", meaning: "n. 隊列 v. 排隊", root: "來自「尾巴」", phonetic: "/kjuː/" },
                { word: "quick", meaning: "adj. 快的", root: "來自「活著」", phonetic: "/kwɪk/" },
                { word: "quiet", meaning: "adj. 安靜的", root: "quie (靜)", phonetic: "/ˈkwaɪ.ət/" },
                { word: "quit", meaning: "v. 辭職；放棄", root: "quie (靜) -> 恢復平靜/離開", phonetic: "/kwɪt/" },
                { word: "quote", meaning: "v. 引用；報價", root: "quot (多少) -> 標記數量", phonetic: "/kwoʊt/" }
            ]
        },
        {
            id: "senior_R1", title: "高中 7000 單字 (R組 - 1)",
            words: [
                { word: "radical", meaning: "adj. 激進的；根本的", root: "rad (根) + ical", phonetic: "/ˈræd.ɪ.kəl/" },
                { word: "random", meaning: "adj. 隨機的", root: "ran (跑) -> 四處跑的", phonetic: "/ˈræn.dəm/" },
                { word: "rational", meaning: "adj. 合理的；理性的", root: "rat (算/比率) + ional", phonetic: "/ˈræʃ.ən.əl/" },
                { word: "reaction", meaning: "n. 反應", root: "re (回) + act (做) + ion", phonetic: "/riˈæk.ʃən/" },
                { word: "reasonable", meaning: "adj. 合理的", root: "reason (理智) + able", phonetic: "/ˈriː.zən.ə.bəl/" },
                { word: "rebel", meaning: "n. 叛軍 v. 反抗", root: "re (反) + bel (戰爭)", phonetic: "/ˈreb.əl/" },
                { word: "recall", meaning: "v. 回想；召回", root: "re (回) + call (叫)", phonetic: "/rɪˈkɑːl/" },
                { word: "receive", meaning: "v. 接收", root: "re (回) + ceive (拿)", phonetic: "/rɪˈsiːv/" },
                { word: "recent", meaning: "adj. 最近的", root: "來自「新近」", phonetic: "/ˈriː.sənt/" },
                { word: "reckless", meaning: "adj. 魯莽的", root: "reck (顧慮) + less (無)", phonetic: "/ˈrek.ləs/" }
            ]
        },
        {
            id: "senior_R2", title: "高中 7000 單字 (R組 - 2)",
            words: [
                { word: "recognition", meaning: "n. 辨認；認可", root: "re (再) + cogn (知) + ition", phonetic: "/ˌrek.əɡˈnɪʃ.ən/" },
                { word: "recommend", meaning: "v. 推薦", root: "re (再) + com (共) + mend (手) -> 交付", phonetic: "/ˌrek.əˈmend/" },
                { word: "recover", meaning: "v. 康復；找回", root: "re (再) + cover (覆蓋) -> 重新蓋好", phonetic: "/rɪˈkʌv.ɚ/" },
                { word: "recruit", meaning: "v. 招募 n. 新兵", root: "re (再) + cru (生長) -> 再生長", phonetic: "/rɪˈkruːt/" },
                { word: "reduce", meaning: "v. 減少", root: "re (回) + duc (引) -> 引回來", phonetic: "/rɪˈduːs/" },
                { word: "reference", meaning: "n. 參考；推薦信", root: "re (回) + fer (帶) + ence -> 帶回信息", phonetic: "/ˈref.ɚ.əns/" },
                { word: "reflect", meaning: "v. 反射；深思", root: "re (回) + flect (彎) -> 折射回來", phonetic: "/rɪˈflekt/" },
                { word: "reform", meaning: "v./n. 改革", root: "re (再) + form (形式)", phonetic: "/rɪˈfɔːrm/" },
                { word: "refuse", meaning: "v. 拒絕", root: "re (回) + fuse (流) -> 流回來", phonetic: "/rɪˈfjuːz/" },
                { word: "regardless", meaning: "adv. 不管怎樣", root: "regard (看重) + less (無)", phonetic: "/rɪˈɡɑːrd.ləs/" }
            ]
        },
        {
            id: "senior_S1", title: "高中 7000 單字 (S組 - 1)",
            words: [
                { word: "sacrifice", meaning: "v./n. 犧牲；祭品", root: "sacr (神聖) + fic (做)", phonetic: "/ˈsæk.rə.faɪs/" },
                { word: "sanction", meaning: "n./v. 制裁；認可", root: "sanct (神聖) -> 法律的約束", phonetic: "/ˈsæŋk.ʃən/" },
                { word: "satisfaction", meaning: "n. 滿意", root: "satis (足夠) + fac (做) + tion", phonetic: "/ˌsæt̬.ɪsˈfæk.ʃən/" },
                { word: "scarcity", meaning: "n. 缺乏", root: "scarce (稀少) + ity", phonetic: "/ˈsker.sə.t̬i/" },
                { word: "scheme", meaning: "n. 計劃；方案", root: "來自「形狀/架構」", phonetic: "/skiːm/" },
                { word: "scholarship", meaning: "n. 獎學金", root: "scholar (學者) + ship (狀態)", phonetic: "/ˈskɑː.lɚ.ʃɪp/" },
                { word: "science", meaning: "n. 科學", root: "sci (知) + ence", phonetic: "/ˈsaɪ.əns/" },
                { word: "security", meaning: "n. 安全", root: "se (離) + cur (關心) -> 無須擔心", phonetic: "/səˈkjʊr.ə.t̬i/" },
                { word: "segment", meaning: "n. 部分；切片", root: "seg (切) + ment", phonetic: "/ˈseɡ.mənt/" },
                { word: "sensitive", meaning: "adj. 敏感的", root: "sens (感覺) + itive", phonetic: "/ˈsen.sə.t̬ɪv/" }
            ]
        },
        {
            id: "senior_S2", title: "高中 7000 單字 (S組 - 2)",
            words: [
                { word: "significant", meaning: "adj. 重大的；有意義的", root: "sign (標記) + fic (做) -> 值得標記的", phonetic: "/sɪɡˈnɪf.ə.kənt/" },
                { word: "similarity", meaning: "n. 相似點", root: "simil (同) + arity", phonetic: "/ˌsɪm.əˈler.ə.t̬i/" },
                { word: "sincere", meaning: "adj. 真誠的", root: "sin (無) + cere (蠟) -> 純淨無偽", phonetic: "/sɪnˈsɪr/" },
                { word: "situation", meaning: "n. 情況；處境", root: "situ (放) + ation -> 放置的位置", phonetic: "/ˌsɪtʃ.uˈeɪ.ʃən/" },
                { word: "skeptical", meaning: "adj. 持懷疑態度的", root: "來自「觀察/考慮」", phonetic: "/ˈskep.tɪ.kəl/" },
                { word: "solidarity", meaning: "n. 團結", root: "solid (結實) + arity", phonetic: "/ˌsɑː.lɪˈder.ə.t̬i/" },
                { word: "sophisticated", meaning: "adj. 複雜的；精緻的", root: "soph (智慧) -> 經過深思熟慮的", phonetic: "/səˈfɪs.tə.keɪ.t̬ɪd/" },
                { word: "spiritual", meaning: "adj. 精神的；心靈的", root: "spir (呼吸/呼吸) + itual", phonetic: "/ˈspɪr.ə.tʃu.əl/" },
                { word: "spontaneous", meaning: "adj. 自發的", root: "spon (承諾) -> 隨自己心意的", phonetic: "/spɑːnˈteɪ.ni.əs/" },
                { word: "stability", meaning: "n. 穩定", root: "sta (站) + bility", phonetic: "/stəˈbɪl.ə.t̬i/" }
            ]
        },
        {
            id: "senior_T1", title: "高中 7000 單字 (T組 - 1)",
            words: [
                { word: "tackle", meaning: "v. 處理；應對", root: "來自「抓取」", phonetic: "/ˈtæk.əl/" },
                { word: "tactful", meaning: "adj. 圓滑的；得體的", root: "tact (觸摸) + ful -> 有分寸的", phonetic: "/ˈtækt.fəl/" },
                { word: "talented", meaning: "adj. 有天賦的", root: "talent (天賦) + ed", phonetic: "/ˈtæl.ən.t̬ɪd/" },
                { word: "tangible", meaning: "adj. 有形的；具體的", root: "tang (觸摸) + ible", phonetic: "/ˈtæn.dʒə.bəl/" },
                { word: "technology", meaning: "n. 科技", root: "techn (工藝) + logy (學問)", phonetic: "/tekˈnɑː.lə.dʒi/" },
                { word: "temptation", meaning: "n. 誘惑", root: "tempt (嘗試/誘惑) + ation", phonetic: "/tempˈteɪ.ʃən/" },
                { word: "tendency", meaning: "n. 傾向", root: "tend (伸展) + ency", phonetic: "/ˈten.dən.si/" },
                { word: "terminal", meaning: "n. 航站 adj. 終點的", root: "termin (邊界) + al", phonetic: "/ˈtɝː.mə.nəl/" },
                { word: "territory", meaning: "n. 領土", root: "terr (地) + itory", phonetic: "/ˈter.ə.tɔːr.i/" },
                { word: "testify", meaning: "v. 證實；作證", root: "test (證人) + fy (使)", phonetic: "/ˈtes.tə.faɪ/" }
            ]
        },
        {
            id: "senior_T2", title: "高中 7000 單字 (T組 - 2)",
            words: [
                { word: "therapeutic", meaning: "adj. 治療的；有療效的", root: "therap (服務/治療) + eutic", phonetic: "/ˌθer.əˈpjuː.t̬ɪk/" },
                { word: "thrive", meaning: "v. 繁榮；興旺", root: "來自「抓取/獲利」", phonetic: "/θraɪv/" },
                { word: "tolerate", meaning: "v. 忍受；寬容", root: "tol (承受) + ate", phonetic: "/ˈtɑː.lə.reɪt/" },
                { word: "tragedy", meaning: "n. 悲劇", root: "trag (山羊) + edy -> 祭祀之歌", phonetic: "/ˈtrædʒ.ə.di/" },
                { word: "tranquility", meaning: "n. 寧靜；平靜", root: "trans (過) + quie (靜) -> 極致的靜", phonetic: "/træŋˈkwɪl.ə.t̬i/" },
                { word: "transfer", meaning: "v./n. 轉移；轉車", root: "trans (過) + fer (帶)", phonetic: "/trænsˈfɝː/" },
                { word: "transform", meaning: "v. 轉變；變形", root: "trans (過) + form (形式)", phonetic: "/trænsˈfɔːrm/" },
                { word: "transparent", meaning: "adj. 透明的", root: "trans (過) + par (出現) -> 透過去看", phonetic: "/trænsˈper.ənt/" },
                { word: "triumph", meaning: "n. 勝利", root: "來自「凱旋儀式」", phonetic: "/ˈtraɪ.əmf/" },
                { word: "tyranny", meaning: "n. 暴政", root: "tyran (暴君) + ny", phonetic: "/ˈtɪr.ən.i/" }
            ]
        },
        {
            id: "senior_U1", title: "高中 7000 單字 (U-V組)",
            words: [
                { word: "ultimate", meaning: "adj. 最終的；極致的", root: "ultim (最後) + ate", phonetic: "/ˈʌl.tə.mət/" },
                { word: "undergo", meaning: "v. 經歷；承受", root: "under (在下) + go (走)", phonetic: "/ˌʌn.dɚˈɡoʊ/" },
                { word: "unique", meaning: "adj. 獨特的", root: "uni (一) + que", phonetic: "/juːˈniːk/" },
                { word: "universal", meaning: "adj. 普遍的；宇宙的", root: "uni (一) + vers (轉) -> 轉為一體", phonetic: "/ˌjuː.nəˈvɝː.səl/" },
                { word: "update", meaning: "v. 更新", root: "up (上) + date (日期)", phonetic: "/ʌpˈdeɪt/" },
                { word: "urgent", meaning: "adj. 緊急的", root: "urg (推/逼) + ent", phonetic: "/ˈɝː.dʒənt/" },
                { word: "utilize", meaning: "v. 利用", root: "util (用) + ize", phonetic: "/ˈjuː.t̬əl.aɪz/" },
                { word: "vacancy", meaning: "n. 空缺", root: "vac (空) + ancy", phonetic: "/ˈveɪ.kən.si/" },
                { word: "vague", meaning: "adj. 模糊的", root: "來自「漫遊」 -> 無方向的", phonetic: "/veɪɡ/" },
                { word: "valid", meaning: "adj. 有效的；合法的", root: "val (強壯/力量) + id", phonetic: "/ˈvæl.ɪd/" }
            ]
        },
        {
            id: "senior_VWZ", title: "高中 7000 單字 (W-Z組)",
            words: [
                { word: "vulnerable", meaning: "adj. 易受傷的", root: "vuln (傷口) + able", phonetic: "/ˈvʌl.nɚ.ə.bəl/" },
                { word: "wander", meaning: "v. 漫遊；徘徊", root: "來自「轉動/走動」", phonetic: "/ˈwɑːn.dɚ/" },
                { word: "warranty", meaning: "n. 保固；保證", root: "來自「防禦/保衛」", phonetic: "/ˈwɔːr.ən.ti/" },
                { word: "welfare", meaning: "n. 福利", root: "well (好) + fare (走) -> 過得好", phonetic: "/ˈwel.fer/" },
                { word: "wisdom", meaning: "n. 智慧", root: "wise (明智) + dom (狀態)", phonetic: "/ˈwɪz.dəm/" },
                { word: "withdraw", meaning: "v. 撤退；提款", root: "with (回) + draw (拉)", phonetic: "/wɪðˈdrɑː/" },
                { word: "witness", meaning: "v. 目擊 n. 證人", root: "wit (知) + ness", phonetic: "/ˈwɪt.nəs/" },
                { word: "worship", meaning: "v./n. 崇拜；禮拜", root: "worth (價值) + ship (狀態)", phonetic: "/ˈwɝː.ʃɪp/" },
                { word: "yield", meaning: "v. 產生；屈服", root: "來自「支付/回報」", phonetic: "/jiːld/" },
                { word: "zeal", meaning: "n. 熱忱", root: "來自「熱情」", phonetic: "/ziːl/" }
            ]
        }
    ] // 這裡關閉 senior 陣列
}; // 這裡關閉 QuestionBank 物件

    
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
        reading: {
            id: "t_r_01",
            article: "Biomimicry involves studying nature's best ideas and imitating them to solve human problems. For example, the design of the famous bullet train in Japan was inspired by the beak of the kingfisher bird, making it 10% faster and much quieter.",
            questions: [
                { id: "tr_q1", text: "1. What is biomimicry?", options: {A:"Studying birds", B:"Imitating nature to solve problems", C:"Building faster trains", D:"Protecting the environment"}, answer: "B", points: 15 },
                { id: "tr_q2", text: "2. How did the kingfisher bird inspire the bullet train?", options: {A:"It made the train fly", B:"It helped reduce noise and increase speed", C:"It changed the train's color", D:"It made the train cheaper"}, answer: "B", points: 15 }
            ]
        },
        listening_hard: {
            id: "t_lh_01",
            audioScript: "Welcome to Advanced Neuroscience. Today we'll discuss neuroplasticity—the brain's ability to reorganize itself by forming new neural connections throughout life. This challenges the old dogma that the adult brain is entirely hard-wired.",
            questions: [
                { id: "tlh_q1", text: "1. What is the main topic of the lecture?", options: {A:"Brain surgery techniques", B:"Neuroplasticity and neural connections", C:"Childhood education", D:"The history of neuroscience"}, answer: "B", points: 15 },
                { id: "tlh_q2", text: "2. What old dogma does neuroplasticity challenge?", options: {A:"That the brain requires sleep", B:"That the adult brain is entirely hard-wired", C:"That neurons die with age", D:"That the brain is a muscle"}, answer: "B", points: 15 }
            ]
        },
        listening_easy: {
            id: "t_le_01",
            audioScript: "Attention students. The library will close at 8 PM tonight for maintenance. It will reopen tomorrow at 8 AM. Please use the student center if you need a place to study late.",
            questions: [
                { id: "tle_q1", text: "1. Why is the library closing early?", options: {A:"For a holiday", B:"For maintenance", C:"Staff shortage", D:"Weather emergency"}, answer: "B", points: 10 },
                { id: "tle_q2", text: "2. When will it reopen?", options: {A:"Tonight at 10 PM", B:"Tomorrow at 8 AM", C:"Next Monday", D:"Tomorrow at noon"}, answer: "B", points: 10 }
            ]
        },
        speaking: {
            id: "t_s_01",
            article: "True peace does not mean being in a place where there is no noise or trouble. It means to be in the midst of those things and still be calm in your heart.",
            audioScript: "True peace does not mean being in a place where there is no noise or trouble. It means to be in the midst of those things and still be calm in your heart.",
            questions: [
                { id: "ts_q1", text: "請點擊左側播放聆聽，並誠實大聲跟讀三次。", options: {A:"是的，我已用心完成跟讀修行。", B:"我還需要再練習一下。"}, answer: "A", points: 30 }
            ]
        },
        writing: {
            id: "t_w_01",
            questions: [
                { 
                    id: "tw_q1", text: "實用 Email 寫作：\n請寫一封信給教授，說明你週末要參加偏鄉志工服務，請求報告延期兩天繳交。(滿分30分)", type: "composition",
                    answer: "【評分標準】清楚說明原因、禮貌請求、字數適中。", points: 30
                }
            ]
        }
    }, // <-- 就是這裡漏了逗號！

    // ==========================================
    // 模組四：多益職場考場專用 (供 exam_toeic.html 讀取)
    // ==========================================
    toeic: {
        part1: [
            {
                id: "toeic_p1_01",
                imageDesc: "[圖片情境：一位男士正坐在辦公桌前打字，桌上有一杯咖啡]",
                audioScript: "(A) He is drinking a cup of coffee. (B) He is typing on a keyboard. (C) He is leaving the office. (D) He is reading a newspaper.",
                options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, 
                answer: "B", points: 5
            }
        ],
        part2: [
            {
                id: "toeic_p2_01",
                audioScript: "When is the project proposal due? \n(A) By next Friday. \n(B) Yes, I did it. \n(C) Mr. Smith is the manager.",
                options: {A:"(A)", B:"(B)", C:"(C)"}, 
                answer: "A", points: 5
            }
        ],
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
        part5: [
            { id: "toeic_p5_01", text: "5. The new marketing strategy was highly _____ in increasing our overall sales last quarter.", options: {A:"effect", B:"effective", C:"effectively", D:"effectiveness"}, answer: "B", points: 5 },
            { id: "toeic_p5_02", text: "6. All employees are required to submit their expense reports _____ the end of the month.", options: {A:"on", B:"in", C:"at", D:"by"}, answer: "D", points: 5 }
        ],
        part6: [
            {
                id: "toeic_p6_01",
                article: "Dear Mr. Davis,\nWe are pleased to inform you that your application for the position of Senior Analyst has been __(7)__. Please come to our main office next Monday at 9 AM for the orientation session.\nSincerely,\nHuman Resources",
                questions: [
                    { id: "tp6_q1", text: "7.", options: {A:"accept", B:"accepted", C:"accepting", D:"accepts"}, answer: "B", points: 5 }
                ]
            }
        ],
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
};

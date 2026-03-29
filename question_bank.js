// question_bank.js
// 般若系統 - 全域核心題庫 (第一回：中高難度全真模擬考)

const QuestionBank = {
    // ---------------------------------------------------------
    // 第一部分：詞彙題 (15題)
    // ---------------------------------------------------------
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
            { id: "v_s_015", text: "15. Her _____ performance in the national speech contest won her a scholarship to study abroad.", options: {A:"aggressive", B:"prominent", C:"outstanding", D:"conservative"}, answer: "C", points: 2 }
        ]
    },

    // ---------------------------------------------------------
    // 第二部分：綜合測驗 (1篇文章，5題)
    // ---------------------------------------------------------
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
            }
        ]
    },

    // ---------------------------------------------------------
    // 第三部分：文意選填 (1篇文章，10題)
    // ---------------------------------------------------------
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
            }
        ]
    },

    // ---------------------------------------------------------
    // 第四部分：篇章結構 (1篇文章，4題)
    // ---------------------------------------------------------
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
            }
        ]
    },

    // ---------------------------------------------------------
    // 第五部分：閱讀測驗 (1篇文章，4題)
    // ---------------------------------------------------------
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
            }
        ]
    },

    // ---------------------------------------------------------
    // 第六部分：非選擇題 (翻譯與作文)
    // ---------------------------------------------------------
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
            }
        ]
    }
};

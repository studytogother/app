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
            { id: "v_s_030", text: "30. A good leader should possess not only intelligence but also the _____ to listen to differing opinions.", options: {A:"arrogance", B:"wisdom", C:"greed", D:"prejudice"}, answer: "B", points: 2 },
            { id: "v_s_041", text: "41. The architect's design perfectly integrates modern technology with traditional _____, creating a harmonious living space.", options: {A:"aesthetics", B:"statistics", C:"diagnostics", D:"genetics"}, answer: "A", points: 2 },
        { id: "v_s_042", text: "42. Many psychological problems can be traced back to a lack of _____ connections with other human beings.", options: {A:"authentic", B:"superficial", C:"synthetic", D:"ambiguous"}, answer: "A", points: 2 },
        { id: "v_s_043", text: "43. The master taught his students to _____ the nature of their own minds before trying to change the world.", options: {A:"contemplate", B:"manipulate", C:"devastate", D:"intimidate"}, answer: "A", points: 2 },
        { id: "v_s_044", text: "44. Despite the extreme difficulties, the community showed incredible _____ and quickly rebuilt their homes.", options: {A:"arrogance", B:"resilience", C:"hesitation", D:"ignorance"}, answer: "B", points: 2 },
        { id: "v_s_045", text: "45. We must learn to let go of our _____ to material wealth if we wish to find true inner peace.", options: {A:"attachment", B:"aversion", C:"indifference", D:"opposition"}, answer: "A", points: 2 },
        { id: "v_s_046", text: "46. The philosopher argued that the ego is merely an _____, a construct of the mind rather than a solid reality.", options: {A:"illusion", B:"obligation", C:"institution", D:"alliance"}, answer: "A", points: 2 },
        { id: "v_s_047", text: "47. By taking a deep breath, she was able to _____ the sudden surge of anger and respond calmly.", options: {A:"alleviate", B:"aggravate", C:"provoke", D:"stimulate"}, answer: "A", points: 2 },
        { id: "v_s_048", text: "48. The beauty of the cherry blossoms lies in their _____ nature; they bloom brilliantly but fall within days.", options: {A:"ephemeral", B:"permanent", C:"eternal", D:"static"}, answer: "A", points: 2 },
        { id: "v_s_049", text: "49. Practicing daily meditation can help to _____ a sense of clarity and focus in our chaotic lives.", options: {A:"cultivate", B:"eliminate", C:"eradicate", D:"terminate"}, answer: "A", points: 2 },
        { id: "v_s_050", text: "50. True _____ involves not only understanding another's pain but also taking action to help relieve it.", options: {A:"compassion", B:"hostility", C:"jealousy", D:"prejudice"}, answer: "A", points: 2 },
        { id: "v_s_051", text: "51. In Taoist philosophy, the concept of 'Wu Wei' does not mean doing nothing, but rather acting in _____ with the natural flow of the universe.", options: {A:"conflict", B:"harmony", C:"jeopardy", D:"isolation"}, answer: "B", points: 2 },
        { id: "v_s_052", text: "52. The constant pursuit of external validation can deeply _____ one's sense of self-worth and inner peace.", options: {A:"jeopardize", B:"illuminate", C:"fascinate", D:"compensate"}, answer: "A", points: 2 },
        { id: "v_s_053", text: "53. After months of intense meditation, the monk finally experienced a _____ shift in his understanding of reality.", options: {A:"trivial", B:"profound", C:"superficial", D:"fragile"}, answer: "B", points: 2 },
        { id: "v_s_054", text: "54. The old oak tree, having survived countless storms, stands as a powerful _____ for resilience and strength.", options: {A:"metaphor", B:"obstacle", C:"illusion", D:"hierarchy"}, answer: "A", points: 2 },
        { id: "v_s_055", text: "55. To maintain a healthy ecosystem, it is _____ to protect the indigenous plants and animals of the region.", options: {A:"optional", B:"imperative", C:"obsolete", D:"ambiguous"}, answer: "B", points: 2 },
        { id: "v_s_056", text: "56. The master advised his disciples not to be bound by rigid _____, but to keep their minds open to truth.", options: {A:"dogma", B:"compassion", C:"sustainability", D:"hospitality"}, answer: "A", points: 2 },
        { id: "v_s_057", text: "57. Rather than trying to _____ the natural environment to suit our needs, we should learn to adapt to it.", options: {A:"manipulate", B:"appreciate", C:"conserve", D:"alleviate"}, answer: "A", points: 2 },
        { id: "v_s_058", text: "58. The sudden loss of wealth made him realize that material possessions are purely _____ and cannot guarantee happiness.", options: {A:"ephemeral", B:"eternal", C:"lucrative", D:"tangible"}, answer: "A", points: 2 },
        { id: "v_s_059", text: "59. By engaging in acts of altruism, we can gradually _____ the deep-rooted selfishness within our ego.", options: {A:"diminish", B:"aggravate", C:"multiply", D:"prolong"}, answer: "A", points: 2 },
        { id: "v_s_060", text: "60. The architect paid _____ attention to every detail of the sanctuary, ensuring a perfectly peaceful atmosphere.", options: {A:"meticulous", B:"reckless", C:"casual", D:"indifferent"}, answer: "A", points: 2 },
        { id: "v_s_061", text: "61. The old paradigm of constant economic growth is becoming _____, as we now face severe ecological limits.", options: {A:"obsolete", B:"optimum", C:"lucrative", D:"tangible"}, answer: "A", points: 2 },
        { id: "v_s_062", text: "62. To cultivate true wisdom, one must not merely accumulate knowledge, but also _____ the ego that constantly seeks to be right.", options: {A:"nullify", B:"nurture", C:"offset", D:"oblige"}, answer: "A", points: 2 },
        { id: "v_s_063", text: "63. The existence of suffering in a world supposedly created by a benevolent force is a classic _____ discussed by philosophers.", options: {A:"paradigm", B:"paradox", C:"parameter", D:"predecessor"}, answer: "B", points: 2 },
        { id: "v_s_064", text: "64. Our ability to _____ reality is often heavily filtered by our past experiences and deep-rooted prejudices.", options: {A:"perceive", B:"perish", C:"prescribe", D:"preclude"}, answer: "A", points: 2 },
        { id: "v_s_065", text: "65. Despite facing numerous rejections, the young artist remained _____ in her pursuit of capturing the essence of stillness.", options: {A:"passive", B:"persistent", C:"partial", D:"preliminary"}, answer: "B", points: 2 },
        { id: "v_s_066", text: "66. His explanation for his sudden disappearance was hardly _____, leaving everyone in the room highly suspicious.", options: {A:"plausible", B:"pragmatic", C:"redundant", D:"relevant"}, answer: "A", points: 2 },
        { id: "v_s_067", text: "67. In order to resolve the deep conflict, both sides must learn to _____ their differences and focus on their shared humanity.", options: {A:"reconcile", B:"refute", C:"radicalize", D:"resurrect"}, answer: "A", points: 2 },
        { id: "v_s_068", text: "68. A truly minimalist lifestyle involves eliminating all _____ possessions that do not serve a clear purpose or bring joy.", options: {A:"rational", B:"redundant", C:"resilient", D:"relevant"}, answer: "B", points: 2 },
        { id: "v_s_069", text: "69. The scent of burning sandalwood began to _____ the entire meditation hall, creating a deeply calming atmosphere.", options: {A:"permeate", B:"precede", C:"perish", D:"persist"}, answer: "A", points: 2 },
        { id: "v_s_070", text: "70. To avoid further damage to the delicate ecosystem, it is necessary to establish strict _____ for the upcoming construction project.", options: {A:"parameters", B:"paradoxes", C:"paradigms", D:"perspectives"}, answer: "A", points: 2 },
        { id: "v_s_071", text: "71. In the digital age, smartphones have become so _____ that it is rare to find someone without one.", options: {A:"ubiquitous", B:"tentative", C:"trivial", D:"vulnerable"}, answer: "A", points: 2 },
        { id: "v_s_072", text: "72. A true sage knows when to speak and when to _____ judgment, allowing the truth to reveal itself naturally.", options: {A:"withhold", B:"validate", C:"utilize", D:"transcend"}, answer: "A", points: 2 },
        { id: "v_s_073", text: "73. The committee reached a _____ decision to open-source the software, making it freely available to the public.", options: {A:"unanimous", B:"volatile", C:"redundant", D:"implicit"}, answer: "A", points: 2 },
        { id: "v_s_074", text: "74. Rather than seeking comfort, we must courageously face our _____ emotions to truly heal from past traumas.", options: {A:"vulnerable", B:"viable", C:"versatile", D:"tangible"}, answer: "A", points: 2 },
        { id: "v_s_075", text: "75. The developer created a highly _____ application that can seamlessly adapt to mobile phones, tablets, and desktops.", options: {A:"versatile", B:"unprecedented", C:"obsolete", D:"mandatory"}, answer: "A", points: 2 },
        { id: "v_s_076", text: "76. Before releasing the new core update, the engineers must rigorously _____ that there are no security flaws.", options: {A:"verify", B:"terminate", C:"alleviate", D:"fluctuate"}, answer: "A", points: 2 },
        { id: "v_s_077", text: "77. Deep meditation allows practitioners to _____ the boundaries of the ego and experience a sense of universal unity.", options: {A:"transcend", B:"trigger", C:"tolerate", D:"transition"}, answer: "A", points: 2 },
        { id: "v_s_078", text: "78. Without a solid foundation of logic and facts, his emotional arguments were not considered a _____ approach to the legal dispute.", options: {A:"viable", B:"transient", C:"zealous", D:"trivial"}, answer: "A", points: 2 },
        { id: "v_s_079", text: "79. The sheer volume of data generated by global internet users daily is on an _____ scale in human history.", options: {A:"unprecedented", B:"ubiquitous", C:"underlying", D:"unconscious"}, answer: "A", points: 2 },
        { id: "v_s_080", text: "80. It is a common misconception that strict discipline restricts freedom; in reality, it is the exact trait that _____ true independence.", options: {A:"warrants", B:"withholds", C:"yields", D:"vanishes"}, answer: "A", points: 2 },
        { id: "v_s_081", text: "81. The human brain is incredibly _____, capable of rewiring its neural pathways in response to new experiences.", options: {A:"plastic", B:"rigid", C:"fragile", D:"static"}, answer: "A", points: 2 },
        { id: "v_s_082", text: "82. To achieve mental clarity, one must consciously filter out the _____ information that floods our screens daily.", options: {A:"profound", B:"extraneous", C:"vital", D:"inherent"}, answer: "B", points: 2 },
        { id: "v_s_083", text: "83. The speaker's _____ argument successfully dismantled the opposing side's deeply flawed logic.", options: {A:"cogent", B:"ambiguous", C:"trivial", D:"vague"}, answer: "A", points: 2 },
        { id: "v_s_084", text: "84. True empathy requires us to temporarily suspend our own judgments and completely _____ ourselves in another's perspective.", options: {A:"immerse", B:"isolate", C:"alienate", D:"withdraw"}, answer: "A", points: 2 },
        { id: "v_s_085", text: "85. The sudden economic downturn served as a harsh reminder of the _____ nature of financial stability.", options: {A:"precarious", B:"eternal", C:"absolute", D:"secure"}, answer: "A", points: 2 },
        { id: "v_s_086", text: "86. Instead of seeking revenge, the elder chose to _____ the offender, breaking the endless cycle of hatred.", options: {A:"pardon", B:"provoke", C:"condemn", D:"harass"}, answer: "A", points: 2 },
        { id: "v_s_087", text: "87. The minimalist design of the website intentionally omits any _____ elements that might distract the user.", options: {A:"superfluous", B:"essential", C:"integral", D:"crucial"}, answer: "A", points: 2 },
        { id: "v_s_088", text: "88. Many spiritual traditions emphasize that the ego is a powerful _____, preventing us from seeing our true nature.", options: {A:"hindrance", B:"catalyst", C:"asset", D:"virtue"}, answer: "A", points: 2 },
        { id: "v_s_089", text: "89. By engaging in deep, diaphragmatic breathing, you can quickly _____ the physical symptoms of anxiety.", options: {A:"mitigate", B:"amplify", C:"trigger", D:"escalate"}, answer: "A", points: 2 },
        { id: "v_s_090", text: "90. The ancient text offers a _____ exploration of the relationship between human consciousness and the universe.", options: {A:"comprehensive", B:"superficial", C:"narrow", D:"shallow"}, answer: "A", points: 2 },
        { id: "v_s_091", text: "91. In a highly interconnected ecosystem, the extinction of a single species can cause a _____ effect throughout the food web.", options: {A:"cascading", B:"stagnant", C:"isolated", D:"negligible"}, answer: "A", points: 2 },
        { id: "v_s_092", text: "92. Consumer culture often promotes the false narrative that the _____ of more goods equates to greater happiness.", options: {A:"accumulation", B:"distribution", C:"reduction", D:"elimination"}, answer: "A", points: 2 },
        { id: "v_s_093", text: "93. The philosopher argued that true freedom is not the absence of rules, but the _____ acceptance of moral responsibility.", options: {A:"voluntary", B:"coerced", C:"reluctant", D:"mandatory"}, answer: "A", points: 2 },
        { id: "v_s_094", text: "94. The continuous destruction of the rainforests will inevitably _____ the global climate crisis.", options: {A:"exacerbate", B:"alleviate", C:"resolve", D:"soothe"}, answer: "A", points: 2 },
        { id: "v_s_095", text: "95. To build a sustainable future, we must transition from a linear economy of waste to a _____ one of reuse.", options: {A:"circular", B:"disposable", C:"temporary", D:"fragile"}, answer: "A", points: 2 },
        { id: "v_s_096", text: "96. The monk's daily routine is characterized by a strict _____ to silence and contemplative prayer.", options: {A:"adherence", B:"resistance", C:"aversion", D:"indifference"}, answer: "A", points: 2 },
        { id: "v_s_097", text: "97. The concept of 'biomimicry' involves developing technological innovations that _____ the intricate designs found in nature.", options: {A:"emulate", B:"destroy", C:"ignore", D:"pollute"}, answer: "A", points: 2 },
        { id: "v_s_098", text: "98. When faced with overwhelming stress, our cognitive abilities often become _____, leading to poor decision-making.", options: {A:"impaired", B:"enhanced", C:"sharpened", D:"elevated"}, answer: "A", points: 2 },
        { id: "v_s_099", text: "99. The organization's primary objective is to _____ marginalized communities through education and resource sharing.", options: {A:"empower", B:"exploit", C:"suppress", D:"alienate"}, answer: "A", points: 2 },
        { id: "v_s_100", text: "100. It is crucial to approach complex global issues with a sense of humility and a willingness to _____ our own biases.", options: {A:"examine", B:"reinforce", C:"justify", D:"conceal"}, answer: "A", points: 2 },
        { id: "v_s_101", text: "101. The ability to remain completely _____ in the present moment is the core foundation of mindfulness practice.", options: {A:"anchored", B:"distracted", C:"detached", D:"drifting"}, answer: "A", points: 2 },
        { id: "v_s_102", text: "102. Her relentless pursuit of perfection became a psychological _____, preventing her from appreciating her own progress.", options: {A:"fetter", B:"catalyst", C:"virtue", D:"inspiration"}, answer: "A", points: 2 },
        { id: "v_s_103", text: "103. The open-source community operates on a principle of _____ sharing, where knowledge is freely accessible to all.", options: {A:"egalitarian", B:"hierarchical", C:"exclusive", D:"restrictive"}, answer: "A", points: 2 },
        { id: "v_s_104", text: "104. In an age of digital noise, silence is no longer an empty void, but a highly _____ state of mental sanctuary.", options: {A:"coveted", B:"dreaded", C:"ignored", D:"despised"}, answer: "A", points: 2 },
        { id: "v_s_105", text: "105. The Zen master emphasized that enlightenment is not a distant goal to achieve, but an _____ quality of the mind to be uncovered.", options: {A:"intrinsic", B:"extraneous", C:"artificial", D:"acquired"}, answer: "A", points: 2 },
        { id: "v_s_106", text: "106. When engaging in a debate, one must avoid resorting to _____ attacks and focus entirely on the logical merits of the argument.", options: {A:"ad hominem", B:"pragmatic", C:"empirical", D:"objective"}, answer: "A", points: 2 },
        { id: "v_s_107", text: "107. The sudden realization of the universe's vastness can evoke a profound sense of _____, shrinking our ego to its proper size.", options: {A:"awe", B:"arrogance", C:"apathy", D:"greed"}, answer: "A", points: 2 },
        { id: "v_s_108", text: "108. Rather than viewing nature as a resource to be exploited, deep ecology advocates for a _____ relationship with the Earth.", options: {A:"symbiotic", B:"parasitic", C:"destructive", D:"dominant"}, answer: "A", points: 2 },
        { id: "v_s_109", text: "109. The constant influx of push notifications can severely _____ our ability to engage in deep, uninterrupted work.", options: {A:"fragment", B:"consolidate", C:"enhance", D:"sustain"}, answer: "A", points: 2 },
        { id: "v_s_110", text: "110. To heal from profound grief, one must gently _____ the painful emotions rather than violently suppressing them.", options: {A:"process", B:"ignore", C:"aggravate", D:"deny"}, answer: "A", points: 2 },
        { id: "v_s_111", text: "111. The core of Buddhist philosophy rests on the understanding that all conditioned phenomena are inherently _____.", options: {A:"impermanent", B:"eternal", C:"static", D:"immutable"}, answer: "A", points: 2 },
        { id: "v_s_112", text: "112. True aesthetic elegance is often found not in complex ornamentation, but in the _____ beauty of simple vector lines.", options: {A:"unadulterated", B:"cluttered", C:"chaotic", D:"polluted"}, answer: "A", points: 2 },
        { id: "v_s_113", text: "113. By releasing our psychological _____ to specific outcomes, we free ourselves from a tremendous amount of anxiety.", options: {A:"attachment", B:"indifference", C:"hostility", D:"aversion"}, answer: "A", points: 2 },
        { id: "v_s_114", text: "114. The software was meticulously designed to ensure there are absolutely no _____ code blocks that could slow down the system.", options: {A:"redundant", B:"crucial", C:"vital", D:"essential"}, answer: "A", points: 2 },
        { id: "v_s_115", text: "115. A mind clouded by bias and preconceptions is utterly _____ of perceiving the truth as it actually is.", options: {A:"incapable", B:"capable", C:"desirous", D:"willing"}, answer: "A", points: 2 },
        { id: "v_s_116", text: "116. The concept of 'No-Self' (Anatman) does not mean you do not exist, but rather that your identity is fluid and _____.", options: {A:"dynamic", B:"rigid", C:"permanent", D:"stagnant"}, answer: "A", points: 2 },
        { id: "v_s_117", text: "117. In the face of intense public criticism, the ethical developer remained completely _____ and refused to insert ads into the app.", options: {A:"unwavering", B:"hesitant", C:"compliant", D:"submissive"}, answer: "A", points: 2 },
        { id: "v_s_118", text: "118. Fasting is not merely a physical deprivation; it is a profound spiritual exercise designed to _____ the mind from sensory overload.", options: {A:"purify", B:"contaminate", C:"clutter", D:"distract"}, answer: "A", points: 2 },
        { id: "v_s_119", text: "119. The ultimate goal of contemplative practice is to completely _____ the illusion of separation between oneself and the universe.", options: {A:"dissolve", B:"reinforce", C:"construct", D:"maintain"}, answer: "A", points: 2 },
        { id: "v_s_120", text: "120. When we recognize that every ending is simultaneously a new beginning, we can face life's transitions with profound _____.", options: {A:"equanimity", B:"despair", C:"panic", D:"resentment"}, answer: "A", points: 2 },
        { id: "v_s_121", text: "121. The ancient philosopher argued that human language is fundamentally _____ when trying to describe the absolute, unconditioned truth of the universe.", options: {A:"inadequate", B:"eloquent", C:"ubiquitous", D:"indigenous"}, answer: "A", points: 2 },
        { id: "v_s_122", text: "122. To reach a state of pure awareness, one must systematically _____ all the cognitive biases and dogmas acquired since childhood.", options: {A:"dismantle", B:"assimilate", C:"aggregate", D:"manifest"}, answer: "A", points: 2 },
        { id: "v_s_123", text: "123. The Zen master's teachings were often considered _____, completely baffling to the logical mind but profoundly resonant to the intuitive heart.", options: {A:"paradoxical", B:"empirical", C:"compatible", D:"homogeneous"}, answer: "A", points: 2 },
        { id: "v_s_124", text: "124. We suffer deeply because we falsely perceive our fluid, ever-changing consciousness as a solid and _____ entity.", options: {A:"autonomous", B:"ephemeral", C:"transient", D:"vulnerable"}, answer: "A", points: 2 },
        { id: "v_s_125", text: "125. The illusion of separation is the root of all ecological crises; in reality, every organism is _____ woven into the web of life.", options: {A:"inextricably", B:"marginally", C:"randomly", D:"superficially"}, answer: "A", points: 2 },
        { id: "v_s_126", text: "126. A truly _____ society does not merely tolerate differences, but actively integrates diverse perspectives into a harmonious whole.", options: {A:"inclusive", B:"dogmatic", C:"subordinate", D:"hypocritical"}, answer: "A", points: 2 },
        { id: "v_s_127", text: "127. The ego constantly seeks to _____ its own existence by seeking external validation, wealth, and perceived superiority.", options: {A:"validate", B:"nullify", C:"obliterate", D:"alleviate"}, answer: "A", points: 2 },
        { id: "v_s_128", text: "128. By observing the breath without any _____ to control it, the meditator learns the art of profound surrender.", options: {A:"compulsion", B:"empathy", C:"consensus", D:"equilibrium"}, answer: "A", points: 2 },
        { id: "v_s_129", text: "129. The concept of absolute nothingness in Eastern thought is not a dark void, but a highly _____ state of infinite potential.", options: {A:"dynamic", B:"obsolete", C:"mundane", D:"trivial"}, answer: "A", points: 2 },
        { id: "v_s_130", text: "130. True compassion is completely _____, arising naturally without any hidden agenda or expectation of reciprocity.", options: {A:"spontaneous", B:"deliberate", C:"tentative", D:"mandatory"}, answer: "A", points: 2 }

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
            id: "c_s_005",
            article: "In a world characterized by constant noise and digital distractions, the concept of a 'soundscape' has become increasingly important. A soundscape refers to the acoustic environment as perceived by humans. While urban areas are often dominated by the harsh noises of traffic and construction, natural environments offer a symphony of wind, water, and wildlife. Research suggests that exposure to natural soundscapes can significantly __1__ stress levels and improve cognitive function. __2__, prolonged exposure to urban noise pollution has been linked to anxiety and cardiovascular diseases. Therefore, urban planners are now seeking ways to design cities that incorporate quiet zones and green spaces. These areas serve as sanctuaries where people can escape the __3__ of city life. By intentionally tuning into our auditory surroundings, we can cultivate a deeper sense of mindfulness. Listening to the rain or the rustling of leaves __4__ us to anchor our attention in the present moment. Ultimately, preserving natural soundscapes is not just an environmental issue; it is __5__ for maintaining our psychological well-being.",
            questions: [
                { id: "c_q_26", text: "1.", options: {A:"elevate", B:"reduce", C:"multiply", D:"sustain"}, answer: "B", points: 2 },
                { id: "c_q_27", text: "2.", options: {A:"Conversely", B:"Furthermore", C:"Similarly", D:"Consequently"}, answer: "A", points: 2 },
                { id: "c_q_28", text: "3.", options: {A:"tranquility", B:"chaos", C:"harmony", D:"serenity"}, answer: "B", points: 2 },
                { id: "c_q_29", text: "4.", options: {A:"allowing", B:"allows", C:"allow", D:"allowed"}, answer: "B", points: 2 },
                { id: "c_q_30", text: "5.", options: {A:"trivial", B:"optional", C:"essential", D:"detrimental"}, answer: "C", points: 2 }
            ]
        },
            {
            id: "c_s_006",
            article: "Vipassana, which means to see things as they really are, is one of India's most ancient techniques of meditation. It was rediscovered by Gotama Buddha more than 2500 years ago and was taught by him as a universal remedy for universal ills. This non-sectarian technique aims for the total eradication of mental impurities and the resulting highest happiness of full liberation. __1__ focusing on religious dogma, Vipassana is an art of living. The practice involves observing the natural breath to concentrate the mind. With a sharpened awareness, one proceeds to observe the changing nature of body and mind and experiences the universal truths of impermanence, suffering, and egolessness. This truth-realization by direct experience is the process of purification. The entire path is a universal remedy for universal problems and has nothing to do with any organized religion or sectarianism. For this reason, it can be freely practiced by everyone, __2__ race, community or religion, and will prove equally beneficial to all. __3__, the technique requires a strict code of discipline during the initial ten-day retreat. Students must observe Noble Silence, meaning no communication with fellow meditators, __4__ them to turn their attention entirely inward. Through this rigorous practice, individuals often emerge with a __5__ understanding of their own mental habits.",
            questions: [
                { id: "c_q_31", text: "1.", options: {A:"Due to", B:"Rather than", C:"By means of", D:"In addition to"}, answer: "B", points: 2 },
                { id: "c_q_32", text: "2.", options: {A:"regardless of", B:"depending on", C:"in spite of", D:"according to"}, answer: "A", points: 2 },
                { id: "c_q_33", text: "3.", options: {A:"Therefore", B:"Moreover", C:"However", D:"Otherwise"}, answer: "C", points: 2 },
                { id: "c_q_34", text: "4.", options: {A:"allow", B:"allowed", C:"allowing", D:"to allow"}, answer: "C", points: 2 },
                { id: "c_q_35", text: "5.", options: {A:"superficial", B:"profound", C:"trivial", D:"vague"}, answer: "B", points: 2 }
            ]
        },
            {
            id: "c_s_007",
            article: "In traditional Japanese architecture, the concept of 'Ma' translates to 'gap,' 'space,' or 'pause.' It is the fundamental belief that empty space is not an absence of things, but rather a profound presence that gives shape and meaning to the whole. __1__ a room stuffed with furniture, a traditional tearoom utilizes 'Ma' to create a sense of vastness within a confined area. This concept extends far beyond architecture; it deeply influences music, conversation, and daily life. In a piece of music, the silence between the notes is just as important as the notes themselves, __2__ the rhythm to breathe. In human relationships, a comfortable silence between two people demonstrates a deep, unspoken connection. However, modern society is terrified of 'Ma.' We constantly fill every spare moment with digital noise, scrolling through feeds to avoid the discomfort of emptiness. __3__, we lose the space needed for our minds to rest and for true creativity to emerge. To reclaim our inner peace, we must intentionally cultivate 'Ma' in our lives. __4__ scheduling every minute of the day, we should leave deliberate pauses. By embracing the void, we realize that emptiness is not a void to be filled, but a canvas of infinite __5__.",
            questions: [
                { id: "c_q_36", text: "1.", options: {A:"Similar to", B:"Unlike", C:"Regardless of", D:"Because of"}, answer: "B", points: 2 },
                { id: "c_q_37", text: "2.", options: {A:"allow", B:"allowed", C:"allowing", D:"to allow"}, answer: "C", points: 2 },
                { id: "c_q_38", text: "3.", options: {A:"As a result", B:"Nevertheless", C:"On the contrary", D:"Fortunately"}, answer: "A", points: 2 },
                { id: "c_q_39", text: "4.", options: {A:"In favor of", B:"Instead of", C:"By means of", D:"In addition to"}, answer: "B", points: 2 },
                { id: "c_q_40", text: "5.", options: {A:"limitations", B:"possibilities", C:"obstacles", D:"sorrows"}, answer: "B", points: 2 }
            ]
        },
            {
            id: "c_s_008",
            article: "The philosophy of open-source software development closely mirrors the ancient practice of 'Dana,' or selfless giving. In an open-source community, developers contribute their code voluntarily, allowing anyone to use, modify, and distribute it without any copyright disputes or financial barriers. __1__ keeping their innovations locked behind paywalls for personal profit, these creators focus on the collective elevation of human knowledge. This altruistic approach creates a system with incredibly low entropy, where bugs are fixed rapidly by a global network of peers, and code becomes cleaner and more efficient over time. __2__, this requires a profound level of humility. When a developer submits code, it is immediately subjected to public scrutiny. They must leave room for criticism, acknowledging that their work is never absolutely perfect. __3__ clinging to the ego of authorship, they embrace the collaborative evolution of the project. This ecosystem thrives because it operates on the universal law of cause and effect: what you give to the community inevitably benefits you in return. __4__ the internet becomes increasingly commercialized, these ad-free, pure sanctuaries of knowledge remain vital. They remind us that the highest form of technology is not driven by greed, but by a sincere __5__ to serve humanity.",
            questions: [
                { id: "c_q_41", text: "1.", options: {A:"Instead of", B:"In pursuit of", C:"Due to", D:"Similar to"}, answer: "A", points: 2 },
                { id: "c_q_42", text: "2.", options: {A:"However", B:"Therefore", C:"Moreover", D:"Otherwise"}, answer: "A", points: 2 },
                { id: "c_q_43", text: "3.", options: {A:"Rather than", B:"Because of", C:"With regard to", D:"In spite of"}, answer: "A", points: 2 },
                { id: "c_q_44", text: "4.", options: {A:"As", B:"Unless", C:"Until", D:"Before"}, answer: "A", points: 2 },
                { id: "c_q_45", text: "5.", options: {A:"desire", B:"prejudice", C:"obstacle", D:"anxiety"}, answer: "A", points: 2 }
            ]
        },
            {
            id: "c_s_009",
            article: "In the modern attention economy, human focus is the most valuable commodity. Tech companies employ psychologists and behavioral scientists to design algorithms specifically engineered to hijack our dopamine pathways. __1__ providing useful tools, many applications are designed as slot machines, using variable rewards to keep us endlessly scrolling. This continuous partial attention severely degrades our ability to engage in 'deep work'—the focused, uninterrupted concentration required to master complex skills or produce meaningful art. __2__, it fragments our consciousness, leaving us feeling chronically exhausted and fundamentally disconnected from our immediate reality. The antidote to this digital conditioning is intentional friction. By consciously creating barriers between ourselves and our devices—such as turning off non-essential notifications or keeping phones out of the bedroom—we reclaim our cognitive sovereignty. __3__ we learn to sit comfortably with boredom, we cannot discover true creativity. Silence and stillness are not empty voids to be avoided; they are the fertile grounds __4__ which profound insights grow. Ultimately, taking back control of our attention is not just a productivity hack; it is a fundamental act of preserving our inner peace and psychological __5__.",
            questions: [
                { id: "c_q_46", text: "1.", options: {A:"Instead of", B:"In addition to", C:"Because of", D:"According to"}, answer: "A", points: 2 },
                { id: "c_q_47", text: "2.", options: {A:"Furthermore", B:"However", C:"Conversely", D:"Similarly"}, answer: "A", points: 2 },
                { id: "c_q_48", text: "3.", options: {A:"Unless", B:"If", C:"Because", D:"Although"}, answer: "A", points: 2 },
                { id: "c_q_49", text: "4.", options: {A:"from", B:"with", C:"without", D:"against"}, answer: "A", points: 2 },
                { id: "c_q_50", text: "5.", options: {A:"integrity", B:"vulnerability", C:"anxiety", D:"fragility"}, answer: "A", points: 2 }
            ]
        },
       
        {
            id: "c_s_010",
            article: "The illusion of human separation from nature is a relatively recent cognitive error. For millennia, indigenous cultures understood deeply that human beings are an integral part of the ecological web. Modern industrial societies, __1__, adopted an anthropocentric worldview, treating the Earth merely as a warehouse of resources to be endlessly extracted. This paradigm has led to unprecedented environmental degradation. Recognizing this crisis, the philosophy of Deep Ecology offers a radical shift in perspective. It asserts that all living beings have intrinsic value, __2__ their usefulness to human ends. When we pollute a river, we are not just damaging an external environment; we are poisoning the very water that circulates through our own bodies. __3__ this realization, environmental protection ceases to be a noble charity and becomes an act of basic self-preservation. To heal the planet, we must first heal the psychological rift within ourselves. We must move away from an economy of limitless growth and embrace an economy of sufficiency. By aligning our daily actions with the rhythmic cycles of nature, we step back into a state of profound __4__ with the cosmos, ensuring a viable future for all __5__.",
            questions: [
                { id: "c_q_51", text: "1.", options: {A:"however", B:"therefore", C:"moreover", D:"similarly"}, answer: "A", points: 2 },
                { id: "c_q_52", text: "2.", options: {A:"regardless of", B:"due to", C:"in pursuit of", D:"based on"}, answer: "A", points: 2 },
                { id: "c_q_53", text: "3.", options: {A:"With", B:"Without", C:"Beyond", D:"Against"}, answer: "A", points: 2 },
                { id: "c_q_54", text: "4.", options: {A:"harmony", B:"conflict", C:"isolation", D:"dominance"}, answer: "A", points: 2 },
                { id: "c_q_55", text: "5.", options: {A:"species", B:"corporations", C:"machines", D:"profits"}, answer: "A", points: 2 }
            ]
        },
        
        {
            id: "c_s_011",
            article: "True listening is an incredibly rare and profound act of compassion. In most conversations, people do not listen to understand; they listen to reply. Their minds are busy formulating counter-arguments or preparing to shift the focus back to themselves. This ego-driven communication creates an illusion of connection while leaving both parties feeling fundamentally misunderstood. Active, mindful listening requires the complete silencing of the internal monologue. It is the act of offering someone your purest, undivided attention. __1__ you remove the filter of your own judgments and simply hold space for another person's reality, you create a psychological sanctuary for them. Studies in psychotherapy show that simply feeling deeply heard can physically regulate a person's nervous system, reducing levels of cortisol and anxiety. __2__, listening is not a passive activity; it is a highly dynamic form of energetic healing. __3__ we cultivate the discipline to truly hear the pain, joy, and unspoken fears of others, we dissolve the artificial boundaries of the self. In this sacred space of mutual understanding, empathy blossoms naturally, proving that the most powerful tool for human connection is not eloquent speech, but profound __4__ and __5__.",
            questions: [
                { id: "c_q_56", text: "1.", options: {A:"When", B:"Unless", C:"Though", D:"Until"}, answer: "A", points: 2 },
                { id: "c_q_57", text: "2.", options: {A:"Therefore", B:"However", C:"Otherwise", D:"Conversely"}, answer: "A", points: 2 },
                { id: "c_q_58", text: "3.", options: {A:"As", B:"Whereas", C:"Although", D:"Despite"}, answer: "A", points: 2 },
                { id: "c_q_59", text: "4.", options: {A:"presence", B:"absence", C:"ignorance", D:"arrogance"}, answer: "A", points: 2 },
                { id: "c_q_60", text: "5.", options: {A:"silence", B:"noise", C:"debate", D:"criticism"}, answer: "A", points: 2 }
            ]
        },
    
        {
            id: "c_s_012",
            article: "The ultimate realization in Eastern contemplative traditions is the truth of Anatman, or 'Non-Self.' This is arguably the most misunderstood concept in Buddhist philosophy. It does not mean that you do not exist physically, nor does it advocate for negative nihilism. __1__, it teaches that the 'self' is not a fixed, permanent, or independent entity. Imagine a river: it looks like a single, solid thing, but it is actually a continuous, ever-changing flow of different water droplets. Similarly, what we call 'I' is simply a dynamic stream of physical sensations, thoughts, and memories, none of which remain the same from one moment to the next. Human suffering arises precisely because we desperately try to solidify this fluid process. We attach our identity to our status, our bodies, and our opinions, terrified of losing them. __2__ we deeply comprehend that impermanence is the fundamental law of the universe, our psychological grip begins to loosen. We realize there is nothing to cling to, and ironically, in this complete letting go, we find absolute invulnerability. __3__ resisting the flow of life, a wise mind moves with it perfectly. This profound acceptance is not defeat; it is the highest form of spiritual __4__, leading directly to unshakeable inner __5__.",
            questions: [
                { id: "c_q_61", text: "1.", options: {A:"Rather", B:"Similarly", C:"Consequently", D:"Moreover"}, answer: "A", points: 2 },
                { id: "c_q_62", text: "2.", options: {A:"Once", B:"Unless", C:"Before", D:"Whereas"}, answer: "A", points: 2 },
                { id: "c_q_63", text: "3.", options: {A:"Instead of", B:"In favor of", C:"Due to", D:"By means of"}, answer: "A", points: 2 },
                { id: "c_q_64", text: "4.", options: {A:"liberation", B:"confinement", C:"illusion", D:"attachment"}, answer: "A", points: 2 },
                { id: "c_q_65", text: "5.", options: {A:"peace", B:"turmoil", C:"chaos", D:"anxiety"}, answer: "A", points: 2 }
            ]
        },
            {
            id: "c_s_013",
            article: "The inherent limitation of human language is a recurring theme in deep philosophical inquiry. Words are essentially conceptual labels we use to navigate the physical world. However, when attempting to articulate the ultimate nature of reality, language becomes fundamentally __1__. The famous opening line of the Tao Te Ching states, 'The Tao that can be told is not the eternal Tao.' This implies that the moment we attempt to define the infinite, we immediately confine it within the finite parameters of our intellect. The absolute truth is entirely __2__; it transcends the dualistic structure of human grammar, which constantly divides the world into subjects and objects, good and bad, existence and non-existence. Contemplative traditions recognize this cognitive barrier. Therefore, they often utilize silence, paradoxes, or seemingly __3__ riddles (like Zen koans) to bypass the logical mind. These methods are designed to deliberately exhaust the intellect, creating a mental crisis that forces the practitioner to abandon analytical reasoning. __4__ reaching the limits of thought, a sudden intuitive breakthrough can occur. In this state of pure, unmediated awareness, the practitioner experiences reality exactly as it is, stripped of all linguistic filters. Ultimately, words are merely fingers pointing at the moon; a wise seeker relies on the finger for direction, but never __5__ it for the moon itself.",
            questions: [
                { id: "c_q_66", text: "1.", options: {A:"inadequate", B:"eloquent", C:"versatile", D:"objective"}, answer: "A", points: 2 },
                { id: "c_q_67", text: "2.", options: {A:"ineffable", B:"empirical", C:"tangible", D:"lucrative"}, answer: "A", points: 2 },
                { id: "c_q_68", text: "3.", options: {A:"absurd", B:"rational", C:"plausible", D:"homogeneous"}, answer: "A", points: 2 },
                { id: "c_q_69", text: "4.", options: {A:"Upon", B:"Instead of", C:"Regardless of", D:"Prior to"}, answer: "A", points: 2 },
                { id: "c_q_70", text: "5.", options: {A:"mistakes", B:"substitutes", C:"compensates", D:"manipulates"}, answer: "A", points: 2 }
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
            id: "b_s_004",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) boundaries  (B) overload  (C) intentionally  (D) clarity  (E) notifications<br>(F) profound  (G) consuming  (H) disconnect  (I) fundamental  (J) restoring<br><br>The modern digital diet is often filled with empty calories. We spend hours endlessly scrolling through social media, __31__ information that rarely adds value to our lives. This constant state of information __32__ leaves our minds fragmented and exhausted. To combat this, many are turning to digital minimalism, a philosophy that advocates for using technology __33__ rather than impulsively. It starts with a __34__ shift in perspective: technology should serve us, not the other way around. By turning off non-essential __35__ and establishing tech-free zones, we create physical and mental __36__. This conscious choice to occasionally __37__ from the virtual world allows us to reconnect with the physical one. The result is often a __38__ sense of peace and improved focus. __39__ our attention is the ultimate goal, giving us the mental __40__ needed to pursue truly meaningful endeavors.",
            questions: [
                { id: "b_q_41", text: "31. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_42", text: "32. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_43", text: "33. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_44", text: "34. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_45", text: "35. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_46", text: "36. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_47", text: "37. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_48", text: "38. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_49", text: "39. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_50", text: "40. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
            {
            id: "b_s_005",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) existence  (B) interconnectedness  (C) isolated  (D) ecology  (E) actions<br>(F) ripple  (G) profound  (H) mutual  (I) independently  (J) harmony<br><br>The concept of deep __51__ goes beyond standard environmentalism by asserting the inherent worth of all living beings, regardless of their utility to human needs. It stems from the realization of our fundamental __52__ with the natural world. In modern society, humans often view themselves as __53__ from nature, leading to destructive behaviors and environmental crises. However, science and ancient philosophies alike teach us that nothing exists __54__. A single drop of pollution in a river creates a __55__ effect that touches the soil, the plants, and eventually our own bodies. Acknowledging this __56__ dependence requires a __57__ shift in consciousness. We must move away from an ego-centric worldview to an eco-centric one. By recognizing that our __58__ are deeply intertwined with the web of life, we begin to act with greater responsibility and compassion. True __59__ is achieved only when we respect the __60__ of every leaf, insect, and mountain as equal to our own.",
            questions: [
                { id: "b_q_51", text: "51. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_52", text: "52. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_53", text: "53. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_54", text: "54. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_55", text: "55. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_56", text: "56. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_57", text: "57. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_58", text: "58. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_59", text: "59. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_60", text: "60. 請選擇正確選項：", answer: "A", points: 2 }
            ]
        },
            {
            id: "b_s_006",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) attachment  (B) transient  (C) inevitable  (D) perspective  (E) resistance<br>(F) gracefully  (G) profound  (H) clinging  (I) fundamental  (J) liberation<br><br>One of the most __41__ teachings in contemplative philosophy is the concept of impermanence. Everything in the physical and mental universe is in a constant state of flux. Flowers bloom and wither; emotions rise and fall; human lives are ultimately __42__. Recognizing this reality is crucial, yet human beings have a deep-seated tendency toward __43__. We desperately try to hold onto youth, wealth, and relationships, fearing the __44__ changes that time brings. This __45__ to the natural flow of life is the primary source of psychological suffering. When we resist what is, we create tension. Conversely, when we practice letting go of our __46__, we experience a profound sense of relief. Letting go does not mean becoming cold or indifferent; rather, it is a shift in __47__. We learn to appreciate things fully while they are here, without __48__ to them when they must pass. By accepting the changing nature of reality __49__, we achieve a state of inner __50__, free from the fear of loss.",
            questions: [
                { id: "b_q_61", text: "41. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_62", text: "42. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_63", text: "43. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_64", text: "44. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_65", text: "45. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_66", text: "46. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_67", text: "47. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_68", text: "48. 請選擇正確選項：", answer: "H", points: 2 }, // 此處也可為 clinging，若 46 填 attachment
                { id: "b_q_69", text: "49. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_70", text: "50. 請選擇正確選項：", answer: "J", points: 2 }
            ]
        },
            {
            id: "b_s_007",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) boundaries  (B) framework  (C) chaotic  (D) navigate  (E) absolute<br>(F) algorithms  (G) profound  (H) internal  (I) rigorous  (J) principles<br><br>The study of law and the writing of computer code share a __71__ similarity: both require a mind grounded in strict logic. A society without laws descends into a __72__ state, much like a software program without syntax rules will inevitably crash. In both domains, developers and lawmakers must construct a stable __73__ to handle unpredictable human behaviors and inputs. However, true wisdom lies in understanding that no system is 100% perfect. There is no __74__ truth in the physical world; there is always a margin of error, a one percent left for criticism and continuous improvement. To __75__ this complex reality, one must apply __76__ aesthetic standards not just to visual design, but to the very structure of thought. A beautifully written piece of code, free of redundant __77__, is like a well-drafted legal contract—it leaves no room for ambiguous interpretations. Yet, beyond the external rules, we must also cultivate our __78__ order. By setting clear mental __79__ and adhering to ethical __80__, we protect our minds from being manipulated by the noise of the outside world.",
            questions: [
                { id: "b_q_71", text: "71. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_72", text: "72. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_73", text: "73. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_74", text: "74. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_75", text: "75. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_76", text: "76. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_77", text: "77. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_78", text: "78. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_79", text: "79. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_80", text: "80. 請選擇正確選項：", answer: "J", points: 2 }
            ]
        },
            {
            id: "b_s_008",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) algorithm  (B) intentionally  (C) fragmented  (D) clarity  (E) dopamine<br>(F) profound  (G) consuming  (H) disconnect  (I) fundamental  (J) restoring<br><br>Every time your phone buzzes, a small hit of __81__ is released in your brain, creating a chemical dependency on digital validation. The underlying __82__ of social media is mathematically optimized to keep you scrolling, effectively monetizing your attention. As a result, our daily consciousness becomes heavily __83__, jumping rapidly from one useless piece of information to another. To counter this, we must practice digital asceticism by __84__ choosing when and how we engage with technology. A __85__ step is to turn off all non-essential alerts. The initial anxiety of this __86__ eventually fades, giving way to a __87__ sense of mental relief. We stop __88__ our lives comparing our behind-the-scenes with everyone else's highlight reels. By __89__ silence to our daily routine, we create the necessary space for deep thinking and self-reflection. Ultimately, preserving our focus is the only way to achieve true mental __90__ in the 21st century.",
            questions: [
                { id: "b_q_81", text: "81. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_82", text: "82. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_83", text: "83. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_84", text: "84. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_85", text: "85. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_86", text: "86. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_87", text: "87. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_88", text: "88. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_89", text: "89. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_90", text: "90. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
        // Set 8
        {
            id: "b_s_009",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) existence  (B) interwoven  (C) isolated  (D) ecology  (E) footprints<br>(F) harmony  (G) profound  (H) mutual  (I) independently  (J) sustainability<br><br>True environmental __91__ is not merely a technological problem, but a spiritual one. It requires a shift from viewing nature as a commodity to viewing it as a sacred web of life. Human beings are deeply __92__ with the fate of the soil, the oceans, and the forests. We do not exist __93__ from the natural world; we are a direct expression of it. When we fully grasp this __94__ truth, our behavior naturally changes. We begin to minimize our carbon __95__ not out of guilt, but out of a genuine sense of love and responsibility. This perspective is the essence of deep __96__. It teaches that an insect is not less important than a human in the grand tapestry of __97__. Every organism relies on a state of __98__ support to survive. If we wish to thrive as a species, we must abandon the delusion that we are __99__ rulers of the planet, and instead learn to live in quiet __100__ with all sentient beings.",
            questions: [
                { id: "b_q_91", text: "91. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_92", text: "92. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_93", text: "93. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_94", text: "94. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_95", text: "95. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_96", text: "96. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_97", text: "97. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_98", text: "98. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_99", text: "99. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_100", text: "100. 請選擇正確選項：", answer: "F", points: 2 }
            ]
        },
        // Set 9
        {
            id: "b_s_010",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) vengeance  (B) forgiveness  (C) burden  (D) navigate  (E) hostility<br>(F) resentment  (G) profound  (H) internal  (I) liberation  (J) vulnerable<br><br>Carrying anger is like drinking poison and expecting the other person to die. This ancient proverb highlights the destructive nature of __101__. When someone wrongs us, our ego naturally demands justice or __102__. However, holding onto this bitterness creates a heavy psychological __103__ that exhausts our mental energy. The true path to healing lies in the difficult practice of __104__. To forgive is not to condone the harmful action; rather, it is a conscious decision to cut the emotional cord that binds us to the trauma. It requires us to drop our defensive walls and become __105__ enough to process the pain. As we let go of the __106__ directed at others, we simultaneously heal our own __107__ wounds. This shift in perspective provides a __108__ sense of relief. We realize that forgiveness is an act of supreme self-compassion. Ultimately, it grants us the absolute __109__ to __110__ the rest of our lives without the anchor of past grievances holding us back.",
            questions: [
                { id: "b_q_101", text: "101. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_102", text: "102. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_103", text: "103. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_104", text: "104. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_105", text: "105. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_106", text: "106. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_107", text: "107. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_108", text: "108. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_109", text: "109. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_110", text: "110. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
            {
            id: "b_s_012",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) aesthetic  (B) explicit  (C) chaotic  (D) architecture  (E) pristine<br>(F) algorithms  (G) profound  (H) subjective  (I) obsolete  (J) principles<br><br>There is a deeply spiritual dimension to the art of writing clean code. In a digital environment that is increasingly __121__ and cluttered with redundant functions, maintaining a minimalist software __122__ requires intense discipline. A master programmer approaches their craft much like a Zen monk tending a dry landscape garden. Every single line of code must serve a highly __123__ purpose; anything that is unnecessary is mercilessly removed. This rigorous adherence to structural __124__ ensures that the system runs with absolute efficiency and minimal entropy. When an application is stripped of all __125__ bloatware and hidden trackers, what remains is an interface of __126__ clarity. This level of __127__ purity is not merely about visual appeal; it is a profound ethical statement. It respects the user's cognitive load and preserves their mental space. By open-sourcing such __128__ algorithms, developers offer a sanctuary of logic to the world. They understand that technology should not enslave human attention, but rather fade quietly into the background, supporting our lives without imposing its own __129__ agenda. In this way, coding transcends engineering and becomes a __130__ practice of mindfulness.",
            questions: [
                { id: "b_q_121", text: "121. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_122", text: "122. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_123", text: "123. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_124", text: "124. 請選擇正確選項：", answer: "J", points: 2 },
                { id: "b_q_125", text: "125. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_126", text: "126. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_127", text: "127. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_128", text: "128. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_129", text: "129. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_130", text: "130. 請選擇正確選項：", answer: "G", points: 2 }
            ]
        },
        // Set 10
        {
            id: "b_s_011",
            optionsList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            article: "Option Pool:<br>(A) attachment  (B) essence  (C) inevitable  (D) perspective  (E) resistance<br>(F) gracefully  (G) profound  (H) clinging  (I) impermanence  (J) liberation<br><br>To understand the true nature of reality, one must deeply contemplate the concept of __111__. The universe is not a collection of static objects, but a continuous flow of changing events. Our suffering originates from a deep-rooted __112__ to things remaining exactly as they are. We fear aging, loss, and the __113__ decay of all physical forms. This psychological __114__ to change creates a constant underlying anxiety. The teachings of the awakened ones guide us to recognize that there is no fixed, independent __115__ in any phenomenon. When we stop __116__ to our ego and expectations, our worldview undergoes a radical shift in __117__. We begin to appreciate the fleeting beauty of a sunset precisely because it will not last. By accepting the fluid nature of life __118__, we break the chains of fear. This ultimate letting go is not a loss, but a __119__ state of absolute __120__ and peace.",
            questions: [
                { id: "b_q_111", text: "111. 請選擇正確選項：", answer: "I", points: 2 },
                { id: "b_q_112", text: "112. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "b_q_113", text: "113. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "b_q_114", text: "114. 請選擇正確選項：", answer: "E", points: 2 },
                { id: "b_q_115", text: "115. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "b_q_116", text: "116. 請選擇正確選項：", answer: "H", points: 2 },
                { id: "b_q_117", text: "117. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "b_q_118", text: "118. 請選擇正確選項：", answer: "F", points: 2 },
                { id: "b_q_119", text: "119. 請選擇正確選項：", answer: "G", points: 2 },
                { id: "b_q_120", text: "120. 請選擇正確選項：", answer: "J", points: 2 }
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
            id: "d_s_004",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) This phenomenon explains why we often feel mentally drained after attempting to juggle several tasks.<br>(B) Instead, it rapidly switches our focus back and forth between different activities.<br>(C) Multitasking is widely considered a necessary skill in today's fast-paced work environment.<br>(D) By focusing on one task at a time, we can significantly improve both the quality of our work and our mental well-being.<br><br>__41__ Many people pride themselves on their ability to answer emails, talk on the phone, and write reports simultaneously. However, neuroscientists have discovered that the human brain is not wired to perform multiple complex tasks at once. __42__ This constant context-switching consumes a tremendous amount of cognitive energy. __43__ Furthermore, it increases the likelihood of making errors and reduces overall productivity. The antidote to this modern exhaustion is single-tasking. __44__",
            questions: [
                { id: "d_q_45", text: "41. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_46", text: "42. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_47", text: "43. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_48", text: "44. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
            {
            id: "d_s_005",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) This relentless pursuit of 'more' often leads to burnout and a deep sense of emptiness.<br>(B) By decluttering their physical spaces, they report feeling a profound sense of mental liberation.<br>(C) Minimalism, as a lifestyle choice, offers a powerful antidote to this modern disease.<br>(D) In contemporary society, success is frequently measured by material accumulation and busy schedules.<br><br>__49__ People are constantly bombarded with advertisements convincing them that buying the latest products will bring happiness. __50__ The tragedy is that once a goal is achieved, the satisfaction is fleeting, and the cycle begins anew. __51__ It is the intentional promotion of the things we most value and the removal of everything that distracts us from them. Many individuals who adopt this philosophy start by minimizing their possessions. __52__ Ultimately, minimalism is not about living with nothing, but about making room for what truly matters: inner peace, meaningful relationships, and personal growth.",
            questions: [
                { id: "d_q_49", text: "49. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_50", text: "50. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_51", text: "51. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_52", text: "52. 請選擇正確選項：", answer: "B", points: 2 }
            ]
        },
            {
            id: "d_s_006",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It forces the practitioner to slow down and synchronize their breathing with their steps.<br>(B) Kinhin is traditionally practiced between long periods of seated meditation to relieve physical stiffness.<br>(C) This practice teaches us that meditation is not confined to sitting still on a cushion.<br>(D) Unlike a hurried walk to reach a destination, this movement has no goal other than the walking itself.<br><br>In Zen Buddhism, walking meditation, known as 'Kinhin,' is as essential as seated meditation. __53__ However, it is much more than just a physical stretch. __54__ Each step is taken with absolute mindfulness, feeling the heel, the arch, and the toes making contact with the ground. __55__ The mind is anchored completely in the physical sensation of movement. __56__ Ultimately, it demonstrates how everyday actions can be transformed into profound moments of spiritual awakening.",
            questions: [
                { id: "d_q_53", text: "53. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_54", text: "54. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_55", text: "55. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_56", text: "56. 請選擇正確選項：", answer: "C", points: 2 }
            ]
        },
            {
            id: "d_s_007",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It is the profound realization that everything arises and passes away depending on conditions.<br>(B) Instead, it represents a state of limitless potential, free from rigid definitions.<br>(C) This philosophical concept is frequently misunderstood as a form of negative nihilism.<br>(D) Therefore, understanding this concept allows us to live with greater flexibility and compassion.<br><br>In Eastern philosophy, the concept of Śūnyatā, often translated as 'emptiness,' is central to understanding the nature of reality. __57__ Many people mistakenly believe it implies that nothing matters or that the universe is a dark, empty void. __58__ Because an empty cup has no fixed contents, it can hold anything; similarly, because phenomena have no fixed, independent essence, they are capable of continuous transformation. __59__ When we realize that our ego and our current circumstances are not permanent, we stop clinging to them. __60__",
            questions: [
                { id: "d_q_57", text: "57. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_58", text: "58. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_59", text: "59. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_60", text: "60. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
         
        {
            id: "d_s_008",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It rewires our neural pathways to default to patience and focus rather than reactive panic.<br>(B) This philosophy can be directly applied to our interactions with digital technology.<br>(C) True discipline is the highest form of self-love, allowing us to protect our mental space.<br>(D) We often view discipline as a rigid constraint that severely limits our personal freedom.<br><br>__61__ We mistakenly believe that freedom means acting on every impulse and checking every notification immediately. However, yielding to every distraction actually makes us slaves to algorithms and external stimuli. __62__ By intentionally setting strict boundaries around our screen time, we free ourselves from the constant bombardment of information. __63__ Over time, this conscious restriction of choices paradoxically grants us an immense sense of internal liberty. __64__",
            questions: [
                { id: "d_q_61", text: "61. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_62", text: "62. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_63", text: "63. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_64", text: "64. 請選擇正確選項：", answer: "A", points: 2 }
            ]
        },
        // Set 8
        {
            id: "d_s_009",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It acknowledges that human health is inextricably linked to planetary health.<br>(B) This anthropocentric view has justified massive deforestation and ocean pollution.<br>(C) Recognizing this is the first step toward genuine ecological healing.<br>(D) For centuries, Western civilization has operated on the assumption that nature exists solely to be conquered and utilized.<br><br>__65__ We have built entire economies on the premise of extracting raw materials and treating the Earth as an infinite dumping ground. __66__ However, modern science and ancient indigenous wisdom are converging on a different truth: the illusion of separation. We are not external masters of the planet; we are completely embedded within its biological networks. __67__ Therefore, poisoning the soil is equivalent to poisoning our own bloodstream. __68__",
            questions: [
                { id: "d_q_65", text: "65. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_66", text: "66. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_67", text: "67. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_68", text: "68. 請選擇正確選項：", answer: "C", points: 2 }
            ]
        },
        // Set 9
        {
            id: "d_s_010",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) This phenomenon explains why true empathy is so incredibly difficult to practice.<br>(B) Instead, they are listening solely to formulate their own counter-argument.<br>(C) The ego constantly seeks to defend its own position and validate its own existence.<br>(D) In a typical conversation, most people are not actually listening to understand the other person.<br><br>__69__ As the other person speaks, their mind is already racing ahead, waiting for a pause to jump in. __70__ This creates a superficial exchange where neither party feels genuinely heard or seen. __71__ It views differing opinions as threats rather than opportunities for growth. To break this cycle, one must learn to silence the internal monologue and offer the gift of pure, non-judgmental presence. __72__",
            questions: [
                { id: "d_q_69", text: "69. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_70", text: "70. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_71", text: "71. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_72", text: "72. 請選擇正確選項：", answer: "A", points: 2 }
            ]
        },
        // Set 10
        {
            id: "d_s_011",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It is the profound realization that everything arises and passes away depending on conditions.<br>(B) Instead, it represents a state of limitless potential, free from rigid definitions.<br>(C) This philosophical concept is frequently misunderstood as a form of negative nihilism.<br>(D) Therefore, understanding this concept allows us to live with greater flexibility and compassion.<br><br>In Eastern philosophy, the concept of Śūnyatā, often translated as 'emptiness,' is central to understanding the nature of reality. __73__ Many people mistakenly believe it implies that nothing matters or that the universe is a dark, empty void. __74__ Because an empty cup has no fixed contents, it can hold anything; similarly, because phenomena have no fixed, independent essence, they are capable of continuous transformation. __75__ When we realize that our ego and our current circumstances are not permanent, we stop clinging to them. __76__",
            questions: [
                { id: "d_q_73", text: "73. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_74", text: "74. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_75", text: "75. 請選擇正確選項：", answer: "A", points: 2 },
                { id: "d_q_76", text: "76. 請選擇正確選項：", answer: "D", points: 2 }
            ]
        },
            {
            id: "d_s_012",
            optionsList: ['A', 'B', 'C', 'D'],
            article: "Option Pool:<br>(A) It is the complete dissolution of the artificial boundary separating the observer from the observed.<br>(B) This cognitive framework forces us to categorize every experience as either a victory or a defeat.<br>(C) True mastery, however, requires transcending this limited, dualistic perspective entirely.<br>(D) When the archer ceases to care about hitting the bullseye, their technique flows flawlessly.<br><br>The human mind is deeply conditioned to operate within a framework of dualities: success and failure, gain and loss, right and wrong. __77__ Such a mindset keeps us trapped in a perpetual state of anxiety, constantly striving for the former while desperately avoiding the latter. __78__ In the ancient philosophy of archery, for instance, the ultimate goal is not the target itself. __79__ The separation between the bow, the arrow, the target, and the self simply vanishes. __80__ In this state of absolute non-attachment, action happens spontaneously and perfectly, unhindered by the ego's fear of failure.",
            questions: [
                { id: "d_q_77", text: "77. 請選擇正確選項：", answer: "B", points: 2 },
                { id: "d_q_78", text: "78. 請選擇正確選項：", answer: "C", points: 2 },
                { id: "d_q_79", text: "79. 請選擇正確選項：", answer: "D", points: 2 },
                { id: "d_q_80", text: "80. 請選擇正確選項：", answer: "A", points: 2 }
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
            id: "r_s_004",
            article: "The architectural design of traditional Japanese Zen gardens, or 'karesansui' (dry landscape gardens), is a masterpiece of minimalism and symbolism. Unlike Western gardens that burst with colorful flowers and symmetrical pathways, Zen gardens primarily utilize rocks, gravel, moss, and a few carefully pruned shrubs. The gravel is meticulously raked to represent the ripples of water, while the larger rocks symbolize islands or mountains. \n\nThe true purpose of a Zen garden is not simply visual enjoyment, but to serve as an aid to meditation. The absence of vibrant colors and complex structures eliminates visual clutter, allowing the mind to rest. When a monk rakes the gravel, it is considered an active form of meditation, requiring complete concentration and mindfulness. The asymmetrical arrangement of the rocks forces the observer's eye to wander, preventing the mind from fixating on a single point. This design principle mirrors the Buddhist philosophy of impermanence and the fluid nature of reality. By sitting quietly and observing the garden, one can cultivate a sense of inner tranquility and a deeper understanding of the self, proving that true beauty often lies in simplicity and emptiness.",
            questions: [
                { id: "r_q_13", text: "1. What is the primary purpose of a traditional Zen garden?", options: {A:"To showcase a wide variety of colorful flowers.", B:"To serve as a tool for meditation and inner reflection.", C:"To host large social gatherings and ceremonies.", D:"To demonstrate complex engineering techniques."}, answer: "B", points: 2 },
                { id: "r_q_14", text: "2. In a Zen garden, what does the raked gravel typically represent?", options: {A:"Tall mountains", B:"Green forests", C:"Ripples of water", D:"Clouds in the sky"}, answer: "C", points: 2 },
                { id: "r_q_15", text: "3. Why are the rocks in a Zen garden arranged asymmetrically?", options: {A:"To make the garden look more crowded.", B:"Because it is easier to build that way.", C:"To prevent the mind from fixating and to encourage contemplation.", D:"To follow strict Western architectural rules."}, answer: "C", points: 2 },
                { id: "r_q_16", text: "4. Which word best describes the core design philosophy of a Zen garden?", options: {A:"Extravagance", B:"Minimalism", C:"Symmetry", D:"Chaos"}, answer: "B", points: 2 }
            ]
        },
            {
            id: "r_s_005",
            article: "The concept of 'Iktsuarpok' is an Inuit word that describes the feeling of anticipation that leads you to keep looking outside to see if anyone is coming. While this specific emotion is tied to the harsh, isolated environments of the Arctic, the underlying psychology of anticipation is universal. In modern psychological terms, anticipation can be a double-edged sword. On one hand, anticipating a positive event, like a vacation or a reunion, releases dopamine in the brain, generating a sense of joy before the event even occurs.\n\nHowever, chronic anticipation—especially in the form of expecting bad news, worrying about the future, or constantly waiting for digital notifications—can trigger a prolonged state of anxiety. This state keeps the nervous system on high alert, elevating cortisol levels and preventing the mind from resting. Ancient contemplative traditions, such as Zen Buddhism, address this by emphasizing 'presence.' By training the mind to anchor itself entirely in the current moment, practitioners learn to detach from both the anxieties of the future and the regrets of the past. True peace, they argue, cannot be found in what is coming next, but only in a profound acceptance of what is happening right now.",
            questions: [
                { id: "r_q_17", text: "1. What does the Inuit word 'Iktsuarpok' describe?", options: {A:"The joy of experiencing a harsh winter.", B:"The feeling of anticipation that makes you look outside for a visitor.", C:"The release of dopamine in the human brain.", D:"A traditional form of Zen meditation."}, answer: "B", points: 2 },
                { id: "r_q_18", text: "2. According to the passage, what is the negative effect of chronic anticipation?", options: {A:"It makes people travel more often.", B:"It prevents the release of dopamine entirely.", C:"It keeps the nervous system on high alert, causing anxiety.", D:"It causes people to forget their past regrets."}, answer: "C", points: 2 },
                { id: "r_q_19", text: "3. How do ancient contemplative traditions like Zen Buddhism address the problem of anxiety?", options: {A:"By encouraging people to anticipate only positive events.", B:"By training the mind to focus entirely on the present moment.", C:"By analyzing the chemical makeup of cortisol.", D:"By completely isolating individuals from society."}, answer: "B", points: 2 },
                { id: "r_q_20", text: "4. What is the author's main conclusion regarding true peace?", options: {A:"It is found in carefully planning for the future.", B:"It requires moving to isolated environments like the Arctic.", C:"It is achieved by constantly checking digital notifications.", D:"It is found in the profound acceptance of the present moment."}, answer: "D", points: 2 }
            ]
        },
            {
            id: "r_s_006",
            article: "The psychological phenomenon known as 'The Hedonic Treadmill' explains why humanity's relentless pursuit of happiness often ends in frustration. According to this theory, people have a baseline level of happiness. When major positive or negative events occur—such as winning the lottery or suffering a severe injury—our happiness levels temporarily spike or plunge. However, humans are highly adaptable creatures. Over time, we habituate to our new circumstances, and our happiness inevitably returns to its original baseline. We are running on a treadmill: constantly moving, constantly acquiring, but remaining in the exact same emotional place.\n\nThis psychological mechanism reveals the fundamental flaw in consumerism, which preaches that the next purchase will bring lasting satisfaction. Ancient contemplative traditions recognized this trap thousands of years ago. They argued that desire itself is a bottomless pit. Therefore, the key to sustained well-being is not to upgrade our circumstances, but to upgrade our minds. Practices such as mindfulness and gratitude aim to detach our sense of contentment from external acquisitions. By learning to appreciate the mundane and cultivating peace from within, we can finally step off the hedonic treadmill and experience a stable, profound tranquility that external wealth can never provide.",
            questions: [
                { id: "r_q_21", text: "1. What does the 'Hedonic Treadmill' theory suggest about human happiness?", options: {A:"It constantly increases as we acquire more wealth.", B:"It returns to a baseline level after major life events.", C:"It is permanently destroyed by negative experiences.", D:"It can only be achieved through vigorous physical exercise."}, answer: "B", points: 2 },
                { id: "r_q_22", text: "2. According to the passage, why is consumerism considered flawed?", options: {A:"It fails to recognize that human adaptability makes lasting satisfaction from purchases impossible.", B:"It does not produce enough high-quality goods to satisfy everyone.", C:"It focuses too much on ancient contemplative traditions.", D:"It permanently lowers our baseline level of happiness."}, answer: "A", points: 2 },
                { id: "r_q_23", text: "3. How do ancient traditions suggest we achieve sustained well-being?", options: {A:"By continuously upgrading our living circumstances.", B:"By entirely giving up all forms of modern technology.", C:"By detaching contentment from external acquisitions and cultivating inner peace.", D:"By running faster on the hedonic treadmill."}, answer: "C", points: 2 },
                { id: "r_q_24", text: "4. What is the author's primary attitude toward the pursuit of material wealth?", options: {A:"Highly enthusiastic.", B:"Deeply skeptical.", C:"Completely indifferent.", D:"Mildly supportive."}, answer: "B", points: 2 }
            ]
        },
            {
            id: "r_s_007",
            article: "The digital landscape is increasingly dominated by algorithms designed to maximize user engagement. These systems are highly effective at capturing attention, but they often do so by exploiting human psychological vulnerabilities, promoting outrage, and reinforcing cognitive biases. In response to this, a movement of 'Ethical Tech Design' is emerging. This movement advocates for the creation of digital environments that respect human agency and prioritize psychological well-being over raw screen time.\n\nEthical developers approach coding not just as a technical task, but as a moral responsibility. They refuse to use 'dark patterns'—deceptive user interfaces designed to trick users into making unintended choices, such as subscribing to unwanted services. Instead, they champion systems that are transparent, ad-free, and respectful of privacy. By open-sourcing their code under Creative Commons (CC) licenses, these developers ensure that their tools remain a public good, free from corporate monopoly. This approach requires a tremendous amount of discipline and a willingness to accept that a system may never achieve a '100% perfect' monetization model. Yet, by intentionally leaving that 'one percent' of flaw or lack of profit, they maintain the purity of their creation. In doing so, they provide users with a sanctuary of logic and calm in an otherwise chaotic digital world.",
            questions: [
                { id: "r_q_25", text: "1. According to the passage, how do many engagement-driven algorithms capture user attention?", options: {A:"By providing deeply relaxing and meditative content.", B:"By exploiting psychological vulnerabilities and promoting outrage.", C:"By offering free, open-source educational courses.", D:"By completely removing all digital advertisements."}, answer: "B", points: 2 },
                { id: "r_q_26", text: "2. What is a 'dark pattern' in the context of web design?", options: {A:"A minimalist aesthetic using dark colors.", B:"A deceptive interface designed to trick users.", C:"A secure method for encrypting personal data.", D:"An open-source license for sharing code freely."}, answer: "B", points: 2 },
                { id: "r_q_27", text: "3. Why do ethical developers choose to open-source their code under CC licenses?", options: {A:"To ensure their tools remain a public good and prevent corporate monopoly.", B:"To hide their technical mistakes from other programmers.", C:"To force users to pay high subscription fees eventually.", D:"To exploit copyright laws for maximum personal profit."}, answer: "A", points: 2 },
                { id: "r_q_28", text: "4. What does the author imply by 'intentionally leaving that one percent'?", options: {A:"Deliberately adding harmful viruses to the software.", B:"Accepting a lack of absolute perfection or maximum profit to maintain the project's purity.", C:"Refusing to finish the coding project entirely.", D:"Charging a very small fee of one percent to the users."}, answer: "B", points: 2 }
            ]
        },
                {
            id: "r_s_008",
            article: "Neuroplasticity is the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. For centuries, scientists believed that the adult brain was a static, hard-wired organ. We now know that every thought, emotion, and repetitive action literally sculpts the physical structure of our brain. This has profound implications for the practice of meditation and mindfulness. \n\nWhen a person consistently practices focusing their attention on the breath, they are essentially strengthening the neural pathways associated with concentration and emotional regulation. Brain imaging studies have shown that regular meditation increases the density of the prefrontal cortex—the area responsible for rational decision-making—while simultaneously shrinking the amygdala, the brain's primal fear and stress center. This means that mental calmness is not just a temporary feeling, but a structurally reinforced trait. However, neuroplasticity works both ways. If we constantly engage in negative thinking, scrolling through anxiety-inducing news, or multitasking, we strengthen the pathways of stress and distraction. Therefore, we bear a profound responsibility for our own cognitive architecture. By carefully curating the information we consume and intentionally practicing stillness, we can literally wire our brains for peace.",
            questions: [
                { id: "r_q_29", text: "1. What old scientific belief does neuroplasticity challenge?", options: {A:"That the brain requires oxygen to survive.", B:"That the adult brain is entirely static and hard-wired.", C:"That meditation causes permanent brain damage.", D:"That the amygdala is responsible for rational thought."}, answer: "B", points: 2 },
                { id: "r_q_30", text: "2. According to brain imaging studies, how does regular meditation physically alter the brain?", options: {A:"It increases the size of the amygdala.", B:"It shrinks the prefrontal cortex completely.", C:"It increases the density of the prefrontal cortex and shrinks the amygdala.", D:"It disconnects the two hemispheres of the brain."}, answer: "C", points: 2 },
                { id: "r_q_31", text: "3. What is the potential negative aspect of neuroplasticity mentioned in the text?", options: {A:"It makes learning new languages impossible.", B:"It can strengthen pathways of stress if we engage in negative habits.", C:"It causes the brain to consume too much physical energy.", D:"It only works effectively during early childhood."}, answer: "B", points: 2 },
                { id: "r_q_32", text: "4. What is the author's main message regarding our cognitive architecture?", options: {A:"It is completely out of our control.", B:"We are entirely dependent on genetic factors for our mental state.", C:"We have a responsibility to actively shape it through intentional practices like stillness.", D:"We should rely solely on medication to alter our brain structure."}, answer: "C", points: 2 }
            ]
        },
            
        {
            id: "r_s_009",
            article: "Biomimicry is the practice of looking to nature for inspiration to solve complex human problems. For billions of years, plants, animals, and microbes have evolved highly efficient, sustainable ways to adapt and thrive. By studying these natural mechanisms, engineers and architects can create technologies that operate in harmony with the Earth, rather than depleting it.\n\nA classic example is the design of the Shinkansen, Japan's high-speed bullet train. Early models created a loud, disruptive sonic boom when exiting tunnels due to air pressure buildup. The chief engineer, a birdwatcher, observed how the kingfisher bird dives into water with barely a splash. By redesigning the train's nose to mimic the kingfisher's beak, they not only eliminated the sonic boom but also made the train 10% faster and 15% more energy-efficient. Furthermore, nature manufactures materials without toxic chemicals or immense heat. Spider silk, for instance, is pound-for-pound stronger than steel but is created at room temperature using water as a solvent. Biomimicry teaches a profound lesson in humility: the recognition that humanity does not need to conquer nature, but rather must sit as an eager student at its feet. True innovation lies in acknowledging that the natural world has already solved the problems we are currently struggling with.",
            questions: [
                { id: "r_q_33", text: "1. What is the fundamental concept of biomimicry?", options: {A:"Replacing natural ecosystems with artificial ones.", B:"Using nature's designs to solve human problems sustainably.", C:"Genetically modifying animals to serve human needs.", D:"Destroying natural habitats to build advanced technologies."}, answer: "B", points: 2 },
                { id: "r_q_34", text: "2. How did the kingfisher bird inspire the design of the bullet train?", options: {A:"By providing a new aerodynamic shape for the train's nose.", B:"By showing engineers how to build tracks over water.", C:"By inspiring the color scheme of the train cars.", D:"By demonstrating a new method for generating electricity."}, answer: "A", points: 2 },
                { id: "r_q_35", text: "3. Why is spider silk mentioned in the passage?", options: {A:"To warn against the dangers of venomous insects.", B:"To show that humans can easily synthesize natural proteins.", C:"To illustrate nature's ability to create strong materials without extreme heat or toxic chemicals.", D:"To prove that steel is an obsolete material in modern construction."}, answer: "C", points: 2 },
                { id: "r_q_36", text: "4. What profound philosophical lesson does biomimicry teach according to the author?", options: {A:"Humans are the ultimate masters of the universe.", B:"Technology will inevitably destroy the natural world.", C:"We must approach nature with humility and learn from its ancient wisdom.", D:"Nature is fundamentally flawed and needs human intervention."}, answer: "C", points: 2 }
            ]
        },
        // Set 9
        {
            id: "r_s_010",
            article: "The psychological burden of holding a grudge is often vastly underestimated. When an individual refuses to forgive a perceived wrong, they trap themselves in a state of chronic physiological arousal. The brain repeatedly replays the offensive event, signaling the adrenal glands to release stress hormones like cortisol and adrenaline. Over time, this constant state of 'fight or flight' impairs the immune system, elevates blood pressure, and contributes to severe anxiety and depression.\n\nForgiveness, therefore, is not primarily a moral obligation to the offender; it is a vital act of self-preservation. Dr. Fred Luskin, founder of the Stanford University Forgiveness Projects, emphasizes that forgiveness does not mean condoning bad behavior, reconciling with a dangerous person, or forgetting the past. Instead, it is the deliberate decision to release feelings of resentment and vengeance. It is a shift in focus from the unchangeable past to the present moment. By relinquishing the demand that the past should have been different, individuals reclaim their personal power. In contemplative traditions, this release is seen as the ultimate form of letting go—a recognition that holding onto anger is akin to grasping a hot coal with the intent of throwing it at someone else; you are the only one who gets burned.",
            questions: [
                { id: "r_q_37", text: "1. What is the physiological impact of holding a chronic grudge?", options: {A:"It strengthens the immune system against future attacks.", B:"It keeps the body in a prolonged state of stress, damaging overall health.", C:"It decreases the production of cortisol and adrenaline.", D:"It significantly lowers blood pressure and promotes deep sleep."}, answer: "B", points: 2 },
                { id: "r_q_38", text: "2. According to Dr. Fred Luskin, what does true forgiveness NOT require?", options: {A:"Releasing feelings of resentment.", B:"Shifting focus to the present moment.", C:"Condoning the bad behavior or reconciling with the offender.", D:"Reclaiming one's personal psychological power."}, answer: "C", points: 2 },
                { id: "r_q_39", text: "3. How does the passage describe the act of demanding the past to be different?", options: {A:"As a useful strategy for preventing future mistakes.", B:"As a necessary step in the legal justice process.", C:"As a futile endeavor that drains personal power.", D:"As a primary technique in modern psychotherapy."}, answer: "C", points: 2 },
                { id: "r_q_40", text: "4. What is the meaning of the 'hot coal' metaphor at the end of the text?", options: {A:"Anger is a useful fuel for achieving difficult goals.", B:"Holding onto anger ultimately harms yourself more than the person you are angry with.", C:"Forgiveness requires going through a painful burning process.", D:"Revenge is a dish best served hot."}, answer: "B", points: 2 }
            ]
        },
        // Set 10
        {
            id: "r_s_011",
            article: "At the heart of Buddhist psychology is the doctrine of Anatman, typically translated as 'No-Self.' To the Western mind, heavily influenced by individualistic philosophies, this concept sounds terrifying, akin to self-annihilation. However, Anatman does not deny the existence of a biological organism or a functioning personality. Rather, it challenges the deeply held illusion that there is a permanent, unchanging, independent 'I' residing behind our eyes, steering the ship of our lives.\n\nThrough intense meditative introspection, practitioners observe that what we call 'the self' is actually a dynamic compilation of five ever-shifting aggregates: physical form, sensations, perceptions, mental formations, and consciousness. None of these elements remain static for even a single second. Our thoughts arise and vanish like clouds; our cells completely regenerate over years. If we search for a permanent core, we find nothing but fluid relationships. Suffering (Dukkha) arises precisely because we desperately try to cling to this flowing river, attempting to freeze it into a solid block of identity. We defend our egos, our opinions, and our status, terrified of their inevitable dissolution. The profound realization of Anatman is the ultimate liberation. When we stop grasping for a solid self, we dissolve the boundaries between us and the universe, stepping into a state of absolute, unshakeable peace.",
            questions: [
                { id: "r_q_41", text: "1. How is the concept of Anatman (No-Self) often misinterpreted by the Western mind?", options: {A:"As the ultimate goal of capitalistic success.", B:"As a terrifying concept akin to self-annihilation.", C:"As a method for achieving physical immortality.", D:"As a strict set of dietary restrictions."}, answer: "B", points: 2 },
                { id: "r_q_42", text: "2. According to Buddhist psychology, what constitutes 'the self'?", options: {A:"A permanent, unchanging soul.", B:"A dynamic compilation of five ever-shifting aggregates.", C:"An independent entity completely separated from the universe.", D:"A solid block of unchangeable identity."}, answer: "B", points: 2 },
                { id: "r_q_43", text: "3. What is identified as the primary source of human suffering (Dukkha) in this context?", options: {A:"A lack of material wealth and social status.", B:"The failure to strictly follow religious rituals.", C:"The desperate attempt to freeze our fluid identity into something permanent.", D:"The realization that our cells regenerate over time."}, answer: "C", points: 2 },
                { id: "r_q_44", text: "4. What is the ultimate result of profoundly realizing the truth of Anatman?", options: {A:"Severe depression and existential dread.", B:"An intense desire to defend one's ego and opinions.", C:"Absolute liberation and unshakeable peace by dissolving artificial boundaries.", D:"The complete loss of all biological functions."}, answer: "C", points: 2 }
            ]
        },
            {
            id: "r_s_012",
            article: "The concept of 'Interbeing,' coined by Zen Master Thich Nhat Hanh, offers a profound paradigm shift in how we perceive existence. Western philosophy has historically emphasized individualism—the idea that a person, or any object, exists independently, possessing its own inherent, isolated essence. 'Interbeing' completely dismantles this notion by asserting that nothing can exist by itself alone; everything must 'inter-be' with everything else.\n\nTo illustrate this, Hanh uses the metaphor of a sheet of paper. If you look deeply into the paper, you can see the cloud floating in it. Without the cloud, there is no rain; without the rain, the trees cannot grow; and without the trees, we cannot make paper. The paper also contains the sunshine, the logger who cut the tree, the logger's daily bread, and even the logger's parents. If you remove any of these non-paper elements, the paper ceases to exist. Therefore, the paper is completely empty of an independent self, yet it is full of the entire cosmos. This is not merely a poetic observation; it aligns strikingly with the findings of modern quantum physics, which views the universe as a vast, undivided web of dynamic relationships rather than a collection of separate building blocks. Embracing the reality of Interbeing shatters the ego's illusion of isolation. It fosters a radical form of compassion, as harming any part of the web is fundamentally recognized as harming oneself.",
            questions: [
                { id: "r_q_45", text: "1. How does the concept of 'Interbeing' challenge traditional Western philosophy?", options: {A:"It proves that physical objects do not actually exist in reality.", B:"It dismantles the idea that any entity can exist independently with an isolated essence.", C:"It argues that individualism is the only way to achieve economic success.", D:"It suggests that clouds and rain are the only true forces in the universe."}, answer: "B", points: 2 },
                { id: "r_q_46", text: "2. What is the purpose of the 'sheet of paper' metaphor in the passage?", options: {A:"To illustrate the complex environmental damage caused by the logging industry.", B:"To prove that paper is the most valuable material produced by human beings.", C:"To demonstrate that an object is made entirely of 'non-object' elements and cannot exist alone.", D:"To explain the complex chemical processes involved in manufacturing paper."}, answer: "C", points: 2 },
                { id: "r_q_47", text: "3. According to the author, the concept of Interbeing aligns closely with which modern scientific field?", options: {A:"Quantum physics", B:"Classical mechanics", C:"Evolutionary biology", D:"Computer science"}, answer: "A", points: 2 },
                { id: "r_q_48", text: "4. What is the ultimate ethical consequence of fully embracing the reality of Interbeing?", options: {A:"A desire to isolate oneself from the complexities of the modern world.", B:"A radical form of compassion arising from the realization that harming others harms oneself.", C:"A profound sense of despair regarding the fragile nature of the cosmos.", D:"A competitive drive to dominate the interconnected web of life."}, answer: "B", points: 2 }
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
            id: "e_s_004",
            questions: [
                { 
                    id: "q_trans_04", text: "中譯英：與其不斷追求外在的物質財富，我們更應該專注於培養內在的平靜與智慧。(8分)", type: "translation",
                    answer: "Instead of constantly pursuing external material wealth, we should focus more on cultivating inner peace and wisdom.", points: 8,
                    keywords: ["Instead of", "pursuing", "material wealth", "cultivating"] 
                },
                { 
                    id: "q_essay_04", text: "英文作文：請寫一篇約 120 字的文章。第一段描述一個能讓你感到完全放鬆與平靜的「避風港」（可以是一個實體空間，或是某個特定的活動）。第二段說明這個避風港如何幫助你面對生活中的挑戰。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：具體描寫該空間或活動的細節（視覺、聽覺等），並清楚說明其對心理狀態的正面影響。\n2. 組織連貫性：使用適當的轉折詞連結「平靜」與「面對挑戰」的因果關係。\n3. 詞彙與句法：精確使用如 sanctuary, unwind, recharge, resilience 等詞彙。", points: 20
                }
            ]
        },
            {
            id: "e_s_005",
            questions: [
                { 
                    id: "q_trans_05", text: "中譯英：與其僵硬地抗拒改變，我們必須學會像水一樣適應環境的起伏與無常。(8分)", type: "translation",
                    answer: "Instead of rigidly resisting change, we must learn to adapt to the ups and downs and the impermanence of the environment like water.", points: 8,
                    keywords: ["rigidly resisting", "adapt to", "ups and downs", "impermanence"] 
                },
                { 
                    id: "q_essay_05", text: "英文作文：請寫一篇約 120 字的文章。第一段描述一次你曾經歷過的「失敗或不如預期」的經驗。第二段說明你如何透過改變心態（如接受無常、放下執著），從這段經驗中獲得成長與內心的平靜。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：是否真實且具體地描述了挫折經驗，以及心態轉變的過程（從執著到放下）。\n2. 組織連貫性：段落間是否展現了清晰的情感轉折與因果學習。\n3. 詞彙與句法：精確使用如 setback, attachment, impermanence, inner peace, let go 等詞彙。", points: 20
                }
            ]
        },
            {
            id: "e_s_006",
            questions: [
                { 
                    id: "q_trans_06", text: "中譯英：執著於過去的錯誤只會帶來痛苦；真正的智慧在於原諒自己並專注於當下的每一刻。(8分)", type: "translation",
                    answer: "Clinging to past mistakes only brings suffering; true wisdom lies in forgiving oneself and focusing on every moment of the present.", points: 8,
                    keywords: ["Clinging to", "suffering", "true wisdom lies in", "focusing on"] 
                },
                { 
                    id: "q_essay_06", text: "英文作文：請寫一篇約 120 字的文章。現代社會節奏快速，許多人深受「錯失恐懼症」(FOMO - Fear Of Missing Out) 之苦。第一段說明 FOMO 如何影響人們的心理健康；第二段提出身為學生的你，如何透過「專注當下」(JOMO - Joy Of Missing Out) 來重獲心靈自由。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：精準描述 FOMO 的焦慮感（如一直滑手機怕錯過訊息），並清楚論述轉向 JOMO（享受錯過、獨處的喜悅）的實踐方法。\n2. 組織連貫性：前後段的對比必須強烈且自然。\n3. 詞彙與句法：精確使用如 anxiety, constant comparison, solitude, embrace, inner freedom 等詞彙。", points: 20
                }
            ]
        },
            {
            id: "e_s_007",
            questions: [
                { 
                    id: "q_trans_07", text: "中譯英：真正的自由並非隨心所欲，而是擁有自我約束的紀律，從而不受外在誘惑的控制。(8分)", type: "translation",
                    answer: "True freedom is not doing whatever you want, but having the discipline of self-restraint, thereby not being controlled by external temptations.", points: 8,
                    keywords: ["True freedom", "doing whatever you want", "discipline of self-restraint", "external temptations"] 
                },
                { 
                    id: "q_essay_07", text: "英文作文：請寫一篇約 120 字的文章。如果今天你擁有開發一款應用程式(App)或網站的能力，請在第一段描述這個系統的核心功能與美學設計原則。第二段說明你為何選擇將它設定為「免費、無廣告且開源」，以及這對社會的意義。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：清晰描繪系統的用途與極簡美學（如 vector graphics, pure design），並深刻論述無私分享（open-source, ad-free）的價值。\n2. 組織連貫性：從技術設計平順過渡到哲學理念與社會貢獻。\n3. 詞彙與句法：精確使用如 aesthetics, open-source, non-profit, altruism, sanctuary 等詞彙。", points: 20
                }
            ]
        },
            {
            id: "e_s_008",
            questions: [
                { 
                    id: "q_trans_08", text: "中譯英：為了在充滿干擾的世界中保持內心的平靜，我們必須學會專注於當下，一次只做一件事。(8分)", type: "translation",
                    answer: "In order to maintain inner peace in a world full of distractions, we must learn to focus on the present moment and do one thing at a time.", points: 8,
                    keywords: ["maintain inner peace", "distractions", "focus on the present moment", "do one thing at a time"] 
                },
                { 
                    id: "q_essay_08", text: "英文作文：請寫一篇約 120 字的文章。現代人常因「多工處理」(multitasking) 而感到疲憊。第一段請描述多工處理對你或周遭朋友造成的負面影響（如焦慮、效率低）。第二段請說明你如何透過實踐「單一任務」(single-tasking) 或「數位排毒」來找回專注力與心靈的寧靜。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：明確對比 multitasking 帶來的精神耗損與 single-tasking 帶來的安定感。\n2. 組織連貫性：能流暢描述從混亂到平靜的心境轉換過程。\n3. 詞彙與句法：精確使用 exhaustion, fragmented attention, intentional, mindful, tranquility 等詞彙。", points: 20
                }
            ]
        },
        // Set 8
        {
            id: "e_s_009",
            questions: [
                { 
                    id: "q_trans_09", text: "中譯英：人類並非自然的主宰，而是這個精密生態網絡中相互依存的一部分。(8分)", type: "translation",
                    answer: "Human beings are not the masters of nature, but an interdependent part of this delicate ecological web.", points: 8,
                    keywords: ["masters of nature", "interdependent", "delicate", "ecological web"] 
                },
                { 
                    id: "q_essay_09", text: "英文作文：請寫一篇約 120 字的文章。近年來極端氣候頻傳，第一段請描述你對地球環境現況的擔憂。第二段說明身為地球公民，我們在日常生活中可以採取哪些具體的「減法生活」（如減少消費、減少浪費），以展現對萬物的慈悲與尊重。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：將環保議題提升至對生命的「慈悲」層次，而非僅僅是回收。\n2. 組織連貫性：以生態危機為因，減法生活為果，邏輯嚴密。\n3. 詞彙與句法：精確使用 extreme weather, anthropocentric, minimalism, compassion, interconnectedness 等詞彙。", points: 20
                }
            ]
        },
        // Set 9
        {
            id: "e_s_010",
            questions: [
                { 
                    id: "q_trans_10", text: "中譯英：真正的傾聽不需要急著回應，而是放空自我，全心全意地接納對方的感受。(8分)", type: "translation",
                    answer: "True listening does not require rushing to respond, but rather emptying oneself and wholeheartedly accepting the other person's feelings.", points: 8,
                    keywords: ["True listening", "rushing to respond", "emptying oneself", "wholeheartedly accepting"] 
                },
                { 
                    id: "q_essay_10", text: "英文作文：請寫一篇約 120 字的文章。第一段分享一次你曾經因為「被深深傾聽與理解」而感到內心被治癒的經驗。第二段闡述你認為「放下自我中心」(letting go of the ego) 在建立真實人際連結中的重要性。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：真誠刻畫傾聽帶來的療癒力量，並點出 ego 是人際關係中最大阻礙的核心概念。\n2. 組織連貫性：能將個人經驗昇華至哲學層次的體悟。\n3. 詞彙與句法：精確使用 active listening, undivided attention, ego-driven, empathy, authentic connection 等詞彙。", points: 20
                }
            ]
        },
        // Set 10
        {
            id: "e_s_011",
            questions: [
                { 
                    id: "q_trans_11", text: "中譯英：我們越是試圖緊抓著事物不放，就越會感到焦慮；唯有徹底放下，才能獲得真正的解脫。(8分)", type: "translation",
                    answer: "The more we try to cling to things, the more anxious we feel; only by completely letting go can we achieve true liberation.", points: 8,
                    keywords: ["cling to", "anxious", "completely letting go", "true liberation"] 
                },
                { 
                    id: "q_essay_11", text: "英文作文：請寫一篇約 120 字的文章。這是一篇關於「無常與自由」的哲思。第一段請描述人們常因為害怕失去（如青春、名利、人際關係）而產生的痛苦。第二段說明我們如何透過擁抱「無常」(impermanence) 的真理，讓心靈獲得絕對的自由與寧靜。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：深刻剖析痛苦的根源在於對永恆的妄想，並說明接受無常即是解脫的途徑。\n2. 組織連貫性：以恐懼為起點，以寧靜為終點，展現心智蛻變的過程。\n3. 詞彙與句法：精確使用 attachment, illusion of permanence, inevitable, liberation, serenity 等高階哲學語彙。", points: 20
                }
            ]
        },
            {
            id: "e_s_012",
            questions: [
                { 
                    id: "q_trans_12", text: "中譯英：真正的智慧不在於累積無盡的知識，而在於有勇氣捨棄那些蒙蔽我們自性的偏見與執念。(8分)", type: "translation",
                    answer: "True wisdom lies not in accumulating endless knowledge, but in having the courage to discard the prejudices and attachments that obscure our true nature.", points: 8,
                    keywords: ["True wisdom lies not in", "accumulating", "discard", "prejudices and attachments", "obscure our true nature"] 
                },
                { 
                    id: "q_essay_12", text: "英文作文：請寫一篇約 150 字的文章。這是一場語言與思想的終極淬鍊。第一段請探討「語言的局限性」：為什麼最深刻的真理與情感（如絕對的寧靜、無私的愛）往往無法用文字精確表達。第二段請說明在日常生活中，我們應如何超越文字的表象，用心去感知事物背後「不可言說」(ineffable) 的本質。(20分)", type: "composition",
                    answer: "【官方評分標準】\n1. 內容完整性：能深刻論述語言作為工具的邊界，並提出「以心傳心」或「靜默感知」的實踐方式。\n2. 組織連貫性：展現出超越二元對立的哲學思維，邏輯推演極具深度。\n3. 詞彙與句法：精確且優美地使用如 ineffable, inadequacy of language, transcend, cognitive bias, intuitive awareness 等頂尖字彙。", points: 20
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
            id: "senior_L56_A_C", title: "高中 7000 單字 (Level 5-6 核心 A-C)",
            words: [
                { word: "alleviate", meaning: "v. 減輕；緩和", root: "ad (向) + levis (輕)", phonetic: "/əˈliː.vi.eɪt/" },
                { word: "anonymous", meaning: "adj. 匿名的", root: "an (無) + onym (名字)", phonetic: "/əˈnɑː.nə.məs/" },
                { word: "articulate", meaning: "v. 清楚表達 adj. 口齒清晰的", root: "articulus (關節) -> 節點分明", phonetic: "/ɑːrˈtɪk.jə.lət/" },
                { word: "assimilate", meaning: "v. 同化；吸收", root: "ad (向) + similis (相同)", phonetic: "/əˈsɪm.ə.leɪt/" },
                { word: "boycott", meaning: "v./n. 抵制", root: "源自愛爾蘭退租事件人物 Charles Boycott", phonetic: "/ˈbɔɪ.kɑːt/" },
                { word: "catastrophe", meaning: "n. 大災難", root: "cata (向下) + strophe (轉動) -> 翻天覆地", phonetic: "/kəˈtæs.trə.fi/" },
                { word: "chronological", meaning: "adj. 按年代順序的", root: "chron (時間) + logical", phonetic: "/ˌkrɑː.nəˈlɑː.dʒɪ.kəl/" },
                { word: "compatible", meaning: "adj. 相容的", root: "com (共同) + pati (忍受) + ible", phonetic: "/kəmˈpæt̬.ə.bəl/" },
                { word: "compensate", meaning: "v. 補償", root: "com (共同) + pend (秤重) -> 衡量給予", phonetic: "/ˈkɑːm.pən.seɪt/" },
                { word: "consensus", meaning: "n. 共識", root: "con (共同) + sens (感覺) -> 感覺一致", phonetic: "/kənˈsen.səs/" }
            ]
        },
        {
            id: "senior_L56_D_H", title: "高中 7000 單字 (Level 5-6 核心 D-H)",
            words: [
                { word: "deteriorate", meaning: "v. 惡化", root: "deterior (更糟) + ate", phonetic: "/dɪˈtɪr.i.ə.reɪt/" },
                { word: "differentiate", meaning: "v. 區分", root: "different (不同) + iate", phonetic: "/ˌdɪf.əˈren.ʃi.eɪt/" },
                { word: "dismantle", meaning: "v. 拆除", root: "dis (去除) + mantle (斗篷) -> 卸下外殼", phonetic: "/dɪˈsmæn.t̬əl/" },
                { word: "empirical", meaning: "adj. 經驗主義的；實證的", root: "em (進入) + peira (嘗試)", phonetic: "/ɪmˈpɪr.ɪ.kəl/" },
                { word: "fluctuate", meaning: "v. 波動", root: "fluct (流動) + ate", phonetic: "/ˈflʌk.tʃu.eɪt/" },
                { word: "formidable", meaning: "adj. 令人敬畏的；艱難的", root: "formido (恐懼) + able", phonetic: "/fɔːrˈmɪd.ə.bəl/" },
                { word: "hierarchy", meaning: "n. 階級制度", root: "hier (神聖) + archy (統治)", phonetic: "/ˈhaɪ.rɑːr.ki/" },
                { word: "homogeneous", meaning: "adj. 同質的", root: "homo (相同) + gen (產生) + eous", phonetic: "/ˌhoʊ.moʊˈdʒiː.ni.əs/" },
                { word: "hypothesis", meaning: "n. 假設", root: "hypo (在下) + thesis (放置) -> 基礎設定", phonetic: "/haɪˈpɑː.θə.sɪs/" },
                { word: "hysterical", meaning: "adj. 歇斯底里的", root: "hyster (子宮) -> 古代醫學誤解", phonetic: "/hɪˈster.ɪ.kəl/" }
            ]
        },
        {
            id: "senior_L56_I_P", title: "高中 7000 單字 (Level 5-6 核心 I-P)",
            words: [
                { word: "implement", meaning: "v. 實施 n. 工具", root: "im (進入) + ple (填滿)", phonetic: "/ˈɪm.plə.ment/" },
                { word: "incentive", meaning: "n. 動機；誘因", root: "in (進入) + cant (唱) -> 鼓舞", phonetic: "/ɪnˈsen.t̬ɪv/" },
                { word: "incorporate", meaning: "v. 合併；納入", root: "in (進入) + corpor (身體) -> 成為一體", phonetic: "/ɪnˈkɔːr.pɚ.eɪt/" },
                { word: "intrinsic", meaning: "adj. 固有的；內在的", root: "intra (在內) + secus (沿著)", phonetic: "/ɪnˈtrɪn.zɪk/" },
                { word: "legitimate", meaning: "adj. 合法的；正當的", root: "leg (法律) + itimate", phonetic: "/ləˈdʒɪt̬.ə.mət/" },
                { word: "manipulate", meaning: "v. 操縱", root: "mani (手) + pul (填滿) -> 用手控制", phonetic: "/məˈnɪp.jə.leɪt/" },
                { word: "metabolism", meaning: "n. 新陳代謝", root: "meta (改變) + bal (拋)", phonetic: "/məˈtæb.əl.ɪ.zəm/" },
                { word: "monopoly", meaning: "n. 壟斷", root: "mono (單一) + poly (賣)", phonetic: "/məˈnɑː.pəl.i/" },
                { word: "paradigm", meaning: "n. 典範；範例", root: "para (旁) + deiknynai (顯示)", phonetic: "/ˈper.ə.daɪm/" },
                { word: "profound", meaning: "adj. 深刻的；深奧的", root: "pro (向前) + found (底) -> 直達底部", phonetic: "/prəˈfaʊnd/" }
            ]
        },
        {
            id: "senior_L56_Q_Z", title: "高中 7000 單字 (Level 5-6 核心 Q-Z)",
            words: [
                { word: "qualitative", meaning: "adj. 性質的；定性的", root: "qual (品質) + itative", phonetic: "/ˈkwɑː.lə.teɪ.t̬ɪv/" },
                { word: "quantitative", meaning: "adj. 數量的；定量的", root: "quant (數量) + itative", phonetic: "/ˈkwɑːn.t̬ə.teɪ.t̬ɪv/" },
                { word: "reconcile", meaning: "v. 和解；使一致", root: "re (再) + concil (協商)", phonetic: "/ˈrek.ən.saɪl/" },
                { word: "scrutinize", meaning: "v. 詳細檢查", root: "scrutin (調查) + ize", phonetic: "/ˈskruː.t̬ən.aɪz/" },
                { word: "simultaneous", meaning: "adj. 同時的", root: "simul (同時) + taneous", phonetic: "/ˌsaɪ.məlˈteɪ.ni.əs/" },
                { word: "spontaneous", meaning: "adj. 自發的", root: "spon (承諾) -> 發自內心的", phonetic: "/spɑːnˈteɪ.ni.əs/" },
                { word: "terminate", meaning: "v. 終止", root: "termin (邊界/結束) + ate", phonetic: "/ˈtɝː.mə.neɪt/" },
                { word: "transition", meaning: "n. 轉變；過渡", root: "trans (跨越) + it (走) + ion", phonetic: "/trænˈzɪʃ.ən/" },
                { word: "versatile", meaning: "adj. 多才多藝的；多用途的", root: "vers (轉) + atile -> 能轉向多方的", phonetic: "/ˈvɝː.sə.t̬əl/" },
                { word: "vulnerable", meaning: "adj. 脆弱的；易受傷的", root: "vuln (傷口) + able", phonetic: "/ˈvʌl.nɚ.ə.bəl/" }
            ]
        },
        {
            id: "senior_L56_Batch2_A_E", title: "高中 7000 單字 (Level 5-6 擴充 A-E)",
            words: [
                { word: "alienate", meaning: "v. 使疏遠", root: "alienus (外國的/其他的) + ate", phonetic: "/ˈeɪ.li.ə.neɪt/" },
                { word: "allocate", meaning: "v. 分配；配置", root: "ad (向) + locus (地方) -> 放到指定位置", phonetic: "/ˈæl.ə.keɪt/" },
                { word: "bureaucracy", meaning: "n. 官僚體制；繁文縟節", root: "bureau (辦公桌) + cracy (統治)", phonetic: "/bjʊˈrɑː.krə.si/" },
                { word: "chronic", meaning: "adj. 慢性的；長期的", root: "chronos (時間) + ic", phonetic: "/ˈkrɑː.nɪk/" },
                { word: "coincide", meaning: "v. 同時發生；巧合", root: "co (共同) + in (進入) + cadere (落下)", phonetic: "/ˌkoʊ.ɪnˈsaɪd/" },
                { word: "default", meaning: "n./v. 預設值；違約", root: "de (加強) + fallere (失敗)", phonetic: "/dɪˈfɑːlt/" },
                { word: "deprive", meaning: "v. 剝奪", root: "de (完全) + privare (分離/剝奪)", phonetic: "/dɪˈpraɪv/" },
                { word: "dilemma", meaning: "n. 進退兩難", root: "di (兩次) + lemma (前提)", phonetic: "/dɪˈlem.ə/" },
                { word: "eloquent", meaning: "adj. 雄辯的；口才流利的", root: "e (出) + loqui (說話) + ent", phonetic: "/ˈel.ə.kwənt/" },
                { word: "explicit", meaning: "adj. 清楚明確的", root: "ex (出) + plicare (摺疊) -> 攤開來的", phonetic: "/ɪkˈsplɪs.ɪt/" }
            ]
        },
        {
            id: "senior_L56_Batch2_F_M", title: "高中 7000 單字 (Level 5-6 擴充 F-M)",
            words: [
                { word: "feasible", meaning: "adj. 可行的", root: "facere (做) + ible -> 做得到的", phonetic: "/ˈfiː.zə.bəl/" },
                { word: "fragile", meaning: "adj. 脆弱的；易碎的", root: "frangere (打破) + ile", phonetic: "/ˈfrædʒ.əl/" },
                { word: "hypocrisy", meaning: "n. 偽善", root: "hypo (在下) + krinein (判斷) -> 演戲", phonetic: "/hɪˈpɑː.krə.si/" },
                { word: "ideology", meaning: "n. 意識形態", root: "idea (思想) + logy (學問)", phonetic: "/ˌaɪ.diˈɑː.lə.dʒi/" },
                { word: "imply", meaning: "v. 暗示", root: "in (進入) + plicare (摺疊) -> 藏在裡面", phonetic: "/ɪmˈplaɪ/" },
                { word: "intricate", meaning: "adj. 複雜精細的", root: "in (進入) + tricae (障礙物)", phonetic: "/ˈɪn.trə.kət/" },
                { word: "literal", meaning: "adj. 字面上的；如實的", root: "littera (字母/文字) + al", phonetic: "/ˈlɪt̬.ɚ.əl/" },
                { word: "mandate", meaning: "n./v. 命令；授權", root: "manus (手) + dare (給予) -> 交託", phonetic: "/ˈmæn.deɪt/" },
                { word: "marginal", meaning: "adj. 邊緣的；微小的", root: "margo (邊界) + al", phonetic: "/ˈmɑːr.dʒɪ.nəl/" },
                { word: "mitigate", meaning: "v. 減輕；緩和", root: "mitis (溫和) + agere (做) + ate", phonetic: "/ˈmɪt̬.ə.ɡeɪt/" }
            ]
        },
        {
            id: "senior_L56_Batch2_N_S", title: "高中 7000 單字 (Level 5-6 擴充 N-S)",
            words: [
                { word: "notion", meaning: "n. 概念；觀念", root: "noscere (知道) + ion", phonetic: "/ˈnoʊ.ʃən/" },
                { word: "obscure", meaning: "adj. 模糊的；難懂的 v. 遮蔽", root: "ob (在上方) + scurus (覆蓋)", phonetic: "/əbˈskjʊr/" },
                { word: "optimum", meaning: "adj. 最佳的 n. 最佳條件", root: "optimus (最好的)", phonetic: "/ˈɑːp.tə.məm/" },
                { word: "prolong", meaning: "v. 延長", root: "pro (向前) + longus (長)", phonetic: "/prəˈlɑːŋ/" },
                { word: "redundant", meaning: "adj. 多餘的；累贅的", root: "re (再) + undare (波浪) -> 溢出", phonetic: "/rɪˈdʌn.dənt/" },
                { word: "resilience", meaning: "n. 韌性；恢復力", root: "re (回) + salire (跳躍) + ence", phonetic: "/rɪˈzɪl.jəns/" },
                { word: "scrutiny", meaning: "n. 仔細檢查", root: "scrutari (搜尋) + ny", phonetic: "/ˈskruː.t̬ən.i/" },
                { word: "subordinate", meaning: "adj. 次要的 n. 部屬", root: "sub (在下) + ordinare (排列)", phonetic: "/səˈbɔːr.dən.ət/" },
                { word: "subtle", meaning: "adj. 微妙的；難以察覺的", root: "sub (在下) + tela (網) -> 精細編織", phonetic: "/ˈsʌt̬.əl/" },
                { word: "susceptible", meaning: "adj. 易受影響的", root: "sub (在下) + capere (拿) + ible", phonetic: "/səˈsep.tə.bəl/" }
            ]
        },
        {
            id: "senior_L56_Batch2_T_Z", title: "高中 7000 單字 (Level 5-6 擴充 T-Z)",
            words: [
                { word: "tangible", meaning: "adj. 有形的；確實的", root: "tangere (觸摸) + ible", phonetic: "/ˈtæn.dʒə.bəl/" },
                { word: "tentative", meaning: "adj. 暫時的；猶豫的", root: "tentare (嘗試) + ive", phonetic: "/ˈten.t̬ə.t̬ɪv/" },
                { word: "trivial", meaning: "adj. 瑣碎的；微不足道的", root: "tri (三) + via (路) -> 三岔路口常見的", phonetic: "/ˈtrɪv.i.əl/" },
                { word: "ubiquitous", meaning: "adj. 無所不在的", root: "ubique (到處) + ous", phonetic: "/juːˈbɪk.wə.t̬əs/" },
                { word: "unprecedented", meaning: "adj. 史無前例的", root: "un (無) + pre (前) + cedere (走)", phonetic: "/ʌnˈpres.ə.den.t̬ɪd/" },
                { word: "validate", meaning: "v. 驗證；使生效", root: "validus (強壯) + ate", phonetic: "/ˈvæl.ə.deɪt/" },
                { word: "viable", meaning: "adj. 可實行的；能存活的", root: "vita (生命) -> 有生命力的", phonetic: "/ˈvaɪ.ə.bəl/" },
                { word: "warrant", meaning: "v. 保證；使正當 n. 搜索票", root: "源自古法語 guarant (保護)", phonetic: "/ˈwɔːr.ənt/" },
                { word: "withhold", meaning: "v. 保留；隱瞞", root: "with (回/反) + hold (抓住)", phonetic: "/wɪðˈhoʊld/" },
                { word: "zealous", meaning: "adj. 熱忱的；狂熱的", root: "zelos (熱情) + ous", phonetic: "/ˈzel.əs/" }
            ]
        },
        {
            id: "senior_L46_Exp_A1", title: "千字擴充計畫 (L4-6 : A-1)",
            words: [
                { word: "abnormal", meaning: "adj. 反常的；異常的", root: "ab (偏離) + normal (正常) -> 偏離常態", phonetic: "/æbˈnɔːr.məl/" },
                { word: "abrupt", meaning: "adj. 突然的；魯莽的", root: "ab (離開) + rumpere (打破) -> 突然斷裂", phonetic: "/əˈbrʌpt/" },
                { word: "accessible", meaning: "adj. 易接近的；可理解的", root: "ad (向) + cedere (走) + ible -> 走得到的", phonetic: "/əkˈses.ə.bəl/" },
                { word: "accumulate", meaning: "v. 累積；積聚", root: "ad (向) + cumulare (堆積)", phonetic: "/əˈkjuː.mjə.leɪt/" },
                { word: "aggravate", meaning: "v. 加重；使惡化", root: "ad (向) + gravis (沉重) -> 負擔加重", phonetic: "/ˈæɡ.rə.veɪt/" },
                { word: "anticipate", meaning: "v. 預期；期望", root: "ante (前) + capere (拿取) -> 提前在心中掌握", phonetic: "/ænˈtɪs.ə.peɪt/" },
                { word: "apparatus", meaning: "n. 儀器；機構", root: "ad (向) + parare (準備) -> 準備好的工具", phonetic: "/ˌæp.əˈræt̬.əs/" },
                { word: "arrogant", meaning: "adj. 傲慢的；自大的", root: "ad (向) + rogare (要求) -> 無理索求", phonetic: "/ˈer.ə.ɡənt/" },
                { word: "ascertain", meaning: "v. 查明；確定", root: "ad (向) + certus (確定)", phonetic: "/ˌæs.ɚˈteɪn/" },
                { word: "ascribe", meaning: "v. 歸因於", root: "ad (向) + scribere (寫) -> 記在...的名下", phonetic: "/əˈskraɪb/" }
            ]
        },
        {
            id: "senior_L46_Exp_A2", title: "千字擴充計畫 (L4-6 : A-2)",
            words: [
                { word: "assault", meaning: "n./v. 攻擊；襲擊", root: "ad (向) + saltare (跳躍) -> 撲向", phonetic: "/əˈsɑːlt/" },
                { word: "assess", meaning: "v. 評估；評定", root: "ad (向) + sedere (坐) -> 坐在旁邊估價", phonetic: "/əˈses/" },
                { word: "asset", meaning: "n. 資產；寶貴的特質", root: "ad (向) + satis (足夠) -> 足以抵債之物", phonetic: "/ˈæs.et/" },
                { word: "astray", meaning: "adv./adj. 迷路地；走偏的", root: "extra (在...之外) + vagari (漫遊)", phonetic: "/əˈstreɪ/" },
                { word: "attain", meaning: "v. 達到；獲得", root: "ad (向) + tangere (觸摸) -> 碰觸到目標", phonetic: "/əˈteɪn/" },
                { word: "attendant", meaning: "n. 服務員 adj. 伴隨的", root: "ad (向) + tendere (伸展/注意)", phonetic: "/əˈten.dənt/" },
                { word: "authoritative", meaning: "adj. 權威的；官方的", root: "auctor (創造者/大師) + itative", phonetic: "/əˈθɔːr.ə.t̬ə.t̬ɪv/" },
                { word: "auxiliary", meaning: "adj. 輔助的；備用的", root: "auxilium (幫助)", phonetic: "/ɑːɡˈzɪl.i.er.i/" },
                { word: "awe", meaning: "n. 敬畏 v. 使敬畏", root: "源自古諾斯語 agi (恐懼/敬畏)", phonetic: "/ɑː/" },
                { word: "axis", meaning: "n. 軸；核心", root: "源自拉丁語 axis (車軸)", phonetic: "/ˈæk.sɪs/" }
            ]
        },
        {
            id: "senior_L46_Exp_B1", title: "千字擴充計畫 (L4-6 : B-1)",
            words: [
                { word: "backbone", meaning: "n. 脊椎；骨氣", root: "back (背) + bone (骨) -> 支撐一切的根本", phonetic: "/ˈbæk.boʊn/" },
                { word: "ballot", meaning: "n. 選票；投票", root: "balla (球) -> 古代用小球投票", phonetic: "/ˈbæl.ət/" },
                { word: "banish", meaning: "v. 放逐；驅逐", root: "ban (宣告/禁止) -> 宣告驅逐出境", phonetic: "/ˈbæn.ɪʃ/" },
                { word: "barren", meaning: "adj. 貧瘠的；荒蕪的", root: "源自古法語 barhaigne (不孕的)", phonetic: "/ˈber.ən/" },
                { word: "behalf", meaning: "n. 代表；利益", root: "by (在旁邊) + half (側/面)", phonetic: "/bɪˈhæf/" },
                { word: "besiege", meaning: "v. 包圍；圍攻", root: "be (周圍) + siege (座位/封鎖)", phonetic: "/bɪˈsiːdʒ/" },
                { word: "betray", meaning: "v. 背叛；無意中洩露", root: "be (徹底) + tradere (交出)", phonetic: "/bɪˈtreɪ/" },
                { word: "bleak", meaning: "adj. 荒涼的；黯淡的", root: "源自古諾斯語 bleikr (蒼白的)", phonetic: "/bliːk/" },
                { word: "blunder", meaning: "n. 大錯 v. 犯蠢錯", root: "源自古諾斯語 blundra (閉著眼睛走)", phonetic: "/ˈblʌn.dɚ/" },
                { word: "blunt", meaning: "adj. 鈍的；直率的", root: "來源不明，可能與 blind (盲目) 同源", phonetic: "/blʌnt/" }
            ]
        },
        {
            id: "senior_L46_Exp_B2", title: "千字擴充計畫 (L4-6 : B-2)",
            words: [
                { word: "blur", meaning: "v. 使模糊 n. 模糊不清", root: "源自 blear (視線朦朧)", phonetic: "/blɝː/" },
                { word: "bog", meaning: "n. 沼澤 v. 陷入泥沼", root: "源自愛爾蘭語 bogach (柔軟的地面)", phonetic: "/bɑːɡ/" },
                { word: "bolster", meaning: "v. 支持；增強", root: "源自 bolster (長枕頭/墊子)", phonetic: "/ˈboʊl.stɚ/" },
                { word: "bonus", meaning: "n. 獎金；紅利", root: "源自拉丁語 bonus (好的)", phonetic: "/ˈboʊ.nəs/" },
                { word: "boom", meaning: "n./v. 繁榮；發出隆隆聲", root: "源自荷蘭語 bommen (嗡嗡作響)", phonetic: "/buːm/" },
                { word: "bound", meaning: "adj. 準備前往...的；必然的", root: "源自古諾斯語 buinn (準備好的)", phonetic: "/baʊnd/" },
                { word: "brink", meaning: "n. 邊緣", root: "源自古諾斯語 brekka (斜坡/懸崖邊)", phonetic: "/brɪŋk/" },
                { word: "brisk", meaning: "adj. 輕快的；生氣勃勃的", root: "源自法語 brusque (活潑的)", phonetic: "/brɪsk/" },
                { word: "bulk", meaning: "n. 體積；大部分", root: "源自古諾斯語 bulki (貨物)", phonetic: "/bʌlk/" },
                { word: "bulletin", meaning: "n. 公告；新聞快報", root: "bulla (印章/公文)", phonetic: "/ˈbʊl.ə.t̬ɪn/" }
            ]
        },
        {
            id: "senior_L46_Exp_C1", title: "千字擴充計畫 (L4-6 : C-1)",
            words: [
                { word: "calcium", meaning: "n. 鈣", root: "calx (石灰石) + ium", phonetic: "/ˈkæl.si.əm/" },
                { word: "calculation", meaning: "n. 計算；深思熟慮", root: "calculare (用小石子計算)", phonetic: "/ˌkæl.kjəˈleɪ.ʃən/" },
                { word: "calorie", meaning: "n. 卡路里", root: "calor (熱)", phonetic: "/ˈkæl.ɚ.i/" },
                { word: "capsule", meaning: "n. 膠囊；太空艙", root: "capsa (盒子) -> 小盒子", phonetic: "/ˈkæp.səl/" },
                { word: "captive", meaning: "n. 俘虜 adj. 被監禁的", root: "capere (抓取/拿) -> 被抓住的", phonetic: "/ˈkæp.tɪv/" },
                { word: "carbohydrate", meaning: "n. 碳水化合物", root: "carbo (碳) + hydro (水)", phonetic: "/ˌkɑːr.boʊˈhaɪ.dreɪt/" },
                { word: "cardinal", meaning: "adj. 主要的 n. 樞機主教", root: "cardo (門樞/關鍵)", phonetic: "/ˈkɑːr.dɪ.nəl/" },
                { word: "casualty", meaning: "n. 傷亡人員", root: "casus (倒下/落下) -> 倒下的人", phonetic: "/ˈkæʒ.ju.əl.ti/" },
                { word: "cater", meaning: "v. 迎合；提供飲食", root: "acatour (買手/承辦伙食者)", phonetic: "/ˈkeɪ.t̬ɚ/" },
                { word: "cavity", meaning: "n. 洞；蛀牙", root: "cavus (中空的)", phonetic: "/ˈkæv.ə.t̬i/" }
            ]
        },
        {
            id: "senior_L46_Exp_C2", title: "千字擴充計畫 (L4-6 : C-2)",
            words: [
                { word: "certify", meaning: "v. 證明；發放證書", root: "certus (確定) + fy (使) -> 使之確定", phonetic: "/ˈsɝː.t̬ə.faɪ/" },
                { word: "characterize", meaning: "v. 描述...的特性", root: "character (特徵) + ize", phonetic: "/ˈker.ək.tɚ.aɪz/" },
                { word: "charitable", meaning: "adj. 慈善的；寬容的", root: "caritas (愛/慈善) + able", phonetic: "/ˈtʃer.ə.t̬ə.bəl/" },
                { word: "cholesterol", meaning: "n. 膽固醇", root: "chole (膽汁) + stereos (固體)", phonetic: "/kəˈles.tə.roʊl/" },
                { word: "chuckle", meaning: "v./n. 輕聲笑；暗自發笑", root: "擬聲詞，源自 chuck (咯咯叫)", phonetic: "/ˈtʃʌk.əl/" },
                { word: "circuit", meaning: "n. 電路；環行", root: "circum (環繞) + ire (走) -> 繞一圈", phonetic: "/ˈsɝː.kɪt/" },
                { word: "civilize", meaning: "v. 使文明；教化", root: "civilis (公民的) + ize", phonetic: "/ˈsɪv.əl.aɪz/" },
                { word: "clamor", meaning: "n./v. 喧鬧；大聲要求", root: "clamare (喊叫)", phonetic: "/ˈklæm.ɚ/" },
                { word: "clan", meaning: "n. 宗族；氏族", root: "planta (後代/分支)", phonetic: "/klæn/" },
                { word: "climax", meaning: "n. 頂點；高潮", root: "klimax (梯子) -> 爬到最高處", phonetic: "/ˈklaɪ.mæks/" }
            ]
        },
        {
            id: "senior_L46_Exp_C3", title: "千字擴充計畫 (L4-6 : C-3)",
            words: [
                { word: "cling", meaning: "v. 緊抓；堅持；依戀", root: "源自古英語 clingan (黏附/收縮)", phonetic: "/klɪŋ/" },
                { word: "clinical", meaning: "adj. 臨床的；冷靜客觀的", root: "kline (床) -> 在病床邊的", phonetic: "/ˈklɪn.ɪ.kəl/" },
                { word: "clockwise", meaning: "adv./adj. 順時針的", root: "clock (時鐘) + wise (方向/方式)", phonetic: "/ˈklɑːk.waɪz/" },
                { word: "clumsy", meaning: "adj. 笨拙的；不得體的", root: "clumse (凍僵的) -> 動作不靈活", phonetic: "/ˈklʌm.zi/" },
                { word: "coalition", meaning: "n. 聯盟；聯合", root: "co (共同) + alescere (成長) -> 一起壯大", phonetic: "/ˌkoʊ.əˈlɪʃ.ən/" },
                { word: "coarse", meaning: "adj. 粗糙的；粗俗的", root: "course (常規/平常的) -> 未經雕琢的", phonetic: "/kɔːrs/" },
                { word: "coastal", meaning: "adj. 沿海的", root: "costa (肋骨/海岸) + al", phonetic: "/ˈkoʊ.stəl/" },
                { word: "coax", meaning: "v. 哄勸；耐心地處理", root: "cokes (傻瓜) -> 把人當傻瓜般哄騙", phonetic: "/koʊks/" },
                { word: "coherent", meaning: "adj. 有條理的；連貫的", root: "co (共同) + haerere (黏附) -> 緊密結合", phonetic: "/koʊˈhɪr.ənt/" },
                { word: "collide", meaning: "v. 碰撞；衝突", root: "col (共同) + laedere (打擊)", phonetic: "/kəˈlaɪd/" }
            ]
        },
        {
            id: "senior_L46_Exp_C4", title: "千字擴充計畫 (L4-6 : C-4)",
            words: [
                { word: "combat", meaning: "n./v. 戰鬥；打擊", root: "com (共同) + battere (打)", phonetic: "/ˈkɑːm.bæt/" },
                { word: "comet", meaning: "n. 彗星", root: "kometes (長髮的) -> 像長著尾巴的星", phonetic: "/ˈkɑː.mɪt/" },
                { word: "commemorate", meaning: "v. 紀念", root: "com (共同) + memorare (記住)", phonetic: "/kəˈmem.ə.reɪt/" },
                { word: "commence", meaning: "v. 開始；著手", root: "com (共同) + initiare (開始)", phonetic: "/kəˈmens/" },
                { word: "commentary", meaning: "n. 評論；實況報導", root: "commentum (發明/解釋) + ary", phonetic: "/ˈkɑː.mən.ter.i/" },
                { word: "commitment", meaning: "n. 承諾；奉獻", root: "com (完全) + mittere (交付) -> 全心投入", phonetic: "/kəˈmɪt.mənt/" },
                { word: "commodity", meaning: "n. 商品；日用品", root: "commodus (方便的/合適的)", phonetic: "/kəˈmɑː.də.t̬i/" },
                { word: "commonplace", meaning: "adj. 尋常的 n. 老生常談", root: "common (共同) + place (地方) -> 隨處可見", phonetic: "/ˈkɑː.mən.pleɪs/" },
                { word: "commute", meaning: "v. 通勤；減刑", root: "com (互相) + mutare (改變/交換)", phonetic: "/kəˈmjuːt/" },
                { word: "compact", meaning: "adj. 緊密的；小巧的 n. 契約", root: "com (共同) + pangere (固定)", phonetic: "/kəmˈpækt/" }
            ]
        },
        {
            id: "senior_L46_Exp_C5", title: "千字擴充計畫 (L4-6 : C-5)",
            words: [
                { word: "compel", meaning: "v. 強迫；驅使", root: "com (共同) + pellere (推)", phonetic: "/kəmˈpel/" },
                { word: "competence", meaning: "n. 能力；勝任", root: "com (共同) + petere (尋求) -> 足以競爭的能力", phonetic: "/ˈkɑːm.pə.t̬əns/" },
                { word: "compile", meaning: "v. 彙編；收集", root: "com (共同) + pilare (擠壓/堆積)", phonetic: "/kəmˈpaɪl/" },
                { word: "complement", meaning: "v./n. 補充；互補物", root: "com (完全) + plere (填滿)", phonetic: "/ˈkɑːm.plə.ment/" },
                { word: "complexion", meaning: "n. 膚色；氣色", root: "com (共同) + plectere (編織) -> 氣血交織的面貌", phonetic: "/kəmˈplek.ʃən/" },
                { word: "complexity", meaning: "n. 複雜性", root: "complexus (編織在一起) + ity", phonetic: "/kəmˈplek.sə.t̬i/" },
                { word: "complication", meaning: "n. 複雜化；併發症", root: "com (共同) + plicare (摺疊)", phonetic: "/ˌkɑːm.pləˈkeɪ.ʃən/" },
                { word: "compliment", meaning: "v./n. 讚美；恭維", root: "complementum (完成) -> 使人滿足的話語", phonetic: "/ˈkɑːm.plə.mənt/" },
                { word: "compromise", meaning: "v./n. 妥協；折衷", root: "com (共同) + promittere (承諾) -> 互相讓步達成協議", phonetic: "/ˈkɑːm.prə.maɪz/" },
                { word: "conceal", meaning: "v. 隱藏；隱瞞", root: "con (完全) + celare (隱藏)", phonetic: "/kənˈsiːl/" }
            ]
        },
        {
            id: "senior_L46_Exp_D1", title: "千字擴充計畫 (L4-6 : D-1)",
            words: [
                { word: "deduce", meaning: "v. 推論；演繹", root: "de (向下) + ducere (引導) -> 引導出結論", phonetic: "/dɪˈduːs/" },
                { word: "deduct", meaning: "v. 扣除；減去", root: "de (向下) + ducere (引導) -> 往下拿走", phonetic: "/dɪˈdʌkt/" },
                { word: "defect", meaning: "n. 缺點 v. 叛逃", root: "de (向下/離開) + facere (做) -> 沒做好", phonetic: "/ˈdiː.fekt/" },
                { word: "deficit", meaning: "n. 赤字；不足額", root: "deficere (缺乏)", phonetic: "/ˈdef.ə.sɪt/" },
                { word: "defy", meaning: "v. 反抗；公然藐視", root: "dis (分開) + fidus (信任) -> 拒絕效忠", phonetic: "/dɪˈfaɪ/" },
                { word: "degenerate", meaning: "v. 惡化；退化", root: "de (向下) + genus (種類) -> 品質下降", phonetic: "/dɪˈdʒen.ə.reɪt/" },
                { word: "degrade", meaning: "v. 降級；貶低；分解", root: "de (向下) + gradus (步/級)", phonetic: "/dɪˈɡreɪd/" },
                { word: "delinquent", meaning: "n. 違法者 adj. 怠忽職守的", root: "de (完全) + linquere (離開) -> 離棄正道", phonetic: "/dɪˈlɪŋ.kwənt/" },
                { word: "demographic", meaning: "adj. 人口統計的", root: "demos (人民) + graphein (寫)", phonetic: "/ˌdem.əˈɡræf.ɪk/" },
                { word: "denounce", meaning: "v. 譴責；告發", root: "de (向下/反對) + nuntiare (宣告)", phonetic: "/dɪˈnaʊns/" }
            ]
        },
        {
            id: "senior_L46_Exp_D2", title: "千字擴充計畫 (L4-6 : D-2)",
            words: [
                { word: "dense", meaning: "adj. 密集的；濃厚的", root: "densus (濃密/緊密)", phonetic: "/dens/" },
                { word: "depict", meaning: "v. 描繪；描述", root: "de (向下) + pingere (畫) -> 畫下來", phonetic: "/dɪˈpɪkt/" },
                { word: "derive", meaning: "v. 取得；源自", root: "de (向下) + rivus (河流) -> 引水流出", phonetic: "/dɪˈraɪv/" },
                { word: "descend", meaning: "v. 下降；傳承", root: "de (向下) + scandere (攀登)", phonetic: "/dɪˈsend/" },
                { word: "designate", meaning: "v. 指定；任命", root: "de (完全) + signare (標記) -> 畫上記號", phonetic: "/ˈdez.ɪɡ.neɪt/" },
                { word: "detach", meaning: "v. 分開；拆下", root: "de (分開) + attacher (連接) -> 解除執著", phonetic: "/dɪˈtætʃ/" },
                { word: "detain", meaning: "v. 拘留；扣留", root: "de (向下) + tenere (保持) -> 壓制住", phonetic: "/dɪˈteɪn/" },
                { word: "deter", meaning: "v. 嚇阻；阻礙", root: "de (離開) + terrere (恐嚇) -> 讓人不敢靠近", phonetic: "/dɪˈtɝː/" },
                { word: "devour", meaning: "v. 狼吞虎嚥；吞噬", root: "de (完全) + vorare (吞食)", phonetic: "/dɪˈvaʊ.ɚ/" },
                { word: "dialect", meaning: "n. 方言", root: "dia (之間) + legein (說話) -> 特定人群的交流", phonetic: "/ˈdaɪ.ə.lekt/" }
            ]
        },
        {
            id: "senior_L46_Exp_D3", title: "千字擴充計畫 (L4-6 : D-3)",
            words: [
                { word: "dictate", meaning: "v. 口述；命令", root: "dictare (說/命令)", phonetic: "/ˈdɪk.teɪt/" },
                { word: "diligence", meaning: "n. 勤奮；用功", root: "dis (分開) + legere (選擇) -> 專注於所選之事", phonetic: "/ˈdɪl.ə.dʒəns/" },
                { word: "dilute", meaning: "v. 稀釋；削弱", root: "di (分開) + luere (洗) -> 沖淡", phonetic: "/daɪˈluːt/" },
                { word: "dimension", meaning: "n. 尺寸；面向；維度", root: "dis (分開) + metiri (測量)", phonetic: "/ˌdaɪˈmen.ʃən/" },
                { word: "directory", meaning: "n. 目錄；指南", root: "dirigere (引導) -> 指引方向的書", phonetic: "/dɪˈrek.tɚ.i/" },
                { word: "discharge", meaning: "v./n. 排放；允許離開", root: "dis (去除) + carrus (車/負擔) -> 卸下重擔", phonetic: "/dɪsˈtʃɑːrdʒ/" },
                { word: "disclose", meaning: "v. 揭露；公開", root: "dis (打開) + claudere (關閉) -> 不再隱藏", phonetic: "/dɪˈskloʊz/" },
                { word: "discord", meaning: "n. 不和；紛爭", root: "dis (分開) + cor (心) -> 兩心相背", phonetic: "/ˈdɪs.kɔːrd/" },
                { word: "discrepancy", meaning: "n. 差異；不一致", root: "dis (分開) + crepare (發出聲音) -> 雜音", phonetic: "/dɪˈskrep.ən.si/" },
                { word: "discriminate", meaning: "v. 歧視；辨別", root: "dis (分開) + cernere (區分) -> 區別對待", phonetic: "/dɪˈskrɪm.ə.neɪt/" }
            ]
        },
        {
            id: "senior_L46_Exp_D4", title: "千字擴充計畫 (L4-6 : D-4)",
            words: [
                { word: "disgrace", meaning: "n./v. 恥辱；使丟臉", root: "dis (失去) + gratia (恩典/優雅)", phonetic: "/dɪsˈɡreɪs/" },
                { word: "dismay", meaning: "n./v. 沮喪；使驚慌", root: "dis (完全) + magan (力量) -> 失去力量", phonetic: "/dɪˈsmeɪ/" },
                { word: "dispatch", meaning: "v. 派遣；發送", root: "dis (分開) + pedicare (解開腳鐐) -> 迅速派出", phonetic: "/dɪˈspætʃ/" },
                { word: "disperse", meaning: "v. 驅散；散播", root: "dis (分開) + spargere (散播)", phonetic: "/dɪˈspɝːs/" },
                { word: "displace", meaning: "v. 取代；迫使離開", root: "dis (移開) + place (位置)", phonetic: "/dɪˈspleɪs/" },
                { word: "disposal", meaning: "n. 處理；處置", root: "dis (分開) + ponere (放置) -> 安排妥當", phonetic: "/dɪˈspoʊ.zəl/" },
                { word: "disrupt", meaning: "v. 擾亂；中斷", root: "dis (分開) + rumpere (打破) -> 使破裂", phonetic: "/dɪsˈrʌpt/" },
                { word: "dissolve", meaning: "v. 溶解；解散", root: "dis (分開) + solvere (鬆開) -> 化為無形", phonetic: "/dɪˈzɑːlv/" },
                { word: "distinct", meaning: "adj. 明顯的；截然不同的", root: "dis (分開) + stinguere (刺/標記) -> 標記清楚的", phonetic: "/dɪˈstɪŋkt/" },
                { word: "distract", meaning: "v. 使分心", root: "dis (分開) + trahere (拉) -> 把注意力拉走", phonetic: "/dɪˈstrækt/" }
            ]
        },
        {
            id: "senior_L46_Exp_D5", title: "千字擴充計畫 (L4-6 : D-5)",
            words: [
                { word: "diversify", meaning: "v. 使多樣化", root: "diversus (不同的) + fy (使)", phonetic: "/dɪˈvɝː.sə.faɪ/" },
                { word: "doctrine", meaning: "n. 教條；學說", root: "docere (教導)", phonetic: "/ˈdɑːk.trɪn/" },
                { word: "domain", meaning: "n. 領域；領地", root: "dominus (主人) -> 主人管轄之地", phonetic: "/doʊˈmeɪn/" },
                { word: "dome", meaning: "n. 圓頂", root: "domus (房屋)", phonetic: "/doʊm/" },
                { word: "donate", meaning: "v. 捐贈", root: "donare (給予) -> 無私奉獻", phonetic: "/ˈdoʊ.neɪt/" },
                { word: "drastic", meaning: "adj. 激烈的；徹底的", root: "drastikos (行動的/強烈的)", phonetic: "/ˈdræs.tɪk/" },
                { word: "drawback", meaning: "n. 缺點；障礙", root: "draw (拉) + back (回) -> 拉後腿的事物", phonetic: "/ˈdrɑː.bæk/" },
                { word: "dreary", meaning: "adj. 陰沉的；枯燥的", root: "源自古英語 dreorig (悲傷的/流血的)", phonetic: "/ˈdrɪr.i/" },
                { word: "dwindle", meaning: "v. 逐漸減少", root: "源自古英語 dwinan (衰退/萎縮)", phonetic: "/ˈdwɪn.dəl/" },
                { word: "ecstasy", meaning: "n. 狂喜；入迷", root: "ek (出) + stasis (站立) -> 靈魂出竅般的喜悅", phonetic: "/ˈek.stə.si/" }
            ]
        },
        {
            id: "senior_L46_Exp_E1", title: "千字擴充計畫 (L4-6 : E-1)",
            words: [
                { word: "edible", meaning: "adj. 可食用的", root: "edere (吃) + ible", phonetic: "/ˈed.ə.bəl/" },
                { word: "editorial", meaning: "n. 社論 adj. 編輯的", root: "editor (編輯) + ial", phonetic: "/ˌed.əˈtɔːr.i.əl/" },
                { word: "elite", meaning: "n. 菁英 adj. 菁英的", root: "eligere (挑選) -> 被挑選出來的", phonetic: "/iˈliːt/" },
                { word: "embark", meaning: "v. 登上(船/飛機)；開始", root: "em (進入) + barque (小船)", phonetic: "/ɪmˈbɑːrk/" },
                { word: "embed", meaning: "v. 嵌入；深植", root: "em (進入) + bed (床/底座)", phonetic: "/ɪmˈbed/" },
                { word: "embody", meaning: "v. 體現；具體表現", root: "em (進入) + body (身體) -> 賦予形體", phonetic: "/ɪmˈbɑː.di/" },
                { word: "emigrate", meaning: "v. 移居國外", root: "e (出) + migrare (遷移)", phonetic: "/ˈem.ə.ɡreɪt/" },
                { word: "emission", meaning: "n. 排放；散發物", root: "e (出) + mittere (發送/放出)", phonetic: "/iˈmɪʃ.ən/" },
                { word: "emit", meaning: "v. 散發；發出(光/聲音)", root: "e (出) + mittere (發送)", phonetic: "/iˈmɪt/" },
                { word: "endorse", meaning: "v. 背書；贊同", root: "en (在...上) + dorsum (背) -> 在背面簽名", phonetic: "/ɪnˈdɔːrs/" }
            ]
        },
        {
            id: "senior_L46_Exp_E2", title: "千字擴充計畫 (L4-6 : E-2)",
            words: [
                { word: "endow", meaning: "v. 賦予；捐贈", root: "en (使) + dotare (給予) -> 給予天賦或財富", phonetic: "/ɪnˈdaʊ/" },
                { word: "endurance", meaning: "n. 忍耐力；持久力", root: "en (使) + durus (堅硬) -> 使之堅韌持久", phonetic: "/ɪnˈdʊr.əns/" },
                { word: "enforce", meaning: "v. 執行；強制", root: "en (使) + fortis (強壯) -> 以力量強制實施", phonetic: "/ɪnˈfɔːrs/" },
                { word: "enrich", meaning: "v. 使豐富；使肥沃", root: "en (使) + rich (富有) -> 注入養分", phonetic: "/ɪnˈrɪtʃ/" },
                { word: "enroll", meaning: "v. 註冊；入學", root: "en (進入) + roll (名冊) -> 列入名單", phonetic: "/ɪnˈroʊl/" },
                { word: "enterprise", meaning: "n. 企業；冒險精神", root: "entre (之間) + prendre (拿) -> 承擔下來的事業", phonetic: "/ˈen.t̬ɚ.praɪz/" },
                { word: "entitle", meaning: "v. 給予權利；命名", root: "en (給予) + title (頭銜) -> 賦予資格", phonetic: "/ɪnˈtaɪ.t̬əl/" },
                { word: "entity", meaning: "n. 實體；獨立存在體", root: "ens (存在) + ity -> 具有本質的存在", phonetic: "/ˈen.t̬ə.t̬i/" },
                { word: "epidemic", meaning: "n. 流行病 adj. 傳染的", root: "epi (在...之上) + demos (人民) -> 降臨在人群中的", phonetic: "/ˌep.əˈdem.ɪk/" },
                { word: "episode", meaning: "n. 插曲；(影集的)一集", root: "epi (旁邊) + eisodos (進入) -> 穿插的事件", phonetic: "/ˈep.ə.soʊd/" }
            ]
        },
        {
            id: "senior_L46_Exp_E3", title: "千字擴充計畫 (L4-6 : E-3)",
            words: [
                { word: "equate", meaning: "v. 使相等；等同", root: "aequus (相等) + ate", phonetic: "/ɪˈkweɪt/" },
                { word: "equation", meaning: "n. 方程式；等式", root: "aequus (相等) + ation", phonetic: "/ɪˈkweɪ.ʒən/" },
                { word: "equivalent", meaning: "adj. 相等的 n. 等價物", root: "aequus (相等) + valere (價值) + ent", phonetic: "/ɪˈkwɪv.əl.ənt/" },
                { word: "erect", meaning: "v. 建立；豎立", root: "e (出) + regere (引導/使直) -> 筆直升起", phonetic: "/ɪˈrekt/" },
                { word: "erupt", meaning: "v. 爆發；噴出", root: "e (出) + rumpere (打破) -> 衝破而出", phonetic: "/ɪˈrʌpt/" },
                { word: "escort", meaning: "v./n. 護送；護衛", root: "ex (出) + corrigere (引導) -> 一路引領", phonetic: "/ˈes.kɔːrt/" },
                { word: "estate", meaning: "n. 地產；財產", root: "status (狀態/地位) -> 象徵地位的資產", phonetic: "/ɪˈsteɪt/" },
                { word: "esteem", meaning: "n./v. 尊敬；尊重", root: "aestimare (估價) -> 給予極高的評價", phonetic: "/ɪˈstiːm/" },
                { word: "ethics", meaning: "n. 倫理；道德學", root: "ethos (性格/道德)", phonetic: "/ˈeθ.ɪks/" },
                { word: "evacuate", meaning: "v. 撤離；疏散", root: "e (出) + vacuus (空) + ate -> 使之淨空", phonetic: "/ɪˈvæk.ju.eɪt/" }
            ]
        },
        {
            id: "senior_L46_Exp_E4", title: "千字擴充計畫 (L4-6 : E-4)",
            words: [
                { word: "evoke", meaning: "v. 喚起；引起", root: "e (出) + vocare (呼喚) -> 召喚出來", phonetic: "/ɪˈvoʊk/" },
                { word: "evolution", meaning: "n. 演化；發展", root: "e (出) + volvere (滾動) -> 漸進的展開", phonetic: "/ˌev.əˈluː.ʃən/" },
                { word: "exceed", meaning: "v. 超過；勝過", root: "ex (出) + cedere (走) -> 走到了界線之外", phonetic: "/ɪkˈsiːd/" },
                { word: "excel", meaning: "v. 擅長；突出", root: "ex (出) + cellere (升起) -> 高高升起", phonetic: "/ɪkˈsel/" },
                { word: "exception", meaning: "n. 例外", root: "ex (出) + capere (拿取) + ion -> 被單獨拿出來的", phonetic: "/ɪkˈsep.ʃən/" },
                { word: "excess", meaning: "n. 過量；過度", root: "ex (出) + cedere (走) -> 走過頭的狀態", phonetic: "/ɪkˈses/" },
                { word: "exclusive", meaning: "adj. 獨家的；排外的", root: "ex (出) + claudere (關閉) + ive -> 把其他人關在外面", phonetic: "/ɪkˈskluː.sɪv/" },
                { word: "execute", meaning: "v. 執行；處決", root: "ex (出) + sequi (跟隨) -> 跟隨指令到最後", phonetic: "/ˈek.sə.kjuːt/" },
                { word: "executive", meaning: "n. 高階主管 adj. 執行的", root: "ex (出) + sequi (跟隨) + ive", phonetic: "/ɪɡˈzek.jə.t̬ɪv/" },
                { word: "exempt", meaning: "adj. 被豁免的 v. 免除", root: "ex (出) + emere (買/拿) -> 拿出來不予計入", phonetic: "/ɪɡˈzempt/" }
            ]
        },
        {
            id: "senior_L46_Exp_E5", title: "千字擴充計畫 (L4-6 : E-5)",
            words: [
                { word: "exert", meaning: "v. 施加；運用(力量)", root: "ex (出) + serere (連接/放置) -> 將力量放出去", phonetic: "/ɪɡˈzɝːt/" },
                { word: "exhaust", meaning: "v. 耗盡；使筋疲力盡", root: "ex (出) + haurire (抽水) -> 抽乾一滴不剩", phonetic: "/ɪɡˈzɑːst/" },
                { word: "exile", meaning: "n./v. 流亡；放逐", root: "ex (出) + salire (跳躍/走) -> 走離故鄉", phonetic: "/ˈek.saɪl/" },
                { word: "exotic", meaning: "adj. 異國的；奇特的", root: "exo (外面) + tic -> 來自外部世界的", phonetic: "/ɪɡˈzɑː.t̬ɪk/" },
                { word: "expedition", meaning: "n. 遠征；探險", root: "ex (出) + ped (腳) + ition -> 邁開步伐走出去", phonetic: "/ˌek.spəˈdɪʃ.ən/" },
                { word: "expel", meaning: "v. 驅逐；開除", root: "ex (出) + pellere (推) -> 強行推出去", phonetic: "/ɪkˈspel/" },
                { word: "expertise", meaning: "n. 專業知識", root: "expertus (有經驗的) + ise", phonetic: "/ˌek.spɝːˈtiːz/" },
                { word: "expire", meaning: "v. 到期；呼氣", root: "ex (出) + spirare (呼吸) -> 吐出最後一口氣", phonetic: "/ɪkˈspaɪr/" },
                { word: "exploit", meaning: "v. 剝削；利用", root: "ex (出) + plicare (摺疊) -> 展開並榨取價值", phonetic: "/ɪkˈsplɔɪt/" },
                { word: "export", meaning: "v./n. 出口；輸出", root: "ex (出) + portare (攜帶) -> 帶出港口", phonetic: "/ɪkˈspɔːrt/" }
            ]
        },
        {
            id: "senior_L46_Exp_E6_F1", title: "千字擴充計畫 (L4-6 : E-6/F-1)",
            words: [
                { word: "extend", meaning: "v. 延伸；擴大", root: "ex (出) + tendere (伸展) -> 向外拉伸", phonetic: "/ɪkˈstend/" },
                { word: "exterior", meaning: "adj. 外部的 n. 外表", root: "exter (外面的) + ior", phonetic: "/ɪkˈstɪr.i.ɚ/" },
                { word: "external", meaning: "adj. 外部的；客觀的", root: "exter (外面的) + nal", phonetic: "/ɪkˈstɝː.nəl/" },
                { word: "extinct", meaning: "adj. 絕種的；熄滅的", root: "ex (出) + stinguere (刺/熄滅) -> 生命的火光消逝", phonetic: "/ɪkˈstɪŋkt/" },
                { word: "extract", meaning: "v. 提取；摘錄", root: "ex (出) + trahere (拉) -> 拉出來", phonetic: "/ɪkˈstrækt/" },
                { word: "faction", meaning: "n. 派系；小集團", root: "facere (做) + ion -> 形成各自做事的團體", phonetic: "/ˈfæk.ʃən/" },
                { word: "flaw", meaning: "n. 瑕疵；缺點", root: "源自古諾斯語 flaga (石板/碎片) -> 破裂處", phonetic: "/flɑː/" },
                { word: "fleet", meaning: "n. 艦隊；車隊", root: "源自古英語 fleot (船隻/漂浮)", phonetic: "/fliːt/" },
                { word: "flourish", meaning: "v. 繁榮；茂盛", root: "flos (花) -> 如花朵般盛開", phonetic: "/ˈflɝː.ɪʃ/" },
                { word: "fluid", meaning: "adj. 流體的；流動的", root: "fluere (流動) + id -> 形體不固定的", phonetic: "/ˈfluː.ɪd/" }
            ]
        },
        {
            id: "senior_L46_Exp_F2", title: "千字擴充計畫 (L4-6 : F-2)",
            words: [
                { word: "foil", meaning: "n. 箔；陪襯物 v. 阻撓", root: "folium (葉子) -> 薄如葉片", phonetic: "/fɔɪl/" },
                { word: "foliage", meaning: "n. (植物的)葉子統稱", root: "folium (葉子)", phonetic: "/ˈfoʊ.li.ɪdʒ/" },
                { word: "forbid", meaning: "v. 禁止；不許", root: "for (反對) + bid (命令) -> 下令不准", phonetic: "/fɚˈbɪd/" },
                { word: "forecast", meaning: "v./n. 預測；預報", root: "fore (前) + cast (投擲) -> 提前拋出看法", phonetic: "/ˈfɔːr.kæst/" },
                { word: "forge", meaning: "v. 鍛造；偽造", root: "fabrica (工坊) -> 在火爐中敲打成形", phonetic: "/fɔːrdʒ/" },
                { word: "format", meaning: "n. 格式 v. 格式化", root: "forma (形狀)", phonetic: "/ˈfɔːr.mæt/" },
                { word: "formulate", meaning: "v. 構想；制定", root: "forma (形狀) -> 使之成形", phonetic: "/ˈfɔːr.mjə.leɪt/" },
                { word: "forsake", meaning: "v. 拋棄；遺棄", root: "for (完全) + sake (爭求) -> 放棄爭取", phonetic: "/fɚˈseɪk/" },
                { word: "fortify", meaning: "v. 築防禦工事；強化", root: "fortis (強壯) + fy (使)", phonetic: "/ˈfɔːr.t̬ə.faɪ/" },
                { word: "foster", meaning: "v. 促進；培養；收養", root: "fodor (餵養) -> 供給養分使之成長", phonetic: "/ˈfɑː.stɚ/" }
            ]
        },
        {
            id: "senior_L46_Exp_F3", title: "千字擴充計畫 (L4-6 : F-3)",
            words: [
                { word: "foul", meaning: "adj. 惡臭的；犯規的", root: "ful (腐敗的/骯髒的)", phonetic: "/faʊl/" },
                { word: "fraction", meaning: "n. 分數；小部分", root: "frangere (打破) -> 破裂後的一小塊", phonetic: "/ˈfræk.ʃən/" },
                { word: "fracture", meaning: "n./v. 破裂；骨折", root: "frangere (打破) + ure", phonetic: "/ˈfræk.tʃɚ/" },
                { word: "fragment", meaning: "n. 碎片；未完成的部分", root: "frangere (打破) + ment", phonetic: "/ˈfræɡ.mənt/" },
                { word: "frantic", meaning: "adj. 發狂的；手忙腳亂的", root: "phrenitis (腦炎/狂亂) -> 失去理智的", phonetic: "/ˈfræn.t̬ɪk/" },
                { word: "fraud", meaning: "n. 詐騙；騙子", root: "fraus (欺騙/傷害)", phonetic: "/frɑːd/" },
                { word: "friction", meaning: "n. 摩擦；不和", root: "fricare (摩擦) + ion", phonetic: "/ˈfrɪk.ʃən/" },
                { word: "frontier", meaning: "n. 邊疆；新領域", root: "frons (前額/前方) -> 面對未知的前線", phonetic: "/frʌnˈtɪr/" },
                { word: "frustrate", meaning: "v. 挫敗；使感到灰心", root: "frustra (徒勞的) -> 努力卻落空", phonetic: "/ˈfrʌs.treɪt/" },
                { word: "furious", meaning: "adj. 狂怒的；猛烈的", root: "furia (狂怒) + ous", phonetic: "/ˈfjʊr.i.əs/" }
            ]
        },
        {
            id: "senior_L46_Exp_G1", title: "千字擴充計畫 (L4-6 : G-1)",
            words: [
                { word: "furnish", meaning: "v. 佈置；提供", root: "fournir (提供/裝備) -> 供應所需之物", phonetic: "/ˈfɝː.nɪʃ/" },
                { word: "fury", meaning: "n. 狂怒；暴怒", root: "furia (狂怒/復仇女神)", phonetic: "/ˈfjʊr.i/" },
                { word: "fuss", meaning: "n./v. 大驚小怪；忙亂", root: "來源不明，指無謂的擔憂與執著", phonetic: "/fʌs/" },
                { word: "gasp", meaning: "v./n. 喘息；倒抽一口氣", root: "擬聲詞，模仿急速吸氣的聲音", phonetic: "/ɡæsp/" },
                { word: "gauge", meaning: "v. 測量；判斷 n. 測量儀器", root: "jauge (古法語：測量桿)", phonetic: "/ɡeɪdʒ/" },
                { word: "gear", meaning: "n. 齒輪；裝備 v. 使適應", root: "gervi (古諾斯語：裝備/準備)", phonetic: "/ɡɪr/" },
                { word: "geometry", meaning: "n. 幾何學", root: "geo (土地) + metria (測量)", phonetic: "/dʒiˈɑː.mə.tri/" },
                { word: "glare", meaning: "v./n. 怒視；刺眼的強光", root: "glær (古英語：閃耀/琥珀)", phonetic: "/ɡler/" },
                { word: "gleam", meaning: "v./n. 閃爍；微光", root: "glæm (古英語：明亮的光)", phonetic: "/ɡliːm/" },
                { word: "glide", meaning: "v./n. 滑行；悄悄地走", root: "glidan (古英語：平滑地移動)", phonetic: "/ɡlaɪd/" }
            ]
        },
        {
            id: "senior_L46_Exp_G2", title: "千字擴充計畫 (L4-6 : G-2)",
            words: [
                { word: "glimmer", meaning: "v./n. 閃爍；一絲(希望)", root: "gleam 的頻率動詞 -> 隱約閃動", phonetic: "/ˈɡlɪm.ɚ/" },
                { word: "glimpse", meaning: "v./n. 瞥見；一瞥", root: "gleam 的變體 -> 短暫地看見", phonetic: "/ɡlɪmps/" },
                { word: "glisten", meaning: "v. 閃閃發光(指濕潤或反光的表面)", root: "glisnian (古英語：閃耀)", phonetic: "/ˈɡlɪs.ən/" },
                { word: "gloom", meaning: "n. 憂鬱；陰暗", root: "glom (古英語：昏暗/黃昏)", phonetic: "/ɡluːm/" },
                { word: "gospel", meaning: "n. 福音；絕對真理", root: "good (好) + spell (消息) -> 好消息", phonetic: "/ˈɡɑː.spəl/" },
                { word: "grace", meaning: "n. 優雅；恩典", root: "gratia (令人愉悅的特質)", phonetic: "/ɡreɪs/" },
                { word: "gracious", meaning: "adj. 親切的；和藹的", root: "gratia (令人愉悅的) + ous", phonetic: "/ˈɡreɪ.ʃəs/" },
                { word: "gravity", meaning: "n. 重力；嚴重性", root: "gravis (沉重) + ity", phonetic: "/ˈɡræv.ə.t̬i/" },
                { word: "graze", meaning: "v. 吃草；擦傷", root: "grasian (古英語：吃草) -> 輕輕掠過表面", phonetic: "/ɡreɪz/" },
                { word: "greed", meaning: "n. 貪婪", root: "grædig (古英語：渴望的/貪吃的)", phonetic: "/ɡriːd/" }
            ]
        },
        {
            id: "senior_L46_Exp_G3", title: "千字擴充計畫 (L4-6 : G-3)",
            words: [
                { word: "grief", meaning: "n. 悲傷；悲痛", root: "gravis (沉重) -> 內心承載的重擔", phonetic: "/ɡriːf/" },
                { word: "grieve", meaning: "v. 感到悲傷；使悲痛", root: "gravis (沉重) -> 使心靈沉重", phonetic: "/ɡriːv/" },
                { word: "grim", meaning: "adj. 嚴酷的；令人沮喪的", root: "grimm (古英語：凶猛的/嚴厲的)", phonetic: "/ɡrɪm/" },
                { word: "grip", meaning: "v./n. 緊握；掌握", root: "gripan (古英語：抓)", phonetic: "/ɡrɪp/" },
                { word: "groan", meaning: "v./n. 呻吟；抱怨", root: "granian (古英語：哀嘆)", phonetic: "/ɡroʊn/" },
                { word: "grope", meaning: "v. 摸索；暗中探索", root: "grapian (古英語：觸摸) -> 盲目地尋找", phonetic: "/ɡroʊp/" },
                { word: "gross", meaning: "adj. 總的；噁心的", root: "grossus (粗大的/整體的)", phonetic: "/ɡroʊs/" },
                { word: "growl", meaning: "v./n. 咆哮；低吼", root: "擬聲詞，模仿動物發怒的低鳴", phonetic: "/ɡraʊl/" },
                { word: "grumble", meaning: "v./n. 抱怨；發牢騷", root: "擬聲詞，指在喉嚨裡咕噥", phonetic: "/ˈɡrʌm.bəl/" },
                { word: "gulf", meaning: "n. 海灣；巨大的鴻溝", root: "kolpos (海灣/懷抱) -> 難以跨越的隔閡", phonetic: "/ɡʌlf/" }
            ]
        },
        {
            id: "senior_L46_Exp_H1", title: "千字擴充計畫 (L4-6 : H-1)",
            words: [
                { word: "handicap", meaning: "n. 障礙；不利條件", root: "hand in cap (古老的抽籤遊戲)", phonetic: "/ˈhæn.di.kæp/" },
                { word: "haunt", meaning: "v. 縈繞；出沒", root: "hatch (經常去的地方) -> 揮之不去", phonetic: "/hɑːnt/" },
                { word: "haven", meaning: "n. 避難所；港口", root: "haefen (古英語：港口/庇護所)", phonetic: "/ˈheɪ.vən/" },
                { word: "havoc", meaning: "n. 大破壞；浩劫", root: "havot (古法語：掠奪/破壞)", phonetic: "/ˈhæv.ək/" },
                { word: "hearty", meaning: "adj. 衷心的；豐盛的", root: "heart (心) + y -> 發自內心的", phonetic: "/ˈhɑːr.t̬i/" },
                { word: "heir", meaning: "n. 繼承人", root: "heres (拉丁語：繼承者)", phonetic: "/er/" },
                { word: "herald", meaning: "n. 先驅 v. 預示", root: "herwald (軍隊指揮官/傳令官)", phonetic: "/ˈher.əld/" },
                { word: "heredity", meaning: "n. 遺傳", root: "heres (繼承人) -> 傳承下來的特質", phonetic: "/həˈred.ə.t̬i/" },
                { word: "hijack", meaning: "v. 劫持", root: "來源不明，可能與攔路搶劫(high jack)有關", phonetic: "/ˈhaɪ.dʒæk/" },
                { word: "hinder", meaning: "v. 阻礙；妨礙", root: "hind (在後) -> 拖在後面使之變慢", phonetic: "/ˈhɪn.dɚ/" }
            ]
        },
        {
            id: "senior_L46_Exp_H2", title: "千字擴充計畫 (L4-6 : H-2)",
            words: [
                { word: "hinge", meaning: "n. 鉸鏈 v. 取決於", root: "hang (懸掛) -> 支撐轉動的關鍵", phonetic: "/hɪndʒ/" },
                { word: "hoarse", meaning: "adj. 沙啞的", root: "has (古英語：嘶啞的)", phonetic: "/hɔːrs/" },
                { word: "honk", meaning: "v./n. 按喇叭；雁鳴", root: "擬聲詞，模仿鵝或汽車喇叭聲", phonetic: "/hɑːŋk/" },
                { word: "hormone", meaning: "n. 荷爾蒙；激素", root: "horman (希臘語：刺激/喚起)", phonetic: "/ˈhɔːr.moʊn/" },
                { word: "hostage", meaning: "n. 人質", root: "hostis (陌生人/敵人) -> 押作抵押的人", phonetic: "/ˈhɑː.stɪdʒ/" },
                { word: "hound", meaning: "n. 獵犬 v. 糾纏", root: "hund (古英語：狗) -> 像獵犬般追逐", phonetic: "/haʊnd/" },
                { word: "hover", hovering: "v. 盤旋；徘徊", root: "hoven (中世紀英語：盤旋)", phonetic: "/ˈhʌv.ɚ/" },
                { word: "howl", meaning: "v./n. 嚎叫", root: "擬聲詞，模仿風聲或狼嚎", phonetic: "/haʊl/" },
                { word: "humiliate", meaning: "v. 羞辱；使丟臉", root: "humilis (卑微的/貼近泥土的)", phonetic: "/hjuːˈmɪl.i.eɪt/" },
                { word: "hygiene", meaning: "n. 衛生", root: "hygies (希臘語：健康的)", phonetic: "/ˈhaɪ.dʒiːn/" }
            ]
        },
        {
            id: "senior_L46_Exp_I1", title: "千字擴充計畫 (L4-6 : I-1)",
            words: [
                { word: "identical", meaning: "adj. 完全相同的", root: "idem (相同) + tical", phonetic: "/aɪˈden.t̬ə.kəl/" },
                { word: "idiom", meaning: "n. 慣用語；成語", root: "idio (私人的/特有的) -> 特定語言的獨特表達", phonetic: "/ˈɪd.i.əm/" },
                { word: "ignite", meaning: "v. 點燃；激起", root: "ignis (火) + ite", phonetic: "/ɪɡˈnaɪt/" },
                { word: "illuminate", meaning: "v. 照亮；闡明", root: "in (入) + lumen (光) -> 引入光線", phonetic: "/ɪˈluː.mə.neɪt/" },
                { word: "immune", meaning: "adj. 免疫的；免除的", root: "in (無) + munia (公共服務) -> 免除勞役或疾病", phonetic: "/ɪˈmjuːn/" },
                { word: "implement", meaning: "v. 實施 n. 工具", root: "in (入) + plere (填滿) -> 執行以達到圓滿", phonetic: "/ˈɪm.plə.ment/" },
                { word: "implicit", meaning: "adj. 暗示的；含蓄的", root: "in (入) + plicare (摺疊) -> 摺疊在內的", phonetic: "/ɪmˈplɪs.ɪt/" },
                { word: "imply", meaning: "v. 暗示；意味著", root: "in (入) + plicare (摺疊) -> 隱含", phonetic: "/ɪmˈplaɪ/" },
                { word: "impose", meaning: "v. 強加；課稅", root: "in (入) + ponere (放置) -> 強行放上去", phonetic: "/ɪmˈpoʊz/" },
                { word: "impulse", meaning: "n. 衝動；脈衝", root: "in (入) + pellere (推) -> 內在的推力", phonetic: "/ˈɪm.pʌls/" }
            ]
        },
        {
            id: "senior_L46_Exp_I2", title: "千字擴充計畫 (L4-6 : I-2)",
            words: [
                { word: "incentive", meaning: "n. 誘因；動機", root: "in (入) + canere (唱/施咒) -> 鼓舞人心的事物", phonetic: "/ɪnˈsen.t̬ɪv/" },
                { word: "incident", meaning: "n. 事件；插曲", root: "in (入) + cadere (落下) -> 掉下來的事", phonetic: "/ˈɪn.sɪ.dənt/" },
                { word: "incline", meaning: "v. 傾斜；傾向於", root: "in (向) + clinare (彎曲) -> 心意偏向", phonetic: "/ɪnˈklaɪn/" },
                { word: "incorporate", meaning: "v. 包含；將...併入", root: "in (入) + corpus (身體) -> 成為共同體", phonetic: "/ɪnˈkɔːr.pɚ.eɪt/" },
                { word: "index", meaning: "n. 索引；指標", root: "indicare (指出) -> 指引方向的標記", phonetic: "/ˈɪn.deks/" },
                { word: "indicate", meaning: "v. 指示；表明", root: "in (向) + dicare (宣告/指出)", phonetic: "/ˈɪn.də.keɪt/" },
                { word: "indifferent", meaning: "adj. 漠不關心的", root: "in (不) + different (不同) -> 覺得沒有差別", phonetic: "/ɪnˈdɪf.ɚ.ənt/" },
                { word: "indigenous", meaning: "adj. 本土的", root: "indu (在內) + gignere (產生) -> 內部生成的", phonetic: "/ɪnˈdɪdʒ.ə.nəs/" },
                { word: "indispensable", meaning: "adj. 不可或缺的", root: "in (不) + dispense (免除) + able -> 無法省去的", phonetic: "/ˌɪn.dɪˈspen.sə.bəl/" },
                { word: "induce", meaning: "v. 引起；誘使", root: "in (入) + ducere (引導) -> 導入某種狀態", phonetic: "/ɪnˈduːs/" }
            ]
        },
        {
            id: "senior_L46_Exp_I3", title: "千字擴充計畫 (L4-6 : I-3)",
            words: [
                { word: "indulge", meaning: "v. 沉溺於；縱容", root: "in (入) + longus (長) -> 放任慾望變長", phonetic: "/ɪnˈdʌldʒ/" },
                { word: "inevitable", meaning: "adj. 不可避免的", root: "in (不) + e (出) + vitare (避開) -> 躲不掉的", phonetic: "/ˌɪnˈev.ə.t̬ə.bəl/" },
                { word: "infant", meaning: "n. 嬰兒", root: "in (不) + fari (說話) -> 還不會說話的孩子", phonetic: "/ˈɪn.fənt/" },
                { word: "infect", meaning: "v. 感染；傳染", root: "in (入) + facere (做) -> 染上(疾病)", phonetic: "/ɪnˈfekt/" },
                { word: "infer", meaning: "v. 推論；推斷", root: "in (入) + ferre (帶來) -> 從證據中帶出結論", phonetic: "/ɪnˈfɝː/" },
                { word: "inferior", meaning: "adj. 次等的；下級的", root: "inferus (在下的)", phonetic: "/ɪnˈfɪr.i.ɚ/" },
                { word: "infinite", meaning: "adj. 無限的；極大的", root: "in (無) + finis (邊界) -> 沒有盡頭的", phonetic: "/ˈɪn.fə.nət/" },
                { word: "inflict", meaning: "v. 施加(傷害/打擊)", root: "in (入) + fligere (打擊) -> 把痛苦打入", phonetic: "/ɪnˈflɪkt/" },
                { word: "inherent", meaning: "adj. 固有的；與生俱來的", root: "in (入) + haerere (黏附) -> 緊緊相連的", phonetic: "/ɪnˈhɪr.ənt/" },
                { word: "inherit", meaning: "v. 繼承", root: "in (入) + heres (繼承人)", phonetic: "/ɪnˈher.ɪt/" }
            ]
        },
        {
            id: "senior_L46_Exp_I4", title: "千字擴充計畫 (L4-6 : I-4)",
            words: [
                { word: "initiate", meaning: "v. 開始；發起", root: "in (入) + ire (走) -> 走入起點", phonetic: "/ɪˈnɪʃ.i.eɪt/" },
                { word: "inject", meaning: "v. 注射；注入", root: "in (入) + jacere (投擲) -> 打入液體或資金", phonetic: "/ɪnˈdʒekt/" },
                { word: "injustice", meaning: "n. 不公義", root: "in (不) + justice (正義)", phonetic: "/ɪnˈdʒʌs.tɪs/" },
                { word: "innovate", meaning: "v. 創新；改革", root: "in (入) + novus (新) -> 引入新事物", phonetic: "/ˈɪn.ə.veɪt/" },
                { word: "inquire", meaning: "v. 詢問；調查", root: "in (入) + quaerere (尋求)", phonetic: "/ɪnˈkwaɪr/" },
                { word: "insane", meaning: "adj. 瘋狂的；精神錯亂的", root: "in (不) + sanus (健康的) -> 心智不健康的", phonetic: "/ɪnˈseɪn/" },
                { word: "insight", meaning: "n. 洞察力；深刻見解", root: "in (入) + sight (看) -> 看透事物內部的能力", phonetic: "/ˈɪn.saɪt/" },
                { word: "inspect", meaning: "v. 檢查；視察", root: "in (入) + specere (看) -> 往裡面仔細看", phonetic: "/ɪnˈspekt/" },
                { word: "inspire", meaning: "v. 啟發；鼓舞", root: "in (入) + spirare (呼吸) -> 注入靈氣與活力", phonetic: "/ɪnˈspaɪr/" },
                { word: "install", meaning: "v. 安裝；安置", root: "in (入) + stall (位置) -> 放到就位", phonetic: "/ɪnˈstɑːl/" }
            ]
        },
        {
            id: "senior_L46_Exp_I5", title: "千字擴充計畫 (L4-6 : I-5)",
            words: [
                { word: "instinct", meaning: "n. 本能；直覺", root: "in (入) + stinguere (刺) -> 內在的驅動力", phonetic: "/ˈɪn.stɪŋkt/" },
                { word: "institute", meaning: "n. 機構 v. 建立", root: "in (入) + statuere (建立) -> 設立起來的組織", phonetic: "/ˈɪn.stə.tuːt/" },
                { word: "instruct", meaning: "v. 指導；指示", root: "in (入) + struere (建造) -> 幫人建立知識架構", phonetic: "/ɪnˈstrʌkt/" },
                { word: "instrument", meaning: "n. 儀器；樂器", root: "in (入) + struere (建造) + ment -> 構成事物的工具", phonetic: "/ˈɪn.strə.mənt/" },
                { word: "intact", meaning: "adj. 完好如初的", root: "in (未) + tactus (觸摸) -> 沒被碰壞的", phonetic: "/ɪnˈtækt/" },
                { word: "integral", meaning: "adj. 不可或缺的；整體的", root: "integer (完整的) -> 構成整體必需的", phonetic: "/ˈɪn.t̬ə.ɡrəl/" },
                { word: "integrate", meaning: "v. 整合；融入", root: "integer (完整的) + ate -> 使之成為一體", phonetic: "/ˈɪn.t̬ə.ɡreɪt/" },
                { word: "intellect", meaning: "n. 智力；才智", root: "inter (之間) + legere (選擇) -> 能明辨是非的腦力", phonetic: "/ˈɪn.t̬əl.ekt/" },
                { word: "intend", meaning: "v. 打算；意圖", root: "in (向) + tendere (伸展) -> 心意伸向某處", phonetic: "/ɪnˈtend/" },
                { word: "intense", meaning: "adj. 強烈的；極度的", root: "in (向) + tendere (伸展) -> 緊繃的/強度的", phonetic: "/ɪnˈtens/" }
            ]
        },
        {
            id: "senior_L46_Exp_I6", title: "千字擴充計畫 (L4-6 : I-6)",
            words: [
                { word: "interact", meaning: "v. 互動；互相影響", root: "inter (之間) + act (行動)", phonetic: "/ˌɪn.t̬ɚˈækt/" },
                { word: "interfere", meaning: "v. 干涉；妨礙", root: "inter (之間) + ferire (打擊) -> 從中作梗", phonetic: "/ˌɪn.t̬ɚˈfɪr/" },
                { word: "interior", meaning: "adj. 內部的 n. 內部", root: "inter (在內) + ior (比較級)", phonetic: "/ɪnˈtɪr.i.ɚ/" },
                { word: "intermediate", meaning: "adj. 中級的；中間的", root: "inter (之間) + medius (中間)", phonetic: "/ˌɪn.t̬ɚˈmiː.di.ət/" },
                { word: "internal", meaning: "adj. 內部的；體內的", root: "internus (在內的)", phonetic: "/ɪnˈtɝː.nəl/" },
                { word: "interpret", meaning: "v. 解釋；口譯", root: "interpres (翻譯者/經紀人)", phonetic: "/ɪnˈtɝː.prət/" },
                { word: "interval", meaning: "n. 間隔；休息時間", root: "inter (之間) + vallum (牆) -> 兩牆之間的空隙", phonetic: "/ˈɪn.t̬ɚ.vəl/" },
                { word: "intimate", meaning: "adj. 親密的；私人的", root: "intimus (最裡面的)", phonetic: "/ˈɪn.t̬ə.mət/" },
                { word: "intimidate", meaning: "v. 威嚇；脅迫", root: "in (使) + timidus (害怕) -> 使人心生恐懼", phonetic: "/ɪnˈtɪm.ə.deɪt/" },
                { word: "invade", meaning: "v. 入侵；侵犯", root: "in (入) + vadere (走) -> 強行走進去", phonetic: "/ɪnˈveɪd/" }
            ]
        },
        {
            id: "senior_L46_Exp_J", title: "千字擴充計畫 (L4-6 : J)",
            words: [
                { word: "jeer", meaning: "v./n. 嘲笑；戲弄", root: "來源不明，可能為擬聲詞", phonetic: "/dʒɪr/" },
                { word: "jeopardy", meaning: "n. 危險；風險", root: "jeu parti (法語：均等的遊戲/風險)", phonetic: "/ˈdʒep.ɚ.di/" },
                { word: "jerk", meaning: "v./n. 猛然一拉；混蛋", root: "來源不明，可能為擬聲詞", phonetic: "/dʒɝːk/" },
                { word: "journal", meaning: "n. 期刊；日誌", root: "diurnus (每日的)", phonetic: "/ˈdʒɝː.nəl/" },
                { word: "judicial", meaning: "adj. 司法的；法庭的", root: "judex (法官)", phonetic: "/dʒuːˈdɪʃ.əl/" },
                { word: "junction", meaning: "n. 交叉口；連接", root: "jungere (連接)", phonetic: "/ˈdʒʌŋk.ʃən/" },
                { word: "justify", meaning: "v. 證明...為正當；為...辯護", root: "justus (正義) + fy (使)", phonetic: "/ˈdʒʌs.tə.faɪ/" },
                { word: "juvenile", meaning: "adj. 少年的 n. 青少年", root: "juvenis (年輕的)", phonetic: "/ˈdʒuː.və.nəl/" },
                { word: "jolt", meaning: "v./n. 猛烈搖晃；顛簸", root: "來源不明，類似 jerk", phonetic: "/dʒoʊlt/" },
                { word: "jurisdiction", meaning: "n. 司法權；管轄範圍", root: "jus (法律) + dicere (說) -> 依法宣判之權", phonetic: "/ˌdʒʊr.ɪsˈdɪk.ʃən/" }
            ]
        },
        {
            id: "senior_L46_Exp_K", title: "千字擴充計畫 (L4-6 : K)",
            words: [
                { word: "kidnap", meaning: "v. 綁架", root: "kid (小孩) + nap (抓取)", phonetic: "/ˈkɪd.næp/" },
                { word: "kidney", meaning: "n. 腎臟", root: "kid (子宮) + ney (蛋) -> 形狀如蛋的器官", phonetic: "/ˈkɪd.ni/" },
                { word: "kindle", meaning: "v. 點燃；激起", root: "cand (發光/變白)", phonetic: "/ˈkɪn.dəl/" },
                { word: "kinetic", meaning: "adj. 動力的；運動的", root: "kinein (希臘語：移動)", phonetic: "/kɪˈnet̬.ɪk/" },
                { word: "knack", meaning: "n. 訣竅；本領", root: "knak (中古英語：靈巧的手法)", phonetic: "/næk/" },
                { word: "kneel", meaning: "v. 跪下", root: "cneow (古英語：膝蓋)", phonetic: "/niːl/" },
                { word: "knight", meaning: "n. 騎士", root: "cniht (古英語：男孩/僕人) -> 君王的侍衛", phonetic: "/naɪt/" },
                { word: "knit", meaning: "v. 編織；緊密結合", root: "cnyttan (古英語：打結)", phonetic: "/nɪt/" },
                { word: "knob", meaning: "n. 圓形門把；旋鈕", root: "knobbe (中世紀低地德語：疙瘩/結)", phonetic: "/nɑːb/" },
                { word: "knot", meaning: "n. 結；難題 v. 打結", root: "cnotta (古英語：繩結)", phonetic: "/nɑːt/" }
            ]
        },
        {
            id: "senior_L46_Exp_L1", title: "千字擴充計畫 (L4-6 : L-1)",
            words: [
                { word: "laborious", meaning: "adj. 費力的；辛勤的", root: "labor (勞動) + ious", phonetic: "/ləˈbɔːr.i.əs/" },
                { word: "lateral", meaning: "adj. 側面的；橫向的", root: "latus (側面) + al", phonetic: "/ˈlæt̬.ɚ.əl/" },
                { word: "launch", meaning: "v. 發射；發起", root: "lancea (長矛) -> 如投擲長矛般射出", phonetic: "/lɑːntʃ/" },
                { word: "lavish", meaning: "adj. 奢華的；揮霍的", root: "lavare (洗/流) -> 如流水般毫不吝惜", phonetic: "/ˈlæv.ɪʃ/" },
                { word: "layout", meaning: "n. 佈局；設計", root: "lay (放置) + out (出來)", phonetic: "/ˈleɪ.aʊt/" },
                { word: "legacy", meaning: "n. 遺產；傳承", root: "legare (委派) -> 委託傳交之物", phonetic: "/ˈleɡ.ə.si/" },
                { word: "legislation", meaning: "n. 立法；法規", root: "lex (法律) + latio (提出)", phonetic: "/ˌledʒ.əˈsleɪ.ʃən/" },
                { word: "legitimate", meaning: "adj. 合法的；正當的", root: "lex (法律) + itimate", phonetic: "/ləˈdʒɪt̬.ə.mət/" },
                { word: "liable", meaning: "adj. 負有法律責任的", root: "ligare (綁) + able -> 被法律責任綁住", phonetic: "/ˈlaɪ.ə.bəl/" },
                { word: "liberate", meaning: "v. 解放；使自由", root: "liber (自由) + ate", phonetic: "/ˈlɪb.ə.reɪt/" }
            ]
        },
        {
            id: "senior_L46_Exp_L2", title: "千字擴充計畫 (L4-6 : L-2)",
            words: [
                { word: "limp", meaning: "v./n. 跛行 adj. 軟弱的", root: "源自古英語 lemp-halt (跛腳的)", phonetic: "/lɪmp/" },
                { word: "linger", meaning: "v. 逗留；徘徊", root: "leng (長) -> 拉長時間停留", phonetic: "/ˈlɪŋ.ɡɚ/" },
                { word: "linguistics", meaning: "n. 語言學", root: "lingua (舌頭/語言) + istics", phonetic: "/lɪŋˈɡwɪs.tɪks/" },
                { word: "literate", meaning: "adj. 識字的；有文化的", root: "littera (字母/文字) + ate", phonetic: "/ˈlɪt̬.ɚ.ət/" },
                { word: "longevity", meaning: "n. 長壽；壽命", root: "longus (長) + aevum (年齡/時代)", phonetic: "/lɑːnˈdʒev.ə.t̬i/" },
                { word: "magnitude", meaning: "n. 巨大；重要性；規模", root: "magnus (大) + itude (狀態)", phonetic: "/ˈmæɡ.nə.tuːd/" },
                { word: "majestic", meaning: "adj. 宏偉的；莊嚴的", root: "majus (偉大/崇高) + tic", phonetic: "/məˈdʒes.tɪk/" },
                { word: "mandatory", meaning: "adj. 強制的；義務的", root: "mandare (命令) + ory", phonetic: "/ˈmæn.də.tɔːr.i/" },
                { word: "maneuver", meaning: "n./v. 演習；巧妙操縱", root: "manus (手) + operari (工作) -> 純熟的手法", phonetic: "/məˈnuː.vɚ/" },
                { word: "manifest", meaning: "v. 顯示 adj. 明顯的", root: "manus (手) + festus (打擊) -> 手可觸及的", phonetic: "/ˈmæn.ə.fest/" }
            ]
        },
        {
            id: "senior_L46_Exp_M1", title: "千字擴充計畫 (L4-6 : M-1)",
            words: [
                { word: "manipulate", meaning: "v. 操縱；巧妙處理", root: "manus (手) + plere (填滿) -> 用手熟練操作", phonetic: "/məˈnɪp.jə.leɪt/" },
                { word: "manuscript", meaning: "n. 手稿；原稿", root: "manus (手) + scribere (寫)", phonetic: "/ˈmæn.jə.skrɪpt/" },
                { word: "marginal", meaning: "adj. 邊緣的；微小的", root: "margo (邊界) + al", phonetic: "/ˈmɑːr.dʒɪ.nəl/" },
                { word: "marine", meaning: "adj. 海洋的 n. 海軍陸戰隊", root: "mare (海) + ine", phonetic: "/məˈriːn/" },
                { word: "martial", meaning: "adj. 軍事的；尚武的", root: "Mars (羅馬戰神馬爾斯) + ial", phonetic: "/ˈmɑːr.ʃəl/" },
                { word: "marvel", meaning: "n./v. 奇蹟；感到驚訝", root: "mirus (奇妙的)", phonetic: "/ˈmɑːr.vəl/" },
                { word: "massacre", meaning: "n./v. 大屠殺", root: "源自古法語 maçacre (屠宰場)", phonetic: "/ˈmæs.ə.kɚ/" },
                { word: "massive", meaning: "adj. 巨大的；大量的", root: "massa (塊/團) + ive", phonetic: "/ˈmæs.ɪv/" },
                { word: "masterpiece", meaning: "n. 傑作；名著", root: "master (大師) + piece (作品)", phonetic: "/ˈmæs.tɚ.piːs/" },
                { word: "maternal", meaning: "adj. 母親的；母性的", root: "mater (母親) + nal", phonetic: "/məˈtɝː.nəl/" }
            ]
        },
        {
            id: "senior_L46_Exp_M2", title: "千字擴充計畫 (L4-6 : M-2)",
            words: [
                { word: "mechanism", meaning: "n. 機械裝置；機制", root: "mechanos (機器/工具) + ism", phonetic: "/ˈmek.ə.nɪ.zəm/" },
                { word: "mediate", meaning: "v. 調停；斡旋", root: "medius (中間) + ate -> 居中協調", phonetic: "/ˈmiː.di.eɪt/" },
                { word: "medieval", meaning: "adj. 中世紀的", root: "medius (中間) + aevum (時代)", phonetic: "/ˌmed.iˈiː.vəl/" },
                { word: "melancholy", meaning: "n./adj. 憂鬱(的)；愁思", root: "melan (黑) + chole (膽汁) -> 古代體液學說", phonetic: "/ˈmel.ən.kɑː.li/" },
                { word: "mellow", meaning: "adj. 柔和的；圓潤的 v. 變成熟", root: "melwa (古英語：熟透的)", phonetic: "/ˈmel.oʊ/" },
                { word: "menace", meaning: "n./v. 威脅；恐嚇", root: "minari (威脅)", phonetic: "/ˈmen.əs/" },
                { word: "mentality", meaning: "n. 心態；思想方法", root: "mens (心智) + ality", phonetic: "/menˈtæl.ə.t̬i/" },
                { word: "merchandise", meaning: "n. 商品；貨物 v. 推銷", root: "merc (交易/商人) + andise", phonetic: "/ˈmɝː.tʃən.daɪz/" },
                { word: "merge", meaning: "v. 合併；融合", root: "mergere (浸入/沉沒) -> 溶為一體", phonetic: "/mɝːdʒ/" },
                { word: "metaphor", meaning: "n. 隱喻；暗喻", root: "meta (跨越) + pherein (攜帶) -> 轉移意義", phonetic: "/ˈmet̬.ə.fɔːr/" }
            ]
        },

        {
            id: "senior_L46_Exp_N1", title: "千字擴充計畫 (L4-6 : N-1)",
            words: [
                { word: "narrate", meaning: "v. 敘述；作旁白", root: "narrare (講述/使知道)", phonetic: "/ˈner.eɪt/" },
                { word: "narrative", meaning: "n. 故事；敘事 adj. 敘事的", root: "narrare (講述) + ive", phonetic: "/ˈner.ə.t̬ɪv/" },
                { word: "navigate", meaning: "v. 導航；航行", root: "navis (船) + agere (駕駛)", phonetic: "/ˈnæv.ə.ɡeɪt/" },
                { word: "nominal", meaning: "adj. 名義上的；微不足道的", root: "nomen (名字) + al -> 只有名字的", phonetic: "/ˈnɑː.mə.nəl/" },
                { word: "notable", meaning: "adj. 顯著的；著名的", root: "notare (標記) + able -> 值得標記的", phonetic: "/ˈnoʊ.t̬ə.bəl/" },
                { word: "notify", meaning: "v. 通知；告知", root: "notus (已知) + fy (使) -> 使人知道", phonetic: "/ˈnoʊ.t̬ə.faɪ/" },
                { word: "notion", meaning: "n. 觀念；概念", root: "noscere (知道) + ion", phonetic: "/ˈnoʊ.ʃən/" },
                { word: "novelty", meaning: "n. 新奇(的事物)", root: "novus (新) + elty", phonetic: "/ˈnɑː.vəl.t̬i/" },
                { word: "nucleus", meaning: "n. 核心；原子核", root: "nux (堅果) -> 內核", phonetic: "/ˈnuː.kli.əs/" },
                { word: "objective", meaning: "n. 目標 adj. 客觀的", root: "ob (向) + jacere (投擲) -> 投射在前方的標的", phonetic: "/əbˈdʒek.tɪv/" }
            ]
        },
        {
            id: "senior_L46_Exp_O1", title: "千字擴充計畫 (L4-6 : O-1)",
            words: [
                { word: "obscure", meaning: "adj. 模糊的 v. 遮蔽", root: "ob (在上方) + scurus (覆蓋)", phonetic: "/əbˈskjʊr/" },
                { word: "obsession", meaning: "n. 執著；癡迷", root: "ob (在對面) + sedere (坐) -> 圍困/揮之不去", phonetic: "/əbˈseʃ.ən/" },
                { word: "offset", meaning: "v./n. 抵銷；彌補", root: "off (離開) + set (放置) -> 放在對立面以平衡", phonetic: "/ˈɑːf.set/" },
                { word: "offspring", meaning: "n. 後代；子嗣", root: "off (離開) + spring (跳出) -> 繁衍出來的生命", phonetic: "/ˈɑːf.sprɪŋ/" },
                { word: "option", meaning: "n. 選擇；選項", root: "optare (選擇) + ion", phonetic: "/ˈɑːp.ʃən/" },
                { word: "orthodox", meaning: "adj. 正統的；傳統的", root: "orthos (正確的) + doxa (意見)", phonetic: "/ˈɔːr.θə.dɑːks/" },
                { word: "outrage", meaning: "n./v. 憤怒；激怒", root: "ultra (超越) -> 越界的暴力行為", phonetic: "/ˈaʊt.reɪdʒ/" },
                { word: "paradox", meaning: "n. 悖論；自相矛盾的說法", root: "para (相反) + doxa (意見)", phonetic: "/ˈper.ə.dɑːks/" },
                { word: "paralyze", meaning: "v. 使癱瘓；使麻痺", root: "para (旁邊) + lyein (解開) -> 失去控制力", phonetic: "/ˈper.ə.laɪz/" },
                { word: "partial", meaning: "adj. 局部的；偏袒的", root: "pars (部分) + ial -> 只看局部的", phonetic: "/ˈpɑːr.ʃəl/" }
            ]
        },
        {
            id: "senior_L46_Exp_P1", title: "千字擴充計畫 (L4-6 : P-1)",
            words: [
                { word: "participate", meaning: "v. 參加；參與", root: "pars (部分) + capere (拿取) -> 佔有一份", phonetic: "/pɑːrˈtɪs.ə.peɪt/" },
                { word: "passionate", meaning: "adj. 熱情的；狂熱的", root: "passio (受苦/強烈情感) + ate", phonetic: "/ˈpæʃ.ən.ət/" },
                { word: "patent", meaning: "n. 專利 adj. 明顯的", root: "patere (打開/敞開) -> 公開的文件", phonetic: "/ˈpæt.ənt/" },
                { word: "pathetic", meaning: "adj. 可悲的；引起憐憫的", root: "pathos (情感/痛苦) + tic", phonetic: "/pəˈθet̬.ɪk/" },
                { word: "patrol", meaning: "v./n. 巡邏", root: "patouiller (在泥水中走) -> 踩踏巡視", phonetic: "/pəˈtroʊl/" },
                { word: "patron", meaning: "n. 贊助者；老顧客", root: "pater (父親) -> 像父親般的保護者", phonetic: "/ˈpeɪ.trən/" },
                { word: "penalty", meaning: "n. 處罰；罰款", root: "poena (懲罰) + alty", phonetic: "/ˈpen.əl.ti/" },
                { word: "penetrate", meaning: "v. 穿透；滲透", root: "penitus (在內部) -> 深入其中", phonetic: "/ˈpen.ə.treɪt/" },
                { word: "perceive", meaning: "v. 察覺；感知；理解", root: "per (完全) + capere (拿取) -> 用心智完全掌握", phonetic: "/pɚˈsiːv/" },
                { word: "perception", meaning: "n. 認知；感覺；洞察力", root: "per (完全) + capere (拿取) + tion", phonetic: "/pɚˈsep.ʃən/" }
            ]
        },
        {
            id: "senior_L46_Exp_P2", title: "千字擴充計畫 (L4-6 : P-2)",
            words: [
                { word: "peril", meaning: "n. 巨大的危險", root: "periculum (嘗試/危險)", phonetic: "/ˈper.əl/" },
                { word: "perish", meaning: "v. 毀滅；死亡；腐爛", root: "per (完全) + ire (走) -> 走到了盡頭", phonetic: "/ˈper.ɪʃ/" },
                { word: "permeate", meaning: "v. 滲透；瀰漫", root: "per (穿過) + meare (通過)", phonetic: "/ˈpɝː.mi.eɪt/" },
                { word: "persevere", meaning: "v. 堅持不懈", root: "per (始終) + severus (嚴格) -> 嚴格貫徹到底", phonetic: "/ˌpɝː.səˈvɪr/" },
                { word: "persist", meaning: "v. 堅持；持續", root: "per (始終) + sistere (站立) -> 一直站立不搖", phonetic: "/pɚˈsɪst/" },
                { word: "perspective", meaning: "n. 觀點；視角；透視法", root: "per (穿透) + specere (看) -> 看透事物的角度", phonetic: "/pɚˈspek.tɪv/" },
                { word: "pessimistic", meaning: "adj. 悲觀的", root: "pessimus (最壞的) + istic", phonetic: "/ˌpes.əˈmɪs.tɪk/" },
                { word: "phase", meaning: "n. 階段；時期", root: "phasis (顯現/星相) -> 呈現的過程", phonetic: "/feɪz/" },
                { word: "philosophy", meaning: "n. 哲學；人生觀", root: "philos (愛) + sophia (智慧)", phonetic: "/fɪˈlɑː.sə.fi/" },
                { word: "pierce", meaning: "v. 刺穿；穿透", root: "pertundere (穿透)", phonetic: "/pɪrs/" }
            ]
        },
        {
            id: "senior_L46_Exp_P3_Q", title: "千字擴充計畫 (L4-6 : P-3 / Q)",
            words: [
                { word: "piety", meaning: "n. 虔誠；孝順", root: "pius (盡責的/虔敬的)", phonetic: "/ˈpaɪ.ə.t̬i/" },
                { word: "pioneer", meaning: "n. 先驅 v. 開拓", root: "pedo (步兵) -> 走在最前線的人", phonetic: "/ˌpaɪ.əˈnɪr/" },
                { word: "plausible", meaning: "adj. 貌似真實的；有道理的", root: "plaudere (鼓掌) -> 值得拍手稱是的", phonetic: "/ˈplɑː.zə.bəl/" },
                { word: "ponder", meaning: "v. 沉思；仔細考慮", root: "pondus (重量) -> 在心中仔細掂量", phonetic: "/ˈpɑːn.dɚ/" },
                { word: "portray", meaning: "v. 描繪；詮釋", root: "pro (向前) + trahere (拉) -> 將形象拉現出來", phonetic: "/pɔːrˈtreɪ/" },
                { word: "potential", meaning: "adj. 潛在的 n. 潛力", root: "potens (力量) + ial", phonetic: "/poʊˈten.ʃəl/" },
                { word: "pragmatic", meaning: "adj. 務實的；實用主義的", root: "pragma (行為/事實) + tic", phonetic: "/præɡˈmæt̬.ɪk/" },
                { word: "precede", meaning: "v. 在...之前；早於", root: "pre (前) + cedere (走)", phonetic: "/priˈsiːd/" },
                { word: "preclude", meaning: "v. 排除；阻止", root: "pre (前) + claudere (關閉) -> 提前關上門", phonetic: "/prɪˈkluːd/" },
                { word: "qualify", meaning: "v. 使具有資格；限制", root: "qualis (何種類型) + fy (使)", phonetic: "/ˈkwɑː.lə.faɪ/" }
            ]
        },
        {
            id: "senior_L46_Exp_R1", title: "千字擴充計畫 (L4-6 : R-1)",
            words: [
                { word: "radiate", meaning: "v. 輻射；散發", root: "radius (光線/輪輻) + ate -> 向外發散", phonetic: "/ˈreɪ.di.eɪt/" },
                { word: "rally", meaning: "v./n. 集合；重振", root: "re (再) + allier (結合) -> 重新聚集力量", phonetic: "/ˈræl.i/" },
                { word: "realm", meaning: "n. 領域；王國", root: "regimen (統治) -> 權力所及的範圍", phonetic: "/relm/" },
                { word: "reap", meaning: "v. 收割；獲得(報酬)", root: "ripan (古英語：切割/收穫)", phonetic: "/riːp/" },
                { word: "rear", meaning: "n. 後部 adj. 後面的", root: "hrere (古英語：背後)", phonetic: "/rɪr/" },
                { word: "reassure", meaning: "v. 使安心；再保證", root: "re (再) + assure (保證) -> 消除疑慮", phonetic: "/ˌriː.əˈʃʊr/" },
                { word: "rebel", meaning: "v. 造反；反抗", root: "re (反) + bellum (戰爭) -> 舉起反旗", phonetic: "/ˈreb.əl/" },
                { word: "recede", meaning: "v. 退去；逐漸遠去", root: "re (回) + cedere (走) -> 向後退", phonetic: "/rɪˈsiːd/" },
                { word: "receipt", meaning: "n. 收據；收到", root: "re (回) + capere (拿) -> 拿回來的憑證", phonetic: "/rɪˈsiːt/" },
                { word: "reception", meaning: "n. 接收；接待(處)", root: "re (回) + capere (拿) + ion", phonetic: "/rɪˈsep.ʃən/" }
            ]
        },
        {
            id: "senior_L46_Exp_R2", title: "千字擴充計畫 (L4-6 : R-2)",
            words: [
                { word: "recession", meaning: "n. 經濟衰退；後退", root: "re (回) + cedere (走) + ion", phonetic: "/rɪˈseʃ.ən/" },
                { word: "recipient", meaning: "n. 接受者", root: "re (回) + capere (拿) + ent", phonetic: "/rɪˈsɪp.i.ənt/" },
                { word: "reckon", meaning: "v. 認為；計算", root: "gerecenian (古英語：解釋/敘述)", phonetic: "/ˈrek.ən/" },
                { word: "reclaim", meaning: "v. 取回；開墾", root: "re (回) + clamare (喊叫) -> 呼喚回來", phonetic: "/rɪˈkleɪm/" },
                { word: "recur", meaning: "v. 再發生；重現", root: "re (再) + currere (跑) -> 再次跑來", phonetic: "/rɪˈkɝː/" },
                { word: "refine", meaning: "v. 提煉；改良", root: "re (再) + fine (精細) -> 使之更純粹", phonetic: "/rɪˈfaɪn/" },
                { word: "reflective", meaning: "adj. 反射的；深思的", root: "re (回) + flectere (彎曲) + ive", phonetic: "/rɪˈflek.tɪv/" },
                { word: "refrain", meaning: "v. 克制；忍住", root: "re (回) + frenare (勒住馬韁)", phonetic: "/rɪˈfreɪn/" },
                { word: "refuge", meaning: "n. 避難所；庇護", root: "re (回) + fugere (逃跑) -> 逃往安全處", phonetic: "/ˈref.juːdʒ/" },
                { word: "refund", meaning: "n./v. 退款", root: "re (回) + fundere (倒/流) -> 把錢倒回去", phonetic: "/ˈriː.fʌnd/" }
            ]
        },
        {
            id: "senior_L46_Exp_R3", title: "千字擴充計畫 (L4-6 : R-3)",
            words: [
                { word: "regime", meaning: "n. 政權；管理體制", root: "regere (統治) -> 統治的系統", phonetic: "/reɪˈʒiːm/" },
                { word: "reign", meaning: "n./v. 統治；支配", root: "regere (統治)", phonetic: "/reɪn/" },
                { word: "rejoice", meaning: "v. 欣喜；高興", root: "re (再) + gaudere (喜悅)", phonetic: "/rɪˈdʒɔɪs/" },
                { word: "relay", meaning: "v. 轉達 n. 接力賽", root: "re (再) + lay (放置) -> 接續傳遞", phonetic: "/ˈriː.leɪ/" },
                { word: "reliance", meaning: "n. 依賴；信賴", root: "re (回) + ligare (綁) -> 依靠在某物上", phonetic: "/rɪˈlaɪ.əns/" },
                { word: "relic", meaning: "n. 遺跡；遺物", root: "relinquere (留下/放棄) -> 留存下來的物品", phonetic: "/ˈrel.ɪk/" },
                { word: "relinquish", meaning: "v. 放棄；交出", root: "re (回) + linquere (離開) -> 鬆手放開", phonetic: "/rɪˈlɪŋ.kwɪʃ/" },
                { word: "relish", meaning: "v. 享受；喜愛", root: "reles (古法語：餘味/味道)", phonetic: "/ˈrel.ɪʃ/" },
                { word: "remainder", meaning: "n. 剩餘物；其餘的人", root: "re (回) + manere (停留) -> 留下來的部分", phonetic: "/rɪˈmeɪn.dɚ/" },
                { word: "remedy", meaning: "n. 療法；補救辦法", root: "re (再) + mederi (治療)", phonetic: "/ˈrem.ə.di/" }
            ]
        },
        {
            id: "senior_L46_Exp_R4", title: "千字擴充計畫 (L4-6 : R-4)",
            words: [
                { word: "remnant", meaning: "n. 殘餘；零頭", root: "re (回) + manere (停留) -> 剩下的片段", phonetic: "/ˈrem.nənt/" },
                { word: "render", meaning: "v. 使得；給予", root: "re (回) + dare (給予) -> 交還/呈現", phonetic: "/ˈren.dɚ/" },
                { word: "renew", meaning: "v. 更新；恢復", root: "re (再) + new (新) -> 使再次如新", phonetic: "/rɪˈnuː/" },
                { word: "renown", meaning: "n. 名聲；聲譽", root: "re (再) + nomer (命名) -> 名字被反覆傳頌", phonetic: "/rɪˈnaʊn/" },
                { word: "repel", meaning: "v. 擊退；使反感", root: "re (反) + pellere (推) -> 推開", phonetic: "/rɪˈpel/" },
                { word: "repent", meaning: "v. 悔悟；懺悔", root: "re (再) + paenitere (使後悔)", phonetic: "/rɪˈpent/" },
                { word: "replenish", meaning: "v. 補充；把...裝滿", root: "re (再) + plenus (滿的) -> 再次注滿", phonetic: "/rɪˈplen.ɪʃ/" },
                { word: "repress", meaning: "v. 壓抑；鎮壓", root: "re (回) + pressare (壓) -> 往下壓制", phonetic: "/rɪˈpres/" },
                { word: "reproach", meaning: "v./n. 責備；斥責", root: "re (反) + prope (靠近) -> 帶著敵意靠近", phonetic: "/rɪˈproʊtʃ/" },
                { word: "reproduce", meaning: "v. 繁殖；複製", root: "re (再) + produce (生產) -> 再次製造", phonetic: "/ˌriː.prəˈduːs/" }
            ]
        },
        {
            id: "senior_L46_Exp_R5", title: "千字擴充計畫 (L4-6 : R-5)",
            words: [
                { word: "reptile", meaning: "n. 爬蟲類", root: "repere (爬行)", phonetic: "/ˈrep.taɪl/" },
                { word: "repudiate", meaning: "v. 駁斥；拒絕接受", root: "re (反) + pudere (感到羞恥) -> 劃清界線", phonetic: "/rɪˈpjuː.di.eɪt/" },
                { word: "resemble", meaning: "v. 像；與...相似", root: "re (再) + simulare (使相似)", phonetic: "/rɪˈzem.bəl/" },
                { word: "resent", meaning: "v. 怨恨；對...感到不滿", root: "re (反) + sentire (感覺) -> 懷有反感情緒", phonetic: "/rɪˈzent/" },
                { word: "reserve", meaning: "v. 保留；預訂", root: "re (回) + servare (保持)", phonetic: "/rɪˈzɝːv/" },
                { word: "reside", meaning: "v. 居住；駐在", root: "re (回) + sedere (坐) -> 安坐於此", phonetic: "/rɪˈzaɪd/" },
                { word: "resign", meaning: "v. 辭職；放棄", root: "re (反) + signare (簽名) -> 註銷合約", phonetic: "/rɪˈzaɪn/" },
                { word: "resolve", meaning: "v. 解決；下定決心", root: "re (再) + solvere (鬆開/解開) -> 解開難題", phonetic: "/rɪˈzɑːlv/" },
                { word: "resort", meaning: "v. 訴諸 n. 渡假勝地", root: "re (再) + sortir (出去) -> 頻繁前往之處", phonetic: "/rɪˈzɔːrt/" },
                { word: "respective", meaning: "adj. 各自的；分別的", root: "respectus (回顧/考量) + ive", phonetic: "/rɪˈspek.tɪv/" }
            ]
        },
        {
            id: "senior_L46_Exp_R6", title: "千字擴充計畫 (L4-6 : R-6)",
            words: [
                { word: "restore", meaning: "v. 恢復；修復", root: "re (再) + staurare (建立) -> 重新立起", phonetic: "/rɪˈstɔːr/" },
                { word: "restrain", meaning: "v. 限制；抑制", root: "re (回) + stringere (綁緊) -> 往回拉住", phonetic: "/rɪˈstreɪn/" },
                { word: "restrict", meaning: "v. 限制；約束", root: "re (回) + stringere (綁緊)", phonetic: "/rɪˈstrɪkt/" },
                { word: "resume", meaning: "v. 恢復；重新開始", root: "re (再) + sumere (拿取) -> 再次拿起", phonetic: "/rɪˈzuːm/" },
                { word: "retail", meaning: "n./v. 零售", root: "re (再) + tailler (切) -> 切成小塊販售", phonetic: "/ˈriː.teɪl/" },
                { word: "retain", meaning: "v. 保留；保持", root: "re (回) + tenere (握住) -> 握在手中不放", phonetic: "/rɪˈteɪn/" },
                { word: "retaliate", meaning: "v. 報復；回擊", root: "re (回) + talis (同樣的) -> 以牙還牙", phonetic: "/rɪˈtæl.i.eɪt/" },
                { word: "retreat", meaning: "v./n. 撤退；靜修", root: "re (回) + trahere (拉) -> 向後拉開距離", phonetic: "/rɪˈtriːt/" },
                { word: "retrieve", meaning: "v. 找回；檢索", root: "re (再) + trouver (找到)", phonetic: "/rɪˈtriːv/" },
                { word: "retrospect", meaning: "n. 回顧；追溯", root: "retro (向後) + specere (看) -> 往回看", phonetic: "/ˈret.roʊ.spekt/" }
            ]
        },
        {
            id: "senior_L46_Exp_R7", title: "千字擴充計畫 (L4-6 : R-7)",
            words: [
                { word: "revere", meaning: "v. 尊崇；敬畏", root: "re (加強) + vereri (敬畏)", phonetic: "/rɪˈvɪr/" },
                { word: "reverse", meaning: "v. 倒轉 adj. 相反的", root: "re (回) + vertere (轉) -> 轉向反面", phonetic: "/rɪˈvɝːs/" },
                { word: "revive", meaning: "v. 使復甦；復興", root: "re (再) + vivere (活) -> 再次活過來", phonetic: "/rɪˈvaɪv/" },
                { word: "revolt", meaning: "v./n. 叛亂；反抗", root: "re (反) + volvere (滾動) -> 推翻現狀", phonetic: "/rɪˈvoʊlt/" },
                { word: "revolve", meaning: "v. 旋轉；圍繞", root: "re (再) + volvere (滾動) -> 不斷繞圈", phonetic: "/rɪˈvɑːlv/" },
                { word: "rigid", meaning: "adj. 堅硬的；死板的", root: "rigere (僵硬)", phonetic: "/ˈrɪdʒ.ɪd/" },
                { word: "rigorous", meaning: "adj. 嚴格的；嚴密的", root: "rigere (僵硬) -> 毫不通融的", phonetic: "/ˈrɪɡ.ɚ.əs/" },
                { word: "rim", meaning: "n. 邊緣；框", root: "rima (古英語：邊緣/裂縫)", phonetic: "/rɪm/" },
                { word: "riot", meaning: "n./v. 暴動；喧鬧", root: "riote (古法語：爭論/喧嘩)", phonetic: "/ˈraɪ.ət/" },
                { word: "ripple", meaning: "n./v. 漣漪；起漣漪", root: "rimpan (古英語：起皺紋)", phonetic: "/ˈrɪp.əl/" }
            ]
        },
        {
            id: "senior_L46_Exp_R8_S1", title: "千字擴充計畫 (L4-6 : R-8 / S-1)",
            words: [
                { word: "roam", meaning: "v. 漫遊；閒逛", root: "ramen (中古英語：漫遊/徘徊)", phonetic: "/roʊm/" },
                { word: "robust", meaning: "adj. 強健的；堅固的", root: "robur (橡木/力量) -> 如橡木般結實", phonetic: "/roʊˈbʌst/" },
                { word: "rot", meaning: "v. 腐爛；腐敗", root: "rotian (古英語：腐壞)", phonetic: "/rɑːt/" },
                { word: "rotate", meaning: "v. 旋轉；輪替", root: "rota (輪子) + ate", phonetic: "/ˈroʊ.teɪt/" },
                { word: "rouse", meaning: "v. 喚起；激醒", root: "來源不明，可能與 raise 有關", phonetic: "/raʊz/" },
                { word: "rubbish", meaning: "n. 垃圾；廢話", root: "rubbous (盎格魯-諾曼語：碎石/廢物)", phonetic: "/ˈrʌb.ɪʃ/" },
                { word: "ruthless", meaning: "adj. 無情的；冷酷的", root: "ruth (憐憫) + less (無) -> 沒有絲毫慈悲", phonetic: "/ˈruːθ.ləs/" },
                { word: "sacred", meaning: "adj. 神聖的；莊嚴的", root: "sacer (神聖的)", phonetic: "/ˈseɪ.krɪd/" },
                { word: "saddle", meaning: "n. 馬鞍 v. 使負擔", root: "sadol (古英語：馬鞍)", phonetic: "/ˈsæd.əl/" },
                { word: "sag", meaning: "v. 下垂；凹陷", root: "sacke (中世紀低地德語：下沉)", phonetic: "/sæɡ/" }
            ]
        },
        {
            id: "senior_L46_Exp_S2", title: "千字擴充計畫 (L4-6 : S-2)",
            words: [
                { word: "saint", meaning: "n. 聖人；道德高尚者", root: "sanctus (神聖的/被祝聖的)", phonetic: "/seɪnt/" },
                { word: "sake", meaning: "n. 緣故；理由", root: "sacu (古英語：法律訴訟/爭端)", phonetic: "/seɪk/" },
                { word: "salute", meaning: "v. 向...致敬；行禮", root: "salus (健康/平安) -> 祝人平安", phonetic: "/səˈluːt/" },
                { word: "salvage", meaning: "v./n. 搶救；打撈", root: "salvare (拯救)", phonetic: "/ˈsæl.vɪdʒ/" },
                { word: "salvation", meaning: "n. 救贖；拯救", root: "salvare (拯救) + ation", phonetic: "/sælˈveɪ.ʃən/" },
                { word: "sanctuary", meaning: "n. 避難所；聖所", root: "sanctus (神聖的) + ary -> 神聖不可侵犯之地", phonetic: "/ˈsæŋk.tʃu.er.i/" },
                { word: "sane", meaning: "adj. 神智正常的；明智的", root: "sanus (健康的/理智的)", phonetic: "/seɪn/" },
                { word: "sanitation", meaning: "n. 衛生設施；環境衛生", root: "sanitas (健康) + ation", phonetic: "/ˌsæn.əˈteɪ.ʃən/" },
                { word: "sarcasm", meaning: "n. 挖苦；諷刺", root: "sarkazein (希臘語：撕裂血肉) -> 尖酸刻薄的話", phonetic: "/ˈsɑːr.kæz.əm/" },
                { word: "savage", meaning: "adj. 野蠻的；殘暴的", root: "silva (森林) -> 生活在森林裡的", phonetic: "/ˈsæv.ɪdʒ/" }
            ]
        },
        {
            id: "senior_L46_Exp_S3", title: "千字擴充計畫 (L4-6 : S-3)",
            words: [
                { word: "scan", meaning: "v. 掃描；粗略地看", root: "scandere (攀登/逐字閱讀)", phonetic: "/skæn/" },
                { word: "scandal", meaning: "n. 醜聞；令人震驚的事", root: "skandalon (希臘語：陷阱/絆腳石)", phonetic: "/ˈskæn.dəl/" },
                { word: "scar", meaning: "n. 疤痕 v. 留下傷疤", root: "eschara (希臘語：爐灶/燒傷的痕跡)", phonetic: "/skɑːr/" },
                { word: "scarce", meaning: "adj. 缺乏的；罕見的", root: "excerpere (挑出) -> 稀少難得的", phonetic: "/skers/" },
                { word: "scatter", meaning: "v. 散播；驅散", root: "源自中古英語 scateren (散開)", phonetic: "/ˈskæt̬.ɚ/" },
                { word: "scent", meaning: "n. 氣味；香味", root: "sentire (感覺) -> 嗅覺感知", phonetic: "/sent/" },
                { word: "scope", meaning: "n. 範圍；視野", root: "skopos (希臘語：目標/觀察者)", phonetic: "/skoʊp/" },
                { word: "scorn", meaning: "n./v. 輕蔑；鄙視", root: "escharner (古法語：嘲笑)", phonetic: "/skɔːrn/" },
                { word: "scramble", meaning: "v. 攀爬；爭奪", root: "源自 scramb (用爪子抓)", phonetic: "/ˈskræm.bəl/" },
                { word: "scrape", meaning: "v. 刮；擦傷", root: "scrapian (古英語：刮擦)", phonetic: "/skreɪp/" }
            ]
        },
        {
            id: "senior_L46_Exp_S4", title: "千字擴充計畫 (L4-6 : S-4)",
            words: [
                { word: "sequence", meaning: "n. 順序；一連串", root: "sequi (跟隨) -> 接續發生的事物", phonetic: "/ˈsiː.kwəns/" },
                { word: "shrewd", meaning: "adj. 精明的；敏銳的", root: "schrewe (中古英語：惡棍) -> 演變為機靈狡黠", phonetic: "/ʃruːd/" },
                { word: "simultaneous", meaning: "adj. 同時發生的", root: "simul (同時) + taneous", phonetic: "/ˌsaɪ.məlˈteɪ.ni.əs/" },
                { word: "skeptical", meaning: "adj. 懷疑的", root: "skeptesthai (希臘語：觀察/思考)", phonetic: "/ˈskep.tɪ.kəl/" },
                { word: "slump", meaning: "v./n. 暴跌；衰退", root: "slumpa (挪威語：掉落)", phonetic: "/slʌmp/" },
                { word: "smash", meaning: "v./n. 粉碎；打破", root: "擬聲詞，模仿物品碎裂的聲音", phonetic: "/smæʃ/" },
                { word: "smother", meaning: "v. 使窒息；掩蓋", root: "smorian (古英語：窒息)", phonetic: "/ˈsmʌð.ɚ/" },
                { word: "snatch", meaning: "v./n. 奪取；迅速抓住", root: "snacchen (中古英語：猛咬/攫取)", phonetic: "/snætʃ/" },
                { word: "sneak", meaning: "v. 偷偷地走；溜", root: "snican (古英語：爬行)", phonetic: "/sniːk/" },
                { word: "soar", meaning: "v. 高飛；猛增", root: "ex (出) + aura (空氣) -> 升入高空", phonetic: "/sɔːr/" }
            ]
        },
        {
            id: "senior_L46_Exp_S5", title: "千字擴充計畫 (L4-6 : S-5)",
            words: [
                { word: "sober", meaning: "adj. 清醒的；嚴肅的", root: "se (無) + ebrius (醉的)", phonetic: "/ˈsoʊ.bɚ/" },
                { word: "solitary", meaning: "adj. 孤獨的；獨自的", root: "solus (單獨) + ary", phonetic: "/ˈsɑː.lə.ter.i/" },
                { word: "soothe", meaning: "v. 撫慰；減輕", root: "soth (古英語：真實) -> 說真話/好話安慰人", phonetic: "/suːð/" },
                { word: "sophisticated", meaning: "adj. 複雜的；世故的；精密的", root: "sophia (智慧) -> 具備深度經驗的", phonetic: "/səˈfɪs.tə.keɪ.t̬ɪd/" },
                { word: "sovereign", meaning: "n. 君主 adj. 至高無上的", root: "super (在...之上)", phonetic: "/ˈsɑːv.rən/" },
                { word: "speculate", meaning: "v. 推測；投機", root: "specere (看/觀察) -> 觀察局勢", phonetic: "/ˈspek.jə.leɪt/" },
                { word: "sphere", meaning: "n. 球體；領域", root: "sphaira (希臘語：球)", phonetic: "/sfɪr/" },
                { word: "spontaneous", meaning: "adj. 自發的；非出於強制的", root: "sponte (自願) + ous", phonetic: "/spɑːnˈteɪ.ni.əs/" },
                { word: "stabilize", meaning: "v. 使穩定", root: "stare (站立) -> 使穩固站立", phonetic: "/ˈsteɪ.bə.laɪz/" },
                { word: "stalk", meaning: "v. 悄悄跟蹤 n. 莖", root: "stealcian (古英語：輕步走)", phonetic: "/stɑːk/" }
            ]
        },

     {
            id: "senior_L46_Exp_T1", title: "千字擴充計畫 (L4-6 : T-1)",
            words: [
                { word: "tackle", meaning: "v. 處理；對付", root: "taken (中古英語：抓取) -> 著手解決", phonetic: "/ˈtæk.əl/" },
                { word: "tact", meaning: "n. 機智；圓滑", root: "tangere (觸摸) -> 觸覺靈敏/有分寸", phonetic: "/tækt/" },
                { word: "tactics", meaning: "n. 戰術；策略", root: "tassein (希臘語：排列/佈署)", phonetic: "/ˈtæk.tɪks/" },
                { word: "tangible", meaning: "adj. 有形的；實質的", root: "tangere (觸摸) + ible -> 摸得到的", phonetic: "/ˈtæn.dʒə.bəl/" },
                { word: "tedious", meaning: "adj. 乏味的；冗長的", root: "taedium (厭煩) + ous", phonetic: "/ˈtiː.di.əs/" },
                { word: "temperament", meaning: "n. 氣質；性情", root: "temperare (混合/調和) -> 體液調和的狀態", phonetic: "/ˈtem.pɚ.ə.mənt/" },
                { word: "tempt", meaning: "v. 引誘；吸引", root: "temptare (嘗試/試探)", phonetic: "/tempt/" },
                { word: "tentative", meaning: "adj. 暫時的；猶豫的", root: "tentare (嘗試) + ive -> 試探性的", phonetic: "/ˈten.t̬ə.t̬ɪv/" },
                { word: "terminate", meaning: "v. 終止；結束", root: "terminus (邊界/終點) + ate", phonetic: "/ˈtɝː.mə.neɪt/" },
                { word: "theology", meaning: "n. 神學", root: "theos (神) + logy (學問)", phonetic: "/θiˈɑː.lə.dʒi/" }
            ]
        },
        {
            id: "senior_L46_Exp_T2", title: "千字擴充計畫 (L4-6 : T-2)",
            words: [
                { word: "theoretical", meaning: "adj. 理論上的", root: "theorein (觀察/沉思)", phonetic: "/ˌθiː.əˈret̬.ɪ.kəl/" },
                { word: "therapy", meaning: "n. 治療；療法", root: "therapeuein (醫治/服侍)", phonetic: "/ˈθer.ə.pi/" },
                { word: "threshold", meaning: "n. 門檻；開端", root: "threscan (古英語：踩踏)", phonetic: "/ˈθreʃ.hoʊld/" },
                { word: "thrive", meaning: "v. 繁榮；茁壯", root: "thrifa (古諾斯語：抓取/獲利)", phonetic: "/θraɪv/" },
                { word: "toll", meaning: "n. 通行費；傷亡人數", root: "telonium (拉丁語：收費站)", phonetic: "/toʊl/" },
                { word: "topple", meaning: "v. 推翻；倒塌", root: "top (頂部) -> 從頂端跌落", phonetic: "/ˈtɑː.pəl/" },
                { word: "torment", meaning: "n./v. 折磨；痛苦", root: "torquere (扭曲)", phonetic: "/ˈtɔːr.ment/" },
                { word: "toxic", meaning: "adj. 有毒的", root: "toxikon (希臘語：塗在箭上的毒藥)", phonetic: "/ˈtɑːk.sɪk/" },
                { word: "trait", meaning: "n. 特徵；特點", root: "tractus (拉/畫出的線) -> 勾勒出的輪廓", phonetic: "/treɪt/" },
                { word: "tranquil", meaning: "adj. 寧靜的；平靜的", root: "trans (超越) + quies (安靜) -> 極致的安寧", phonetic: "/ˈtræŋ.kwɪl/" }
            ]
        },
        {
            id: "senior_L46_Exp_T3_U1", title: "千字擴充計畫 (L4-6 : T-3 / U-1)",
            words: [
                { word: "transaction", meaning: "n. 交易；處理", root: "trans (跨越) + agere (驅動/做) -> 跨越雙方的行動", phonetic: "/trænˈzæk.ʃən/" },
                { word: "transcend", meaning: "v. 超越", root: "trans (跨越) + scandere (攀登)", phonetic: "/trænˈsend/" },
                { word: "transition", meaning: "n. 轉變；過渡", root: "trans (跨越) + ire (走) -> 轉換的過程", phonetic: "/trænˈzɪʃ.ən/" },
                { word: "transparent", meaning: "adj. 透明的；清澈的", root: "trans (穿過) + parere (出現) -> 光線能穿過", phonetic: "/trænsˈper.ənt/" },
                { word: "trauma", meaning: "n. 創傷", root: "trauma (希臘語：傷口)", phonetic: "/ˈtrɑː.mə/" },
                { word: "trivial", meaning: "adj. 瑣碎的；微不足道的", root: "tri (三) + via (路) -> 三岔路口的尋常事物", phonetic: "/ˈtrɪv.i.əl/" },
                { word: "turmoil", meaning: "n. 動亂；混亂", root: "turba (人群/混亂)", phonetic: "/ˈtɝː.mɔɪl/" },
                { word: "ultimate", meaning: "adj. 最終的；極致的", root: "ultimus (最後的)", phonetic: "/ˈʌl.tə.mət/" },
                { word: "unanimous", meaning: "adj. 意見一致的", root: "unus (一) + animus (心) -> 同心同德", phonetic: "/juːˈnæn.ə.məs/" },
                { word: "undergo", meaning: "v. 經歷；承受", root: "under (在下) + go (走)", phonetic: "/ˌʌn.dɚˈɡoʊ/" }
            ]
        },
        {
            id: "senior_L46_Exp_U2", title: "千字擴充計畫 (L4-6 : U-2)",
            words: [
                { word: "undermine", meaning: "v. 暗中破壞；削弱", root: "under (在下) + mine (挖礦) -> 挖空地基", phonetic: "/ˌʌn.dɚˈmaɪn/" },
                { word: "undertake", meaning: "v. 承擔；著手做", root: "under (在下) + take (拿)", phonetic: "/ˌʌn.dɚˈteɪk/" },
                { word: "unfold", meaning: "v. 展開；顯露", root: "un (打開) + fold (摺疊)", phonetic: "/ʌnˈfoʊld/" },
                { word: "unify", meaning: "v. 統一；整合", root: "unus (一) + fy (使)", phonetic: "/ˈjuː.nə.faɪ/" },
                { word: "upgrade", meaning: "v./n. 升級", root: "up (向上) + gradus (步/級)", phonetic: "/ˈʌp.ɡreɪd/" },
                { word: "uphold", meaning: "v. 維護；支持", root: "up (向上) + hold (抓住)", phonetic: "/ʌpˈhoʊld/" },
                { word: "utility", meaning: "n. 效用；實用", root: "uti (使用) + ity", phonetic: "/juːˈtɪl.ə.t̬i/" },
                { word: "utilize", meaning: "v. 利用；應用", root: "uti (使用) + ize", phonetic: "/ˈjuː.t̬əl.aɪz/" },
                { word: "utmost", meaning: "adj. 極度的 n. 極限", root: "ut (外面) + most (最) -> 最極端的", phonetic: "/ˈʌt.moʊst/" },
                { word: "utter", meaning: "adj. 完全的 v. 發出聲音", root: "ut (外面) -> 說出來/徹底展露", phonetic: "/ˈʌt̬.ɚ/" }
            ]
        },

        {
            id: "senior_L46_Exp_V1", title: "千字擴充計畫 (L4-6 : V-1)",
            words: [
                { word: "vacant", meaning: "adj. 空的；空缺的", root: "vacare (空)", phonetic: "/ˈveɪ.kənt/" },
                { word: "vague", meaning: "adj. 模糊的；含糊的", root: "vagari (漫遊) -> 游移不定的", phonetic: "/veɪɡ/" },
                { word: "valid", meaning: "adj. 有效的；有根據的", root: "valere (強壯/有力量)", phonetic: "/ˈvæl.ɪd/" },
                { word: "vanish", meaning: "v. 消失；絕跡", root: "vanus (空的) -> 化為烏有", phonetic: "/ˈvæn.ɪʃ/" },
                { word: "vanity", meaning: "n. 虛榮；空虛", root: "vanus (空的) + ity -> 虛無的榮耀", phonetic: "/ˈvæn.ə.t̬i/" },
                { word: "variable", meaning: "adj. 多變的 n. 變數", root: "variare (改變) + able", phonetic: "/ˈver.i.ə.bəl/" },
                { word: "velocity", meaning: "n. 速度；速率", root: "velox (迅速的) + ity", phonetic: "/vəˈlɑː.sə.t̬i/" },
                { word: "vengeance", meaning: "n. 報仇；復仇", root: "vindicare (報復/伸張正義)", phonetic: "/ˈven.dʒəns/" },
                { word: "venture", meaning: "n./v. 冒險；風險企業", root: "adventura (即將發生的事)", phonetic: "/ˈven.tʃɚ/" },
                { word: "versatile", meaning: "adj. 多才多藝的；多功能的", root: "vertere (轉動) -> 能靈活轉向各領域", phonetic: "/ˈvɝː.sə.t̬əl/" }
            ]
        },
        {
            id: "senior_L46_Exp_V2", title: "千字擴充計畫 (L4-6 : V-2)",
            words: [
                { word: "veteran", meaning: "n. 老手；退伍軍人", root: "vetus (老的)", phonetic: "/ˈvet.ɚ.ən/" },
                { word: "veto", meaning: "n./v. 否決", root: "veto (拉丁語：我禁止)", phonetic: "/ˈviː.t̬oʊ/" },
                { word: "vibrate", meaning: "v. 震動；顫動", root: "vibrare (搖擺)", phonetic: "/ˈvaɪ.breɪt/" },
                { word: "vicious", meaning: "adj. 邪惡的；惡毒的", root: "vitium (缺點/罪惡) + ous", phonetic: "/ˈvɪʃ.əs/" },
                { word: "vigor", meaning: "n. 活力；精力", root: "vigere (活潑/強壯)", phonetic: "/ˈvɪɡ.ɚ/" },
                { word: "violate", meaning: "v. 違反；侵犯", root: "violare (施暴)", phonetic: "/ˈvaɪ.ə.leɪt/" },
                { word: "virtual", meaning: "adj. 虛擬的；實質上的", root: "virtus (力量/效能) -> 具備實質效應的", phonetic: "/ˈvɝː.tʃu.əl/" },
                { word: "vital", meaning: "adj. 極其重要的；充滿活力的", root: "vita (生命) -> 與生存攸關的", phonetic: "/ˈvaɪ.t̬əl/" },
                { word: "voluntary", meaning: "adj. 自願的", root: "voluntas (意志)", phonetic: "/ˈvɑː.lən.ter.i/" },
                { word: "vulnerable", meaning: "adj. 易受傷的；脆弱的", root: "vulnus (傷口) + able", phonetic: "/ˈvʌl.nɚ.ə.bəl/" }
            ]
        },

        {
            id: "senior_L46_Exp_W1", title: "千字擴充計畫 (L4-6 : W-1)",
            words: [
                { word: "wail", meaning: "v./n. 哀嚎；慟哭", root: "擬聲詞 (源自古諾斯語 vaela)", phonetic: "/weɪl/" },
                { word: "warrant", meaning: "n. 搜索票；保證 v. 使正當", root: "guarant (古法語：保護/擔保)", phonetic: "/ˈwɔːr.ənt/" },
                { word: "wary", meaning: "adj. 謹慎的；警惕的", root: "waer (古英語：小心/留意)", phonetic: "/ˈwer.i/" },
                { word: "weary", meaning: "adj. 疲倦的", root: "werig (古英語：疲勞)", phonetic: "/ˈwɪr.i/" },
                { word: "weave", meaning: "v. 編織", root: "wefan (古英語：交織)", phonetic: "/wiːv/" },
                { word: "welfare", meaning: "n. 福祉；社會福利", root: "well (好) + fare (走/過活) -> 過得好", phonetic: "/ˈwel.fer/" },
                { word: "whirl", meaning: "v./n. 旋轉；迴旋", root: "hvirfla (古諾斯語：轉動)", phonetic: "/wɝːl/" },
                { word: "wholesome", meaning: "adj. 有益健康的", root: "whole (完整/健康) + some", phonetic: "/ˈhoʊl.səm/" },
                { word: "wicked", meaning: "adj. 邪惡的", root: "wicca (巫師/施法者)", phonetic: "/ˈwɪk.ɪd/" },
                { word: "widespread", meaning: "adj. 廣泛的", root: "wide (寬) + spread (散播)", phonetic: "/ˈwaɪd.spred/" }
            ]
        },
        {
            id: "senior_L46_Exp_W2_Z", title: "千字擴充計畫 (L4-6 : W-Z 終章)",
            words: [
                { word: "withdraw", meaning: "v. 撤退；收回", root: "with (向後/反對) + draw (拉)", phonetic: "/wɪðˈdrɑː/" },
                { word: "wither", meaning: "v. 枯萎；凋謝", root: "wederen (中古英語：暴露在天氣中)", phonetic: "/ˈwɪð.ɚ/" },
                { word: "withhold", meaning: "v. 保留；隱瞞", root: "with (向後) + hold (抓住) -> 扣留不給", phonetic: "/wɪðˈhoʊld/" },
                { word: "withstand", meaning: "v. 經得起；抵抗", root: "with (反對) + stand (站立) -> 挺立對抗", phonetic: "/wɪðˈstænd/" },
                { word: "witness", meaning: "n. 證人 v. 目擊", root: "wit (知識) + ness -> 知道真相的人", phonetic: "/ˈwɪt.nəs/" },
                { word: "wreck", meaning: "n./v. 破壞；船難", root: "wrec (盎格魯-諾曼語：被水沖上岸的殘骸)", phonetic: "/rek/" },
                { word: "yearn", meaning: "v. 渴望；盼望", root: "giernan (古英語：強烈渴望)", phonetic: "/jɝːn/" },
                { word: "yield", meaning: "v. 產生；屈服 n. 產量", root: "gieldan (古英語：支付/回報)", phonetic: "/jiːld/" },
                { word: "zealous", meaning: "adj. 熱忱的；狂熱的", root: "zelos (熱情) + ous", phonetic: "/ˈzel.əs/" },
                { word: "zenith", meaning: "n. 頂點；全盛時期", root: "semt (阿拉伯語：頭頂上的方向)", phonetic: "/ˈziː.nɪθ/" }
            ]
        },
        // ==========================================
    // 模組二：化生單字遊戲群組 - 終章大圓滿
    // 真・Level 6 頂峰試煉 (100字 絕對無重複)
    // ==========================================
        {
            id: "senior_L6_Final_01", title: "真・LV6 終極試煉 (A)",
            words: [
                { word: "abbreviate", meaning: "v. 縮寫；縮短", root: "ad (向) + brevis (短)", phonetic: "/əˈbriː.vi.eɪt/" },
                { word: "abolish", meaning: "v. 廢除(制度/法律)", root: "ab (離開) + alere (生長) -> 摧毀", phonetic: "/əˈbɑː.lɪʃ/" },
                { word: "accommodate", meaning: "v. 容納；迎合", root: "ad (向) + commodus (合適的)", phonetic: "/əˈkɑː.mə.deɪt/" },
                { word: "acute", meaning: "adj. 敏銳的；劇烈的", root: "acus (針/尖銳)", phonetic: "/əˈkjuːt/" },
                { word: "aesthetic", meaning: "adj. 美學的；審美的", root: "aisthanesthai (希臘語：感知)", phonetic: "/esˈθet̬.ɪk/" },
                { word: "allocate", meaning: "v. 分配；撥出", root: "ad (向) + locus (地方) -> 放到指定位置", phonetic: "/ˈæl.ə.keɪt/" },
                { word: "ambiguity", meaning: "n. 模稜兩可；意義不明", root: "ambi (兩邊) + agere (驅動)", phonetic: "/ˌæm.bɪˈɡjuː.ə.t̬i/" },
                { word: "analogy", meaning: "n. 比喻；類推", root: "ana (根據) + logos (比例/邏輯)", phonetic: "/əˈnæl.ə.dʒi/" },
                { word: "anonymous", meaning: "adj. 匿名的", root: "an (無) + onyma (名字)", phonetic: "/əˈnɑː.nə.məs/" },
                { word: "arbitrary", meaning: "adj. 任意的；武斷的", root: "arbiter (裁判) -> 憑個人主觀決定的", phonetic: "/ˈɑːr.bə.trer.i/" }
            ]
        },
        {
            id: "senior_L6_Final_02", title: "真・LV6 終極試煉 (A-C)",
            words: [
                { word: "array", meaning: "n. 大批；陣列", root: "ad (向) + redare (準備) -> 準備好的陳列", phonetic: "/əˈreɪ/" },
                { word: "attribute", meaning: "v. 歸因於 n. 特質", root: "ad (向) + tribuere (給予)", phonetic: "/ˈæt.rɪ.bjuːt/" },
                { word: "autonomy", meaning: "n. 自治權；自主性", root: "autos (自己) + nomos (法律)", phonetic: "/ɑːˈtɑː.nə.mi/" },
                { word: "bewilder", meaning: "v. 使迷惑；使不知所措", root: "be (徹底) + wilder (迷失方向)", phonetic: "/bɪˈwɪl.dɚ/" },
                { word: "boycott", meaning: "v./n. 抵制；杯葛", root: "源自19世紀被抵制的愛爾蘭地主 Boycott", phonetic: "/ˈbɔɪ.kɑːt/" },
                { word: "brutal", meaning: "adj. 殘忍的；野蠻的", root: "brutus (沉重/遲鈍的)", phonetic: "/ˈbruː.t̬əl/" },
                { word: "bureaucracy", meaning: "n. 官僚體制；繁文縟節", root: "bureau (辦公桌) + cracy (統治)", phonetic: "/bjʊˈrɑː.krə.si/" },
                { word: "catastrophe", meaning: "n. 大災難", root: "kata (向下) + strephein (轉動) -> 情況急轉直下", phonetic: "/kəˈtæs.trə.fi/" },
                { word: "certainty", meaning: "n. 確定性；必然的事", root: "certus (確定的) + ty", phonetic: "/ˈsɝː.tən.ti/" },
                { word: "chaos", meaning: "n. 混亂；混沌", root: "khaos (希臘語：深淵)", phonetic: "/ˈkeɪ.ɑːs/" }
            ]
        },
        {
            id: "senior_L6_Final_03", title: "真・LV6 終極試煉 (C)",
            words: [
                { word: "chronic", meaning: "adj. 慢性的；長期的", root: "khronos (時間)", phonetic: "/ˈkrɑː.nɪk/" },
                { word: "clash", meaning: "n./v. 衝突；撞擊聲", root: "擬聲詞，結合 clap 與 dash", phonetic: "/klæʃ/" },
                { word: "closure", meaning: "n. 關閉；了結(心願)", root: "claudere (關閉)", phonetic: "/ˈkloʊ.ʒɚ/" },
                { word: "coincide", meaning: "v. 同時發生；巧合", root: "com (共同) + in (入) + cadere (落下)", phonetic: "/ˌkoʊ.ɪnˈsaɪd/" },
                { word: "collaborate", meaning: "v. 合作；協作", root: "com (共同) + laborare (工作)", phonetic: "/kəˈlæb.ə.reɪt/" },
                { word: "compatible", meaning: "adj. 兼容的；合得來的", root: "com (共同) + pati (忍受) -> 能共處的", phonetic: "/kəmˈpæt̬.ə.bəl/" },
                { word: "comprise", meaning: "v. 包含；由...組成", root: "com (共同) + prehendere (抓住)", phonetic: "/kəmˈpraɪz/" },
                { word: "compulsory", meaning: "adj. 強制的；必修的", root: "com (共同) + pellere (推)", phonetic: "/kəmˈpʌl.sɚ.i/" },
                { word: "concede", meaning: "v. 讓步；勉強承認", root: "com (共同) + cedere (退讓)", phonetic: "/kənˈsiːd/" },
                { word: "concise", meaning: "adj. 簡潔的", root: "com (完全) + caedere (切) -> 切除廢話", phonetic: "/kənˈsaɪs/" }
            ]
        },
        {
            id: "senior_L6_Final_04", title: "真・LV6 終極試煉 (C)",
            words: [
                { word: "condemn", meaning: "v. 譴責；判刑", root: "com (完全) + damnare (傷害/判罪)", phonetic: "/kənˈdem/" },
                { word: "conform", meaning: "v. 遵守；順從", root: "com (共同) + formare (形成) -> 融入群體框架", phonetic: "/kənˈfɔːrm/" },
                { word: "consensus", meaning: "n. 共識", root: "com (共同) + sentire (感覺)", phonetic: "/kənˈsen.səs/" },
                { word: "contradict", meaning: "v. 反駁；與...矛盾", root: "contra (相反) + dicere (說)", phonetic: "/ˌkɑːn.trəˈdɪkt/" },
                { word: "controversy", meaning: "n. 爭議", root: "contra (相反) + vertere (轉向) -> 意見相左", phonetic: "/ˈkɑːn.trə.vɝː.si/" },
                { word: "coordinate", meaning: "v. 協調；統籌", root: "com (共同) + ordinare (排序)", phonetic: "/koʊˈɔːr.dən.eɪt/" },
                { word: "corporate", meaning: "adj. 企業的；法人的", root: "corpus (身體/團體)", phonetic: "/ˈkɔːr.pɚ.ət/" },
                { word: "corrupt", meaning: "adj. 腐敗的 v. 貪污", root: "com (完全) + rumpere (打破)", phonetic: "/kəˈrʌpt/" },
                { word: "credibility", meaning: "n. 可信度", root: "credere (相信) + ibility", phonetic: "/ˌkred.əˈbɪl.ə.t̬i/" },
                { word: "criterion", meaning: "n. 標準；準則", root: "kriterion (希臘語：判斷的方法)", phonetic: "/kraɪˈtɪr.i.ən/" }
            ]
        },
        {
            id: "senior_L6_Final_05", title: "真・LV6 終極試煉 (C-E)",
            words: [
                { word: "crucial", meaning: "adj. 決定性的；至關重要的", root: "crux (十字架) -> 關鍵的十字路口", phonetic: "/ˈkruː.ʃəl/" },
                { word: "deliberate", meaning: "adj. 深思熟慮的；故意的", root: "de (向下) + librare (秤重) -> 在心中掂量", phonetic: "/dɪˈlɪb.ɚ.ət/" },
                { word: "deprive", meaning: "v. 剝奪；使喪失", root: "de (徹底) + privare (使失去)", phonetic: "/dɪˈpraɪv/" },
                { word: "deteriorate", meaning: "v. 惡化；退化", root: "deterior (更壞的)", phonetic: "/dɪˈtɪr.i.ə.reɪt/" },
                { word: "diagnose", meaning: "v. 診斷", root: "dia (穿透) + gignoskein (知道)", phonetic: "/ˌdaɪ.əɡˈnoʊz/" },
                { word: "dilemma", meaning: "n. 進退兩難", root: "di (兩者) + lemma (前提)", phonetic: "/dɪˈlem.ə/" },
                { word: "diminish", meaning: "v. 減少；削弱", root: "di (分開) + minuere (變小)", phonetic: "/dɪˈmɪn.ɪʃ/" },
                { word: "dismantle", meaning: "v. 拆卸；廢除", root: "dis (去除) + mantel (斗篷) -> 卸下裝備", phonetic: "/dɪˈsmæn.t̬əl/" },
                { word: "eccentric", meaning: "adj. 古怪的；反常的", root: "ex (出) + kentron (中心) -> 偏離中心的", phonetic: "/ɪkˈsen.trɪk/" },
                { word: "eloquent", meaning: "adj. 雄辯的；口才流利的", root: "ex (出) + loqui (說話)", phonetic: "/ˈel.ə.kwənt/" }
            ]
        },
        {
            id: "senior_L6_Final_06", title: "真・LV6 終極試煉 (E-H)",
            words: [
                { word: "empirical", meaning: "adj. 經驗主義的；實證的", root: "empeiria (希臘語：經驗)", phonetic: "/ɪmˈpɪr.ɪ.kəl/" },
                { word: "eradicate", meaning: "v. 根除；消滅", root: "ex (出) + radix (根) -> 連根拔起", phonetic: "/ɪˈræd.ɪ.keɪt/" },
                { word: "escalate", meaning: "v. 逐步升級；擴大", root: "scala (梯子) -> 像爬梯般上升", phonetic: "/ˈes.kə.leɪt/" },
                { word: "explicit", meaning: "adj. 清楚明確的", root: "ex (出) + plicare (摺疊) -> 攤開來不隱藏", phonetic: "/ɪkˈsplɪs.ɪt/" },
                { word: "fascinate", meaning: "v. 深深吸引；迷住", root: "fascinum (咒語/魅力)", phonetic: "/ˈfæs.ən.eɪt/" },
                { word: "feasible", meaning: "adj. 可行的", root: "facere (做) -> 做得到的", phonetic: "/ˈfiː.zə.bəl/" },
                { word: "fluctuate", meaning: "v. 波動；起伏", root: "fluere (流動)", phonetic: "/ˈflʌk.tʃu.eɪt/" },
                { word: "formidable", meaning: "adj. 令人敬畏的；艱鉅的", root: "formido (恐懼)", phonetic: "/fɔːrˈmɪd.ə.bəl/" },
                { word: "fragile", meaning: "adj. 脆弱的；易碎的", root: "frangere (打破)", phonetic: "/ˈfrædʒ.əl/" },
                { word: "hierarchy", meaning: "n. 階級制度", root: "hieros (神聖) + archein (統治)", phonetic: "/ˈhaɪ.rɑːr.ki/" }
            ]
        },
        {
            id: "senior_L6_Final_07", title: "真・LV6 終極試煉 (H-M)",
            words: [
                { word: "hypocrisy", meaning: "n. 偽善；虛偽", root: "hypo (在下) + krinein (判斷) -> 戴著面具演戲", phonetic: "/hɪˈpɑː.krə.si/" },
                { word: "hypothesis", meaning: "n. 假設；假說", root: "hypo (在下) + thesis (放置) -> 底層的立論", phonetic: "/haɪˈpɑː.θə.sɪs/" },
                { word: "ideology", meaning: "n. 意識形態", root: "idea (思想) + logy (學問)", phonetic: "/ˌaɪ.diˈɑː.lə.dʒi/" },
                { word: "illiterate", meaning: "adj. 文盲的", root: "in (無) + littera (字母)", phonetic: "/ɪˈlɪt̬.ɚ.ət/" },
                { word: "impair", meaning: "v. 損害；削弱", root: "in (進入) + pejor (更壞) -> 使變糟", phonetic: "/ɪmˈper/" },
                { word: "intrigue", meaning: "v. 引起興趣 n. 陰謀", root: "in (入) + tricae (詭計/糾纏)", phonetic: "/ɪnˈtriːɡ/" },
                { word: "irony", meaning: "n. 諷刺；造化弄人", root: "eironeia (希臘語：假裝無知)", phonetic: "/ˈaɪ.rə.ni/" },
                { word: "legible", meaning: "adj. 易讀的；字跡清楚的", root: "legere (閱讀)", phonetic: "/ˈledʒ.ə.bəl/" },
                { word: "literal", meaning: "adj. 字面上的", root: "littera (字母)", phonetic: "/ˈlɪt̬.ɚ.əl/" },
                { word: "militant", meaning: "adj. 好戰的；激進的", root: "militare (當兵)", phonetic: "/ˈmɪl.ə.tənt/" }
            ]
        },
        {
            id: "senior_L6_Final_08", title: "真・LV6 終極試煉 (M-P)",
            words: [
                { word: "monopoly", meaning: "n. 壟斷；獨占", root: "monos (單一) + polein (販賣)", phonetic: "/məˈnɑː.pəl.i/" },
                { word: "mourn", meaning: "v. 哀悼；哀痛", root: "murnan (古英語：悲傷)", phonetic: "/mɝːn/" },
                { word: "naive", meaning: "adj. 天真的；輕信的", root: "nativus (天生的/未受世俗影響的)", phonetic: "/naɪˈiːv/" },
                { word: "notorious", meaning: "adj. 惡名昭彰的", root: "notus (出名的) -> 因壞事而出名", phonetic: "/noʊˈtɔːr.i.əs/" },
                { word: "obligation", meaning: "n. 義務；責任", root: "ob (向) + ligare (綁) -> 被合約或道德綁住", phonetic: "/ˌɑː.bləˈɡeɪ.ʃən/" },
                { word: "originate", meaning: "v. 發源；起因", root: "origo (起源)", phonetic: "/əˈrɪdʒ.ən.eɪt/" },
                { word: "outbreak", meaning: "n. (疫情/戰爭)爆發", root: "out (外) + break (破裂)", phonetic: "/ˈaʊt.breɪk/" },
                { word: "overwhelm", meaning: "v. 壓倒；使承受不了", root: "over (越過) + whelmen (翻覆)", phonetic: "/ˌoʊ.vɚˈhwelm/" },
                { word: "preliminary", meaning: "adj. 初步的；預備的", root: "prae (前) + limen (門檻)", phonetic: "/prɪˈlɪm.ə.ner.i/" },
                { word: "premature", meaning: "adj. 早產的；過早的", root: "prae (前) + maturus (成熟)", phonetic: "/ˌpriː.məˈtʃʊr/" }
            ]
        },
        {
            id: "senior_L6_Final_09", title: "真・LV6 終極試煉 (P-R)",
            words: [
                { word: "prevail", meaning: "v. 戰勝；盛行", root: "prae (前) + valere (強壯) -> 力量佔上風", phonetic: "/prɪˈveɪl/" },
                { word: "priority", meaning: "n. 優先事項", root: "prior (先前的)", phonetic: "/praɪˈɔːr.ə.t̬i/" },
                { word: "proficient", meaning: "adj. 精通的", root: "pro (向前) + facere (做) -> 進展神速", phonetic: "/prəˈfɪʃ.ənt/" },
                { word: "prolong", meaning: "v. 延長", root: "pro (向前) + longus (長)", phonetic: "/prəˈlɑːŋ/" },
                { word: "prominent", meaning: "adj. 突出的；卓越的", root: "pro (向前) + minere (突出)", phonetic: "/ˈprɑː.mə.nənt/" },
                { word: "prone", meaning: "adj. 易於...的；俯伏的", root: "pronus (向前傾斜的)", phonetic: "/proʊn/" },
                { word: "radical", meaning: "adj. 激進的；根本的", root: "radix (根) -> 拔本塞源的", phonetic: "/ˈræd.ɪ.kəl/" },
                { word: "rational", meaning: "adj. 理性的；合理的", root: "ratio (理性/計算)", phonetic: "/ˈræʃ.ən.əl/" },
                { word: "recruit", meaning: "v. 招募", root: "re (再) + crescere (成長) -> 補充新血", phonetic: "/rɪˈkruːt/" },
                { word: "reluctant", meaning: "adj. 不情願的", root: "re (反對) + luctari (掙扎) -> 內心抗拒", phonetic: "/rɪˈlʌk.tənt/" }
            ]
        },
        {
            id: "senior_L6_Final_10", title: "真・LV6 終極試煉 (S-Z 大圓滿)",
            words: [
                { word: "scrutiny", meaning: "n. 仔細審查", root: "scrutari (翻搜垃圾) -> 查得一清二楚", phonetic: "/ˈskruː.t̬ən.i/" },
                { word: "sneer", meaning: "v./n. 冷笑；嘲弄", root: "sniran (古英語：擺出輕蔑的臉)", phonetic: "/snɪr/" },
                { word: "subordinate", meaning: "adj. 下屬的 n. 部屬", root: "sub (在下) + ordinare (排序)", phonetic: "/səˈbɔːr.dən.ət/" },
                { word: "subtle", meaning: "adj. 微妙的；隱約的", root: "sub (在下) + tela (網) -> 織得很細密", phonetic: "/ˈsʌt̬.əl/" },
                { word: "susceptible", meaning: "adj. 易受影響的", root: "sub (在下) + capere (拿取) -> 容易被拿下的", phonetic: "/səˈsep.tə.bəl/" },
                { word: "synthetic", meaning: "adj. 合成的；人造的", root: "syn (共同) + tithenai (放置) -> 組合起來的", phonetic: "/sɪnˈθet̬.ɪk/" },
                { word: "underestimate", meaning: "v. 低估", root: "under (在下) + aestimare (估價)", phonetic: "/ˌʌn.dɚˈes.tə.meɪt/" },
                { word: "verify", meaning: "v. 證實；核對", root: "verus (真實) + facere (做)", phonetic: "/ˈver.ə.faɪ/" },
                { word: "vibrant", meaning: "adj. 充滿活力的", root: "vibrare (震動) -> 頻率極高的", phonetic: "/ˈvaɪ.brənt/" },
                { word: "zeal", meaning: "n. 熱忱；狂熱", root: "zelos (希臘語：熱烈的情感)", phonetic: "/ziːl/" }
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
    ], // 這裡關閉 senior 陣列

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
        },
        {
            id: "toefl_3", title: "托福核心 (無常與寂靜)",
            words: [
                { word: "ephemeral", meaning: "adj. 短暫的；朝生暮死的", root: "epi (在...之上) + hemera (天)", phonetic: "/ɪˈfem.ɚ.əl/" },
                { word: "transient", meaning: "adj. 轉瞬即逝的", root: "trans (跨越) + ire (走)", phonetic: "/ˈtræn.zi.ənt/" },
                { word: "serenity", meaning: "n. 寧靜；平靜", root: "serenus (晴朗/平靜) + ity", phonetic: "/səˈren.ə.t̬i/" },
                { word: "equanimity", meaning: "n. 平和；鎮定", root: "aequus (平) + animus (心)", phonetic: "/ˌiː.kwəˈnɪm.ə.t̬i/" },
                { word: "impermanent", meaning: "adj. 無常的；非永久的", root: "im (不) + permanent (永久)", phonetic: "/ɪmˈpɝː.mə.nənt/" },
                { word: "obliterate", meaning: "v. 抹除；消滅", root: "ob (反) + liter (文字) -> 擦去字跡", phonetic: "/əˈblɪt̬.ə.reɪt/" },
                { word: "immutable", meaning: "adj. 不可變的", root: "im (不) + mut (改變) + able", phonetic: "/ɪˈmjuː.t̬ə.bəl/" },
                { word: "solitude", meaning: "n. 獨處；孤獨 (平靜的)", root: "solus (單獨) + itude", phonetic: "/ˈsɑː.lə.tuːd/" },
                { word: "transcend", meaning: "v. 超越", root: "trans (跨越) + scandere (攀登)", phonetic: "/trænˈsend/" },
                { word: "void", meaning: "n. 空虛；空間 adj. 空的", root: "vacare (空)", phonetic: "/vɔɪd/" }
            ]
        },
        {
            id: "toefl_4", title: "托福核心 (精進與因果)",
            words: [
                { word: "endeavor", meaning: "n./v. 努力；盡力", root: "en (使) + devoir (責任)", phonetic: "/ɪnˈdev.ɚ/" },
                { word: "persevere", meaning: "v. 堅持不懈", root: "per (始終) + severus (嚴格)", phonetic: "/ˌpɝː.səˈvɪr/" },
                { word: "dormant", meaning: "adj. 休眠的；潛伏的", root: "dormire (睡覺)", phonetic: "/ˈdɔːr.mənt/" },
                { word: "manifestation", meaning: "n. 顯化；表現", root: "mani (手) + fest (打) -> 具象化", phonetic: "/ˌmæn.ə.fesˈteɪ.ʃən/" },
                { word: "inevitable", meaning: "adj. 不可避免的", root: "in (不) + e (出) + vitare (避開)", phonetic: "/ˌɪnˈev.ə.t̬ə.bəl/" },
                { word: "correlation", meaning: "n. 關聯；相互關係", root: "cor (共同) + relation (關係)", phonetic: "/ˌkɔːr.əˈleɪ.ʃən/" },
                { word: "consequence", meaning: "n. 結果；後果", root: "con (共同) + sequ (跟隨) + ence", phonetic: "/ˈkɑːn.sə.kwəns/" },
                { word: "enlightenment", meaning: "n. 啟蒙；覺悟", root: "en (使) + light (光) + ment", phonetic: "/ɪnˈlaɪ.t̬ən.mənt/" },
                { word: "delusion", meaning: "n. 錯覺；妄想", root: "de (向下) + ludere (玩弄)", phonetic: "/dɪˈluː.ʒən/" },
                { word: "karmic", meaning: "adj. 業力的；因果的", root: "源自梵文 karma (行為)", phonetic: "/ˈkɑːr.mɪk/" }
            ]
        },
        {
            id: "toefl_5", title: "托福核心 (真理與思辨)",
            words: [
                { word: "paradox", meaning: "n. 悖論；自相矛盾的情況", root: "para (旁/相反) + doxa (意見)", phonetic: "/ˈper.ə.dɑːks/" },
                { word: "skepticism", meaning: "n. 懷疑論；懷疑態度", root: "skeptesthai (觀察/思考) + ism", phonetic: "/ˈskep.tə.sɪ.zəm/" },
                { word: "dogma", meaning: "n. 教條；武斷的意見", root: "dokein (認為/似乎)", phonetic: "/ˈdɑːɡ.mə/" },
                { word: "pragmatic", meaning: "adj. 務實的", root: "pragma (行為/事物) + tic", phonetic: "/præɡˈmæt̬.ɪk/" },
                { word: "ambiguity", meaning: "n. 模稜兩可", root: "ambi (兩者) + agere (驅動)", phonetic: "/ˌæm.bɪˈɡjuː.ə.t̬i/" },
                { word: "inherent", meaning: "adj. 內在的；固有的", root: "in (內) + haerere (黏附)", phonetic: "/ɪnˈhɪr.ənt/" },
                { word: "bias", meaning: "n. 偏見", root: "源自斜線的意象 -> 偏離正道", phonetic: "/ˈbaɪ.əs/" },
                { word: "validity", meaning: "n. 有效性；正確性", root: "validus (強壯) + ity", phonetic: "/vəˈlɪd.ə.t̬i/" },
                { word: "premise", meaning: "n. 前提", root: "pre (前) + mittere (放置)", phonetic: "/ˈprem.ɪs/" },
                { word: "deduction", meaning: "n. 推論；演繹", root: "de (向下) + ducere (引導)", phonetic: "/dɪˈdʌk.ʃən/" }
            ]
        },
    {
            id: "toefl_6", title: "托福進階 (洞察與幻象)",
            words: [
                { word: "anomalous", meaning: "adj. 異常的；反常的", root: "a (不) + homos (相同) -> 與平常不同", phonetic: "/əˈnɑː.mə.ləs/" },
                { word: "mirage", meaning: "n. 幻影；海市蜃樓", root: "mirari (驚嘆) -> 令人驚奇的虛幻景象", phonetic: "/mɪˈrɑːʒ/" },
                { word: "elusive", meaning: "adj. 難以捉摸的", root: "e (出) + ludere (玩弄) -> 像溜走般難以抓住", phonetic: "/iˈluː.sɪv/" },
                { word: "scrutinize", meaning: "v. 仔細檢查", root: "scrutari (翻搜垃圾) -> 查得一清二楚", phonetic: "/ˈskruː.t̬ən.aɪz/" },
                { word: "lucid", meaning: "adj. 清楚易懂的；清醒的", root: "lux (光) -> 充滿光亮的", phonetic: "/ˈluː.sɪd/" },
                { word: "deceptive", meaning: "adj. 欺騙性的", root: "de (向下) + capere (抓) -> 使人落入陷阱", phonetic: "/dɪˈsep.tɪv/" },
                { word: "discern", meaning: "v. 辨別；看出", root: "dis (分開) + cernere (區分)", phonetic: "/dɪˈsɝːn/" },
                { word: "ostensible", meaning: "adj. 表面的；假裝的", root: "ob (在...之前) + tendere (伸展) -> 展現給人看的", phonetic: "/ɑːˈsten.sə.bəl/" },
                { word: "subtle", meaning: "adj. 微妙的；隱約的", root: "sub (在下) + tela (網) -> 織得極細密的", phonetic: "/ˈsʌt̬.əl/" },
                { word: "verify", meaning: "v. 證實；核對", root: "verus (真實) + fy (使)", phonetic: "/ˈver.ə.faɪ/" }
            ]
        },
        {
            id: "toefl_7", title: "托福進階 (堅韌與逆境)",
            words: [
                { word: "adversity", meaning: "n. 逆境；不幸", root: "ad (向) + vertere (轉) -> 轉向不利的一面", phonetic: "/ədˈvɝː.sə.t̬i/" },
                { word: "tenacious", meaning: "adj. 堅韌的；固執的", root: "tenere (握住) -> 緊抓不放的", phonetic: "/təˈneɪ.ʃəs/" },
                { word: "mitigate", meaning: "v. 減輕；緩和", root: "mitis (溫和) + agere (做)", phonetic: "/ˈmɪt̬.ə.ɡeɪt/" },
                { word: "vulnerable", meaning: "adj. 脆弱的；易受傷的", root: "vulnus (傷口) + able", phonetic: "/ˈvʌl.nɚ.ə.bəl/" },
                { word: "alleviate", meaning: "v. 減輕(痛苦)", root: "ad (向) + levis (輕) -> 使負擔變輕", phonetic: "/əˈliː.vi.eɪt/" },
                { word: "hinder", meaning: "v. 阻礙；妨礙", root: "hind (在後) -> 拖在後面", phonetic: "/ˈhɪn.dɚ/" },
                { word: "insurmountable", meaning: "adj. 難以克服的", root: "in (不) + surmonter (超越)", phonetic: "/ˌɪn.sɚˈmaʊn.t̬ə.bəl/" },
                { word: "prevail", meaning: "v. 戰勝；盛行", root: "prae (前) + valere (強壯) -> 力量佔上風", phonetic: "/prɪˈveɪl/" },
                { word: "stagnant", meaning: "adj. 停滯的；不景氣的", root: "stagnare (停滯)", phonetic: "/ˈstæɡ.nənt/" },
                { word: "thrive", meaning: "v. 茁壯；繁榮", root: "thrifa (古諾斯語：抓取/獲利)", phonetic: "/θraɪv/" }
            ]
        },
        {
            id: "toefl_8", title: "托福進階 (流轉與演化)",
            words: [
                { word: "fluctuate", meaning: "v. 波動；起伏", root: "fluere (流動) -> 如水波般", phonetic: "/ˈflʌk.tʃu.eɪt/" },
                { word: "metamorphosis", meaning: "n. 蛻變；質變", root: "meta (改變) + morphe (形態)", phonetic: "/ˌmet̬.əˈmɔːr.fə.sɪs/" },
                { word: "mutable", meaning: "adj. 易變的", root: "mutare (改變) + able", phonetic: "/ˈmjuː.t̬ə.bəl/" },
                { word: "sporadic", meaning: "adj. 偶發的；零星的", root: "spora (種子) -> 像種子般散落的", phonetic: "/spəˈræd.ɪk/" },
                { word: "impetus", meaning: "n. 推動力；促進", root: "in (入) + petere (尋求/衝) -> 內在的衝力", phonetic: "/ˈɪm.pə.t̬əs/" },
                { word: "proliferate", meaning: "v. 激增；迅速繁殖", root: "proles (後代) + ferre (帶來)", phonetic: "/prəˈlɪf.ə.reɪt/" },
                { word: "diminish", meaning: "v. 減少；削弱", root: "dis (分開) + minuere (變小)", phonetic: "/dɪˈmɪn.ɪʃ/" },
                { word: "erratic", meaning: "adj. 不穩定的；古怪的", root: "errare (漫遊/迷失)", phonetic: "/ɪˈræt̬.ɪk/" },
                { word: "fossilize", meaning: "v. 僵化；成化石", root: "fossilis (挖出來的)", phonetic: "/ˈfɑː.səl.aɪz/" },
                { word: "volatile", meaning: "adj. 易變的；不穩定的", root: "volare (飛) -> 隨時會飛走的", phonetic: "/ˈvɑː.lə.t̬əl/" }
            ]
        },
        {
            id: "toefl_9", title: "托福進階 (辯證與真理)",
            words: [
                { word: "empirical", meaning: "adj. 實證的；經驗主義的", root: "empeiria (希臘語：經驗)", phonetic: "/ɪmˈpɪr.ɪ.kəl/" },
                { word: "plausible", meaning: "adj. 貌似有理的", root: "plaudere (鼓掌) -> 聽起來值得拍手的", phonetic: "/ˈplɑː.zə.bəl/" },
                { word: "refute", meaning: "v. 駁斥；反駁", root: "re (反) + futare (打擊)", phonetic: "/rɪˈfjuːt/" },
                { word: "postulate", meaning: "v. 假設；視為理所當然", root: "postulare (要求) -> 要求先承認的前提", phonetic: "/ˈpɑːs.tʃə.leɪt/" },
                { word: "corroborate", meaning: "v. 證實；確證", root: "cor (共同) + roborare (加強)", phonetic: "/kəˈrɑː.bə.reɪt/" },
                { word: "fallacy", meaning: "n. 謬誤；錯誤的觀念", root: "fallere (欺騙)", phonetic: "/ˈfæl.ə.si/" },
                { word: "ambivalent", meaning: "adj. 矛盾的；心情複雜的", root: "ambi (兩者) + valere (力量) -> 兩股力量拉扯", phonetic: "/æmˈbɪv.ə.lənt/" },
                { word: "paradigm", meaning: "n. 典範；範式", root: "para (在旁) + deiknunai (展示)", phonetic: "/ˈper.ə.daɪm/" },
                { word: "substantiate", meaning: "v. 證實；證明", root: "sub (在下) + stare (站立) -> 給予底層支撐", phonetic: "/səbˈstæn.ʃi.eɪt/" },
                { word: "legitimacy", meaning: "n. 合法性；正當性", root: "lex (法律) -> 符合法理的狀態", phonetic: "/ləˈdʒɪt̬.ə.mə.si/" }
            ]
        },
        {
            id: "toefl_10", title: "托福進階 (秩序與混亂)",
            words: [
                { word: "hierarchy", meaning: "n. 階級制度", root: "hieros (神聖) + archein (統治)", phonetic: "/ˈhaɪ.rɑːr.ki/" },
                { word: "anarchy", meaning: "n. 無政府狀態；混亂", root: "an (無) + arkhos (統治者)", phonetic: "/ˈæn.ɚ.ki/" },
                { word: "cohere", meaning: "v. 凝聚；連貫", root: "co (共同) + haerere (黏附)", phonetic: "/koʊˈhɪr/" },
                { word: "disintegrate", meaning: "v. 瓦解；解體", root: "dis (分開) + integer (完整)", phonetic: "/dɪˈsɪn.t̬ə.ɡreɪt/" },
                { word: "homogenous", meaning: "adj. 同質的", root: "homos (相同) + genos (種類)", phonetic: "/həˈmɑː.dʒə.nəs/" },
                { word: "disparate", meaning: "adj. 迥然不同的", root: "dis (分開) + parare (準備)", phonetic: "/ˈdɪs.pɚ.ət/" },
                { word: "symmetry", meaning: "n. 對稱；勻稱", root: "syn (共同) + metron (測量)", phonetic: "/ˈsɪm.ə.tri/" },
                { word: "tumultuous", meaning: "adj. 混亂的；喧譁的", root: "tumultus (騷動)", phonetic: "/tuːˈmʌl.tʃu.əs/" },
                { word: "stratify", meaning: "v. 使分層；使階級化", root: "stratum (層) + fy (使)", phonetic: "/ˈstræt̬.ə.faɪ/" },
                { word: "pervasive", meaning: "adj. 普遍的；瀰漫的", root: "per (穿過) + vadere (走) -> 無所不在的", phonetic: "/pɚˈveɪ.sɪv/" }
            ]
        },
        {
            id: "toefl_11", title: "托福進階 (倫理與信仰)",
            words: [
                { word: "hypocrisy", meaning: "n. 偽善；虛偽", root: "hypo (在下) + krinein (判斷) -> 演戲", phonetic: "/hɪˈpɑː.krə.si/" },
                { word: "integrity", meaning: "n. 正直；完整性", root: "integer (完整/未受損的)", phonetic: "/ɪnˈteɡ.rə.t̬i/" },
                { word: "secular", meaning: "adj. 世俗的；非宗教的", root: "saeculum (時代/世俗)", phonetic: "/ˈsek.jə.lɚ/" },
                { word: "dogmatic", meaning: "adj. 教條的；武斷的", root: "dogma (意見/教條)", phonetic: "/dɑːɡˈmæt̬.ɪk/" },
                { word: "pious", meaning: "adj. 虔誠的", root: "pius (盡責的/敬神的)", phonetic: "/ˈpaɪ.əs/" },
                { word: "venerate", meaning: "v. 尊崇；敬重", root: "venus (愛/渴望) -> 充滿敬意", phonetic: "/ˈven.ə.reɪt/" },
                { word: "malevolent", meaning: "adj. 惡意的", root: "male (壞) + velle (意願)", phonetic: "/məˈlev.əl.ənt/" },
                { word: "benevolent", meaning: "adj. 仁慈的", root: "bene (好) + velle (意願)", phonetic: "/bəˈnev.əl.ənt/" },
                { word: "condemn", meaning: "v. 譴責；判刑", root: "con (完全) + damnare (傷害/定罪)", phonetic: "/kənˈdem/" },
                { word: "vindicate", meaning: "v. 證明清白；維護", root: "vis (力量) + dicere (說) -> 用力辯護", phonetic: "/ˈvɪn.də.keɪt/" }
            ]
        },
        {
            id: "toefl_12", title: "托福進階 (繁榮與衰退)",
            words: [
                { word: "affluent", meaning: "adj. 富裕的", root: "ad (向) + fluere (流) -> 財富流入", phonetic: "/ˈæf.lu.ənt/" },
                { word: "destitute", meaning: "adj. 貧困的；一無所有的", root: "de (離開) + statuere (放置) -> 失去依靠", phonetic: "/ˈdes.tə.tuːt/" },
                { word: "lucrative", meaning: "adj. 獲利豐厚的", root: "lucrum (利潤)", phonetic: "/ˈluː.krə.t̬ɪv/" },
                { word: "deplete", meaning: "v. 耗盡", root: "de (反) + plere (裝滿) -> 使變空", phonetic: "/dɪˈpliːt/" },
                { word: "augment", meaning: "v. 擴增；提高", root: "augere (增加)", phonetic: "/ɑːɡˈment/" },
                { word: "obsolete", meaning: "adj. 過時的；淘汰的", root: "ob (離開) + solere (習慣) -> 不再被習慣使用的", phonetic: "/ˌɑːb.səlˈiːt/" },
                { word: "surplus", meaning: "n. 過剩；盈餘", root: "super (超過) + plus (更多)", phonetic: "/ˈsɝː.pləs/" },
                { word: "deteriorate", meaning: "v. 惡化", root: "deterior (更壞的)", phonetic: "/dɪˈtɪr.i.ə.reɪt/" },
                { word: "burgeon", meaning: "v. 迅速發展；發芽", root: "burjon (花苞/萌芽)", phonetic: "/ˈbɝː.dʒən/" },
                { word: "desolate", meaning: "adj. 荒涼的；孤寂的", root: "de (徹底) + solus (孤獨)", phonetic: "/ˈdes.əl.ət/" }
            ]
        },
        {
            id: "toefl_13", title: "托福進階 (意識與感知)",
            words: [
                { word: "subliminal", meaning: "adj. 潛意識的", root: "sub (在下) + limen (門檻)", phonetic: "/ˌsʌbˈlɪm.ə.nəl/" },
                { word: "tangible", meaning: "adj. 有形的；實際的", root: "tangere (觸摸) -> 摸得到的", phonetic: "/ˈtæn.dʒə.bəl/" },
                { word: "imperceptible", meaning: "adj. 難以察覺的", root: "in (不) + percipere (感知)", phonetic: "/ˌɪm.pɚˈsep.tə.bəl/" },
                { word: "cognition", meaning: "n. 認知", root: "co (共同) + gnoscere (知道)", phonetic: "/kɑːɡˈnɪʃ.ən/" },
                { word: "hallucination", meaning: "n. 幻覺", root: "hallucinari (心智漫遊)", phonetic: "/həˌluː.səˈneɪ.ʃən/" },
                { word: "introspective", meaning: "adj. 內省的", root: "intro (向內) + specere (看)", phonetic: "/ˌɪn.trəˈspek.tɪv/" },
                { word: "manifest", meaning: "v. 顯現；表明", root: "manus (手) + festus (打擊) -> 具體呈現", phonetic: "/ˈmæn.ə.fest/" },
                { word: "latent", meaning: "adj. 潛伏的；隱藏的", root: "latere (隱藏)", phonetic: "/ˈleɪ.tənt/" },
                { word: "oblivious", meaning: "adj. 遺忘的；未察覺的", root: "oblivisci (忘記)", phonetic: "/əˈblɪv.i.əs/" },
                { word: "reminisce", meaning: "v. 回憶；緬懷", root: "re (再) + mind (心智)", phonetic: "/ˌrem.əˈnɪs/" }
            ]
        },
        {
            id: "toefl_14", title: "托福進階 (本質與虛無)",
            words: [
                { word: "intrinsic", meaning: "adj. 固有的；本質的", root: "intra (在內) + secus (沿著)", phonetic: "/ɪnˈtrɪn.zɪk/" },
                { word: "extraneous", meaning: "adj. 無關的；外來的", root: "extra (在...之外)", phonetic: "/ɪkˈstreɪ.ni.əs/" },
                { word: "hollow", meaning: "adj. 空洞的；虛偽的", root: "holh (古英語：洞穴)", phonetic: "/ˈhɑː.loʊ/" },
                { word: "quintessence", meaning: "n. 精華；典範", root: "quinta (第五) + essentia (元素)", phonetic: "/kwɪnˈtes.əns/" },
                { word: "superficial", meaning: "adj. 表面的；膚淺的", root: "super (在...之上) + facies (臉)", phonetic: "/ˌsuː.pɚˈfɪʃ.əl/" },
                { word: "astute", meaning: "adj. 機敏的；狡黠的", root: "astus (手腕/策略)", phonetic: "/əˈstuːt/" },
                { word: "frivolous", meaning: "adj. 輕浮的；瑣碎的", root: "frivolus (愚蠢的)", phonetic: "/ˈfrɪv.əl.əs/" },
                { word: "stark", meaning: "adj. 荒涼的；鮮明的對比", root: "stearc (僵硬的)", phonetic: "/stɑːrk/" },
                { word: "amorphous", meaning: "adj. 無固定形狀的", root: "a (無) + morphe (形態)", phonetic: "/əˈmɔːr.fəs/" },
                { word: "vacuum", meaning: "n. 真空；空白", root: "vacuus (空的)", phonetic: "/ˈvæk.juːm/" }
            ]
        },
        {
            id: "toefl_15", title: "托福進階 (極限與超越)",
            words: [
                { word: "finite", meaning: "adj. 有限的", root: "finis (邊界/結束)", phonetic: "/ˈfaɪ.naɪt/" },
                { word: "infinite", meaning: "adj. 無限的", root: "in (不) + finis (邊界)", phonetic: "/ˈɪn.fə.nət/" },
                { word: "surpass", meaning: "v. 超越；勝過", root: "sur (超過) + passer (經過)", phonetic: "/sɚˈpæs/" },
                { word: "boundary", meaning: "n. 邊界；界線", root: "bound (限制)", phonetic: "/ˈbaʊn.dər.i/" },
                { word: "culminate", meaning: "v. 達到頂點", root: "culmen (頂峰)", phonetic: "/ˈkʌl.mə.neɪt/" },
                { word: "marginal", meaning: "adj. 邊緣的；微不足道的", root: "margo (邊緣)", phonetic: "/ˈmɑːr.dʒɪ.nəl/" },
                { word: "paramount", meaning: "adj. 至高無上的；首要的", root: "par (藉由) + amont (向上)", phonetic: "/ˈper.ə.maʊnt/" },
                { word: "subordinate", meaning: "adj. 次要的；下級的", root: "sub (在下) + ordinare (排序)", phonetic: "/səˈbɔːr.dən.ət/" },
                { word: "pinnacle", meaning: "n. 頂峰；極點", root: "pinna (羽翼/尖端)", phonetic: "/ˈpɪn.ə.kəl/" },
                { word: "emancipate", meaning: "v. 解放；解除束縛", root: "ex (出) + mancipum (奴隸) -> 脫離掌控", phonetic: "/iˈmæn.sə.peɪt/" }
            ]
        },
        {
            id: "toefl_16", title: "托福核心 (宇宙與生態)",
            words: [
                { word: "cosmos", meaning: "n. 宇宙 (強調秩序)", root: "kosmos (秩序/世界)", phonetic: "/ˈkɑːz.moʊs/" },
                { word: "symbiosis", meaning: "n. 共生關係", root: "syn (共同) + bioun (生活)", phonetic: "/ˌsɪm.baɪˈoʊ.sɪs/" },
                { word: "equilibrium", meaning: "n. 平衡", root: "aequi (相等) + libra (天平)", phonetic: "/ˌiː.kwəˈlɪb.ri.əm/" },
                { word: "sustainability", meaning: "n. 永續性", root: "sus (在下) + tenere (保持) + ability", phonetic: "/səˌsteɪ.nəˈbɪl.ə.t̬i/" },
                { word: "biodiversity", meaning: "n. 生物多樣性", root: "bio (生命) + diversity (多樣)", phonetic: "/ˌbaɪ.oʊ.dɪˈvɝː.sə.t̬i/" },
                { word: "habitat", meaning: "n. 棲息地", root: "habitare (居住)", phonetic: "/ˈhæb.ə.tæt/" },
                { word: "catalyst", meaning: "n. 催化劑；促使變化的人事物", root: "cata (向下) + lyein (解開)", phonetic: "/ˈkæt̬.əl.ɪst/" },
                { word: "synthesis", meaning: "n. 合成；綜合", root: "syn (共同) + thesis (放置)", phonetic: "/ˈsɪn.θə.sɪs/" },
                { word: "interdependence", meaning: "n. 相互依賴", root: "inter (之間) + dependence (依賴)", phonetic: "/ˌɪn.t̬ɚ.dɪˈpen.dəns/" },
                { word: "microcosm", meaning: "n. 微觀世界；縮影", root: "mikros (小) + kosmos (世界)", phonetic: "/ˈmaɪ.kroʊˌkɑː.zəm/" }
            ]
        }
    ],


    // 🌟 新增：多益實戰 (20字，分為兩關)
    toeic_vocab: [
        {
            title: "多益必考核心 (一)",
            words: [
                { word: "IMPLEMENT", meaning: "實施；執行" },
                { word: "REVENUE", meaning: "收益；歲入" },
                { word: "NEGOTIATE", meaning: "談判；協商" },
                { word: "PROPOSAL", meaning: "提案；企劃書" },
                { word: "COMMITTEE", meaning: "委員會" },
                { word: "EVALUATE", meaning: "評估；核定" },
                { word: "WARRANTY", meaning: "保固；保證書" },
                { word: "INVENTORY", meaning: "存貨；盤點" },
                { word: "STRATEGY", meaning: "策略；戰略" },
                { word: "BUDGET", meaning: "預算" }
            ]
        },
        {
            title: "多益必考核心 (二)",
            words: [
                { word: "CAMPAIGN", meaning: "活動；宣傳活動" },
                { word: "FREQUENT", meaning: "頻繁的；常發生的" },
                { word: "COMMUTE", meaning: "通勤" },
                { word: "ITINERARY", meaning: "行程表；旅行路線" },
                { word: "CORPORATE", meaning: "企業的；法人的" },
                { word: "DEADLINE", meaning: "截止日期" },
                { word: "COMPENSATE", meaning: "補償；賠償" },
                { word: "CANDIDATE", meaning: "候選人；應徵者" },
                { word: "FACILITY", meaning: "設施；設備" },
                { word: "QUOTATION", meaning: "報價單；引語" }
            ]
        }
    ],

    // 🌟 新增：生活俚語 (20字，分為兩關)
    slang: [
        {
            title: "道地美式俚語 (一)",
            words: [
                { word: "AWESOME", meaning: "極好的；超讚的" },
                { word: "BUMMER", meaning: "令人失望的事；掃興" },
                { word: "SALTY", meaning: "惱羞成怒的；酸葡萄心理" },
                { word: "GHOST", meaning: "不告而別；搞消失" },
                { word: "CRUSH", meaning: "迷戀；暗戀對象" },
                { word: "SHADY", meaning: "可疑的；偷偷摸摸的" },
                { word: "DOPE", meaning: "超酷的；完美的" },
                { word: "SKETCHY", meaning: "詭異的；不太安全的" },
                { word: "SAVAGE", meaning: "超猛的；不留情面的" },
                { word: "FLEX", meaning: "炫耀；展現" }
            ]
        },
        {
            title: "道地美式俚語 (二)",
            words: [
                { word: "LOWKEY", meaning: "低調地；有點偷偷地" },
                { word: "HIGHKEY", meaning: "高調地；明顯地" },
                { word: "BASIC", meaning: "老套的；大眾款無新意的" },
                { word: "CATCHY", meaning: "朗朗上口的；好記的" },
                { word: "CHEESY", meaning: "俗氣的；太過煽情的" },
                { word: "CRAM", meaning: "死記硬背；臨時抱佛腳" },
                { word: "EPIC", meaning: "史詩級的；超乎想像的" },
                { word: "LIT", meaning: "超讚的；超嗨的" },
                { word: "SNATCHED", meaning: "極好的；完美無瑕的" },
                { word: "CHILL", meaning: "放鬆；冷靜點" }
            ]
        }
    ],





    
        // ==========================================
    // 模組三：托福適性考場專用 (原生完美相容版 - 滿編10題)
    // ==========================================
    toefl_adaptive: {
        reading: {
            id: "t_r_01",
            article: "In an era characterized by chronic digital overload, the Japanese spatial concept of 'Ma' offers a profound psychological remedy. 'Ma' is often translated as 'negative space' or 'gap,' but it does not imply an empty void. Rather, it represents a dynamic stillness that gives form to the surrounding elements. In traditional architecture, a room is not defined by its walls, but by the empty space within them. Psychologists have found that incorporating 'Ma' into daily life—such as scheduling deliberate pauses between tasks or decluttering physical environments—significantly reduces cortisol levels. This intentional emptiness allows the mind to shift from a state of constant reaction to one of deep reflection, proving that sometimes, doing nothing is the most productive action one can take.",
            questions: [
                { id: "tr_q1", text: "1. What is the primary definition of 'Ma' according to the passage?", options: {A:"A dark, empty void.", B:"A dynamic stillness or negative space.", C:"A traditional style of painting.", D:"A method of digital communication."}, answer: "B", points: 3 },
                { id: "tr_q2", text: "2. How do psychologists believe 'Ma' affects human health?", options: {A:"It increases anxiety and stress.", B:"It encourages multitasking.", C:"It significantly reduces cortisol levels.", D:"It causes chronic digital overload."}, answer: "C", points: 3 },
                { id: "tr_q3", text: "3. What does the passage suggest about the modern digital era?", options: {A:"It suffers from chronic digital overload.", B:"It perfectly embraces the concept of 'Ma'.", C:"It is the most productive era in human history.", D:"It completely ignores traditional Japanese architecture."}, answer: "A", points: 3 },
                { id: "tr_q4", text: "4. What is the ultimate benefit of incorporating 'Ma' into daily life?", options: {A:"It helps build stronger architectural walls.", B:"It shifts the mind from constant reaction to deep reflection.", C:"It allows people to work 24 hours a day.", D:"It increases the amount of furniture in a room."}, answer: "B", points: 3 },
                { id: "tr_q5", text: "5. The word 'chronic' in the first sentence is closest in meaning to:", options: {A:"Persistent and long-lasting", B:"Temporary and fleeting", C:"Mild and harmless", D:"Sudden and unexpected"}, answer: "A", points: 3 },
                { id: "tr_q6", text: "6. According to traditional Japanese architecture, how is a room defined?", options: {A:"By the thickness of its wooden walls.", B:"By the empty space contained within it.", C:"By the amount of sunlight it receives.", D:"By the expensive furniture inside."}, answer: "B", points: 3 },
                { id: "tr_q7", text: "7. Which of the following is an example of incorporating 'Ma' given by the author?", options: {A:"Buying more technological devices.", B:"Scheduling deliberate pauses between tasks.", C:"Working continuously without breaks.", D:"Listening to loud music while studying."}, answer: "B", points: 3 },
                { id: "tr_q8", text: "8. The word 'deliberate' is closest in meaning to:", options: {A:"Accidental", B:"Intentional", C:"Careless", D:"Rushed"}, answer: "B", points: 3 },
                { id: "tr_q9", text: "9. What paradoxical conclusion does the author reach at the end of the passage?", options: {A:"Doing nothing can be the most productive action.", B:"Empty space is heavier than solid walls.", C:"Stress is actually good for deep reflection.", D:"Technology is the only cure for digital overload."}, answer: "A", points: 3 },
                { id: "tr_q10", text: "10. What is the author's primary purpose in writing this passage?", options: {A:"To teach readers how to build a traditional Japanese house.", B:"To introduce 'Ma' as a psychological remedy for modern stress.", C:"To argue that all digital devices should be banned.", D:"To explain the biological process of cortisol production."}, answer: "B", points: 3 }
            ]
        },
        listening_hard: {
            id: "t_lh_01",
            audioScript: "Professor: Let's discuss the fascinating link between altruism and neuroplasticity. We used to think of compassion as merely a moral choice. However, recent fMRI scans reveal that engaging in selfless acts actually thickens the prefrontal cortex and strengthens the neural pathways associated with emotional regulation. In other words, when you practice compassion for others, you are physically rewiring your own brain to be more resilient against stress. It perfectly illustrates the ancient philosophical concept of interbeing: helping others is literally helping yourself.",
            questions: [
                { id: "tlh_q1", text: "1. What is the main topic of the lecture?", options: {A:"The history of traditional moral philosophy.", B:"The neurological effects of altruism and compassion.", C:"How to perform an fMRI scan.", D:"The dangers of chronic stress."}, answer: "B", points: 3 },
                { id: "tlh_q2", text: "2. How does practicing compassion alter the brain physically?", options: {A:"It thickens the prefrontal cortex.", B:"It shrinks the entire brain.", C:"It disables the neural pathways.", D:"It slows down the nervous system."}, answer: "A", points: 3 },
                { id: "tlh_q3", text: "3. What ancient philosophical concept does this neurological evidence support?", options: {A:"Consumerism", B:"Individualism", C:"Interbeing", D:"Nihilism"}, answer: "C", points: 3 },
                { id: "tlh_q4", text: "4. What did people PREVIOUSLY assume about compassion?", options: {A:"It was merely a moral choice.", B:"It was a physical reflex.", C:"It caused brain damage.", D:"It was impossible to study."}, answer: "A", points: 3 },
                { id: "tlh_q5", text: "5. What technology was used to reveal these new findings?", options: {A:"X-rays", B:"fMRI scans", C:"Blood tests", D:"Ultrasounds"}, answer: "B", points: 3 },
                { id: "tlh_q6", text: "6. According to the professor, what happens to pathways associated with emotional regulation?", options: {A:"They are completely destroyed.", B:"They remain unchanged.", C:"They are significantly weakened.", D:"They are strengthened."}, answer: "D", points: 3 },
                { id: "tlh_q7", text: "7. What does the word 'resilient' mean in the context of the lecture?", options: {A:"Able to withstand and recover from stress.", B:"Easily broken or damaged.", C:"Highly emotional and unstable.", D:"Physically inflexible."}, answer: "A", points: 3 },
                { id: "tlh_q8", text: "8. What does the professor imply by the phrase 'helping others is literally helping yourself'?", options: {A:"You will receive financial rewards for volunteering.", B:"Altruism provides tangible, neurological benefits to the giver.", C:"People only help others to look good.", D:"It is impossible to help someone without getting paid."}, answer: "B", points: 3 },
                { id: "tlh_q9", text: "9. Which part of the brain is explicitly mentioned as being affected by selfless acts?", options: {A:"The brain stem", B:"The prefrontal cortex", C:"The cerebellum", D:"The visual cortex"}, answer: "B", points: 3 },
                { id: "tlh_q10", text: "10. What is the professor's attitude toward the recent findings?", options: {A:"Skeptical and doubtful.", B:"Fascinated and supportive.", C:"Angry and dismissive.", D:"Indifferent and bored."}, answer: "B", points: 3 }
            ]
        },
        listening_easy: {
            id: "t_le_01",
            audioScript: "Attention all students. The campus Wellness Center is hosting a free, three-day silent meditation retreat this coming weekend. Registration closes on Thursday at 5 PM. Please remember that smartphones and laptops are strictly prohibited during the retreat to ensure a distraction-free environment.",
            questions: [
                { id: "tle_q1", text: "1. What event is the Wellness Center hosting?", options: {A:"A music concert", B:"A silent meditation retreat", C:"A programming workshop", D:"A sports tournament"}, answer: "B", points: 3 },
                { id: "tle_q2", text: "2. What is strictly prohibited during the event?", options: {A:"Drinking water", B:"Reading physical books", C:"Smartphones and laptops", D:"Wearing comfortable clothes"}, answer: "C", points: 3 },
                { id: "tle_q3", text: "3. When does registration for the event close?", options: {A:"Wednesday", B:"Thursday", C:"Friday", D:"Saturday"}, answer: "B", points: 3 },
                { id: "tle_q4", text: "4. At what time does the registration close?", options: {A:"3 PM", B:"5 PM", C:"8 PM", D:"Midnight"}, answer: "B", points: 3 },
                { id: "tle_q5", text: "5. How much does it cost to attend the retreat?", options: {A:"It is free.", B:"$10", C:"$50", D:"The cost is not mentioned."}, answer: "A", points: 3 },
                { id: "tle_q6", text: "6. How long will the retreat last?", options: {A:"One day", B:"Two days", C:"Three days", D:"One week"}, answer: "C", points: 3 },
                { id: "tle_q7", text: "7. When is the retreat taking place?", options: {A:"This coming weekend", B:"Next Monday", C:"During the winter break", D:"Next month"}, answer: "A", points: 3 },
                { id: "tle_q8", text: "8. Who is hosting the event?", options: {A:"The Student Union", B:"The campus Library", C:"The Wellness Center", D:"The cafeteria"}, answer: "C", points: 3 },
                { id: "tle_q9", text: "9. Why are certain electronic devices prohibited?", options: {A:"To save electricity on campus.", B:"To ensure a distraction-free environment.", C:"Because there is no Wi-Fi available.", D:"To prevent students from cheating on exams."}, answer: "B", points: 3 },
                { id: "tle_q10", text: "10. Who is the intended audience for this announcement?", options: {A:"University professors", B:"Campus security guards", C:"All students", D:"Local residents only"}, answer: "C", points: 3 }
            ]
        },
        speaking: {
            id: "t_s_01",
            article: "Clinging to the past only brings suffering; true wisdom lies in forgiving oneself and focusing entirely on the present moment. Emptiness is not a void, but a canvas of infinite possibilities.",
            audioScript: "Clinging to the past only brings suffering; true wisdom lies in forgiving oneself and focusing entirely on the present moment. Emptiness is not a void, but a canvas of infinite possibilities.",
            questions: [
                { id: "ts_q1", text: "請點擊左側播放聆聽，並誠實大聲跟讀三次，體會這份放下的平靜與智慧。(滿分30分)", options: {A:"是的，我已用心完成跟讀修行。", B:"我還需要再靜心練習一次。"}, answer: "A", points: 30 }
            ]
        },
        writing: {
            id: "t_w_01",
            questions: [
                { 
                    id: "tw_q1", text: "獨立寫作 (Independent Writing)：\nDo you agree or disagree with the following statement? 'Taking deliberate pauses and embracing silence is more crucial for long-term well-being than constant busyness.' Please write an essay of about 150-200 words to express your views. (滿分30分)", type: "composition",
                    answer: "【評分標準】論述需清晰對比「無休止的忙碌」與「刻意留白」對心理狀態的影響。高分關鍵在於精確使用如 digital detox, cognitive overload, serenity, interbeing 等詞彙。", points: 30
                }
            ]
        }
    },

    // ==========================================
    // 模組四：多益職場考場專用 (100題 精華半編版)
    // 聽力 50 題 + 閱讀 50 題
    // ==========================================
    toeic: {
        part1: [
            { id: "toeic_p1_01", imageDesc: "[圖片情境：一位男士正坐在辦公桌前打字，桌上有一杯咖啡]", audioScript: "(A) He is drinking a cup of coffee. (B) He is typing on a keyboard. (C) He is leaving the office. (D) He is reading a newspaper.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "B", points: 5 },
            { id: "toeic_p1_02", imageDesc: "[圖片情境：幾位專業人士在會議室中，一人正指著白板上的圖表說明]", audioScript: "(A) They are eating lunch in a cafeteria. (B) One of the men is pointing at a chart. (C) They are arranging chairs in a circle. (D) The whiteboard is being erased.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "B", points: 5 },
            { id: "toeic_p1_03", imageDesc: "[圖片情境：一位工程師正在伺服器機房內檢查線路，手持平板電腦]", audioScript: "(A) He is installing a new light fixture. (B) He is inspecting the server cables. (C) He is turning off the monitor. (D) He is carrying a heavy box.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "B", points: 5 },
            { id: "toeic_p1_04", imageDesc: "[圖片情境：一名女子站在影印機旁，手裡拿著一疊文件]", audioScript: "(A) She is repairing the machine. (B) She is making some copies. (C) She is hanging a poster. (D) She is drinking water.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "B", points: 5 },
            { id: "toeic_p1_05", imageDesc: "[圖片情境：大廳裡有幾盆植物，陽光穿過落地窗灑落]", audioScript: "(A) People are watering the plants. (B) The curtains are completely closed. (C) Potted plants are arranged in the lobby. (D) The windows are being cleaned.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "C", points: 5 },
            { id: "toeic_p1_06", imageDesc: "[圖片情境：兩名工人穿著安全背心，正在將貨物搬上卡車]", audioScript: "(A) They are loading boxes onto a truck. (B) They are driving on a highway. (C) They are taking off their vests. (D) They are sweeping the warehouse floor.", options: {A:"(A)", B:"(B)", C:"(C)", D:"(D)"}, answer: "A", points: 5 }
        ],
        part2: [
            { id: "toeic_p2_01", audioScript: "7. When is the project proposal due? \n(A) By next Friday. \n(B) Yes, I did it. \n(C) Mr. Smith is the manager.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_02", audioScript: "8. Has the software update been installed on all computers? \n(A) Yes, the IT department finished it yesterday. \n(B) The computer is on the desk. \n(C) I prefer to update my schedule.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_03", audioScript: "9. Would you mind reviewing the contract before I send it to the client? \n(A) The client is visiting tomorrow. \n(B) No, not at all. I'll look at it now. \n(C) I signed the document yesterday.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_04", audioScript: "10. Where should we store these extra office supplies? \n(A) At the hardware store. \n(B) Put them in the supply closet on the second floor. \n(C) I have an extra pen.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_05", audioScript: "11. Who is leading the marketing seminar this afternoon? \n(A) It starts at 3 PM. \n(B) The seminar was very helpful. \n(C) I believe Ms. Garcia is in charge.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "C", points: 5 },
            { id: "toeic_p2_06", audioScript: "12. Didn't you take the subway to work today? \n(A) Yes, my car is in the repair shop. \n(B) The subway station is nearby. \n(C) I work in the human resources department.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_07", audioScript: "13. How long will the renovation of the lobby take? \n(A) It’s a very spacious lobby. \n(B) They expect to finish in about two weeks. \n(C) Turn left at the front desk.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_08", audioScript: "14. Why was the flight to London delayed? \n(A) Because of severe weather conditions. \n(B) It takes about ten hours. \n(C) I booked a window seat.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_09", audioScript: "15. Is there a coffee shop in this building, or do I need to go outside? \n(A) I prefer green tea. \n(B) There's a cafe right on the ground floor. \n(C) It’s very cold outside today.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_10", audioScript: "16. Let's schedule a meeting with the design team for Wednesday. \n(A) The design is very modern. \n(B) That works for me. I'll send out the invites. \n(C) They met in the conference room.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_11", audioScript: "17. Which folder should I file these invoices under? \n(A) Under 'Accounts Payable'. \n(B) The filing cabinet is locked. \n(C) I paid the invoice yesterday.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_12", audioScript: "18. Do you know if the printer has been fixed yet? \n(A) Yes, the technician just left. \n(B) Please print fifty copies. \n(C) The ink cartridge is empty.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 },
            { id: "toeic_p2_13", audioScript: "19. The annual banquet will be held at the Grand Hotel, won't it? \n(A) It was a wonderful evening. \n(B) Actually, they changed the venue to the Riverside Center. \n(C) The food was excellent.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "B", points: 5 },
            { id: "toeic_p2_14", audioScript: "20. Why don't we take a short break before we continue reviewing the data? \n(A) I broke my glasses. \n(B) The review was very detailed. \n(C) That's a good idea, I could use some coffee.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "C", points: 5 },
            { id: "toeic_p2_15", audioScript: "21. Are you going to the trade show in Berlin next month? \n(A) I'm still waiting for my manager's approval. \n(B) The show was very crowded. \n(C) Berlin is a beautiful city.", options: {A:"(A)", B:"(B)", C:"(C)"}, answer: "A", points: 5 }
        ],
        part3: [
            {
                id: "toeic_p3_01",
                audioScript: "W: Hi, I'd like to book a flight to Tokyo for next Monday.\nM: Let me check the schedule. We have a direct flight leaving at 10:00 AM.\nW: That sounds perfect. I'll take it. Can I also request a vegetarian meal for the flight?\nM: Certainly. I'll add that to your reservation right now.",
                questions: [
                    { id: "tp3_q1", text: "22. Where does the woman want to travel to?", options: {A:"New York", B:"London", C:"Tokyo", D:"Paris"}, answer: "C", points: 5 },
                    { id: "tp3_q2", text: "23. What time is the flight?", options: {A:"8:00 AM", B:"9:00 AM", C:"10:00 AM", D:"11:00 AM"}, answer: "C", points: 5 },
                    { id: "tp3_q3", text: "24. What special request does the woman make?", options: {A:"Extra legroom", B:"A vegetarian meal", C:"A window seat", D:"Early boarding"}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p3_02",
                audioScript: "M: Sarah, have you reviewed the budget report for the new environmental project?\nW: Not yet. I was planning to look at it after the team meeting at 2 PM. Is there an issue?\nM: We are slightly over budget in the research phase. We might need to cut back on some initial testing.\nW: I see. Let's discuss this together with the lead researcher at 3 PM to find a solution.",
                questions: [
                    { id: "tp3_q4", text: "25. What project are the speakers discussing?", options: {A:"A marketing campaign", B:"An environmental project", C:"A software upgrade", D:"A building construction"}, answer: "B", points: 5 },
                    { id: "tp3_q5", text: "26. What is the problem mentioned by the man?", options: {A:"They missed a deadline.", B:"A staff member resigned.", C:"They are over budget.", D:"The testing equipment is broken."}, answer: "C", points: 5 },
                    { id: "tp3_q6", text: "27. What will they do at 3 PM?", options: {A:"Meet with the lead researcher.", B:"Submit the budget report.", C:"Cancel the project.", D:"Go home early."}, answer: "A", points: 5 }
                ]
            },
            {
                id: "toeic_p3_03",
                audioScript: "M: Hello, I'm calling about the accounting software we purchased last month. We are having trouble generating the annual financial reports.\nW: I apologize for the inconvenience. That module requires a specific update to function correctly with this year's tax codes. \nM: I see. Can you guide me through the update process now?\nW: Certainly. Please open the settings menu and click on the 'System Update' tab.",
                questions: [
                    { id: "tp3_q7", text: "28. What is the man's problem?", options: {A:"He lost his password.", B:"He cannot generate reports.", C:"He wants a refund.", D:"He installed the wrong program."}, answer: "B", points: 5 },
                    { id: "tp3_q8", text: "29. Why is the software not working?", options: {A:"The computer is too old.", B:"The internet is down.", C:"It needs an update for new tax codes.", D:"The license has expired."}, answer: "C", points: 5 },
                    { id: "tp3_q9", text: "30. What does the woman ask the man to do?", options: {A:"Call back later", B:"Purchase a new license", C:"Open the settings menu", D:"Contact the tax office"}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p3_04",
                audioScript: "W: Excuse me, do you know where the employee cafeteria is? I just transferred from the branch office today.\nM: Welcome to headquarters! Yes, it's on the basement level. Take these elevators down to 'B1' and turn right.\nW: Great, thanks. By the way, do they accept credit cards there, or do I need my employee badge?\nM: You can use your badge to get a 20% discount, but they accept credit cards too.",
                questions: [
                    { id: "tp3_q10", text: "31. Why is the woman asking for directions?", options: {A:"She lost her map.", B:"She is a new transfer.", C:"She is a visiting client.", D:"She is late for a meeting."}, answer: "B", points: 5 },
                    { id: "tp3_q11", text: "32. Where is the cafeteria located?", options: {A:"First floor", B:"Second floor", C:"Roof", D:"Basement level"}, answer: "D", points: 5 },
                    { id: "tp3_q12", text: "33. How can the woman get a discount?", options: {A:"Paying with cash.", B:"Arriving before noon.", C:"Using her employee badge.", D:"Ordering a specific meal."}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p3_05",
                audioScript: "M: The catering company just called. They said they will be about 30 minutes late delivering the food for the retirement party.\nW: Oh no, the guests are starting to arrive in 15 minutes! What should we do?\nM: I'll ask the receptionist to direct people to the lounge area first and serve the complementary beverages.\nW: Good idea. I'll go set up the lounge and put on some background music to keep everyone entertained.",
                questions: [
                    { id: "tp3_q13", text: "34. What is the problem?", options: {A:"The catering company is late.", B:"The guest speaker cancelled.", C:"The venue is double-booked.", D:"The food is cold."}, answer: "A", points: 5 },
                    { id: "tp3_q14", text: "35. Where will the guests go first?", options: {A:"To the main hall", B:"To the lounge area", C:"To the garden", D:"To the parking lot"}, answer: "B", points: 5 },
                    { id: "tp3_q15", text: "36. What will the woman do next?", options: {A:"Call the caterer", B:"Greet the guests outside", C:"Set up music in the lounge", D:"Print name tags"}, answer: "C", points: 5 }
                ]
            }
        ],
        part4: [
            {
                id: "toeic_p4_01",
                audioScript: "Attention all passengers. Flight 402 to Taipei is now boarding at Gate 5. Please have your boarding passes and passports ready. We will begin boarding with first-class passengers and those requiring special assistance, followed by groups A and B. Please ensure your carry-on luggage meets the size restrictions.",
                questions: [
                    { id: "tp4_q1", text: "37. What is the main purpose of the announcement?", options: {A:"Report a lost item", B:"Announce a flight boarding", C:"Delay a train", D:"Change a gate"}, answer: "B", points: 5 },
                    { id: "tp4_q2", text: "38. Who will board the plane first?", options: {A:"Families with children", B:"Economy class passengers", C:"First-class passengers", D:"Airline staff"}, answer: "C", points: 5 },
                    { id: "tp4_q3", text: "39. What are passengers asked to check?", options: {A:"Their seating assignments", B:"The weather forecast", C:"Carry-on luggage size", D:"Connecting flights"}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p4_02",
                audioScript: "Good morning, everyone. Before we open the store, I want to quickly go over the new customer service policy. Starting today, we will offer a 30-day return window for all electronics, no questions asked, provided the receipt is shown. Our goal is to ensure complete satisfaction and build long-term trust. Please make sure to communicate this clearly at the checkout counter.",
                questions: [
                    { id: "tp4_q4", text: "40. Who is the intended audience for this announcement?", options: {A:"Customers", B:"Store employees", C:"Delivery drivers", D:"Manufacturers"}, answer: "B", points: 5 },
                    { id: "tp4_q5", text: "41. What is required to return electronics?", options: {A:"A valid ID", B:"Original packaging", C:"A receipt", D:"Manager approval"}, answer: "C", points: 5 },
                    { id: "tp4_q6", text: "42. What is the company's main goal?", options: {A:"Sell more products.", B:"Reduce store hours.", C:"Ensure satisfaction and build trust.", D:"Hire more staff."}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p4_03",
                audioScript: "Thank you for joining this quarterly review meeting. I am pleased to announce that our new open-source project has reached 10,000 downloads in just two weeks. This success is entirely due to our commitment to keeping the code clean, ad-free, and accessible to everyone. Moving forward, we will focus on enhancing the user interface, making it even more intuitive. Let's look at the projected timeline on the screen.",
                questions: [
                    { id: "tp4_q7", text: "43. What milestone has the project achieved?", options: {A:"10,000 employees", B:"10,000 downloads", C:"Large investment", D:"New branch"}, answer: "B", points: 5 },
                    { id: "tp4_q8", text: "44. What contributed to the project's success?", options: {A:"Expensive advertising", B:"Clean and ad-free code", C:"A subscription fee", D:"Tech partnerships"}, answer: "B", points: 5 },
                    { id: "tp4_q9", text: "45. What will be the team's next focus?", options: {A:"Creating ads", B:"Enhancing user interface", C:"Changing project name", D:"Charging fees"}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p4_04",
                audioScript: "You have reached the customer service hotline for Horizon Utilities. Our office is currently closed. Our regular business hours are Monday through Friday, from 8 AM to 6 PM. If you are calling to report a power outage or an emergency, please press 1 to be connected to our 24-hour dispatch team. For all other inquiries, please leave a detailed message after the beep, and a representative will return your call the next business day.",
                questions: [
                    { id: "tp4_q10", text: "46. What type of business is this message for?", options: {A:"Travel agency", B:"Utility company", C:"Hospital", D:"Law firm"}, answer: "B", points: 5 },
                    { id: "tp4_q11", text: "47. Why would a caller press 1?", options: {A:"To pay a bill", B:"To speak to a manager", C:"To report a power outage", D:"To change address"}, answer: "C", points: 5 },
                    { id: "tp4_q12", text: "48. When will regular inquiries be answered?", options: {A:"Immediately", B:"The next business day", C:"In one week", D:"On weekends"}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p4_05",
                audioScript: "Welcome to the grand opening of the City Art Museum's new modern wing. Today, you will have the opportunity to view over fifty contemporary sculptures donated by the Harrison Foundation. Guided tours will start every half hour at the main entrance. Also, don't forget to visit our gift shop on the ground floor, where all items are discounted by 15% today only to celebrate the opening.",
                questions: [
                    { id: "tp4_q13", text: "49. Where is this announcement taking place?", options: {A:"At a shopping mall", B:"At an art museum", C:"At a university", D:"At a foundation office"}, answer: "B", points: 5 },
                    { id: "tp4_q14", text: "50. What is being exhibited?", options: {A:"Historical paintings", B:"Contemporary sculptures", C:"Photography", D:"Antique furniture"}, answer: "B", points: 5 }
                ]
            }
        ],
        part5: [
            { id: "toeic_p5_01", text: "51. The new marketing strategy was highly _____ in increasing our overall sales last quarter.", options: {A:"effect", B:"effective", C:"effectively", D:"effectiveness"}, answer: "B", points: 5 },
            { id: "toeic_p5_02", text: "52. All employees are required to submit their expense reports _____ the end of the month.", options: {A:"on", B:"in", C:"at", D:"by"}, answer: "D", points: 5 },
            { id: "toeic_p5_03", text: "53. The CEO emphasized that sustainable growth is _____ to the company's future success.", options: {A:"vitality", B:"vitally", C:"vital", D:"vitalize"}, answer: "C", points: 5 },
            { id: "toeic_p5_04", text: "54. Employees who wish to attend the seminar must register _____ Friday afternoon.", options: {A:"until", B:"by", C:"within", D:"during"}, answer: "B", points: 5 },
            { id: "toeic_p5_05", text: "55. The manager requested that all confidential documents be handled with the utmost _____.", options: {A:"discreet", B:"discretion", C:"discretely", D:"discretions"}, answer: "B", points: 5 },
            { id: "toeic_p5_06", text: "56. _____ the heavy rain, the outdoor charity event was successfully relocated to the indoor hall.", options: {A:"Although", B:"Because", C:"Despite", D:"However"}, answer: "C", points: 5 },
            { id: "toeic_p5_07", text: "57. The accounting department _____ the financial records for the past three years to ensure compliance.", options: {A:"audits", B:"has been audited", C:"is auditing", D:"has audited"}, answer: "D", points: 5 },
            { id: "toeic_p5_08", text: "58. The software company offers a _____ trial period for users to evaluate the product before purchasing.", options: {A:"complimentary", B:"compliment", C:"complies", D:"complied"}, answer: "A", points: 5 },
            { id: "toeic_p5_09", text: "59. To accommodate the growing number of staff, the company plans to _____ its office space by next year.", options: {A:"expand", B:"expansion", C:"expanding", D:"expands"}, answer: "A", points: 5 },
            { id: "toeic_p5_10", text: "60. The supervisor was very _____ with the team's presentation, praising their thorough research.", options: {A:"impresses", B:"impression", C:"impressed", D:"impressive"}, answer: "C", points: 5 },
            { id: "toeic_p5_11", text: "61. We apologize for any inconvenience caused by the temporary _____ of the online booking system.", options: {A:"suspends", B:"suspend", C:"suspending", D:"suspension"}, answer: "D", points: 5 },
            { id: "toeic_p5_12", text: "62. Only candidates with at least five years of managerial _____ will be considered for this position.", options: {A:"experience", B:"experiment", C:"experiencing", D:"experiences"}, answer: "A", points: 5 },
            { id: "toeic_p5_13", text: "63. Please ensure that all mobile devices are turned off _____ the duration of the conference.", options: {A:"while", B:"during", C:"between", D:"whenever"}, answer: "B", points: 5 },
            { id: "toeic_p5_14", text: "64. The updated employee manual provides _____ instructions on how to request annual leave.", options: {A:"clear", B:"clears", C:"clearly", D:"clearing"}, answer: "A", points: 5 },
            { id: "toeic_p5_15", text: "65. Due to a scheduling conflict, the board meeting has been _____ until next Thursday.", options: {A:"postpone", B:"postponed", C:"postponing", D:"postpones"}, answer: "B", points: 5 },
            { id: "toeic_p5_16", text: "66. The new factory is expected to _____ thousands of jobs for the local community.", options: {A:"create", B:"creations", C:"creative", D:"creatively"}, answer: "A", points: 5 },
            { id: "toeic_p5_17", text: "67. _____ you require further assistance, please do not hesitate to contact our support team.", options: {A:"Should", B:"If", C:"When", D:"Unless"}, answer: "A", points: 5 },
            { id: "toeic_p5_18", text: "68. The company's profits have risen _____ since the introduction of the new product line.", options: {A:"significance", B:"significant", C:"significantly", D:"signify"}, answer: "C", points: 5 },
            { id: "toeic_p5_19", text: "69. The board of directors _____ approved the merger proposal during yesterday's meeting.", options: {A:"unanimous", B:"unanimously", C:"unanimity", D:"unanimities"}, answer: "B", points: 5 },
            { id: "toeic_p5_20", text: "70. Ms. Lewis is responsible for overseeing the _____ of all incoming shipments at the warehouse.", options: {A:"inspect", B:"inspects", C:"inspected", D:"inspection"}, answer: "D", points: 5 }
        ],
        part6: [
            {
                id: "toeic_p6_01",
                article: "Dear Mr. Davis,\nWe are pleased to inform you that your application for the position of Senior Analyst has been __(71)__. We were highly impressed with your background and interview performance. Please come to our main office next Monday at 9 AM for the orientation session. __(72)__.\nSincerely,\nHuman Resources",
                questions: [
                    { id: "tp6_q1", text: "71.", options: {A:"accept", B:"accepted", C:"accepting", D:"accepts"}, answer: "B", points: 5 },
                    { id: "tp6_q2", text: "72.", options: {A:"We regret to inform you that the position is filled.", B:"Please bring a valid photo ID with you.", C:"The orientation will be canceled.", D:"You do not need to attend any sessions."}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p6_02",
                article: "Notice to All Residents:\nThe annual water pipe maintenance will take place next Tuesday from 9 AM to 2 PM. During this time, the water supply will be temporarily __(73)__. We apologize for any inconvenience this may cause. __(74)__. We appreciate your cooperation in maintaining the building's infrastructure.\nManagement Office",
                questions: [
                    { id: "tp6_q3", text: "73.", options: {A:"shut off", B:"shutting off", C:"shuts off", D:"shut off from"}, answer: "A", points: 5 },
                    { id: "tp6_q4", text: "74.", options: {A:"Please leave your faucets running.", B:"The electricity will also be cut.", C:"It is advised to store some water in advance.", D:"The maintenance has been postponed."}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p6_03",
                article: "Dear Valued Customer,\nThank you for choosing our cloud storage service. Your annual subscription will expire in 15 days. To ensure uninterrupted access to your files, please __(75)__ your payment information in your account settings. __(76)__.\nBest regards,\nThe Billing Team",
                questions: [
                    { id: "tp6_q5", text: "75.", options: {A:"update", B:"updates", C:"updated", D:"updating"}, answer: "A", points: 5 },
                    { id: "tp6_q6", text: "76.", options: {A:"If you have already renewed, please ignore this message.", B:"We will delete all your files immediately.", C:"Our service is completely free.", D:"Please visit our physical store to pay."}, answer: "A", points: 5 }
                ]
            },
            {
                id: "toeic_p6_04",
                article: "To: All Department Heads\nFrom: IT Support\nSubject: Network Upgrade\n\nPlease note that a major network upgrade will be conducted this weekend. The system will go offline starting Friday at midnight and will remain __(77)__ until Sunday evening. __(78)__. Please ensure all critical files are saved locally before the shutdown.\nThank you.",
                questions: [
                    { id: "tp6_q7", text: "77.", options: {A:"unavailable", B:"unavailability", C:"unavailably", D:"avails"}, answer: "A", points: 5 },
                    { id: "tp6_q8", text: "78.", options: {A:"You must work through the weekend.", B:"No internet access will be possible during this period.", C:"The upgrade has been successfully completed.", D:"We are hiring new IT staff."}, answer: "B", points: 5 }
                ]
            }
        ],
        part7: [
            {
                id: "toeic_p7_01",
                article: "Memo\nTo: All Staff\nFrom: Facilities Management\nDate: October 5\nSubject: Break Room Renovation\n\nPlease be informed that the main break room on the 3rd floor will be closed for renovation starting next Wednesday, October 12. The microwave ovens and coffee machines will be temporarily moved to the 2nd-floor lobby. We expect the work to be completed by the end of the month. Thank you for your patience while we upgrade these facilities.",
                questions: [
                    { id: "tp7_q1", text: "79. What is the purpose of this memo?", options: {A:"To announce a new hire", B:"To explain a renovation schedule", C:"To complain about broken equipment", D:"To change working hours"}, answer: "B", points: 5 },
                    { id: "tp7_q2", text: "80. Where will the coffee machines be moved?", options: {A:"To the 1st floor", B:"To the 2nd-floor lobby", C:"To the 4th floor", D:"To the manager's office"}, answer: "B", points: 5 },
                    { id: "tp7_q3", text: "81. When is the renovation expected to be finished?", options: {A:"October 5", B:"October 12", C:"Next Wednesday", D:"By the end of the month"}, answer: "D", points: 5 }
                ]
            },
            {
                id: "toeic_p7_02",
                article: "Email\nTo: Design Team\nFrom: Alice Chen, Project Manager\nDate: November 10\nSubject: Feedback on Logo Drafts\n\nThank you all for submitting the initial drafts for the 'Pure Mind' application logo. The client reviewed them yesterday and was very impressed with the vector aesthetics. They have requested to proceed with Draft B, but they would like the color palette to be slightly muted to evoke a stronger sense of tranquility. Please submit the revised version by Thursday afternoon.",
                questions: [
                    { id: "tp7_q4", text: "82. What is the main purpose of the email?", options: {A:"To schedule a meeting", B:"To provide client feedback", C:"To introduce a new team member", D:"To announce a product launch"}, answer: "B", points: 5 },
                    { id: "tp7_q5", text: "83. What change did the client request for Draft B?", options: {A:"A larger font size", B:"A different shape", C:"A muted color palette", D:"A completely new design"}, answer: "C", points: 5 },
                    { id: "tp7_q6", text: "84. When is the revised version due?", options: {A:"Yesterday", B:"November 10", C:"Thursday afternoon", D:"Next Monday"}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p7_03",
                article: "Internal Announcement\n\nEffective next Monday, the company will implement a new 'Quiet Hour' policy. From 1:00 PM to 2:00 PM every day, employees are encouraged to refrain from scheduling meetings or making non-urgent phone calls. This initiative aims to provide everyone with a block of uninterrupted time to focus on deep work, coding, or simply resting their minds. Please adjust your calendars accordingly.",
                questions: [
                    { id: "tp7_q7", text: "85. What is the purpose of the 'Quiet Hour'?", options: {A:"To serve lunch", B:"To allow for uninterrupted work or rest", C:"To conduct daily team meetings", D:"To clean the office"}, answer: "B", points: 5 },
                    { id: "tp7_q8", text: "86. What are employees asked to avoid during this time?", options: {A:"Using the internet", B:"Drinking coffee", C:"Scheduling meetings", D:"Leaving the building"}, answer: "C", points: 5 },
                    { id: "tp7_q9", text: "87. When does the Quiet Hour take place?", options: {A:"Every morning", B:"Every day from 1 PM to 2 PM", C:"Only on Mondays", D:"After business hours"}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p7_04",
                article: "PRESS RELEASE\n\nEco-Tech Solutions Announces New Solar Panel\n\nSeattle, WA - Eco-Tech Solutions, a leading provider of renewable energy products, unveiled its latest solar panel model, the SunMax 500, at the Global Energy Expo yesterday. The SunMax 500 boasts a 20% increase in energy conversion efficiency compared to previous models. 'Our team has worked tirelessly for two years to develop this technology,' said CEO Mark Evans. The new panels are designed specifically for residential use and will be available for purchase starting in early spring. Early pre-orders will receive a complimentary installation service.",
                questions: [
                    { id: "tp7_q10", text: "88. What is the main subject of the press release?", options: {A:"A change in company leadership", B:"The release of a new renewable energy product", C:"The cancellation of an energy expo", D:"A new environmental law"}, answer: "B", points: 5 },
                    { id: "tp7_q11", text: "89. How is the SunMax 500 different from older models?", options: {A:"It is 20% cheaper.", B:"It is much larger in size.", C:"It has a 20% higher energy conversion efficiency.", D:"It is only for commercial use."}, answer: "C", points: 5 },
                    { id: "tp7_q12", text: "90. What benefit do early pre-orders receive?", options: {A:"A 20% discount", B:"Free installation service", C:"A tour of the factory", D:"An extended warranty"}, answer: "B", points: 5 },
                    { id: "tp7_q13", text: "91. Who is the intended market for the SunMax 500?", options: {A:"Large factories", B:"Residential users", C:"Public schools", D:"Government buildings"}, answer: "B", points: 5 }
                ]
            },
            {
                id: "toeic_p7_05",
                article: "To: Jessica Thorne <j.thorne@logisticsplus.com>\nFrom: Human Resources <hr@logisticsplus.com>\nDate: September 15\nSubject: Annual Performance Review\n\nDear Jessica,\n\nYour annual performance review has been scheduled for Wednesday, September 22, at 10:30 AM in Conference Room B. Please complete the attached self-evaluation form and submit it to your department manager by Monday, September 20. Your insights are a critical part of this review process, as they help us set your professional goals for the upcoming year. \n\nRegards,\nHR Department",
                questions: [
                    { id: "tp7_q14", text: "92. Why was this email sent to Jessica?", options: {A:"To offer her a promotion", B:"To schedule a performance review", C:"To invite her to a company party", D:"To complain about her work"}, answer: "B", points: 5 },
                    { id: "tp7_q15", text: "93. What must Jessica do by September 20?", options: {A:"Attend a meeting in Conference Room B", B:"Submit a self-evaluation form", C:"Sign a new contract", D:"Train a new employee"}, answer: "B", points: 5 },
                    { id: "tp7_q16", text: "94. Who should receive the attached form?", options: {A:"The CEO", B:"Human Resources", C:"Her department manager", D:"The accounting team"}, answer: "C", points: 5 }
                ]
            },
            {
                id: "toeic_p7_06",
                article: "[Job Advertisement]\n\nPositions Available: Customer Service Representative\nLocation: Downtown Toronto\nType: Full-time (Shift work required)\n\nGlobal Communications is seeking energetic individuals to join our growing customer service team. The ideal candidate will have excellent communication skills, a high school diploma, and at least one year of experience in a call center environment. We offer a competitive salary, comprehensive health benefits, and opportunities for career advancement. \n\nTo apply, please send your resume and cover letter to jobs@globalcomm.ca by August 30. Only shortlisted candidates will be contacted for an interview.",
                questions: [
                    { id: "tp7_q17", text: "95. What kind of job is being advertised?", options: {A:"Sales Manager", B:"Customer Service Representative", C:"Software Engineer", D:"Accountant"}, answer: "B", points: 5 },
                    { id: "tp7_q18", text: "96. What is a requirement for the position?", options: {A:"A university degree", B:"Five years of experience", C:"A high school diploma", D:"A valid driver's license"}, answer: "C", points: 5 },
                    { id: "tp7_q19", text: "97. What is the deadline to apply?", options: {A:"Immediately", B:"August 30", C:"September 1", D:"End of the year"}, answer: "B", points: 5 },
                    { id: "tp7_q20", text: "98. How are applicants instructed to apply?", options: {A:"By calling the hotline", B:"By visiting the office in person", C:"By sending an email with required documents", D:"By filling out an online form"}, answer: "C", points: 5 },
                    { id: "tp7_q21", text: "99. What benefit is NOT explicitly mentioned?", options: {A:"Health benefits", B:"Career advancement", C:"Competitive salary", D:"Free transportation"}, answer: "D", points: 5 },
                    { id: "tp7_q22", text: "100. What will happen to candidates who are NOT shortlisted?", options: {A:"They will be offered a different job.", B:"They will not be contacted.", C:"They will receive a phone interview.", D:"They must apply again next year."}, answer: "B", points: 5 }
                
                ]
            }
        ]
    }
};
    
  

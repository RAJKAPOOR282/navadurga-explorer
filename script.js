document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const navadurgaData = [
        { id: 0, name: "Shailputri", hindiName: "शैलपुत्री", image: "/navadurga-explorer/images/shailaputri.jpg", weapon: "Trishul (Trident)", significance: "Daughter of the Mountains, governs the Moon.", mantra: "ॐ देवी शैलपुत्र्यै नमः॥", story: "After her self-immolation as Sati, the Mother Goddess took birth as the daughter of Himalaya, the king of the mountains. In Sanskrit, 'Shaila' means mountain, and 'Putri' means daughter. Hence, she is known as Shailputri." },
        { id: 1, name: "Brahmacharini", hindiName: "ब्रह्मचारिणी", image: "/navadurga-explorer/images/brahmacharini.jpg", weapon: "Rudraksha Mala & Kamandal", significance: "Represents penance and austerity.", mantra: "ॐ देवी ब्रह्मचारिण्यै नमः॥", story: "In this form, Parvati engaged in severe penance (Tapasya) to win Lord Shiva as her husband. She spent thousands of years eating only fruits and flowers, and later only leaves, and finally nothing at all. Her austerity is a symbol of devotion and determination." },
        { id: 2, name: "Chandraghanta", hindiName: "चंद्रघंटा", image: "/navadurga-explorer/images/chandraghanta.jpg", weapon: "Various weapons, rides a tigress", significance: "Represents beauty and bravery.", mantra: "ॐ देवी चन्द्रघण्टायै नमः॥", story: "This is the married form of Parvati. After her marriage to Lord Shiva, she adorned her forehead with a half-moon shaped like a bell (Ghanta), which gives her the name Chandraghanta. She is ready for war, depicting that she can be both benevolent and terrible to establish justice." },
        { id: 3, name: "Kushmanda", hindiName: "कूष्माण्डा", image: "/navadurga-explorer/images/Kushmanda.jpg", weapon: "Holds weapons, Kamandal, Lotus", significance: "The creator of the universe.", mantra: "ॐ देवी कूष्माण्डायै नमः॥", story: "It is believed that when the universe was non-existent and darkness prevailed everywhere, Maa Kushmanda produced the cosmic egg with her smile. The universe was created from her divine smile. She is believed to reside in the core of the sun, providing light and energy to the universe." },
        { id: 4, name: "Skandamata", hindiName: "स्कंदमाता", image: "/navadurga-explorer/images/skandamata.jpg", weapon: "Lotus flowers, rides a lion", significance: "The mother of Skanda (Kartikeya).", mantra: "ॐ देवी स्कन्दमातायै नमः॥", story: "As the mother of Lord Kartikeya (also known as Skanda), the commander of the gods' army, she is known as Skandamata. She is often depicted holding the infant Skanda in her lap. Worshipping her is believed to bless the devotee with the grace of worshipping Lord Skanda as well." },
        { id: 5, name: "Katyayani", hindiName: "कात्यायनी", image: "/navadurga-explorer/images/katyayani.jpg", weapon: "Sword and Lotus, rides a lion", significance: "The warrior goddess who destroyed Mahishasura.", mantra: "ॐ देवी कात्यायन्यै नमः॥", story: "She was born at the hermitage of Sage Katyayana, who was the first to worship her, hence she is called Katyayani. She is the fierce form of Durga who was created from the combined energies of the gods to annihilate the demon Mahishasura. She represents the divine anger against evil." },
        { id: 6, name: "Kaalratri", hindiName: "कालरात्रि", image: "/navadurga-explorer/images/kalaratri.jpg", weapon: "Vajra and Scimitar", significance: "The destroyer of darkness and ignorance.", mantra: "ॐ देवी कालरात्र्यै नमः॥", story: "This is the most ferocious form of Goddess Durga. Her appearance is dark and intimidating, but she is the most auspicious and protective form, destroying all fears, ghosts, and negative energies. She is the power of the dark night, bringing rest and peace, and also the power that destroys evil." },
        { id: 7, name: "Mahagauri", hindiName: "महागौरी", image: "/navadurga-explorer/images/Mahagauri.jpg", weapon: "Trishul and Damaru", significance: "Represents purity, serenity, and peace.", mantra: "ॐ देवी महागौर्यै नमः॥", story: "After her long penance as Brahmacharini, Parvati's body turned black. Lord Shiva bathed her with the holy water of the Ganges, and her body regained its fair complexion, becoming extremely beautiful. 'Gauri' means fair. She is the symbol of purity and can absolve all sins of her devotees." },
        { id: 8, name: "Siddhidatri", hindiName: "सिद्धिदात्री", image: "/navadurga-explorer/images/Siddhidatri.jpg", weapon: "Mace, Chakra, Lotus, Conch", significance: "The bestower of all supernatural powers (Siddhis).", mantra: "ॐ देवी सिद्धिदात्र्यै नमः॥", story: "In the beginning of the universe, Lord Shiva worshipped the formless Adi Parashakti. She appeared from the left half of Lord Shiva in the form of Siddhidatri. She bestows all eight types of siddhis (supernatural powers) upon her devotees. This form is worshipped by all gods, sages, and yogis to attain perfection." }
    ];
    const festivalData = { navratri: { title: "Navratri", description: "Navratri is a nine-night festival dedicated to the nine forms of Goddess Durga. Each day is associated with an incarnation of the goddess. It is a time of religious reflection and fasting, culminating in celebrations on the final day." }, "durga-puja": { title: "Durga Puja", description: "Durga Puja is an annual Hindu festival originating in the Indian subcontinent which reveres and pays homage to the Hindu goddess, Durga. It is particularly popular in West Bengal. The festival is celebrated with decorated pandals, scripture recitations, performance arts, and processions." }, dussehra: { title: "Dussehra (Vijayadashami)", description: "Dussehra, also known as Vijayadashami, is celebrated on the tenth day of Navratri. It marks the victory of Lord Rama over the demon king Ravana and also the victory of Goddess Durga over the demon Mahishasur. It symbolizes the victory of good over evil." } };
    
    // --- UPDATED QUIZ DATA ---
    const quizData = [
        { 
            question: "Which goddess is known as the 'Daughter of the Mountains'?\n(किस देवी को 'पहाड़ों की बेटी' के रूप में जाना जाता है?)", 
            options: ["ब्रह्मचारिणी (Brahmacharini)", "शैलपुत्री (Shailputri)", "चंद्रघंटा (Chandraghanta)", "महागौरी (Mahagauri)"], 
            answer: "शैलपुत्री (Shailputri)" 
        },
        { 
            question: "Which goddess is believed to have created the universe with her smile?\n(किस देवी को अपनी मुस्कान से ब्रह्मांड की रचना करने वाली माना जाता है?)", 
            options: ["सिद्धिदात्री (Siddhidatri)", "कूष्मांडा (Kushmanda)", "चंद्रघंटा (Chandraghanta)", "ब्रह्मचारिणी (Brahmacharini)"], 
            answer: "कूष्मांडा (Kushmanda)"
        },
        { 
            question: "What is the vehicle (vahana) of Maa Durga?\n(माँ दुर्गा का वाहन क्या है?)", 
            options: ["बैल (Bull)", "चूहा (Mouse)", "सिंह (Lion)", "मोर (Peacock)"], 
            answer: "सिंह (Lion)" 
        },
        { 
            question: "The festival of Navratri culminates on the 10th day, which is known as?\n(नवरात्रि का त्योहार 10वें दिन समाप्त होता है, जिसे किस नाम से जाना जाता है?)", 
            options: ["दिवाली (Diwali)", "होली (Holi)", "विजयादशमी (Vijayadashami)", "रक्षा बंधन (Raksha Bandhan)"], 
            answer: "विजयादशमी (Vijayadashami)"
        },
        { 
            question: "Which famous folk dance from Gujarat is performed during Navratri?\n(नवरात्रि के दौरान गुजरात का कौन सा प्रसिद्ध लोक नृत्य किया जाता है?)", 
            options: ["भांगड़ा (Bhangra)", "गरबा (Garba)", "भरतनाट्यम (Bharatanatyam)", "कथक (Kathak)"], 
            answer: "गरबा (Garba)" 
        },
        { 
            question: "Which form of Maa Durga is the most ferocious and is the destroyer of darkness?\n(माँ दुर्गा का कौन सा रूप सबसे भयंकर और अंधकार का नाश करने वाला है?)", 
            options: ["कात्यायनी (Katyayani)", "कालरात्रि (Kaalratri)", "महागौरी (Mahagauri)", "शैलपुत्री (Shailputri)"], 
            answer: "कालरात्रि (Kaalratri)" 
        },
        { 
            question: "The fifth day of Navratri is dedicated to which goddess?\n(नवरात्रि का पांचवा दिन किस देवी को समर्पित है?)", 
            options: ["स्कंदमाता (Skandamata)", "कात्यायनी (Katyayani)", "कालरात्रि (Kaalratri)", "कुष्मांडा (Kushmanda)"], 
            answer: "स्कंदमाता (Skandamata)" 
        },
        { 
            question: "Who is the consort of Goddess Siddhidatri, from whom she emerged?\n(सिद्धिदात्री देवी के पति कौन हैं, जिनसे वे प्रकट हुई थीं?)", 
            options: ["भगवान विष्णु (Lord Vishnu)", "भगवान ब्रह्मा (Lord Brahma)", "भगवान शिव (Lord Shiva)", "भगवान इंद्र (Lord Indra)"], 
            answer: "भगवान शिव (Lord Shiva)" 
        },
        { 
            question: "Navratri celebrates the victory of Goddess Durga over which demon?\n(नवरात्रि त्योहार किस राक्षस पर मां दुर्गा की विजय का प्रतीक है?)", 
            options: ["रावण (Ravana)", "हिरण्यकश्यप (Hiranyakashipu)", "महिषासुर (Mahishasura)", "कंस (Kansa)"], 
            answer: "महिषासुर (Mahishasura)" 
        }
    ];

    // --- BHAKTI SANGRAH DATA ---
    const bhaktiData = {
        durgaChalisa: {
            title: "श्री दुर्गा चालीसा",
            content: `
नमो नमो दुर्गे सुख करनी।
नमो नमो दुर्गे दुःख हरनी॥
निरंकार है ज्योति तुम्हारी।
तिहूँ लोक फैली उजियारी॥

शशि ललाट मुख महाविशाला।
नेत्र लाल भृकुटि विकराला॥
रूप मातु को अधिक सुहावे।
दरश करत जन अति सुख पावे॥

तुम संसार शक्ति लै कीना।
पालन हेतु अन्न धन दीना॥
अन्नपूर्णा हुई जग पाला।
तुम ही आदि सुन्दरी बाला॥

प्रलयकाल सब नाशन हारी।
तुम गौरी शिवशंकर प्यारी॥
शिव योगी तुम्हरे गुण गावें।
ब्रह्मा विष्णु तुम्हें नित ध्यावें॥

रूप सरस्वती को तुम धारा।
दे सुबुद्धि ऋषि मुनिन उबारा॥
धरयो रूप नरसिंह को अम्बा।
प्रगट भईं फाड़कर खम्बा॥

रक्षा करि प्रह्लाद बचायो।
हिरण्याक्ष को स्वर्ग पठायो॥
लक्ष्मी रूप धरो जग माहीं।
श्री नारायण अंग समाहीं॥

क्षीरसिन्धु में करत विलासा।
दयासिन्धु दीजै मन आसा॥
हिंगलाज में तुम्हीं भवानी।
महिमा अमित न जात बखानी॥

मातंगी अरु धूमावति माता।
भुवनेश्वरी बगला सुखदाता॥
श्री भैरव तारा जग तारिणी।
छिन्न भाल भव दुःख निवारिणी॥

केहरि वाहन सोह भवानी।
लांगुर वीर चलत अगवानी॥
कर में खप्पर खड्ग विराजै।
जाको देख काल डर भाजै॥

सोहै अस्त्र और त्रिशूला।
जाते उठत शत्रु हिय शूला॥
नगरकोट में तुम्हीं विराजत।
तिहुँलोक में डंका बाजत॥

शुम्भ निशुम्भ दानव तुम मारे।
रक्तबीज शंखन संहारे॥
महिषासुर नृप अति अभिमानी।
जेहि अघ भार मही अकुलानी॥

रूप कराल कालिका धारा।
सेन सहित तुम तिहि संहारा॥
परी गाढ़ सन्तन पर जब जब।
भई सहाय मातु तुम तब तब॥

अमरपुरी अरु बासव लोका।
तब महिमा सब रहें अशोका॥
ज्वाला में है ज्योति तुम्हारी।
तुम्हें सदा पूजें नरनारी॥

प्रेम भक्ति से जो यश गावें।
दुःख दारिद्र निकट नहिं आवें॥
ध्यावे तुम्हें जो नर मन लाई।
जन्ममरण ताकौ छुटि जाई॥

जोगी सुर मुनि कहत पुकारी।
योग न हो बिन शक्ति तुम्हारी॥
शंकर आचारज तप कीनो।
काम अरु क्रोध जीति सब लीनो॥

निशिदिन ध्यान धरो शंकर को।
काहु काल नहिं सुमिरो तुमको॥
शक्ति रूप का मरम न पायो।
शक्ति गई तब मन पछितायो॥

शरणागत हुई कीर्ति बखानी।
जय जय जय जगदम्ब भवानी॥
भई प्रसन्न आदि जगदम्बा।
दई शक्ति नहिं कीन विलम्बा॥

मोको मातु कष्ट अति घेरो।
तुम बिन कौन हरै दुःख मेरो॥
आशा तृष्णा निपट सतावें।
मोह मदादिक सब बिनशावें॥

शत्रु नाश कीजै महारानी।
सुमिरौं इकचित तुम्हें भवानी॥
करो कृपा हे मातु दयाला।
ऋद्धिसिद्धि दै करहु निहाला॥

जब लगि जिऊँ दया फल पाऊँ।
तुम्हरो यश मैं सदा सुनाऊँ॥
दुर्गा चालीसा जो कोई गावै।
सब सुख भोग परमपद पावै॥

देवीदास शरण निज जानी।
करहु कृपा जगदम्ब भवानी॥
`
        },
        shailputriAarti: {
            title: "मां शैलपुत्री की आरती",
            content: `
शैलपुत्री मां बैल असवार। करें देवता जय जयकार॥
शिव शंकर की प्रिय भवानी। तेरी महिमा किसी ने ना जानी॥

पार्वती तू उमा कहलावे। जो तुझे सिमरे सो सुख पावे॥
ऋद्धि-सिद्धि परवान करे तू। दया करे ऐसा वरदान करे तू॥

सोमवार को शिव संग प्यारी। आरती तेरी जिसने उतारी॥
उसकी सगरी आस पुजा दो। सगरे दुख तकलीफ मिला दो॥

घी का सुंदर दीप जला के। गोला गरी का भोग लगा के॥
श्रद्धा भाव से मंत्र गाएं। प्रेम सहित फिर शीश झुकाएं॥

जय गिरिराज किशोरी अंबे। शिव मुख चंद्र चकोरी अंबे॥
मनोकामना पूर्ण कर दो। भक्त सदा सुख संपत्ति भर दो॥
`
        },
        brahmachariniAarti: {
            title: "मां ब्रह्मचारिणी की आरती",
            content: `
जय अंबे ब्रह्माचारिणी माता। जय चतुरानन प्रिय सुख दाता॥
ब्रह्मा जी के मन में भातीं। तुम जगत की जीवन दाता॥

मैं पूजा विधि को नहीं जानू। कृपा करदो मां तुम महान॥
अपनी शरण में ले लो मुझको। शत शत नमन है तुमको मां॥

कमंडल तेरे कर में सोहे। भाए मां का रूप यह मोहे॥
तप कठिन तुमने किया था। शिव जी को पति रूप में पाया था॥

खुश होकर शिवजी आए थे। इच्छा का वरदान दिया था॥
मां ब्रह्मचारिणी सुनो सबकी। मेरे मन की भी यही है आस॥

मन लगाकर जो पूजा करता। उसको मिलती है मां कृपा॥
ब्रह्मा विष्णु सब तुमको पूजें। तेरे चरणों में सब सुख है मां॥
`
        },
        chandraghantaAarti: {
            title: "मां चंद्रघंटा की आरती",
            content: `
जय मां चंद्रघंटा सुख धाम। पूर्ण कीजो मेरे काम॥
चंद्र समान तू शीतल दाती। चंद्र तेज किरणों में समाती॥

क्रोध को शांत बनाने वाली। मीठे बोल सिखाने वाली॥
मन की मालक मन भाती हो। चंद्र घंटा तुम वरदाती हो॥

सुंदर भाव को लाने वाली। हर संकट मे बचाने वाली॥
हर बुधवार जो तुझे ध्याये। श्रद्धा सहित जो विनय सुनाए॥

मूर्ति चंद्र आकार बनाए। सन्मुख घी की ज्योत जलाए॥
शीश झुका कहे मन की बाता। पूर्ण आस करो जगदाता॥

कांची पुर स्थान तुम्हारा। करनाटिका में मान तुम्हारा॥
नाम तेरा रटू महारानी। भक्त की रक्षा करो भवानी॥
`
        },
        kushmandaAarti: {
            title: "मां कूष्मांडा की आरती",
            content: `
कूष्मांडा जय जग सुखदानी। मुझ पर दया करो महारानी॥
पिंगला ज्वालामुखी निराली। शाकंबरी मां भोली भाली॥

लाखों नाम निराले तेरे। भक्त कई मतवाले तेरे॥
भीमा पर्वत पर है डेरा। स्वीकारो प्रणाम ये मेरा॥

सबकी सुनती हो जगदंबे। सुख पहुंचती हो मां अंबे॥
तेरे दर्शन का मैं प्यासा। पूर्ण कर दो मेरी आशा॥

मां के मन में ममता भारी। क्यों ना सुनेगी अरज हमारी॥
तेरे दर पर किया है डेरा। दूर करो मां संकट मेरा॥

मेरे कारज पूरे कर दो। मेरे तो तुम भंडारे भर दो॥
तेरा दास तुझे ही ध्याए। भक्त तेरे दर शीश झुकाए॥
`
        },
        skandamataAarti: {
            title: "मां स्कंदमाता की आरती",
            content: `
जय तेरी हो स्कंद माता। पांचवा नाम तुम्हारा आता॥
सबके मन की जाननहारी। जगजननी सबकी महतारी॥

तेरी जोत जलाता रहूं मैं। हरदम तुझे ध्याता रहूं मैं॥
कई नामों से तुझे पुकारा। मुझे एक है तेरा सहारा॥

कहीं पहाड़ों पर है डेरा। कई शहरों में तेरा बसेरा॥
हर मंदिर में तेरे नजारे। गुण गाए तेरे भक्त प्यारे॥

भक्ति अपनी मुझे दिला दो। शक्ति मेरी बिगड़ी बना दो॥
इंद्र आदि देवता मिल सारे। करे पुकार तुम्हारे द्वारे॥

दुष्ट दत्य जब चढ़ कर आए। तू ही खंडा हाथ उठाए॥
दासों को सदा बचाने आई। भक्त की आस पुराने आई॥
`
        },
        katyayaniAarti: {
            title: "मां कात्यायनी की आरती",
            content: `
जय जय अंबे जय कात्यायनी। जय जगमाता जग की महारानी॥
बैजनाथ स्थान तुम्हारा। वहां वरदाती नाम पुकारा॥

कई नाम हैं कई धाम हैं। यह स्थान भी तो सुखधाम है॥
हर मंदिर में जोत तुम्हारी। कहीं योगेश्वरी महिमा न्यारी॥

हर जगह उत्सव होते रहते। हर मंदिर में भक्त हैं कहते॥
कात्यायनी रक्षक काया की। ग्रंथि काटे मोह माया की॥

झूठे मोह से छुड़ाने वाली। अपना नाम जपाने वाली॥
बृहस्पतिवार को पूजा करिए। ध्यान कात्यायनी का धरिए॥

हर संकट को दूर करेगी। भंडारे भरपूर करेगी॥
जो भी मां को भक्त पुकारे। कात्यायनी सब कष्ट निवारे॥
`
        },
        kaalratriAarti: {
            title: "मां कालरात्रि की आरती",
            content: `
कालरात्रि जय जय महाकाली। काल के मुंह से बचाने वाली॥
दुष्ट संघारक नाम तुम्हारा। महाचंडी तेरा अवतारा॥

पृथ्वी और आकाश के बीच। महाकाल है तेरी ही रीछ॥
खड्ग शस्त्र अपने हाथ में लीन्हे। दुष्टों का लहू चखती जिह्वा॥

कलकत्ता स्थान तुम्हारा। सब जगह देखूं तेरा नजारा॥
सभी देवता सब नर नारी। गावे स्तुति सभी तुम्हारी॥

रक्तदंता और अन्नपूर्णा। कृपा करे तो कोई भी दुःख ना॥
ना कोई चिंता रहे ना बीमारी। ना कोई गम ना संकट भारी॥

उस पर कभी कष्ट ना आवे। महाकाली मां जिसे बचावे॥
तू भी भक्त प्रेम से कह। कालरात्रि मां तेरी जय॥
`
        },
        mahagauriAarti: {
            title: "मां महागौरी की आरती",
            content: `
जय महागौरी जगत की माया। जय उमा भवानी जय महामाया॥
हरिद्वार कनखल के पासा। महागौरी तेरा वहां निवासा॥

चंद्रकला और ममता अंबे। जय शक्ति जय जय मां जगदंबे॥
भीमा देवी विमला माता। कौशिकी देवी जग विख्याता॥

हिमाचल के घर गौरी रूप तेरा। महाकाली दुर्गा है स्वरूप तेरा॥
सती ‘सत’ हवन कुंड में था जलाया। उसी धुएं ने रूप काली बनाया॥

बना धर्म सिंह जो सवारी में आया। तो शंकर ने त्रिशूल अपना दिखाया॥
तभी मां ने महागौरी नाम पाया। शरण आने वाले का संकट मिटाया॥

रविवार को तेरी पूजा जो करता। मां बिगड़ा हुआ काम उसका सुधरता॥
भक्त बोलो तो सोच तुम क्या रहे हो। महागौरी मां तेरी हरदम ही जय हो॥
`
        },
        siddhidatriAarti: {
            title: "मां सिद्धिदात्री की आरती",
            content: `
जय सिद्धिदात्री मां तू सिद्धि की दाता। तू भक्तों की रक्षक तू दासों की माता॥
तेरा नाम लेते ही मिलती है सिद्धि। तेरे नाम से मन की होती है शुद्धि॥

कठिन काम सिद्ध करती हो तुम। जभी हाथ सेवक के सिर धरती हो तुम॥
तेरी पूजा में तो ना कोई विधि है। तू जगदंबे दाती तू सर्वसिद्धि है॥

रविवार को तेरा सुमिरन करे जो। तेरी मूर्ति को ही मन में धरे जो॥
तू सब काज उसके करती है पूरे। कभी काम उसके रहे ना अधूरे॥

तुम्हारी दया और तुम्हारी यह माया। रखे जिसके सिर पर मैया अपनी छाया॥
सर्व सिद्धि दाती वो है भाग्यशाली। जो है तेरे दर का ही मां तू है सवाली॥
`
        },
        navratriKatha: {
            title: "नवरात्रि व्रत कथा",
            content: `
प्राचीन काल में, राजा दक्ष ने एक विशाल यज्ञ का आयोजन किया। उन्होंने सभी देवी-देवताओं को आमंत्रित किया, लेकिन अपने ही पुत्री सती और उनके पति भगवान शिव को निमंत्रण नहीं भेजा क्योंकि वे शिव को अपने बराबर का नहीं समझते थे।

जब माता सती को इस यज्ञ के बारे में पता चला, तो वे बिना बुलाए ही अपने पिता के घर चली गईं। वहां, उन्होंने देखा कि उनके पति भगवान शिव का अपमान किया जा रहा है। अपने पति का अपमान सहन न कर पाने के कारण, उन्होंने यज्ञ की अग्नि में कूदकर अपने प्राणों की आहुति दे दी।

जब भगवान शिव को यह समाचार मिला, तो वे अत्यंत क्रोधित हो गए और उन्होंने वीरभद्र को भेजकर दक्ष का यज्ञ विध्वंस कर दिया। पत्नी के वियोग में शिवजी घोर तपस्या में लीन हो गए।

बाद में, माता सती ने पर्वतराज हिमालय के घर पार्वती के रूप में जन्म लिया। उन्होंने भगवान शिव को पुनः पति के रूप में पाने के लिए कठोर तपस्या की। उनकी तपस्या से प्रसन्न होकर, देवताओं ने उनकी सहायता की और अंततः भगवान शिव ने पार्वती जी को अपनी पत्नी के रूप में स्वीकार किया।

माता पार्वती के नौ विभिन्न रूपों की पूजा नवरात्रि के नौ दिनों में की जाती है। यह कथा हमें सिखाती है कि भक्ति और तपस्या में अपार शक्ति होती है।
`
        }
    };
    
    // --- CORE APP INITIALIZATION ---
    feather.replace(); 
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    pageSections.forEach(section => observer.observe(section));
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) scrollToTopBtn.classList.remove('opacity-0');
        else scrollToTopBtn.classList.add('opacity-0');
    });
    scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeInSections.forEach(section => sectionObserver.observe(section));

    // --- NAVADURGA FORMS LOGIC ---
    const navadurgaGrid = document.getElementById('navadurga-grid');
    navadurgaData.forEach(durga => {
        const card = document.createElement('div');
        card.className = 'group rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 card-glow';
        card.innerHTML = `
            <div class="relative border-4" style="border-color: var(--border-color); background-color: var(--bg-primary);">
                <img src="${durga.image}" alt="${durga.name}" class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                    <h3 class="text-3xl font-display text-white">${durga.hindiName}</h3>
                    <p class="text-white/80 font-semibold">${durga.name}</p>
                </div>
                <div class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
                    <button class="know-more-btn bg-white/90 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg text-lg w-full" style="color: var(--text-primary);">देवी के बारे में जानें</button>
                    <button class="show-mantra-btn mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg text-lg w-full border-2 border-amber-400" style="background-color: var(--accent-secondary); border-color: var(--accent-primary);">पवित्र मंत्र देखें</button>
                </div>
            </div>
        `;
        card.querySelector('.know-more-btn').addEventListener('click', () => openModal(durga.id));
        card.querySelector('.show-mantra-btn').addEventListener('click', () => openMantraModal(durga.id));
        navadurgaGrid.appendChild(card);
    });

    // --- ALL MODAL LOGIC ---
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const mantraModal = document.getElementById('mantra-modal');
    const mantraModalContent = document.getElementById('mantra-modal-content');
    const mantraModalClose = document.getElementById('mantra-modal-close');
    const contentModal = document.getElementById('content-modal');
    const contentModalContent = document.getElementById('content-modal-content');
    const contentModalClose = document.getElementById('content-modal-close');
    
    function openModal(durgaId) {
        const durga = navadurgaData.find(d => d.id === durgaId);
        document.getElementById('modal-title').innerText = durga.hindiName;
        document.getElementById('modal-image').src = durga.image;
        document.getElementById('modal-weapon').innerText = durga.weapon;
        document.getElementById('modal-significance').innerText = durga.significance;
        document.getElementById('modal-story').innerText = durga.story;
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
        feather.replace();
    }
    function closeModal() {
        modalContent.classList.add('scale-95');
        modal.classList.add('opacity-0', 'pointer-events-none');
    }
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    function openMantraModal(durgaId) {
        const durga = navadurgaData.find(d => d.id === durgaId);
        document.getElementById('mantra-modal-title').innerText = durga.hindiName;
        document.getElementById('mantra-modal-text').innerText = durga.mantra;
        mantraModal.classList.remove('opacity-0', 'pointer-events-none');
        mantraModalContent.classList.remove('scale-95');
    }
    function closeMantraModal() {
        mantraModalContent.classList.add('scale-95');
        mantraModal.classList.add('opacity-0', 'pointer-events-none');
    }
    mantraModalClose.addEventListener('click', closeMantraModal);
    mantraModal.addEventListener('click', (e) => { if (e.target === mantraModal) closeMantraModal(); });

    function openContentModal(contentKey) {
        const data = bhaktiData[contentKey];
        if (!data) return;
        document.getElementById('content-modal-title').innerText = data.title;
        document.getElementById('content-modal-body').innerText = data.content;
        document.getElementById('content-modal-body').scrollTop = 0;
        contentModal.classList.remove('opacity-0', 'pointer-events-none');
        contentModalContent.classList.remove('scale-95');
        feather.replace();
    }
    function closeContentModal() {
        contentModalContent.classList.add('scale-95');
        contentModal.classList.add('opacity-0', 'pointer-events-none');
    }
    contentModalClose.addEventListener('click', closeContentModal);
    contentModal.addEventListener('click', (e) => { if (e.target === contentModal) closeContentModal(); });

    // --- BHAKTI SANGRAH SECTION LOGIC ---
    const bhaktiGrid = document.getElementById('bhakti-collection-grid');
    const bhaktiItems = [
        { label: 'श्री दुर्गा चालीसा', key: 'durgaChalisa' },
        { label: 'मां शैलपुत्री की आरती', key: 'shailputriAarti' },
        { label: 'मां ब्रह्मचारिणी की आरती', key: 'brahmachariniAarti' },
        { label: 'मां चंद्रघंटा की आरती', key: 'chandraghantaAarti' },
        { label: 'मां कूष्मांडा की आरती', key: 'kushmandaAarti' },
        { label: 'मां स्कंदमाता की आरती', key: 'skandamataAarti' },
        { label: 'मां कात्यायनी की आरती', key: 'katyayaniAarti' },
        { label: 'मां कालरात्रि की आरती', key: 'kaalratriAarti' },
        { label: 'मां महागौरी की आरती', key: 'mahagauriAarti' },
        { label: 'मां सिद्धिदात्री की आरती', key: 'siddhidatriAarti' },
        { label: 'नवरात्रि व्रत कथा', key: 'navratriKatha' }
    ];

    bhaktiItems.forEach(item => {
        const button = document.createElement('button');
        button.className = "glowing-btn w-full text-center p-4 border-2 rounded-lg hover:border-amber-400 hover:bg-amber-50/50 transition font-semibold text-lg";
        button.style.borderColor = 'var(--border-color)';
        button.style.color = 'var(--text-primary)';
        button.textContent = item.label;
        button.dataset.key = item.key;
        button.addEventListener('click', () => openContentModal(item.key));
        bhaktiGrid.appendChild(button);
    });
    
    // --- FESTIVALS SECTION LOGIC ---
    const festivalTabs = document.querySelectorAll('.festival-tab');
    const festivalContent = document.getElementById('festival-content');
    function updateFestivalContent(tabName) {
        const data = festivalData[tabName];
        festivalContent.innerHTML = `<h3 class="text-3xl font-display mb-4" style="color: var(--text-primary);">${data.title}</h3><p class="leading-relaxed text-lg" style="color: var(--text-secondary);">${data.description}</p>`;
        festivalTabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabName;
            tab.style.color = isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)';
            tab.style.borderBottom = isActive ? '3px solid var(--accent-secondary)' : '3px solid transparent';
        });
    }
    festivalTabs.forEach(tab => tab.addEventListener('click', () => updateFestivalContent(tab.dataset.tab)));
    updateFestivalContent('navratri');
    
    // --- REVISED QUIZ LOGIC ---
    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0; 
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        const question = quizData[currentQuestionIndex];
        // Split question into English and Hindi parts
        const [englishQ, hindiQ] = question.question.split('\n');

        const optionsHtml = question.options.map(option => 
            `<button class="option-btn block w-full text-left p-4 my-2 border-2 rounded-lg hover:border-amber-400 transition" style="border-color: var(--border-color); background-color: #fff8f0;">${option}</button>`
        ).join('');
        
        quizContainer.innerHTML = `
            <div id="feedback-overlay" class="absolute inset-0 z-10 opacity-0 pointer-events-none transition-opacity duration-300"></div>
            <div id="quiz-content">
                <div class="mb-6">
                    <p style="color: var(--text-secondary);">प्रश्न ${currentQuestionIndex + 1} / ${quizData.length}</p>
                    <h3 class="text-2xl font-semibold mt-2">
                        ${englishQ}
                        <span class="block text-xl font-normal" style="color: var(--text-secondary);">${hindiQ}</span>
                    </h3>
                </div>
                <div>${optionsHtml}</div>
            </div>`;
        
        document.querySelectorAll('.option-btn').forEach(button => button.addEventListener('click', handleAnswer));
    }

    function handleAnswer(e) {
        const selectedOption = e.target.innerText;
        const question = quizData[currentQuestionIndex];
        const feedbackOverlay = quizContainer.querySelector('#feedback-overlay');
        const quizContent = quizContainer.querySelector('#quiz-content');

        // Disable all buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            // Highlight the correct answer in green
            if (btn.innerText === question.answer) {
                btn.style.borderColor = '#22c55e'; // green-500
                btn.style.backgroundColor = '#f0fdf4'; // green-50
            }
        });

        if (selectedOption === question.answer) {
            score++;
            // Apply flower shower effect
            feedbackOverlay.className = 'absolute inset-0 z-10 pointer-events-none flower-shower-effect';
        } else {
            // Highlight the wrong answer in red
            e.target.style.borderColor = '#ef4444'; // red-500
            e.target.style.backgroundColor = '#fef2f2'; // red-50
            
            // Apply red flash effect
            feedbackOverlay.className = 'absolute inset-0 z-10 pointer-events-none red-flash-effect';
        }

        // Wait for the effect to be visible, then move to the next question
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 2500); // Increased delay for effects
    }

    function showResults() {
        quizContainer.innerHTML = `
            <h3 class="text-3xl font-display text-center">प्रश्नोत्तरी पूर्ण!</h3>
            <p class="text-center text-xl my-6" style="color: var(--text-secondary);">
                आपका स्कोर: <span class="font-bold text-3xl" style="color: var(--text-primary);">${score}/${quizData.length}</span>
            </p>
            <button id="restart-btn" class="glowing-btn w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg" style="background-color: var(--accent-secondary);">फिर से प्रयास करें</button>`;
        document.getElementById('restart-btn').addEventListener('click', startQuiz);
    }

    startQuiz();
});
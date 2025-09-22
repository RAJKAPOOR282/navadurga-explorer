const forms = {
    shailaputri: { name: "Shailaputri", img: "images/shailaputri.jpg", desc: "Shailaputri represents the daughter of the mountains. She symbolizes the power of nature and courage.", audio: "audio/mantra1.mp3" },
    brahmacharini: { name: "Brahmacharini", img: "images/brahmacharini.jpg", desc: "Brahmacharini represents penance and devotion. She teaches patience and discipline.", audio: "audio/mantra2.mp3" },
    chandraghanta: { name: "Chandraghanta", img: "images/chandraghanta.jpg", desc: "Chandraghanta is the goddess of courage and bravery, symbolizing serenity and fearlessness.", audio: "audio/mantra3.mp3" },
    kushmanda: { name: "Kushmanda", img: "images/kushmanda.jpg", desc: "Kushmanda created the universe with her divine smile and represents energy and creation.", audio: "audio/mantra4.mp3" },
    skandamata: { name: "Skandamata", img: "images/skandamata.jpg", desc: "Skandamata is the mother of Lord Skanda and symbolizes strength and motherhood.", audio: "audio/mantra5.mp3" },
    katyayani: { name: "Katyayani", img: "images/katyayani.jpg", desc: "Katyayani is the warrior goddess who defeats evil and protects righteousness.", audio: "audio/mantra6.mp3" },
    kalaratri: { name: "Kalaratri", img: "images/kalaratri.jpg", desc: "Kalaratri destroys darkness and ignorance, and brings fearlessness to her devotees.", audio: "audio/mantra7.mp3" },
    mahagauri: { name: "Mahagauri", img: "images/mahagauri.jpg", desc: "Mahagauri represents purity and calmness, washing away all sins and suffering.", audio: "audio/mantra8.mp3" },
    siddhidatri: { name: "Siddhidatri", img: "images/siddhidatri.jpg", desc: "Siddhidatri grants all types of spiritual and material perfection to her devotees.", audio: "audio/mantra9.mp3" }
};

function openModal(formKey) {
    const form = forms[formKey];
    document.getElementById('form-name').innerText = form.name;
    document.getElementById('form-img').src = form.img;
    document.getElementById('form-desc').innerText = form.desc;
    document.getElementById('form-audio').src = form.audio;
    document.getElementById('modal').style.display = "block";
}

function closeModal() { document.getElementById('modal').style.display = "none"; }

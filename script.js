document.addEventListener('DOMContentLoaded', function() {
    const svgObject = document.getElementById('uzbekistan-map');
    svgObject.addEventListener('load', function() {
        const svgDoc = svgObject.contentDocument;
        const regions = svgDoc.querySelectorAll('path'); 
        const infoBox = document.getElementById('info');
        const infoImg = document.getElementById('info-img');
        const infoTitle = document.getElementById('info-title');
        const infoDescription = document.getElementById('info-description');

        const regionData = {
            "Qoraqalpog'iston Respublikasi": {
                title: "Qoraqalpog'iston Respublikasi",
                description: "Asosiy shahri: Nukus.",
                imgSrc: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/11b8dd32b31ccefec42ec448b2719ca3.jpg"
            },
            "Farg'ona viloyati": {
                title: "Farg'ona viloyati",
                description: "Fargʻona viloyati Oʻzbekistonning qadimgi madaniyat oʻchoqlaridan biri. ",
                imgSrc: "https://fastly.4sqi.net/img/general/600x600/32489097_YCA7iPs2heoTaErKun41LIlWC8RA8uS9ryGtDDNdORY.jpg"
            },
            "Xorazm viloyati": {
                title: "Xorazm viloyati",
                description: "Asosiy shahri: Urganch.",
                imgSrc: "https://storage.kun.uz/source/1/b7Bdi3qiv7HVqJdjhvq9hTfT2oPnmmHD.jpg"
            },
            "Toshkent viloyati": {
                title: "Toshkent viloyati",
                description: "Toshkent viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://www.shutterstock.com/image-photo/aerial-shot-tashkent-tv-tower-260nw-2346840877.jpg"
            }, 
             "Namangan viloyati": {
                title: "Namangan viloyati",
                description: "Viloyat qishloq xoʻjaligining asosiy tarmoqlari: Donchilik, paxtachilik, sabzavotchilik, bogʻdorchilik va uzumchilik,",
                imgSrc: "https://t4.ftcdn.net/jpg/04/32/84/37/360_F_432843749_rlAT7QzpwjY9Ze3YHB2R4GXF3fLX48Am.jpg"
            },
            "Andijon viloyati": {
                title: "Andijon viloyati",
                description: "Andijon viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/16/f3/f9/03/andijan-is-a-city-located.jpg"
            }, 
            "Sirdaryo viloyati": {
                title: "Sirdaryo viloyati",
                description: "Sirdaryo viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://www.gazeta.uz/media/img/2019/04/cn21ec15544747992594_b.jpg"
            }, 
            "Jizzax viloyati": {
                title: "Jizzax viloyati",
                description: "Jizzax viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://www.gazeta.uz/media/img/2024/04/jlDG6817126676192492_l.jpg"
            }, 
            "Samarqand viloyati": {
                title: "Samarqand viloyati",
                description: "Samarqand viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://taf-img.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/12/27020821/samarqand.jpg"
            }, 
            "Qashqadaryo viloyati": {
                title: "Qashqadaryo viloyati",
                description: "Qashqadaryo viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qashqadaryo.jpg/320px-Qashqadaryo.jpg"
            }, 
            "Termiz viloyati": {
                title: "Termiz viloyati",
                description: "Termiz viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnahqLFru0XyXnNd0VyJpwVmYHgHwYc2LyWw&s"
            }, 
            "Qoraqalpog'iston Respublikasi": {
                title: "Qoraqalpog'iston Respublikasi",
                description: "Qoraqalpog'iston Respublikasi — Oʻzbekiston Respublikasi tarkibida.",
                imgSrc: "https://www.gazeta.uz/media/img/2022/07/bZzuG916569453502950_l.jpg"
            },
            "Navoiy viloyati": {
                title: "Navoiy viloyati",
                description: "Navoiy viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://my.gov.uz/uploads/last_news/387e036a-57ca-9b2d-714d-f8d5f77754d0.jpg"
            },
            "Xorazm viloyati": {
                title: "Xorazm viloyati",
                description: "Xorazm viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://agros.uz/media/images/2022/02/14/832__85_76249165s.jpg"
            },
            "Buxoro viloyati": {
                title: "Buxoro viloyati",
                description: "Buxoro viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat.",
                imgSrc: "https://static.review.uz/crop/2/2/1400__100_228138716.jpg?v=1675746052"
            },
        };

        regions.forEach(region => {
            const regionName = region.getAttribute('data-name');
            
            region.addEventListener('mouseover', function(event) {
                const data = regionData[regionName] || { title: "Ma'lumot mavjud emas", description: "", imgSrc: "" };
                infoTitle.textContent = data.title;
                infoDescription.textContent = data.description;
                infoImg.src = data.imgSrc;
                infoImg.style.display = data.imgSrc ? "block" : "none";

                infoBox.style.display = "block";
                infoBox.style.top = event.pageY + "px";
                infoBox.style.left = event.pageX + "px";

                
                region.style.fill = '#3498db';
                region.style.transform = 'scale(1.05)';
                region.style.transition = 'transform 0.3s ease, fill 0.3s ease';
            });

            region.addEventListener('mousemove', function(event) {
                infoBox.style.top = event.pageY + 10 + "px";
                infoBox.style.left = event.pageX + 10 + "px";
            });

            region.addEventListener('mouseout', function() {
                infoBox.style.display = "none";
                region.style.fill = '';
                region.style.transform = '';
            });
        });
    });
});

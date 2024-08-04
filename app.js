  // Tạo một mảng chứa thông tin
  const dataa = [
    { name: "Fate/Zero", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png" },
    { name: "Hibike! Euphonium", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg" },
    // Thêm các phần tử khác vào mảng
    { name: "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg" },
    { name: "Shikanoko Nokonoko Koshitantan", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg" }, 
    { name: "ATRI: My Dear Moments", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154963-Ju6Ey3P5YHs2.jpg" }, 
    { name: "Kimetsu no Yaiba: Hashira Geiko-hen", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png" }, 
    { name: "Make Heroine ga Oosugiru!", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171457-Z8tZRk7LhcZk.jpg" }, 
];

// Hiển thị thông tin từ mảng lên giao diện
function displayData() {
    const resultDiv = document.getElementById("resultt");
    resultDiv.innerHTML = ""; // Xóa nội dung cũ

    dataa.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
        `;
        resultDiv.appendChild(itemDiv);
    });
}

// // Khi nhập từ khóa vào thanh tìm kiếm, gọi hàm hiển thị dữ liệu
// document.getElementById("searchButton").addEventListener("click", function() {
//     const keyword = document.getElementById("searchInput").value;
//     if (keyword === "danhtinh") {
//         displayData();
//     }
//     else {
//         // Xóa nội dung trên trang web
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = "";
//     }
// });

// Khi nhập từ khóa vào thanh tìm kiếm và nhấn phím "Enter"
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const keyword = document.getElementById("searchInput").value;
        if (keyword === "anime") {
            displayData();
             
             //xóa từ khóa anime trong input
             document.getElementById("searchInput").value = "";
        } else {
            // Xóa nội dung trên trang web
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
        }
    }
});
//xóa các thứ được tạo ra bởi từ khóa anime bên trên bằng key clear
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const keyword = document.getElementById("searchInput").value;
        if (keyword === "clear") {
            const resultDiv = document.getElementById("resultt");
            resultDiv.innerHTML = "";
            // Xóa giá trị trong input
            document.getElementById("searchInput").value = "";
        } else {
            // // Xóa nội dung trên trang web
            // const resultDiv = document.getElementById("result");
            // resultDiv.innerHTML = "";
           
        }
      
    }
});




document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const keyword = document.getElementById("searchInput").value;
        if (keyword === "exit") {
            // Đóng trang web
            window.close();
            document.getElementById("searchInput").value = "";
        } else {
            // Xóa nội dung trên trang web
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
        }
    }
});





























 // JavaScript của bạn
 let data = {
               
               "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/ep1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/subtitle/srt/ep1/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Tokidoki%20Bosotto%20Russia-go%20de%20Dereru%20Tonari%20no%20Alya-san%20-%2001%20(480p)%20%5BCFDF5DE1%5D.srt",
                   text3:"Tập 1 - Alya giấu cảm xúc của mình bằng tiếng Nga",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg"
               },
               // Thêm các từ khóa và văn bản tương ứng khác ở đây
               "Hibike! Euphonium ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap1/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap1/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20-%2001%20%5BBDRip%201080p%20AVC%5D%5BFLAC%5D.srt",
                   text3:"Tập 1",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
                 "Hibike! Euphonium ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/ep2/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/ep2/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20%5B02%5D%5BHi10p_1080p%5D%5Bx264_flac%5D.srt",
                   text3:"Tập 2 - Mong được giúp đỡ, Euphonium",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
               "Hibike! Euphonium ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap3/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap3/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20-%2003%20%5BBDRip%201080p%20AVC%5D%5BFLAC%5D.srt",
                   text3:"Tập 3 - Lần hòa tấu đầu tiên.",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
               "Fate/Zero ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/epp1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/epp1/E1%20-%20Tri%E1%BB%87u%20h%E1%BB%93i%20Anh%20Linh%20%5B367568%5D.vi.srt",
                   text3:"Tập 1 - Triệu Hóa Anh Linh",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep2/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep2/E2%20-%20S%E1%BB%B1%20kh%E1%BB%9Fi%20%C4%91%E1%BA%A7u%20c%E1%BB%A7a%20cu%E1%BB%99c%20chi%E1%BA%BFn%20gi%E1%BA%A3%20d%E1%BB%91i%20%5B367569%5D.vi.srt",
                   text3:"Tập 2 - Ngụy Đoan",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
              
               "Shikanoko Nokonoko Koshitantan ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep1/subtitle/ass/ep1/%5BIoroid%5D%20Shikanoko%20Nokonoko%20Koshitantan%20-%2001%20%5BABEMA%20WEB-DL%201080p%20AVC%20AAC%5D.ass",
                   text3:"Tập 1",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg"
               },
               "dir /d": {
                   text3:"/ Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san / \n / Hibike! Euphonium / \n / Fate/Zero / \n / Shikanoko Nokonoko Koshitantan /",
               },
               
                "Fate/Zero ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep3/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep3/E3%20-%20V%C3%B9ng%20%C4%91%E1%BA%A5t%20Fuyuki%20%5B367570%5D.vi.srt",
                   text3:"Tập 3 - Lãnh Địa Fuyuki",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep4": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep4/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep4/E4%20-%20L%C6%B0%E1%BB%A1i%20g%C6%B0%C6%A1m%20c%E1%BB%A7a%20ng%E1%BB%8Dn%20Ma%20Th%C6%B0%C6%A1ng%20%5B367571%5D.vi.srt",
                   text3:"Tập 4 - Ma Thương",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
                "Shikanoko Nokonoko Koshitantan ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep2/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep2/subtitle/ass/%5BIoroid%5D%20Shikanoko%20Nokonoko%20Koshitantan%20-%2002%20%5BABEMA%20WEB-DL%201080p%20AVC%20AAC%5D.ass",
                    text3:"Tập 2",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg"
               },
                "Shikanoko Nokonoko Koshitantan ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/main/epp3/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/main/epp3/%5BSubsPlease%5D%20Shikanoko%20Nokonoko%20Koshitantan%20-%2003%20(480p)%20%5B6D38220F%5D.ass",
                    text3:"Tập 3",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg"
               },
              
                "Shikanoko Nokonoko Koshitantan ep4": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/ShikanokoNokonokoKoshitantanEP4/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/ShikanokoNokonokoKoshitantanEP4/%5BIoroid%5D%20Shikanoko%20Nokonoko%20Koshitantan%20-%2004%20%5BABEMA%20WEB-DL%201080p%20AVC%20AAC%5D.ass",
                    text3:"Tập 4",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg"
               },
              
               
                "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/ep2/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/subtitle/ass/ep2/%5BSubsPlease%5D%20Tokidoki%20Bosotto%20Russia-go%20de%20Dereru%20Tonari%20no%20Alya-san%20-%2002%20(480p)%20%5B731C70E4%5D.ass",
                   text3:"Tập 2 - Bạn thuở nhỏ là gì?",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg"
               },
               "ATRI: My Dear Moments ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/ATRI-My-Dear-Moments/main/ep1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/ATRI-My-Dear-Moments/main/ep1/E1%20-%20%C4%90%E1%BA%BFn%20C%C3%A1i%20N%C3%B4i%20C%E1%BB%A7a%20Bi%E1%BB%83n%20%5B13262697%5D.vi.srt",
                   text3:"Tập 1 - Đến Cái Nôi Của Biển",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154963-Ju6Ey3P5YHs2.jpg"
               },
               "ATRI: My Dear Moments ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/ATRIMyDearMomentsEP2/output.m3u8",
                   text2: " ",
                   text3:"Tập 2 - Khung cảnh ấp áp cho hai người",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154963-Ju6Ey3P5YHs2.jpg"
               },
               "ATRI: My Dear Moments ep3 null": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/ATRIMyDearMomentsEP2/output.m3u8",
                   text2: " ",
                   text3:"Tập 3 -Sát thủ nhải nhép và trường học",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154963-Ju6Ey3P5YHs2.jpg"
               },

               "Fate/Zero ep5": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep5/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep5/E5%20-%20Ti%E1%BA%BFng%20g%E1%BA%A7m%20c%E1%BB%A7a%20M%C3%A3nh%20Th%C3%BA%20%5B367572%5D.vi.srt",
                   text3:"Tập 5 - Tiếng gầm của Mãnh Thú",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               
               "Fate/Zero ep6": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/eep6/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/eep6/E6%20-%20%C4%90%C3%AAm%20c%E1%BB%A7a%20m%C6%B0u%20k%E1%BA%BF%20%5B367573%5D.vi.srt",
                   text3:"Tập 6 - Đêm của mưu kế",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               
               "Fate/Zero ep8": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/main/fzep8/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/main/fzep8/E8%20-%20Th%E1%BB%A3%20s%C4%83n%20Ma%20Thu%E1%BA%ADt%20S%C6%B0%20%5B367575%5D.vi.srt",
                   text3:"Tập 8 - Thợ săn Ma Thuật Sư",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep9": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP9/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP9/E9%20-%20Master%20v%C3%A0%20Servant%20%5B367576%5D.vi.srt",
                   text3:"Tập 9 - Master và Servant",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep10": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP10/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP10/E10%20-%20Cu%E1%BB%99c%20phi%C3%AAu%20l%C6%B0u%20c%E1%BB%A7a%20Rin%20%5B367577%5D.vi.srt",
                   text3:"Tập 10 - Cuộc phiêu lưu của Rin",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep11": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP11/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP11/E11%20-%20Cu%E1%BB%99c%20%C4%91%E1%BB%91i%20tho%E1%BA%A1i%20v%E1%BB%9Bi%20Ch%C3%A9n%20Th%C3%A1nh%20%5B367578%5D.vi.srt",
                   text3:"Tập 11 - Cuộc đối thoại với Chén Thánh",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep12": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP12/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP12/E12%20-%20L%E1%BB%9Di%20m%E1%BB%9Di%20c%E1%BB%A7a%20Ch%C3%A9n%20Th%C3%A1nh%20%5B367579%5D.vi.srt",
                   text3:"Tập 12 - Lời mời của Chén Thánh",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep13": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP13/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/fatezeroEP13/E13%20-%20B%E1%BB%AFa%20ti%E1%BB%87c%20r%C6%B0%E1%BB%A3u%20c%E1%BB%A7a%20s%E1%BB%B1%20c%E1%BA%A5m%20%C4%91o%C3%A1n%20%5B367580%5D.vi.srt",
                   text3:"Tập 13 - Bữa tiệc rượu của sự cấm đoán",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },




               "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/ep3/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/ep3/%5BSubsPlease%5D%20Tokidoki%20Bosotto%20Russia-go%20de%20Dereru%20Tonari%20no%20Alya-san%20-%2003%20(480p)%20%5B3ED6DFF7%5D.ass",
                   text3:"Tập 3 - ",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg"
               },
               "Fate/Zero ep7": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/ep7/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/ffff/main/ep7/E7%20-%20Khu%20r%E1%BB%ABng%20huy%E1%BB%81n%20b%C3%AD%20%5B367574%5D.vi.srt",
                   text3:"Tập 7 - Khu rừng huyền bí",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
             
               "Kimetsu no Yaiba: Hashira Geiko-hen ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/fsfafafewwkjawekfj/main/ep1/output.m3u8",
                   text2: "null",
                   text3:"Tập 1 - Vì tâm nguyện tiêu diệt Kibutsuji Muzan",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png"
               },
               "Make Heroine ga Oosugiru! ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2001%20(480p)%20%5BFF6DDF71%5D.ass",
                   text3:"Tập 1 - Người bạn thời thơ ấu chuyên nghiệp Yanami Anna Phong cách thua cuộc",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171457-Z8tZRk7LhcZk.jpg"
               },
               "Make Heroine ga Oosugiru! ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP2/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP2/%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2002%20(480p)%20%5B71BB81AC%5D.ass",
                   text3:"Tập 2 - Sự thất bại đã hứa hẹn dành cho bạn",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171457-Z8tZRk7LhcZk.jpg"
               },
               "Make Heroine ga Oosugiru! ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP3/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP3/%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2003%20(480p)%20%5BA184D16C%5D.ass",
                   text3:"Tập 3 - Thua trận trước khi được chiến đấu",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171457-Z8tZRk7LhcZk.jpg"
               },
               " ": {
                   text: "",
                   text2: "",
                   text3:"",
                   image: ""
               },
               "null": {
                   text: "null",
                   text2: "null",
                   text3:"",
                   image: ""
               },
             

               
               "`": {
                   text: "",
                   text2: "",
                   image: ""
               },
           };

           function displayTextAndImage(keyword) {
               let dataForKeyword = data[keyword];
               let resultDiv = document.getElementById('result');

            //    // Xóa kết quả tìm kiếm cũ
            //    resultDiv.innerHTML = '';

               if (dataForKeyword) {
                   // let p = document.createElement('p');
                   // p.textContent = dataForKeyword.text;
                   // resultDiv.appendChild(p);
                   
                   // let a = document.createElement('a');
                   // a.textContent = dataForKeyword.text2;
                   // resultDiv.appendChild(a);
                   // Lấy giá trị từ các trường văn bản
                   
                   

                    let a = document.createElement('a');
                   a.textContent = dataForKeyword.text3;
                   resultDiv.appendChild(a);

                   let text1 = dataForKeyword.text;
                   let text2 = dataForKeyword.text2;

                   let img = document.createElement('img');
                   img.src = dataForKeyword.image;
                   resultDiv.appendChild(img);

                   // Thêm nút sao chép văn bản
                   let copyTextButton = document.createElement('button')
                   // document.getElementById(copyTextButton)
                       copyTextButton.textContent = 'Sao chép video';
                   copyTextButton.addEventListener('click', function() {
                       navigator.clipboard.writeText(text1);
                   });
                   resultDiv.appendChild(copyTextButton);
                           
       
                   // const loadingElement = document.getElementById('copyTextButton');
                   // loadingElement.style.display = 'block';



                   let copyImageButton = document.createElement('button'); 
                   // document.getElementById(copyImageButton)
                   copyImageButton.textContent = 'Sao chép subtitle';
                   copyImageButton.addEventListener('click', function() {
                   navigator.clipboard.writeText(text2);
   });
                   resultDiv.appendChild(copyImageButton);

                   // const text2Element = document.getElementById('copyImageButton');
                   // text2Element.style.display = 'block';




               }
             
           }
   
           document.getElementById('searchButton').addEventListener('click', function() {
               let keyword = document.getElementById('searchInput').value;
               displayTextAndImage(keyword);
           });
           

           document.getElementById('searchInput').addEventListener('keyup', function(event) {
       if (event.key === 'Enter') {
           // Thực hiện tìm kiếm ở đây
           let keyword = document.getElementById('searchInput').value;
           displayTextAndImage(keyword);

       }
   });





















const  Alice = {
    Name: 'Alice',
    Age:'1 month',
    Gender:'Female',
    Birthday:'July 10',
    Code:'HTML + CSS',
    ProgrammingLanguage:'Javascript',
    Size:'90,050 bytes',


    Search(){
        console.log(this)
    }
}
console.log(Alice.Search())



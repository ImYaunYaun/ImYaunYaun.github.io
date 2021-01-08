$(document).on('ready', function() {
    $(".variable").slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });




});

function MenuClick(myObj) {
    myObj.classList.toggle("open");
    mynav.classList.toggle("navopen");
}


$(document).ready(function() {
    $(".ScrollTOP").on('click', function() {
        // console.log('click');
        //     $('html,body').scrollTop(0);
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    $("body").on('scroll', function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 300) {
            $('.ScrollTOP').fadeIn("fast");
        } else {
            $('.ScrollTOP').stop().fadeOut("fast");
        }
    });
    var stop = 0;
    $("body").scroll(function() {
        var $BodyHeight = $(document).height();
        var $ViewportHeight = $(window).height();
        $ScrollTop = $(this).scrollTop();

        if ($BodyHeight == ($ViewportHeight + $ScrollTop) && stop <= 1) {
            data = `<div class="zoom">
            <div class="SquareCard">
                <img src="style/img/sdUhpDhm6nJq7DefhhCo-800x1143.jpg" alt="" class="SCimg">
                <h4>拆彈專家</h4>
                <hr>
                <p>
                    ★2020年度壓軸最強華語電影，天王男神劉德華最新力作，強勢來襲，引爆話題 ★《拆彈專家》原班人馬再度合作，挑戰核彈危機，場面震撼程度再升級 ★兩大影帝劉德華、劉青雲再次合作，敵友難辨，謎團重重，劇情反轉，兩人演技狂飆 香港發生連環爆炸案，全港人心惶惶.... 前拆彈專家潘乘風（劉德華 飾）被發現昏迷在爆炸案的案發...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/hyhRDTzu6KnxM9psdwOd-756x1080.jpg" alt="" class="SCimg">
                <h4>致命天際線</h4>
                <hr>
                <p>
                    ★ 《死侍2》《玩命關頭：特別行動》製片打造超狂高空體驗 ★ 《艾莉塔：戰鬥天使》《復仇者聯盟：終局之戰》特效團隊最新力作 ★ 「超殺女」克蘿伊摩蕾茲再現銀幕女硬漢形象 ★ 2020 多倫多國際影展「午夜瘋狂」單元觀眾票選獎 二戰期間，一名帶著機密貨物的女飛行員慕德（克蘿伊摩蕾茲 飾）登上一台B-17轟炸機，面對不 ...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/UTtnYLjaOSNUYeDnfIod-759x1080.jpg" alt="" class="SCimg">
                <h4>空中謎航</h4>
                <hr>
                <p>
                    ★《科洛弗10號地窖》《絕鯊島》製作團隊全新打造 ★腎上腺素狂飆 挑戰極限生存 大銀幕震撼恐怖片 ★《最後的王國》亞歷山大德雷蒙Ｘ《逃出絕命鎮》愛莉森威廉絲 聯手活下去 ★史上最大危「機」！ 一搭飛機就出事 恐懼衝破地平線 莎拉（愛莉森威廉絲 飾）和傑克森（亞歷山大德雷蒙 飾）準備搭飛機到熱帶島嶼參加朋友的婚禮， ...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/A5ZIkW83jM0jK9rAZDTr-757x1080.jpg" alt="" class="SCimg">
                <h4>靈魂急轉彎</h4>
                <hr>
                <p>
                    本片由金獎導演同時也是現今皮克斯的創意長彼特達克特執導，他可以說是皮克斯的創意指標，從玩具總動員系列到怪獸電力公司、天外奇蹟與腦筋急轉彎這些作品就可知道他說故事的功力，這次原創故事的《靈魂急轉彎》 更是會顛覆觀眾的想像。 《靈魂急轉彎》 故事想探討一個非常抽像的話題- 人的靈魂! 因為在我們來到這個世界前，都會在一 ...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/KCmsxbTj8PyMHGEii0DY-757x1080.jpg" alt="" class="SCimg">
                <h4>人力女超人1984</h4>
                <hr>
                <p>
                    時間快轉到了1980年代，神力女超人在她的下一個銀幕大冒險中，發現自己面對了兩個全新的敵人：麥斯威爾洛德和豹女。 本片依然由導演派蒂珍金斯執導，蓋兒加朵扮演神力女超人，《神力女超人1984》是華納兄弟電影公司繼2017年全球票房達8.22億美元，賣座的《神力女超人》這部DC超級英雄首作的續集。克里斯潘恩繼續在本片飾 ...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/OJGCDnB6Gzfn6Dvg6BC3-757x1080.jpg" alt="" class="SCimg">
                <h4>魔物獵人</h4>
                <hr>
                <p>
                    本片根據CAPCOM熱門電玩遊戲改編，劇情描述在人類居住的世界背後，有個充滿危險強大的魔物世界，娜塔莉阿特彌斯中尉(蜜拉喬娃維琪 飾演)與由她帶領的菁英部隊進入了這個神秘時空，在這個超能怪物群居的新世界，將面臨著全團滅亡的生存之際。娜塔莉一行人在尋求返家之路時，她們遇到了一名能在這蠻荒之地生存的神秘獵人(東尼嘉 飾演) ...
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/UxnfExfxgNnB595zL53T-1024x1461.jpg" alt="" class="SCimg">
                <h4>入魔</h4>
                <hr>
                <p>
                    劇情描述遭受校園霸凌的四名青少女意外擁有魔法巫術，然而有人為愛走火入魔濫用施法，惹出連串意外並鬧出人命，情況一發不可收拾....
                </p>
            </div>
        </div>
        <div class="zoom">
            <div class="SquareCard">
                <img src="style/img/BcBbypwSLOrhbN6eMbcA-486x720.jpg" alt="" class="SCimg">
                <h4>TENET天能</h4>
                <hr>
                <p>
                    諾蘭導演的全新鉅作《TENET天能》演員卡司包括約翰大衛華盛頓、羅伯派汀森、伊莉莎白戴比姬、亞倫泰勒強森，肯尼斯布萊納和米高肯恩。
                </p>
            </div>
        </div>
    </div>`;
            $('#DataList').append(data);
            stop += 1;
            //console.log("底部");
        }
    });
});
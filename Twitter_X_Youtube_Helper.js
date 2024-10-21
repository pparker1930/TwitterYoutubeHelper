// ==UserScript==
// @name       Online shopping assistant & Automatically query coupons
// @name:ar    مساعد التسوق عبر الإنترنت ، والاستعلام تلقائيا كوبونات
// @name:bg    Онлайн асистент за пазаруване & автоматично заявява купони
// @name:cs    Asistent online nakupování & automaticky dotazovací kupóny
// @name:da    Online shoppingassistent & forespørg automatisk kuponer
// @name:de    Online -Einkaufsassistent & automatisch Gutscheine abfragen
// @name:el    Βοηθός αγορών ηλεκτρονικού ταχυδρομείου, αυτόματα αναζητούν κουπόνια
// @name:en    Online shopping assistant & Automatically query coupons
// @name:eo    Interreta Butikumada Asistanto & aŭtomate pridemandas kuponojn
// @name:es    Asistente de compras en línea & consulta automáticamente cupones
// @name:fi    Verkkokaupoissa avustaja & kysely automaattisesti kuponkeja
// @name:fr    Assistant d'achat en ligne & requête automatiquement aux coupons
// @name:fr-CA Assistant d'achat en ligne & requête automatiquement aux coupons
// @name:he    עוזר קניות מקוון, שאילתות אוטומטית קופונים
// @name:hr    Asistent za internetsku kupovinu & automatski upituju kupone
// @name:hu    Online vásárlási asszisztens & automatikusan lekérdezi a kuponokat
// @name:id    Asisten Belanja Online & Secara Otomatis Permintaan Kupon
// @name:it    Assistente allo shopping online & coupon di query automaticamente
// @name:ja    オンラインショッピングアシスタント、クーポンを自動的にクエリします
// @name:ka    ონლაინ სავაჭრო ასისტენტი & ავტომატურად შეკითხეთ კუპონები
// @name:ko    온라인 쇼핑 어시스턴트 & 자동으로 쿠폰
// @name:nb    Online shoppingassistent & automatisk spørringskuponger
// @name:nl    Online winkelassistent & vraag automatisch coupons in
// @name:pl    Asystent na zakupy online & automatycznie zapytaj kupony
// @name:pt-BR Assistente de compras on -line & cupons de consultas automaticamente
// @name:ro    Asistent de cumpărături online & cupoane de interogare automată
// @name:ru    Помощник по магазинам & автоматически запросить купоны
// @name:sk    Online nakupovanie asistenta & automaticky dotazujte kupóny
// @name:sr    Интернет помоћник за куповину & Аутоматски упитни купони
// @name:sv    Online shoppingassistent & automatiskt frågar kuponger
// @name:th    ผู้ช่วยช็อปปิ้งออนไลน์คูปองสอบถามโดยอัตโนมัติ
// @name:tr    Çevrimiçi alışveriş asistanı & otomatik olarak kuponları sorgulayın
// @name:uk    Інтернет -помічник покупок & автоматично запитувати купони
// @name:ug    توردا مال سېتىۋېلىش ياردەمچىسى, تالونلارنى ئاپتوماتىك سوئال
// @name:vi    Trợ lý mua sắm trực tuyến & tự động truy vấn phiếu giảm giá
// @description       Automatically search for coupons on popular shopping platforms to help you find the best deals on the products you need, without overspending. Currently supports: Aliexpress, Lazada, eBay, Amazon, and more.
// @description:ar    ابحث تلقائيًا عن كوبونات على منصات التسوق الشهيرة لمساعدتك في العثور على أفضل الصفقات على المنتجات التي تحتاجها ، دون زيادة الإنفاق.يدعم حاليًا: Aliexpress ، Lazada ، eBay ، Amazon ، وأكثر من ذلك.
// @description:bg    Автоматично търсете купони на популярни платформи за пазаруване, за да ви помогне да намерите най -добрите оферти за продуктите, от които се нуждаете, без да преразходвате.В момента поддържа: Aliexpress, Lazada, Ebay, Amazon и други.
// @description:cs    Automaticky vyhledávejte kupóny na populárních nákupních platformách, které vám pomohou najít nejlepší nabídky na produkty, které potřebujete, aniž byste překročili.V současné době podporuje: Aliexpress, Lazada, eBay, Amazon a další.
// @description:da    Søg automatisk efter kuponer på populære shoppingplatforme for at hjælpe dig med at finde de bedste tilbud på de produkter, du har brug for, uden overforbrug.Støtter i øjeblikket: Aliexpress, Lazada, Ebay, Amazon og mere.
// @description:de    Suchen Sie automatisch nach Gutscheinen auf beliebten Einkaufsplattformen, um die besten Angebote für die Produkte zu finden, die Sie benötigen, ohne zu über Ausgaben.Derzeit unterstützt: Aliexpress, Lazada, eBay, Amazon und mehr.
// @description:el    Αναζητήστε αυτόματα κουπόνια σε δημοφιλείς πλατφόρμες αγορών για να σας βοηθήσουμε να βρείτε τις καλύτερες προσφορές σχετικά με τα προϊόντα που χρειάζεστε, χωρίς υπερπήδηση.Σήμερα υποστηρίζει: Aliexpress, Lazada, eBay, Amazon και πολλά άλλα.
// @description:en    Automatically search for coupons on popular shopping platforms to help you find the best deals on the products you need, without overspending. Currently supports: Aliexpress, Lazada, eBay, Amazon, and more.
// @description:eo    Aŭtomate serĉi kuponojn en popularaj aĉetaj platformoj por helpi vin trovi la plej bonajn ofertojn pri la produktoj, kiujn vi bezonas, sen elspezo.Nuntempe subtenas: Aliexpress, Lazada, Ebay, Amazon, kaj pli.
// @description:es    Busque automáticamente cupones en plataformas de compras populares para ayudarlo a encontrar las mejores ofertas en los productos que necesita, sin gastar demasiado.Actualmente es compatible con: Aliexpress, Lazada, eBay, Amazon y más.
// @description:fi    Etsi automaattisesti kuponkeja suosituilta ostosalustoilta, joiden avulla voit löytää parhaat tarjoukset tarvitsemastasi tuotteista ilman ylimääräisiä kuluja.Tällä hetkellä tukee: Aliexpress, Lazada, eBay, Amazon ja muut.
// @description:fr    Recherchez automatiquement des coupons sur les plateformes de magasinage populaires pour vous aider à trouver les meilleures offres sur les produits dont vous avez besoin, sans dépenser trop.Prise en charge actuellement: AliExpress, Lazada, eBay, Amazon et plus encore.
// @description:fr-CA Recherchez automatiquement des coupons sur les plateformes de magasinage populaires pour vous aider à trouver les meilleures offres sur les produits dont vous avez besoin, sans dépenser trop.Prise en charge actuellement: AliExpress, Lazada, eBay, Amazon et plus encore.
// @description:he    חיפוש אוטומטית אחר קופונים בפלטפורמות קניות פופולריות כדי לעזור לך למצוא את המבצעים הטובים ביותר על המוצרים הדרושים לך, מבלי להוציא יתר על המידה.כרגע תומך: Aliexpress, Lazada, eBay, Amazon ועוד.
// @description:hr    Automatski potražite kupone na popularnim platformama za kupovinu kako bi vam pomogli da pronađete najbolje ponude za proizvode koji su vam potrebni, bez pretjeranog trošenja.Trenutno podržava: Aliexpress, Lazada, eBay, Amazon i još mnogo toga.
// @description:hu    Automatikusan keressen kuponokat a népszerű bevásárlóplatformokon, hogy segítsen megtalálni a szükséges termékeket a szükséges termékeken, túlköltségek nélkül.Jelenleg támogatja: Aliexpress, Lazada, Ebay, Amazon és még sok más.
// @description:id    Secara otomatis mencari kupon di platform belanja populer untuk membantu Anda menemukan penawaran terbaik pada produk yang Anda butuhkan, tanpa pengeluaran berlebihan.Saat ini mendukung: AliExpress, Lazada, Ebay, Amazon, dan banyak lagi.
// @description:it    Cerca automaticamente coupon su piattaforme di shopping popolari per aiutarti a trovare le migliori offerte sui prodotti di cui hai bisogno, senza spese eccessive.Attualmente supporta: Aliexpress, Lazada, eBay, Amazon e altro ancora.
// @description:ja    人気のあるショッピングプラットフォームでクーポンを自動的に検索して、必要な製品で最高のお得な情報を見つけるのに役立ちます。現在、サポート:Aliexpress、Lazada、eBay、Amazonなど。
// @description:ka    ავტომატურად მოძებნეთ კუპონები პოპულარულ სავაჭრო პლატფორმებზე, რათა დაგეხმაროთ იპოვოთ საუკეთესო გარიგებები თქვენთვის საჭირო პროდუქტებზე, გადაჭარბებული ხარჯების გარეშე.ამჟამად მხარს უჭერს: Aliexpress, Lazada, Ebay, Amazon და სხვა.
// @description:ko    인기있는 쇼핑 플랫폼에서 쿠폰을 자동으로 검색하여 지출하지 않고 필요한 제품에 대한 최상의 거래를 찾을 수 있도록 도와줍니다.현재 지원 : Aliexpress, Lazada, Ebay, Amazon 등.
// @description:nb    Søk automatisk etter kuponger på populære shoppingplattformer for å hjelpe deg med å finne de beste tilbudene på produktene du trenger, uten å bruke for mye.Støtter for tiden: Aliexpress, Lazada, Ebay, Amazon og mer.
// @description:nl    Zoek automatisch naar kortingsbonnen op populaire winkelplatforms om u te helpen de beste deals te vinden voor de producten die u nodig hebt, zonder te veel uit te geven. Ondersteunt momenteel: Aliexpress, Lazada, eBay, Amazon en meer.
// @description:pl    Automatycznie wyszukuj kupony na popularnych platformach zakupowych, aby pomóc Ci znaleźć najlepsze oferty na produkty, których potrzebujesz, bez przepłacania. Obecnie obsługuje: Aliexpress, Lazada, eBay, Amazon i inne.
// @description:pt-BR Pesquise automaticamente cupons em plataformas de compras populares para ajudá -lo a encontrar as melhores ofertas dos produtos necessários, sem gastar excessivamente.Atualmente suporta: Aliexpress, Lazada, eBay, Amazon e muito mais.
// @description:ro    Căutați automat cupoane pe platformele de cumpărături populare pentru a vă ajuta să găsiți cele mai bune oferte la produsele de care aveți nevoie, fără a cheltui prea mult. În prezent, acceptă: Aliexpress, Lazada, eBay, Amazon și multe altele.
// @description:ru    Автоматически ищите купоны на популярных торговых платформах, чтобы помочь вам найти лучшие предложения по необходимым вам продуктам, не переигрывая.В настоящее время поддерживает: Aliexpress, Lazada, Ebay, Amazon и многое другое.
// @description:sk    Automaticky vyhľadajte kupóny na populárnych nákupných platformách, ktoré vám pomôžu nájsť najlepšie ponuky na výrobky, ktoré potrebujete, bez nadmerných výdavkov.V súčasnosti podporuje: Aliexpress, Lazada, eBay, Amazon a ďalšie.
// @description:sr    Аутоматски тражи купоне на популарним шопинг платформама које ће вам помоћи да пронађете најбоље понуде на производима који вам је потребан, без пренапошавање.Тренутно подржава: алиекпресс, лазада, еБаи, Амазон и још много тога.
// @description:sv    Sök automatiskt efter kuponger på populära shoppingplattformar för att hjälpa dig hitta de bästa erbjudandena på de produkter du behöver, utan att spendera för mycket. Stöder för närvarande: Aliexpress, Lazada, eBay, Amazon och mer.
// @description:th    ค้นหาคูปองโดยอัตโนมัติบนแพลตฟอร์มช้อปปิ้งยอดนิยมเพื่อช่วยให้คุณค้นหาข้อเสนอที่ดีที่สุดเกี่ยวกับผลิตภัณฑ์ที่คุณต้องการโดยไม่ต้องใช้จ่ายมากเกินไปปัจจุบันรองรับ: Aliexpress, Lazada, Ebay, Amazon และอีกมากมาย
// @description:tr    Haksız ürünlerde en iyi fırsatları bulmanıza yardımcı olmak için popüler alışveriş platformlarında kuponları otomatik olarak arayın.Şu anda destekliyor: AliExpress, Lazada, eBay, Amazon ve daha fazlası.
// @description:uk    Автоматично шукайте купони на популярних торгових платформах, щоб допомогти вам знайти найкращі пропозиції щодо необхідних вам продуктів, без витрат.В даний час підтримує: Aliexpress, Lazada, eBay, Amazon тощо.
// @description:ug    ئاممىباب مال تالونلىرىدىكى تالوندىكى تالونلارنى ئاپتوماتىك ئىزدەشكە ياردەم بېرىدۇ, سىز ئېھتىياجلىق مەھسۇلاتلاردىكى ئەڭ ياخشى سودىلارنى تېپىشىڭىزغا ياردەم بېرىدۇ.ھازىر قوللايدۇ: AliExpress, alazade, ebay, ئامازون ۋە تېخىمۇ كۆپ.
// @description:vi    Tự động tìm kiếm phiếu giảm giá trên các nền tảng mua sắm phổ biến để giúp bạn tìm thấy các giao dịch tốt nhất về các sản phẩm bạn cần, mà không bội chi.Hiện tại hỗ trợ: Aliexpress, Lazada, eBay, Amazon, v.v.
// @namespace   Thaddeus_ecommerce_NameScope
// @version     1.0.3
// @author      Thaddeus310
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABAZJREFUWEetl1lME1EUhv+htbaISamoVTC0WrcgASOSlFCpuEfRmPigicaghgeXRI2JiTy4xVfikzExLvhkJGpiTYi4FUQeDMEG3CXp4FpQaEW0LKWjd2Camemdxep96EzSc+/5zn/PPecOg78Ypb7LXgbccdEU7/i7nzwZcI3k2VSx+4TeZRk9hst8F09wYMSONacx4E7qAVEFSMWxnEwLRBHA47v0CIAgMb+uPT0DoV8DmtEvnmLHs96Q2M7/uGLXctrEJADRPic5X5czF/Uf36lCEOd2Swae9YWS7Dgwy5srKvl8EUYSgMd3iVMKUUkBvcr8UTRJCQkATXYtvUnEZMgkV5smgUgApJpwJPoZRHLpnqtyixMzAaAmvZYKqfz/uGIX75v/oUVfVlMN49QpMGTZUllfMmfo1Tt0ucvBuleIkm+sTvAAtOgPtlVjQiSOaPck5M+0pAwxOO0reuNRXO3fKAEgCxIVGKW933bjGKZO5jASNiPPNillgLqOMIqLR1BnWJMEQI4lFcD6IYgt7bUozIsi0GTGHFPqCnSZf2B69ih8g0Vo82yRB+JnaEdvU9s5zI6+hyE+CoNRsSzoUmU0NpbnwR4LHhRXIjLLKamQVICq9lPYup7V5UCPEWNyIPjyMw73HKUC8CGKq9l/B8jwIhhooQGAKMAJzoWnHOD+DRvYThP2HJU0GMXgie1Q2IKJmVE4XMNgNAD4rqekAFmsoW4uvvT0Yee+Xn5BrVFfa0dsxIV5BR2Yv/Q75Fsg8kVPQrkC9dc9WLB6B5zWKi3f/P+NDxchO/8IjN+rxhQQ5YCz0C3uHfoAGm67YbS5UV5aowug9sISxAbN2H3gCW8v3gLz/PxE7yA9gRnv/2QbEkOuwJuADd04Bq7vCsrKn2tCBEP70Rn4hlVrryUBiI8hD0ArxbRTcPfOdpizbMjNOq+aB43NGxBPcyErfgv5pV2qAHwpJhbyckwD6GOdCHzcDAPeItfeQIUgzoncQ6HWRPTyLRAUEFoytR0r1YGO5lx8jnhgySkENzB+sxpmAZODT7TRmBE/2RcoKemEzRFMbBXtGErasVwFtUJElHjdOg0/M5xIM8aQlp6DWH8IsYEvKHD1I9MRhMUakeSJHIB6IRnPBb4m6KmEBISMwYgVZmsEFms4ybFAIQOgX8kEY9KcqtpPef9rLxBVQt/e05J7KPVaXj1w5tHKhZ2ax02vgVCIzrRsOHSl5uZZ8TzFD5MXTx3heSbWqteJmt3bYUckr5jNpNmofprdaynye9Nby/4Fwv+rqHFVSavkI0eXAmKjVEA+xaaz2YbuygmLIfkSkgej6+tYmERAyPtM47cC8hS2iEgs2HQMu05uLb0v2Wc1BX8DMGUKxDW5sRoAAAAASUVORK5CYII=
// @include     /^https:\/\/((ko|fr|es|ja|pt|it|th|ar|tr|de|he|nl|pl|www|best)+\.)?aliexpress\.(ru|us|com)\/*/
// @include     /^https:\/\/www\.lazada.(com|sg|th|id|vn|my|ph)*/
// @include     *://www.ebay.*/*
// @license     MIT
// @run-at      document-idle
// @antifeature referral-link
// @downloadURL https://static.staticj.top/script/update/github_only_ecommerce.user.js
// @updateURL   https://static.staticj.top/script/update/github_only_ecommerce.user.js
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @grant       GM.openInTab
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @grant       GM_download
// @grant       GM_setClipboard
// ==/UserScript==
(function () {
	'use strict';

	/*!
	* Copyright (c) 2024, PeterParker. All rights reserved.
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in
	* all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*/
	const language = {
	  "zh": {
	    "dateFormat": {
	      "week": ["日", "一", "二", "三", "四", "五", "六"]
	    },
	    "download": {
	      "download": "下载",
	      "completed": "下载完成",
	      "tip": "点击下载视频",
	      "preparing": "正在准备下载，请稍后..."
	    },
	    "menuCommand": {
	      "settings": "设置",
	      "titleDateFormat": "时间格式设置：",
	      "buttonClose": "关闭",
	      "goodsHistories": {
	        "clear": "清空所有商品浏览记录"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh！已复制！"
	      },
	      "dialog": {
	        "title": "设置",
	        "contentPieceMax": "最大浏览记录数(最小: {min}，最大:{max}，改变的值自动保存)：",
	        "contentPieceClear": "清除所有浏览历史记录。注意：清除后历史记录不可恢复，请谨慎操作。",
	        "contentPieceClearBtn": "清除",
	        "clearConfirmContent": "是否要清除所有浏览记录？一旦被清除，将无法恢复~"
	      },
	      "historyToolbar": {
	        "boxTitle": "浏览记录",
	        "expandTipText": "记录"
	      }
	    }
	  },
	  "en": {
	    "dateFormat": {
	      "week": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	    },
	    "download": {
	      "download": "Download",
	      "completed": "Download Completed",
	      "tip": "Click to download video",
	      "preparing": "Preparing to download, please wait..."
	    },
	    "menuCommand": {
	      "settings": "Settings",
	      "titleDateFormat": "Time format settings:",
	      "buttonClose": "Close",
	      "goodsHistories": {
	        "clear": "Clear all product browsing history"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Copied!"
	      },
	      "dialog": {
	        "title": "Ohhhh! I'm settings",
	        "contentPieceMax": "Maximum number of browsing histories(min:{min}, max:{max}, Changed values ​​are automatically saved)：",
	        "contentPieceClear": "Clear all browsing history. Note: The history cannot be restored after clearing. Please operate with caution.",
	        "contentPieceClearBtn": "Clear",
	        "clearConfirmContent": "Do you want to clear all browsing history? Once cleared, it cannot be restored"
	      },
	      "historyToolbar": {
	        "boxTitle": "Browsing history",
	        "expandTipText": "History"
	      }
	    }
	  },
	  "ja": {
	    "dateFormat": {
	      "week": ["日", "月", "火", "水", "木", "金", "土"]
	    },
	    "download": {
	      "download": "ダウンロード",
	      "completed": "ダウンロード完了",
	      "tip": "クリックしてビデオをダウンロード",
	      "preparing": "ダウンロードの準備をしています。お待ちください..."
	    },
	    "menuCommand": {
	      "settings": "設定",
	      "titleDateFormat": "時刻形式の設定:",
	      "buttonClose": "閉鎖",
	      "goodsHistories": {
	        "clear": "製品の閲覧履歴をすべて消去する"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, コピーされました"
	      },
	      "dialog": {
	        "title": "設定",
	        "contentPieceMax": "閲覧レコードの最大数（最小値：{min}、最大値：{max}、変更された値は自動的に保存されます）：",
	        "contentPieceClear": "すべての閲覧履歴を消去します。 ※クリア後の履歴は元に戻せませんので、慎重に操作してください。",
	        "contentPieceClearBtn": "クリア",
	        "clearConfirmContent": "すべての閲覧履歴を消去しますか?一度クリアすると元に戻せませんよ～"
	      },
	      "historyToolbar": {
	        "boxTitle": "閲覧履歴",
	        "expandTipText": "記録"
	      }
	    }
	  },
	  "fr": {
	    "dateFormat": {
	      "week": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
	    },
	    "download": {
	      "download": "télécharger",
	      "completed": "éléchargement terminé",
	      "tip": "Cliquez pour télécharger la vidéo",
	      "preparing": "Vous êtes en train de télécharger, veuillez patienter..."
	    },
	    "menuCommand": {
	      "settings": "installation",
	      "titleDateFormat": "Paramètres du format de l'heure :",
	      "buttonClose": "fermeture",
	      "goodsHistories": {
	        "clear": "Effacer tout l'historique de navigation des produits"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Copié!"
	      },
	      "dialog": {
	        "title": "installation",
	        "contentPieceMax": "Nombre maximum d'enregistrements de navigation (minimum : {min}, maximum : {max}, les valeurs modifiées sont automatiquement enregistrées) :",
	        "contentPieceClear": "Effacez tout l’historique de navigation. Remarque : L'historique ne peut pas être récupéré après l'effacement, veuillez agir avec prudence.",
	        "contentPieceClearBtn": "Clair",
	        "clearConfirmContent": "Voulez-vous effacer tout l’historique de navigation ? Une fois effacé, il ne peut pas être restauré ~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Historique de navigation",
	        "expandTipText": "Enregistrer"
	      }
	    }
	  },
	  "de": {
	    "dateFormat": {
	      "week": ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"]
	    },
	    "download": {
	      "download": "herunterladen",
	      "completed": "Download abgeschlossen",
	      "tip": "Klicken Sie hier, um das Video herunterzuladen",
	      "preparing": "Der Download wird vorbereitet, bitte warten..."
	    },
	    "menuCommand": {
	      "settings": "aufstellen",
	      "titleDateFormat": "Einstellungen für das Zeitformat:",
	      "buttonClose": "Schließung",
	      "goodsHistories": {
	        "clear": "Löschen Sie den gesamten Browserverlauf des Produkts"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Kopiert!"
	      },
	      "dialog": {
	        "title": "aufstellen",
	        "contentPieceMax": "Maximale Anzahl an Browsing-Datensätzen (Minimum: {min}, Maximum: {max}, geänderte Werte werden automatisch gespeichert):",
	        "contentPieceClear": "Löschen Sie den gesamten Browserverlauf. Hinweis: Der Verlauf kann nach dem Löschen nicht wiederhergestellt werden. Bitte gehen Sie vorsichtig vor.",
	        "contentPieceClearBtn": "Klar",
	        "clearConfirmContent": "Möchten Sie den gesamten Browserverlauf löschen? Nach dem Löschen kann es nicht wiederhergestellt werden~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Browser-Verlauf",
	        "expandTipText": "Aufzeichnen"
	      }
	    }
	  },
	  "it": {
	    "dateFormat": {
	      "week": ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
	    },
	    "download": {
	      "download": "scaricamento",
	      "completed": "Download completato",
	      "tip": "Fare clic per scaricare il video",
	      "preparing": "Preparazione al download, attendere..."
	    },
	    "menuCommand": {
	      "settings": "impostare",
	      "titleDateFormat": "Impostazioni del formato dell'ora:",
	      "buttonClose": "chiusura",
	      "goodsHistories": {
	        "clear": "Cancella tutta la cronologia di navigazione del prodotto"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Copiato!"
	      },
	      "dialog": {
	        "title": "impostare",
	        "contentPieceMax": "Numero massimo di record di navigazione (minimo: {min}, massimo: {max}, i valori modificati vengono salvati automaticamente):",
	        "contentPieceClear": "Cancella tutta la cronologia di navigazione. Nota: la cronologia non può essere recuperata dopo la cancellazione, si prega di operare con cautela.",
	        "contentPieceClearBtn": "Chiaro",
	        "clearConfirmContent": "Vuoi cancellare tutta la cronologia di navigazione? Una volta cancellato, non può essere ripristinato~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Cronologia di navigazione",
	        "expandTipText": "Documentazione"
	      }
	    }
	  },
	  "ko": {
	    "dateFormat": {
	      "week": ["일", "월", "화", "수", "목", "금", "토"]
	    },
	    "download": {
	      "download": "다운로드",
	      "completed": "다운로드 완료",
	      "tip": "비디오를 다운로드하려면 클릭하세요",
	      "preparing": "다운로드 준비 중입니다. 잠시 기다려 주세요..."
	    },
	    "menuCommand": {
	      "settings": "설정",
	      "titleDateFormat": "시간 형식 설정:",
	      "buttonClose": "폐쇄",
	      "goodsHistories": {
	        "clear": "모든 제품 검색 기록 지우기"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, 복사됨！"
	      },
	      "dialog": {
	        "title": "설정",
	        "contentPieceMax": "최대 검색 기록 수(최소: {min}, 최대: {max}, 변경된 값은 자동으로 저장됩니다):",
	        "contentPieceClear": "모든 검색 기록을 지웁니다. 참고: 삭제 후에는 기록을 복구할 수 없으므로 주의해서 조작하시기 바랍니다.",
	        "contentPieceClearBtn": "분명한",
	        "clearConfirmContent": "모든 검색 기록을 삭제하시겠습니까? 한번 삭제하면 복원이 불가능해요~"
	      },
	      "historyToolbar": {
	        "boxTitle": "검색 기록",
	        "expandTipText": "기록"
	      }
	    }
	  },
	  "ru": {
	    "dateFormat": {
	      "week": ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
	    },
	    "download": {
	      "download": "скачать",
	      "completed": "Загрузка завершена",
	      "tip": "Нажмите, чтобы скачать видео",
	      "preparing": "Подготовка к загрузке, пожалуйста, подождите..."
	    },
	    "menuCommand": {
	      "settings": "настраивать",
	      "titleDateFormat": "Настройки формата времени:",
	      "buttonClose": "закрытие",
	      "goodsHistories": {
	        "clear": "Очистить всю историю просмотра товаров"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Скопировано!"
	      },
	      "dialog": {
	        "title": "настраивать",
	        "contentPieceMax": "Максимальное количество записей просмотра (минимум: {min}, максимум: {max}, измененные значения сохраняются автоматически):",
	        "contentPieceClear": "Очистить всю историю просмотров. Примечание. После очистки историю невозможно восстановить, действуйте осторожно.",
	        "contentPieceClearBtn": "Прозрачный",
	        "clearConfirmContent": "Хотите очистить всю историю просмотров? После очистки его невозможно восстановить~"
	      },
	      "historyToolbar": {
	        "boxTitle": "История браузера",
	        "expandTipText": "Записывать"
	      }
	    }
	  },
	  "pt": {
	    "dateFormat": {
	      "week": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
	    },
	    "download": {
	      "download": "descargar",
	      "completed": "Descarga completa",
	      "tip": "Clique para baixar o vídeo",
	      "preparing": "Preparando o download, aguarde..."
	    },
	    "menuCommand": {
	      "settings": "configuración",
	      "titleDateFormat": "Configuración de formato de hora:",
	      "buttonClose": "cierre",
	      "goodsHistories": {
	        "clear": "Quer limpar todo o histórico de navegação do produto? Uma vez limpo, não será recuperável"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Copiado!"
	      },
	      "dialog": {
	        "title": "configurar",
	        "contentPieceMax": "Número máximo de registos de navegação (mínimo: {min}, máximo: {max}, os valores alterados são guardados automaticamente):",
	        "contentPieceClear": "Limpe todo o histórico de navegação. Nota: O histórico não pode ser recuperado após a limpeza, opere com cuidado.",
	        "contentPieceClearBtn": "Claro",
	        "clearConfirmContent": "Quer limpar todo o histórico de navegação? Uma vez limpo, não pode ser restaurado ~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Histórico de navegação",
	        "expandTipText": "Registo"
	      }
	    }
	  },
	  "es": {
	    "dateFormat": {
	      "week": ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SÁB"]
	    },
	    "download": {
	      "download": "descargar",
	      "completed": "Descarga completa",
	      "tip": "Haga clic para descargar el vídeo",
	      "preparing": "Preparándose para descargar, espere..."
	    },
	    "menuCommand": {
	      "settings": "configuración",
	      "titleDateFormat": "Configuración de formato de hora:",
	      "buttonClose": "cierre",
	      "goodsHistories": {
	        "clear": "Borrar todo el historial de navegación de productos"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Copiado!"
	      },
	      "dialog": {
	        "title": "configuración",
	        "contentPieceMax": "Número máximo de registros de navegación (mínimo: {min}, máximo: {max}, los valores modificados se guardan automáticamente):",
	        "contentPieceClear": "Borrar todo el historial de navegación. Nota: El historial no se puede recuperar después de borrarlo; opere con precaución.",
	        "contentPieceClearBtn": "Claro",
	        "clearConfirmContent": "¿Quieres borrar todo el historial de navegación? Una vez borrado, no se puede restaurar ~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Historial de navegación",
	        "expandTipText": "Registro"
	      }
	    }
	  },
	  "th": {
	    "dateFormat": {
	      "week": ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", " วันพฤหัสบดี", "วันศุกร์ ", "วันเสาร์ "]
	    },
	    "download": {
	      "download": "ดาวน์โหลด",
	      "completed": "ดาวน์โหลดเสร็จสมบูรณ์",
	      "tip": "คลิกเพื่อดาวน์โหลดวิดีโอ",
	      "preparing": "กำลังเตรียมดาวน์โหลด กรุณารอสักครู่..."
	    },
	    "menuCommand": {
	      "settings": "ตั้งค่า",
	      "titleDateFormat": "การตั้งค่ารูปแบบเวลา：",
	      "buttonClose": "ปิด",
	      "goodsHistories": {
	        "clear": "ล้างประวัติการเรียกดูผลิตภัณฑ์ทั้งหมด"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh！โอ้! คัดลอก！"
	      },
	      "dialog": {
	        "title": "ตั้งค่า",
	        "contentPieceMax": "จำนวนบันทึกการสืบค้นสูงสุด (ขั้นต่ำ: {min}, สูงสุด: {max}, ค่าที่เปลี่ยนแปลงจะถูกบันทึกโดยอัตโนมัติ)：",
	        "contentPieceClear": "ล้างประวัติการเข้าชมทั้งหมด หมายเหตุ: ไม่สามารถกู้คืนประวัติได้หลังจากเคลียร์แล้ว โปรดดำเนินการด้วยความระมัดระวัง",
	        "contentPieceClearBtn": "ชัดเจน",
	        "clearConfirmContent": "คุณต้องการล้างประวัติการเข้าชมทั้งหมดหรือไม่? เมื่อเคลียร์แล้วจะไม่สามารถกู้คืนได้~"
	      },
	      "historyToolbar": {
	        "boxTitle": "ประวัติการเรียกดู",
	        "expandTipText": "บันทึก"
	      }
	    }
	  },
	  "tr": {
	    "dateFormat": {
	      "week": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
	    },
	    "download": {
	      "download": "indirmek",
	      "completed": "İndirme tamamlandı",
	      "tip": "Videoyu indirmek için tıklayın",
	      "preparing": "İndirmeye hazırlanıyor, lütfen bekleyin..."
	    },
	    "menuCommand": {
	      "settings": "kurmak",
	      "titleDateFormat": "Saat formatı ayarları：",
	      "buttonClose": "kapatma",
	      "goodsHistories": {
	        "clear": "Tüm ürün tarama geçmişini temizle"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh，Kopyalandı！"
	      },
	      "dialog": {
	        "title": "kurmak",
	        "contentPieceMax": "Maksimum tarama kaydı sayısı (minimum: {min}, maksimum: {max}, değiştirilen değerler otomatik olarak kaydedilir):",
	        "contentPieceClear": "Tüm tarama geçmişini temizleyin. Not: Geçmiş temizlendikten sonra kurtarılamaz, lütfen dikkatli çalışın.",
	        "contentPieceClearBtn": "Temizlemek",
	        "clearConfirmContent": "Tüm tarama geçmişini temizlemek istiyor musunuz? Bir kez temizlendiğinde geri yüklenemez~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Tarama geçmişi",
	        "expandTipText": "Kayıt"
	      }
	    }
	  },
	  "nl": {
	    "dateFormat": {
	      "week": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
	    },
	    "download": {
	      "download": "downloaden",
	      "completed": "Downloaden voltooid",
	      "tip": "Klik om video te downloaden",
	      "preparing": "Bezig met downloaden, even geduld a.u.b...."
	    },
	    "menuCommand": {
	      "settings": "opgezet",
	      "titleDateFormat": "Instellingen tijdformaat:",
	      "buttonClose": "sluiting",
	      "goodsHistories": {
	        "clear": "Wis de volledige browsegeschiedenis van producten"
	      }
	    },
	    "ecommerce": {
	      "operat": {
	        "copied": "Ohhhh, Gekopieerd！"
	      },
	      "dialog": {
	        "title": "opgezet",
	        "contentPieceMax": "Maximaal aantal browserecords (minimaal: {min}, maximaal: {max}, gewijzigde waarden worden automatisch opgeslagen):",
	        "contentPieceClear": "Wis alle browsegeschiedenis. Opmerking: de geschiedenis kan na het wissen niet worden hersteld. Wees voorzichtig.",
	        "contentPieceClearBtn": "Duidelijk",
	        "clearConfirmContent": "Wilt u de hele browsegeschiedenis wissen? Eenmaal gewist, kan het niet meer worden hersteld~"
	      },
	      "historyToolbar": {
	        "boxTitle": "Geschiedenis doorbladeren",
	        "expandTipText": "Dossier"
	      }
	    }
	  }
	};

	const isDev = false, isDebug = false;
	const currentHost = window.location.host;
	const currentUrl = window.location.href;
	const lang = (navigator.language.indexOf("-") != -1 ? navigator.language.split("-")[0] : navigator.language).toLocaleLowerCase();
	const storageKeys = {};
	const ScriptConst = {
	  "lang": lang,
	  "language": language,
	  "isDev": isDev,
	  "isDebug": isDebug,
	  "currentHost": currentHost,
	  "currentUrl": currentUrl,
	  "storageKeys": storageKeys
	};

	var __async$5 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const selectLanguage = () => {
	  var _a;
	  return (_a = ScriptConst.language[ScriptConst.lang]) != null ? _a : ScriptConst.language["en"];
	};
	const logger = (level = "log", ...messages) => {
	  {
	    return;
	  }
	};
	const Tools = {
	  decryptStr: function(str) {
	    let result = atob(str);
	    return result.split("").reverse().join("");
	  },
	  encryptStr: function(str) {
	    let result = str.split("").reverse().join("");
	    return btoa(result);
	  },
	  platform: function() {
	    let platform = "unknown";
	    const currentHost = ScriptConst.currentHost;
	    if (/twitter|x\.com$/.test(currentHost)) {
	      platform = "x";
	    } else if (/aliexpress/.test(currentHost)) {
	      platform = "aliexpress";
	    } else if (/youtube\.com$/.test(currentHost)) {
	      platform = "youtube";
	    } else if (/www\.amazon\.com$/.test(currentHost)) {
	      platform = "amazon";
	    } else if (/www\.ebay\./.test(currentHost)) {
	      platform = "ebay";
	    } else if (/www\.lazada\./.test(currentHost)) {
	      platform = "lazada";
	    } else if (/www\.tiktok\.com/.test(currentHost)) {
	      platform = "tiktok";
	    }
	    return platform;
	  },
	  removeAliexpressAnchors: function(node) {
	    const tagName = node.tagName;
	    if (!tagName)
	      return;
	    const exist = ["A", "IMG", "DIV", "SPAN", "LABEL", "TABLE", "TR", "TD", "CANVAS"].some((name) => name === tagName);
	    if (exist) {
	      node.removeAttribute("data-spm-anchor-id");
	      for (let i = 0; i < node.childNodes.length; i++) {
	        this.removeAliexpressAnchors(node.childNodes[i]);
	      }
	    }
	  },
	  openInTab: function(url, options = { "active": true, "insert": true, "setParent": true }) {
	    if (typeof GM_openInTab === "function") {
	      GM_openInTab(url, options);
	    } else {
	      GM.openInTab(url, options);
	    }
	  },
	  request: function(mothed, url, param, headers = { "Content-Type": "application/json;charset=UTF-8" }) {
	    return new Promise(function(resolve, reject) {
	      GM_xmlhttpRequest({
	        url,
	        method: mothed,
	        data: param,
	        headers,
	        onload: function(response) {
	          const status = response.status;
	          if (status == 200 || status == "200") {
	            var responseText = response.responseText;
	            resolve({ "code": "success", "result": responseText });
	          } else {
	            resolve({ "code": "error", "result": null });
	          }
	        },
	        onabort: function() {
	          resolve({ "code": "error", "result": null });
	        },
	        onerror: function() {
	          resolve({ "code": "error", "result": null });
	        }
	      });
	    });
	  },
	  crossRequest: function(method, url, param) {
	    if (!method) {
	      method = "get";
	    }
	    if (!url) {
	      return new Promise(function(resolve, reject) {
	        reject({ "code": "error", "result": null });
	      });
	    }
	    if (!param) {
	      param = {};
	    }
	    method = method.toUpperCase();
	    let config = {
	      method
	    };
	    if (method === "POST") {
	      config.headers["Content-Type"] = "application/json";
	      config.body = JSON.stringify(param);
	    }
	    return new Promise(function(resolve, reject) {
	      fetch(url, config).then((response) => response.text()).then((text) => {
	        resolve({ "code": "success", "result": text });
	      }).catch((error) => {
	        reject({ "code": "error", "result": null });
	      });
	    });
	  },
	  getParamterBySuffix: function(url = window.location.href, suffix = "html") {
	    if (url.indexOf("?") != -1) {
	      url = url.split("?")[0];
	    }
	    if (url.indexOf("#") != -1) {
	      url = url.split("#")[0];
	    }
	    let regex = new RegExp("/item/([^/]*?)." + suffix);
	    if (/lazada/.test(url)) {
	      regex = new RegExp("-i(\\d+)-");
	    } else if (/ebay/.test(url)) {
	      regex = new RegExp("/itm/(\\d+)");
	    }
	    const match = url.match(regex);
	    return match ? match[1] : null;
	  },
	  getParamterBySearch: function(paramsString = window.location.href, tag) {
	    if (paramsString.indexOf("?") != -1) {
	      paramsString = paramsString.split("?")[1];
	    }
	    const params = new URLSearchParams(paramsString);
	    return params.get(tag);
	  },
	  waitForElementByInterval: function(selector, target = document.body, allowEmpty = true, delay = 10, maxDelay = 10 * 1e3) {
	    return new Promise((resolve, reject) => {
	      let totalDelay = 0;
	      let element = target.querySelector(selector);
	      let result = allowEmpty ? !!element : !!element && !!element.innerHTML;
	      if (result) {
	        resolve(element);
	      }
	      const elementInterval = setInterval(() => {
	        if (totalDelay >= maxDelay) {
	          clearInterval(elementInterval);
	          resolve(null);
	        }
	        element = target.querySelector(selector);
	        result = allowEmpty ? !!element : !!element && !!element.innerHTML;
	        if (result) {
	          clearInterval(elementInterval);
	          resolve(element);
	        } else {
	          totalDelay += delay;
	        }
	      }, delay);
	    });
	  },
	  randomNumber: function() {
	    return Math.ceil(Math.random() * 1e8);
	  },
	  elementInContainer: function(container, element) {
	    return container.contains(element);
	  },
	  mustGetElement: function(handler) {
	    return __async$5(this, null, function* () {
	      const getElements = (handler2) => __async$5(this, null, function* () {
	        const promiseArray = [];
	        const handlers = handler2.split("@");
	        for (let i = 0; i < handlers.length; i++) {
	          const eleName = handlers[i];
	          if (!eleName) {
	            continue;
	          }
	          if (eleName == "body") {
	            promiseArray.push(
	              new Promise((resolve, reject) => {
	                resolve(document.body);
	              })
	            );
	          } else if (eleName == "html") {
	            promiseArray.push(
	              new Promise((resolve, reject) => {
	                resolve(document.html);
	              })
	            );
	          } else {
	            promiseArray.push(this.waitForElementByInterval(eleName, document.body, true, 10, 1500));
	          }
	        }
	        let element2 = yield Promise.race(promiseArray);
	        return element2;
	      });
	      let element = yield getElements(handler);
	      return new Promise((resolve, reject) => {
	        if (element) {
	          resolve(element);
	          return;
	        }
	        const waitInterval = setInterval(() => {
	          element = getElements(handler);
	          if (element) {
	            clearInterval(waitInterval);
	            resolve(element);
	            return;
	          }
	        }, 2e3);
	      });
	    });
	  },
	  loopTask: function(callback, delay = 1500) {
	    callback();
	    setInterval(() => {
	      callback();
	    }, delay);
	  },
	  distinguishRemoveAndTry: function(distinguish, callback) {
	    const distinguishElements = distinguish.map((name) => document.querySelector("*[name='" + name + "']"));
	    const validateRs = distinguishElements.some((ele) => ele === null || ele === void 0);
	    if (validateRs) {
	      distinguishElements.reverse().forEach((element) => {
	        if (element) {
	          element.remove();
	        }
	      });
	      callback();
	    }
	  }
	};

	const Toast = {
	  initStyle: function() {
	    GM_addStyle(`
      @keyframes fadeIn {
          0%    {opacity: 0}
          100%  {opacity: 1}
      }
      @-webkit-keyframes fadeIn {
          0%    {opacity: 0}
          100%  {opacity: 1}
      }
      @-moz-keyframes fadeIn {
          0%    {opacity: 0}
          100%  {opacity: 1}
      }
      @-o-keyframes fadeIn {
          0%    {opacity: 0}
          100%  {opacity: 1}
      }
      @-ms-keyframes fadeIn {
          0%    {opacity: 0}
          100%  {opacity: 1}
      }
      @keyframes fadeOut {
          0%    {opacity: 1}
          100%  {opacity: 0}
      }
      @-webkit-keyframes fadeOut {
          0%    {opacity: 1}
          100%  {opacity: 0}
      }
      @-moz-keyframes fadeOut {
          0%    {opacity: 1}
          100%  {opacity: 0}
      }
      @-o-keyframes fadeOut {
          0%    {opacity: 1}
          100%  {opacity: 0}
      }
      @-ms-keyframes fadeOut {
          0%    {opacity: 1}
          100%  {opacity: 0}
      }
      .toast-style-kk998y{
          position: fixed;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          font-size: 14px;
          line-height: 1;
          padding:10px;
          border-radius: 3px;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          -o-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          z-index: 999999999999999999999999999;
          white-space: nowrap;
      }
      .fadeOut{
          animation: fadeOut .5s;
      }
      .fadeIn{
          animation:fadeIn .5s;
      }
    `);
	  },
	  show: function(params) {
	    let time = params.time;
	    let background = params.background;
	    let color = params.color;
	    let position = params.position;
	    let defaultMarginValue = 50;
	    if (time == void 0 || time == "") {
	      time = 1500;
	    }
	    if (position == void 0 || position == "") {
	      position = "center-bottom";
	    }
	    const el = document.createElement("div");
	    if (background != void 0 && background != "") {
	      el.style.backgroundColor = background;
	    }
	    if (color != void 0 && color != "") {
	      el.style.color = color;
	    }
	    el.setAttribute("class", "toast-style-kk998y");
	    el.innerText = params.message;
	    el.style.zIndex = 999999999;
	    if (position === "center-bottom") {
	      el.style.bottom = defaultMarginValue + "px";
	    } else {
	      el.style.top = defaultMarginValue + "px";
	    }
	    document.body.appendChild(el);
	    el.classList.add("fadeIn");
	    setTimeout(function() {
	      el.classList.remove("fadeIn");
	      el.classList.add("fadeOut");
	      el.addEventListener("animationend", function() {
	        document.body.removeChild(el);
	      });
	      el.addEventListener("webkitAnimationEnd", function() {
	        document.body.removeChild(el);
	      });
	    }, time);
	  }
	};

	const FMT = 7;
	GM_getValue("fmt", FMT);

	const dialog = function() {
	  class Dialog {
	    constructor() {
	      this.mask = document.createElement("div");
	      this.dialogStyle = document.createElement("style");
	      this.setStyle(this.mask, {
	        "width": "100%",
	        "height": "100%",
	        "backgroundColor": "rgba(0, 0, 0, .6)",
	        "position": "fixed",
	        "left": "0px",
	        "top": "0px",
	        "bottom": "0px",
	        "right": "0px",
	        "z-index": "9999999999999"
	      });
	      this.content = document.createElement("div");
	      this.setStyle(this.content, {
	        "max-width": "450px",
	        "width": "100%",
	        "max-height": "600px",
	        "backgroundColor": "#fff",
	        "boxShadow": "0 0 2px #999",
	        "position": "absolute",
	        "left": "50%",
	        "top": "50%",
	        "transform": "translate(-50%,-50%)",
	        "borderRadius": "5px"
	      });
	      this.mask.appendChild(this.content);
	    }
	    middleBox(param) {
	      this.content.innerHTML = "";
	      let title = "";
	      if ({}.toString.call(param) === "[object String]") {
	        title = param;
	      } else if ({}.toString.call(param) === "[object Object]") {
	        title = param.title;
	      }
	      document.body.appendChild(this.mask);
	      this.title = document.createElement("div");
	      this.setStyle(this.title, {
	        "width": "100%",
	        "height": "40px",
	        "lineHeight": "40px",
	        "boxSizing": "border-box",
	        "background-color": "#dedede",
	        "color": "#000",
	        "text-align": "center",
	        "font-weight": "700",
	        "font-size": "17px",
	        "border-radius": "4px 4px 0px 0px"
	      });
	      this.title.innerText = title;
	      this.content.appendChild(this.title);
	      this.closeBtn = document.createElement("div");
	      this.closeBtn.innerText = "×";
	      this.setStyle(this.closeBtn, {
	        "textDecoration": "none",
	        "color": "#000",
	        "position": "absolute",
	        "right": "10px",
	        "top": "0px",
	        "fontSize": "25px",
	        "display": "inline-block",
	        "cursor": "pointer"
	      });
	      this.title.appendChild(this.closeBtn);
	      this.closeBtn.onclick = () => this.close();
	    }
	    showMake(param) {
	      if (param.hasOwnProperty("styleSheet")) {
	        this.dialogStyle.textContent = param.styleSheet;
	      }
	      document.querySelector("head").appendChild(this.dialogStyle);
	      this.middleBox(param);
	      this.dialogContent = document.createElement("div");
	      this.setStyle(this.dialogContent, {
	        "padding": "15px",
	        "max-height": "400px"
	      });
	      this.dialogContent.innerHTML = param.content;
	      this.content.appendChild(this.dialogContent);
	      param.onContentReady(this);
	    }
	    close() {
	      document.body.removeChild(this.mask);
	      document.querySelector("head").removeChild(this.dialogStyle);
	    }
	    setStyle(ele, styleObj) {
	      for (let attr in styleObj) {
	        ele.style[attr] = styleObj[attr];
	      }
	    }
	  }
	  let dialog2 = null;
	  return function() {
	    if (!dialog2) {
	      dialog2 = new Dialog();
	    }
	    return dialog2;
	  }();
	}();

	const GoodsHistroy = {
	  storageKeys: {
	    goodsHistory: "goooods_history_key",
	    offset: "goooods_wrapper_key",
	    maximumRecordsKey: "goooods_max_records_key"
	  },
	  defaultValue: {
	    historyStorage: { "aliexpress": [], "amazon": [], "shein": [], "shopee": [], "lazada": [], "ebay": [] },
	    offsetWrapper: { right: 10, bottom: 0 },
	    records: { min: 10, max: 500, default: 100 },
	    toolbarGoodsNum: 4
	  },
	  push: function(platform, obj) {
	    var _a;
	    try {
	      const storageObj = GM_getValue(this.storageKeys.goodsHistory, this.defaultValue.historyStorage);
	      const maximumRecords = GM_getValue(this.storageKeys.maximumRecordsKey, this.defaultValue.records.default);
	      const histories = (_a = storageObj[platform]) != null ? _a : [];
	      if (histories.length >= maximumRecords) {
	        histories.splice(0, parseInt(maximumRecords / 5));
	      }
	      const newArr = histories.filter((item, index) => item.id != obj.id);
	      newArr.push(obj);
	      storageObj[platform] = newArr;
	      GM_setValue(this.storageKeys.goodsHistory, storageObj);
	    } catch (e) {
	    }
	  },
	  get: function(platform, num = -1) {
	    const storageObj = GM_getValue(this.storageKeys.goodsHistory, this.defaultValue.historyStorage);
	    const histories = storageObj[platform];
	    if (num > 0) {
	      const showHistories = [];
	      for (let i = histories.length - 1; i >= 0; i--) {
	        if (showHistories.length >= num)
	          break;
	        showHistories.push(histories[i]);
	      }
	      return showHistories;
	    }
	    return histories;
	  },
	  remove: function(platform, id) {
	    const storageObj = GM_getValue(this.storageKeys.goodsHistory, this.defaultValue.historyStorage);
	    const histories = storageObj[platform];
	    let newArr = histories.filter((item, index) => item.id != id);
	    storageObj[platform] = newArr;
	    GM_setValue(this.storageKeys.goodsHistory, storageObj);
	  },
	  removeAll: function() {
	    GM_setValue(this.storageKeys.goodsHistory, this.defaultValue.historyStorage);
	    document.querySelector(".peter99032j-xyz-panel-aside-body .goods_____review").innerHTML = "";
	    document.querySelector(".peter99032j-xyz-panel-aside-main .panel-aside-main_____content").innerHTML = "";
	  },
	  removeAllConfirm: function() {
	    if (confirm(selectLanguage().ecommerce.dialog.clearConfirmContent)) {
	      this.removeAll();
	    }
	  },
	  registerMenuCommand: function() {
	    GM_registerMenuCommand(selectLanguage().menuCommand.settings, () => {
	      this.showSettingDialog();
	    });
	  },
	  getGoodsByDateGroup: function(platform) {
	    const histories = this.get(platform).reverse();
	    const group = [];
	    const today = new Date();
	    const yesterday = new Date(today);
	    const format = "dd/MM";
	    yesterday.setDate(today.getDate() - 1);
	    const todayStr = this.dateFormat(today, format);
	    const yesterdayStr = this.dateFormat(yesterday, format);
	    const showDateFormat = (todayStr2, yesterdayStr2, current) => {
	      return current === todayStr2 ? "Today" : current === yesterdayStr2 ? "Yesterday" : current;
	    };
	    let items = [], cacheDateStr = null, currentDateStr = null;
	    for (let i = 0; i < histories.length; i++) {
	      today.setTime(histories[i].date);
	      currentDateStr = this.dateFormat(today, format);
	      if (!!cacheDateStr) {
	        if (cacheDateStr != currentDateStr) {
	          group.push({
	            "str": showDateFormat(todayStr, yesterdayStr, cacheDateStr),
	            "items": items
	          });
	          items = [];
	          cacheDateStr = currentDateStr;
	        }
	      } else {
	        cacheDateStr = currentDateStr;
	      }
	      items.push(histories[i]);
	    }
	    if (items.length != 0) {
	      group.push({
	        "str": showDateFormat(todayStr, yesterdayStr, cacheDateStr),
	        "items": items
	      });
	    }
	    return group;
	  },
	  dateFormat: function(date, format) {
	    var showDate = {
	      "M+": date.getMonth() + 1,
	      "d+": date.getDate(),
	      "h+": date.getHours(),
	      "m+": date.getMinutes(),
	      "s+": date.getSeconds(),
	      "q+": Math.floor((date.getMonth() + 3) / 3),
	      "S+": date.getMilliseconds()
	    };
	    if (/(y+)/i.test(format)) {
	      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    }
	    for (var k in showDate) {
	      if (new RegExp("(" + k + ")").test(format)) {
	        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? showDate[k] : ("00" + showDate[k]).substr(("" + showDate[k]).length));
	      }
	    }
	    return format;
	  },
	  showSettingDialog: function() {
	    const outerId = "dialog_x_" + Tools.randomNumber();
	    const self = this;
	    const { min, max } = this.defaultValue.records;
	    const maximumRecords = GM_getValue(this.storageKeys.maximumRecordsKey, this.defaultValue.records.default);
	    const styleSheet = `
      #` + outerId + `{
        padding:15px;
      }
      #` + outerId + ` .d_____piece{
        margin-bottom:15px;
        font-size:15px;
      }
      #` + outerId + ` .d_____input{
        padding: 5px 10px !important;
        background-color: #fafafa !important;
        color: #000 !important;
        border: 1px solid #ccc !important;
        font-size: 14px !important;
        border-radius: 4px !important;
        width: 80px !important;
        text-align: center !important;
      }
      #` + outerId + ` .d_____btn{
        padding: 3px 10px !important;
        background-color: #edf2fa !important;
        color: #000 !important;
        border-radius: 4px!important;
        font-size: 14px!important;
      }
      #` + outerId + ` .d_____btn:hover{
        background-color: #cdd1da !important;
      }
    `;
	    var tips = selectLanguage().ecommerce.dialog.contentPieceMax;
	    tips = tips.replace("{min}", min);
	    tips = tips.replace("{max}", max);
	    const content = `
      <div id="` + outerId + `">
        <div class="d_____piece">
          ` + tips + `<input class="d_____input" number="number" min="` + min + `" max="` + max + `" step="1"  value="` + maximumRecords + `" name="maximum-records"/>
        </div>
        <div class="d_____piece">
          <p>` + selectLanguage().ecommerce.dialog.contentPieceClear + `</p>
          <button class="d_____btn" name="clear">` + selectLanguage().ecommerce.dialog.contentPieceClearBtn + `</button>
        </div>
      </div>
    `;
	    dialog.showMake({
	      title: selectLanguage().ecommerce.dialog.title,
	      content,
	      styleSheet,
	      onContentReady: function($that) {
	        $that.dialogContent.querySelector("button[name='clear']").addEventListener("click", function() {
	          self.removeAllConfirm();
	        });
	        $that.dialogContent.querySelector("input[name='maximum-records']").onchange = function(e) {
	          const value = this.value;
	          if (value >= min && value <= max) {
	            GM_setValue(self.storageKeys.maximumRecordsKey, value);
	          }
	        };
	      }
	    });
	  },
	  showOrHideHistoryBox: function(platform) {
	    const self = this;
	    const group = this.getGoodsByDateGroup(platform);
	    const contentElement = document.querySelector(".peter99032j-xyz-panel-aside-main .panel-aside-main_____content");
	    contentElement.innerHTML = "";
	    let historiesBoxHtml = "", jumpUrl = "", imgUrl = "";
	    for (let i = 0; i < group.length; i++) {
	      historiesBoxHtml += `<div class="panel-aside-main_____item">`;
	      historiesBoxHtml += `<div class="item_____title"> —— ` + group[i].str + ` —— </div>`;
	      historiesBoxHtml += `<div class="item_____container">`;
	      for (let j = 0; j < group[i].items.length; j++) {
	        jumpUrl = Tools.encryptStr("https://page.mimixiaoke.com/api/product/redirect?url=" + encodeURIComponent(group[i].items[j].url));
	        if (platform == "aliexpress") {
	          imgUrl = group[i].items[j].pic.split("_")[0];
	        } else {
	          imgUrl = group[i].items[j].pic;
	        }
	        historiesBoxHtml += `
          <div class="histories-box-review_item">
            <a title="` + group[i].items[j].title + `" jump-tag="true" href="javascript:void(0);" jump-url="` + jumpUrl + `" target="_blank">
              <div class="review___shadow">
                <div class="delete_____btn" data-id="` + group[i].items[j].id + `">×</div>
              </div>
              <div class="review___img"><img src="` + imgUrl + `" /></div>
              <div class="review___text">` + group[i].items[j].price + `</div>
            </a>
          </div>
        `;
	      }
	      historiesBoxHtml += `</div>`;
	      historiesBoxHtml += `</div>`;
	    }
	    contentElement.innerHTML = historiesBoxHtml;
	    document.querySelectorAll(".peter99032j-xyz-panel-aside-main .delete_____btn").forEach((ele) => {
	      ele.addEventListener("click", function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        const id = this.getAttribute("data-id");
	        this.parentNode.parentNode.parentNode.remove();
	        self.remove(platform, id);
	      });
	    });
	    const items = document.querySelectorAll(".peter99032j-xyz-panel-aside-main .histories-box-review_item > a");
	    items.forEach((ele) => {
	      ele.addEventListener("mouseover", function() {
	        this.querySelector(".review___shadow").style.display = "block";
	      });
	      ele.addEventListener("mouseout", function() {
	        this.querySelector(".review___shadow").style.display = "none";
	      });
	    });
	    document.querySelectorAll(".peter99032j-xyz-panel-aside-main a[jump-tag='true']").forEach((ele) => {
	      ele.addEventListener("click", function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        const href = this.getAttribute("jump-url");
	        Tools.openInTab(Tools.decryptStr(href));
	      });
	    });
	  },
	  createHistoryBox: function(platform) {
	    const wrapperOffset = GM_getValue(this.storageKeys.offset, this.defaultValue.offsetWrapper);
	    let css = `
      .peter99032j-xyz-panel-wrapper{
        position: fixed;
        bottom: ` + wrapperOffset.bottom + `px;
        right: ` + wrapperOffset.right + `px;
        z-index: 999999999;
        box-sizing: border-box;
      }

      .peter99032j-xyz-panel-wrapper svg.icon-svg path{
        fill: #bfbfbf;
      }

      .peter99032j-xyz-panel-wrapper svg.icon-svg:hover path{
        fill: #6a7a9b;
      }

      /*** 历史记录大box ***/
      .peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-main{
        width: 400px;
        height: 400px;
        position: absolute;
        right: 0px;
        bottom: 70px;
        border-radius: 5px;
        border: 1px solid #ebebeb;
        background-color: #fafafa;
        overflow-y: auto;
        overflow-x: hidden;
        background-color:#fafafa;
        display:none;
        -moz-box-shadow:2px 2px 5px #b6bdc5;
        -webkit-box-shadow:2px 2px 5px #b6bdc5;
        box-shadow:2px 2px 5px #b6bdc5;
      }
      .peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-main >.panel-aside-main_____inner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .peter99032j-xyz-panel-aside-main .panel-aside-main_____header{
        display: flex;
        align-items: center;
        flex-direction: row;
        height:40px;
        background: #dedede;
      }
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____header >.header_____title{
        align-items: center;
        display: flex;
        flex: 1;
        margin-left: 15px;
        font-size: 15px;
        font-weight: bold;
      }
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____header >.header_____title >svg{
        margin-right:5px;
      }
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____header >.header_____close,
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____header >.header_____setting{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        width:35px;
      }

      .peter99032j-xyz-panel-aside-main .panel-aside-main_____content{
        flex: 1;
        overflow: auto;
      }

      .peter99032j-xyz-panel-aside-main .panel-aside-main_____item{
        padding: 5px;
        margin:5px 0px;
      }
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____item .item_____title{
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        color: #b6b6b6;
        padding: 5px 0px;
      }
      .peter99032j-xyz-panel-aside-main .panel-aside-main_____item .item_____container{
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        justify-content: flex-start;
      }

      /**** 历史记录展示 ****/
      .peter99032j-xyz-panel-aside-main .histories-box-review_item{
        width:33.3333%;
        margin: 5px 0px;
        overflow: hidden;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item >a{
        display: block !important;
        position: relative !important;
        margin: 0px auto !important;
        background-color: #fff !important;
        width: 110px !important;
        border-radius: 5px !important;
        border: 1px solid #ccc !important;
        box-sizing: content-box !important;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item > a >.review___shadow{
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;
        z-index:99;
        text-align: center;
        border:2px solid red;
        border-radius: 5px;
        display:none;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item > a >.review___shadow .delete_____btn{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 10px;
        background-color:red;
        color:#FFF;
        font-size:13px;
        border-radius:3px;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item > a >.review___img{
        width:110px;
        height: 110px;
        border-radius: 5px 5px 0px 0px;
        overflow: hidden;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item > a >.review___img >img{
        width:100%;
      }
      .peter99032j-xyz-panel-aside-main .histories-box-review_item > a >.review___text{
        text-align: center!important;
        font-size: 13px !important;
        color: #000 !important;
        text-decoration: underline !important;
        padding: 5px!important;
        white-space: nowrap!important;
        overflow: hidden!important;
        text-overflow: ellipsis!important;
      }

      /*** 横向小卡片 ***/
      .peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-body{
        display: flex;
        border-radius:5px;
        overflow: hidden;
        background-color: #fafafa;
        -moz-box-shadow:2px 2px 5px #b6bdc5;
        -webkit-box-shadow:2px 2px 5px #b6bdc5;
        box-shadow:2px 2px 5px #b6bdc5;
        height:60px;
      }
      .peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-body >div{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .peter99032j-xyz-panel-aside-body .goods_____expand{
        cursor: pointer;
        width: 20px !important;
      }

      .peter99032j-xyz-panel-aside-body .goods_____expand svg{
        transition: transform 0.3s;
      }

      /**** goods展示 ****/
      .peter99032j-xyz-panel-aside-body .goods_____review{
        flex-direction: row;
        width:auto;
        transition: all 0.5s ease-in-out;
      }
      .peter99032j-xyz-panel-aside-body .goods-review_____item{
        width:45px;
        height:45px;
        line-height:45px;
        margin:0px 5px;
        position:relative;
        border-radius: 4px;
        overflow: hidden;
        cursor:pointer;
      }
      .peter99032j-xyz-panel-aside-body .goods-review_____item >a{
        display:block;
        width: 100%;
        height: 100%;
      }
      .peter99032j-xyz-panel-aside-body .goods-review_____item > a>.review___shadow{
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;
        z-index:99;
        text-align: center;
        background-color:rgb(61 155 164 / 20%);
        display:none;
      }
      .peter99032j-xyz-panel-aside-body .goods-review_____item > a>.review___shadow img{
        width:15px;
      }
      .peter99032j-xyz-panel-aside-body .goods-review_____item img{
        width:100%;
      }

      /** 展开历史记录BOX **/
      .peter99032j-xyz-panel-aside-body .history-box_____expand{
        flex-direction: column;
        text-align: center;
        margin:0px 10px;
        cursor: pointer;
      }
      .peter99032j-xyz-panel-aside-body .history-box_____expand img{
        width:26px;
      }
      .peter99032j-xyz-panel-aside-body .history-box_____expand label{
        font-size:12px;
        font-weight: bold;
      }

      .peter99032j-xyz-panel-aside-body .wrapper_____drag-handle{
        width: 20px !important;
        cursor: grab;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
      }
    `;
	    const histories = this.get(platform, this.defaultValue.toolbarGoodsNum);
	    const historySVG = `
      <svg t="1722328287419" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14202" width="25" height="25"><path d="M757.9648 948.1216H271.6672c-107.264 0-194.2016-86.9376-194.2016-194.2016V267.6736c0-107.264 86.9376-194.2016 194.2016-194.2016h486.2464c107.264 0 194.2016 86.9376 194.2016 194.2016v486.2464c0.0512 107.264-86.8864 194.2016-194.1504 194.2016z" fill="#F6CC4F" p-id="14203"></path><path d="M823.3472 441.6512c-38.9632-171.5712-210.2784-279.4496-381.8496-240.5376-47.7696 10.8544-91.4944 32.0512-128.9216 62.1568l0.2048-44.3904a25.61024 25.61024 0 0 0-25.4976-25.7024h-0.1024c-14.08 0-25.5488 11.3664-25.6 25.4976l-0.512 111.8208c-0.0512 6.8096 2.6624 13.312 7.424 18.1248 4.7616 4.8128 11.3152 7.5264 18.0736 7.5776l119.296 0.3584h0.1024c14.08 0 25.5488-11.4176 25.6-25.4976a25.61024 25.61024 0 0 0-25.4976-25.7024l-63.7952-0.2048c31.9488-26.2656 69.5296-44.7488 110.6432-54.0672 144.0256-32.7168 287.8976 57.856 320.6144 201.9328 32.7168 144.0768-57.9072 287.8976-201.9328 320.6144-144.128 32.7168-287.8976-57.9072-320.6144-201.9328-4.9152-21.6576-7.168-43.8272-6.656-65.8432a25.6512 25.6512 0 0 0-24.9856-26.2144 25.61536 25.61536 0 0 0-26.2144 24.9856c-0.6144 26.2144 2.048 52.5824 7.8848 78.3872 33.5872 147.9168 165.4784 248.5248 311.1424 248.5248 23.3472 0 47.0016-2.56 70.7072-7.936 171.52-39.0656 279.4496-210.3296 240.4864-381.952z" fill="#F7F8F8" p-id="14204"></path><path d="M512.1536 382.3104c-14.1312 0-25.6 11.4688-25.6 25.6v106.7008c0 6.3488 2.3552 12.4416 6.6048 17.152l91.5968 101.6832c5.0688 5.632 12.032 8.448 19.0464 8.448 6.0928 0 12.2368-2.1504 17.1008-6.6048a25.58976 25.58976 0 0 0 1.8944-36.1472l-85.0432-94.3616V407.9104c0-14.1824-11.4688-25.6-25.6-25.6z" fill="#F7F8F8" p-id="14205"></path></svg>
    `;
	    let goodsHtml = ``, jumpUrl = "";
	    histories.forEach((h) => {
	      jumpUrl = Tools.encryptStr("https://page.mimixiaoke.com/api/product/redirect?url=" + encodeURIComponent(h.url));
	      goodsHtml += `
        <div class="goods-review_____item">
          <a title="` + h.title + `" jump-tag="true" jump-url="` + jumpUrl + `" target="_blank">
            <div class="review___shadow">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVlJREFUWEftlsGRgzAMRS26wBQTUtluKltSDKYLlJUHMY6xZMGFi7lkCObr6cuWAHfzBTfHdw2gOdAcOOXAPM+/fGwB4OGcG7f7iX4R8d113dT3fby3XCYACgwAPxZBBiKYYRh2YOldFUAKjIivNNNlWUZEJEB2ZI9HazUQEUALLgluIH95thpEESCEQCKHbADgyfXNACcAeNEzpVyT9/6Zwx0ApOD/QFFAypKEvfdR74x7XwCaOGevANIpiPXWNm1eji8ATZyzCyGgdhos63gN6eQAorhFmMugOcml3PtJmo3FukpPqO6TdCMfHLBuIKkMiUvFU5RnXwSgP6W9kG6gbQ0tpya0NxvFftsx5JJIVucWWkp4uhHVIMhKajy0jptPtLMwLy634kJm6fSrzqVa4OIpqKlSfdd1HbdRHOufTj9+3zIFLwHUAK88N30PXBG2vtMAmgPNgQ/i7v8h6Um2jAAAAABJRU5ErkJggg==" />
            </div>
            <img src="` + h.pic + `" />
          </a>
        </div>
      `;
	    });
	    let html = `
      <div class="peter99032j-xyz-panel-wrapper">
        <div class="peter99032j-xyz-panel-aside-main">
          <div class="panel-aside-main_____inner">
            <div class="panel-aside-main_____header">
              <div class="header_____title">
                ` + historySVG + `
                ` + selectLanguage().ecommerce.historyToolbar.boxTitle + `
              </div>
              <div class="header_____setting">
                <svg class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width="30" height="30"><path d="M811.04 468.728a39.72 39.72 0 0 0-27.672-30.36l-10.2-2.28a100.872 100.872 0 0 1-68.856-120.24l3.12-9.552a41.592 41.592 0 0 0-11.424-40.368 281.64 281.64 0 0 0-36.816-24.336c-12.36-7.2-25.224-13.536-38.496-18.912a41.592 41.592 0 0 0-41.592 9.984l-7.08 7.488a100.248 100.248 0 0 1-69.264 27.456 100.464 100.464 0 0 1-68.64-27.672l-6.864-7.272a41.592 41.592 0 0 0-41.592-9.984 294.96 294.96 0 0 0-37.848 18.912c-12.696 7.152-24.792 15.288-36.192 24.336a41.592 41.592 0 0 0-10.824 40.368l2.904 9.552a101.088 101.088 0 0 1-10.8 74.064 96.72 96.72 0 0 1-57.408 45.552l-9.792 2.28a35.352 35.352 0 0 0-26.616 28.488c-1.872 14.352-2.64 28.8-2.28 43.272-0.408 14.736 0.36 29.472 2.28 44.088a39.936 39.936 0 0 0 25.8 31.2l9.552 2.304a99 99 0 0 1 57.624 46.992c12.984 22.392 16.848 48.912 10.8 74.064l-2.064 9.36a41.592 41.592 0 0 0 11.856 40.344c11.136 9.072 22.968 17.28 35.352 24.552 12.312 7.488 25.176 14.016 38.496 19.536 14.64 4.608 30.624 0.768 41.592-9.984l6.648-7.272a101.088 101.088 0 0 1 139.152 0l6.672 7.272a41.592 41.592 0 0 0 41.592 9.984 295.152 295.152 0 0 0 37.224-19.536 271.848 271.848 0 0 0 36.624-24.336c10.944-10.32 15.48-25.752 11.856-40.368l-2.928-9.768a100.872 100.872 0 0 1 69.48-120l9.576-2.304a39.72 39.72 0 0 0 27.648-30.36c1.68-14.376 2.232-28.824 1.68-43.272a291.192 291.192 0 0 0-2.304-43.272z m-307.44 190.944a147.672 147.672 0 1 1 0-295.344 147.672 147.672 0 0 1 0 295.344z" fill="#8a8a8a" p-id="1771"></path></svg>
              </div>
              <div class="header_____close">
                <svg class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1609" width="30" height="30"><path d="M673.5644448 281.66826667L512 447.82933333 351.16373333 281.71377813a44.6464 44.6464 0 0 0-63.6700448-0.50062293 46.1027552 46.1027552 0 0 0-0.50062186 64.6712896L447.82933333 512l-160.83626666 165.84248853c-17.52177813 18.06791147-17.29422187 46.8764448 0.50062186 64.6712896a44.69191147 44.69191147 0 0 0 63.71555627-0.45511146L512 576.17066667l161.5644448 165.93351146a44.78293333 44.78293333 0 0 0 63.7155552 0.4096 45.96622187 45.96622187 0 0 0 0.45511147-64.62577813L576.17066667 512l161.5644448-166.16106667a46.01173333 46.01173333 0 0 0-0.45511147-64.62577813 44.73742187 44.73742187 0 0 0-63.7155552 0.45511147z" fill="#5D6E7F" p-id="1610"></path></svg>
              </div>
            </div>
            <div class="panel-aside-main_____content"></div>
          </div>
        </div>
        <div class="peter99032j-xyz-panel-aside-body">
          <div class="goods_____expand">
            <svg focusable="false" class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1365" width="20" height="20"><path d="M317.84959998 926.1056a46.08 46.08 0 0 1 10.8544-29.9008L643.68639998 521.216a13.312 13.312 0 0 0 0-18.432l-3.6864-3.072L328.70399998 127.7952a46.4896 46.4896 0 0 1 71.0656-59.8016l311.0912 370.68799999a105.8816 105.8816 0 0 1 0 146.63680002l-311.0912 370.68799999a46.2848 46.2848 0 0 1-81.92-29.9008z" fill="#bfbfbf" p-id="1366"></path></svg>
          </div>
          <div class="goods_____review">
            ` + goodsHtml + `
          </div>
          <div class="history-box_____expand">
            ` + historySVG + `
            <label>` + selectLanguage().ecommerce.historyToolbar.expandTipText + `</label>
          </div>
          <div class="wrapper_____drag-handle">
            <svg focusable="false" class="icon-svg" viewBox="0 0 24 24" data-testid="DragIndicatorIcon"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" fill="#bfbfbf"></path></svg>
          </div>
        </div>
      </div>
    `;
	    GM_addStyle(css);
	    document.querySelector("body").insertAdjacentHTML("afterend", html);
	    this.addEventListener(platform);
	  },
	  addEventListener: function(platform) {
	    const self = this;
	    const items = document.querySelectorAll(".goods_____review >.goods-review_____item >a");
	    items.forEach((ele) => {
	      ele.addEventListener("mouseover", function() {
	        this.querySelector(".review___shadow").style.display = "block";
	      });
	      ele.addEventListener("mouseout", function() {
	        this.querySelector(".review___shadow").style.display = "none";
	      });
	    });
	    const goodsExpandEle = document.querySelector(".peter99032j-xyz-panel-wrapper .goods_____expand");
	    if (goodsExpandEle) {
	      goodsExpandEle.addEventListener("click", function() {
	        const goodsReviewEle = this.nextElementSibling;
	        const svgEle = this.querySelector("svg");
	        svgEle.style.transition = "transform 0.3s";
	        if (goodsReviewEle.style.width == "0px") {
	          goodsReviewEle.style.width = "auto";
	          svgEle.style.transform = "rotate(0deg)";
	        } else {
	          goodsReviewEle.style.width = "0px";
	          svgEle.style.transform = "rotate(180deg)";
	        }
	      });
	    }
	    const historyBoxExpandEles = [
	      document.querySelector(".peter99032j-xyz-panel-wrapper .history-box_____expand"),
	      document.querySelector(".peter99032j-xyz-panel-wrapper .header_____close")
	    ];
	    const asideMainEle = document.querySelector(".peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-main");
	    if (asideMainEle) {
	      historyBoxExpandEles.forEach((ele) => {
	        if (ele) {
	          ele.addEventListener("click", function() {
	            if (!asideMainEle.style.display || asideMainEle.style.display === "none") {
	              self.showOrHideHistoryBox(platform);
	              asideMainEle.style.display = "block";
	            } else {
	              asideMainEle.style.display = "none";
	            }
	          });
	        }
	      });
	    }
	    document.body.addEventListener("click", function(e) {
	      if (asideMainEle.style.display && asideMainEle.style.display !== "none") {
	        asideMainEle.style.display = "none";
	      }
	    });
	    const headerSettingElement = document.querySelector(".peter99032j-xyz-panel-wrapper .header_____setting");
	    if (headerSettingElement) {
	      headerSettingElement.addEventListener("click", () => {
	        self.showSettingDialog();
	      });
	    }
	    document.querySelectorAll(".peter99032j-xyz-panel-aside-body a[jump-tag='true']").forEach((ele) => {
	      ele.addEventListener("click", function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        const href = this.getAttribute("jump-url");
	        Tools.openInTab(Tools.decryptStr(href));
	      });
	    });
	    const draggable = document.querySelector(".peter99032j-xyz-panel-wrapper .wrapper_____drag-handle");
	    const wrapper = document.querySelector(".peter99032j-xyz-panel-wrapper");
	    let offsetX, offsetY;
	    const padding = 0;
	    const { width, height } = wrapper.getBoundingClientRect();
	    const offsetWrapper = Object.assign({}, this.defaultValue.offsetWrapper);
	    const move = (e) => {
	      const { innerWidth, innerHeight } = window;
	      innerWidth - (e.clientX - offsetX) - width;
	      let y = innerHeight - (e.clientY - offsetY) - height;
	      if (y < padding) {
	        y = padding;
	      } else if (y > innerHeight - height) {
	        y = innerHeight - height - padding;
	      }
	      wrapper.style.bottom = y + "px";
	      offsetWrapper.bottom = y;
	      GM_setValue(this.storageKeys.offset, offsetWrapper);
	    };
	    if (draggable && wrapper) {
	      draggable.addEventListener("mousedown", function(e) {
	        offsetX = e.clientX - wrapper.offsetLeft - 10;
	        offsetY = e.clientY - wrapper.offsetTop - 10;
	        draggable.style.cursor = "grabbing";
	        wrapper.style.userSelect = "none";
	        document.addEventListener("mousemove", move);
	      });
	      document.addEventListener("mouseup", function() {
	        draggable.style.cursor = "grab";
	        wrapper.style.userSelect = "default";
	        document.removeEventListener("mousemove", move);
	      });
	    }
	  },
	  removeAnchor: function() {
	    if (/aliexpress\./.test(window.location.host)) {
	      setInterval(() => {
	        const anchors = document.querySelectorAll("div[class='peter99032j-xyz-panel-wrapper']");
	        anchors.forEach((ele) => {
	          Tools.removeAliexpressAnchors(ele);
	        });
	      }, 1500);
	    }
	  },
	  start: function(platform) {
	    try {
	      if (!/aliexpress\.ru/.test(window.location.host)) {
	        this.createHistoryBox(platform);
	        this.registerMenuCommand();
	      }
	      this.removeAnchor();
	    } catch (e) {
	    }
	  }
	};

	var __async$4 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const Aliexpress = {
	  languageStoageKey: "language-stoage-key",
	  currencyStoageKey: "language-currency-key",
	  baseUrl: "https://oversea.mimixiaoke.com",
	  checkDomInsertRs: true,
	  getLang: function() {
	    const host = window.location.host;
	    let lang = "en";
	    if (/^(us|ko|uk|fr|de|it|ca|au|jp|ja|he|kr|ru|br|in|es|mx|pl|tr|ar|id|th|vn|sg|my|ph|be|nl|se|ch|no|dk|at|ie|fi|pt|gr|hu|cz|bg|ro|ua|il|sa|eg|ir|pk|iq|af|ly|et|gh|ke|ng|za|tz|mg|mw|zm|bw|sn|cm|ci|gh|ma|tn|mr|mu|om|kw|qa|bh|ae|lb|jo|sy|lb|il|ps|kr|cl|pe|uy|ec|ve|bo|gt|pa|hn|ni|cr|sv|gt|sl|lr|sd|er|dj|et|mw|mz|ao|tz|zm|zw|mw|na|bw|ls|mg|km)\.aliexpress\.com$/.test(host)) {
	      lang = host.split(".")[0];
	    } else if (/^www\.aliexpress\.com$/.test(host)) {
	      lang = "en";
	    } else if (/^aliexpress\.ru$/.test(host)) {
	      lang = "ru";
	    }
	    GM_setValue(this.languageStoageKey, lang);
	    return lang;
	  },
	  getCurrency: function() {
	    const host = window.location.host;
	    return new Promise((resolve, reject) => {
	      if (host.indexOf("aliexpress.ru") != -1) {
	        resolve("unknown");
	      } else {
	        const element = document.querySelector("div[class^='ship-to--menuItem--']") || document.querySelector("div[class^='countryFlag--']");
	        if (element) {
	          let currency = element.textContent;
	          if (currency) {
	            currency = encodeURIComponent(currency);
	            GM_setValue(this.currencyStoageKey, currency);
	            resolve(currency);
	          } else {
	            resolve("unknown");
	          }
	        } else {
	          resolve("unknown");
	        }
	      }
	    });
	  },
	  detail: function() {
	    return __async$4(this, null, function* () {
	      const visitUrl = window.location.href;
	      const validate = [/\/item\/[^\/]*?\.html\?/, /\/item\/[^\/]*?\.html$/].map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
	      if (!validate)
	        return;
	      const language = this.getLang();
	      const currency = yield this.getCurrency();
	      const id = Tools.getParamterBySuffix(visitUrl, "html");
	      const url = this.baseUrl + "/api/coupon/query?ids=" + id + "&qu=&p=aliexpress&no=10&v=1.0.1&lang=" + language + "&mul=false&currency=" + currency;
	      const data = yield Tools.crossRequest("GET", url, null);
	      if (data.code == "success" && !!data.result) {
	        const json = JSON.parse(data.result);
	        yield this.detailAnalyze(json, language, currency);
	      }
	      if (!/aliexpress\.ru/.test(window.location.host)) {
	        const priceValueElement = document.querySelector("span.product-price-value, div[class*='ProductPrice_SnowPrice']");
	        const sliderImgElement = document.querySelector("div[class*='slider--img'] >img, picture[class*='Picture__container'] >img");
	        const priceTitleElement = document.querySelector("h1[data-pl='product-title'], h1[class*='HazeProductDescription_HazeProductDescription__smallText_']");
	        if (sliderImgElement) {
	          const imgSrc = sliderImgElement.getAttribute("src");
	          const price = priceValueElement ? priceValueElement.innerText : "Unknown";
	          const title = priceTitleElement ? priceTitleElement.innerText : "--";
	          const goods = { "id": id, "url": visitUrl, "pic": imgSrc, "date": new Date().getTime(), "price": price, "title": title };
	          GoodsHistroy.push("aliexpress", goods);
	        }
	      }
	    });
	  },
	  detailAnalyze: function(json, language, currency) {
	    return __async$4(this, null, function* () {
	      this.checkDomInsertRs = false;
	      try {
	        if (!json)
	          return;
	        let couponResult = null;
	        let qrcodeResult = null;
	        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
	          const { handler, css, html, templateId, distinguish } = json.data;
	          GM_addStyle(css);
	          const element = yield Tools.mustGetElement(handler);
	          logger("info", "coupon insert：element", element);
	          if (element) {
	            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish };
	          }
	        }
	        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
	          const { iden, html, mount, distinguish } = json.mscan;
	          const id = json.id;
	          const promiseResultArray = [];
	          const elementPromise = Tools.mustGetElement(mount);
	          const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&lang=" + language + "&platform=aliexpress&currency=" + currency;
	          logger("info", "coupon change >>>>>>>>>>>>>", reqUrl);
	          const reqPromise = Tools.crossRequest("GET", reqUrl, null);
	          promiseResultArray.push(elementPromise, reqPromise);
	          const allResult = yield Promise.all(promiseResultArray);
	          let element = null, qrcodeData = null;
	          for (let i = 0; i < allResult.length; i++) {
	            if (allResult[i]) {
	              if (allResult[i].hasOwnProperty("code")) {
	                qrcodeData = allResult[i];
	              } else {
	                element = allResult[i];
	              }
	            }
	          }
	          logger("info", "qrcocd insert：element", element);
	          if (element && qrcodeData) {
	            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
	          }
	        }
	        Tools.loopTask(() => {
	          if (couponResult) {
	            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
	              this.detailCouponAnalyze(couponResult);
	            });
	          }
	          if (qrcodeResult) {
	            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
	              this.detailMscanAnalyze(qrcodeResult);
	            });
	          }
	        });
	      } catch (error) {
	      } finally {
	        this.checkDomInsertRs = true;
	      }
	    });
	  },
	  detailCouponAnalyze: function(result) {
	    const { element, html, templateId } = result;
	    element.insertAdjacentHTML("afterend", html);
	    const templateIdEle = document.querySelector("div[id='" + templateId + "']");
	    if (templateIdEle) {
	      const couponCodeElement = templateIdEle.querySelector(".coupon-code");
	      const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
	      templateIdEle.addEventListener("click", () => {
	        GM_setClipboard(promoCode, "txt", () => {
	          Toast.show({ "message": selectLanguage().ecommerce.operat.copied, "background": "#D3031C" });
	        });
	      });
	    }
	  },
	  detailMscanAnalyze: function(result) {
	    const { element, html, qrcodeData, iden } = result;
	    element.insertAdjacentHTML("afterend", html);
	    if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
	      const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
	      if (!!mscanImg) {
	        const canvasElement = document.getElementById("mscan" + iden);
	        if (canvasElement) {
	          var cxt = canvasElement.getContext("2d");
	          var imgData = new Image();
	          imgData.src = mscanImg;
	          imgData.onload = function() {
	            cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
	          };
	        }
	      }
	    }
	  },
	  trade: function() {
	    return __async$4(this, null, function* () {
	      const visitUrl = window.location.href;
	      const validate = [
	        /\/trade\/confirm\.html/,
	        /\/checkout\?/
	      ].map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
	      if (!validate)
	        return;
	      const language = yield GM_getValue(this.languageStoageKey, navigator.language);
	      const currency = yield GM_getValue(this.currencyStoageKey, "USD");
	      const ids = Tools.getParamterBySearch(window.location.search, "objectId") || Tools.getParamterBySearch(window.location.search, "availableProductShopcartIds") || Tools.getParamterBySearch(window.location.search, "itemId");
	      const confirmUrl = this.baseUrl + "/api/coupon/query?ids=" + ids + "&qu=&p=aliexpress&no=10&v=1.0.1&lang=" + language + "&mul=true&currency=" + currency;
	      const res = yield Tools.crossRequest("GET", confirmUrl, null);
	      if (res.code == "success" && !!res.result) {
	        const json = JSON.parse(res.result);
	        yield this.tradeAnalyze(json, language);
	      }
	    });
	  },
	  tradeAnalyze: function(json, language) {
	    return __async$4(this, null, function* () {
	      if (!json || !json.handler || !json.css || !json.templateId) {
	        return;
	      }
	      const { handler, css, html, templateId, distinguish } = json;
	      GM_addStyle(css);
	      let element = yield Tools.mustGetElement(handler);
	      Tools.loopTask(() => {
	        if (!element) {
	          return;
	        }
	        Tools.distinguishRemoveAndTry(distinguish, () => {
	          element.insertAdjacentHTML("afterend", html);
	          const templateIdEle = document.querySelector("#" + templateId + ">.item");
	          if (templateIdEle) {
	            const promoCode = Tools.decryptStr(templateIdEle.querySelector(".copy").getAttribute("data-encryptcode"));
	            templateIdEle.addEventListener("click", () => {
	              GM_setClipboard(promoCode, "txt", () => {
	                Toast.show({ "message": selectLanguage().ecommerce.operat.copied, "background": "#D3031C" });
	              });
	            });
	            const arrowElement = document.querySelector(".pl-summary__item-arrow-pc");
	            if (arrowElement) {
	              arrowElement.click();
	            }
	          }
	        });
	      });
	    });
	  },
	  isRun: function() {
	    return window.location.host.indexOf("aliexpress.") != -1;
	  },
	  removeAnchor: function() {
	    Tools.loopTask(() => {
	      const anchors = document.querySelectorAll("div[name^='ali-gogo-coupon-']");
	      anchors.forEach((ele) => Tools.removeAliexpressAnchors(ele));
	    }, 2500);
	  },
	  start: function() {
	    return __async$4(this, null, function* () {
	      if (this.isRun()) {
	        this.detail();
	        this.trade();
	        this.removeAnchor();
	      }
	    });
	  }
	};

	const ItemSearchBaseObj = {
	  visitUrl: window.location.href,
	  searchAttribute: "loop-task-i9v---search",
	  baseUrl: "https://oversea.mimixiaoke.com",
	  cacheRequestMap: {},
	  requestAndSaveSate: function(method, url, param) {
	    return new Promise((resolve, reject) => {
	      const key = "key_" + new Date().getTime();
	      const xhr = new XMLHttpRequest();
	      this.cacheRequestMap[key] = xhr;
	      if (method === "GET") {
	        let queryString = "";
	        if (param) {
	          const params = new URLSearchParams(param);
	          queryString = "?" + params.toString();
	        }
	        xhr.open(method, url + queryString);
	        xhr.send();
	      } else if (method === "POST") {
	        xhr.open(method, url);
	        xhr.setRequestHeader("Content - Type", "application/json");
	        xhr.send(JSON.stringify(param));
	      } else {
	        resolve({ "code": "error", "requestKey": key, "result": null });
	        return;
	      }
	      xhr.onreadystatechange = function() {
	        if (xhr.readyState === 4) {
	          if (xhr.status >= 200 && xhr.status < 300) {
	            try {
	              resolve({ "code": "success", "requestKey": key, "result": xhr.responseText });
	            } catch (e) {
	              resolve({ "code": "error", "requestKey": key, "result": null });
	            }
	          } else {
	            resolve({ "code": "error", "requestKey": key, "result": null });
	          }
	        }
	      };
	    });
	  },
	  requestConf: function() {
	    return new Promise((resolve, reject) => {
	      Tools.crossRequest("GET", this.baseUrl + "/api/load/conf", null).then((data) => {
	        if (data.code == "success" && !!data.result) {
	          resolve(data.result);
	        } else {
	          resolve(null);
	        }
	      });
	    });
	  },
	  pickupGoodsItem: function(platform, confString) {
	    const visitHref = window.location.href;
	    const selectorElementList = new Array();
	    let confFilter = confString;
	    try {
	      confFilter = confFilter.replace(/\\\\/g, "\\");
	    } catch (e) {
	    }
	    const confJson = JSON.parse(confFilter)[platform];
	    for (let i = 0; i < confJson.length; i++) {
	      const itemJson = confJson[i];
	      if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
	        continue;
	      }
	      const { elements, matches } = itemJson;
	      const isMatch = matches.map((reg) => new RegExp(reg, "i").test(visitHref)).some((res) => res);
	      if (isMatch) {
	        for (let j = 0; j < elements.length; j++) {
	          selectorElementList.push({
	            "element": elements[j]["element"],
	            "findA": elements[j]["findA"],
	            "page": elements[j]["page"]
	          });
	        }
	      }
	    }
	    return selectorElementList;
	  },
	  getGoodsLinkByElement: function(element, findTag) {
	    let searchElement = null;
	    if (findTag == "this") {
	      searchElement = element;
	    } else if (/^child@/.test(findTag)) {
	      searchElement = element.querySelector(findTag.replace(/^child@/, ""));
	    }
	    return searchElement;
	  },
	  isElementDisplayed: function(element) {
	    if (element.offsetParent !== null) {
	      return true;
	    }
	    const style = window.getComputedStyle(element);
	    return style.display !== "none";
	  },
	  getGoodsIdByUrl: function(href) {
	    if (!href)
	      return null;
	    href = href.indexOf("http") == -1 ? location.protocol + href : href;
	    const id = Tools.getParamterBySuffix(href, "html");
	    return id;
	  },
	  calcRequestGroup: function(array) {
	    const itemsPerGroup = 8, len = array.length;
	    let groups = [];
	    for (let i = 0; i < len; i++) {
	      const groupIndex = Math.floor(i / itemsPerGroup);
	      if (!groups[groupIndex]) {
	        groups[groupIndex] = [];
	      }
	      groups[groupIndex].push(array[i]);
	    }
	    return groups;
	  }
	};

	var __async$3 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const AliexpressSearch = {
	  loopIsComplete: true,
	  currentPlatform: "aliexpress",
	  isInbusinessPage: function() {
	    return /inbusiness\.aliexpress\.com\/web\/search-products/.test(ItemSearchBaseObj.visitUrl);
	  },
	  isItemLink: function(url) {
	    return /aliexpress/.test(url) && /\/item\/[^\/]*?\.html/.test(url);
	  },
	  pickUpWholesale: function(selectors, language, currency) {
	    return __async$3(this, null, function* () {
	      const items = [];
	      try {
	        selectors.forEach((elementObj) => {
	          if (elementObj.element) {
	            const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
	            logger("info", "search coupon elements======>", elements.length);
	            const findA = elementObj.findA;
	            elements.forEach((element) => {
	              if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	                const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
	                let id = null;
	                if (this.isItemLink(goodsLink)) {
	                  id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLink.getAttribute("href"));
	                }
	                if (id) {
	                  items.push({
	                    "id": id,
	                    "platform": this.currentPlatform,
	                    "handler": element,
	                    "findA": findA,
	                    "from": "wholesale"
	                  });
	                }
	              }
	            });
	          }
	        });
	        if (items.length > 0) {
	          yield this.search(items, language, currency);
	        }
	      } catch (e) {
	      }
	    });
	  },
	  pickUpInbusiness: function(language, currency) {
	    return __async$3(this, null, function* () {
	      const validate = this.isInbusinessPage();
	      if (!validate)
	        return;
	      try {
	        const iceContainerElement = document.querySelector("#ice-container");
	        const loadMoreElement = yield Tools.waitForElementByInterval("#loadMore", iceContainerElement);
	        if (loadMoreElement) {
	          const array = new Array();
	          const containerElement = loadMoreElement.previousElementSibling;
	          if (containerElement && containerElement.tagName === "DIV") {
	            const childNodes = containerElement.childNodes;
	            childNodes.forEach((child) => {
	              if (child.tagName === "A" && ItemSearchBaseObj.isElementDisplayed(child) && !child.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	                const id = ItemSearchBaseObj.getGoodsIdByUrl(child.getAttribute("href"));
	                if (id) {
	                  array.push({
	                    "id": id,
	                    "platform": this.currentPlatform,
	                    "handler": child,
	                    "from": "inbusiness"
	                  });
	                }
	              }
	            });
	          }
	          yield this.search(array, language, currency);
	        }
	      } catch (e) {
	      }
	    });
	  },
	  search: function(array, language, currency) {
	    const groups = ItemSearchBaseObj.calcRequestGroup(array);
	    const len = groups.length;
	    return new Promise((resolve, reject) => {
	      if (len <= 0) {
	        resolve("complete");
	        return;
	      }
	      const promises = [];
	      for (let i = 0; i < groups.length; i++) {
	        promises.push(this.createItemHtml(groups[i], language, currency));
	      }
	      Promise.all(promises).then((data) => {
	        resolve("complete");
	      });
	    });
	  },
	  createItemHtml: function(group, language, currency) {
	    return new Promise((resolve, reject) => {
	      try {
	        if (Array.isArray(group) && group.length === 0) {
	          resolve("exception");
	          return;
	        }
	        let reqId = "";
	        const platform = group[0].platform;
	        for (var i = 0; i < group.length; i++) {
	          if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	            continue;
	          }
	          reqId += group[i].id + ",";
	        }
	        if (reqId.endsWith(",")) {
	          reqId = reqId.slice(0, -1);
	        }
	        logger("info", "request start >>>>>>>>>>>>>", group);
	        const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&lang=" + language + "&no=10&v=1.0.1&currency=" + currency;
	        logger("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
	        ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
	          logger("info", "request finish >>>>>>>>>>>>>");
	          delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
	          if (data.code != "success" || !data.result) {
	            resolve("exception");
	            return;
	          }
	          const json = JSON.parse(data.result);
	          logger("info", "json", json);
	          let isBroken = false;
	          for (let key in json) {
	            const { encryptLink, tip } = json[key];
	            const { handler, findA } = group.find((obj) => obj.id === key);
	            let decryptUrl = null;
	            if (encryptLink) {
	              try {
	                const decryptLink = atob(encryptLink);
	                decryptUrl = decryptLink.split("").reverse().join("");
	              } catch (e) {
	              }
	            }
	            const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
	            const currentId = elementA ? ItemSearchBaseObj.getGoodsIdByUrl(elementA.getAttribute("href")) : "";
	            if (currentId != key) {
	              group.forEach((gItem) => {
	                const ele = gItem.handler;
	                ele.removeAttribute(ItemSearchBaseObj.searchAttribute);
	                const tipElement = ele.querySelector("div[name^='ali-gogo-coupon-']");
	                if (tipElement) {
	                  tipElement.remove();
	                }
	              });
	              logger("info", "exception currentGoodsId != request id");
	              isBroken = true;
	              break;
	            } else {
	              if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	                handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
	                if (tip) {
	                  handler.style.position = "relative";
	                  handler.insertAdjacentHTML("beforeend", tip);
	                  logger("info", "exist coupon >>>>>>>>>>>>>", key);
	                }
	                if (decryptUrl) {
	                  this.relativeJ(handler, decryptUrl);
	                  logger("info", "good job >>>>>>>>>>>>>", key);
	                }
	              }
	            }
	          }
	          resolve(isBroken ? "broken" : "complete");
	        });
	      } catch (e) {
	        resolve("exception");
	      }
	    });
	  },
	  relativeJ: function(handler, decryptUrl) {
	    const clickTipAttribute = "tip-vjd1jd89fcv-i";
	    let elements = null;
	    if (handler.tagName == "A") {
	      elements = [handler];
	    } else {
	      elements = handler.querySelectorAll("a");
	    }
	    elements.forEach((elementA) => {
	      const href = elementA.getAttribute("href");
	      if (this.isItemLink(href)) {
	        if (elementA.getAttribute(clickTipAttribute)) {
	          return;
	        }
	        elementA.setAttribute(clickTipAttribute, "true");
	        elementA.addEventListener("click", function(e) {
	          let isPreventDefault = true;
	          const target = e.target;
	          const tagName = target.tagName.toUpperCase();
	          if (tagName == "A") {
	            const href2 = target.getAttribute("href");
	            if (!this.isItemLink(href2)) {
	              isPreventDefault = false;
	            }
	          }
	          if (isPreventDefault) {
	            Array.from(target.classList).forEach((className) => {
	              const iscontains = ["icon", "-btn-"].map((name) => className.indexOf(name) != -1).some((result) => result);
	              if (iscontains) {
	                isPreventDefault = false;
	              }
	            });
	          }
	          if (isPreventDefault) {
	            e.preventDefault();
	            e.stopPropagation();
	            Tools.openInTab(decryptUrl);
	          }
	        });
	      }
	    });
	  },
	  isRun: function() {
	    let run = false;
	    if (window.location.host.indexOf("aliexpress.") != -1) {
	      run = !/\/(item|trade|checkout)\//.test(window.location.pathname);
	    }
	    return run;
	  },
	  start: function() {
	    return __async$3(this, null, function* () {
	      if (!this.isRun())
	        return;
	      let removeTagIsComplete = true;
	      const language = Aliexpress.getLang();
	      const currency = yield Aliexpress.getCurrency();
	      const confString = yield ItemSearchBaseObj.requestConf();
	      if (!confString) {
	        return;
	      }
	      const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
	      setInterval(() => __async$3(this, null, function* () {
	        if (removeTagIsComplete && this.loopIsComplete) {
	          this.loopIsComplete = false;
	          yield this.pickUpInbusiness(language, currency);
	          yield this.pickUpWholesale(selectors, language, currency);
	          this.loopIsComplete = true;
	        }
	      }), 1700);
	      if (selectors.length != 0 && window.location.pathname != "/") {
	        let oldUrl = window.location.href;
	        setInterval(() => {
	          if (oldUrl != window.location.href && removeTagIsComplete) {
	            removeTagIsComplete = false;
	            Object.keys(ItemSearchBaseObj.cacheRequestMap).forEach((key) => {
	              ItemSearchBaseObj.cacheRequestMap[key].abort();
	            });
	            ItemSearchBaseObj.cacheRequestMap = {};
	            document.querySelectorAll("*[" + ItemSearchBaseObj.searchAttribute + "='true']").forEach((element) => {
	              const tipElement = element.querySelector("*[name^='ali-gogo-coupon-']");
	              if (tipElement) {
	                tipElement.remove();
	              }
	            });
	            oldUrl = window.location.href;
	          }
	          removeTagIsComplete = true;
	        }, 777);
	        const promises = [];
	        selectors.forEach((selector) => {
	          promises.push(Tools.waitForElementByInterval(selector.element, document.body, true, 50, 3e3));
	        });
	        const observerElement = yield Promise.race(promises);
	        if (observerElement) {
	          const observer = new MutationObserver((mutationsList) => {
	            if (mutationsList.length == 1) {
	              const mutation = mutationsList[0];
	              if (mutation.type === "attributes" && mutation.attributeName === "href") {
	                if (removeTagIsComplete) {
	                  removeTagIsComplete = false;
	                  document.querySelectorAll("*[" + ItemSearchBaseObj.searchAttribute + "='true']").forEach((element) => {
	                    element.removeAttribute(ItemSearchBaseObj.searchAttribute);
	                    const tipElement = element.querySelector("*[name^='ali-gogo-coupon-']");
	                    if (tipElement) {
	                      tipElement.remove();
	                    }
	                  });
	                  removeTagIsComplete = true;
	                }
	              }
	            }
	          });
	          observer.observe(observerElement, { attributes: true });
	        }
	      }
	    });
	  }
	};

	var __async$2 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const Ebay = {
	  baseUrl: "https://oversea.mimixiaoke.com",
	  getGoodsId: function(url) {
	    const regex = /https?:\/\/www\.ebay\.[a-z.]+\/itm\/(\d+)/;
	    const match = url.match(regex);
	    return match ? match[1] : null;
	  },
	  isDetail: function() {
	    const visitUrl = window.location.href;
	    return [/https?:\/\/www\.ebay\.[a-z.]+\/itm\/\d+/].map((rs) => rs.test(visitUrl)).some((rs) => rs);
	  },
	  getMarketplace: function(url) {
	    try {
	      const urlObj = new URL(url);
	      const hostname = urlObj.hostname;
	      const topLevelDomainMatch = hostname.match(/ebay\.(\w{2,3})$/);
	      return topLevelDomainMatch ? topLevelDomainMatch[1] : null;
	    } catch (error) {
	    }
	    return null;
	  },
	  detail: function() {
	    return __async$2(this, null, function* () {
	      const validate = this.isDetail();
	      if (!validate)
	        return;
	      const visitUrl = window.location.href;
	      const id = this.getGoodsId(visitUrl);
	      if (!id) {
	        return;
	      }
	      const titleElement = document.querySelector(".x-item-title__mainTitle");
	      const priceElement = document.querySelector(".x-price-primary >span");
	      const imgElement = document.querySelector(".ux-image-grid-item >img") || document.querySelector(".ux-image-carousel-item >img");
	      if (imgElement) {
	        const imgSrc = imgElement.getAttribute("src");
	        const title = titleElement ? titleElement.innerText : "--";
	        const price = priceElement ? priceElement.innerText : "Unknown";
	        const goods = { "id": id, "url": visitUrl, "pic": imgSrc, "date": new Date().getTime(), "price": price, "title": title };
	        GoodsHistroy.push("ebay", goods);
	      }
	      const marketplace = this.getMarketplace(visitUrl);
	      const url = this.baseUrl + "/api/coupon/query?ids=" + id + "&qu=&p=ebay&no=10&v=1.0.1&marketplace=" + marketplace + "&mul=false";
	      const data = yield Tools.crossRequest("GET", url, null);
	      if (data.code == "success" && !!data.result) {
	        const json = JSON.parse(data.result);
	        yield this.detailAnalyze(json, marketplace);
	      }
	    });
	  },
	  detailAnalyze: function(json, marketplace) {
	    return __async$2(this, null, function* () {
	      let couponResult = null;
	      let qrcodeResult = null;
	      if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
	        const { handler, css, html, templateId, distinguish } = json.data;
	        GM_addStyle(css);
	        const element = yield Tools.mustGetElement(handler);
	        if (element) {
	          couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish };
	        }
	      }
	      if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
	        const { iden, html, mount, distinguish } = json.mscan;
	        const id = json.id;
	        const promiseResultArray = [];
	        const elementPromise = Tools.mustGetElement(mount);
	        const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&marketplace=" + marketplace + "&platform=ebay";
	        const reqPromise = Tools.crossRequest("GET", reqUrl, null);
	        promiseResultArray.push(elementPromise, reqPromise);
	        const allResult = yield Promise.all(promiseResultArray);
	        let element = null, qrcodeData = null;
	        for (let i = 0; i < allResult.length; i++) {
	          if (allResult[i]) {
	            if (allResult[i].hasOwnProperty("code")) {
	              qrcodeData = allResult[i];
	            } else {
	              element = allResult[i];
	            }
	          }
	        }
	        if (element && qrcodeData) {
	          qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
	        }
	      }
	      Tools.loopTask(() => {
	        if (couponResult) {
	          Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
	            this.detailCouponAnalyze(couponResult);
	          });
	        }
	        if (qrcodeResult) {
	          Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
	            this.detailMscanAnalyze(qrcodeResult);
	          });
	        }
	      });
	    });
	  },
	  detailCouponAnalyze: function(result) {
	    const { element, html, templateId } = result;
	    element.insertAdjacentHTML("afterend", html);
	    const templateIdEle = document.querySelector("div[id='" + templateId + "']");
	    if (templateIdEle) {
	      const couponCodeElement = templateIdEle.querySelector(".coupon-code");
	      const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
	      templateIdEle.addEventListener("click", () => {
	        GM_setClipboard(promoCode, "txt", () => {
	          Toast.show({ "message": selectLanguage().ecommerce.operat.copied, "background": "#D3031C" });
	        });
	      });
	    }
	  },
	  detailMscanAnalyze: function(result) {
	    const { element, html, qrcodeData, iden } = result;
	    element.insertAdjacentHTML("afterend", html);
	    if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
	      const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
	      if (!!mscanImg) {
	        const canvasElement = document.getElementById("mscan" + iden);
	        if (canvasElement) {
	          var cxt = canvasElement.getContext("2d");
	          var imgData = new Image();
	          imgData.src = mscanImg;
	          imgData.onload = function() {
	            cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
	          };
	        }
	      }
	    }
	  },
	  start: function() {
	    return __async$2(this, null, function* () {
	      this.detail();
	    });
	  }
	};

	var __async$1 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const EbaySearch = {
	  loopIsComplete: true,
	  currentPlatform: "ebay",
	  isRun: function() {
	    let run = false;
	    if (window.location.host.indexOf("ebay.") != -1) {
	      run = !/\/(item|trade|checkout|rxo)\//.test(window.location.pathname);
	    }
	    return run;
	  },
	  isItemLink: function(url) {
	    return /ebay/.test(url) && /\/itm\/[^\/]*?/.test(url);
	  },
	  pickUpItems: function(selectors, marketplace) {
	    return __async$1(this, null, function* () {
	      const items = [];
	      try {
	        selectors.forEach((elementObj) => {
	          if (elementObj.element) {
	            const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
	            logger("info", "search coupon elements======>", elements);
	            const findA = elementObj.findA;
	            elements.forEach((element) => {
	              if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	                const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
	                let id = null;
	                if (this.isItemLink(goodsLink)) {
	                  id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLink.getAttribute("href"));
	                }
	                if (id) {
	                  items.push({
	                    "id": id,
	                    "platform": this.currentPlatform,
	                    "handler": element,
	                    "findA": findA,
	                    "from": "search"
	                  });
	                }
	              }
	            });
	          }
	        });
	        if (items.length > 0) {
	          yield this.search(items, marketplace);
	        }
	      } catch (e) {
	      }
	    });
	  },
	  search: function(array, marketplace) {
	    return __async$1(this, null, function* () {
	      const groups = ItemSearchBaseObj.calcRequestGroup(array);
	      const len = groups.length;
	      return new Promise((resolve, reject) => {
	        if (len <= 0) {
	          resolve("complete");
	          return;
	        }
	        const promises = [];
	        for (let i = 0; i < groups.length; i++) {
	          promises.push(this.createItemHtml(groups[i], marketplace));
	        }
	        Promise.all(promises).then((data) => {
	          resolve("complete");
	        });
	      });
	    });
	  },
	  createItemHtml: function(group, marketplace) {
	    return new Promise((resolve, reject) => {
	      try {
	        if (Array.isArray(group) && group.length === 0) {
	          resolve("exception");
	          return;
	        }
	        let reqId = "";
	        const platform = group[0].platform;
	        for (var i = 0; i < group.length; i++) {
	          if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	            continue;
	          }
	          reqId += group[i].id + ",";
	        }
	        if (reqId.endsWith(",")) {
	          reqId = reqId.slice(0, -1);
	        }
	        logger("info", "request start >>>>>>>>>>>>>", group);
	        const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=10&v=1.0.1";
	        logger("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
	        ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
	          logger("info", "request finish >>>>>>>>>>>>>", data);
	          delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
	          if (data.code != "success" || !data.result) {
	            resolve("exception");
	            return;
	          }
	          const json = JSON.parse(data.result);
	          for (let key in json) {
	            const { encryptLink, tip } = json[key];
	            const { handler, findA } = group.find((obj) => obj.id === key);
	            let decryptUrl = null;
	            if (encryptLink) {
	              try {
	                const decryptLink = atob(encryptLink);
	                decryptUrl = decryptLink.split("").reverse().join("");
	              } catch (e) {
	              }
	            }
	            const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
	            if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
	              handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
	              if (tip) {
	                handler.style.position = "relative";
	                handler.insertAdjacentHTML("beforeend", tip);
	                logger("info", "exist coupon >>>>>>>>>>>>>", key);
	              }
	              if (decryptUrl) {
	                this.relativeJ(handler, decryptUrl);
	                logger("info", "good job >>>>>>>>>>>>>", key);
	              }
	            }
	          }
	          resolve("complete");
	        });
	      } catch (e) {
	        resolve("exception");
	      }
	    });
	  },
	  relativeJ: function(handler, decryptUrl) {
	    const clickTipAttribute = "tip-vjd1jd89fcv-i";
	    let elements = null;
	    if (handler.tagName == "A") {
	      elements = [handler];
	    } else {
	      elements = handler.querySelectorAll("a");
	    }
	    elements.forEach((elementA) => {
	      const href = elementA.getAttribute("href");
	      if (this.isItemLink(href)) {
	        if (elementA.getAttribute(clickTipAttribute)) {
	          return;
	        }
	        elementA.setAttribute(clickTipAttribute, "true");
	        elementA.addEventListener("click", function(e) {
	          let isPreventDefault = true;
	          const target = e.target;
	          const tagName = target.tagName.toUpperCase();
	          if (tagName == "A") {
	            const href2 = target.getAttribute("href");
	            if (!this.isItemLink(href2)) {
	              isPreventDefault = false;
	            }
	          }
	          if (isPreventDefault) {
	            Array.from(target.classList).forEach((className) => {
	              const iscontains = ["btn", "icon"].map((name) => className.indexOf(name) != -1).some((result) => result);
	              if (iscontains) {
	                isPreventDefault = false;
	              }
	            });
	          }
	          if (isPreventDefault) {
	            e.preventDefault();
	            e.stopPropagation();
	            Tools.openInTab(decryptUrl);
	          }
	        });
	      }
	    });
	  },
	  start: function() {
	    return __async$1(this, null, function* () {
	      if (!this.isRun())
	        return;
	      const marketplace = Ebay.getMarketplace(window.location.href);
	      const confString = yield ItemSearchBaseObj.requestConf();
	      if (!confString) {
	        return;
	      }
	      const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
	      setInterval(() => __async$1(this, null, function* () {
	        if (this.loopIsComplete) {
	          this.loopIsComplete = false;
	          yield this.pickUpItems(selectors, marketplace);
	          this.loopIsComplete = true;
	        }
	      }), 1700);
	    });
	  }
	};

	var __async = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const Lazada = {
	  baseUrl: "https://oversea.mimixiaoke.com",
	  visitUrl: window.location.href,
	  getMarketplace: function(url) {
	    try {
	      const domainParts = new URL(url).hostname.split(".");
	      const countryCode = domainParts[domainParts.length - 1];
	      return countryCode;
	    } catch (error) {
	      console.log(error);
	    }
	    return null;
	  },
	  detailMyMscanAnalyze: function(result) {
	    return __async(this, null, function* () {
	      const { id, iden, marketplace, platform, mount, html, cmd } = result;
	      if (!mount || !html) {
	        return;
	      }
	      if (cmd && cmd.do && cmd.ele) {
	        const cmdElement = yield Tools.waitForElementByInterval(cmd.ele);
	        if (cmdElement) {
	          if (cmd.do == "empty") {
	            cmdElement.innerHTML = "";
	          }
	        }
	      }
	      const element = yield Tools.mustGetElement(mount);
	      if (!element) {
	        return;
	      }
	      element.insertAdjacentHTML("beforeend", html);
	      const reqImageUrl = this.baseUrl + "/api/coupon/change?id={id}&marketplace={marketplace}&platform={platform}".replace("{id}", id).replace("{marketplace}", marketplace).replace("{platform}", platform);
	      const qrcodeData = yield Tools.crossRequest("GET", reqImageUrl, null);
	      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
	        let mscanImg = JSON.parse(qrcodeData.result).mscanImg;
	        if (!!mscanImg) {
	          var canvasElement = document.getElementById("mscan" + iden);
	          if (!!canvasElement) {
	            var cxt = canvasElement.getContext("2d");
	            var imgData = new Image();
	            imgData.src = mscanImg;
	            imgData.onload = function() {
	              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
	            };
	          }
	        }
	      }
	    });
	  },
	  detailMy: function() {
	    return __async(this, null, function* () {
	      if (!this.isMy()) {
	        return;
	      }
	      const marketplace = "my", platform = "lazada";
	      const ids = Tools.getParamterBySuffix(this.visitUrl);
	      if (!ids) {
	        return;
	      }
	      const reqUrl = this.baseUrl + "/api/coupon/query?ids=" + ids + "&qu=&p=" + platform + "&no=10&v=1.0.1&marketplace=" + marketplace + "&mul=false";
	      const data = yield Tools.crossRequest("GET", reqUrl, null);
	      if (!!data && data.code === "success" && !!data.result) {
	        const json = JSON.parse(data.result);
	        if (json && json.mscan) {
	          const { distinguish, iden, html, cmd, mount } = json.mscan;
	          const mscanResult = {
	            "id": json.id,
	            "iden": iden,
	            "marketplace": marketplace,
	            "platform": platform,
	            "mount": mount,
	            "html": html,
	            "cmd": cmd
	          };
	          Tools.loopTask(() => {
	            Tools.distinguishRemoveAndTry(distinguish, () => {
	              this.detailMyMscanAnalyze(mscanResult);
	            });
	          });
	        }
	      }
	      const titleElement = document.querySelector(".pdp-mod-product-badge-title");
	      const priceElement = yield Tools.waitForElementByInterval(".pdp-product-price >span", document.body, false);
	      const imgElement = document.querySelector(".gallery-preview-panel__content >img:last-child");
	      if (imgElement && priceElement) {
	        const imgSrc = imgElement.getAttribute("src");
	        const title = titleElement ? titleElement.innerText : "--";
	        const price = priceElement ? priceElement.innerText : "Unknown";
	        const goods = { "id": ids, "url": this.visitUrl, "pic": imgSrc, "date": new Date().getTime(), "price": price, "title": title };
	        GoodsHistroy.push("lazada", goods);
	      }
	    });
	  },
	  isMy: function() {
	    return /https:\/\/www\.lazada\.com\.my\/products\/[a-zA-Z0-9\-]+-i\d+-s\d+\.html.*/.test(this.visitUrl);
	  },
	  start: function() {
	    return __async(this, null, function* () {
	      this.detailMy();
	    });
	  }
	};

	const EcommerceModules = {
	  GoodsHistroy,
	  Aliexpress: {
	    Aliexpress,
	    AliexpressSearch
	  },
	  Ebay: {
	    Ebay,
	    EbaySearch
	  },
	  Lazada
	};

	const Init = {
	  aliexpress: function() {
	    EcommerceModules.Aliexpress.Aliexpress.start();
	    EcommerceModules.Aliexpress.AliexpressSearch.start();
	    EcommerceModules.GoodsHistroy.start("aliexpress");
	  },
	  ebay: function() {
	    EcommerceModules.Ebay.Ebay.start();
	    EcommerceModules.Ebay.EbaySearch.start();
	    EcommerceModules.GoodsHistroy.start("ebay");
	  },
	  lazada: function() {
	    EcommerceModules.GoodsHistroy.start("lazada");
	    EcommerceModules.Lazada.start();
	  },
	  unknown: function() {
	  },
	  start: function() {
	    Toast.initStyle();
	    const platform = Tools.platform();
	    this[platform]();
	  }
	};
	Init.start();

}());

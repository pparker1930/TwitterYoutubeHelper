// ==UserScript==
// @name              Twitter(X)ᴾˡᵘˢ usage is enhanced; Youtubeᴾˡᵘˢ usage is enhanced
// @name:ja           Twitter(X)ᴾˡᵘˢ は使用のために拡張されています。Youtubeᴾˡᵘˢ は使用のために拡張されています。
// @name:fr           Twitter(X)ᴾˡᵘˢ est amélioré pour l'utilisation ; Youtubeᴾˡᵘˢ est amélioré pour l'utilisation.
// @name:de           Twitter(X)ᴾˡᵘˢ ist für die Nutzung optimiert; Youtubeᴾˡᵘˢ ist für die Nutzung optimiert
// @name:it           Twitter(X)ᴾˡᵘˢ è ottimizzato per l'uso; Youtubeᴾˡᵘˢ è ottimizzato per l'uso
// @name:ko           Twitter(X)ᴾˡᵘˢ는 사용이 향상되고 Youtubeᴾˡᵘˢ는 사용이 향상됩니다.
// @name:ru           Twitter(X)ᴾˡᵘˢ улучшен для использования; Youtubeᴾˡᵘˢ улучшен для использования;
// @name:pt           Twitter(X)ᴾˡᵘˢ é aprimorado para uso; Youtubeᴾˡᵘˢ é aprimorado para uso;
// @name:es           Twitter(X)ᴾˡᵘˢ está mejorado para su uso; Youtubeᴾˡᵘˢ está mejorado para su uso;
// @description       The script will provide some enhancements to Twitter(X) and Youtube, such as: adding time formatting display, high-definition image display, image and video downloading, etc. to Twitter(X), adding video downloading, removing ads, etc. to Youtube. For more function introductions, please check the description~
// @description:ja    このスクリプトは、Twitter (X) と Youtube にいくつかの拡張機能を提供します。たとえば、時刻の書式設定表示の追加、高解像度の画像表示、Twitter (X) の画像とビデオのダウンロード、Youtube のビデオダウンロードの追加、広告の削除などです。 。詳しい機能紹介については説明をご確認ください~
// @description:fr    Le script fournira des fonctions améliorées pour Twitter (X) et Youtube, telles que : l'ajout de l'affichage du formatage de l'heure, l'affichage d'images haute définition, le téléchargement d'images et de vidéos pour Twitter (X), l'ajout de téléchargement de vidéos, la suppression de publicités, etc. pour Youtube . Veuillez vérifier la description pour plus d'introduction aux fonctions ~
// @description:de    Das Skript bietet einige erweiterte Funktionen für Twitter (X) und Youtube, wie zum Beispiel: Hinzufügen einer Zeitformatierungsanzeige, hochauflösende Bildanzeige, Herunterladen von Bildern und Videos für Twitter (X), Hinzufügen von Video-Downloads, Entfernen von Werbung usw. für Youtube . Weitere Funktionseinführungen finden Sie in der Beschreibung
// @description:it    Lo script fornirà alcune funzioni migliorate per Twitter (X) e Youtube, come: aggiunta della visualizzazione della formattazione dell'ora, visualizzazione di immagini ad alta definizione, download di immagini e video per Twitter (X), aggiunta del download di video, rimozione di pubblicità, ecc. per Youtube . Si prega di controllare la descrizione per ulteriori informazioni sulle funzioni~
// @description:ko    스크립트는 Twitter(X) 및 Youtube에 시간 형식 표시 추가, 고화질 사진 표시, Twitter(X)용 사진 및 비디오 다운로드, Youtube용 비디오 다운로드 추가, 광고 제거 등과 같은 몇 가지 향상된 기능을 제공합니다. . 자세한 기능 소개는 설명을 확인해주세요~
// @description:es    El script proporcionará algunas funciones mejoradas para Twitter (X) y Youtube, tales como: agregar visualización de formato de hora, visualización de imágenes de alta definición, descarga de imágenes y videos para Twitter (X), agregar descarga de videos, eliminar anuncios, etc. para Youtube. . Consulte la descripción para obtener más información sobre la función ~
// @description:ru    Скрипт предоставит некоторые расширенные функции для Twitter (X) и Youtube, такие как: добавление отображения форматирования времени, отображение изображений высокой четкости, загрузка изображений и видео для Twitter (X), добавление загрузки видео, удаление рекламы и т. д. для Youtube. . Пожалуйста, проверьте описание для получения дополнительной информации о функциях ~
// @description:pt    O script fornecerá algumas funções aprimoradas para Twitter (X) e Youtube, como: adição de exibição de formatação de hora, exibição de imagens em alta definição, download de imagens e vídeos para Twitter (X), adição de download de vídeos, remoção de anúncios, etc. . Por favor, verifique a descrição para mais introdução à função ~
// @icon              data:image/png;base64,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
// @namespace         PeterParker_X_Y_NameScope
// @version           1.0.2
// @author            PeterParker
// @match             *://x.com/*
// @match             *://twitter.com/*
// @match             *://mobile.x.com/*
// @match             *://www.aliexpress.com/*
// @match             *://www.youtube.com/watch**
// @match             *://www.youtube.com/shorts**
// @exclude           *://accounts.youtube.com/*
// @exclude           *://www.youtube.com/live_chat_replay*
// @exclude           *://www.youtube.com/persist_identity*
// @exclude           *://x.com/i/flow/*
// @grant             GM_registerMenuCommand
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_addStyle
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @grant             GM_download
// @connect           api.cobalt.tools
// @license           MIT
// @charset		      UTF-8
// @run-at            document-idle
// ==/UserScript==
(function(){
	'use strict';
	
	/**
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
	
	const host = window.location.host;
	const lang = (navigator.language.indexOf("-")!=-1 ? navigator.language.split("-")[0] : navigator.language).toLocaleLowerCase();

	const language={
		"zh":{
			"dateFormat":{
				"week":['日', '一', '二', '三', '四', '五', '六']
			},
			"download":{
				"download": '下载', "completed": '下载完成', "tip":"点击下载视频"
				,"preparing":"正在准备下载，请稍后..."
			},
			"menuCommand":{
				"command":"设置", "titleDateFormat":"时间格式设置：","buttonClose":"关闭"
			}
		},
		"en":{
			"dateFormat":{
				"week":['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] 
			},
			"download":{
				"download": 'Download', "completed": 'Download Completed', "tip":"Click to download video"
				,"preparing":"Preparing to download, please wait..."
			},
			"menuCommand":{
				"command":"Settings", "titleDateFormat":"Time format settings:", "buttonClose":"Close"
			}
		},
		"ja":{
			"dateFormat":{
				"week":['日', '月', '火', '水', '木', '金', '土']
			},
			"download":{
				"download": 'ダウンロード', "completed": 'ダウンロード完了',"tip":"クリックしてビデオをダウンロード"
				,"preparing":"ダウンロードの準備をしています。お待ちください..."
			},
			"menuCommand":{
				"command":"設定", "titleDateFormat":"時刻形式の設定:", "buttonClose":"閉鎖"
			}
		},
		"fr":{
			"dateFormat":{
				"week":['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
			},
			"download":{
				"download": 'télécharger', "completed": 'éléchargement terminé', "tip":"Cliquez pour télécharger la vidéo"
				,"preparing":"Vous êtes en train de télécharger, veuillez patienter..."
			},
			"menuCommand":{
				"command":"installation", "titleDateFormat":"Paramètres du format de l'heure :","buttonClose":"fermeture"
			}
		},
		"de":{
			"dateFormat":{
				"week":['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam']
			},
			"download":{
				"download": 'herunterladen', "completed": 'Download abgeschlossen',"tip":"Klicken Sie hier, um das Video herunterzuladen"
				,"preparing":"Der Download wird vorbereitet, bitte warten..."
			},
			"menuCommand":{
				"command":"aufstellen", "titleDateFormat":"Einstellungen für das Zeitformat:","buttonClose":"Schließung"
			}
		},
		"it":{
			"dateFormat":{
				"week":['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
			},
			"download":{
				"download": 'scaricamento', "completed": 'Download completato', "tip":"Fare clic per scaricare il video"
				,"preparing":"Preparazione al download, attendere..."
			},
			"menuCommand":{
				"command":"impostare", "titleDateFormat":"Impostazioni del formato dell'ora:","buttonClose":"chiusura"
			}
		},
		"ko":{
			"dateFormat":{
				"week":['일', '월', '화', '수', '목', '금', '토']
			},
			"download":{
				"download": '다운로드', "completed": '다운로드 완료',"tip":"비디오를 다운로드하려면 클릭하세요"
				,"preparing":"다운로드 준비 중입니다. 잠시 기다려 주세요..."
			},
			"menuCommand":{
				"command":"설정", "titleDateFormat":"시간 형식 설정:","buttonClose":"폐쇄"
			}
		},
		"ru":{
			"dateFormat":{
				"week":['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
			},
			"download":{
				"download": 'скачать', "completed": 'Загрузка завершена',"tip":"Нажмите, чтобы скачать видео"
				,"preparing":"Подготовка к загрузке, пожалуйста, подождите..."
			},
			"menuCommand":{
				"command":"настраивать", "titleDateFormat":"Настройки формата времени:","buttonClose":"закрытие"
			}
		},
		"pt":{
			"dateFormat":{
				"week":['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
			},
			"download":{
				"download": 'descargar', "completed": 'Descarga completa',"tip":"Clique para baixar o vídeo"
				,"preparing":"Preparando o download, aguarde..."
			},
			"menuCommand":{
				"command":"configuración", "titleDateFormat":"Configuración de formato de hora:","buttonClose":"cierre"
			}
		},
		"es":{
			"dateFormat":{
				"week":['DOM', 'LUN', 'MAR', 'MIER', 'JUE', 'VIE', 'SÁB']
			},
			"download":{
				"download": 'descargar', "completed": 'Descarga completa', "tip":"Haga clic para descargar el vídeo"
				,"preparing":"Preparándose para descargar, espere..."
			},
			"menuCommand":{
				"command":"configuración", "titleDateFormat":"Configuración de formato de hora:","buttonClose":"cierre"
			}
		}
	}
	
	const selectLanguage=()=>{
		return language[lang] ?? language["en"];
	}
		
	const Toast={
		initStyle:function(){
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
		show:function(params){
			let time = params.time;
			let background = params.background;
			let color = params.color;
			let position = params.position;  //center-top, center-bottom
			let defaultMarginValue = 50;
			if(time == undefined || time == ''){
				time = 1500;
			}
			if(position==undefined || position==''){
				position = "center-bottom";
			}
			
			const el = document.createElement("div");
			if(background!=undefined && background!=''){
				el.style.backgroundColor=background;
			}
			if(color!=undefined && color!=''){
				el.style.color=color;
			}
			el.setAttribute("class", "toast-style-kk998y");
			el.innerHTML = params.message;
			el.style.zIndex=999999999;
			if(position==="center-bottom"){
				el.style.bottom = defaultMarginValue+"px"; 
			}else{
				el.style.top = defaultMarginValue+"px"; 
			}
			
			document.body.appendChild(el);
			el.classList.add("fadeIn");
			
			setTimeout(function () {
				el.classList.remove("fadeIn");
				el.classList.add("fadeOut");
				el.addEventListener("animationend", function () {
					document.body.removeChild(el);
				});
				el.addEventListener("webkitAnimationEnd", function () {
					document.body.removeChild(el);
				});
			}, time);
		}
	}
	
	/**
	 *  Variable & Constant
	 */
	const FMT = 7; // 70/12/31(Th) 23:59
	let fmt = FMT;
	
	/**
	 * script value init
	 */
	const ScriptValue={
		init:function(){
			Toast.initStyle();
			fmt = GM_getValue("fmt", FMT);
		}
	}
		
	const SettingsDialog={
		number:Math.ceil(Math.random()*100000000),
		formats:[
			"Do nothing",
			"31.12.70 23:59",
			"31.12.70 23:59:59",
			"31.12.70(Th) 23:59",
			"31.12.70(Th) 23:59:59",
			"70/12/31 23:59",
			"70/12/31 23:59:59",
			"70/12/31(Th) 23:59",
			"70/12/31(Th) 23:59:59 [ye/mo/da(we) ho:mi:se]",
			"70-12/31 23:59",
			"70-12/31 23:59'59",
			"70-12/31(Th) 23:59",
			"70-12/31(Th) 23:59'59",
			"M59-12-31 23:59",
			"M59-12-31 23:59:59",
			"M59-12-31(Th) 23:59",
			"M59-12-31(Th) 23:59:59"
		],
		make:function(){
			let dialog = document.createElement('div');
			dialog.className = 'dialog_u_'+this.number;
			dialog.style.all = 'initial';
			dialog.style.backgroundColor = 'rgb(235, 235, 235)';
			dialog.style.borderRadius = '2px';
			dialog.style.display = 'none';
			dialog.style.fontFamily = 'monospace';
			dialog.style.fontSize = '12px';
			dialog.style.width = '480px';
			dialog.style.paddingLeft = '5px';
			dialog.style.paddingRight = '5px';
			dialog.style.paddingTop = '5px';
			dialog.style.paddingBottom = '5px';
			dialog.style.position = 'fixed';
			dialog.style.right = '8px';
			dialog.style.top = '8px';
			dialog.style.zIndex = '2147483647';
			dialog.style.overflow = 'auto';
			
			let formatsHtml = `<table border="0" style="width:100%;padding:5px;">`;
			for(var i=1; i<=this.formats.length;i++){
				if(i%2!=0){
					formatsHtml += `<tr style="width:100%;">`;
				}
				formatsHtml += `<td width="50"><input type="radio" name="fmt" value="`+(i-1)+`" class="top_r" />`+(i+"."+this.formats[i-1])+`</td>`;
				if(i%2==0){
					formatsHtml += `</tr>`;
				}
			}
			formatsHtml += `</table>`;
			
			let html=`
				<div style="font-size:15px;font-weight:bold;margin-bottom:5px;">`+selectLanguage().menuCommand.titleDateFormat+`</div>
				<div>`+formatsHtml+`</div>
				<div style="margin-top:15px;text-align:center;">
					<button name="closex">`+selectLanguage().menuCommand.buttonClose+`</button>
				</div>
			`;
			dialog.innerHTML = html;
			return dialog;
		},
		addEvent:function(dialog){
			dialog.querySelector("button[name='closex']").addEventListener("click", function(event){
				for (let e of dialog.querySelectorAll('input[name="fmt"]')) {
					if (e.checked) {
						fmt = +e.value;
						break;
					}
				}
				GM_setValue('fmt', fmt);
				dialog.style.display = 'none';
			},false);
		},
		init:function(){
			let dialog = this.make();
			this.addEvent(dialog);
			document.body.appendChild(dialog);
			GM_registerMenuCommand(selectLanguage().menuCommand.command, function () {
				if (dialog.style.display == 'none') {
					dialog.querySelector('input[name="fmt"][value="' + fmt + '"]').checked = true;
					dialog.style.display = 'block';
				}
			});
		}
	}
	
	const Tools = {
		waitForElement:function(selector){
			return new Promise((resolve) => {
				if (document.querySelector(selector)) return resolve(document.querySelector(selector));
				const observer = new MutationObserver(() => {
					if (document.querySelector(selector)) {
						observer.disconnect();
						resolve(document.querySelector(selector));
					}
				});
				observer.observe(document.body, { childList: true, subtree: true });
			});
		},
		randomNumber: function(){
			return Math.ceil(Math.random()*100000000);
		},
		elementInContainer:function(container, element) {
		    return container.contains(element);
		}
	}
	
	/**
	 * The code here is referenced from：
	 * https://qiita.com/libraplanet/items/0bdd7ef1a13e7af8f48f
	 * https://greasyfork.org/zh-CN/scripts/462064-show-date-normally-on-twitter
	 * 
	 * Optimization was made based on the source code and some bugs were modified.
	 * Include Fun XDateFormat、XOrigimg，XHidepromo
	 * 
	 * Author：@PeterParker & @AeamaN & @libraplanet
	 */
	const XDateFormat={
		df:function(date, f){
			const WEEK = selectLanguage().dateFormat.week;

			const YE = date.getFullYear().toString().slice(-2);
			const YM = date.getFullYear() - 1911;
			const MO = ('0' + (date.getMonth() + 1)).slice(-2);
			const DA = ('0' + date.getDate()).slice(-2);
			const WE = WEEK[date.getDay()];
			const HO = ('0' + date.getHours()).slice(-2);
			const MI = ('0' + date.getMinutes()).slice(-2);
			const SE = ('0' + date.getSeconds()).slice(-2);
			
			const F = [
				DA+'.'+MO+'.'+YE+' '+HO+':'+MI, // 0=1
				DA+'.'+MO+'.'+YE+' '+HO+':'+MI+':'+SE,
				DA+'.'+MO+'.'+YE+'('+WE+') '+HO+':'+MI,
				DA+'.'+MO+'.'+YE+'('+WE+') '+HO+':'+MI+':'+SE,
				YE+'/'+MO+'/'+DA+' '+HO+':'+MI,
				YE+'/'+MO+'/'+DA+' '+HO+':'+MI+':'+SE,
				YE+'/'+MO+'/'+DA+'('+WE+') '+HO+':'+MI,
				YE+'/'+MO+'/'+DA+'('+WE+') '+HO+':'+MI+':'+SE,
				YE+'-'+MO+'/'+DA+' '+HO+':'+MI,
				YE+'-'+MO+'/'+DA+' '+HO+':'+MI+"'"+SE,
				YE+'-'+MO+'/'+DA+'('+WE+') '+HO+':'+MI,
				YE+'-'+MO+'/'+DA+'('+WE+') '+HO+':'+MI+"'"+SE,
				'M'+YM+'-'+MO+'-'+DA+' '+HO+':'+MI,
				'M'+YM+'-'+MO+'-'+DA+' '+HO+':'+MI+":"+SE,
				'M'+YM+'-'+MO+'-'+DA+'('+WE+') '+HO+':'+MI,
				'M'+YM+'-'+MO+'-'+DA+'('+WE+') '+HO+':'+MI+":"+SE,
				YE+'/'+MO+'/'+DA+'('+WE+') '+HO+':'+MI+':'+SE
			];
			return F[f - 1] ?? F[16];
		},
		repldatetime:function(){
			const MYNAME = "peter_parker_x1190";
			const SEL =
				'main div[data-testid="primaryColumn"] section article time[datetime*=":"]';
			const SEL_2 =
				'div[aria-labelledby="modal-header"] div[data-testid^="User-Name"] time[datetime]';
			const SEL_3 =
				'div[aria-labelledby="modal-header"] div[aria-label] time[datetime]';
			const SEL_4 =
				'main section[aria-labelledby="detail-header"] article div[data-testid^="User-Name"] time[datetime]';
			const SEL_5 =
				'main section div[data-testid="conversation"] div[aria-label] time[datetime]'; // DM list
			document.querySelectorAll(SEL + ', ' + SEL_2 + ', ' + SEL_3 + ', ' + SEL_4 + ', ' + SEL_5).forEach((e)=>{
				const SEL_ADD = 'span.us-' + MYNAME;
				let d = e.getAttribute('datetime');
				let df = this.df(new Date(d), fmt);
				
				let pe = e.parentNode;
				let old = pe.querySelectorAll(SEL_ADD);
				
				if (!old.length) {
					let span = document.createElement('span');
					span.className = 'us-' + MYNAME;
					span.setAttribute('datetime', d);
					span.setAttribute('local-datetime', df);
					span.textContent = df;
					span.style = e.style;
					
					e.style.setProperty('display', 'none');
					pe.appendChild(span);
				} else if (old[0].getAttribute('local-datetime') != df) { // 时间发生变化
					old[0].setAttribute('local-datetime', df);
					old[0].textContent = df;
					old[0].style = e.style;
				}
			})
		}
	}
	
	/**
	 * Display the original size of the picture, which is clearer, but also consumes more traffic.
	 */
	const XOrigimg=()=>{
		const SEL_D = 'div[style*="background-image:"]';
		const SEL_I = 'img';
		
		let elms = document.querySelectorAll(SEL_D + ', ' + SEL_I);
		for (let e of elms) {
			let regex = /^(.+pbs\.twimg\.com\/[^?]+\?format=\w+)(&|&amp;)(name=)(\w+)([")]*)$/;
			let ss; // Temp.
			
			if (/div/i.test(e.tagName)) {
				let r = regex.exec(e.style.backgroundImage);
				if (r && r[4] != 'orig') {
					e.style.backgroundImage = r[1] + r[2] + r[3] + 'orig' + r[5];
					continue;
				}
				continue;
			}
			
			let r = regex.exec(e.getAttribute('src'));
			if (r && r[4] != 'orig') {
				e.setAttribute('src', r[1] + r[2] + r[3] + 'orig' + r[5]);
				continue;
			}
		}
	}
	
	/**
	 * Hide promotional posts
	 */
	const XHidepromo=()=>{
		const SEL = 'path[d^="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5"]';
		const SEL_2 = 'main div[data-testid="sidebarColumn"] section div[data-testid="trend"] div.r-14gqq1x ' +
			'span.css-1qaijid.r-bcqeeo.r-qvutc0'; // def-ja, def-en, ble-ja, ble-en
		const SEL_3 = 'main div[data-testid="primaryColumn"] section article ' +
			'span.css-1jxf684.r-bcqeeo.r-qvutc0.r-poiln3';
		const SEL_4 =
			'main div[data-testid="primaryColumn"] section ' +
			'span.css-901oao.css-16my406.r-bcqeeo.r-qvutc0';
		// Lone label def-ja, def-en, ble-ja, ble-en
		let elms = document.querySelectorAll(SEL);
		let elms_2 = document.querySelectorAll(SEL_2);
		let elms_3 = document.querySelectorAll(SEL_3);
		let elms_4 = document.querySelectorAll(SEL_4);
		
		const PROMO = {
			'ja': 'によるプロモーション$',
			'ko': ' 님이 프로모션함$',
			'zh': '^由 .+ 推广$',
			'ru': '^Реклама от ',
			'de': '^Gesponsert von ',
			'it': '^Sponsorizzato da ',
			'fr': '^Sponsorisé par ',
			'pt': '^Promovido por ',
			'en': '^Promoted by ' // Add your language
		};
		const PROMO_L = PROMO[lang] ?? PROMO['en'];
		const PROMO_2 = {
			'ja': 'プロモポスト',
			'ko': 'Promoted Post',
			'zh': '推广帖',
			'ru': 'Promoted Post',
			'de': 'Gesponserter Post',
			'it': 'Promoted Post',
			'fr': 'Promoted Post',
			'pt': 'Post promovido',
			'en': 'Promoted Post' // Add your language
		};
		const PROMO_L_2 = PROMO_2[lang] ?? PROMO_2['en'];
		
		let ss; // Temp.
		for (let e of elms) {
			let xpe = e.closest('div[data-testid="cellInnerDiv"]');
			if (!xpe) xpe = e.closest('div.css-175oi2r.r-1adg3ll.r-1ny4l3l'); // def-ja, def-en, ble-ja, ble-en
			if (!xpe) xpe = e.closest('div.css-175oi2r.r-1ny4l3l[data-testid="UserCell"]'); // def-ja, def-en, ?, ble-en
			if (xpe) xpe.style.setProperty('display', 'none'); // Right column のおすすめユーザー'
		}
		for (let e of elms_2) {
			const REGEX = new RegExp(PROMO_L, 'i');
			if (!REGEX.test(e.textContent)) continue;
			let xpe = e.closest('div.css-175oi2r.r-1adg3ll.r-1ny4l3l');
			xpe.style.setProperty('display', 'none');
		}
		for (let e of elms_3) {
			if (e.textContent != 'Ad') continue;
			let xpe = e.closest('div[data-testid="cellInnerDiv"]');
			xpe.style.setProperty('display', 'none');
		}
		for (let e of elms_4) {
			if (e.textContent != PROMO_2['en'] && e.textContent != PROMO_L_2) continue; 
			let xpe = e.closest('div[data-testid="cellInnerDiv"]');
			xpe.style.setProperty('display', 'none');
		}
	}
	
	/**
	 * The code here is referenced from:
	 * https://github.com/ne0lith/random-userscripts/blob/main/twitter-media-downloader.user.js
	 * 
	 * The code adopts the MIT open source license. Please note that it is appreciated!
	 * Author：@PeterParker & @ne0lith
	 */
	const XDownload={
		history:[],
		show_sensitive:true,
		is_tweetdeck:host.indexOf('tweetdeck') >= 0,
		filename:'twitter_{user-name}(@{user-id})_{date-time}_{status-id}_{file-type}',
		css: `
		.tmd-down {margin-left: 12px; order: 99;}
		.tmd-down:hover > div > div > div > div {color: rgba(29, 161, 242, 1.0);}
		.tmd-down:hover > div > div > div > div > div {background-color: rgba(29, 161, 242, 0.1);}
		.tmd-down:active > div > div > div > div > div {background-color: rgba(29, 161, 242, 0.2);}
		.tmd-down:hover svg {color: rgba(29, 161, 242, 1.0);}
		.tmd-down:hover div:first-child:not(:last-child) {background-color: rgba(29, 161, 242, 0.1);}
		.tmd-down:active div:first-child:not(:last-child) {background-color: rgba(29, 161, 242, 0.2);}
		.tmd-down.tmd-media {position: absolute; right: 0;}
		.tmd-down.tmd-media > div {display: flex; border-radius: 99px; margin: 2px;}
		.tmd-down.tmd-media > div > div {display: flex; margin: 6px; color: #fff;}
		.tmd-down.tmd-media:hover > div {background-color: rgba(255,255,255, 0.6);}
		.tmd-down.tmd-media:hover > div > div {color: rgba(29, 161, 242, 1.0);}
		.tmd-down.tmd-media:not(:hover) > div > div {filter: drop-shadow(0 0 1px #000);}
		.tmd-down g {display: none;}
		.tmd-down.download g.download, .tmd-down.completed g.completed, .tmd-down.loading g.loading,.tmd-down.failed g.failed {display: unset;}
		.tmd-down.loading svg {animation: spin 1s linear infinite;}
		@keyframes spin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
		.tmd-btn {display: inline-block; background-color: #1DA1F2; color: #FFFFFF; padding: 0 20px; border-radius: 99px;}
		.tmd-tag {display: inline-block; background-color: #FFFFFF; color: #1DA1F2; padding: 0 10px; border-radius: 10px; border: 1px solid #1DA1F2;  font-weight: bold; margin: 5px;}
		.tmd-btn:hover {background-color: rgba(29, 161, 242, 0.9);}
		.tmd-tag:hover {background-color: rgba(29, 161, 242, 0.1);}
		.tmd-notifier {display: none; position: fixed; left: 16px; bottom: 16px; color: #000; background: #fff; border: 1px solid #ccc; border-radius: 8px; padding: 4px;}
		.tmd-notifier.running {display: flex; align-items: center;}
		.tmd-notifier label {display: inline-flex; align-items: center; margin: 0 8px;}
		.tmd-notifier label:before {content: " "; width: 32px; height: 16px; background-position: center; background-repeat: no-repeat;}
		.tmd-notifier label:nth-child(1):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l4,4 q1,1 2,0 l4,-4 M12,3 v11%22 fill=%22none%22 stroke=%22%23666%22 stroke-width=%222%22 stroke-linecap=%22round%22 /></svg>");}
		.tmd-notifier label:nth-child(2):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M12,2 a1,1 0 0 1 0,20 a1,1 0 0 1 0,-20 M12,5 v7 h6%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linejoin=%22round%22 stroke-linecap=%22round%22 /></svg>");}
		.tmd-notifier label:nth-child(3):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M12,0 a2,2 0 0 0 0,24 a2,2 0 0 0 0,-24%22 fill=%22%23f66%22 stroke=%22none%22 /><path d=%22M14.5,5 a1,1 0 0 0 -5,0 l0.5,9 a1,1 0 0 0 4,0 z M12,17 a2,2 0 0 0 0,5 a2,2 0 0 0 0,-5%22 fill=%22%23fff%22 stroke=%22none%22 /></svg>");}
		.tmd-down.tmd-img {position: absolute; right: 0; bottom: 0; display: none !important;}
		.tmd-down.tmd-img > div {display: flex; border-radius: 99px; margin: 2px; background-color: rgba(255,255,255, 0.6);}
		.tmd-down.tmd-img > div > div {display: flex; margin: 6px; color: #fff !important;}
		.tmd-down.tmd-img:not(:hover) > div > div {filter: drop-shadow(0 0 1px #000);}
		.tmd-down.tmd-img:hover > div > div {color: rgba(29, 161, 242, 1.0);}
		:hover > .tmd-down.tmd-img, .tmd-img.loading, .tmd-img.completed, .tmd-img.failed {display: block !important;}
		.tweet-detail-action-item {width: 20% !important;}
		`,
		css_ss: `
		/* show sensitive in media tab */
		li[role="listitem"]>div>div>div>div:not(:last-child) {filter: none;}
		li[role="listitem"]>div>div>div>div+div:last-child {display: none;}
		`,
		svg: `
		<g class="download"><path d="M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l4,4 q1,1 2,0 l4,-4 M12,3 v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></g>
		<g class="completed"><path d="M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l3,4 q1,1 2,0 l8,-11" fill="none" stroke="#1DA1F2" stroke-width="2" stroke-linecap="round" /></g>
		<g class="loading"><circle cx="12" cy="12" r="10" fill="none" stroke="#1DA1F2" stroke-width="4" opacity="0.4" /><path d="M12,2 a10,10 0 0 1 10,10" fill="none" stroke="#1DA1F2" stroke-width="4" stroke-linecap="round" /></g>
		<g class="failed"><circle cx="12" cy="12" r="11" fill="#f33" stroke="currentColor" stroke-width="2" opacity="0.8" /><path d="M14,5 a1,1 0 0 0 -4,0 l0.5,9.5 a1.5,1.5 0 0 0 3,0 z M12,17 a2,2 0 0 0 0,4 a2,2 0 0 0 0,-4" fill="#fff" stroke="none" /></g>
		`,
		getCookie: function(){
			const cookieString = document.cookie;
			const cookiePairs = cookieString.split(';');
			const cookiesObject = {};
			
			for (const pair of cookiePairs) {
				const [key, value] = pair.split('=');
				cookiesObject[key.trim()] = value.trim();
			}
			return cookiesObject;
		},
		formatDate: function (i, o, tz) {
			let d = new Date(i);
			if (tz){
				 d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
			}
			let m = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
			let v = {
				YYYY: d.getUTCFullYear().toString(),
				YY: d.getUTCFullYear().toString(),
				MM: d.getUTCMonth() + 1,
				MMM: m[d.getUTCMonth()],
				DD: d.getUTCDate(),
				hh: d.getUTCHours(),
				mm: d.getUTCMinutes(),
				ss: d.getUTCSeconds(),
				h2: d.getUTCHours() % 12,
				ap: d.getUTCHours() < 12 ? 'AM' : 'PM'
			};
			return o.replace(/(YY(YY)?|MMM?|DD|hh|mm|ss|h2|ap)/g, n => ('0' + v[n]).substr(-n.length));
		},
		detect: function(node) {
		    let article = node.tagName == 'ARTICLE' && node || node.tagName == 'DIV' && (node.querySelector('article') || node.closest('article'));
		    if (article){
				this.addButtonTo(article);
			}
		    let listitems = node.tagName == 'LI' && node.getAttribute('role') == 'listitem' && [node] || node.tagName == 'DIV' && node.querySelectorAll('li[role="listitem"]');
		    if (listitems){
				this.addButtonToMedia(listitems);
			}
		},
		addButtonTo: function(article) {
			if(article.dataset.detected){
				return;
			}
			article.dataset.detected = 'true';
			const media_selector = ['a[href*="/photo/1"]', 'div[role="progressbar"]', 'button[data-testid="playButton"]', 'a[href="/settings/content_you_see"]', //hidden content
				'div.media-image-container', // for tweetdeck
				'div.media-preview-container', // for tweetdeck
				'div[aria-labelledby]>div:first-child>div[role="button"][tabindex="0"]' //for audio (experimental)
			];
			
			const media = article.querySelector(media_selector.join(','));
			if(media){
				let status_id = article.querySelector('a[href*="/status/"]').href.split('/status/').pop().split('/').shift();
				//选择底部菜单栏，并拷贝一个元素
				let btn_group = article.querySelector('div[role="group"]:last-of-type, ul.tweet-actions, ul.tweet-detail-actions');
				let btn_share = Array.from(btn_group.querySelectorAll(':scope>div>div, li.tweet-action-item>a, li.tweet-detail-action-item>a')).pop().parentNode;
				let btn_down = btn_share.cloneNode(true);
				btn_down.querySelector('button').removeAttribute('disabled');
				if (this.is_tweetdeck) {
				    btn_down.firstElementChild.innerHTML = '<svg viewBox="0 0 24 24" style="width: 18px; height: 18px;">' + this.svg + '</svg>';
				    btn_down.firstElementChild.removeAttribute('rel');
				    btn_down.classList.replace("pull-left", "pull-right");
				} else {
				    btn_down.querySelector('svg').innerHTML = this.svg;
				}
				let is_exist = this.history.indexOf(status_id) >= 0;
				this.status(btn_down, 'tmd-down');
				this.status(btn_down, is_exist ? 'completed': 'download', is_exist ? selectLanguage().download.completed: selectLanguage().download.download);
				btn_group.insertBefore(btn_down, btn_share.nextSibling);
				btn_down.onclick = () =>{
					this.click(btn_down, status_id, is_exist)
				}
				if(this.show_sensitive) {
				    let btn_show = article.querySelector('div[aria-labelledby] div[role="button"][tabindex="0"]:not([data-testid]) > div[dir] > span > span');
				    if (btn_show){
						btn_show.click();
					}
				}
			}
			
			const imgs = article.querySelectorAll('a[href*="/photo/"]');
			if (imgs.length > 1) {
				let status_id = article.querySelector('a[href*="/status/"]').href.split('/status/').pop().split('/').shift();
				let btn_group = article.querySelector('div[role="group"]:last-of-type');
				let btn_share = Array.from(btn_group.querySelectorAll(':scope>div>div')).pop().parentNode;
				imgs.forEach(img =>{
				    let index = img.href.split('/status/').pop().split('/').pop();
				    let is_exist = this.history.indexOf(status_id) >= 0;
				    let btn_down = document.createElement('div');
				    btn_down.innerHTML = '<div><div><svg viewBox="0 0 24 24" style="width: 18px; height: 18px;">' + this.svg + '</svg></div></div>';
				    btn_down.classList.add('tmd-down', 'tmd-img');
				    this.status(btn_down, 'download');
				    img.parentNode.appendChild(btn_down);
				    btn_down.onclick= (e) =>{
				        e.preventDefault();
				        this.click(btn_down, status_id, is_exist, index);
				    }
				});
			}
		},
		addButtonToMedia: function(listitems) {
			listitems.forEach(li =>{
			    if (li.dataset.detected) return;
			    li.dataset.detected = 'true';
			    let status_id = li.querySelector('a[href*="/status/"]').href.split('/status/').pop().split('/').shift();
			    let is_exist = this.history.indexOf(status_id) >= 0;
			    let btn_down = document.createElement('div');
			    btn_down.innerHTML = '<div><div><svg viewBox="0 0 24 24" style="width: 18px; height: 18px;">' + this.svg + '</svg></div></div>';
			    btn_down.classList.add('tmd-down', 'tmd-media');
			    this.status(btn_down, is_exist ? 'completed': 'download', is_exist ? selectLanguage().download.completed: selectLanguage().download.download);
			    li.appendChild(btn_down);
			    btn_down.onclick= () =>{
					this.click(btn_down, status_id, is_exist);
				}
			});
		},
		status: function (btn, css, title, style) {
			if (css) {
				btn.classList.remove('download', 'completed', 'loading', 'failed');
				btn.classList.add(css);
			}
			if (title) btn.title = title;
			if (style) btn.style.cssText = style;
		},
		fetchJson:async function(status_id){
			const base_url = `https://${host}/i/api/graphql/NmCeCgkVlsRGS1cAwqtgmw/TweetDetail`;
			const variables = {
				"focalTweetId":status_id,
				"with_rux_injections":false,
				"includePromotedContent":true,
				"withCommunity":true,
				"withQuickPromoteEligibilityTweetFields":true,
				"withBirdwatchNotes":true,
				"withVoice":true,
				"withV2Timeline":true
			};
			const features = {
				"rweb_lists_timeline_redesign_enabled":true,
				"responsive_web_graphql_exclude_directive_enabled":true,
				"verified_phone_label_enabled":false,
				"creator_subscriptions_tweet_preview_api_enabled":true,
				"responsive_web_graphql_timeline_navigation_enabled":true,
				"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,
				"tweetypie_unmention_optimization_enabled":true,
				"responsive_web_edit_tweet_api_enabled":true,
				"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,
				"view_counts_everywhere_api_enabled":true,
				"longform_notetweets_consumption_enabled":true,
				"responsive_web_twitter_article_tweet_consumption_enabled":false,
				"tweet_awards_web_tipping_enabled":false,
				"freedom_of_speech_not_reach_fetch_enabled":true,
				"standardized_nudges_misinfo":true,
				"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,
				"longform_notetweets_rich_text_read_enabled":true,
				"longform_notetweets_inline_media_enabled":true,
				"responsive_web_media_download_video_enabled":false,
				"responsive_web_enhance_cards_enabled":false
			};
			
			const url = encodeURI(`${base_url}?variables=${JSON.stringify(variables)}&features=${JSON.stringify(features)}`);
			const cookies = this.getCookie();
			const headers = {
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				'x-twitter-active-user': 'yes',
				'x-twitter-client-language': cookies.lang,
				'x-csrf-token': cookies.ct0
			};
			if (cookies.ct0.length == 32) headers['x-guest-token'] = cookies.gt;
			let tweet_detail = await fetch(url, {headers: headers}).then(result => result.json());
			let tweet_entrie = tweet_detail.data.threaded_conversation_with_injections_v2.instructions[0].entries.find(n => n.entryId == `tweet-${status_id}`);
			let tweet_result = tweet_entrie.content.itemContent.tweet_results.result;
			return tweet_result.tweet || tweet_result;
		},
		click:async function(btn, status_id, is_exist, index){
			if (btn.classList.contains('loading')) return;
			this.status(btn, 'loading');
			let save_history = await GM_getValue('save_history', true);
			let json = await this.fetchJson(status_id);
			let tweet = json.legacy;
			let user = json.core.user_results.result.legacy;
			let invalid_chars = {
			    '\\': '＼',
			    '\/': '／',
			    '\|': '｜',
			    '<': '＜',
			    '>': '＞',
			    ':': '：',
			    '*': '＊',
			    '?': '？',
			    '"': '＂',
			    '\u200b': '',
			    '\u200c': '',
			    '\u200d': '',
			    '\u2060': '',
			    '\ufeff': '',
			    '🔞': ''
			};
			let datetime = this.filename.match(/{date-time(-local)?:[^{}]+}/) 
				? this.filename.match(/{date-time(?:-local)?:([^{}]+)}/)[1].replace(/[\\/ | <>*?:"]/g, v => invalid_chars[v]) : 'YYYYMMDD-hhmmss';
			let info = {};
			info['status-id'] = status_id;
			info['user-name'] = user.name.replace(/([\\/|*?:"] | [\u200b - \u200d\u2060\ufeff] | 🔞) /g, v =>invalid_chars[v]);
			info['user-id'] = user.screen_name;
			info['date-time'] = this.formatDate(tweet.created_at, datetime);
			info['date-time-local'] = this.formatDate(tweet.created_at, datetime, true);
			info['full-text'] = tweet.full_text.split('\n').join(' ').replace(/\s*https:\/\/t\.co\/\w+/g, '').replace(/[\\/ | <>*?:"]|[\u200b-\u200d\u2060\ufeff]/g, v => invalid_chars[v]);
			
			let medias = tweet.extended_entities && tweet.extended_entities.media;
			if(medias == undefined){
			    medias = JSON.parse(json.card.legacy.binding_values[0].value.string_value).media_entities;
			    medias = Object.values(medias);
			}
			if(index){
				medias = [medias[index - 1]];
			}
			
			if(medias.length > 0){
				let tasks = medias.length;
				let tasks_result = [];
				medias.forEach((media, i) => {
					info.url = media.type == 'photo' ? media.media_url_https + ':orig' : media.video_info.variants.filter(n => n.content_type == 'video/mp4').sort((a, b) => b.bitrate - a.bitrate)[0].url;
					info.file = info.url.split('/').pop().split(/[:?]/).shift();
					info['file-name'] = info.file.split('.').shift();
					info['file-ext'] = info.file.split('.').pop();
					info['file-type'] = media.type.replace('animated_', '');
					info.out = (this.filename.replace(/\.?{file-ext}/, '') + ((medias.length > 1 || index) && !this.filename.match('{file-name}') ? '-' + (index ? index - 1 : i) : '') + '.{file-ext}').replace(/{([^{}:]+)(:[^{}]+)?}/g, (match, name) => info[name]);
					this.downloader.add({
						url: info.url,
						name: info.out,
						onload:()=>{
							tasks -= 1;
							tasks_result.push(((medias.length > 1 || index) ? (index ? index : i + 1) + ': ' : '') + selectLanguage().download.completed);
							this.status(btn, null, tasks_result.sort().join('\n'));
							if (tasks === 0) {
								this.status(btn, 'completed', selectLanguage().download.completed);
								if (save_history && !is_exist) {
									this.history.push(status_id);
								}
							}
						},
						onerror:(result)=>{
							tasks = -1;
							tasks_result.push((medias.length > 1 ? i + 1 + ': ' : '') + result.details.current);
							this.status(btn, 'failed', tasks_result.sort().join('\n'));
						}
					})
				});
			}else{
				this.status(btn, 'failed', 'MEDIA_NOT_FOUND');
			}
		},
		downloader: (function () {
		  let tasks = [], thread = 0, max_thread = 2, retry = 0, max_retry = 2, failed = 0, notifier, has_failed = false;
		  return {
		    add: function (task) {
				tasks.push(task);
				if (thread < max_thread) {
					thread += 1;
					this.next();
				} else{
					this.update();
				}
		    },
		    next: async function () {
				let task = tasks.shift();
				await this.start(task);
				if (tasks.length > 0 && thread <= max_thread){
					this.next();
				}else{
					thread -= 1;
				}
				this.update();
		    },
		    start: function (task) {
		      this.update();
		      return new Promise(resolve => {
				GM_download({
					url: task.url,
					name: task.name,
					onload: result => {
						task.onload();
						resolve();
					},
					onerror: result => {
						this.retry(task, result);
						resolve();
					},
					ontimeout: result => {
						this.retry(task, result);
						resolve();
					}
				});
		      });
		    },
		    retry: function (task, result) {
				retry += 1;
				if (retry == 3) max_thread = 1;
				if (task.retry && task.retry >= max_retry || result.details && result.details.current == 'USER_CANCELED') {
					task.onerror(result);
					failed += 1;
				} else {
					if (max_thread == 1) task.retry = (task.retry || 0) + 1;
					this.add(task);
				}
		    },
		    update: function() {
				if (!notifier) {
					notifier = document.createElement('div');
					notifier.title = 'Twitter Media Downloader';
					notifier.classList.add('tmd-notifier');
					notifier.innerHTML = '<label>0</label>|<label>0</label>';
					document.body.appendChild(notifier);
				}
				if (failed > 0 && !has_failed) {
					has_failed = true;
					notifier.innerHTML += '|';
					let clear = document.createElement('label');
					notifier.appendChild(clear);
					clear.onclick = () => {
						notifier.innerHTML = '<label>0</label>|<label>0</label>';
						failed = 0;
						has_failed = false;
						this.update();
					};
				}
				notifier.firstChild.innerText = thread;
				notifier.firstChild.nextElementSibling.innerText = tasks.length;
				if (failed > 0){
					notifier.lastChild.innerText = failed;
				}
				if (thread > 0 || tasks.length > 0 || failed > 0){
					notifier.classList.add('running');
				}else{
					notifier.classList.remove('running');
				}
		    }
		  };
		})(),
		init:function(){
			document.head.insertAdjacentHTML('beforeend', '<style>' + this.css + (this.show_sensitive ? this.css_ss: '') + '</style>');
		}
	}
	
	/**
	 * youtube function plus
	 * Author：@PeterParker
	 */
	const YoutubeDownload={
		markName:`script-download-----iux998htt`,
		isComplete:true,
		download:async function(btn){
			try{
				Toast.show({"message":selectLanguage().download.preparing, "background":"#000"});
				btn.classList.add("download-loadding");
				
				const downloadUl = await this.getDownloadUrl(window.location.href);
				window.open(downloadUl,'_blank');
			}catch(e){
				console.log("download request error~~~~",e);
			}finally{
				btn.classList.remove("download-loadding");
			}
		},
		getDownloadUrl:function(videoUrl, audioOnly = false) {
		    return new Promise((resolve, reject) => {
		        // https://github.com/imputnet/cobalt/blob/current/docs/api.md
		        GM_xmlhttpRequest({
		            method: 'POST',
		            url: 'https://api.cobalt.tools/api/json',
		            headers: {
		                'Cache-Control': 'no-cache',
		                Accept: 'application/json',
		                'Content-Type': 'application/json',
		            },
		            data: JSON.stringify({
		                url: encodeURI(videoUrl),
		                vQuality:  'max',
		                filenamePattern: 'basic', // file name = video title
		                isAudioOnly: audioOnly,
		                disableMetadata: true, // privacy
		            }),
		            onload: (response) => {
		                const data = JSON.parse(response.responseText);
		                if (data?.url) resolve(data.url);
		                else reject(data);
		            },
		            onerror: (err) => reject(err),
		        });
		    });
		},
		elementInContainer:function(container, element) {
		    return container.contains(element);
		},
		detectYoutubeService:function() {
		    if (window.location.hostname === 'www.youtube.com' && window.location.pathname.startsWith('/shorts'))
		        return 'shorts';
		    if (window.location.hostname === 'www.youtube.com' && window.location.pathname.startsWith('/watch'))
		        return 'watch';
		    else if (window.location.hostname === 'music.youtube.com') return 'music';
		    else if (window.location.hostname === 'www.youtube.com') return 'youtube';
		    else return null;
		},
		hookNavigationEvents:async function() {
		    ['yt-navigate', 'yt-navigate-finish', 'yt-navigate-finish', 'yt-page-data-updated'].forEach((evName) => {
		        document.addEventListener(evName, (e) => {
		            this.appendDownloadButton(e);
		        });
		    });
		},
		waitForElement:function(selector) {
		    return new Promise((resolve) => {
		        if (document.querySelector(selector)) return resolve(document.querySelector(selector));
		        const observer = new MutationObserver(() => {
		            if (document.querySelector(selector)) {
		                observer.disconnect();
		                resolve(document.querySelector(selector));
		            }
		        });
		        observer.observe(document.body, { childList: true, subtree: true });
		    });
		},
		appendDownloadButton:async function(e){
			try{
				this.isComplete = false;
				const ytContainerSelector ='#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls';
				const svg=`
					<svg t="1721662525492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1456" width="{{w}}" height="{{w}}"><path d="M512 243.47623678C364.2232964 243.47623678 243.47623678 364.21752733 243.47623678 512c0 149.57612748 120.74129057 268.52376322 268.52376322 268.52376322 149.57612748 0 268.5174697-120.74129057 268.5174697-268.52376322C782.32371158 364.21752733 661.57612748 243.47623678 512 243.47623678zM429.92088673 483.31620769c3.10690386-0.03776116 23.69512427-1.02269792 49.78283722-1.77477424V393.48242185c0-15.80723872 12.80103127-28.57627791 28.57680237-28.57627791h7.13580921c15.77577109 0 28.57680236 12.80103127 28.57680237 28.57627792v87.33997629c27.21215621 0.3408993 47.231337 0.49246838 49.54263431 0.58057773 11.55701103 0.43582666 17.75246263 10.17453321 13.17969174 15.87699197-3.6502449 4.54025435-78.39058274 87.75010438-84.74389693 95.4990079-7.16780132 11.26593547-21.68014712 3.17613263-21.68014712 3.17613263-4.74269607-5.49424792-76.06669838-91.16014639-81.3967902-97.64614908-3.89044779-4.75528313-4.16841185-14.82125303 11.02625703-14.99222713z m176.17623832 187.51192703h-185.05587862c-15.32683292 0-27.7549728-12.42813987-27.7549728-27.75549727 0-15.33312644 12.42813987-27.76179079 27.75549727-27.76179078h185.05535415c15.32683292 0 27.75549726 12.42866434 27.75549727 27.76179078 0.00629351 15.32735739-12.42237082 27.75549726-27.75549726 27.75549727z" fill="#03B48B" p-id="1457"></path></svg>
				`;
				const markName = this.markName;
				if(document.querySelector("."+markName)) return;
				
				const downloadButton = document.createElement('button');
				downloadButton.id = 'ytdl-download-button';
				downloadButton.classList.add('ytp-button',markName);
				downloadButton.title = selectLanguage().download.tip;
				downloadButton.style.borderRadius="50%";
				downloadButton.innerHTML=svg.replaceAll("{{w}}","100%");
				switch (this.detectYoutubeService()) {
					case 'watch':
						const ytCont = await this.waitForElement(ytContainerSelector);
						if (this.elementInContainer(ytCont, ytCont.querySelector('#ytdl-download-button'))) {
							break;
						}
						 
						const ytDlBtnClone = downloadButton.cloneNode(true);
						ytDlBtnClone.classList.add('YT');
						ytDlBtnClone.addEventListener('click', ()=>{
							this.download(ytDlBtnClone);
						});
				
						ytCont.insertBefore(ytDlBtnClone, ytCont.firstChild);
						break;
						 
					case 'shorts':
						if(!document.querySelector("#script-download-----iux998htt")){
							const buttonDown = document.querySelector("#navigation-button-down");
							const buttonDownload = buttonDown.cloneNode(false);
							buttonDownload.id=markName;
							buttonDownload.classList.add(markName);
							buttonDownload.style.cursor="pointer";
							buttonDownload.innerHTML=svg.replaceAll("{{w}}","50");
							document.querySelector(".navigation-container").appendChild(buttonDownload);
							buttonDownload.addEventListener("click",()=>{
								this.download(buttonDownload);
							});
						}
						break;
						 
					default:
						return;
				}
			}catch(e){
				console.log("~~~~~~~~~~~~",e)
			}finally{
				this.isComplete = true;
			}			
		},
		initStyle:function(){
			GM_addStyle(`
				@keyframes scriptspin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
				.download-loadding{
					animation: scriptspin 1s linear infinite;
				}
			`);
		},
		start:function(){
			this.initStyle();
			this.hookNavigationEvents();
			
			let allDelay = 1000*30, delay=250;
			const interval = setInterval(()=>{
				if(document.querySelector("."+this.markName) || allDelay<=0) {
					clearInterval(interval);
				}else{
					if(this.isComplete) this.appendDownloadButton();
				}
				allDelay -= delay
			}, delay);
		}
	}
	
	/**
	 * This feature is under development and will be available soon.
	 */
	const Aliexpress={
		start:function(){
			
		}
	}
	
	const Init = {
		platform:function(){
			const isX = ["x.com", "twitter.com"].some((item) => host.indexOf(item)!=-1);
			const isAliexpress = ["aliexpress.com"].some((item) => host.indexOf(item)!=-1);
			const isYoutube = ["youtube.com"].some((item) => host.indexOf(item)!=-1);

			if(isX) return "x";
			if(isAliexpress) return "aliexpress";
			if(isYoutube) return "youtube";
			return "unknown";
		},
		x:function(){
			XDownload.init();
			SettingsDialog.init();
			
			const observer = new MutationObserver(ms => ms.forEach(m =>{
				m.addedNodes.forEach(node =>{
					XDownload.detect(node); //download
					XDateFormat.repldatetime(); //date formats
					XOrigimg(); //Pictures are automatically the highest resolution
					XHidepromo(); //hide AD.
				});
			}));
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		},
		aliexpress:function(){
			Aliexpress.start();
		},
		youtube:function(){
			YoutubeDownload.start();
		},
		unknown:function(){
			console.log("Hoooo，This method was not found");
		},
		start:function(){
			ScriptValue.init();
			const platform = this.platform();
			this[platform]();
		}
	}
	
	Init.start();
})();
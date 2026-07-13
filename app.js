(function () {
  'use strict';

  var tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  if (tg) { tg.ready(); tg.expand(); }

  var LANGS = [
    {code:'en', name:'English', flag:'🇬🇧'},
    {code:'ar', name:'العربية', flag:'🇸🇦'},
    {code:'ru', name:'Русский', flag:'🇷🇺'},
    {code:'fr', name:'Français', flag:'🇫🇷'},
    {code:'de', name:'Deutsch', flag:'🇩🇪'},
    {code:'zh', name:'中文', flag:'🇨🇳'},
    {code:'hi', name:'हिन्दी', flag:'🇮🇳'},
    {code:'it', name:'Italiano', flag:'🇮🇹'},
    {code:'es', name:'Español', flag:'🇪🇸'},
    {code:'pt', name:'Português', flag:'🇵🇹'},
    {code:'id', name:'Bahasa Indonesia', flag:'🇮🇩'},
    {code:'vi', name:'Tiếng Việt', flag:'🇻🇳'}
  ];

  var T = {
    ar:{eyebrow:'لوحة التحكم',title:'Doomsday Farm Bots',choose:'اختر لغتك',chooseHint:'يمكنك تغيير اللغة لاحقًا من زر 🌐',telegramId:'معرّف تيليجرام',farm:'المزرعة',start:'بداية الاشتراك',end:'نهاية الاشتراك',oil:'النفط',steel:'الصلب',wood:'الخشب',food:'الطعام',save:'💾 حفظ التعديلات',saving:'جارٍ الحفظ...',saved:'تم حفظ التعديلات بنجاح',max:'لا يمكن أن يتجاوز إجمالي الفيالق 5',none:'لا توجد أي قلاع مرتبطة بحسابك.',on:'تشغيل',off:'إيقاف',total:'إجمالي الفيالق',loading:'جارٍ تحميل القلاع...',changeLanguage:'تغيير اللغة',requestFailed:'تعذّر تنفيذ الطلب',saveFailed:'تعذّر حفظ التعديلات'},
    en:{eyebrow:'CONTROL PANEL',title:'Doomsday Farm Bots',choose:'Choose your language',chooseHint:'You can change it later using the 🌐 button.',telegramId:'Telegram ID',farm:'Farm',start:'Subscription starts',end:'Subscription ends',oil:'Oil',steel:'Steel',wood:'Wood',food:'Food',save:'💾 Save changes',saving:'Saving...',saved:'Changes saved successfully',max:'The total number of legions cannot exceed 5',none:'No farms are linked to your account.',on:'ON',off:'OFF',total:'Total legions',loading:'Loading farms...',changeLanguage:'Change language',requestFailed:'Request failed',saveFailed:'Could not save changes'},
    fr:{eyebrow:'PANNEAU DE CONTRÔLE',title:'Doomsday Farm Bots',choose:'Choisissez votre langue',chooseHint:'Vous pourrez la modifier plus tard avec le bouton 🌐.',telegramId:'Identifiant Telegram',farm:'Ferme',start:'Début de l’abonnement',end:'Fin de l’abonnement',oil:'Pétrole',steel:'Acier',wood:'Bois',food:'Nourriture',save:'💾 Enregistrer les modifications',saving:'Enregistrement...',saved:'Modifications enregistrées avec succès',max:'Le total des légions ne peut pas dépasser 5',none:'Aucune ferme n’est associée à votre compte.',on:'ACTIVÉ',off:'DÉSACTIVÉ',total:'Total des légions',loading:'Chargement des fermes...',changeLanguage:'Changer de langue',requestFailed:'Échec de la requête',saveFailed:'Impossible d’enregistrer les modifications'},
    ru:{eyebrow:'ПАНЕЛЬ УПРАВЛЕНИЯ',title:'Doomsday Farm Bots',choose:'Выберите язык',chooseHint:'Позже язык можно изменить кнопкой 🌐.',telegramId:'Telegram ID',farm:'Ферма',start:'Начало подписки',end:'Окончание подписки',oil:'Нефть',steel:'Сталь',wood:'Дерево',food:'Еда',save:'💾 Сохранить изменения',saving:'Сохранение...',saved:'Изменения успешно сохранены',max:'Общее количество легионов не может превышать 5',none:'К вашему аккаунту не привязано ни одной фермы.',on:'ВКЛ',off:'ВЫКЛ',total:'Всего легионов',loading:'Загрузка ферм...',changeLanguage:'Сменить язык',requestFailed:'Не удалось выполнить запрос',saveFailed:'Не удалось сохранить изменения'},
    de:{eyebrow:'STEUERZENTRALE',title:'Doomsday Farm Bots',choose:'Sprache auswählen',chooseHint:'Du kannst sie später über die Schaltfläche 🌐 ändern.',telegramId:'Telegram-ID',farm:'Farm',start:'Abonnementbeginn',end:'Abonnementende',oil:'Öl',steel:'Stahl',wood:'Holz',food:'Nahrung',save:'💾 Änderungen speichern',saving:'Wird gespeichert...',saved:'Änderungen wurden erfolgreich gespeichert',max:'Die Gesamtzahl der Legionen darf 5 nicht überschreiten',none:'Mit deinem Konto sind keine Farmen verknüpft.',on:'AN',off:'AUS',total:'Legionen insgesamt',loading:'Farmen werden geladen...',changeLanguage:'Sprache ändern',requestFailed:'Anfrage fehlgeschlagen',saveFailed:'Änderungen konnten nicht gespeichert werden'},
    zh:{eyebrow:'控制面板',title:'Doomsday Farm Bots',choose:'选择语言',chooseHint:'以后可通过 🌐 按钮更改语言。',telegramId:'Telegram ID',farm:'农场',start:'订阅开始日期',end:'订阅结束日期',oil:'石油',steel:'钢铁',wood:'木材',food:'食物',save:'💾 保存更改',saving:'正在保存...',saved:'更改已成功保存',max:'军团总数不能超过 5',none:'您的账户尚未关联任何农场。',on:'开启',off:'关闭',total:'军团总数',loading:'正在加载农场...',changeLanguage:'更改语言',requestFailed:'请求失败',saveFailed:'无法保存更改'},
    hi:{eyebrow:'कंट्रोल पैनल',title:'Doomsday Farm Bots',choose:'अपनी भाषा चुनें',chooseHint:'आप बाद में 🌐 बटन से भाषा बदल सकते हैं।',telegramId:'Telegram ID',farm:'फार्म',start:'सदस्यता शुरू',end:'सदस्यता समाप्त',oil:'तेल',steel:'स्टील',wood:'लकड़ी',food:'भोजन',save:'💾 बदलाव सहेजें',saving:'सहेजा जा रहा है...',saved:'बदलाव सफलतापूर्वक सहेजे गए',max:'कुल लीजन की संख्या 5 से अधिक नहीं हो सकती',none:'आपके खाते से कोई फार्म जुड़ा नहीं है।',on:'चालू',off:'बंद',total:'कुल लीजन',loading:'फार्म लोड हो रहे हैं...',changeLanguage:'भाषा बदलें',requestFailed:'अनुरोध विफल हुआ',saveFailed:'बदलाव सहेजे नहीं जा सके'},
    it:{eyebrow:'PANNELLO DI CONTROLLO',title:'Doomsday Farm Bots',choose:'Scegli la lingua',chooseHint:'Potrai cambiarla in seguito con il pulsante 🌐.',telegramId:'ID Telegram',farm:'Fattoria',start:'Inizio abbonamento',end:'Fine abbonamento',oil:'Petrolio',steel:'Acciaio',wood:'Legno',food:'Cibo',save:'💾 Salva modifiche',saving:'Salvataggio...',saved:'Modifiche salvate con successo',max:'Il numero totale di legioni non può superare 5',none:'Nessuna fattoria è collegata al tuo account.',on:'ATTIVO',off:'DISATTIVO',total:'Legioni totali',loading:'Caricamento fattorie...',changeLanguage:'Cambia lingua',requestFailed:'Richiesta non riuscita',saveFailed:'Impossibile salvare le modifiche'},
    es:{eyebrow:'PANEL DE CONTROL',title:'Doomsday Farm Bots',choose:'Elige tu idioma',chooseHint:'Podrás cambiarlo después con el botón 🌐.',telegramId:'ID de Telegram',farm:'Granja',start:'Inicio de la suscripción',end:'Fin de la suscripción',oil:'Petróleo',steel:'Acero',wood:'Madera',food:'Comida',save:'💾 Guardar cambios',saving:'Guardando...',saved:'Cambios guardados correctamente',max:'El total de legiones no puede superar 5',none:'No hay granjas vinculadas a tu cuenta.',on:'ACTIVO',off:'INACTIVO',total:'Total de legiones',loading:'Cargando granjas...',changeLanguage:'Cambiar idioma',requestFailed:'La solicitud falló',saveFailed:'No se pudieron guardar los cambios'},
    pt:{eyebrow:'PAINEL DE CONTROLE',title:'Doomsday Farm Bots',choose:'Escolha seu idioma',chooseHint:'Você poderá alterá-lo depois usando o botão 🌐.',telegramId:'ID do Telegram',farm:'Fazenda',start:'Início da assinatura',end:'Fim da assinatura',oil:'Petróleo',steel:'Aço',wood:'Madeira',food:'Comida',save:'💾 Salvar alterações',saving:'Salvando...',saved:'Alterações salvas com sucesso',max:'O total de legiões não pode ultrapassar 5',none:'Nenhuma fazenda está vinculada à sua conta.',on:'LIGADO',off:'DESLIGADO',total:'Total de legiões',loading:'Carregando fazendas...',changeLanguage:'Alterar idioma',requestFailed:'Falha na solicitação',saveFailed:'Não foi possível salvar as alterações'},
    id:{eyebrow:'PANEL KONTROL',title:'Doomsday Farm Bots',choose:'Pilih bahasa Anda',chooseHint:'Bahasa dapat diubah nanti melalui tombol 🌐.',telegramId:'ID Telegram',farm:'Farm',start:'Mulai langganan',end:'Akhir langganan',oil:'Minyak',steel:'Baja',wood:'Kayu',food:'Makanan',save:'💾 Simpan perubahan',saving:'Menyimpan...',saved:'Perubahan berhasil disimpan',max:'Jumlah total legiun tidak boleh lebih dari 5',none:'Tidak ada farm yang terhubung ke akun Anda.',on:'AKTIF',off:'NONAKTIF',total:'Total legiun',loading:'Memuat farm...',changeLanguage:'Ganti bahasa',requestFailed:'Permintaan gagal',saveFailed:'Perubahan tidak dapat disimpan'},
    vi:{eyebrow:'BẢNG ĐIỀU KHIỂN',title:'Doomsday Farm Bots',choose:'Chọn ngôn ngữ',chooseHint:'Bạn có thể đổi ngôn ngữ sau bằng nút 🌐.',telegramId:'ID Telegram',farm:'Nông trại',start:'Bắt đầu đăng ký',end:'Kết thúc đăng ký',oil:'Dầu',steel:'Thép',wood:'Gỗ',food:'Lương thực',save:'💾 Lưu thay đổi',saving:'Đang lưu...',saved:'Đã lưu thay đổi thành công',max:'Tổng số quân đoàn không được vượt quá 5',none:'Không có nông trại nào được liên kết với tài khoản của bạn.',on:'BẬT',off:'TẮT',total:'Tổng quân đoàn',loading:'Đang tải nông trại...',changeLanguage:'Đổi ngôn ngữ',requestFailed:'Yêu cầu thất bại',saveFailed:'Không thể lưu thay đổi'}
  };

  var lang = localStorage.getItem('dfb_lang') || '';
  var farms = [];
  var languageScreen = document.getElementById('languageScreen');
  var appScreen = document.getElementById('appScreen');
  var farmsRoot = document.getElementById('farms');
  var saveBtn = document.getElementById('saveBtn');
  var message = document.getElementById('message');
  var eyebrow = document.getElementById('eyebrow');
  var appTitle = document.getElementById('appTitle');
  var languageBtn = document.getElementById('languageBtn');

  function tr(key) { return (T[lang] || T.en)[key] || T.en[key] || key; }
  function escapeHtml(value) { return String(value == null ? '' : value).replace(/[&<>'"]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];}); }
  function total(farm) { return ['oil','steel','sawmill','field'].reduce(function(sum,key){return sum + (Number(farm[key]) || 0);},0); }

  function applyLocale() {
    document.documentElement.lang = lang || 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang || 'en');
    eyebrow.textContent = tr('eyebrow');
    appTitle.textContent = tr('title');
    languageBtn.setAttribute('aria-label', tr('changeLanguage'));
    languageBtn.setAttribute('title', tr('changeLanguage'));
  }

  function headers() {
    var result = {};
    if (tg && tg.initData) result['X-Telegram-Init-Data'] = tg.initData;
    else {
      var params = new URLSearchParams(window.location.search);
      var devId = params.get('telegram_id') || localStorage.getItem('dfb_dev_id') || '';
      if (devId) result['X-Dev-Telegram-ID'] = devId;
    }
    return result;
  }

  function showMessage(text, ok) {
    message.className = text ? (ok ? 'success' : 'error') : '';
    message.textContent = text || '';
  }

  function chooseLanguage() {
    appScreen.hidden = true;
    languageScreen.hidden = false;
    languageScreen.innerHTML = '<div class="language-heading"><span class="language-globe">🌐</span><div><h2>Choose your language</h2><p>Select your language / اختر لغتك</p></div></div><div class="languages">' +
      LANGS.map(function(item){
        var selected = lang === item.code ? ' selected' : '';
        return '<button type="button" class="language-option'+selected+'" data-lang="'+item.code+'"><span class="flag">'+item.flag+'</span><span>'+item.name+'</span></button>';
      }).join('') + '</div>';
    Array.prototype.forEach.call(languageScreen.querySelectorAll('[data-lang]'), function(btn){
      btn.onclick = function(){
        lang = btn.getAttribute('data-lang');
        localStorage.setItem('dfb_lang', lang);
        applyLocale();
        load();
      };
    });
  }

  function resource(index, key, label) {
    return '<div class="resource"><span class="resource-label">'+label+'</span>' +
      '<button class="step" type="button" data-step="-1" data-key="'+key+'" aria-label="Decrease">−</button>' +
      '<output data-value="'+key+'">'+farms[index][key]+'</output>' +
      '<button class="step" type="button" data-step="1" data-key="'+key+'" aria-label="Increase">+</button></div>';
  }

  function render() {
    if (!farms.length) {
      farmsRoot.innerHTML = '<div class="panel empty"><div class="empty-icon">🏰</div><div>'+tr('none')+'</div></div>';
      return;
    }
    farmsRoot.innerHTML = farms.map(function(farm,index){
      return '<article class="farm-card" data-index="'+index+'">' +
        '<div class="farm-head"><div class="farm-title"><h2>🏰 '+tr('farm')+' '+escapeHtml(farm.id)+'</h2><div class="farm-file">'+escapeHtml(farm.file)+'</div></div>' +
        '<button type="button" class="toggle '+(farm.on_off ? 'on' : 'off')+'" data-toggle>'+(farm.on_off ? tr('on') : tr('off'))+'</button></div>' +
        '<div class="dates"><div class="date-box"><span class="date-label">'+tr('start')+'</span><span class="date-value">'+escapeHtml(farm.start)+'</span></div>' +
        '<div class="date-box"><span class="date-label">'+tr('end')+'</span><span class="date-value">'+escapeHtml(farm.end)+'</span></div></div>' +
        '<div class="resources">'+resource(index,'oil','🛢️ '+tr('oil'))+resource(index,'steel','⛓️ '+tr('steel'))+resource(index,'sawmill','🪵 '+tr('wood'))+resource(index,'field','🌾 '+tr('food'))+'</div>' +
        '<div class="total"><span>'+tr('total')+'</span><span><b data-total>'+total(farm)+'</b> / 5</span></div></article>';
    }).join('');

    Array.prototype.forEach.call(farmsRoot.querySelectorAll('.farm-card'), function(card){
      var index = Number(card.getAttribute('data-index'));
      card.querySelector('[data-toggle]').onclick = function(event){
        farms[index].on_off = farms[index].on_off ? 0 : 1;
        event.currentTarget.className = 'toggle ' + (farms[index].on_off ? 'on' : 'off');
        event.currentTarget.textContent = farms[index].on_off ? tr('on') : tr('off');
        showMessage('', true);
      };
      Array.prototype.forEach.call(card.querySelectorAll('[data-step]'), function(button){
        button.onclick = function(){ step(index, button.getAttribute('data-key'), Number(button.getAttribute('data-step')), card); };
      });
    });
  }

  function step(index, key, amount, card) {
    var next = Math.max(0, Math.min(5, (Number(farms[index][key]) || 0) + amount));
    var candidate = Object.assign({}, farms[index]);
    candidate[key] = next;
    if (total(candidate) > 5) { showMessage(tr('max'), false); return; }
    farms[index][key] = next;
    card.querySelector('[data-value="'+key+'"]').textContent = next;
    card.querySelector('[data-total]').textContent = total(farms[index]);
    showMessage('', true);
  }

  async function load() {
    applyLocale();
    languageScreen.hidden = true;
    appScreen.hidden = false;
    saveBtn.textContent = tr('save');
    farmsRoot.innerHTML = '<div class="panel loading"><span class="spinner"></span>'+tr('loading')+'</div>';
    showMessage('', true);
    try {
      var response = await fetch('/api/me', {headers: headers()});
      var body = await response.json();
      if (!response.ok) throw new Error(body.detail || tr('requestFailed'));
      farms = body.farms || [];
      document.getElementById('userInfo').textContent = tr('telegramId') + ': ' + body.telegram_id;
      render();
    } catch (error) {
      farmsRoot.innerHTML = '';
      showMessage(error.message || tr('requestFailed'), false);
    }
  }

  async function save() {
    for (var i=0;i<farms.length;i++) {
      if (total(farms[i]) > 5) { showMessage(tr('max'), false); return; }
    }
    saveBtn.disabled = true;
    saveBtn.textContent = tr('saving');
    showMessage('', true);
    try {
      var response = await fetch('/api/save', {
        method:'POST',
        headers:Object.assign({},headers(),{'Content-Type':'application/json'}),
        body:JSON.stringify({language:lang,farms:farms})
      });
      var body = await response.json();
      if (!response.ok) throw new Error(body.detail || tr('saveFailed'));
      showMessage(tr('saved'), true);
      if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
    } catch (error) {
      showMessage(error.message || tr('saveFailed'), false);
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = tr('save');
    }
  }

  saveBtn.onclick = save;
  languageBtn.onclick = chooseLanguage;
  if (lang) { applyLocale(); load(); } else { chooseLanguage(); }
}());

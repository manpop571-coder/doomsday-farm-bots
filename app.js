(function () {
  'use strict';

  function getTelegramWebApp() {
    return window.Telegram && window.Telegram.WebApp
      ? window.Telegram.WebApp
      : null;
  }

  var tg = getTelegramWebApp();

  if (tg) {
    try {
      tg.ready();
      tg.expand();
    } catch (error) {
      console.error('Telegram WebApp initialization failed:', error);
    }
  }

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
    ar:{eyebrow:'لوحة التحكم',title:'Doomsday Farm Bots',choose:'اختر لغتك',chooseHint:'يمكنك تغيير اللغة لاحقًا من زر 🌐',telegramId:'معرّف تيليجرام',farm:'القلعة',castleName:'اسم القلعة',email:'البريد الإلكتروني',password:'كلمة مرور جديدة',passwordHint:'اتركها فارغة للاحتفاظ بكلمة المرور الحالية',showPassword:'إظهار كلمة المرور',start:'بداية الاشتراك',end:'نهاية الاشتراك',oil:'النفط',steel:'الصلب',wood:'الخشب',food:'الطعام',save:'💾 حفظ التعديلات',saving:'جارٍ الإرسال...',saved:'تم إرسال التعديلات إلى البوت',max:'لا يمكن أن يتجاوز إجمالي الفيالق 5',none:'لا توجد أي قلاع مرتبطة بحسابك.',on:'تشغيل',off:'إيقاف',total:'إجمالي الفيالق',changeLanguage:'تغيير اللغة',openTelegram:'افتح هذه الصفحة من داخل بوت تيليجرام للحفظ',invalidData:'تعذر قراءة بيانات القلاع. افتح الواجهة من البوت مرة أخرى.'},
    en:{eyebrow:'CONTROL PANEL',title:'Doomsday Farm Bots',choose:'Choose your language',chooseHint:'You can change it later using the 🌐 button.',telegramId:'Telegram ID',farm:'Farm',castleName:'Castle name',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Show password',start:'Subscription starts',end:'Subscription ends',oil:'Oil',steel:'Steel',wood:'Wood',food:'Food',save:'💾 Save changes',saving:'Sending...',saved:'Changes were sent to the bot',max:'The total number of legions cannot exceed 5',none:'No farms are linked to your account.',on:'ON',off:'OFF',total:'Total legions',changeLanguage:'Change language',openTelegram:'Open this page from the Telegram bot to save changes',invalidData:'Farm data could not be read. Open the panel from the bot again.'},
    fr:{eyebrow:'PANNEAU DE CONTRÔLE',title:'Doomsday Farm Bots',choose:'Choisissez votre langue',chooseHint:'Vous pourrez la modifier plus tard avec le bouton 🌐.',telegramId:'Identifiant Telegram',farm:'Ferme',castleName:'Nom du château',email:'E-mail',password:'Mot de passe',showPassword:'Afficher le mot de passe',start:'Début de l’abonnement',end:'Fin de l’abonnement',oil:'Pétrole',steel:'Acier',wood:'Bois',food:'Nourriture',save:'💾 Enregistrer les modifications',saving:'Envoi...',saved:'Les modifications ont été envoyées au bot',max:'Le total des légions ne peut pas dépasser 5',none:'Aucune ferme n’est associée à votre compte.',on:'ACTIVÉ',off:'DÉSACTIVÉ',total:'Total des légions',changeLanguage:'Changer de langue',openTelegram:'Ouvrez cette page depuis le bot Telegram pour enregistrer',invalidData:'Impossible de lire les données. Rouvrez le panneau depuis le bot.'},
    ru:{eyebrow:'ПАНЕЛЬ УПРАВЛЕНИЯ',title:'Doomsday Farm Bots',choose:'Выберите язык',chooseHint:'Позже язык можно изменить кнопкой 🌐.',telegramId:'Telegram ID',farm:'Ферма',castleName:'Название замка',email:'Эл. почта',password:'Пароль',showPassword:'Показать пароль',start:'Начало подписки',end:'Окончание подписки',oil:'Нефть',steel:'Сталь',wood:'Дерево',food:'Еда',save:'💾 Сохранить изменения',saving:'Отправка...',saved:'Изменения отправлены боту',max:'Общее количество легионов не может превышать 5',none:'К вашему аккаунту не привязано ни одной фермы.',on:'ВКЛ',off:'ВЫКЛ',total:'Всего легионов',changeLanguage:'Сменить язык',openTelegram:'Откройте эту страницу через Telegram-бота для сохранения',invalidData:'Не удалось прочитать данные ферм. Откройте панель из бота снова.'},
    de:{eyebrow:'STEUERZENTRALE',title:'Doomsday Farm Bots',choose:'Sprache auswählen',chooseHint:'Du kannst sie später über die Schaltfläche 🌐 ändern.',telegramId:'Telegram-ID',farm:'Farm',castleName:'Castle name',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Show password',start:'Abonnementbeginn',end:'Abonnementende',oil:'Öl',steel:'Stahl',wood:'Holz',food:'Nahrung',save:'💾 Änderungen speichern',saving:'Wird gesendet...',saved:'Änderungen wurden an den Bot gesendet',max:'Die Gesamtzahl der Legionen darf 5 nicht überschreiten',none:'Mit deinem Konto sind keine Farmen verknüpft.',on:'AN',off:'AUS',total:'Legionen insgesamt',changeLanguage:'Sprache ändern',openTelegram:'Öffne diese Seite über den Telegram-Bot, um zu speichern',invalidData:'Farmdaten konnten nicht gelesen werden. Öffne die Seite erneut über den Bot.'},
    zh:{eyebrow:'控制面板',title:'Doomsday Farm Bots',choose:'选择语言',chooseHint:'以后可通过 🌐 按钮更改语言。',telegramId:'Telegram ID',farm:'农场',castleName:'城堡名称',email:'邮箱',password:'密码',showPassword:'显示密码',start:'订阅开始日期',end:'订阅结束日期',oil:'石油',steel:'钢铁',wood:'木材',food:'食物',save:'💾 保存更改',saving:'正在发送...',saved:'更改已发送给机器人',max:'军团总数不能超过 5',none:'您的账户尚未关联任何农场。',on:'开启',off:'关闭',total:'军团总数',changeLanguage:'更改语言',openTelegram:'请从 Telegram 机器人中打开此页面以保存',invalidData:'无法读取农场数据。请从机器人重新打开控制面板。'},
    hi:{eyebrow:'कंट्रोल पैनल',title:'Doomsday Farm Bots',choose:'अपनी भाषा चुनें',chooseHint:'आप बाद में 🌐 बटन से भाषा बदल सकते हैं।',telegramId:'Telegram ID',farm:'फार्म',castleName:'किले का नाम',email:'ईमेल',password:'पासवर्ड',showPassword:'पासवर्ड दिखाएँ',start:'सदस्यता शुरू',end:'सदस्यता समाप्त',oil:'तेल',steel:'स्टील',wood:'लकड़ी',food:'भोजन',save:'💾 बदलाव सहेजें',saving:'भेजा जा रहा है...',saved:'बदलाव बॉट को भेज दिए गए',max:'कुल लीजन की संख्या 5 से अधिक नहीं हो सकती',none:'आपके खाते से कोई फार्म जुड़ा नहीं है।',on:'चालू',off:'बंद',total:'कुल लीजन',changeLanguage:'भाषा बदलें',openTelegram:'सहेजने के लिए इस पेज को Telegram बॉट से खोलें',invalidData:'फार्म डेटा पढ़ा नहीं जा सका। बॉट से पैनल दोबारा खोलें।'},
    it:{eyebrow:'PANNELLO DI CONTROLLO',title:'Doomsday Farm Bots',choose:'Scegli la lingua',chooseHint:'Potrai cambiarla in seguito con il pulsante 🌐.',telegramId:'ID Telegram',farm:'Fattoria',castleName:'Nome castello',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Mostra password',start:'Inizio abbonamento',end:'Fine abbonamento',oil:'Petrolio',steel:'Acciaio',wood:'Legno',food:'Cibo',save:'💾 Salva modifiche',saving:'Invio...',saved:'Le modifiche sono state inviate al bot',max:'Il numero totale di legioni non può superare 5',none:'Nessuna fattoria è collegata al tuo account.',on:'ATTIVO',off:'DISATTIVO',total:'Legioni totali',changeLanguage:'Cambia lingua',openTelegram:'Apri questa pagina dal bot Telegram per salvare',invalidData:'Impossibile leggere i dati. Riapri il pannello dal bot.'},
    es:{eyebrow:'PANEL DE CONTROL',title:'Doomsday Farm Bots',choose:'Elige tu idioma',chooseHint:'Podrás cambiarlo después con el botón 🌐.',telegramId:'ID de Telegram',farm:'Granja',castleName:'Nombre del castillo',email:'Correo',password:'Contraseña',showPassword:'Mostrar contraseña',start:'Inicio de la suscripción',end:'Fin de la suscripción',oil:'Petróleo',steel:'Acero',wood:'Madera',food:'Comida',save:'💾 Guardar cambios',saving:'Enviando...',saved:'Los cambios se enviaron al bot',max:'El total de legiones no puede superar 5',none:'No hay granjas vinculadas a tu cuenta.',on:'ACTIVO',off:'INACTIVO',total:'Total de legiones',changeLanguage:'Cambiar idioma',openTelegram:'Abre esta página desde el bot de Telegram para guardar',invalidData:'No se pudieron leer los datos. Abre de nuevo el panel desde el bot.'},
    pt:{eyebrow:'PAINEL DE CONTROLE',title:'Doomsday Farm Bots',choose:'Escolha seu idioma',chooseHint:'Você poderá alterá-lo depois usando o botão 🌐.',telegramId:'ID do Telegram',farm:'Fazenda',castleName:'Nome do castelo',email:'E-mail',password:'Senha',showPassword:'Mostrar senha',start:'Início da assinatura',end:'Fim da assinatura',oil:'Petróleo',steel:'Aço',wood:'Madeira',food:'Comida',save:'💾 Salvar alterações',saving:'Enviando...',saved:'As alterações foram enviadas ao bot',max:'O total de legiões não pode ultrapassar 5',none:'Nenhuma fazenda está vinculada à sua conta.',on:'LIGADO',off:'DESLIGADO',total:'Total de legiões',changeLanguage:'Alterar idioma',openTelegram:'Abra esta página pelo bot do Telegram para salvar',invalidData:'Não foi possível ler os dados. Abra o painel novamente pelo bot.'},
    id:{eyebrow:'PANEL KONTROL',title:'Doomsday Farm Bots',choose:'Pilih bahasa Anda',chooseHint:'Bahasa dapat diubah nanti melalui tombol 🌐.',telegramId:'ID Telegram',farm:'Farm',castleName:'Castle name',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Show password',start:'Mulai langganan',end:'Akhir langganan',oil:'Minyak',steel:'Baja',wood:'Kayu',food:'Makanan',save:'💾 Simpan perubahan',saving:'Mengirim...',saved:'Perubahan dikirim ke bot',max:'Jumlah total legiun tidak boleh lebih dari 5',none:'Tidak ada farm yang terhubung ke akun Anda.',on:'AKTIF',off:'NONAKTIF',total:'Total legiun',changeLanguage:'Ganti bahasa',openTelegram:'Buka halaman ini melalui bot Telegram untuk menyimpan',invalidData:'Data farm tidak dapat dibaca. Buka kembali panel dari bot.'},
    vi:{eyebrow:'BẢNG ĐIỀU KHIỂN',title:'Doomsday Farm Bots',choose:'Chọn ngôn ngữ',chooseHint:'Bạn có thể đổi ngôn ngữ sau bằng nút 🌐.',telegramId:'ID Telegram',farm:'Nông trại',castleName:'Tên lâu đài',email:'Email',password:'Mật khẩu',showPassword:'Hiện mật khẩu',start:'Bắt đầu đăng ký',end:'Kết thúc đăng ký',oil:'Dầu',steel:'Thép',wood:'Gỗ',food:'Lương thực',save:'💾 Lưu thay đổi',saving:'Đang gửi...',saved:'Các thay đổi đã được gửi đến bot',max:'Tổng số quân đoàn không được vượt quá 5',none:'Không có nông trại nào được liên kết với tài khoản của bạn.',on:'BẬT',off:'TẮT',total:'Tổng quân đoàn',changeLanguage:'Đổi ngôn ngữ',openTelegram:'Mở trang này từ bot Telegram để lưu',invalidData:'Không thể đọc dữ liệu. Hãy mở lại bảng điều khiển từ bot.'}
  };

  var lang = localStorage.getItem('dfb_lang') || '';
  var farms = [];
  var telegramId = '';
  var dataIsValid = false;

  var languageScreen = document.getElementById('languageScreen');
  var appScreen = document.getElementById('appScreen');
  var farmsRoot = document.getElementById('farms');
  var saveBtn = document.getElementById('saveBtn');
  var message = document.getElementById('message');
  var eyebrow = document.getElementById('eyebrow');
  var appTitle = document.getElementById('appTitle');
  var languageBtn = document.getElementById('languageBtn');
  var userInfo = document.getElementById('userInfo');

  function tr(key) {
    return (T[lang] || T.en)[key] || T.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function(c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];
    });
  }

  function total(farm) {
    return ['oil','steel','sawmill','field'].reduce(function(sum,key) {
      return sum + (Number(farm[key]) || 0);
    }, 0);
  }

  function base64UrlDecode(value) {
    var normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    while (normalized.length % 4) normalized += '=';
    var binary = atob(normalized);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder('utf-8').decode(bytes);
  }

  function loadInitialData() {
    try {
      var params = new URLSearchParams(window.location.search);
      var encoded = params.get('data');

      if (!encoded) {
        dataIsValid = false;
        farms = [];
        telegramId = '';
        return;
      }

      var payload = JSON.parse(base64UrlDecode(encoded));

      telegramId = String(payload.telegram_id || '');
      farms = Array.isArray(payload.farms) ? payload.farms : [];

      farms = farms.map(function(farm) {
        return {
          file: String(farm.file || ''),
          row: Number(farm.row) || 0,
          id: String(farm.id || ''),
          castle_name: String(farm.castle_name || ''),
          login: String(farm.login || ''),
          password: '',
          start: String(farm.start || ''),
          end: String(farm.end || ''),
          on_off: Number(farm.on_off) ? 1 : 0,
          oil: Number(farm.oil) || 0,
          steel: Number(farm.steel) || 0,
          sawmill: Number(farm.sawmill) || 0,
          field: Number(farm.field) || 0
        };
      });

      dataIsValid = Boolean(telegramId);
    } catch (error) {
      console.error(error);
      dataIsValid = false;
      farms = [];
      telegramId = '';
    }
  }

  function applyLocale() {
    document.documentElement.lang = lang || 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang || 'en');
    eyebrow.textContent = tr('eyebrow');
    appTitle.textContent = tr('title');
    languageBtn.setAttribute('aria-label', tr('changeLanguage'));
    languageBtn.setAttribute('title', tr('changeLanguage'));
  }

  function showMessage(text, ok) {
    message.className = text ? (ok ? 'success' : 'error') : '';
    message.textContent = text || '';
  }

  function chooseLanguage() {
    appScreen.hidden = true;
    languageScreen.hidden = false;

    languageScreen.innerHTML =
      '<div class="language-heading">' +
        '<span class="language-globe">🌐</span>' +
        '<div><h2>Choose your language</h2>' +
        '<p>Select your language / اختر لغتك</p></div>' +
      '</div>' +
      '<div class="languages">' +
      LANGS.map(function(item) {
        var selected = lang === item.code ? ' selected' : '';
        return '<button type="button" class="language-option' + selected +
          '" data-lang="' + item.code + '">' +
          '<span class="flag">' + item.flag + '</span>' +
          '<span>' + item.name + '</span></button>';
      }).join('') +
      '</div>';

    Array.prototype.forEach.call(
      languageScreen.querySelectorAll('[data-lang]'),
      function(btn) {
        btn.onclick = function() {
          lang = btn.getAttribute('data-lang');
          localStorage.setItem('dfb_lang', lang);
          applyLocale();
          showApp();
        };
      }
    );
  }

  function resource(index, key, label) {
    return '<div class="resource">' +
      '<span class="resource-label">' + label + '</span>' +
      '<button class="step" type="button" data-step="-1" data-key="' + key + '">−</button>' +
      '<output data-value="' + key + '">' + farms[index][key] + '</output>' +
      '<button class="step" type="button" data-step="1" data-key="' + key + '">+</button>' +
      '</div>';
  }

  function render() {
    userInfo.textContent = telegramId
      ? tr('telegramId') + ': ' + telegramId
      : '';

    if (!dataIsValid) {
      farmsRoot.innerHTML = '';
      showMessage(tr('invalidData'), false);
      saveBtn.disabled = true;
      return;
    }

    saveBtn.disabled = false;
    showMessage('', true);

    if (!farms.length) {
      farmsRoot.innerHTML =
        '<div class="panel empty">' +
          '<div class="empty-icon">🏰</div>' +
          '<div>' + tr('none') + '</div>' +
        '</div>';
      return;
    }

    farmsRoot.innerHTML = farms.map(function(farm,index) {
      return '<article class="farm-card" data-index="' + index + '">' +
        '<div class="farm-head">' +
          '<div class="farm-title">' +
            '<h2>🏰 ' + escapeHtml(farm.castle_name || (tr('farm') + ' ' + farm.id)) + '</h2>' +
            '<div class="farm-file">ID: ' + escapeHtml(farm.id) + ' · ' + escapeHtml(farm.login) + '</div>' +
          '</div>' +
          '<button type="button" class="toggle ' +
            (farm.on_off ? 'on' : 'off') +
            '" data-toggle>' +
            (farm.on_off ? tr('on') : tr('off')) +
          '</button>' +
        '</div>' +
        '<div class="account-fields">' +
          '<label class="account-field"><span>' + tr('castleName') + '</span>' +
            '<input type="text" maxlength="200" data-account="castle_name" value="' + escapeHtml(farm.castle_name) + '"></label>' +
          '<label class="account-field"><span>' + tr('email') + '</span>' +
            '<input type="text" maxlength="200" data-account="login" value="' + escapeHtml(farm.login) + '"></label>' +
          '<label class="account-field password-field"><span>' + tr('password') + '</span>' +
            '<div class="password-wrap"><input type="password" maxlength="200" autocomplete="new-password" placeholder="' + escapeHtml(tr('passwordHint')) + '" data-account="password" value="">' +
            '<button type="button" class="password-toggle" data-password-toggle aria-label="' + tr('showPassword') + '">👁️</button></div></label>' +
        '</div>' +
        '<div class="dates">' +
          '<div class="date-box"><span class="date-label">' +
            tr('start') +
            '</span><span class="date-value">' +
            escapeHtml(farm.start) +
          '</span></div>' +
          '<div class="date-box"><span class="date-label">' +
            tr('end') +
            '</span><span class="date-value">' +
            escapeHtml(farm.end) +
          '</span></div>' +
        '</div>' +
        '<div class="resources">' +
          resource(index,'oil','🛢️ ' + tr('oil')) +
          resource(index,'steel','⛓️ ' + tr('steel')) +
          resource(index,'sawmill','🪵 ' + tr('wood')) +
          resource(index,'field','🌾 ' + tr('food')) +
        '</div>' +
        '<div class="total">' +
          '<span>' + tr('total') + '</span>' +
          '<span><b data-total>' + total(farm) + '</b> / 5</span>' +
        '</div>' +
      '</article>';
    }).join('');

    Array.prototype.forEach.call(
      farmsRoot.querySelectorAll('.farm-card'),
      function(card) {
        var index = Number(card.getAttribute('data-index'));

        card.querySelector('[data-toggle]').onclick = function(event) {
          farms[index].on_off = farms[index].on_off ? 0 : 1;
          event.currentTarget.className =
            'toggle ' + (farms[index].on_off ? 'on' : 'off');
          event.currentTarget.textContent =
            farms[index].on_off ? tr('on') : tr('off');
          showMessage('', true);
        };

        Array.prototype.forEach.call(card.querySelectorAll('[data-account]'), function(input) {
          input.oninput = function() {
            farms[index][input.getAttribute('data-account')] = input.value;
            var heading = card.querySelector('.farm-title h2');
            var fileLine = card.querySelector('.farm-file');
            heading.textContent = '🏰 ' + (farms[index].castle_name || (tr('farm') + ' ' + farms[index].id));
            fileLine.textContent = 'ID: ' + farms[index].id + ' · ' + farms[index].login;
            showMessage('', true);
          };
        });

        var passwordToggle = card.querySelector('[data-password-toggle]');
        if (passwordToggle) {
          passwordToggle.onclick = function() {
            var input = card.querySelector('[data-account="password"]');
            input.type = input.type === 'password' ? 'text' : 'password';
          };
        }

        Array.prototype.forEach.call(
          card.querySelectorAll('[data-step]'),
          function(button) {
            button.onclick = function() {
              step(
                index,
                button.getAttribute('data-key'),
                Number(button.getAttribute('data-step')),
                card
              );
            };
          }
        );
      }
    );
  }

  function step(index, key, amount, card) {
    var current = Number(farms[index][key]) || 0;
    var next = Math.max(0, Math.min(5, current + amount));
    var candidate = Object.assign({}, farms[index]);
    candidate[key] = next;

    if (total(candidate) > 5) {
      showMessage(tr('max'), false);
      return;
    }

    farms[index][key] = next;
    card.querySelector('[data-value="' + key + '"]').textContent = next;
    card.querySelector('[data-total]').textContent = total(farms[index]);
    showMessage('', true);
  }

  function showApp() {
    applyLocale();
    languageScreen.hidden = true;
    appScreen.hidden = false;
    saveBtn.textContent = tr('save');
    render();
  }

  function compactFarm(farm) {
    return {
      file: farm.file,
      row: farm.row,
      id: String(farm.id || ''),
      castle_name: String(farm.castle_name || ''),
      login: String(farm.login || ''),
      password: String(farm.password || ''),
      on_off: farm.on_off ? 1 : 0,
      oil: Number(farm.oil) || 0,
      steel: Number(farm.steel) || 0,
      sawmill: Number(farm.sawmill) || 0,
      field: Number(farm.field) || 0
    };
  }

  function save() {
    if (!dataIsValid) {
      showMessage(tr('invalidData'), false);
      return;
    }

    for (var i = 0; i < farms.length; i++) {
      if (total(farms[i]) > 5) {
        showMessage(tr('max'), false);
        return;
      }
    }

    // Re-read Telegram.WebApp at save time because on some mobile clients
    // the SDK becomes available after the page JavaScript has already started.
    tg = getTelegramWebApp();

    if (!tg || typeof tg.sendData !== 'function') {
      showMessage(tr('openTelegram'), false);
      return;
    }

    try {
      tg.ready();
    } catch (readyError) {
      console.error('Telegram WebApp ready() failed:', readyError);
    }

    var payload = {
      action: 'save',
      language: lang || 'en',
      farms: farms.map(compactFarm)
    };

    var json = JSON.stringify(payload);

    if (json.length > 4096) {
      showMessage('Too much data to send. Please contact support.', false);
      return;
    }

    saveBtn.disabled = true;
    saveBtn.textContent = tr('saving');

    try {
      tg.sendData(json);
      showMessage(tr('saved'), true);
    } catch (error) {
      console.error(error);
      saveBtn.disabled = false;
      saveBtn.textContent = tr('save');
      showMessage(error.message || tr('openTelegram'), false);
    }
  }

  loadInitialData();

  saveBtn.onclick = save;
  languageBtn.onclick = chooseLanguage;

  if (lang) {
    showApp();
  } else {
    chooseLanguage();
  }
}());

// Темы и фразы. У каждой темы постоянный id — не меняйте его после начала обучения.
// Каждая фраза: [английский текст, перевод, приблизительное произношение].
const topics = [
  { id: 'airport', icon: '✈️', title: 'Аэропорт', color: '#edf2fb', phrases: [
    ['Where is the check-in desk?', 'Где стойка регистрации?', 'Уэа из зэ чек-ин деск?'],
    ['Here is my passport.', 'Вот мой паспорт.', 'Хиэ из май паспорт.'],
    ['What is my gate number?', 'Какой номер моего выхода на посадку?', 'Уот из май гэйт намбэ?'],
    ['Is the flight delayed?', 'Рейс задерживается?', 'Из зэ флайт дилэйд?'],
    ['Where can I collect my luggage?', 'Где я могу получить багаж?', 'Уэа кэн ай колэкт май лагидж?']
  ]},
  { id: 'hotel', icon: '🏨', title: 'Отель', color: '#f5eef9', phrases: [
    ['I have a reservation.', 'У меня есть бронирование.', 'Ай хэв э рэзэвэйшн.'],
    ['Can I check in, please?', 'Можно зарегистрироваться?', 'Кэн ай чек ин, плиз?'],
    ['Is breakfast included?', 'Завтрак включён?', 'Из брэкфэст инклудид?'],
    ['What time is check-out?', 'Во сколько нужно выехать?', 'Уот тайм из чек-аут?'],
    ['Could I have another towel?', 'Можно ещё одно полотенце?', 'Куд ай хэв эназэ тауэл?']
  ]},
  { id: 'food', icon: '🍽️', title: 'Ресторан и кафе', color: '#fff1e4', phrases: [
    ['A table for two, please.', 'Столик на двоих, пожалуйста.', 'Э тэйбл фо ту, плиз.'],
    ['Can I see the menu?', 'Можно посмотреть меню?', 'Кэн ай си зэ мэнью?'],
    ['I would like a coffee, please.', 'Я хочу кофе, пожалуйста.', 'Ай вуд лайк э кофи, плиз.'],
    ['I am allergic to nuts.', 'У меня аллергия на орехи.', 'Ай эм элёрджик ту натс.'],
    ['Could I have the bill, please?', 'Можно счёт, пожалуйста?', 'Куд ай хэв зэ бил, плиз?']
  ]},
  { id: 'transport', icon: '🚕', title: 'Такси и транспорт', color: '#fff7dc', phrases: [
    ['How much is a ticket?', 'Сколько стоит билет?', 'Хау мач из э тикит?'],
    ['Please take me to this address.', 'Отвезите меня по этому адресу, пожалуйста.', 'Плиз тэйк ми ту зис эдрэс.'],
    ['Does this bus go to the city centre?', 'Этот автобус идёт в центр города?', 'Даз зис бас гоу ту зэ сити сэнтэ?'],
    ['Where is the train station?', 'Где железнодорожный вокзал?', 'Уэа из зэ трэйн стэйшн?'],
    ['Please stop here.', 'Остановитесь здесь, пожалуйста.', 'Плиз стоп хиэ.']
  ]},
  { id: 'directions', icon: '🗺️', title: 'Как спросить дорогу', color: '#eaf3e8', phrases: [
    ['Excuse me, where is the museum?', 'Извините, где музей?', 'Экскьюз ми, уэа из зэ мьюзиэм?'],
    ['Is it far from here?', 'Это далеко отсюда?', 'Из ит фар фром хиэ?'],
    ['Can you show me on the map?', 'Можете показать на карте?', 'Кэн ю шоу ми он зэ мэп?'],
    ['Should I turn left?', 'Мне нужно повернуть налево?', 'Шуд ай тёрн лэфт?'],
    ['Can I walk there?', 'Можно дойти туда пешком?', 'Кэн ай уок зэа?']
  ]},
  { id: 'shopping', icon: '🛍️', title: 'Магазины и покупки', color: '#fbecef', phrases: [
    ['How much does this cost?', 'Сколько это стоит?', 'Хау мач даз зис кост?'],
    ['Can I try this on?', 'Можно это примерить?', 'Кэн ай трай зис он?'],
    ['Do you have a smaller size?', 'У вас есть размер поменьше?', 'Ду ю хэв э смолэ сайз?'],
    ['I am just looking, thank you.', 'Я просто смотрю, спасибо.', 'Ай эм джаст лукинг, сэнк ю.'],
    ['Can I have a receipt?', 'Можно чек?', 'Кэн ай хэв э рисит?']
  ]},
  { id: 'money', icon: '💳', title: 'Деньги и оплата', color: '#e9f1fb', phrases: [
    ['Can I pay by card?', 'Можно оплатить картой?', 'Кэн ай пэй бай кард?'],
    ['Where is the nearest ATM?', 'Где ближайший банкомат?', 'Уэа из зэ ниэрэст эй-ти-эм?'],
    ['Do you accept cash?', 'Вы принимаете наличные?', 'Ду ю эксэпт кэш?'],
    ['What is the exchange rate?', 'Какой обменный курс?', 'Уот из зэ иксчэйндж рэйт?'],
    ['My card is not working.', 'Моя карта не работает.', 'Май кард из нот уёркинг.']
  ]},
  { id: 'health', icon: '🏥', title: 'Аптека и экстренная помощь', color: '#faeeeb', phrases: [
    ['I need a doctor.', 'Мне нужен врач.', 'Ай нид э доктэ.'],
    ['Where is the nearest pharmacy?', 'Где ближайшая аптека?', 'Уэа из зэ ниэрэст фармэси?'],
    ['Please call an ambulance.', 'Вызовите скорую помощь, пожалуйста.', 'Плиз кол эн эмбьюлэнс.'],
    ['I have a headache.', 'У меня болит голова.', 'Ай хэв э хэдэйк.'],
    ['I need help.', 'Мне нужна помощь.', 'Ай нид хэлп.']
  ]},
  { id: 'internet', icon: '📱', title: 'Интернет и связь', color: '#edf0fc', phrases: [
    ['What is the Wi-Fi password?', 'Какой пароль от Wi-Fi?', 'Уот из зэ уай-фай пасуёрд?'],
    ['Is there free Wi-Fi here?', 'Здесь есть бесплатный Wi-Fi?', 'Из зэа фри уай-фай хиэ?'],
    ['I would like a SIM card.', 'Я хочу купить SIM-карту.', 'Ай вуд лайк э сим кард.'],
    ['My internet is not working.', 'У меня не работает интернет.', 'Май интэнэт из нот уёркинг.'],
    ['Can I charge my phone here?', 'Можно здесь зарядить телефон?', 'Кэн ай чардж май фоун хиэ?']
  ]},
  { id: 'basics', icon: '🗣️', title: 'Базовые фразы туриста', color: '#fff4df', phrases: [
    ['Hello! How are you?', 'Здравствуйте! Как ваши дела?', 'Хэлоу! Хау а ю?'],
    ['Thank you very much.', 'Большое спасибо.', 'Сэнк ю вэри мач.'],
    ['I do not understand.', 'Я не понимаю.', 'Ай ду нот андэстэнд.'],
    ['Could you speak more slowly?', 'Не могли бы вы говорить медленнее?', 'Куд ю спик мо слоули?'],
    ['Do you speak Russian?', 'Вы говорите по-русски?', 'Ду ю спик рашн?']
  ]},
  { id: 'activities', icon: '🎟️', title: 'Экскурсии и развлечения', color: '#eeeafa', phrases: [
    ['What time does the tour start?', 'Во сколько начинается экскурсия?', 'Уот тайм даз зэ тур старт?'],
    ['Two tickets, please.', 'Два билета, пожалуйста.', 'Ту тикитс, плиз.'],
    ['Is there an audio guide?', 'Есть ли аудиогид?', 'Из зэа эн одиоу гайд?'],
    ['Can I take photos here?', 'Можно здесь фотографировать?', 'Кэн ай тэйк фоутоуз хиэ?'],
    ['What time do you close?', 'Во сколько вы закрываетесь?', 'Уот тайм ду ю клоуз?']
  ]},
  { id: 'problems', icon: '🧳', title: 'Проблемы в путешествии', color: '#e9f3f1', phrases: [
    ['I have lost my passport.', 'Я потерял паспорт.', 'Ай хэв лост май паспорт.'],
    ['My luggage is missing.', 'Мой багаж пропал.', 'Май лагидж из мисинг.'],
    ['I missed my flight.', 'Я опоздал на рейс.', 'Ай мист май флайт.'],
    ['I need to contact my embassy.', 'Мне нужно связаться с посольством.', 'Ай нид ту контакт май эмбэси.'],
    ['Could you help me, please?', 'Не могли бы вы мне помочь?', 'Куд ю хэлп ми, плиз?']
  ]}
];

const storageKey = 'english-for-travel-progress-v1';
const totalPhrases = topics.reduce((sum, topic) => sum + topic.phrases.length, 0);
const validPhraseIds = new Set(topics.flatMap(topic => topic.phrases.map((phrase, index) => `${topic.id}-${index}`)));
let learnedPhrases = new Set();
let activeFilter = 'all';
let currentTopic = null;
let reviewMode = false;
let reviewPhraseIds = [];
let noticeTimer;
const lesson = document.getElementById('lesson');
const searchInput = document.getElementById('search');

// Хранилище содержит только id изученных фраз. Остальные данные остаются в коде.
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (!Array.isArray(saved)) throw new Error('Invalid saved progress');
    learnedPhrases = new Set(saved.filter(id => validPhraseIds.has(id)));
  } catch (error) {
    showNotice('Не удалось прочитать прогресс. Можно продолжать учиться; сохранение может быть недоступно.');
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...learnedPhrases]));
  } catch (error) {
    showNotice('Браузер не разрешил сохранить прогресс. Он сохранится только до закрытия страницы.');
  }
}

function showNotice(message) {
  const notice = document.getElementById('notice');
  notice.textContent = message;
  notice.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { notice.hidden = true; }, 7000);
}

function getLearnedCount(topic) {
  return topic.phrases.filter((phrase, index) => learnedPhrases.has(`${topic.id}-${index}`)).length;
}

// Отрисовка карточек и общего прогресса с учётом поиска и выбранного фильтра.
function renderTopics() {
  document.getElementById('overall-percent').textContent = `${Math.round(learnedPhrases.size / totalPhrases * 100)}%`;
  document.getElementById('overall-count').textContent = `${learnedPhrases.size} из ${totalPhrases} фраз изучено`;
  document.getElementById('overall-progress').max = totalPhrases;
  document.getElementById('overall-progress').value = learnedPhrases.size;
  const query = searchInput.value.trim().toLocaleLowerCase('ru');
  const filteredTopics = topics.filter(topic => {
    const count = getLearnedCount(topic);
    const matchesFilter = activeFilter === 'all' || (activeFilter === 'new' && count === 0) || (activeFilter === 'started' && count > 0 && count < topic.phrases.length) || (activeFilter === 'done' && count === topic.phrases.length);
    return matchesFilter && topic.title.toLocaleLowerCase('ru').includes(query);
  });
  document.getElementById('topics').innerHTML = filteredTopics.map(topic => {
    const count = getLearnedCount(topic);
    const percent = Math.round(count / topic.phrases.length * 100);
    return `<article class="topic-card"><div class="card-top"><span class="topic-icon" style="--icon-bg:${topic.color}" aria-hidden="true">${topic.icon}</span><span class="topic-number">${String(topics.indexOf(topic) + 1).padStart(2, '0')} / 12</span></div><h3>${topic.title}</h3><div class="card-meta"><span>${count} из ${topic.phrases.length} фраз изучено</span><strong>${percent}%</strong></div><progress max="${topic.phrases.length}" value="${count}" aria-label="Прогресс: ${topic.title}"></progress><div class="card-actions"><button class="primary" data-topic="${topic.id}" data-mode="learn" aria-label="Учить: ${topic.title}">Учить <span aria-hidden="true">↗</span></button><button class="secondary" data-topic="${topic.id}" data-mode="review" aria-label="Повторить: ${topic.title}">Повторить</button></div></article>`;
  }).join('');
  document.getElementById('empty').hidden = filteredTopics.length > 0;
}

// В режиме повторения показываем изученные фразы; для новой темы — все пять.
function openLesson(topicId, mode) {
  currentTopic = topics.find(topic => topic.id === topicId);
  reviewMode = mode === 'review';
  reviewPhraseIds = currentTopic.phrases.map((phrase, index) => `${currentTopic.id}-${index}`).filter(id => learnedPhrases.has(id));
  renderLesson();
  lesson.showModal();
  lesson.scrollTop = 0;
}

function renderLesson() {
  const count = getLearnedCount(currentTopic);
  document.getElementById('lesson-title').textContent = `${currentTopic.icon} ${currentTopic.title}`;
  document.getElementById('lesson-mode').textContent = reviewMode ? 'ПОВТОРЕНИЕ' : 'ИЗУЧЕНИЕ';
  document.getElementById('lesson-description').textContent = `${count} из ${currentTopic.phrases.length} фраз изучено. ` + (reviewMode ? (reviewPhraseIds.length ? 'Прочитайте знакомые фразы вслух. Если забыли фразу, снимите отметку «Изучено».' : 'Изученных фраз пока нет. Начните с этих фраз.') : 'Прочитайте фразу вслух и отметьте, когда запомните.');
  document.getElementById('lesson-progress').max = currentTopic.phrases.length;
  document.getElementById('lesson-progress').value = count;
  document.getElementById('phrases').innerHTML = currentTopic.phrases.map((phrase, index) => {
    const id = `${currentTopic.id}-${index}`;
    if (reviewMode && reviewPhraseIds.length && !reviewPhraseIds.includes(id)) return '';
    const learned = learnedPhrases.has(id);
    return `<article class="phrase ${learned ? 'learned' : ''}"><h3 lang="en">${phrase[0]}</h3><p>${phrase[1]}</p><p class="pronunciation">${phrase[2]}</p><audio controls preload="none" src="audio/${id}.wav" aria-label="Английское произношение: ${phrase[0]}"></audio><button class="${learned ? 'secondary' : 'primary'}" data-phrase="${id}" aria-pressed="${learned}">${learned ? '✓ Изучено' : 'Изучено'}</button></article>`;
  }).join('');
}

// События интерфейса: делегирование позволяет не назначать обработчик каждой карточке.
document.getElementById('topics').addEventListener('click', event => {
  const button = event.target.closest('[data-topic]');
  if (button) openLesson(button.dataset.topic, button.dataset.mode);
});
document.getElementById('phrases').addEventListener('click', event => {
  const button = event.target.closest('[data-phrase]');
  if (!button) return;
  const id = button.dataset.phrase;
  if (learnedPhrases.has(id)) learnedPhrases.delete(id);
  else learnedPhrases.add(id);
  saveProgress();
  renderTopics();
  renderLesson();
  document.querySelector(`[data-phrase="${id}"]`).focus({ preventScroll: true });
});
// Локальные записи: одновременно играет только одна фраза.
document.getElementById('phrases').addEventListener('play', event => {
  document.querySelectorAll('#phrases audio').forEach(audio => {
    if (audio !== event.target) audio.pause();
  });
}, true);
document.getElementById('phrases').addEventListener('error', event => {
  if (event.target.tagName === 'AUDIO') showNotice('Не удалось открыть запись. Убедитесь, что папка audio находится рядом с index.html.');
}, true);
lesson.addEventListener('close', () => {
  document.querySelectorAll('#phrases audio').forEach(audio => audio.pause());
});
document.getElementById('back').addEventListener('click', () => lesson.close());
searchInput.addEventListener('input', renderTopics);
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(filter => {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    renderTopics();
  });
});
document.getElementById('show-all').addEventListener('click', () => {
  searchInput.value = '';
  document.querySelector('[data-filter="all"]').click();
});
document.getElementById('reset').addEventListener('click', () => {
  if (!confirm('Сбросить весь прогресс? Все отметки «Изучено» будут удалены. Это действие нельзя отменить.')) return;
  learnedPhrases.clear();
  saveProgress();
  renderTopics();
});

loadProgress();
renderTopics();


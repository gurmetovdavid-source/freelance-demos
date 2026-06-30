# Freelance Demos Portfolio

Репозиторий с демо-проектами для фриланс-портфолио. Все проекты основаны на реальных заказах с фриланс-площадок и выполнены в продакшен-качестве.

## Проекты

| Проект | Описание | Стек | Статус |
|---|---|---|---|
| [`dental-clinic-site`](./dental-clinic-site) | Лендинг стоматологической клиники | HTML, CSS, JS | ✅ Готов |
| [`digital-service-landing`](./digital-service-landing) | Лендинг digital-услуги с чекаут-формой | HTML, CSS, JS | ✅ Готов |
| [`telegram-escrow-bot`](./telegram-escrow-bot) | Telegram-бот для безопасных сделок | Python, aiogram | ✅ Готов |
| [`design-system`](./design-system) | Общая дизайн-система | CSS | ✅ Готов |

## Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/gurmetovdavid-source/freelance-demos.git
cd freelance-demos

# Запустить лендинг стоматологии
python -m http.server 8001 --directory dental-clinic-site

# Запустить лендинг digital-услуги
python -m http.server 8002 --directory digital-service-landing

# Запустить Telegram-бота
cd telegram-escrow-bot
cp .env.example .env
pip install -r requirements.txt
python bot.py
```

## Деплой

- Статические лендинги можно развернуть на GitHub Pages, Netlify, Cloudflare Pages, Vercel.
- Telegram-бот разворачивается на VPS или облачном сервере.

## Контакты

- GitHub: [@gurmetovdavid-source](https://github.com/gurmetovdavid-source)

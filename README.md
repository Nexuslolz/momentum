# Momentum
### Ссылка на прототип:
https://nexuslolz.github.io/momentum/

## Preview

<img src='assets/img/momentum.gif' width='350'>

## Описание

Аналог браузерного расширения Momentum.

В проекте реализовано:
- Отображение текущего времени и даты
- Именное приветствие
- Кастомизированный аудиоплеер, с возможностью:
     - Отследить прогресс воспроизведения посекундно
     - Переключить трек
     - Поставить воспроизведение на паузу
     - Отрегулировать или включить/выключить громкость
     - Перемотать трек на необходимый момент
     - Отображения текущего трека и целого списка
 - Сборник цитат с возможностью обновления текущей отображаемой цитаты на другую
 - ToDo-лист, с возможностью:
      - Обозначения сделанного и несделанного
      - Очистки списка
      - Добавления новых дел
  - Прогноз погоды в введенном в поле городе
      - Отображение ошибки при некорректном вводе
  - Смена фонового изображения в виде слайдера
  - Пользовательские настройки, которые имеют:
      - Перевод приложения на русский и английский язык
      - Выбор API источника фоновых изображений
      - Выбор тега для поиска фоновых изображений
      - Включение/выключение отображения отдельных функций

## Особенности проекта

- Кроссбраузерная, семантическая верстка
- Приложение адаптировано под мобильные устройства
- Введенные город, имя, список дел, выбранные настройки сохраняются в local storage и, соответственно, сохраняются после перезагрузки страницы и браузера
- Различная плавная анимация смены фонового изображения
- Фоновое изображение не отрисовывается пока полностью не загружено, что исключает отображение незагруженных, пустых фонов

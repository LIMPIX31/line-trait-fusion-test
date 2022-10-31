# Тестовое задание :]

Копирование и использование кода из этого тестового задания ограничено лицензией **GPLv3**.

![изображение](https://user-images.githubusercontent.com/81296950/199096963-56d00789-92f6-4c0d-a4e9-e4fbef232bdc.png)

# Оригинальный текст задания
Описание

Цель задания: продемонстрировать навыки разработчика. Главное - чистый и читабельный код, а также работа с данными.
Задание нужно выполнить, используя один из следующих фреймворков:

* React
* MithrilJS
* Angular

Язык программирования: TypeScript/JavaScript ✅
Стили: CSS/SASS/SCSS

Требуется создать веб-приложение (SPA), при помощи которого пользователь может редактировать своего персонажа в абстрактной RPG-игре. Результат должен быть предоставлен в виде ссылки на github-репозиторий. Ссылку можно выслать на адрес esperantess@gmail.com

MVP:
* Пользователь может задать и изменить имя своего персонажа; ✅
* Пользователь может задать и изменять базовые параметры своего персонажа ✅
* Базовые параметры: Сила, Ловкость, Интелект, Харизма ✅
* По умолчанию каждый параметр равен 0 ✅
* У персонажа есть параметры, которые рассчитываются на основе базовых: 
  * Жизненная сила: Рассчитывается как 3 + Сила. Когда персонаж получает Урон, теряется одна единица жизненной силы. Должна быть возможность получить урон ✅
  * Уклонение: 10 + Ловкость ✅
  * Энергичность: Ловкость + Интелект ✅
* У персонажа есть набор скиллов, которые можно тренировать: ✅
* У скиллов есть уровни:
* Уровень 0: Нетренированный 
* Уровень 1: Новичок
* Уровень 2: Ученик
* Уровень 3: Адепт
* Уровень 4: Эксперт
* Уровень 5: Мастер
* Каждый скилл привязан к базовому параметру. Уровень скилла не может быть выше, чем значение базового параметра. Например, если Сила = 3, Уровень Атаки не может подняться выше 3. ✅
* Список базовых параметров и соответствующих скиллов:
  * Сила
    * Атака ✅
  * Ловкость
    * Стелс ✅
    * Стрельба из лука ✅
  * Интеллект
    * Обучаемость ✅
    * Выживание ✅
    * Медицина ✅
  * Харизма
    * Запугивание ✅
    * Проницательность ✅
    * Внешний вид ✅
    * Манипулирование ✅

* Пользователь может экспортировать/сохранить своего персонажа ✅
* Пользователь может импортировать/загрузить своего персонажа ✅
* UI должен быть простым и понятным ✅

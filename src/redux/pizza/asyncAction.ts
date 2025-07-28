// export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
//   "pizza/fetchPizzasStatus",
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     const { data } = await axios.get<Pizza[]>(
//       `https://68874410071f195ca97fff20.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
//     );
//     return data;
//   }

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";

// );
export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;

    // Используем тестовые данные, так как MockAPI недоступен
    const testPizzas: Pizza[] = [
      {
        id: "1",
        title: "Пепперони Фреш с перцем",
        price: 803,
        imageUrl:
          "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif",
        types: [0, 1],
        sizes: [26, 30, 40],
        rating: 4.5,
      },
      {
        id: "2",
        title: "Сырная",
        price: 245,
        imageUrl:
          "https://media.dodostatic.net/image/r:292x292/0197d0d4283575589ff0032eadd7cb68.avif",
        types: [0],
        sizes: [26, 30, 40],
        rating: 4.2,
      },
      {
        id: "3",
        title: "Цыпленок барбекю",
        price: 295,
        imageUrl:
          "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
        types: [0, 1],
        sizes: [26, 30, 40],
        rating: 4.7,
      },
      {
        id: "4",
        title: "Креветки по-азиатски",
        price: 350,
        imageUrl:
          "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
        types: [0, 1],
        sizes: [26, 30, 40],
        rating: 4.8,
      },
    ];

    // Имитируем задержку для реалистичности
    await new Promise((resolve) => setTimeout(resolve, 800));

    return testPizzas;

    // Когда MockAPI заработает, раскомментируйте это:
    /*
    try {
      // Исправленный URL - убраны лишние символы
      const baseUrl = 'https://68874410071f195ca97fff20.mockapi.io/items';
      const url = `${baseUrl}?page=${currentPage}&limit=4${category ? `&category=${category}` : ''}&sortBy=${sortBy}&order=${order}${search ? `&${search}` : ''}`;
      
      console.log('URL запроса:', url);
      const { data } = await axios.get<Pizza[]>(url);
      return data;
    } catch (error) {
      console.error('Ошибка API:', error);
      throw error;
    }
    */
  }
);

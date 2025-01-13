
const HomePage = () => {
  return (
    <div className="text-white p-6 flex flex-col gap-4 items-center justify-center">
    <h1 className="text-orchid text-3xl font-bold">
      Заголовок «Orchid»
    </h1>
    <p>
      Текст на чёрном фоне (стандартный белый). 
      <span className="text-coral"> Слово «Coral»</span> 
      добавляет контраст.
    </p>
    <button className="bg-orchid text-black px-4 py-2 rounded">
      Кнопка «Orchid»
    </button>
    <button className="bg-coral text-black px-4 py-2 rounded">
      Кнопка «Coral»
    </button>
  </div>
  )
}

export default HomePage